'use client';

import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import { useFinanzas } from '@/contexts/FinanzasContext';
import AgingSummary from './AgingSummary';
import DebtorsList from './DebtorsList';
import CommissionQueue from './CommissionQueue';
import FirmExpenses from './FirmExpenses';
import ReportGenerator from './ReportGenerator';
import styles from './Finanzas.module.css';

export default function Finanzas() {
  const { activeItem, setActiveItem } = useNavigation();
  const { isRefreshing, refresh } = useFinanzas();

  // Set default view when entering finanzas for the first time
  useEffect(() => {
    if (activeItem === 'finanzas') {
      setActiveItem('finanzas-aging');
    }
  }, [activeItem, setActiveItem]);

  // Render content based on dropdown selection
  const renderContent = () => {
    switch (activeItem) {
      case 'finanzas-aging':
      case 'finanzas':
        return <AgingSummary />;
      case 'finanzas-debtors':
        return <DebtorsList />;
      case 'finanzas-commissions':
        return <CommissionQueue />;
      case 'finanzas-expenses':
        return <FirmExpenses />;
      case 'finanzas-reports':
        return <ReportGenerator />;
      default:
        return <AgingSummary />;
    }
  };

  return (
    <div className={styles.finanzas}>
      <div className={styles.finanzasContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.contentHeader}>
            <button
              className={`${styles.refreshBtn} ${isRefreshing ? styles.refreshing : ''}`}
              onClick={refresh}
              disabled={isRefreshing}
              aria-label="Actualizar datos"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
              </svg>
            </button>
          </div>
          <div className={styles.tabContent}>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

