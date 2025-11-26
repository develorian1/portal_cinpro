'use client';

import { createContext, useContext, useState, useMemo, useCallback, ReactNode } from 'react';

type FinanzasTab = 'receivables' | 'payables' | 'reports';

interface FinanzasContextType {
  activeTab: FinanzasTab;
  setActiveTab: (tab: FinanzasTab) => void;
  isRefreshing: boolean;
  refresh: () => Promise<void>;
}

const FinanzasContext = createContext<FinanzasContextType | undefined>(undefined);

export function FinanzasProvider({
  children,
  defaultTab = 'receivables'
}: {
  children: ReactNode;
  defaultTab?: FinanzasTab;
}) {
  const [activeTab, setActiveTab] = useState<FinanzasTab>(defaultTab);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refresh = useCallback(async () => {
    setIsRefreshing(true);
    // TODO: Implement SQL query refresh logic
    // This would trigger live SQL queries to update all data
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setIsRefreshing(false);
  }, []);

  const value = useMemo(
    () => ({
      activeTab,
      setActiveTab,
      isRefreshing,
      refresh,
    }),
    [activeTab, isRefreshing, refresh]
  );

  return (
    <FinanzasContext.Provider value={value}>
      {children}
    </FinanzasContext.Provider>
  );
}

export function useFinanzas() {
  const context = useContext(FinanzasContext);
  if (context === undefined) {
    // Return default values when context is not available
    // This allows the hook to be called even when provider is not present
    return {
      activeTab: 'receivables' as const,
      setActiveTab: () => {},
      isRefreshing: false,
      refresh: async () => {},
    };
  }
  return context;
}

