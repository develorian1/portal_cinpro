'use client';

import { useState } from 'react';
import { Invoice } from './InvoicesDataGrid';
import styles from './InvoiceDetailPanel.module.css';

interface InvoiceDetailPanelProps {
  invoice: Invoice | null;
  onClose: () => void;
  onRelateFacture: () => void;
  onAttachProof: () => void;
  onDownloadXML: () => void;
  onDownloadPDF: () => void;
}

export default function InvoiceDetailPanel({
  invoice,
  onClose,
  onRelateFacture,
  onAttachProof,
  onDownloadXML,
  onDownloadPDF,
}: InvoiceDetailPanelProps) {
  if (!invoice) return null;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    }).format(amount);
  };

  return (
    <div className={styles.panelOverlay} onClick={onClose}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.panelHeader}>
          <div>
            <h3 className={styles.panelTitle}>Invoice Details</h3>
            <p className={styles.panelSubtitle}>
              {invoice.uuid || invoice.folio} • Total: {formatCurrency(invoice.amount)}
            </p>
          </div>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close panel">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className={styles.panelContent}>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Line Items</h4>
            <div className={styles.lineItemsList}>
              <div className={styles.lineItem}>
                <span className={styles.lineItemQty}>1</span>
                <span className={styles.lineItemDesc}>Item description placeholder</span>
                <span className={styles.lineItemPrice}>{formatCurrency(invoice.amount)}</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Related Documents</h4>
            <div className={styles.relatedDocumentsList}>
              <p className={styles.emptyMessage}>No related documents</p>
            </div>
          </div>
        </div>

        <div className={styles.panelActions}>
          <button className={styles.actionButton} onClick={onRelateFacture}>
            Relate Facture
          </button>
          <button className={styles.actionButton} onClick={onAttachProof}>
            Attach Bank Proof
          </button>
          <button className={styles.actionButton} onClick={onDownloadXML}>
            Download XML
          </button>
          <button className={styles.actionButton} onClick={onDownloadPDF}>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

