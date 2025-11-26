'use client';

import styles from './TaskCard.module.css';

export interface Task {
  id: string;
  priority: 'high' | 'medium' | 'low';
  client: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
}

export type { Task };

interface TaskCardProps {
  task: Task;
  onStart: (taskId: string) => void;
}

export default function TaskCard({ task, onStart }: TaskCardProps) {
  const priorityColors = {
    high: 'danger',
    medium: 'warning',
    low: 'success',
  } as const;

  const priorityLabels = {
    high: 'Alta',
    medium: 'Media',
    low: 'Baja',
  } as const;

  return (
    <div className={styles.taskCard}>
      <div className={styles.taskRow}>
        <div className={styles.taskCell}>
          <span className={`${styles.priorityBadge} ${styles[priorityColors[task.priority]]}`}>
            {priorityLabels[task.priority]}
          </span>
        </div>
        <div className={styles.taskCell}>
          <span className={styles.clientName}>{task.client}</span>
        </div>
        <div className={styles.taskCell}>
          <span className={styles.taskDescription}>{task.description}</span>
        </div>
        <div className={styles.taskCell}>
          <span className={styles.dueDate}>{new Date(task.dueDate).toLocaleDateString()}</span>
        </div>
        <div className={styles.taskCell}>
          <button
            className={styles.startButton}
            onClick={() => onStart(task.id)}
            aria-label={`Iniciar tarea para ${task.client}`}
          >
            Iniciar
          </button>
        </div>
      </div>
    </div>
  );
}

