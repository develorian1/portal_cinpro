'use client';

import { Tarea, TareaStatus, TareaPriority, TareaType } from '@/types/tareas';
import styles from './TaskCard.module.css';

interface TaskCardProps {
  task: Tarea;
  onStatusChange: (newStatus: TareaStatus) => void;
  canUpdateStatus: boolean;
  showAssigner?: boolean;
}

const getPriorityLabel = (priority: TareaPriority): string => {
  const labels: Record<TareaPriority, string> = {
    critical: 'Crítica',
    high: 'Alta',
    medium: 'Media',
    low: 'Baja',
  };
  return labels[priority];
};

const getTypeLabel = (type: TareaType): string => {
  const labels: Record<TareaType, string> = {
    reconciliation: 'Conciliación',
    'invoice-processing': 'Procesamiento de Facturas',
    'bank-statement': 'Estado de Cuenta',
    'cfdi-validation': 'Validación CFDI',
    'tax-filing': 'Declaración Fiscal',
    'client-onboarding': 'Onboarding Cliente',
    'document-review': 'Revisión de Documentos',
    'report-generation': 'Generación de Reportes',
    'payment-verification': 'Verificación de Pagos',
    'team-management': 'Gestión de Equipo',
    other: 'Otro',
  };
  return labels[type];
};

const getStatusLabel = (status: TareaStatus): string => {
  const labels: Record<TareaStatus, string> = {
    pending: 'Pendiente',
    'in-progress': 'En Progreso',
    completed: 'Completada',
  };
  return labels[status];
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const isOverdue = (dueDate?: string): boolean => {
  if (!dueDate) return false;
  return new Date(dueDate) < new Date();
};

export default function TaskCard({
  task,
  onStatusChange,
  canUpdateStatus,
  showAssigner = false,
}: TaskCardProps) {
  const overdue = task.dueDate ? isOverdue(task.dueDate) : false;
  const statusOptions: TareaStatus[] = ['pending', 'in-progress', 'completed'];

  return (
    <div className={`${styles.taskCard} ${overdue ? styles.overdue : ''}`}>
      <div className={styles.cardHeader}>
        <div className={styles.badges}>
          <span
            className={`${styles.priorityBadge} ${
              task.priority === 'critical'
                ? styles.priorityCritical
                : task.priority === 'high'
                ? styles.priorityHigh
                : task.priority === 'medium'
                ? styles.priorityMedium
                : styles.priorityLow
            }`}
          >
            {getPriorityLabel(task.priority)}
          </span>
          <span className={styles.typeBadge}>{getTypeLabel(task.type)}</span>
        </div>
        {canUpdateStatus && (
          <select
            value={task.status}
            onChange={(e) => onStatusChange(e.target.value as TareaStatus)}
            className={styles.statusSelect}
            aria-label="Cambiar estado de tarea"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {getStatusLabel(status)}
              </option>
            ))}
          </select>
        )}
      </div>

      <h3 className={styles.taskTitle}>{task.title}</h3>
      <p className={styles.taskDescription}>{task.description}</p>

      <div className={styles.cardMeta}>
        {task.clientName && (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Cliente:</span>
            <span className={styles.metaValue}>{task.clientName}</span>
          </div>
        )}

        {showAssigner && task.assignedByName && (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Asignada por:</span>
            <span className={styles.metaValue}>{task.assignedByName}</span>
          </div>
        )}

        {task.dueDate && (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Vence:</span>
            <span className={overdue ? styles.overdueDate : styles.dueDate}>
              {formatDate(task.dueDate)}
            </span>
          </div>
        )}

        {task.completedAt && (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Completada:</span>
            <span className={styles.completedDate}>{formatDate(task.completedAt)}</span>
          </div>
        )}
      </div>

      {task.tags && task.tags.length > 0 && (
        <div className={styles.tags}>
          {task.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

