'use client';

import { useState, useMemo } from 'react';
import Table, { TableColumn } from '@/components/shared/Table';
import styles from './MasterStatusList.module.css';

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

interface MasterStatusListProps {
  clients: Client[];
  onSelectClient: (client: Client) => void;
}

type SortField = 'entityName' | 'currentBalance' | 'taxStatus' | 'lastActivity';
type SortDirection = 'asc' | 'desc';

export default function MasterStatusList({ clients, onSelectClient }: MasterStatusListProps) {
  const [sortField, setSortField] = useState<SortField>('entityName');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const getTaxStatusLabel = (status: string) => {
    switch (status) {
      case 'filed':
        return 'Al día';
      case 'pending':
        return 'Pendiente';
      case 'overdue':
        return 'Vencido';
      default:
        return status;
    }
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedClients = useMemo(() => {
    let result = [...clients];

    // Sort
    result.sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case 'entityName':
          comparison = a.entityName.localeCompare(b.entityName);
          break;
        case 'currentBalance':
          comparison = a.currentBalance - b.currentBalance;
          break;
        case 'taxStatus':
          comparison = a.taxStatus.localeCompare(b.taxStatus);
          break;
        case 'lastActivity':
          comparison = new Date(a.lastActivity).getTime() - new Date(b.lastActivity).getTime();
          break;
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [clients, sortField, sortDirection]);

  const columns: TableColumn<Client>[] = [
    {
      key: 'entity',
      header: (
        <button className={styles.sortHeader} onClick={() => handleSort('entityName')}>
          Cliente
          {sortField === 'entityName' && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {sortDirection === 'asc' ? (
                <polyline points="18 15 12 9 6 15" />
              ) : (
                <polyline points="6 9 12 15 18 9" />
              )}
            </svg>
          )}
        </button>
      ),
      render: (client) => (
        <div className={styles.entityCell}>
          <span className={styles.entityName}>{client.entityName}</span>
          <span className={styles.entityRfc}>{client.rfc}</span>
        </div>
      ),
    },
    {
      key: 'balance',
      header: (
        <button className={styles.sortHeader} onClick={() => handleSort('currentBalance')}>
          Balance
          {sortField === 'currentBalance' && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {sortDirection === 'asc' ? (
                <polyline points="18 15 12 9 6 15" />
              ) : (
                <polyline points="6 9 12 15 18 9" />
              )}
            </svg>
          )}
        </button>
      ),
      render: (client) => (
        <span className={`${styles.balance} ${client.currentBalance >= 0 ? styles.positive : styles.negative}`}>
          {formatCurrency(client.currentBalance)}
        </span>
      ),
    },
    {
      key: 'taxStatus',
      header: (
        <button className={styles.sortHeader} onClick={() => handleSort('taxStatus')}>
          Estado Fiscal
          {sortField === 'taxStatus' && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {sortDirection === 'asc' ? (
                <polyline points="18 15 12 9 6 15" />
              ) : (
                <polyline points="6 9 12 15 18 9" />
              )}
            </svg>
          )}
        </button>
      ),
      render: (client) => (
        <span className={`${styles.statusChip} ${styles[client.taxStatus]}`}>
          {getTaxStatusLabel(client.taxStatus)}
        </span>
      ),
    },
    {
      key: 'lastActivity',
      header: (
        <button className={styles.sortHeader} onClick={() => handleSort('lastActivity')}>
          Última Actividad
          {sortField === 'lastActivity' && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {sortDirection === 'asc' ? (
                <polyline points="18 15 12 9 6 15" />
              ) : (
                <polyline points="6 9 12 15 18 9" />
              )}
            </svg>
          )}
        </button>
      ),
      render: (client) => (
        <span className={styles.lastActivity}>{formatDate(client.lastActivity)}</span>
      ),
    },
    {
      key: 'accountant',
      header: 'Contador Asignado',
      render: (client) => (
        <div className={styles.accountantCell}>
          <div className={styles.avatar}>{client.assignedAccountant.avatar}</div>
          <span className={styles.accountantName}>{client.assignedAccountant.name}</span>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.masterStatusList}>
      <Table
        data={sortedClients}
        columns={columns}
        keyExtractor={(client) => client.id}
        emptyMessage="No hay clientes que mostrar"
        containerClassName={styles.tableContainer}
        onRowClick={(client) => onSelectClient(client)}
      />
    </div>
  );
}



