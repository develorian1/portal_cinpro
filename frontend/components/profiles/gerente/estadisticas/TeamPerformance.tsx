'use client';

import styles from './TeamPerformance.module.css';

interface ReconciliationSpeed {
  accountantId: string;
  name: string;
  itemsPerHour: number;
  trend: 'up' | 'down' | 'stable';
}

interface ErrorRate {
  accountantId: string;
  name: string;
  errorRate: number;
  rejectedCount: number;
  totalReviewed: number;
}

interface ClientSatisfaction {
  overall: number;
  maxScore: number;
  breakdown: {
    category: string;
    score: number;
  }[];
  recentFeedback: {
    clientId: string;
    clientName: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

interface TeamPerformanceProps {
  reconciliationSpeed: ReconciliationSpeed[];
  errorRates: ErrorRate[];
  clientSatisfaction: ClientSatisfaction;
}

export default function TeamPerformance({
  reconciliationSpeed,
  errorRates,
  clientSatisfaction,
}: TeamPerformanceProps) {
  const maxSpeed = Math.max(...reconciliationSpeed.map((r) => r.itemsPerHour));
  const maxError = Math.max(...errorRates.map((e) => e.errorRate));

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        );
      case 'down':
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        );
      default:
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        );
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={i < rating ? 'var(--warning)' : 'none'}
        stroke={i < rating ? 'var(--warning)' : 'var(--text-muted)'}
        strokeWidth="2"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <div className={styles.teamPerformance}>
      {/* Reconciliation Speed Chart */}
      <div className={styles.chartCard}>
        <h3 className={styles.chartTitle}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="20" x2="12" y2="10" />
            <line x1="18" y1="20" x2="18" y2="4" />
            <line x1="6" y1="20" x2="6" y2="16" />
          </svg>
          Velocidad de Conciliación
        </h3>
        <p className={styles.chartSubtitle}>Items procesados por hora</p>
        
        <div className={styles.barChart}>
          {reconciliationSpeed.map((item) => (
            <div key={item.accountantId} className={styles.barRow}>
              <span className={styles.barLabel}>{item.name}</span>
              <div className={styles.barContainer}>
                <div
                  className={styles.bar}
                  style={{ width: `${(item.itemsPerHour / maxSpeed) * 100}%` }}
                />
              </div>
              <div className={styles.barValue}>
                <span>{item.itemsPerHour}</span>
                {getTrendIcon(item.trend)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Error Rate Chart */}
      <div className={styles.chartCard}>
        <h3 className={styles.chartTitle}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          Tasa de Error
        </h3>
        <p className={styles.chartSubtitle}>% de coincidencias rechazadas por el Jefe</p>
        
        <div className={styles.barChart}>
          {errorRates.map((item) => (
            <div key={item.accountantId} className={styles.barRow}>
              <span className={styles.barLabel}>{item.name}</span>
              <div className={styles.barContainer}>
                <div
                  className={`${styles.bar} ${styles.errorBar}`}
                  style={{ width: `${(item.errorRate / (maxError + 2)) * 100}%` }}
                />
              </div>
              <div className={styles.barValue}>
                <span className={item.errorRate > 5 ? styles.highError : ''}>
                  {item.errorRate}%
                </span>
                <span className={styles.errorDetail}>
                  ({item.rejectedCount}/{item.totalReviewed})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Satisfaction */}
      <div className={styles.chartCard}>
        <h3 className={styles.chartTitle}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
          </svg>
          Satisfacción del Cliente
        </h3>
        
        <div className={styles.satisfactionContent}>
          <div className={styles.overallScore}>
            <span className={styles.scoreNumber}>{clientSatisfaction.overall}</span>
            <span className={styles.scoreMax}>/ {clientSatisfaction.maxScore}</span>
            <div className={styles.starsRow}>
              {renderStars(Math.round(clientSatisfaction.overall))}
            </div>
          </div>

          <div className={styles.breakdown}>
            {clientSatisfaction.breakdown.map((item) => (
              <div key={item.category} className={styles.breakdownItem}>
                <span className={styles.breakdownLabel}>{item.category}</span>
                <div className={styles.breakdownBar}>
                  <div
                    className={styles.breakdownFill}
                    style={{ width: `${(item.score / clientSatisfaction.maxScore) * 100}%` }}
                  />
                </div>
                <span className={styles.breakdownValue}>{item.score}</span>
              </div>
            ))}
          </div>

          <div className={styles.recentFeedback}>
            <h4 className={styles.feedbackTitle}>Comentarios Recientes</h4>
            {clientSatisfaction.recentFeedback.map((feedback) => (
              <div key={feedback.clientId} className={styles.feedbackItem}>
                <div className={styles.feedbackHeader}>
                  <span className={styles.feedbackClient}>{feedback.clientName}</span>
                  <div className={styles.feedbackStars}>{renderStars(feedback.rating)}</div>
                </div>
                <p className={styles.feedbackComment}>"{feedback.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



