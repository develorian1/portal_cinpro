'use client';

import { useEffect, useMemo } from 'react';
import ClientList, { Client } from './ClientList';
import { SATReceivablesTab, SATPayablesTab, BancosTab, ConciliacionTab, ReportesTab } from './tabs';
import { useClient } from '@/contexts/ClientContext';
import styles from './ClientDetailView.module.css';

interface ClientDetailViewProps {
  clients: Client[];
  selectedClientId?: string;
  onSelectClient: (clientId: string) => void;
}

export default function ClientDetailView({
  clients,
  selectedClientId,
  onSelectClient,
}: ClientDetailViewProps) {
  const selectedClient = useMemo(
    () => (selectedClientId ? clients.find((client) => client.id === selectedClientId) : null),
    [clients, selectedClientId]
  );
  const { activeTab, setSelectedClientId } = useClient();

  useEffect(() => {
    setSelectedClientId(selectedClientId);
  }, [selectedClientId, setSelectedClientId]);

  if (!clients.length) {
    return (
      <div className={styles.placeholderContent}>
        <p>No hay clientes disponibles</p>
      </div>
    );
  }

  if (!selectedClientId || !selectedClient) {
    return (
      <div className={styles.clientDetailView}>
        <div className={styles.clientListContainer}>
          <ClientList
            clients={clients}
            onSelectClient={onSelectClient}
            selectedClientId={selectedClientId}
          />
        </div>
      </div>
    );
  }

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);

  return (
    <div className={styles.clientDetailView}>
      <div className={styles.contextBar}>
        <div className={styles.contextInfo}>
          <button className={styles.backButton} onClick={() => onSelectClient('')}>
            {'<'} Volver
          </button>
          <div className={styles.contextDetails}>
            <span className={styles.clientName}>{selectedClient.entityName}</span>
            <span className={styles.rfc}>RFC: {selectedClient.rfc}</span>
          </div>
          <span className={styles.balance}>
            Balance actual: {formatCurrency(selectedClient.balance)}
          </span>
        </div>
      </div>

      <div className={styles.workspaceContainer}>
        <div className={styles.tabContent}>
          {activeTab === 'sat-receivables' && (
            <SATReceivablesTab
              invoices={selectedClient.receivables}
              clientId={selectedClient.id}
              clientName={selectedClient.entityName}
            />
          )}
          {activeTab === 'sat-payables' && (
            <SATPayablesTab
              invoices={selectedClient.payables}
              clientId={selectedClient.id}
              clientName={selectedClient.entityName}
            />
          )}
          {activeTab === 'bancos' && (
            <BancosTab
              clientId={selectedClient.id}
              accounts={selectedClient.bankAccounts}
              transactions={selectedClient.bankTransactions}
            />
          )}
          {activeTab === 'conciliacion' && (
            <ConciliacionTab clientId={selectedClient.id} data={selectedClient.reconciliation} />
          )}
          {activeTab === 'reportes' && (
            <ReportesTab
              clientId={selectedClient.id}
              presets={selectedClient.reportPresets}
              clientName={selectedClient.entityName}
            />
          )}
        </div>
      </div>
    </div>
  );
}
