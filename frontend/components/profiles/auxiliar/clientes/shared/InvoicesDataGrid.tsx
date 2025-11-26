'use client';

import { useState } from 'react';
import styles from './InvoicesDataGrid.module.css';

export interface Invoice {
  id: string;
  date: string;
  folio?: string;
  uuid?: string;
  customer?: string;
  supplier?: string;
  concept?: string;
  amount: number;
  iva?: number;
  isr?: number;
  status: 'paid' | 'pending' | 'cancelled';
  ppdPue?: 'PPD' | 'PUE';
}

interface InvoicesDataGridProps {
  invoices: Invoice[];
  onRowClick: (invoice: Invoice) => void;
  showSupplier?: boolean;
  showConcept?: boolean;
  showIvaIsr?: boolean;
}

export default function InvoicesDataGrid({
  invoices,
  onRowClick,
  showSupplier = false,
  showConcept = false,
  showIvaIsr = false,
}: InvoicesDataGridProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    }).format(amount);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('es-MX');
  };

  const getGridColumns = () => {
    if (showSupplier && showConcept && showIvaIsr) {
      return '120px 1fr 1fr 150px 120px 100px 100px 100px';
    } else if (showSupplier && showIvaIsr) {
      return '120px 1fr 150px 120px 100px 100px 100px';
    } else if (showSupplier) {
      return '120px 1fr 150px 120px 100px';
    } else {
      return '120px 1fr 150px 120px 100px 100px';
    }
  };

  return (
    <div className={styles.dataGrid}>
      <div 
        className={styles.gridHeader}
        style={{ gridTemplateColumns: getGridColumns() }}
      >
        <div className={styles.headerCell}>Date</div>
        {(showSupplier || !showSupplier) && <div className={styles.headerCell}>
          {showSupplier ? 'Supplier' : 'Folio/UUID'}
        </div>}
        {showConcept && <div className={styles.headerCell}>Concept</div>}
        {!showSupplier && <div className={styles.headerCell}>Customer</div>}
        <div className={styles.headerCell}>Amount</div>
        {showIvaIsr && (
          <>
            <div className={styles.headerCell}>IVA</div>
            <div className={styles.headerCell}>ISR</div>
          </>
        )}
        <div className={styles.headerCell}>Status</div>
        {!showSupplier && <div className={styles.headerCell}>PPD/PUE</div>}
      </div>
      <div className={styles.gridBody}>
        {invoices.length > 0 ? (
          invoices.map((invoice) => (
            <div
              key={invoice.id}
              className={styles.gridRow}
              style={{ gridTemplateColumns: getGridColumns() }}
              onClick={() => onRowClick(invoice)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onRowClick(invoice);
                }
              }}
            >
              <div className={styles.gridCell}>{formatDate(invoice.date)}</div>
              <div className={styles.gridCell}>
                {showSupplier ? invoice.supplier : (invoice.folio || invoice.uuid?.substring(0, 8))}
              </div>
              {showConcept && <div className={styles.gridCell}>{invoice.concept}</div>}
              {!showSupplier && <div className={styles.gridCell}>{invoice.customer}</div>}
              <div className={styles.gridCell}>{formatCurrency(invoice.amount)}</div>
              {showIvaIsr && (
                <>
                  <div className={styles.gridCell}>{invoice.iva ? formatCurrency(invoice.iva) : '-'}</div>
                  <div className={styles.gridCell}>{invoice.isr ? formatCurrency(invoice.isr) : '-'}</div>
                </>
              )}
              <div className={styles.gridCell}>
                <span className={`${styles.statusBadge} ${styles[invoice.status]}`}>
                  {invoice.status}
                </span>
              </div>
              {!showSupplier && invoice.ppdPue && (
                <div className={styles.gridCell}>
                  <span className={styles.ppdPueBadge}>{invoice.ppdPue}</span>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className={styles.emptyState}>
            <p>No invoices found</p>
          </div>
        )}
      </div>
    </div>
  );
}

