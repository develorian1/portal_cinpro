'use client';

import styles from './StatusCounter.module.css';

interface StatusCounterProps {
  title: string;
  count: number;
  status: 'success' | 'warning' | 'danger';
}

export default function StatusCounter({ title, count, status }: StatusCounterProps) {
  return (
    <div className={`${styles.counterCard} ${styles[status]}`}>
      <h3 className={styles.counterTitle}>{title}</h3>
      <div className={styles.counterValue}>{count}</div>
    </div>
  );
}

