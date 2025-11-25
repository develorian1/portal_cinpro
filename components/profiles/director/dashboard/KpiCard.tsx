import styles from './KpiCard.module.css';

interface KpiCardProps {
  label: string;
  value: string;
  change?: {
    direction: 'up' | 'down';
    text: string;
  };
  variant?: 'default' | 'success' | 'warning' | 'danger';
  valueVariant?: 'default' | 'positive' | 'negative';
  smallLabel?: boolean;
}

export default function KpiCard({
  label,
  value,
  change,
  variant = 'default',
  valueVariant = 'default',
  smallLabel = false,
}: KpiCardProps) {
  return (
    <div className={`${styles.kpiCard} ${styles[variant]}`}>
      <div className={`${styles.kpiLabel} ${smallLabel ? styles.smallLabel : ''}`}>{label}</div>
      <div className={`${styles.kpiValue} ${styles[valueVariant]}`}>{value}</div>
      {change && (
        <span className={`${styles.kpiChange} ${styles[change.direction]}`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            {change.direction === 'up' ? (
              <polyline points="18 15 12 9 6 15" />
            ) : (
              <polyline points="6 9 12 15 18 9" />
            )}
          </svg>
          {change.text}
        </span>
      )}
    </div>
  );
}

