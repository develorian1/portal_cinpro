'use client';

import styles from './StatusCounter.module.css';

interface StatusCounterProps {
  title: string;
  count: number;
  status: 'success' | 'warning' | 'danger';
  icon?: React.ReactNode;
}

export default function StatusCounter({ title, count, status, icon }: StatusCounterProps) {
  return (
    <div className={`${styles.counterCard} ${styles[status]}`}>
      <div className={styles.counterHeader}>
        {icon && <div className={styles.counterIcon}>{icon}</div>}
        <h3 className={styles.counterTitle}>{title}</h3>
      </div>
      <div className={styles.counterValue}>{count}</div>
    </div>
  );
}

