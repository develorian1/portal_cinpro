
'use client';

import { useEffect, useState } from 'react';
import { useWorkspaceNavigation } from '@/hooks/useWorkspaceNavigation';
import { useToast } from '@/contexts/ToastContext';
import StatusCounter from './StatusCounter';
import TaskList from './TaskList';
import type { Task } from './TaskCard';
import { DashboardCounts, WorkspaceTask } from '@/types/accountant';
import styles from './HomeDashboard.module.css';

interface WorkspaceResponse {
  counts: DashboardCounts;
  tasks: WorkspaceTask[];
}

export default function HomeDashboard() {
  const { goToClientWorkspace } = useWorkspaceNavigation();
  const toast = useToast();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [counts, setCounts] = useState({
    pendingReconciliations: 0,
    missingStatements: 0,
    rejectedItems: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchWorkspace = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/auxiliar/workspace');
        if (!response.ok) {
          throw new Error('Failed to load workspace data');
        }
        const data: WorkspaceResponse = await response.json();
        if (!isMounted) return;

        const mappedTasks: Task[] = data.tasks.map((task) => ({
          id: task.id,
          priority: task.priority,
          client: task.clientName,
          description: task.description,
          dueDate: task.dueDate,
          status: task.status === 'in-progress' ? 'in-progress' : 'pending',
          clientId: task.clientId,
          targetTab: task.targetTab,
        }));

        setTasks(mappedTasks);
        setCounts(data.counts);
      } catch (error) {
        if (isMounted) {
          toast.error('No se pudo cargar el tablero de tareas');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchWorkspace();

    return () => {
      isMounted = false;
    };
  }, [toast]);

  const handleStartTask = (taskId: string) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task?.clientId && task?.targetTab) {
      goToClientWorkspace(task.clientId, task.targetTab);
    } else {
      toast.info('Selecciona un cliente desde el directorio');
    }
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.countersGrid}>
        <StatusCounter
          title="Conciliaciones Pendientes"
          count={counts.pendingReconciliations}
          status="danger"
        />
        <StatusCounter
          title="Estados de Cuenta Faltantes"
          count={counts.missingStatements}
          status="warning"
        />
        <StatusCounter
          title="Elementos Rechazados"
          count={counts.rejectedItems}
          status="danger"
        />
      </div>

      <div className={styles.taskSection}>
        {isLoading ? (
          <div className={styles.loadingState}>Cargando tareas...</div>
        ) : (
          <TaskList tasks={tasks} onStartTask={handleStartTask} />
        )}
      </div>
    </div>
  );
}
