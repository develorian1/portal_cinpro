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

const priorityConfig = {
  high: { label: 'Alta', color: 'danger' },
  medium: { label: 'Media', color: 'warning' },
  low: { label: 'Baja', color: 'success' },
} as const;

export default function TaskCard({ task, onStart }: TaskCardProps) {
  const { label, color } = priorityConfig[task.priority];

  return (
    <div className={styles.taskCard}>
      <span className={`${styles.priorityBadge} ${styles[color]}`}>{label}</span>
      <div className={styles.taskInfo}>
        <span className={styles.clientName}>{task.client}</span>
        <span className={styles.taskDescription}>{task.description}</span>
        <span className={styles.dueDate}>{new Date(task.dueDate).toLocaleDateString()}</span>
      </div>
      <button
        className={styles.startButton}
        onClick={() => onStart(task.id)}
        aria-label={`Iniciar tarea para ${task.client}`}
      >
        Iniciar
      </button>
    </div>
  );
}

