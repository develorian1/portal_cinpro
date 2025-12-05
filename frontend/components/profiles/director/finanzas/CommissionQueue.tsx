'use client';

import { useState } from 'react';
import { Table, TableColumn } from '@/components/shared';
import styles from './CommissionQueue.module.css';

interface Commission {
  id: string;
  staffName: string;
  staffRole: string;
  client: string;
  baseAmount: number;
  commissionRate: number;
  totalOwed: number;
  status: 'pending';
}

export default function CommissionQueue() {
  // Mock data - replace with real data from API
  const [commissions, setCommissions] = useState<Commission[]>([
    {
      id: '1',
      staffName: 'María González',
      staffRole: 'Gerente de Proyecto',
      client: 'Hospital General del Norte',
      baseAmount: 250000,
      commissionRate: 0.15,
      totalOwed: 37500,
      status: 'pending',
    },
    {
      id: '2',
      staffName: 'Carlos Ramírez',
      staffRole: 'Consultor Senior',
      client: 'Clínica San José',
      baseAmount: 180000,
      commissionRate: 0.12,
      totalOwed: 21600,
      status: 'pending',
    },
    {
      id: '3',
      staffName: 'Ana Martínez',
      staffRole: 'Especialista',
      client: 'Corporación Industrial SA',
      baseAmount: 320000,
      commissionRate: 0.18,
      totalOwed: 57600,
      status: 'pending',
    },
  ]);

  const [selectedCommissions, setSelectedCommissions] = useState<Set<string>>(new Set());

  const toggleSelection = (id: string) => {
    const newSelection = new Set(selectedCommissions);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedCommissions(newSelection);
  };

  const toggleSelectAll = () => {
    if (selectedCommissions.size === commissions.length) {
      setSelectedCommissions(new Set());
    } else {
      setSelectedCommissions(new Set(commissions.map(c => c.id)));
    }
  };

  const handleApproveAndPay = () => {
    if (selectedCommissions.size === 0) {
      alert('Por favor selecciona al menos una comisión');
      return;
    }
    // TODO: Implement approval and payment logic
    console.log('Approve and pay:', Array.from(selectedCommissions));
    alert(`Aprobadas y marcadas como pagadas: ${selectedCommissions.size} comisiones`);
    // Remove approved commissions
    setCommissions(commissions.filter(c => !selectedCommissions.has(c.id)));
    setSelectedCommissions(new Set());
  };

  const totalSelected = Array.from(selectedCommissions).reduce((sum, id) => {
    const commission = commissions.find(c => c.id === id);
    return sum + (commission?.totalOwed || 0);
  }, 0);

  const columns: TableColumn<Commission>[] = [
    {
      key: 'checkbox',
      header: () => (
        <input
          type="checkbox"
          checked={selectedCommissions.size === commissions.length && commissions.length > 0}
          onChange={toggleSelectAll}
          onClick={(e) => e.stopPropagation()}
          className={styles.checkbox}
        />
      ),
      mobileLabel: '',
      render: (commission) => (
        <input
          type="checkbox"
          checked={selectedCommissions.has(commission.id)}
          onChange={() => toggleSelection(commission.id)}
          onClick={(e) => e.stopPropagation()}
          className={styles.checkbox}
        />
      ),
    },
    {
      key: 'staff',
      header: 'Personal',
      mobileLabel: 'Personal',
      render: (commission) => (
        <div className={styles.staffInfo}>
          <span className={styles.staffName}>{commission.staffName}</span>
          <span className={styles.staffRole}>{commission.staffRole}</span>
        </div>
      ),
    },
    {
      key: 'client',
      header: 'Cliente',
      mobileLabel: 'Cliente',
      render: (commission) => commission.client,
    },
    {
      key: 'baseAmount',
      header: 'Monto Base',
      mobileLabel: 'Base',
      render: (commission) => `$${commission.baseAmount.toLocaleString()}`,
    },
    {
      key: 'commissionRate',
      header: '% Comisión',
      mobileLabel: 'Comisión',
      render: (commission) => `${(commission.commissionRate * 100).toFixed(0)}%`,
    },
    {
      key: 'totalOwed',
      header: 'Total a Pagar',
      mobileLabel: 'Total',
      render: (commission) => (
        <span className={styles.totalOwed}>
          ${commission.totalOwed.toLocaleString()}
        </span>
      ),
    },
    {
      key: 'status',
      header: 'Estado',
      mobileLabel: 'Estado',
      render: (commission) => (
        <span className={styles.statusBadge}>{commission.status}</span>
      ),
    },
  ];

  return (
    <div className={styles.commissionQueue}>
      <Table
        data={commissions}
        columns={columns}
        keyExtractor={(commission) => commission.id}
        containerClassName={styles.tableContainer}
        onRowClick={(commission) => toggleSelection(commission.id)}
      />

      {commissions.length > 0 && (
        <div className={styles.footer}>
          <div className={styles.footerInfo}>
            <span className={styles.selectedCount}>
              {selectedCommissions.size} de {commissions.length} seleccionadas
            </span>
            {selectedCommissions.size > 0 && (
              <span className={styles.totalSelected}>
                Total: ${totalSelected.toLocaleString()}
              </span>
            )}
          </div>
          <button
            className={styles.approveBtn}
            onClick={handleApproveAndPay}
            disabled={selectedCommissions.size === 0}
          >
            Aprobar y Marcar como Pagado
          </button>
        </div>
      )}
    </div>
  );
}

