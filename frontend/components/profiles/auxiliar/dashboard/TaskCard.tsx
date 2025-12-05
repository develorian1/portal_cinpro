'use client';

import { ClientTab } from '@/types/accountant';
import styles from './TaskCard.module.css';

export interface Task {
  id: string;
  priority: 'high' | 'medium' | 'low';
  client: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
  clientId?: string;
  targetTab?: ClientTab;
}

export type { Task };

interface TaskCardProps {
  task: Task;
  onStart: (taskId: string) => void;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-MX', {
    month: 'short',
    day: 'numeric',
  });
};

export default function TaskCard({ task, onStart }: TaskCardProps) {
  const isCompleted = task.status === 'completed';

  // Get status-based class
  const getStatusClass = (status: Task['status']): string => {
    switch (status) {
      case 'pending':
        return styles.statusPending;
      case 'in-progress':
        return styles.statusInProgress;
      case 'completed':
        return styles.statusCompleted;
      default:
        return '';
    }
  };

  return (
    <div className={`${styles.taskCard} ${getStatusClass(task.status)}`}>
      <label className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          checked={isCompleted}
          disabled
          className={styles.checkbox}
          aria-label={`Tarea ${isCompleted ? 'completada' : 'pendiente'}`}
        />
        <span className={styles.checkmark}></span>
      </label>

      <div className={styles.taskContent} onClick={() => !isCompleted && onStart(task.id)}>
        <div className={styles.taskHeader}>
          <span className={styles.clientName}>{task.client}</span>
          <span className={styles.dueDate}>{formatDate(task.dueDate)}</span>
        </div>
        <p className={styles.taskDescription}>{task.description}</p>
      </div>
    </div>
  );
}

