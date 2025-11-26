'use client';

import { useState, useEffect, useMemo } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import { useFinanzas } from '@/contexts/FinanzasContext';
import { TabContainer, Tab } from '@/components/shared';
import AgingSummary from './AgingSummary';
import DebtorsList from './DebtorsList';
import CommissionQueue from './CommissionQueue';
import FirmExpenses from './FirmExpenses';
import ReportGenerator from './ReportGenerator';
import styles from './Finanzas.module.css';

export default function Finanzas() {
  const { activeItem } = useNavigation();
  const { isRefreshing, refresh } = useFinanzas();
  const [activeCategory, setActiveCategory] = useState<'receivables' | 'payables' | 'reports'>('receivables');
  const [activeComponentTab, setActiveComponentTab] = useState<string>('');

  // Update active category based on navigation
  useEffect(() => {
    if (activeItem === 'finanzas-receivables') {
      setActiveCategory('receivables');
      setActiveComponentTab('aging');
    } else if (activeItem === 'finanzas-payables') {
      setActiveCategory('payables');
      setActiveComponentTab('commissions');
    } else if (activeItem === 'finanzas-reports') {
      setActiveCategory('reports');
      setActiveComponentTab('');
    } else if (activeItem === 'finanzas') {
      // Default to receivables when clicking finanzas directly
      setActiveCategory('receivables');
      setActiveComponentTab('aging');
    }
  }, [activeItem]);

  // Set default tab when category changes
  useEffect(() => {
    if (activeCategory === 'receivables' && !activeComponentTab) {
      setActiveComponentTab('aging');
    } else if (activeCategory === 'payables' && !activeComponentTab) {
      setActiveComponentTab('commissions');
    }
  }, [activeCategory, activeComponentTab]);

  // Define tabs configuration based on active category
  const tabsConfig = useMemo<Tab[]>(() => {
    if (activeCategory === 'receivables') {
      return [
        {
          id: 'aging',
          label: 'Resumen de Antigüedad',
          content: <AgingSummary />,
        },
        {
          id: 'debtors',
          label: 'Lista de Deudores',
          content: <DebtorsList />,
        },
      ];
    } else if (activeCategory === 'payables') {
      return [
        {
          id: 'commissions',
          label: 'Cola de Aprobación',
          content: <CommissionQueue />,
        },
        {
          id: 'expenses',
          label: 'Gastos',
          content: <FirmExpenses />,
        },
      ];
    }
    return [];
  }, [activeCategory]);

  // Render content for reports (no tabs)
  if (activeCategory === 'reports') {
    return (
      <div className={styles.finanzas}>
        <div className={styles.finanzasContent}>
          <div className={styles.tabContent}>
            <ReportGenerator />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.finanzas}>
      <div className={styles.finanzasContent}>
        <div className={styles.tabContent}>
          <TabContainer
            tabs={tabsConfig}
            activeTab={activeComponentTab}
            onTabChange={setActiveComponentTab}
            showRefresh={true}
            onRefresh={refresh}
            isRefreshing={isRefreshing}
          />
        </div>
      </div>
    </div>
  );
}

