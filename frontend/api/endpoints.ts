/**
 * API Endpoint Constants
 *
 * Centralized location for all API endpoints.
 * TODO: Replace BASE_URL with actual backend URL from environment variables
 */

// Base URL for API - TODO: Move to environment variable
export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

/**
 * Authentication & User Endpoints
 */
export const AUTH_ENDPOINTS = {
  LOGIN: `${BASE_URL}/auth/login`,
  LOGOUT: `${BASE_URL}/auth/logout`,
  REFRESH: `${BASE_URL}/auth/refresh`,
  PROFILE: `${BASE_URL}/auth/profile`,
} as const;

/**
 * Home Dashboard Endpoints
 */
export const HOME_ENDPOINTS = {
  KPI_DATA: `${BASE_URL}/dashboard/kpi`,
  URGENT_APPROVALS: `${BASE_URL}/dashboard/urgent-approvals`,
  RECENT_ACTIVITY: `${BASE_URL}/dashboard/recent-activity`,
} as const;

/**
 * Finanzas (Finance) Endpoints
 */
export const FINANZAS_ENDPOINTS = {
  // Receivables (Cuentas por Cobrar)
  RECEIVABLES: `${BASE_URL}/finanzas/receivables`,
  COMMISSION_QUEUE: `${BASE_URL}/finanzas/commission-queue`,
  APPROVE_COMMISSION: `${BASE_URL}/finanzas/commission-queue/approve`,

  // Payables (Cuentas por Pagar)
  PAYABLES: `${BASE_URL}/finanzas/payables`,
  DEBTORS_LIST: `${BASE_URL}/finanzas/debtors`,
  NOTIFY_DEBTOR: `${BASE_URL}/finanzas/debtors/notify`,
  FIRM_EXPENSES: `${BASE_URL}/finanzas/firm-expenses`,

  // Reports (Reportes)
  REPORTS: `${BASE_URL}/finanzas/reports`,
  GENERATE_REPORT: `${BASE_URL}/finanzas/reports/generate`,
} as const;

/**
 * Estadisticas (Statistics) Endpoints
 */
export const ESTADISTICAS_ENDPOINTS = {
  OVERVIEW: `${BASE_URL}/estadisticas/overview`,
  CLIENTES: `${BASE_URL}/estadisticas/clientes`,
  HONORARIOS: `${BASE_URL}/estadisticas/honorarios`,
  RENDIMIENTO_EMPLEADOS: `${BASE_URL}/estadisticas/rendimiento-empleados`,
  PROGRESO_CASOS: `${BASE_URL}/estadisticas/progreso-casos`,
} as const;

/**
 * Usuarios (Users) Endpoints
 */
export const USUARIOS_ENDPOINTS = {
  // Auxiliares
  AUXILIARES: `${BASE_URL}/usuarios/auxiliares`,
  CREATE_AUXILIAR: `${BASE_URL}/usuarios/auxiliares`,
  UPDATE_AUXILIAR: (id: string) => `${BASE_URL}/usuarios/auxiliares/${id}`,
  DELETE_AUXILIAR: (id: string) => `${BASE_URL}/usuarios/auxiliares/${id}`,
  RESET_PASSWORD: (id: string) => `${BASE_URL}/usuarios/auxiliares/${id}/reset-password`,

  // Administradores
  ADMINS: `${BASE_URL}/usuarios/admins`,
  CREATE_ADMIN: `${BASE_URL}/usuarios/admins`,
  UPDATE_ADMIN: (id: string) => `${BASE_URL}/usuarios/admins/${id}`,
  DELETE_ADMIN: (id: string) => `${BASE_URL}/usuarios/admins/${id}`,
  REVOKE_ACCESS: (id: string) => `${BASE_URL}/usuarios/admins/${id}/revoke-access`,

  // Jefes (Chiefs)
  JEFES: `${BASE_URL}/usuarios/jefes`,
  CREATE_JEFE: `${BASE_URL}/usuarios/jefes`,
  UPDATE_JEFE: (id: string) => `${BASE_URL}/usuarios/jefes/${id}`,
  DELETE_JEFE: (id: string) => `${BASE_URL}/usuarios/jefes/${id}`,
  REASSIGN_AUXILIARES: (id: string) => `${BASE_URL}/usuarios/jefes/${id}/reassign`,

  // Available Chiefs for assignment
  AVAILABLE_CHIEFS: `${BASE_URL}/usuarios/jefes/available`,
} as const;

/**
 * Clientes (Clients) Endpoints
 */
export const CLIENTES_ENDPOINTS = {
  LIST: `${BASE_URL}/clientes`,
  GET: (id: string) => `${BASE_URL}/clientes/${id}`,
  CREATE: `${BASE_URL}/clientes`,
  UPDATE: (id: string) => `${BASE_URL}/clientes/${id}`,
  DELETE: (id: string) => `${BASE_URL}/clientes/${id}`,
  PROFILE: (id: string) => `${BASE_URL}/clientes/${id}/profile`,
  CASES: (id: string) => `${BASE_URL}/clientes/${id}/cases`,
  PAYMENTS: (id: string) => `${BASE_URL}/clientes/${id}/payments`,
  DOCUMENTS: (id: string) => `${BASE_URL}/clientes/${id}/documents`,
} as const;

/**
 * Comunicacion (Communication) Endpoints
 */
export const COMUNICACION_ENDPOINTS = {
  BROADCAST: `${BASE_URL}/comunicacion/broadcast`,
  ANNOUNCEMENTS: `${BASE_URL}/comunicacion/announcements`,
  CREATE_ANNOUNCEMENT: `${BASE_URL}/comunicacion/announcements`,
} as const;

/**
 * Calendario (Calendar) Endpoints
 */
export const CALENDARIO_ENDPOINTS = {
  EVENTS: `${BASE_URL}/calendario/events`,
  CREATE_EVENT: `${BASE_URL}/calendario/events`,
  UPDATE_EVENT: (id: string) => `${BASE_URL}/calendario/events/${id}`,
  DELETE_EVENT: (id: string) => `${BASE_URL}/calendario/events/${id}`,
} as const;

/**
 * Mensajes (Messages) Endpoints
 */
export const MENSAJES_ENDPOINTS = {
  CONVERSATIONS: `${BASE_URL}/mensajes/conversations`,
  MESSAGES: (conversationId: string) => `${BASE_URL}/mensajes/conversations/${conversationId}/messages`,
  SEND_MESSAGE: (conversationId: string) => `${BASE_URL}/mensajes/conversations/${conversationId}/messages`,
  MARK_READ: (conversationId: string) => `${BASE_URL}/mensajes/conversations/${conversationId}/mark-read`,
  SEARCH: `${BASE_URL}/mensajes/search`,
} as const;

/**
 * Notifications Endpoints
 */
export const NOTIFICATIONS_ENDPOINTS = {
  LIST: `${BASE_URL}/notifications`,
  MARK_READ: (id: string) => `${BASE_URL}/notifications/${id}/read`,
  MARK_ALL_READ: `${BASE_URL}/notifications/mark-all-read`,
  DELETE: (id: string) => `${BASE_URL}/notifications/${id}`,
} as const;

/**
 * AI Assistant Endpoints
 */
export const AI_ENDPOINTS = {
  QUERY: `${BASE_URL}/ai/query`,
  GENERATE_REPORT: `${BASE_URL}/ai/generate-report`,
} as const;
