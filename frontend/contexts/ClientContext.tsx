'use client';

import { createContext, useContext, useState, useMemo, ReactNode } from 'react';

export type ClientTab = 'sat-receivables' | 'sat-payables' | 'bancos' | 'conciliacion' | 'reportes';

interface ClientContextType {
  selectedClientId: string | undefined;
  setSelectedClientId: (clientId: string | undefined) => void;
  activeTab: ClientTab;
  setActiveTab: (tab: ClientTab) => void;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export function ClientProvider({
  children,
  defaultTab = 'sat-receivables'
}: {
  children: ReactNode;
  defaultTab?: ClientTab;
}) {
  const [selectedClientId, setSelectedClientId] = useState<string | undefined>(undefined);
  const [activeTab, setActiveTab] = useState<ClientTab>(defaultTab);

  const value = useMemo(
    () => ({
      selectedClientId,
      setSelectedClientId,
      activeTab,
      setActiveTab,
    }),
    [selectedClientId, activeTab]
  );

  return (
    <ClientContext.Provider value={value}>
      {children}
    </ClientContext.Provider>
  );
}

export function useClient() {
  const context = useContext(ClientContext);
  if (context === undefined) {
    // Return default values when context is not available
    return {
      selectedClientId: undefined,
      setSelectedClientId: () => {},
      activeTab: 'sat-receivables' as const,
      setActiveTab: () => {},
    };
  }
  return context;
}

