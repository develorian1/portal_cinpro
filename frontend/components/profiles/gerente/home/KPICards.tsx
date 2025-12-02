'use client';

import StatusCounter from '@/components/profiles/auxiliar/dashboard/StatusCounter';
import styles from './KPICards.module.css';

interface KPIMetrics {
  taxCompliance: {
    percentage: number;
    filedCount: number;
    totalCount: number;
    label: string;
  };
  openReviews: {
    count: number;
    label: string;
    description: string;
  };
  groupRevenue: {
    amount: number;
    currency: string;
    label: string;
    change: {
      direction: 'up' | 'down';
      percentage: number;
      text: string;
    };
  };
  criticalAlerts: {
    count: number;
    label: string;
    description: string;
  };
}

interface KPICardsProps {
  metrics: KPIMetrics;
}

export default function KPICards({ metrics }: KPICardsProps) {
  return (
    <div className={styles.kpiGrid}>
      <StatusCounter
        title={metrics.taxCompliance.label}
        count={metrics.taxCompliance.filedCount}
        status="success"
      />
      <StatusCounter
        title={metrics.openReviews.label}
        count={metrics.openReviews.count}
        status="warning"
      />
      <StatusCounter
        title={metrics.groupRevenue.label}
        count={Math.round(metrics.groupRevenue.amount / 1000)}
        status="success"
      />
      <StatusCounter
        title={metrics.criticalAlerts.label}
        count={metrics.criticalAlerts.count}
        status="danger"
      />
    </div>
  );
}

