'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useNavigation } from '@/contexts/NavigationContext';
import styles from './TareasPendientes.module.css';

type TaskType = 'reconciliation' | 'invoice-processing' | 'bank-statement' | 'cfdi-validation' | 'tax-filing' | 'other';
type Priority = 'high' | 'medium' | 'low';
type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'deferred';

interface AccountingTask {
  id: string;
  type: TaskType;
  priority: Priority;
  client: string;
  clientId?: string;
  description: string;
  dueDate: string;
  status: TaskStatus;
  assignedTo?: string;
  notes?: string;
}

export default function TareasPendientes() {
  const router = useRouter();
  const { setActiveItem } = useNavigation();
  const [tasks, setTasks] = useState<AccountingTask[]>([]);
  const [viewMode, setViewMode] = useState<'list' | 'kanban'>('list');

  useEffect(() => {
    // TODO: Replace with actual API call
    // Fetch accounting tasks from /api/tasks/accounting endpoint
    setTasks([
      {
        id: '1',
        type: 'reconciliation',
        priority: 'high',
        client: 'Acme Corp',
        clientId: 'acme-1',
        description: 'Conciliar estados de cuenta de enero 2024',
        dueDate: '2024-01-25',
        status: 'pending',
      },
      {
        id: '2',
        type: 'invoice-processing',
        priority: 'medium',
        client: 'Tech Solutions',
        clientId: 'tech-1',
        description: 'Procesar facturas pendientes del SAT',
        dueDate: '2024-01-22',
        status: 'in-progress',
      },
      {
        id: '3',
        type: 'bank-statement',
        priority: 'high',
        client: 'Global Industries',
        clientId: 'global-1',
        description: 'Revisar y validar estado de cuenta bancario',
        dueDate: '2024-01-20',
        status: 'pending',
      },
      {
        id: '4',
        type: 'cfdi-validation',
        priority: 'medium',
        client: 'Startup Ventures',
        clientId: 'startup-1',
        description: 'Validar CFDI recibidos del mes',
        dueDate: '2024-01-23',
        status: 'pending',
      },
      {
        id: '5',
        type: 'tax-filing',
        priority: 'high',
        client: 'Enterprise Group',
        clientId: 'enterprise-1',
        description: 'Preparar declaración mensual del SAT',
        dueDate: '2024-01-17',
        status: 'in-progress',
      },
      {
        id: '6',
        type: 'reconciliation',
        priority: 'low',
        client: 'Acme Corp',
        clientId: 'acme-1',
        description: 'Revisar conciliaciones anteriores',
        dueDate: '2024-01-30',
        status: 'pending',
      },
    ]);
  }, []);


  const handleStartTask = (task: AccountingTask) => {
    if (task.clientId) {
      setActiveItem('clientes');
      // TODO: Navigate to specific client workspace with task context
      router.push('/auxiliar/clientes');
    }
  };

  const handleCompleteTask = (id: string) => {
    // TODO: Call API to mark task as completed
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: 'completed' as const } : t)));
  };

  const handleDeferTask = (id: string) => {
    // TODO: Call API to defer task
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: 'deferred' as const } : t)));
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('es-MX');
  };

  const getTaskTypeLabel = (type: TaskType) => {
    const labels: Record<TaskType, string> = {
      reconciliation: 'Conciliación',
      'invoice-processing': 'Procesamiento de Facturas',
      'bank-statement': 'Estado de Cuenta',
      'cfdi-validation': 'Validación CFDI',
      'tax-filing': 'Declaración Fiscal',
      other: 'Otro',
    };
    return labels[type];
  };

  const getPriorityLabel = (priority: Priority) => {
    const labels: Record<Priority, string> = {
      high: 'Alta',
      medium: 'Media',
      low: 'Baja',
    };
    return labels[priority];
  };

  const getStatusLabel = (status: TaskStatus) => {
    const labels: Record<TaskStatus, string> = {
      pending: 'Pendiente',
      'in-progress': 'En Progreso',
      completed: 'Completado',
      deferred: 'Diferido',
    };
    return labels[status];
  };

  const getPriorityClass = (priority: Priority) => {
    switch (priority) {
      case 'high':
        return styles.priorityHigh;
      case 'medium':
        return styles.priorityMedium;
      case 'low':
        return styles.priorityLow;
      default:
        return '';
    }
  };

  const getStatusClass = (status: TaskStatus) => {
    switch (status) {
      case 'pending':
        return styles.statusPending;
      case 'in-progress':
        return styles.statusInProgress;
      case 'completed':
        return styles.statusCompleted;
      case 'deferred':
        return styles.statusDeferred;
      default:
        return '';
    }
  };

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date() && tasks.find(t => t.dueDate === dueDate)?.status !== 'completed';
  };

  const tasksByStatus = {
    pending: tasks.filter((t) => t.status === 'pending'),
    'in-progress': tasks.filter((t) => t.status === 'in-progress'),
    completed: tasks.filter((t) => t.status === 'completed'),
    deferred: tasks.filter((t) => t.status === 'deferred'),
  };

  return (
    <div className={styles.tareasPendientes}>
      <div className={styles.viewToggle}>
        <button
          className={`${styles.viewButton} ${viewMode === 'list' ? styles.active : ''}`}
          onClick={() => setViewMode('list')}
        >
          Lista
        </button>
        <button
          className={`${styles.viewButton} ${viewMode === 'kanban' ? styles.active : ''}`}
          onClick={() => setViewMode('kanban')}
        >
          Kanban
        </button>
      </div>

      {viewMode === 'list' ? (
        <div className={styles.listView}>
          <div className={styles.listHeader}>
            <div className={styles.headerCell}>Tipo</div>
            <div className={styles.headerCell}>Prioridad</div>
            <div className={styles.headerCell}>Cliente</div>
            <div className={styles.headerCell}>Descripción</div>
            <div className={styles.headerCell}>Fecha Vencimiento</div>
            <div className={styles.headerCell}>Estado</div>
            <div className={styles.headerCell}>Acciones</div>
          </div>
          <div className={styles.listBody}>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className={`${styles.taskRow} ${isOverdue(task.dueDate) ? styles.overdue : ''}`}
                >
                  <div className={styles.taskCell}>
                    <span className={styles.taskType}>{getTaskTypeLabel(task.type)}</span>
                  </div>
                  <div className={styles.taskCell}>
                    <span className={`${styles.priorityBadge} ${getPriorityClass(task.priority)}`}>
                      {getPriorityLabel(task.priority)}
                    </span>
                  </div>
                  <div className={styles.taskCell}>
                    <span className={styles.clientName}>{task.client}</span>
                  </div>
                  <div className={styles.taskCell}>
                    <span className={styles.taskDescription}>{task.description}</span>
                  </div>
                  <div className={styles.taskCell}>
                    <span className={isOverdue(task.dueDate) ? styles.overdueDate : styles.dueDate}>
                      {formatDate(task.dueDate)}
                    </span>
                  </div>
                  <div className={styles.taskCell}>
                    <span className={`${styles.statusBadge} ${getStatusClass(task.status)}`}>
                      {getStatusLabel(task.status)}
                    </span>
                  </div>
                  <div className={styles.taskCell}>
                    <div className={styles.actionButtons}>
                      {task.status === 'pending' && (
                        <button
                          className={styles.startButton}
                          onClick={() => handleStartTask(task)}
                          title="Iniciar"
                          aria-label="Iniciar"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </button>
                      )}
                      {task.status !== 'completed' && (
                        <>
                          <button
                            className={styles.completeButton}
                            onClick={() => handleCompleteTask(task.id)}
                            title="Completar"
                            aria-label="Completar"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          </button>
                          <button
                            className={styles.deferButton}
                            onClick={() => handleDeferTask(task.id)}
                            title="Diferir"
                            aria-label="Diferir"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.emptyState}>
                <p>No se encontraron tareas</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.kanbanView}>
          <div className={styles.kanbanColumn}>
            <h3 className={styles.kanbanColumnTitle}>
              Pendiente ({tasksByStatus.pending.length})
            </h3>
            <div className={styles.kanbanColumnBody}>
              {tasksByStatus.pending.map((task) => (
                <div
                  key={task.id}
                  className={`${styles.kanbanCard} ${isOverdue(task.dueDate) ? styles.overdue : ''}`}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.cardType}>{getTaskTypeLabel(task.type)}</span>
                    <span className={`${styles.priorityBadge} ${getPriorityClass(task.priority)}`}>
                      {getPriorityLabel(task.priority)}
                    </span>
                  </div>
                  <div className={styles.cardClient}>{task.client}</div>
                  <div className={styles.cardDescription}>{task.description}</div>
                  <div className={styles.cardFooter}>
                    <span className={isOverdue(task.dueDate) ? styles.overdueDate : styles.dueDate}>
                      Vence: {formatDate(task.dueDate)}
                    </span>
                    <button
                      className={styles.startButton}
                      onClick={() => handleStartTask(task)}
                    >
                      Iniciar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.kanbanColumn}>
            <h3 className={styles.kanbanColumnTitle}>
              En Progreso ({tasksByStatus['in-progress'].length})
            </h3>
            <div className={styles.kanbanColumnBody}>
              {tasksByStatus['in-progress'].map((task) => (
                <div key={task.id} className={styles.kanbanCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardType}>{getTaskTypeLabel(task.type)}</span>
                    <span className={`${styles.priorityBadge} ${getPriorityClass(task.priority)}`}>
                      {getPriorityLabel(task.priority)}
                    </span>
                  </div>
                  <div className={styles.cardClient}>{task.client}</div>
                  <div className={styles.cardDescription}>{task.description}</div>
                  <div className={styles.cardFooter}>
                    <span className={styles.dueDate}>Vence: {formatDate(task.dueDate)}</span>
                    <button
                      className={styles.completeButton}
                      onClick={() => handleCompleteTask(task.id)}
                    >
                      Completar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.kanbanColumn}>
            <h3 className={styles.kanbanColumnTitle}>
              Completado ({tasksByStatus.completed.length})
            </h3>
            <div className={styles.kanbanColumnBody}>
              {tasksByStatus.completed.map((task) => (
                <div key={task.id} className={`${styles.kanbanCard} ${styles.completedCard}`}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardType}>{getTaskTypeLabel(task.type)}</span>
                    <span className={`${styles.statusBadge} ${styles.statusCompleted}`}>
                      Completado
                    </span>
                  </div>
                  <div className={styles.cardClient}>{task.client}</div>
                  <div className={styles.cardDescription}>{task.description}</div>
                  <div className={styles.cardFooter}>
                    <span className={styles.dueDate}>Completado: {formatDate(task.dueDate)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.kanbanColumn}>
            <h3 className={styles.kanbanColumnTitle}>
              Diferido ({tasksByStatus.deferred.length})
            </h3>
            <div className={styles.kanbanColumnBody}>
              {tasksByStatus.deferred.map((task) => (
                <div key={task.id} className={styles.kanbanCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardType}>{getTaskTypeLabel(task.type)}</span>
                    <span className={`${styles.statusBadge} ${styles.statusDeferred}`}>
                      Diferido
                    </span>
                  </div>
                  <div className={styles.cardClient}>{task.client}</div>
                  <div className={styles.cardDescription}>{task.description}</div>
                  <div className={styles.cardFooter}>
                    <span className={styles.dueDate}>Vence: {formatDate(task.dueDate)}</span>
                    <button
                      className={styles.startButton}
                      onClick={() => handleStartTask(task)}
                    >
                      Reanudar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

