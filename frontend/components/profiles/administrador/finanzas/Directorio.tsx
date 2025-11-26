'use client';

import { useState, useMemo } from 'react';
import Table from '@/components/shared/Table';
import styles from './Directorio.module.css';

interface Client {
  id: string;
  legalName: string;
  rfc: string;
  contact: string;
  salesRep: string;
  contractStatus: 'active' | 'no-contract';
  group: string;
  debtStatus: 'clean' | 'overdue-30' | 'overdue-60';
}

export default function Directorio() {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [debtStatus, setDebtStatus] = useState<string>('all');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  // Mock data - replace with real data from API
  const [clients] = useState<Client[]>([
    {
      id: '1',
      legalName: 'Hospital General del Norte S.A. de C.V.',
      rfc: 'HGN850101ABC',
      contact: 'contacto@hospitalnorte.com',
      salesRep: 'Carlos Ramírez',
      contractStatus: 'active',
      group: 'Medical',
      debtStatus: 'overdue-60',
    },
    {
      id: '2',
      legalName: 'Clínica San José S.C.',
      rfc: 'CSJ920315XYZ',
      contact: 'info@clinicasanjose.com',
      salesRep: 'Ana Martínez',
      contractStatus: 'active',
      group: 'Medical',
      debtStatus: 'clean',
    },
    {
      id: '3',
      legalName: 'Constructora ABC S.A. de C.V.',
      rfc: 'CAB750620DEF',
      contact: 'contacto@constructoraabc.com',
      salesRep: 'Carlos Ramírez',
      contractStatus: 'active',
      group: 'Construction',
      debtStatus: 'overdue-30',
    },
    {
      id: '4',
      legalName: 'Empresa XYZ S.A.',
      rfc: 'EXY880415GHI',
      contact: 'info@empresaxyz.com',
      salesRep: 'Ana Martínez',
      contractStatus: 'no-contract',
      group: 'Medical',
      debtStatus: 'clean',
    },
  ]);

  // Filter clients
  const filteredClients = useMemo(() => {
    let filtered = clients;

    // Filter by group
    if (selectedGroup !== 'all') {
      filtered = filtered.filter(c => c.group === selectedGroup);
    }

    // Filter by debt status
    if (debtStatus !== 'all') {
      filtered = filtered.filter(c => c.debtStatus === debtStatus);
    }

    return filtered;
  }, [clients, selectedGroup, debtStatus]);

  const handle360View = (client: Client) => {
    setSelectedClient(client);
  };

  const handleCloseProfile = () => {
    setSelectedClient(null);
  };

  const columns = [
    {
      key: 'legalName',
      header: 'Razón Social / RFC',
      render: (row: Client) => (
        <div className={styles.doubleLineCell}>
          <div className={styles.primaryText}>{row.legalName}</div>
          <div className={styles.secondaryText}>{row.rfc}</div>
        </div>
      ),
    },
    {
      key: 'contact',
      header: 'Contacto',
      render: (row: Client) => (
        <div className={styles.contactCell}>{row.contact}</div>
      ),
    },
    {
      key: 'salesRep',
      header: 'Representante de Ventas',
      render: (row: Client) => (
        <div className={styles.salesRepCell}>{row.salesRep}</div>
      ),
    },
    {
      key: 'contract',
      header: 'Contrato',
      render: (row: Client) => (
        <span
          className={`${styles.statusChip} ${
            row.contractStatus === 'active'
              ? styles.statusActive
              : styles.statusNoContract
          }`}
        >
          {row.contractStatus === 'active' ? 'Activo' : 'Sin Contrato'}
        </span>
      ),
    },
    {
      key: 'action',
      header: 'Acción',
      render: (row: Client) => (
        <button
          className={styles.viewButton}
          onClick={() => handle360View(row)}
        >
          Vista 360
        </button>
      ),
    },
  ];

  const availableGroups = ['Medical', 'Construction'];

  return (
    <div className={styles.directorio}>
      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Grupo:</label>
          <div className={styles.selectWrapper}>
            <select
              className={styles.selectInput}
              value={selectedGroup}
              onChange={e => setSelectedGroup(e.target.value)}
            >
              <option value="all">Todos</option>
              {availableGroups.map(group => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
            <svg
              className={styles.selectChevron}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Estado de Deuda:</label>
          <div className={styles.selectWrapper}>
            <select
              className={styles.selectInput}
              value={debtStatus}
              onChange={e => setDebtStatus(e.target.value)}
            >
              <option value="all">Todos</option>
              <option value="clean">Al Día</option>
              <option value="overdue-30">Vencido &gt; 30</option>
              <option value="overdue-60">Vencido &gt; 60</option>
            </select>
            <svg
              className={styles.selectChevron}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className={styles.tableContainer}>
        <Table
          data={filteredClients}
          columns={columns}
          keyExtractor={row => row.id}
          emptyMessage="No se encontraron clientes"
        />
      </div>

      {/* Profile Modal */}
      {selectedClient && (
        <div className={styles.modalOverlay} onClick={handleCloseProfile}>
          <div
            className={styles.modalContent}
            onClick={e => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h2>Vista 360 - {selectedClient.legalName}</h2>
              <button
                className={styles.closeButton}
                onClick={handleCloseProfile}
              >
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.profileSection}>
                <h3>Información del Cliente</h3>
                <div className={styles.infoGrid}>
                  <div>
                    <label>Razón Social:</label>
                    <p>{selectedClient.legalName}</p>
                  </div>
                  <div>
                    <label>RFC:</label>
                    <p>{selectedClient.rfc}</p>
                  </div>
                  <div>
                    <label>Contacto:</label>
                    <p>{selectedClient.contact}</p>
                  </div>
                  <div>
                    <label>Representante de Ventas:</label>
                    <p>{selectedClient.salesRep}</p>
                  </div>
                  <div>
                    <label>Grupo:</label>
                    <p>{selectedClient.group}</p>
                  </div>
                  <div>
                    <label>Estado del Contrato:</label>
                    <p>{selectedClient.contractStatus === 'active' ? 'Activo' : 'Sin Contrato'}</p>
                  </div>
                  <div>
                    <label>Estado de Deuda:</label>
                    <p>
                      {selectedClient.debtStatus === 'clean' 
                        ? 'Al Día' 
                        : selectedClient.debtStatus === 'overdue-30'
                        ? 'Vencido > 30'
                        : 'Vencido > 60'}
                    </p>
                  </div>
                </div>
              </div>
              {/* TODO: Add more sections for complete 360 view */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

