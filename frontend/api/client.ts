/**
 * API Client
 *
 * Centralized fetch wrapper with error handling, authentication, and logging
 */

import { BASE_URL } from './endpoints';

export class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string,
    public data?: unknown
  ) {
    super(message);
    this.name = 'APIError';
  }
}

interface RequestOptions extends RequestInit {
  requiresAuth?: boolean;
  timeout?: number;
}

/**
 * Get authentication token from storage
 * TODO: Replace with actual auth token retrieval from secure storage
 */
function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('auth_token');
}

/**
 * Handle API errors and convert to APIError
 */
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let errorData: unknown;
    try {
      errorData = await response.json();
    } catch {
      errorData = await response.text();
    }

    const message =
      (errorData as { message?: string })?.message ||
      `API Error: ${response.status} ${response.statusText}`;

    throw new APIError(message, response.status, response.statusText, errorData);
  }

  // Handle empty responses (204 No Content)
  if (response.status === 204) {
    return undefined as T;
  }

  try {
    return await response.json();
  } catch (error) {
    throw new Error('Failed to parse JSON response');
  }
}

/**
 * Main API client function
 */
export async function apiClient<T = unknown>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const {
    requiresAuth = true,
    timeout = 30000,
    headers: customHeaders = {},
    ...fetchOptions
  } = options;

  // Build headers
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };

  // Add authentication if required
  if (requiresAuth) {
    const token = getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    } else {
      // TODO: Redirect to login or handle unauthenticated state
      console.warn('No auth token found for authenticated request');
    }
  }

  // Create abort controller for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(endpoint, {
      ...fetchOptions,
      headers,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return await handleResponse<T>(response);
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof APIError) {
      // Log API errors
      console.error('API Error:', {
        endpoint,
        status: error.status,
        message: error.message,
        data: error.data,
      });

      // Handle specific status codes
      if (error.status === 401) {
        // TODO: Handle unauthorized - redirect to login, refresh token, etc.
        console.warn('Unauthorized request - token may be expired');
      }

      throw error;
    }

    if ((error as Error).name === 'AbortError') {
      throw new Error(`Request timeout after ${timeout}ms`);
    }

    // Handle network errors (fetch failures, CORS, etc.)
    const errorMessage = error instanceof Error ? error.message : String(error);
    const isNetworkError = 
      error instanceof TypeError && 
      (errorMessage.includes('Failed to fetch') || 
       errorMessage.includes('NetworkError') ||
       errorMessage.includes('Network request failed'));

    if (isNetworkError) {
      // Provide more helpful error message for network failures
      const friendlyMessage = `Unable to connect to the server. Please check that the backend is running at ${endpoint.split('/api')[0] || 'the configured URL'}.`;
      console.warn('Network error:', {
        endpoint,
        message: errorMessage,
        hint: 'This usually means the backend server is not running or not accessible.',
      });
      throw new Error(friendlyMessage);
    }

    // Other unknown errors
    console.error('Unknown error:', {
      endpoint,
      error,
      errorType: error instanceof Error ? error.constructor.name : typeof error,
    });
    throw new Error(errorMessage || 'An unexpected error occurred');
  }
}

/**
 * Convenience methods for common HTTP verbs
 */

export const api = {
  get: <T = unknown>(endpoint: string, options?: RequestOptions) =>
    apiClient<T>(endpoint, { ...options, method: 'GET' }),

  post: <T = unknown>(endpoint: string, data?: unknown, options?: RequestOptions) =>
    apiClient<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    }),

  put: <T = unknown>(endpoint: string, data?: unknown, options?: RequestOptions) =>
    apiClient<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    }),

  patch: <T = unknown>(endpoint: string, data?: unknown, options?: RequestOptions) =>
    apiClient<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    }),

  delete: <T = unknown>(endpoint: string, options?: RequestOptions) =>
    apiClient<T>(endpoint, { ...options, method: 'DELETE' }),
};

/**
 * Token management utilities
 */
export const auth = {
  setToken: (token: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token);
    }
  },

  removeToken: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
  },

  getToken: getAuthToken,
};
