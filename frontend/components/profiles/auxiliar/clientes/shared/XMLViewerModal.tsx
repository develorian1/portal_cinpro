'use client';

import { useState } from 'react';
import styles from './XMLViewerModal.module.css';

interface XMLViewerModalProps {
  xmlContent: string;
  invoiceMetadata?: {
    uuid?: string;
    date?: string;
    total?: number;
    folio?: string;
    emisor?: string;
    receptor?: string;
  };
  onClose: () => void;
}

export default function XMLViewerModal({ xmlContent, invoiceMetadata, onClose }: XMLViewerModalProps) {
  const [copied, setCopied] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    }).format(amount);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(xmlContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy XML:', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CFDI-${invoiceMetadata?.uuid || 'invoice'}.xml`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Format XML with basic indentation
  const formatXML = (xml: string): string => {
    let formatted = '';
    let indent = '';
    const tab = '  ';
    xml.split(/>\s*</).forEach((node) => {
      if (node.match(/^\/\w/)) indent = indent.substring(tab.length);
      formatted += indent + '<' + node + '>\r\n';
      if (node.match(/^<?\w[^>]*[^\/]$/) && !node.startsWith('<?xml')) indent += tab;
    });
    return formatted.substring(1, formatted.length - 2);
  };

  const formattedXML = formatXML(xmlContent);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <h3 className={styles.modalTitle}>Vista XML - CFDI</h3>
            {invoiceMetadata && (
              <div className={styles.metadata}>
                {invoiceMetadata.uuid && (
                  <span className={styles.metadataItem}>UUID: {invoiceMetadata.uuid}</span>
                )}
                {invoiceMetadata.folio && (
                  <span className={styles.metadataItem}>Folio: {invoiceMetadata.folio}</span>
                )}
                {invoiceMetadata.date && (
                  <span className={styles.metadataItem}>
                    Fecha: {new Date(invoiceMetadata.date).toLocaleDateString('es-MX')}
                  </span>
                )}
                {invoiceMetadata.total && (
                  <span className={styles.metadataItem}>Total: {formatCurrency(invoiceMetadata.total)}</span>
                )}
              </div>
            )}
          </div>
          <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className={styles.modalContent}>
          <div className={styles.xmlContainer}>
            <pre className={styles.xmlContent}>{formattedXML}</pre>
          </div>
        </div>

        <div className={styles.modalActions}>
          <button className={styles.actionButton} onClick={handleCopy}>
            {copied ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Copiado
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copiar XML
              </>
            )}
          </button>
          <button className={styles.actionButton} onClick={handleDownload}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Descargar XML
          </button>
        </div>
      </div>
    </div>
  );
}

