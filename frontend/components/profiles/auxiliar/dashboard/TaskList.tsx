'use client';

import { useState } from 'react';
import TaskCard from './TaskCard';
import type { Task } from './TaskCard';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[];
  onStartTask: (taskId: string) => void;
}

export default function TaskList({ tasks, onStartTask }: TaskListProps) {
  const [viewMode, setViewMode] = useState<'list' | 'kanban'>('list');

  return (
    <div className={styles.taskListContainer}>
      <div className={styles.taskListHeader}>
        <h2 className={styles.taskListTitle}>Tareas</h2>
        <div className={styles.viewToggle}>
          <button
            className={`${styles.viewButton} ${viewMode === 'list' ? styles.active : ''}`}
            onClick={() => setViewMode('list')}
            aria-label="Vista de lista"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <button
            className={`${styles.viewButton} ${viewMode === 'kanban' ? styles.active : ''}`}
            onClick={() => setViewMode('kanban')}
            aria-label="Vista Kanban"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className={styles.listView}>
          <div className={styles.listHeader}>
            <div className={styles.headerCell}>Prioridad</div>
            <div className={styles.headerCell}>Cliente</div>
            <div className={styles.headerCell}>Descripción</div>
            <div className={styles.headerCell}>Fecha de Vencimiento</div>
            <div className={styles.headerCell}>Acción</div>
          </div>
          <div className={styles.listBody}>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <TaskCard key={task.id} task={task} onStart={onStartTask} />
              ))
            ) : (
              <div className={styles.emptyState}>
                <p>No hay tareas disponibles</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.kanbanView}>
          <div className={styles.kanbanColumn}>
            <h3 className={styles.kanbanColumnTitle}>Pendiente</h3>
            {tasks.filter(t => t.status === 'pending').map((task) => (
              <TaskCard key={task.id} task={task} onStart={onStartTask} />
            ))}
          </div>
          <div className={styles.kanbanColumn}>
            <h3 className={styles.kanbanColumnTitle}>En Progreso</h3>
            {tasks.filter(t => t.status === 'in-progress').map((task) => (
              <TaskCard key={task.id} task={task} onStart={onStartTask} />
            ))}
          </div>
          <div className={styles.kanbanColumn}>
            <h3 className={styles.kanbanColumnTitle}>Completado</h3>
            {tasks.filter(t => t.status === 'completed').map((task) => (
              <TaskCard key={task.id} task={task} onStart={onStartTask} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

