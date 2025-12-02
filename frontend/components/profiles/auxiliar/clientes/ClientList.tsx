'use client';

import { WorkspaceClient } from '@/types/accountant';
import styles from './ClientList.module.css';

export type Client = WorkspaceClient;

interface ClientListProps {
  clients: Client[];
  onSelectClient: (clientId: string) => void;
  selectedClientId?: string;
}

export default function ClientList({ clients, onSelectClient, selectedClientId }: ClientListProps) {
  return (
    <div className={styles.clientList}>
      <div className={styles.tableHeader}>
        <div className={styles.headerCell}>Entity</div>
        <div className={styles.headerCell}>Group</div>
        <div className={styles.headerCell}>Status</div>
        <div className={styles.headerCell}>Last Action</div>
      </div>
      <div className={styles.tableBody}>
        {clients.length > 0 ? (
          clients.map((client) => (
            <div
              key={client.id}
              className={`${styles.tableRow} ${
                selectedClientId === client.id ? styles.selectedRow : ''
              }`}
              onClick={() => onSelectClient(client.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectClient(client.id);
                }
              }}
            >
              <div className={styles.tableCell}>
                <div className={styles.entityName}>{client.entityName}</div>
                <div className={styles.entityRfc}>{client.rfc}</div>
              </div>
              <div className={styles.tableCell}>{client.group}</div>
              <div className={styles.tableCell}>
                <span className={`${styles.statusBadge} ${styles[client.status]}`}>
                  {client.status === 'up-to-date' ? 'Up to Date' : 'Behind'}
                </span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.lastAction}>{new Date(client.lastAction).toLocaleDateString()}</span>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.emptyState}>
            <p>No clients available</p>
          </div>
        )}
      </div>
    </div>
  );
}

