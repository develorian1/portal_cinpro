'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import MasterStatusList from './MasterStatusList';
import ClientDetailView from './ClientDetailView';
import clientStatusData from '@/data/gerente/clientStatus.json';
import ledgerData from '@/data/gerente/ledger.json';
import documentsData from '@/data/gerente/documents.json';
import chatLogData from '@/data/gerente/chatLog.json';
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
    const clientId = selectedClient.id;
    return {
      ledger: (ledgerData as Record<string, any>)[clientId] || [],
      documents: (documentsData as Record<string, any>)[clientId] || [],
      chatLog: (chatLogData as Record<string, any>)[clientId] || [],
    };
  }, [selectedClient]);

  const handleSelectClient = (client: Client) => {
    setSelectedClient(client);
  };

  const handleCloseModal = useCallback(() => {
    setSelectedClient(null);
  }, []);

  // Prevent body scroll when modal is open and handle ESC key
  useEffect(() => {
    if (selectedClient) {
      document.body.style.overflow = 'hidden';
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleCloseModal();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedClient, handleCloseModal]);

  return (
    <div className={styles.clientes}>
      <div className={styles.clientesContent}>
        <MasterStatusList
          clients={clients}
          onSelectClient={handleSelectClient}
        />
      </div>

      {selectedClient && clientDetails && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <ClientDetailView
              client={selectedClient}
              details={clientDetails}
              onClose={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}

