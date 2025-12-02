'use client';

import styles from './AccountantProgressBoard.module.css';

interface Accountant {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
  lastSeen: string;
  workload: {
    reconciled: number;
    pendingAIReview: number;
    unmatched: number;
    total: number;
  };
  avgResponseTime: string;
  clientsAssigned: number;
  performanceScore: number;
}

interface AccountantProgressBoardProps {
  accountants: Accountant[];
  onViewQueue: (accountantId: string) => void;
}

export default function AccountantProgressBoard({ accountants, onViewQueue }: AccountantProgressBoardProps) {
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'online':
        return 'En línea';
      case 'offline':
        return 'Desconectado';
      case 'away':
        return 'Ausente';
      default:
        return status;
    }
  };

  const calculatePercentage = (value: number, total: number) => {
    return total > 0 ? (value / total) * 100 : 0;
  };

  return (
    <div className={styles.progressBoard}>
      <div className={styles.cardGrid}>
        {accountants.map((accountant) => {
          const reconciledPct = calculatePercentage(accountant.workload.reconciled, accountant.workload.total);
          const pendingPct = calculatePercentage(accountant.workload.pendingAIReview, accountant.workload.total);
          const unmatchedPct = calculatePercentage(accountant.workload.unmatched, accountant.workload.total);

          return (
            <div key={accountant.id} className={styles.accountantCard}>
              {/* Header */}
              <div className={styles.cardHeader}>
                <div className={styles.accountantInfo}>
                  <div className={`${styles.avatar} ${styles[accountant.status]}`}>
                    {accountant.avatar}
                  </div>
                  <div className={styles.nameStatus}>
                    <span className={styles.name}>{accountant.name}</span>
                    <span className={`${styles.status} ${styles[accountant.status]}`}>
                      <span className={styles.statusDot}></span>
                      {getStatusLabel(accountant.status)}
                    </span>
                  </div>
                </div>
                <div className={styles.performanceBadge}>
                  <span className={styles.scoreValue}>{accountant.performanceScore}</span>
                  <span className={styles.scoreLabel}>Score</span>
                </div>
              </div>

              {/* Workload Bar */}
              <div className={styles.workloadSection}>
                <div className={styles.workloadHeader}>
                  <span className={styles.workloadLabel}>Carga de Trabajo</span>
                  <span className={styles.workloadTotal}>{accountant.workload.total} items</span>
                </div>
                <div className={styles.workloadBar}>
                  <div
                    className={`${styles.workloadSegment} ${styles.reconciled}`}
                    style={{ width: `${reconciledPct}%` }}
                    title={`Conciliados: ${accountant.workload.reconciled}`}
                  />
                  <div
                    className={`${styles.workloadSegment} ${styles.pending}`}
                    style={{ width: `${pendingPct}%` }}
                    title={`Revisión IA: ${accountant.workload.pendingAIReview}`}
                  />
                  <div
                    className={`${styles.workloadSegment} ${styles.unmatched}`}
                    style={{ width: `${unmatchedPct}%` }}
                    title={`Sin conciliar: ${accountant.workload.unmatched}`}
                  />
                </div>
                <div className={styles.workloadLegend}>
                  <div className={styles.legendItem}>
                    <span className={`${styles.legendDot} ${styles.reconciled}`}></span>
                    <span>Conciliados ({accountant.workload.reconciled})</span>
                  </div>
                  <div className={styles.legendItem}>
                    <span className={`${styles.legendDot} ${styles.pending}`}></span>
                    <span>Rev. IA ({accountant.workload.pendingAIReview})</span>
                  </div>
                  <div className={styles.legendItem}>
                    <span className={`${styles.legendDot} ${styles.unmatched}`}></span>
                    <span>Sin conciliar ({accountant.workload.unmatched})</span>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className={styles.metricsRow}>
                <div className={styles.metric}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className={styles.metricLabel}>Tiempo promedio</span>
                  <span className={styles.metricValue}>{accountant.avgResponseTime}</span>
                </div>
                <div className={styles.metric}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                  <span className={styles.metricLabel}>Clientes</span>
                  <span className={styles.metricValue}>{accountant.clientsAssigned}</span>
                </div>
              </div>

              {/* Action */}
              <button
                className={styles.viewQueueBtn}
                onClick={() => onViewQueue(accountant.id)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
                Ver Cola de Tareas
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

