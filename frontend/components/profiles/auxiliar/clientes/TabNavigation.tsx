'use client';

import { useClient, ClientTab } from '@/contexts/ClientContext';
import styles from './TabNavigation.module.css';

const tabs: { id: ClientTab; label: string }[] = [
  { id: 'sat-receivables', label: 'SAT - Cuentas por Cobrar' },
  { id: 'sat-payables', label: 'SAT - Cuentas por Pagar' },
  { id: 'bancos', label: 'Bancos' },
  { id: 'conciliacion', label: 'Conciliacion' },
  { id: 'reportes', label: 'Reportes' },
];

export default function TabNavigation() {
  const { activeTab, setActiveTab } = useClient();
  
  return (
    <div className={styles.tabNavigation}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
          onClick={() => setActiveTab(tab.id)}
          aria-selected={activeTab === tab.id}
          role="tab"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

