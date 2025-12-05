export type TaskSource = 'system' | 'superior';
export type TareaStatus = 'pending' | 'in-progress' | 'completed';
export type TareaPriority = 'critical' | 'high' | 'medium' | 'low';

export type TareaType =
  | 'reconciliation'
  | 'invoice-processing'
  | 'bank-statement'
  | 'cfdi-validation'
  | 'tax-filing'
  | 'client-onboarding'
  | 'document-review'
  | 'report-generation'
  | 'payment-verification'
  | 'team-management'
  | 'other';

export interface Tarea {
  id: string;
  type: TareaType;
  source: TaskSource;
  priority: TareaPriority;
  title: string;
  description: string;
  status: TareaStatus;
  createdAt: string; // ISO date
  dueDate?: string; // ISO date
  completedAt?: string; // ISO date

  clientId?: string;
  clientName?: string;

  assignedBy?: string; // User ID (if source is 'superior')
  assignedByName?: string; // Display name
  assignedTo: string; // User ID

  notes?: string;
  tags?: string[];
}

export interface TareasResponse {
  misTareas: Tarea[];
  asignadasPorSuperior: Tarea[];
}

export interface TaskPermissions {
  canViewMyTasks: boolean;
  canUpdateMyTasks: boolean;
  canViewAssignedTasks: boolean;
  canUpdateAssignedTasks: boolean;
}

