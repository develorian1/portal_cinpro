'use client';

import { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { ClientTab, WorkspaceClient } from '@/types/accountant';

export type { ClientTab } from '@/types/accountant';

interface ClientContextType {
  selectedClientId: string | undefined;
  setSelectedClientId: (clientId: string | undefined) => void;
  activeTab: ClientTab;
  setActiveTab: (tab: ClientTab) => void;
  clients: WorkspaceClient[];
  setClients: (clients: WorkspaceClient[]) => void;
  getClientById: (clientId?: string) => WorkspaceClient | undefined;
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
  const [clients, setClients] = useState<WorkspaceClient[]>([]);

  const value = useMemo(
    () => ({
      selectedClientId,
      setSelectedClientId,
      activeTab,
      setActiveTab,
      clients,
      setClients,
      getClientById: (clientId?: string) =>
        clientId ? clients.find((client) => client.id === clientId) : undefined,
    }),
    [selectedClientId, activeTab, clients]
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
      clients: [],
      setClients: () => {},
      getClientById: () => undefined,
    };
  }
  return context;
}

