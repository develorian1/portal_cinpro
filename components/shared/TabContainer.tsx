'use client';

import { ReactNode, memo, useMemo } from 'react';
import RefreshButton from './RefreshButton';
import styles from './TabContainer.module.css';

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabContainerProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  showRefresh?: boolean;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  refreshLabel?: string;
}

const TabContainer = memo(function TabContainer({
  tabs,
  activeTab,
  onTabChange,
  showRefresh = false,
  onRefresh,
  isRefreshing = false,
  refreshLabel = 'Actualizar',
}: TabContainerProps) {
  if (tabs.length === 0) {
    return null;
  }

  const activeTabContent = useMemo(
    () => tabs.find((tab) => tab.id === activeTab)?.content,
    [tabs, activeTab]
  );

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabsWrapper}>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {showRefresh && onRefresh && (
          <RefreshButton
            onClick={onRefresh}
            isRefreshing={isRefreshing}
            label={refreshLabel}
          />
        )}
      </div>
      <div className={styles.contentWrapper}>{activeTabContent}</div>
    </div>
  );
});

export default TabContainer;

