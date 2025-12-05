'use client';

import { KpiCard } from '@/components/profiles/director/dashboard';
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
  criticalAlerts: {
    count: number;
    label: string;
  };
}

interface KPICardsProps {
  metrics: KPIMetrics;
}

export default function KPICards({ metrics }: KPICardsProps) {
  return (
    <div className={styles.kpiContainer}>
      <KpiCard
        label={metrics.taxCompliance.label}
        value={`${metrics.taxCompliance.percentage}%`}
        variant="success"
      />
      <KpiCard
        label={metrics.openReviews.label}
        value={metrics.openReviews.count.toString()}
        variant="warning"
      />
      <KpiCard
        label={metrics.criticalAlerts.label}
        value={metrics.criticalAlerts.count.toString()}
        variant="danger"
      />
    </div>
  );
}

