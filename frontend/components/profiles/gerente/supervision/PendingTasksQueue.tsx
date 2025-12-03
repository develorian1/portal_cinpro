'use client';

import { useState, useMemo } from 'react';
import styles from './PendingTasksQueue.module.css';

interface Task {
  id: string;
  accountantId: string;
  type: string;
  description: string;
  client: {
    id: string;
    name: string;
  };
  priority: 'critical' | 'high' | 'medium' | 'low';
  isPrioritized: boolean;
  createdAt: string;
  dueDate: string;
}

interface Accountant {
  id: string;
  name: string;
  avatar: string;
}

interface PendingTasksQueueProps {
  tasks: Task[];
  accountants: Accountant[];
  selectedAccountantId: string | null;
  onSelectAccountant: (id: string | null) => void;
  onTogglePrioritize: (taskId: string) => void;
}

export default function PendingTasksQueue({
  tasks,
  accountants,
  selectedAccountantId,
  onSelectAccountant,
  onTogglePrioritize,
}: PendingTasksQueueProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      day: '2-digit',
      month: 'short',
    });
  };

  const getTaskTypeIcon = (type: string) => {
    switch (type) {
      case 'unreconciled_lines':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
        );
      case 'missing_document':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </svg>
        );
      case 'review_request':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        );
      case 'cfdi_download':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        );
      case 'tax_filing':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        );
      default:
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'Crítico';
      case 'high':
        return 'Alto';
      case 'medium':
        return 'Medio';
      case 'low':
        return 'Bajo';
      default:
        return priority;
    }
  };

  const filteredTasks = useMemo(() => {
    let result = [...tasks];
    
    if (selectedAccountantId) {
      result = result.filter((t) => t.accountantId === selectedAccountantId);
    }

    // Sort: prioritized first, then by priority, then by due date
    result.sort((a, b) => {
      if (a.isPrioritized !== b.isPrioritized) {
        return a.isPrioritized ? -1 : 1;
      }
      const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    });

    return result;
  }, [tasks, selectedAccountantId]);

  const selectedAccountant = accountants.find((a) => a.id === selectedAccountantId);

  return (
    <div className={styles.pendingTasksQueue}>
      {/* Filter */}
      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Filtrar por contador:</label>
          <select
            className={styles.filterSelect}
            value={selectedAccountantId || ''}
            onChange={(e) => onSelectAccountant(e.target.value || null)}
          >
            <option value="">Todos los contadores</option>
            {accountants.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.name}
              </option>
            ))}
          </select>
        </div>
        {selectedAccountant && (
          <div className={styles.selectedAccountant}>
            <div className={styles.accountantAvatar}>{selectedAccountant.avatar}</div>
            <span>{selectedAccountant.name}</span>
          </div>
        )}
        <span className={styles.taskCount}>{filteredTasks.length} tareas</span>
      </div>

      {/* Task List */}
      <div className={styles.taskList}>
        {filteredTasks.map((task) => {
          const accountant = accountants.find((a) => a.id === task.accountantId);
          const isOverdue = new Date(task.dueDate) < new Date();

          return (
            <div
              key={task.id}
              className={`${styles.taskItem} ${task.isPrioritized ? styles.prioritized : ''}`}
            >
              <button
                className={`${styles.prioritizeBtn} ${task.isPrioritized ? styles.active : ''}`}
                onClick={() => onTogglePrioritize(task.id)}
                title={task.isPrioritized ? 'Quitar prioridad' : 'Marcar como prioritario'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill={task.isPrioritized ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </button>

              <div className={styles.taskIcon}>
                {getTaskTypeIcon(task.type)}
              </div>

              <div className={styles.taskContent}>
                <div className={styles.taskDescription}>{task.description}</div>
                <div className={styles.taskMeta}>
                  <span className={styles.clientName}>{task.client.name}</span>
                  {!selectedAccountantId && accountant && (
                    <>
                      <span className={styles.separator}>•</span>
                      <span className={styles.accountantName}>{accountant.name}</span>
                    </>
                  )}
                </div>
              </div>

              <div className={styles.taskRight}>
                <span className={`${styles.priorityBadge} ${styles[task.priority]}`}>
                  {getPriorityLabel(task.priority)}
                </span>
                <span className={`${styles.dueDate} ${isOverdue ? styles.overdue : ''}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {formatDate(task.dueDate)}
                </span>
              </div>
            </div>
          );
        })}

        {filteredTasks.length === 0 && (
          <div className={styles.emptyState}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p>No hay tareas pendientes</p>
          </div>
        )}
      </div>
    </div>
  );
}


