'use client';

import { useState } from 'react';
import styles from './TriageFeed.module.css';

interface TriageItem {
  id: string;
  client: {
    id: string;
    name: string;
    rfc: string;
  };
  transaction: {
    bankDescription: string;
    amount: number;
    date: string;
  };
  aiSuggestion: {
    invoiceNumber: string | null;
    matchPercentage: number;
    suggestedCategory: string;
  };
  status: string;
  createdAt: string;
}

interface TriageFeedProps {
  items: TriageItem[];
  onApprove: (id: string) => void;
  onReject: (id: string, note: string) => void;
}

export default function TriageFeed({ items, onApprove, onReject }: TriageFeedProps) {
  const [rejectingId, setRejectingId] = useState<string | null>(null);
  const [rejectNote, setRejectNote] = useState('');

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
    });
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 70) return styles.matchHigh;
    if (percentage >= 50) return styles.matchMedium;
    return styles.matchLow;
  };

  const handleRejectClick = (id: string) => {
    setRejectingId(id);
    setRejectNote('');
  };

  const handleRejectConfirm = (id: string) => {
    onReject(id, rejectNote);
    setRejectingId(null);
    setRejectNote('');
  };

  const handleRejectCancel = () => {
    setRejectingId(null);
    setRejectNote('');
  };

  return (
    <div className={styles.triageFeed}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          Items Requiring Approval
        </h2>
        <span className={styles.count}>{items.length} pendientes</span>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Transacción</th>
              <th>Sugerencia IA</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className={styles.clientCell}>
                    <span className={styles.clientName}>{item.client.name}</span>
                    <span className={styles.clientRfc}>{item.client.rfc}</span>
                  </div>
                </td>
                <td>
                  <div className={styles.transactionCell}>
                    <span className={styles.bankDesc}>{item.transaction.bankDescription}</span>
                    <div className={styles.transactionMeta}>
                      <span className={styles.amount}>{formatCurrency(item.transaction.amount)}</span>
                      <span className={styles.date}>{formatDate(item.transaction.date)}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.suggestionCell}>
                    {item.aiSuggestion.invoiceNumber ? (
                      <span className={styles.invoiceRef}>
                        {item.aiSuggestion.invoiceNumber}
                      </span>
                    ) : (
                      <span className={styles.category}>{item.aiSuggestion.suggestedCategory}</span>
                    )}
                    <span className={`${styles.matchBadge} ${getMatchColor(item.aiSuggestion.matchPercentage)}`}>
                      {item.aiSuggestion.matchPercentage}% match
                    </span>
                  </div>
                </td>
                <td>
                  {rejectingId === item.id ? (
                    <div className={styles.rejectForm}>
                      <input
                        type="text"
                        placeholder="Nota de rechazo..."
                        value={rejectNote}
                        onChange={(e) => setRejectNote(e.target.value)}
                        className={styles.rejectInput}
                        autoFocus
                      />
                      <div className={styles.rejectActions}>
                        <button
                          className={styles.confirmBtn}
                          onClick={() => handleRejectConfirm(item.id)}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </button>
                        <button
                          className={styles.cancelBtn}
                          onClick={handleRejectCancel}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.actions}>
                      <button
                        className={styles.approveBtn}
                        onClick={() => onApprove(item.id)}
                        title="Aprobar"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Aprobar
                      </button>
                      <button
                        className={styles.rejectBtn}
                        onClick={() => handleRejectClick(item.id)}
                        title="Rechazar"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        Rechazar
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {items.length === 0 && (
        <div className={styles.emptyState}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <p>No hay items pendientes de aprobación</p>
        </div>
      )}
    </div>
  );
}






