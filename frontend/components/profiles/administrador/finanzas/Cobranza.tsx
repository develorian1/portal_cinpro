'use client';

import { useState } from 'react';
import styles from './Cobranza.module.css';

interface ClientDebt {
  id: string;
  clientName: string;
  totalDebt: number;
  oldestInvoiceDate: string;
  invoiceCount: number;
}

export default function Cobranza() {
  const [showStatementPreview, setShowStatementPreview] = useState(false);
  const [selectedClient, setSelectedClient] = useState<ClientDebt | null>(null);

  // Mock data - in real app, this would come from API
  const [clients] = useState<ClientDebt[]>([
    {
      id: '1',
      clientName: 'Empresa ABC S.A. de C.V.',
      totalDebt: 45000,
      oldestInvoiceDate: '2023-09-15',
      invoiceCount: 3,
    },
    {
      id: '2',
      clientName: 'Comercial XYZ S.A.',
      totalDebt: 125000,
      oldestInvoiceDate: '2023-08-20',
      invoiceCount: 5,
    },
    {
      id: '3',
      clientName: 'Servicios Globales S.A. de C.V.',
      totalDebt: 28000,
      oldestInvoiceDate: '2023-10-01',
      invoiceCount: 2,
    },
    {
      id: '4',
      clientName: 'Distribuidora Nacional',
      totalDebt: 89000,
      oldestInvoiceDate: '2023-07-10',
      invoiceCount: 7,
    },
  ]);

  const handleSendStatement = (client: ClientDebt) => {
    setSelectedClient(client);
    setShowStatementPreview(true);
  };

  const handleConfirmSend = () => {
    if (!selectedClient) return;
    // TODO: Send statement via email
    console.log('Sending statement to:', selectedClient.clientName);
    alert(`Estado de cuenta enviado a ${selectedClient.clientName}`);
    setShowStatementPreview(false);
    setSelectedClient(null);
  };

  const handleCancelSend = () => {
    setShowStatementPreview(false);
    setSelectedClient(null);
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={styles.cobranza}>
      <div className={styles.header}>
        <h1 className={styles.title}>Cobranza</h1>
        <p className={styles.subtitle}>
          Gestión de cuentas por cobrar y estados de cuenta
        </p>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Cliente</th>
              <th className={styles.tableHeader}>Deuda Total</th>
              <th className={styles.tableHeader}>Factura Más Antigua</th>
              <th className={styles.tableHeader}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className={styles.tableRow}>
                <td className={styles.tableCell}>
                  <div className={styles.clientInfo}>
                    <span className={styles.clientName}>{client.clientName}</span>
                    <span className={styles.invoiceCount}>
                      {client.invoiceCount} factura{client.invoiceCount !== 1 ? 's' : ''} vencida{client.invoiceCount !== 1 ? 's' : ''}
                    </span>
                  </div>
                </td>
                <td className={styles.tableCell}>
                  <span className={styles.debtAmount}>
                    ${client.totalDebt.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                  </span>
                </td>
                <td className={styles.tableCell}>
                  <span className={styles.oldestDate}>
                    {formatDate(client.oldestInvoiceDate)}
                  </span>
                </td>
                <td className={styles.tableCell}>
                  <button
                    onClick={() => handleSendStatement(client)}
                    className={styles.sendButton}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Enviar Estado de Cuenta
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Statement Preview Modal */}
      {showStatementPreview && selectedClient && (
        <div className={styles.modalOverlay} onClick={handleCancelSend}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Vista Previa - Estado de Cuenta</h2>
              <button
                onClick={handleCancelSend}
                className={styles.modalCloseButton}
              >
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.statementPreview}>
                {/* PDF Preview Container */}
                <div className={styles.pdfContainer}>
                  <div className={styles.statementDocument}>
                    {/* Statement Header */}
                    <div className={styles.statementHeader}>
                      <div className={styles.statementLogo}>
                        <h2>ESTADO DE CUENTA</h2>
                      </div>
                      <div className={styles.statementInfo}>
                        <p><strong>Fecha:</strong> {new Date().toLocaleDateString('es-MX')}</p>
                        <p><strong>Cliente:</strong> {selectedClient.clientName}</p>
                      </div>
                    </div>

                    {/* Statement Content */}
                    <div className={styles.statementContent}>
                      <div className={styles.statementSummary}>
                        <div className={styles.summaryItem}>
                          <span>Total Adeudado:</span>
                          <span className={styles.summaryAmount}>
                            ${selectedClient.totalDebt.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                          </span>
                        </div>
                        <div className={styles.summaryItem}>
                          <span>Facturas Vencidas:</span>
                          <span>{selectedClient.invoiceCount}</span>
                        </div>
                        <div className={styles.summaryItem}>
                          <span>Factura Más Antigua:</span>
                          <span>{formatDate(selectedClient.oldestInvoiceDate)}</span>
                        </div>
                      </div>

                      <div className={styles.statementTable}>
                        <table className={styles.statementTableInner}>
                          <thead>
                            <tr>
                              <th>Factura</th>
                              <th>Fecha</th>
                              <th>Vencimiento</th>
                              <th>Monto</th>
                              <th>Estado</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* Mock invoice rows */}
                            {Array.from({ length: selectedClient.invoiceCount }).map((_, index) => {
                              const baseDate = new Date(selectedClient.oldestInvoiceDate);
                              baseDate.setDate(baseDate.getDate() + index * 15);
                              const dueDate = new Date(baseDate);
                              dueDate.setDate(dueDate.getDate() + 30);
                              const amount = Math.round(selectedClient.totalDebt / selectedClient.invoiceCount);
                              return (
                                <tr key={index}>
                                  <td>INV-{String(index + 1).padStart(3, '0')}</td>
                                  <td>{baseDate.toLocaleDateString('es-MX')}</td>
                                  <td>{dueDate.toLocaleDateString('es-MX')}</td>
                                  <td>${amount.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</td>
                                  <td>
                                    <span className={styles.statusBadge}>Vencida</span>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      <div className={styles.statementFooter}>
                        <p className={styles.footerNote}>
                          Por favor, realice el pago de las facturas vencidas a la brevedad posible.
                          Para cualquier aclaración, contacte a nuestro departamento de cobranza.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button
                onClick={handleCancelSend}
                className={styles.cancelButton}
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmSend}
                className={styles.confirmButton}
              >
                Enviar por Correo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

