'use client';

import { useState, useMemo } from 'react';
import MasterStatusList from './MasterStatusList';
import ClientDetailView from './ClientDetailView';
import clientStatusData from '@/data/gerente/clientStatus.json';
import styles from './Clientes.module.css';

interface Client {
  id: string;
  entityName: string;
  rfc: string;
  currentBalance: number;
  taxStatus: 'filed' | 'pending' | 'overdue';
  lastActivity: string;
  assignedAccountant: {
    id: string;
    name: string;
    avatar: string;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  monthlyRevenue: number;
  sector: string;
}

export default function Clientes() {
  const [clients] = useState(clientStatusData.clients as Client[]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const clientDetails = useMemo(() => {
    if (!selectedClient) return null;
    const details = clientStatusData.clientDetails[selectedClient.id as keyof typeof clientStatusData.clientDetails];
    return details || {
      ledger: [],
      documents: [],
      chatLog: [],
    };
  }, [selectedClient]);

  const handleSelectClient = (client: Client) => {
    setSelectedClient(client);
  };

  const handleBack = () => {
    setSelectedClient(null);
  };

  return (
    <div className={styles.clientes}>
      {selectedClient && clientDetails ? (
        <ClientDetailView
          client={selectedClient}
          details={clientDetails}
          onBack={handleBack}
        />
      ) : (
        <div className={styles.clientesContent}>
          <MasterStatusList
            clients={clients}
            onSelectClient={handleSelectClient}
          />
        </div>
      )}
    </div>
  );
}

