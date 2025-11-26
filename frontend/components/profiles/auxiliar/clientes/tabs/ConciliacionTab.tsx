'use client';

import { useState } from 'react';
import styles from './ConciliacionTab.module.css';

export default function ConciliacionTab() {
  const [selectedBankLine, setSelectedBankLine] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'unreconciled' | 'reconciled'>('unreconciled');

  const bankLines = [
    { id: '1', amount: 15000, date: '2024-01-15', description: 'Payment from Acme Corp' },
    { id: '2', amount: -5000, date: '2024-01-14', description: 'Office supplies payment' },
  ];

  const candidateInvoices = selectedBankLine
    ? [
        { id: '1', uuid: '12345678-1234-1234', amount: 15000, matchScore: 0.95 },
        { id: '2', uuid: '87654321-4321-4321', amount: 14800, matchScore: 0.88 },
      ]
    : [];

  return (
    <div className={styles.conciliacionTab}>
      <div className={styles.tabHeader}>
        <div className={styles.viewToggle}>
          <button
            className={`${styles.tabButton} ${viewMode === 'unreconciled' ? styles.active : ''}`}
            onClick={() => setViewMode('unreconciled')}
          >
            Unreconciled
          </button>
          <button
            className={`${styles.tabButton} ${viewMode === 'reconciled' ? styles.active : ''}`}
            onClick={() => setViewMode('reconciled')}
          >
            Reconciled History
          </button>
        </div>
      </div>

      {viewMode === 'unreconciled' ? (
        <div className={styles.splitPane}>
          <div className={styles.leftPane}>
            <h3 className={styles.paneTitle}>Unreconciled Bank Lines</h3>
            <div className={styles.bankLinesList}>
              {bankLines.map((line) => (
                <div
                  key={line.id}
                  className={`${styles.bankLineCard} ${selectedBankLine === line.id ? styles.selected : ''}`}
                  onClick={() => setSelectedBankLine(line.id)}
                >
                  <div className={styles.bankLineAmount}>
                    ${line.amount.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                  </div>
                  <div className={styles.bankLineDetails}>
                    <div className={styles.bankLineDate}>{new Date(line.date).toLocaleDateString()}</div>
                    <div className={styles.bankLineDesc}>{line.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightPane}>
            <div className={styles.paneHeader}>
              <h3 className={styles.paneTitle}>Candidate Invoices</h3>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search by RFC or Amount"
              />
            </div>
            <div className={styles.candidatesList}>
              {candidateInvoices.length > 0 ? (
                candidateInvoices.map((invoice) => (
                  <div key={invoice.id} className={styles.candidateCard}>
                    <div className={styles.candidateHeader}>
                      <span className={styles.candidateUuid}>{invoice.uuid}</span>
                      <span className={styles.matchBadge}>{Math.round(invoice.matchScore * 100)}% Match</span>
                    </div>
                    <div className={styles.candidateAmount}>
                      ${invoice.amount.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                    </div>
                    <button className={styles.linkButton}>Link</button>
                  </div>
                ))
              ) : (
                <div className={styles.emptyState}>
                  <p>Select a bank line to see candidate invoices</p>
                </div>
              )}
            </div>
            <div className={styles.manualActions}>
              <button className={styles.actionButton}>Attach Manual Proof</button>
              <button className={styles.actionButton}>Create Missing</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.reconciledHistory}>
          <p>Reconciled history view will show all matched transactions</p>
        </div>
      )}
    </div>
  );
}

