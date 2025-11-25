/**
 * useQuery Hook
 *
 * Custom hook for data fetching with loading, error, and caching states
 * Similar pattern to React Query / SWR but simplified for this project
 */

import { useState, useEffect, useCallback } from 'react';
import { apiClient, APIError } from '../client';

export interface UseQueryOptions<T> {
  enabled?: boolean;
  refetchOnMount?: boolean;
  refetchInterval?: number;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  requiresAuth?: boolean;
}

export interface UseQueryResult<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  refetch: () => Promise<void>;
}

/**
 * Simple in-memory cache
 * TODO: Consider using a more sophisticated caching strategy
 */
const queryCache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_TIME = 5 * 60 * 1000; // 5 minutes

function getCachedData<T>(key: string): T | null {
  const cached = queryCache.get(key);
  if (!cached) return null;

  const isExpired = Date.now() - cached.timestamp > CACHE_TIME;
  if (isExpired) {
    queryCache.delete(key);
    return null;
  }

  return cached.data as T;
}

function setCachedData(key: string, data: unknown): void {
  queryCache.set(key, {
    data,
    timestamp: Date.now(),
  });
}

/**
 * useQuery Hook
 *
 * @param queryKey - Unique key for this query (used for caching)
 * @param endpoint - API endpoint to fetch from
 * @param options - Query options
 *
 * @example
 * const { data, isLoading, error, refetch } = useQuery(
 *   'kpi-data',
 *   HOME_ENDPOINTS.KPI_DATA
 * );
 */
export function useQuery<T>(
  queryKey: string,
  endpoint: string,
  options: UseQueryOptions<T> = {}
): UseQueryResult<T> {
  const {
    enabled = true,
    refetchOnMount = true,
    refetchInterval,
    onSuccess,
    onError,
    requiresAuth = true,
  } = options;

  const [data, setData] = useState<T | null>(() => getCachedData<T>(queryKey));
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(!data && enabled);

  const fetchData = useCallback(async () => {
    if (!enabled) return;

    try {
      setIsLoading(true);
      setError(null);

      const result = await apiClient<T>(endpoint, {
        method: 'GET',
        requiresAuth,
      });

      setData(result);
      setCachedData(queryKey, result);

      if (onSuccess) {
        onSuccess(result);
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);

      if (onError) {
        onError(error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [endpoint, enabled, queryKey, onSuccess, onError, requiresAuth]);

  // Initial fetch
  useEffect(() => {
    if (enabled && refetchOnMount && !data) {
      fetchData();
    }
  }, [enabled, refetchOnMount, fetchData, data]);

  // Polling / refetch interval
  useEffect(() => {
    if (!enabled || !refetchInterval) return;

    const intervalId = setInterval(fetchData, refetchInterval);
    return () => clearInterval(intervalId);
  }, [enabled, refetchInterval, fetchData]);

  return {
    data,
    error,
    isLoading,
    isError: !!error,
    isSuccess: !!data && !error,
    refetch: fetchData,
  };
}

/**
 * Invalidate query cache
 */
export function invalidateQuery(queryKey: string): void {
  queryCache.delete(queryKey);
}

/**
 * Clear all cached queries
 */
export function clearQueryCache(): void {
  queryCache.clear();
}
