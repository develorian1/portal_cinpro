'use client';

import TaskCard from './TaskCard';
import type { Task } from './TaskCard';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[];
  onStartTask: (taskId: string) => void;
}

export default function TaskList({ tasks, onStartTask }: TaskListProps) {
  return (
    <div className={styles.taskListContainer}>
      <div className={styles.taskListHeader}>
        <h2 className={styles.taskListTitle}>Tareas</h2>
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
  );
}

