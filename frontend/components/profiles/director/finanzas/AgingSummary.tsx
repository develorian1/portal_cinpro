'use client';

import styles from './AgingSummary.module.css';

export default function AgingSummary() {
  // Mock data - replace with real data from API
  const agingData = {
    '0-30': { total: 250000, overdue: 0 },
    '31-60': { total: 120000, overdue: 45000 },
    '60+': { total: 53000, overdue: 53000 },
  };

  const totalPending = Object.values(agingData).reduce((sum, item) => sum + item.total, 0);
  const totalOverdue = Object.values(agingData).reduce((sum, item) => sum + item.overdue, 0);

  const maxValue = Math.max(...Object.values(agingData).map(item => item.total));

  return (
    <div className={styles.agingSummary}>
      <div className={styles.header}>
        <h2 className={styles.title}>Resumen de Antigüedad</h2>
        <div className={styles.metrics}>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Total Pendiente</span>
            <span className={styles.metricValue}>${totalPending.toLocaleString()}</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Vencido</span>
            <span className={`${styles.metricValue} ${styles.overdue}`}>
              ${totalOverdue.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.chart}>
        {Object.entries(agingData).map(([range, data]) => {
          const height = (data.total / maxValue) * 100;
          const overdueHeight = data.overdue > 0 ? (data.overdue / maxValue) * 100 : 0;

          return (
            <div key={range} className={styles.barGroup}>
              <div className={styles.barContainer}>
                <div
                  className={styles.bar}
                  style={{ height: `${height}%` }}
                  title={`Total: $${data.total.toLocaleString()}`}
                >
                  {data.overdue > 0 && (
                    <div
                      className={styles.overdueBar}
                      style={{ height: `${overdueHeight}%` }}
                      title={`Vencido: $${data.overdue.toLocaleString()}`}
                    />
                  )}
                </div>
              </div>
              <div className={styles.barLabel}>
                <span className={styles.rangeLabel}>{range} días</span>
                <span className={styles.amountLabel}>${data.total.toLocaleString()}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

