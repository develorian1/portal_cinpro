'use client';

import { useState, useCallback } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import AccountantProgressBoard from './AccountantProgressBoard';
import PendingTasksQueue from './PendingTasksQueue';
import supervisionData from '@/data/gerente/supervision.json';
import styles from './Supervision.module.css';

export default function Supervision() {
  const { activeItem, setActiveItem } = useNavigation();
  const [accountants] = useState(supervisionData.accountants);
  const [tasks, setTasks] = useState(supervisionData.pendingTasks);
  const [selectedAccountantId, setSelectedAccountantId] = useState<string | null>(null);

  // Determine active tab from navigation
  const activeTab = activeItem === 'supervision-tareas' ? 'tasks' : 'progress';

  const handleViewQueue = useCallback((accountantId: string) => {
    setSelectedAccountantId(accountantId);
    setActiveItem('supervision-tareas');
  }, [setActiveItem]);

  const handleTogglePrioritize = useCallback((taskId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, isPrioritized: !task.isPrioritized } : task
      )
    );
  }, []);

  return (
    <div className={styles.supervision}>
      <div className={styles.supervisionContent}>
        {activeTab === 'progress' ? (
          <AccountantProgressBoard
            accountants={accountants}
            onViewQueue={handleViewQueue}
          />
        ) : (
          <PendingTasksQueue
            tasks={tasks}
            accountants={accountants}
            selectedAccountantId={selectedAccountantId}
            onSelectAccountant={setSelectedAccountantId}
            onTogglePrioritize={handleTogglePrioritize}
          />
        )}
      </div>
    </div>
  );
}

