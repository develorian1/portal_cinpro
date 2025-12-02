'use client';

import { useState } from 'react';
import { Table, TableColumn } from '@/components/shared';
import styles from './DebtorsList.module.css';

interface Debtor {
  id: string;
  clientName: string;
  clientId: string;
  group: string;
  amountDue: number;
  daysLate: number;
  isOverdue: boolean;
}

export default function DebtorsList() {
  // Mock data - replace with real data from API
  const [debtors] = useState<Debtor[]>([
    {
      id: '1',
      clientName: 'Hospital General del Norte',
      clientId: 'client-001',
      group: 'Medical',
      amountDue: 125000,
      daysLate: 45,
      isOverdue: true,
    },
    {
      id: '2',
      clientName: 'Clínica San José',
      clientId: 'client-002',
      group: 'Medical',
      amountDue: 85000,
      daysLate: 0,
      isOverdue: false,
    },
    {
      id: '3',
      clientName: 'Corporación Industrial SA',
      clientId: 'client-003',
      group: 'Industrial',
      amountDue: 200000,
      daysLate: 72,
      isOverdue: true,
    },
    {
      id: '4',
      clientName: 'Grupo Educativo ABC',
      clientId: 'client-004',
      group: 'Education',
      amountDue: 95000,
      daysLate: 15,
      isOverdue: false,
    },
  ]);

  const handleNotify = (debtorId: string) => {
    // TODO: Implement notification logic
    console.log('Notify debtor:', debtorId);
    alert(`Notificación enviada al cliente ${debtorId}`);
  };

  const columns: TableColumn<Debtor>[] = [
    {
      key: 'client',
      header: 'Cliente',
      mobileLabel: 'Cliente',
      render: (debtor) => (
        <a href={`/clientes/${debtor.clientId}`} className={styles.clientLink}>
          {debtor.clientName}
        </a>
      ),
    },
    {
      key: 'group',
      header: 'Grupo',
      mobileLabel: 'Grupo',
      render: (debtor) => (
        <span className={styles.groupBadge}>{debtor.group}</span>
      ),
    },
    {
      key: 'amount',
      header: 'Monto Pendiente',
      mobileLabel: 'Monto',
      render: (debtor) => (
        <span className={debtor.isOverdue ? styles.amountOverdue : styles.amount}>
          ${debtor.amountDue.toLocaleString()}
        </span>
      ),
    },
    {
      key: 'daysLate',
      header: 'Días de Retraso',
      mobileLabel: 'Retraso',
      render: (debtor) =>
        debtor.daysLate > 0 ? (
          <span className={styles.daysLate}>{debtor.daysLate} días</span>
        ) : (
          <span className={styles.daysOnTime}>Al día</span>
        ),
    },
    {
      key: 'action',
      header: 'Acción',
      mobileLabel: '',
      render: (debtor) => (
        <button
          className={styles.notifyBtn}
          onClick={(e) => {
            e.stopPropagation();
            handleNotify(debtor.id);
          }}
        >
          Notificar
        </button>
      ),
    },
  ];

  return (
    <div className={styles.debtorsList}>
      <Table
        data={debtors}
        columns={columns}
        keyExtractor={(debtor) => debtor.id}
        containerClassName={styles.tableContainer}
      />
    </div>
  );
}

