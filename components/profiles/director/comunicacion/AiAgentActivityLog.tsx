'use client';

import styles from './AiAgentActivityLog.module.css';

interface ActivityItem {
  id: string;
  timestamp: string;
  message: string;
  type: 'invoice' | 'reminder' | 'upload' | 'other';
}

export default function AiAgentActivityLog() {
  // Mock data - replace with real data from API
  const activities: ActivityItem[] = [
    {
      id: '1',
      timestamp: '2024-01-15 10:30',
      message: 'Agent generated Invoice #405 for Client X.',
      type: 'invoice',
    },
    {
      id: '2',
      timestamp: '2024-01-15 09:15',
      message: 'Agent reminded Accountant Y about 5 pending items.',
      type: 'reminder',
    },
    {
      id: '3',
      timestamp: '2024-01-15 08:45',
      message: 'Client Z uploaded a payment proof via Telegram.',
      type: 'upload',
    },
    {
      id: '4',
      timestamp: '2024-01-14 16:20',
      message: 'Agent processed 12 invoices automatically.',
      type: 'other',
    },
    {
      id: '5',
      timestamp: '2024-01-14 14:10',
      message: 'Agent sent reminder to 3 clients about upcoming deadlines.',
      type: 'reminder',
    },
  ];

  const getActivityIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'invoice':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="1" y="4" width="22" height="16" rx="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
        );
      case 'reminder':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        );
      case 'upload':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        );
      default:
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        );
    }
  };

  return (
    <div className={styles.activityLog}>
      <div className={styles.header}>
        <h3 className={styles.title}>Registro de Actividad del Agente IA</h3>
      </div>
      <div className={styles.activityStream}>
        {activities.length === 0 ? (
          <div className={styles.emptyState}>No hay actividad reciente</div>
        ) : (
          activities.map((activity) => (
            <div key={activity.id} className={styles.activityItem}>
              <div className={styles.activityIcon}>{getActivityIcon(activity.type)}</div>
              <div className={styles.activityContent}>
                <div className={styles.activityMessage}>{activity.message}</div>
                <div className={styles.activityTimestamp}>{activity.timestamp}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}



