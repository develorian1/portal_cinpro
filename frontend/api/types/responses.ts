/**
 * API Response Type Definitions
 *
 * TypeScript interfaces for all API responses.
 * These should match the backend API contracts.
 */

import { ProfileType } from '@/types/profile';

/**
 * Common response wrappers
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

/**
 * Authentication Responses
 */
export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: UserProfile;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  profile: ProfileType;
  initials: string;
  avatar?: string;
}

/**
 * Home Dashboard Responses
 */
export interface KpiData {
  totalRevenue: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
  activeCases: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
  pendingPayments: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
  teamPerformance: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
}

export interface UrgentApproval {
  id: string;
  type: 'commission' | 'expense' | 'document';
  title: string;
  amount?: number;
  requester: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
}

/**
 * Finanzas Responses
 */
export interface Commission {
  id: string;
  employeeName: string;
  employeeId: string;
  caseNumber: string;
  clientName: string;
  amount: number;
  percentage: number;
  requestDate: string;
  status: 'pending' | 'approved' | 'rejected';
  selected?: boolean;
}

export interface Debtor {
  id: string;
  clientName: string;
  caseNumber: string;
  amountDue: number;
  dueDate: string;
  daysPastDue: number;
  lastContact?: string;
  status: 'pending' | 'contacted' | 'overdue';
}

export interface FirmExpense {
  id: string;
  category: string;
  description: string;
  amount: number;
  date: string;
  vendor: string;
  status: 'pending' | 'approved' | 'paid';
  approvedBy?: string;
}

/**
 * Usuarios Responses
 */
export interface Auxiliar {
  id: string;
  name: string;
  email: string;
  assignedTo: string;
  activeCases: number;
  performance: number;
  status: 'active' | 'inactive';
  hireDate: string;
}

export interface Admin {
  id: string;
  name: string;
  email: string;
  department: string;
  permissions: string[];
  status: 'active' | 'inactive';
  lastLogin: string;
}

export interface Jefe {
  id: string;
  name: string;
  email: string;
  department: string;
  teamSize: number;
  auxiliares: string[];
  performance: number;
  status: 'active' | 'inactive';
}

export interface CreateAuxiliarRequest {
  name: string;
  email: string;
  password: string;
  assignedTo: string; // Jefe ID
}

export interface CreateAdminRequest {
  name: string;
  email: string;
  password: string;
  department: string;
  permissions: string[];
}

export interface CreateJefeRequest {
  name: string;
  email: string;
  password: string;
  department: string;
}

/**
 * Clientes Responses
 */
export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  status: 'active' | 'inactive';
  totalCases: number;
  activeCases: number;
  totalRevenue: number;
  lastContact: string;
  assignedTo: string;
}

export interface ClientProfile extends Client {
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  notes?: string;
  createdAt: string;
}

export interface ClientCase {
  id: string;
  caseNumber: string;
  title: string;
  status: 'open' | 'closed' | 'pending';
  startDate: string;
  endDate?: string;
  assignedTo: string;
  totalFees: number;
  paidAmount: number;
}

/**
 * Estadisticas Responses
 */
export interface EstadisticasOverview {
  totalClients: number;
  activeCases: number;
  revenue: {
    current: number;
    previous: number;
    change: number;
  };
  performance: {
    current: number;
    target: number;
  };
}

export interface EmployeePerformance {
  id: string;
  name: string;
  role: string;
  casesHandled: number;
  casesWon: number;
  revenue: number;
  efficiency: number;
  rating: number;
}

/**
 * Comunicacion Responses
 */
export interface Announcement {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  author: string;
  date: string;
  recipients: string[];
}

/**
 * Calendario Responses
 */
export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: string;
  end: string;
  type: 'meeting' | 'hearing' | 'deadline' | 'reminder';
  participants?: string[];
  location?: string;
  caseId?: string;
}

/**
 * Mensajes Responses
 */
export interface Conversation {
  id: string;
  participants: UserProfile[];
  lastMessage: Message;
  unreadCount: number;
  updatedAt: string;
}

export interface Message {
  id: string;
  conversationId: string;
  sender: UserProfile;
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: Attachment[];
}

export interface Attachment {
  id: string;
  filename: string;
  url: string;
  size: number;
  type: string;
}

/**
 * Notifications Responses
 */
export interface Notification {
  id: string;
  type: 'info' | 'warning' | 'success' | 'error';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}
