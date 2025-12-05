'use client';

import { useState, useCallback } from 'react';
import KPICards from './KPICards';
import TriageFeed from './TriageFeed';
import homeMetricsData from '@/data/gerente/homeMetrics.json';
import styles from './Home.module.css';

export default function Home() {
  const [metrics] = useState(homeMetricsData.kpiMetrics);
  const [triageItems, setTriageItems] = useState(homeMetricsData.triageItems);

  const handleApprove = useCallback((id: string) => {
    setTriageItems((prev) => prev.filter((item) => item.id !== id));
    // In real app, would call API to approve the match
    console.log('Approved item:', id);
  }, []);

  const handleReject = useCallback((id: string, note: string) => {
    setTriageItems((prev) => prev.filter((item) => item.id !== id));
    // In real app, would call API to reject with note
    console.log('Rejected item:', id, 'with note:', note);
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.homeContent}>
        {/* KPI Cards Row */}
        <KPICards metrics={metrics} />

        {/* Triage Feed */}
        <TriageFeed
          items={triageItems}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </div>
    </div>
  );
}





