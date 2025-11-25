'use client';

import { createContext, useContext, useState, useMemo, useCallback, ReactNode } from 'react';

type UsuariosTab = 'auxiliares' | 'admins' | 'jefes';

interface UsuariosContextType {
  activeTab: UsuariosTab;
  setActiveTab: (tab: UsuariosTab) => void;
  isRefreshing: boolean;
  refresh: () => Promise<void>;
}

const UsuariosContext = createContext<UsuariosContextType | undefined>(undefined);

export function UsuariosProvider({
  children,
  defaultTab = 'auxiliares'
}: {
  children: ReactNode;
  defaultTab?: UsuariosTab;
}) {
  const [activeTab, setActiveTab] = useState<UsuariosTab>(defaultTab);
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
    <UsuariosContext.Provider value={value}>
      {children}
    </UsuariosContext.Provider>
  );
}

export function useUsuarios() {
  const context = useContext(UsuariosContext);
  if (context === undefined) {
    // Return default values when context is not available
    return {
      activeTab: 'auxiliares' as const,
      setActiveTab: () => {},
      isRefreshing: false,
      refresh: async () => {},
    };
  }
  return context;
}

