'use client';

import { useState, useMemo } from 'react';
import { Table, TableColumn } from '@/components/shared';
import ClientProfile from './ClientProfile';
import styles from './Clientes.module.css';

export interface Client {
  id: string;
  legalName: string;
  rfc: string;
  group: string;
  managedBy: string;
  monthlyFee: number;
  debtStatus: 'clean' | 'overdue';
  isActive: boolean;
  isArchived: boolean;
  hasDebt: boolean;
}

export default function Clientes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'archived' | 'debtors'>('all');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  // Mock data - replace with real data from API
  const [clients] = useState<Client[]>([
    {
      id: '1',
      legalName: 'Hospital General del Norte S.A. de C.V.',
      rfc: 'HGN850101ABC',
      group: 'Medical',
      managedBy: 'Carlos Ramírez',
      monthlyFee: 125000,
      debtStatus: 'overdue',
      isActive: true,
      isArchived: false,
      hasDebt: true,
    },
    {
      id: '2',
      legalName: 'Clínica San José S.C.',
      rfc: 'CSJ920315XYZ',
      group: 'Medical',
      managedBy: 'Ana Martínez',
      monthlyFee: 85000,
      debtStatus: 'clean',
      isActive: true,
      isArchived: false,
      hasDebt: false,
    },
    {
      id: '3',
      legalName: 'Corporación Industrial SA de CV',
      rfc: 'CIS750620DEF',
      group: 'Industrial',
      managedBy: 'Carlos Ramírez',
      monthlyFee: 200000,
      debtStatus: 'overdue',
      isActive: true,
      isArchived: false,
      hasDebt: true,
    },
    {
      id: '4',
      legalName: 'Grupo Educativo ABC S.A.',
      rfc: 'GEA880415GHI',
      group: 'Education',
      managedBy: 'Ana Martínez',
      monthlyFee: 95000,
      debtStatus: 'clean',
      isActive: true,
      isArchived: false,
      hasDebt: false,
    },
    {
      id: '5',
      legalName: 'Servicios Financieros Beta S.C.',
      rfc: 'SFB900201JKL',
      group: 'Financial',
      managedBy: 'Carlos Ramírez',
      monthlyFee: 150000,
      debtStatus: 'clean',
      isActive: false,
      isArchived: true,
      hasDebt: false,
    },
    {
      id: '6',
      legalName: 'Comercializadora Delta S.A. de C.V.',
      rfc: 'CDE820510MNO',
      group: 'Retail',
      managedBy: 'Ana Martínez',
      monthlyFee: 75000,
      debtStatus: 'overdue',
      isActive: true,
      isArchived: false,
      hasDebt: true,
    },
  ]);

  // Filter and search clients
  const filteredClients = useMemo(() => {
    let filtered = clients;

    // Apply status filter
    if (activeFilter === 'active') {
      filtered = filtered.filter(c => c.isActive && !c.isArchived);
    } else if (activeFilter === 'archived') {
      filtered = filtered.filter(c => c.isArchived);
    } else if (activeFilter === 'debtors') {
      filtered = filtered.filter(c => c.hasDebt && c.isActive);
    }

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        c =>
          c.legalName.toLowerCase().includes(query) ||
          c.rfc.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [clients, activeFilter, searchQuery]);

  const handleClientClick = (client: Client) => {
    setSelectedClient(client);
  };

  const handleCloseProfile = () => {
    setSelectedClient(null);
  };

  return (
    <div className={styles.clientes}>
      <div className={styles.clientesContent}>
        {/* Search and Filter Bar */}
        <div className={styles.topBar}>
          <div className={styles.searchContainer}>
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Buscar Cliente o RFC..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className={styles.filterContainer}>
            <button
              className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.active : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              Todos
            </button>
            <button
              className={`${styles.filterBtn} ${activeFilter === 'active' ? styles.active : ''}`}
              onClick={() => setActiveFilter('active')}
            >
              Activos
            </button>
            <button
              className={`${styles.filterBtn} ${activeFilter === 'archived' ? styles.active : ''}`}
              onClick={() => setActiveFilter('archived')}
            >
              Archivados
            </button>
            <button
              className={`${styles.filterBtn} ${activeFilter === 'debtors' ? styles.active : ''}`}
              onClick={() => setActiveFilter('debtors')}
            >
              Deudores
            </button>
          </div>
        </div>

        {/* Client Master List */}
        <div className={styles.clientList}>
          <Table
            data={filteredClients}
            columns={[
              {
                key: 'legalName',
                header: 'Razón Social',
                render: (client) => (
                  <div className={styles.legalName}>
                    <span>{client.legalName}</span>
                    <span className={styles.rfc}>{client.rfc}</span>
                  </div>
                ),
              },
              {
                key: 'group',
                header: 'Grupo',
                render: (client) => (
                  <span className={styles.groupBadge}>{client.group}</span>
                ),
              },
              {
                key: 'managedBy',
                header: 'Gestionado Por',
                render: (client) => (
                  <span className={styles.managedBy}>{client.managedBy}</span>
                ),
              },
              {
                key: 'monthlyFee',
                header: 'Cuota Mensual',
                render: (client) => (
                  <span className={styles.monthlyFee}>
                    ${client.monthlyFee.toLocaleString()}
                  </span>
                ),
              },
              {
                key: 'debtStatus',
                header: 'Estado de Deuda',
                render: (client) => (
                  <span
                    className={`${styles.debtStatus} ${
                      client.debtStatus === 'clean' ? styles.clean : styles.overdue
                    }`}
                  >
                    {client.debtStatus === 'clean' ? 'Al Día' : 'Vencido'}
                  </span>
                ),
              },
            ]}
            keyExtractor={(client) => client.id}
            emptyMessage="No se encontraron clientes que coincidan con sus criterios."
            onRowClick={(client) => handleClientClick(client)}
            getRowClassName={() => styles.tableRow}
            containerClassName={styles.tableContainer}
          />
        </div>
      </div>

      {/* Client Profile Modal */}
      {selectedClient && (
        <ClientProfile client={selectedClient} onClose={handleCloseProfile} />
      )}
    </div>
  );
}

