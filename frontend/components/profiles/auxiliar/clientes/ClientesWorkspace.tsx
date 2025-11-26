'use client';

import { useState, useEffect } from 'react';
import ClientDetailView, { Client } from './ClientDetailView';
import { useClient } from '@/contexts/ClientContext';
import styles from './ClientesWorkspace.module.css';

export default function ClientesWorkspace() {
  const [clients, setClients] = useState<Client[]>([]);
  const { selectedClientId, setSelectedClientId } = useClient();

  useEffect(() => {
    // TODO: Replace with actual API call
    setClients([
      {
        id: '1',
        entityName: 'Acme Corporation',
        rfc: 'ACM123456789',
        group: 'Medical',
        status: 'up-to-date',
        lastAction: '2024-01-10',
      },
      {
        id: '2',
        entityName: 'Tech Solutions SA',
        rfc: 'TEC987654321',
        group: 'Technology',
        status: 'behind',
        lastAction: '2024-01-05',
      },
    ]);
  }, []);

  return (
    <div className={styles.clientesWorkspace}>
      <ClientDetailView
        clients={clients}
        selectedClientId={selectedClientId}
        onSelectClient={setSelectedClientId}
      />
    </div>
  );
}

