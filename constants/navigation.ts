/**
 * Navigation Constants
 *
 * Centralized constants for navigation item IDs
 * Replaces magic strings throughout the application
 */

/**
 * Main Navigation Items
 */
export const NAV_ITEMS = {
  HOME: 'home',
  FINANZAS: 'finanzas',
  ESTADISTICAS: 'estadisticas',
  USUARIOS: 'usuarios',
  CLIENTES: 'clientes',
  COMUNICACION: 'comunicacion',
  CALENDARIO: 'calendario',
  MENSAJES: 'mensajes',
} as const;

/**
 * Finanzas Sub-Navigation
 */
export const FINANZAS_ITEMS = {
  RECEIVABLES: 'finanzas-receivables',
  PAYABLES: 'finanzas-payables',
  REPORTS: 'finanzas-reports',
} as const;

/**
 * Estadisticas Sub-Navigation
 */
export const ESTADISTICAS_ITEMS = {
  OVERVIEW: 'estadisticas-overview',
  CLIENTES: 'estadisticas-clientes',
  HONORARIOS: 'estadisticas-honorarios',
  RENDIMIENTO: 'estadisticas-rendimiento',
  PROGRESO: 'estadisticas-progreso',
} as const;

/**
 * Usuarios Sub-Navigation
 */
export const USUARIOS_ITEMS = {
  AUXILIARES: 'usuarios-auxiliares',
  ADMINS: 'usuarios-admins',
  JEFES: 'usuarios-jefes',
} as const;

/**
 * All navigation items (for type checking)
 */
export type NavigationItem =
  | (typeof NAV_ITEMS)[keyof typeof NAV_ITEMS]
  | (typeof FINANZAS_ITEMS)[keyof typeof FINANZAS_ITEMS]
  | (typeof ESTADISTICAS_ITEMS)[keyof typeof ESTADISTICAS_ITEMS]
  | (typeof USUARIOS_ITEMS)[keyof typeof USUARIOS_ITEMS];

/**
 * Helper function to check if a navigation item is active
 */
export function isNavItemActive(currentItem: string, navItemId: string): boolean {
  // Exact match
  if (currentItem === navItemId) {
    return true;
  }

  // Check if current item is a sub-item of nav item
  if (currentItem.startsWith(`${navItemId}-`)) {
    return true;
  }

  return false;
}

/**
 * Get parent navigation item from sub-item
 */
export function getParentNavItem(item: string): string {
  if (item.includes('-')) {
    return item.split('-')[0];
  }
  return item;
}

/**
 * Check if item is a sub-navigation item
 */
export function isSubNavItem(item: string): boolean {
  return item.includes('-');
}
