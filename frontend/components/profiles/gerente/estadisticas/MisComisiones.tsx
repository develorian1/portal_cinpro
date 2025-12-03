'use client';

import Table, { TableColumn } from '@/components/shared/Table';
import styles from './MisComisiones.module.css';

interface CommissionClient {
  id: string;
  clientName: string;
  contractValue: number;
  commissionPercent: number;
  earnedThisMonth: number;
  payoutStatus: 'paid' | 'pending';
  paidDate: string | null;
}

interface CommissionSummary {
  totalEarned: number;
  pendingPayout: number;
  paidThisMonth: number;
  currency: string;
}

interface MisComisionesProps {
  summary: CommissionSummary;
  clients: CommissionClient[];
}

export default function MisComisiones({ summary, clients }: MisComisionesProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('es-MX', {
      day: '2-digit',
      month: 'short',
    });
  };

  const columns: TableColumn<CommissionClient>[] = [
    {
      key: 'clientName',
      header: 'Cliente',
      render: (client) => (
        <span className={styles.clientName}>{client.clientName}</span>
      ),
    },
    {
      key: 'contractValue',
      header: 'Valor Contrato',
      render: (client) => (
        <span className={styles.contractValue}>{formatCurrency(client.contractValue)}</span>
      ),
    },
    {
      key: 'commissionPercent',
      header: 'Mi %',
      render: (client) => (
        <span className={styles.commissionPercent}>{client.commissionPercent}%</span>
      ),
    },
    {
      key: 'earnedThisMonth',
      header: 'Ganado Este Mes',
      render: (client) => (
        <span className={styles.earned}>{formatCurrency(client.earnedThisMonth)}</span>
      ),
    },
    {
      key: 'payoutStatus',
      header: 'Estado de Pago',
      render: (client) => (
        <div className={styles.statusCell}>
          <span className={`${styles.statusBadge} ${styles[client.payoutStatus]}`}>
            {client.payoutStatus === 'paid' ? 'Pagado' : 'Pendiente'}
          </span>
          {client.paidDate && (
            <span className={styles.paidDate}>{formatDate(client.paidDate)}</span>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className={styles.misComisiones}>
      {/* Summary Cards */}
      <div className={styles.summaryCards}>
        <div className={styles.summaryCard}>
          <span className={styles.summaryLabel}>Total Ganado</span>
          <span className={styles.summaryValue}>{formatCurrency(summary.totalEarned)}</span>
        </div>
        <div className={`${styles.summaryCard} ${styles.pending}`}>
          <span className={styles.summaryLabel}>Pendiente de Pago</span>
          <span className={styles.summaryValue}>{formatCurrency(summary.pendingPayout)}</span>
        </div>
        <div className={`${styles.summaryCard} ${styles.paid}`}>
          <span className={styles.summaryLabel}>Pagado Este Mes</span>
          <span className={styles.summaryValue}>{formatCurrency(summary.paidThisMonth)}</span>
        </div>
      </div>

      {/* Commissions Table */}
      <div className={styles.tableSection}>
        <h3 className={styles.tableTitle}>Detalle por Cliente</h3>
        <Table
          data={clients}
          columns={columns}
          keyExtractor={(client) => client.id}
          emptyMessage="No hay comisiones registradas"
          containerClassName={styles.tableContainer}
        />
      </div>
    </div>
  );
}


