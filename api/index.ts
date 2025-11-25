/**
 * API Module - Main Export
 *
 * Centralized exports for all API-related functionality
 */

// Client
export { api, apiClient, APIError, auth } from './client';

// Endpoints
export * from './endpoints';

// Hooks
export { useQuery, invalidateQuery, clearQueryCache } from './hooks/useQuery';
export type { UseQueryOptions, UseQueryResult } from './hooks/useQuery';

export { useMutation } from './hooks/useMutation';
export type { UseMutationOptions, UseMutationResult } from './hooks/useMutation';

// Types
export * from './types/responses';
