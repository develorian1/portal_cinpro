'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useNavigation } from '@/contexts/NavigationContext';
import StatusCounter from './StatusCounter';
import TaskList from './TaskList';
import type { Task } from './TaskCard';
import styles from './HomeDashboard.module.css';

export default function HomeDashboard() {
  const router = useRouter();
  const { setActiveItem } = useNavigation();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [counts, setCounts] = useState({
    pendingReconciliations: 0,
    missingStatements: 0,
    rejectedItems: 0,
  });

  useEffect(() => {
    // TODO: Replace with actual API call
    // Fetch tasks and counts from API
    setTasks([
      {
        id: '1',
        priority: 'high',
        client: 'Acme Corp',
        description: 'Reconcile Q4 bank statements',
        dueDate: '2024-01-15',
        status: 'pending',
      },
      {
        id: '2',
        priority: 'medium',
        client: 'Tech Solutions',
        description: 'Review missing invoices',
        dueDate: '2024-01-20',
        status: 'in-progress',
      },
    ]);

    setCounts({
      pendingReconciliations: 12,
      missingStatements: 5,
      rejectedItems: 3,
    });
  }, []);

  const handleStartTask = (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      setActiveItem('clientes');
      // TODO: Navigate to specific client workspace
      router.push('/auxiliar/clientes');
    }
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.countersGrid}>
        <StatusCounter
          title="Conciliaciones Pendientes"
          count={counts.pendingReconciliations}
          status="danger"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          }
        />
        <StatusCounter
          title="Estados de Cuenta Faltantes"
          count={counts.missingStatements}
          status="warning"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          }
        />
        <StatusCounter
          title="Elementos Rechazados"
          count={counts.rejectedItems}
          status="danger"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          }
        />
      </div>

      <div className={styles.taskSection}>
        <TaskList tasks={tasks} onStartTask={handleStartTask} />
      </div>
    </div>
  );
}

