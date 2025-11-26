'use client';

import { useEffect } from 'react';
import ClientList, { Client } from './ClientList';
import { SATReceivablesTab, SATPayablesTab, BancosTab, ConciliacionTab, ReportesTab } from './tabs';
import { useClient } from '@/contexts/ClientContext';
import styles from './ClientDetailView.module.css';

interface ClientDetailViewProps {
  clients: Client[];
  selectedClientId?: string;
  onSelectClient: (clientId: string) => void;
}

export default function ClientDetailView({ clients, selectedClientId, onSelectClient }: ClientDetailViewProps) {
  const selectedClient = selectedClientId ? clients.find(c => c.id === selectedClientId) : null;
  const { activeTab, setActiveTab, setSelectedClientId } = useClient();

  // Sync context with prop
  useEffect(() => {
    setSelectedClientId(selectedClientId);
  }, [selectedClientId, setSelectedClientId]);

  if (!selectedClientId || !selectedClient) {
    return (
      <div className={styles.clientDetailView}>
        <div className={styles.clientListContainer}>
          <ClientList clients={clients} onSelectClient={onSelectClient} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.clientDetailView}>
      <div className={styles.contextBar}>
        <div className={styles.contextInfo}>
          <button className={styles.backButton} onClick={() => onSelectClient('')}>
            ← Back
          </button>
          <span className={styles.clientName}>{selectedClient.entityName}</span>
          <span className={styles.rfc}>RFC: {selectedClient.rfc}</span>
          <span className={styles.balance}>Current Balance: $0.00</span>
        </div>
      </div>

      <div className={styles.workspaceContainer}>
        <div className={styles.tabContent}>
          {activeTab === 'sat-receivables' && <SATReceivablesTab />}
          {activeTab === 'sat-payables' && <SATPayablesTab />}
          {activeTab === 'bancos' && <BancosTab />}
          {activeTab === 'conciliacion' && <ConciliacionTab />}
          {activeTab === 'reportes' && <ReportesTab />}
        </div>
      </div>
    </div>
  );
}

