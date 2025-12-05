'use client';

import { Tarea, TareaStatus, TaskPermissions } from '@/types/tareas';
import TaskCard from './TaskCard';
import styles from './TaskList.module.css';

interface TaskListProps {
  title: string;
  tasks: Tarea[];
  onStatusChange: (taskId: string, newStatus: TareaStatus) => void;
  onCommentAdd?: (taskId: string, comment: string) => Promise<void>;
  onCommentDelete?: (taskId: string, commentId: string) => Promise<void>;
  permissions: TaskPermissions;
  isLoading?: boolean;
}

export default function TaskList({
  title,
  tasks,
  onStatusChange,
  onCommentAdd,
  onCommentDelete,
  permissions,
  isLoading = false,
}: TaskListProps) {
  const canUpdate = title === 'Mis Tareas' 
    ? permissions.canUpdateMyTasks 
    : permissions.canUpdateAssignedTasks;

  if (isLoading) {
    return (
      <div className={styles.columnWrapper}>
        <div className={styles.columnHeader}>
          <h2 className={styles.columnTitle}>{title}</h2>
          <span className={styles.taskCount}>Cargando...</span>
        </div>
        <div className={styles.columnBody}>
          <div className={styles.loadingState}>Cargando tareas...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.columnWrapper}>
      <div className={styles.columnHeader}>
        <h2 className={styles.columnTitle}>{title}</h2>
        <span className={styles.taskCount}>({tasks.length})</span>
      </div>
      <div className={styles.columnBody}>
        {tasks.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No hay tareas en esta categoría</p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onStatusChange={(newStatus) => onStatusChange(task.id, newStatus)}
              onCommentAdd={onCommentAdd}
              onCommentDelete={onCommentDelete}
              canUpdateStatus={canUpdate}
              showAssigner={title === 'Asignadas por Superior'}
            />
          ))
        )}
      </div>
    </div>
  );
}

