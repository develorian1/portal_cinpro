/**
 * useMutation Hook
 *
 * Custom hook for data mutations (POST, PUT, PATCH, DELETE) with loading and error states
 */

import { useState, useCallback } from 'react';
import { apiClient, APIError } from '../client';
import { invalidateQuery } from './useQuery';

export interface UseMutationOptions<TData, TVariables> {
  onSuccess?: (data: TData, variables: TVariables) => void;
  onError?: (error: Error, variables: TVariables) => void;
  onSettled?: (data: TData | null, error: Error | null, variables: TVariables) => void;
  invalidateQueries?: string[]; // Query keys to invalidate on success
  requiresAuth?: boolean;
}

export interface UseMutationResult<TData, TVariables> {
  mutate: (variables: TVariables) => Promise<TData>;
  mutateAsync: (variables: TVariables) => Promise<TData>;
  data: TData | null;
  error: Error | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  reset: () => void;
}

/**
 * useMutation Hook
 *
 * @param endpoint - API endpoint (can be a function that takes variables)
 * @param method - HTTP method (POST, PUT, PATCH, DELETE)
 * @param options - Mutation options
 *
 * @example
 * const createAuxiliar = useMutation(
 *   USUARIOS_ENDPOINTS.CREATE_AUXILIAR,
 *   'POST',
 *   {
 *     onSuccess: () => toast.success('Auxiliar created'),
 *     invalidateQueries: ['auxiliares-list'],
 *   }
 * );
 *
 * // Use it
 * await createAuxiliar.mutate({ name: 'John', email: 'john@example.com' });
 */
export function useMutation<TData = unknown, TVariables = unknown>(
  endpoint: string | ((variables: TVariables) => string),
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'POST',
  options: UseMutationOptions<TData, TVariables> = {}
): UseMutationResult<TData, TVariables> {
  const {
    onSuccess,
    onError,
    onSettled,
    invalidateQueries = [],
    requiresAuth = true,
  } = options;

  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setIsLoading(false);
  }, []);

  const mutateAsync = useCallback(
    async (variables: TVariables): Promise<TData> => {
      setIsLoading(true);
      setError(null);

      try {
        const url = typeof endpoint === 'function' ? endpoint(variables) : endpoint;

        const result = await apiClient<TData>(url, {
          method,
          body: method !== 'DELETE' ? JSON.stringify(variables) : undefined,
          requiresAuth,
        });

        setData(result);

        // Invalidate related queries
        if (invalidateQueries.length > 0) {
          invalidateQueries.forEach((key) => invalidateQuery(key));
        }

        if (onSuccess) {
          onSuccess(result, variables);
        }

        if (onSettled) {
          onSettled(result, null, variables);
        }

        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);

        if (onError) {
          onError(error, variables);
        }

        if (onSettled) {
          onSettled(null, error, variables);
        }

        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [endpoint, method, requiresAuth, invalidateQueries, onSuccess, onError, onSettled]
  );

  const mutate = useCallback(
    async (variables: TVariables): Promise<TData> => {
      try {
        return await mutateAsync(variables);
      } catch (error) {
        // Error is already handled in mutateAsync
        // Re-throw for caller to handle if needed
        throw error;
      }
    },
    [mutateAsync]
  );

  return {
    mutate,
    mutateAsync,
    data,
    error,
    isLoading,
    isError: !!error,
    isSuccess: !!data && !error,
    reset,
  };
}
