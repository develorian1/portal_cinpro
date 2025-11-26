'use client';

import { useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import styles from './Home.module.css';

interface ActivityLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  type: 'user' | 'system' | 'payment' | 'client';
}

interface OnlineUser {
  id: string;
  name: string;
  role: string;
  lastActivity: string;
}

interface PendingAction {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  section: string;
}

export default function Home() {
  const { setActiveItem } = useNavigation();

  // Mock data - replace with real API calls
  const [activityLogs] = useState<ActivityLog[]>([
    {
      id: '1',
      timestamp: 'Hace 5 min',
      user: 'María González',
      action: 'Actualizó información del cliente Hospital General',
      type: 'client',
    },
    {
      id: '2',
      timestamp: 'Hace 12 min',
      user: 'Sistema',
      action: 'Nuevo pago verificado: $45,000 MXN',
      type: 'payment',
    },
    {
      id: '3',
      timestamp: 'Hace 18 min',
      user: 'Carlos Ramírez',
      action: 'Creó nuevo usuario: Ana Martínez',
      type: 'user',
    },
    {
      id: '4',
      timestamp: 'Hace 25 min',
      user: 'Sistema',
      action: 'Certificado SAT próximo a vencer: Cliente ABC Corp',
      type: 'system',
    },
    {
      id: '5',
      timestamp: 'Hace 32 min',
      user: 'Laura Sánchez',
      action: 'Subió documento de certificación',
      type: 'client',
    },
  ]);

  const [onlineUsers] = useState<OnlineUser[]>([
    { id: '1', name: 'María González', role: 'Administrador', lastActivity: 'Activo ahora' },
    { id: '2', name: 'Carlos Ramírez', role: 'Gerente', lastActivity: 'Hace 2 min' },
    { id: '3', name: 'Laura Sánchez', role: 'Auxiliar', lastActivity: 'Hace 5 min' },
  ]);

  const [pendingActions] = useState<PendingAction[]>([
    {
      id: '1',
      title: 'Pagos pendientes de verificación',
      description: '3 pagos requieren revisión',
      priority: 'high',
      section: 'finanzas',
    },
    {
      id: '2',
      title: 'Certificados próximos a vencer',
      description: '2 certificados SAT vencen esta semana',
      priority: 'high',
      section: 'clientes',
    },
    {
      id: '3',
      title: 'Solicitudes de acceso pendientes',
      description: '1 solicitud de nuevo acceso',
      priority: 'medium',
      section: 'usuarios',
    },
  ]);

  const getActivityIcon = (type: ActivityLog['type']) => {
    switch (type) {
      case 'user':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case 'payment':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="1" y="4" width="22" height="16" rx="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
        );
      case 'client':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16" />
            <path d="M1 21h22" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        );
    }
  };

  const getPriorityColor = (priority: PendingAction['priority']) => {
    switch (priority) {
      case 'high':
        return styles.priorityHigh;
      case 'medium':
        return styles.priorityMedium;
      default:
        return styles.priorityLow;
    }
  };

  const handlePendingActionClick = (section: string) => {
    setActiveItem(section);
  };

  return (
    <div className={styles.home}>
      <div className={styles.dashboard}>
        {/* Activity Logs */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Actividad Reciente</h2>
          </div>
          <div className={styles.activityList}>
            {activityLogs.length === 0 ? (
              <div className={styles.emptyState}>No hay actividad reciente</div>
            ) : (
              activityLogs.map((log) => (
                <div key={log.id} className={styles.activityItem}>
                  <div className={styles.activityIcon}>{getActivityIcon(log.type)}</div>
                  <div className={styles.activityContent}>
                    <div className={styles.activityText}>
                      <span className={styles.activityUser}>{log.user}</span>
                      <span className={styles.activityAction}> {log.action}</span>
                    </div>
                    <div className={styles.activityTime}>{log.timestamp}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Online Users */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Usuarios en Línea</h2>
            <span className={styles.onlineCount}>{onlineUsers.length}</span>
          </div>
          <div className={styles.usersList}>
            {onlineUsers.length === 0 ? (
              <div className={styles.emptyState}>No hay usuarios en línea</div>
            ) : (
              onlineUsers.map((user) => (
                <div key={user.id} className={styles.userItem}>
                  <div className={styles.userInfo}>
                    <div className={styles.userName}>{user.name}</div>
                    <div className={styles.userRole}>{user.role}</div>
                  </div>
                  <div className={styles.userStatus}>
                    <span className={styles.statusIndicator}></span>
                    <span className={styles.lastActivity}>{user.lastActivity}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Pending Actions */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Acciones Pendientes</h2>
            <span className={styles.pendingCount}>{pendingActions.length}</span>
          </div>
          <div className={styles.actionsList}>
            {pendingActions.length === 0 ? (
              <div className={styles.emptyState}>No hay acciones pendientes</div>
            ) : (
              pendingActions.map((action) => (
                <button
                  key={action.id}
                  className={`${styles.actionItem} ${getPriorityColor(action.priority)}`}
                  onClick={() => handlePendingActionClick(action.section)}
                >
                  <div className={styles.actionContent}>
                    <div className={styles.actionTitle}>{action.title}</div>
                    <div className={styles.actionDescription}>{action.description}</div>
                  </div>
                  <svg
                    className={styles.actionArrow}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

