'use client';

import { useState, useRef } from 'react';
import styles from './VerificarPagos.module.css';

interface PaymentProof {
  id: string;
  imageUrl: string;
  amount: number;
  date: string;
  reference: string;
}

interface BankTransaction {
  id: string;
  amount: number;
  date: string;
  description: string;
  matched: boolean;
}

interface Invoice {
  id: string;
  invoiceNumber: string;
  amount: number;
  dueDate: string;
  allocatedAmount: number;
}

export default function VerificarPagos() {
  const [selectedProof, setSelectedProof] = useState<PaymentProof | null>({
    id: '1',
    imageUrl: '/api/placeholder/800/600',
    amount: 10000,
    date: '2023-10-15',
    reference: '',
  });

  const [amount, setAmount] = useState('10000');
  const [date, setDate] = useState('2023-10-15');
  const [reference, setReference] = useState('');

  // Image zoom/pan state
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Bank transactions (mock data)
  const [bankTransactions] = useState<BankTransaction[]>([
    { id: '1', amount: 10000.50, date: '2023-10-15', description: 'Transferencia recibida', matched: false },
    { id: '2', amount: 9999.00, date: '2023-10-15', description: 'Depósito bancario', matched: false },
    { id: '3', amount: 10001.00, date: '2023-10-15', description: 'Pago cliente', matched: false },
  ]);

  const [selectedBankTransaction, setSelectedBankTransaction] = useState<string | null>(null);

  // Invoices (mock data)
  const [invoices] = useState<Invoice[]>([
    { id: '1', invoiceNumber: 'INV-001', amount: 5000, dueDate: '2023-10-10', allocatedAmount: 0 },
    { id: '2', invoiceNumber: 'INV-002', amount: 3000, dueDate: '2023-10-12', allocatedAmount: 0 },
    { id: '3', invoiceNumber: 'INV-003', amount: 2000, dueDate: '2023-10-14', allocatedAmount: 0 },
  ]);

  const [invoiceAllocations, setInvoiceAllocations] = useState<Record<string, number>>({});

  // Reject modal state
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState('');

  // Calculate total allocated amount
  const totalAllocated = Object.values(invoiceAllocations).reduce((sum, val) => sum + val, 0);
  const proofAmount = parseFloat(amount) || 0;
  const isValidAllocation = totalAllocated <= proofAmount;

  // Image zoom handlers
  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Image pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsPanning(true);
      setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPanning && zoom > 1) {
      setPan({
        x: e.clientX - panStart.x,
        y: e.clientY - panStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  // Handle invoice allocation change
  const handleAllocationChange = (invoiceId: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInvoiceAllocations(prev => ({
      ...prev,
      [invoiceId]: numValue,
    }));
  };

  // Handle verify
  const handleVerify = () => {
    if (!isValidAllocation) {
      alert('La suma de las asignaciones no puede exceder el monto del comprobante');
      return;
    }
    // TODO: Trigger DB transaction
    console.log('Verifying payment:', {
      proofId: selectedProof?.id,
      bankTransactionId: selectedBankTransaction,
      allocations: invoiceAllocations,
    });
    alert('Pago verificado exitosamente');
  };

  // Handle reject
  const handleReject = () => {
    if (!rejectReason.trim()) {
      alert('Por favor proporciona una razón para rechazar');
      return;
    }
    // TODO: Send email with reject reason
    console.log('Rejecting payment:', {
      proofId: selectedProof?.id,
      reason: rejectReason,
    });
    alert('Pago rechazado. Se enviará un correo al cliente.');
    setShowRejectModal(false);
    setRejectReason('');
  };

  return (
    <div className={styles.verificarPagos}>
      <div className={styles.splitContainer}>
        {/* Left Pane: The Proof */}
        <div className={styles.leftPane}>
          <div className={styles.paneHeader}>
            <h2 className={styles.paneTitle}>Comprobante de Pago</h2>
          </div>

          {/* Image Canvas with Zoom/Pan */}
          <div className={styles.imageSection}>
            <div className={styles.imageControls}>
              <button onClick={handleZoomOut} className={styles.controlButton} disabled={zoom <= 0.5}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </button>
              <span className={styles.zoomLevel}>{Math.round(zoom * 100)}%</span>
              <button onClick={handleZoomIn} className={styles.controlButton} disabled={zoom >= 3}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </button>
              <button onClick={handleResetZoom} className={styles.controlButton}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                  <path d="M3 21v-5h5" />
                </svg>
              </button>
            </div>
            <div
              ref={imageContainerRef}
              className={styles.imageContainer}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{ cursor: zoom > 1 ? (isPanning ? 'grabbing' : 'grab') : 'default' }}
            >
              <img
                src={selectedProof?.imageUrl}
                alt="Comprobante de pago"
                className={styles.proofImage}
                style={{
                  transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                  transformOrigin: 'center center',
                }}
              />
            </div>
          </div>

          {/* Metadata */}
          <div className={styles.metadataSection}>
            <div className={styles.metadataField}>
              <label className={styles.metadataLabel}>Monto</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={styles.metadataInput}
                placeholder="0.00"
              />
            </div>
            <div className={styles.metadataField}>
              <label className={styles.metadataLabel}>Fecha</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={styles.metadataInput}
              />
            </div>
            <div className={styles.metadataField}>
              <label className={styles.metadataLabel}>Referencia</label>
              <input
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                className={styles.metadataInput}
                placeholder="Ingrese referencia"
              />
            </div>
          </div>
        </div>

        {/* Right Pane: The Allocation */}
        <div className={styles.rightPane}>
          <div className={styles.paneHeader}>
            <h2 className={styles.paneTitle}>Asignación</h2>
          </div>

          <div className={styles.rightPaneContent}>
            {/* Bank Matcher */}
            <div className={styles.allocationSection}>
            <h3 className={styles.sectionTitle}>Transacciones Bancarias</h3>
            <p className={styles.sectionSubtitle}>
              Transacciones con diferencia de ± $1.00
            </p>
            <div className={styles.bankList}>
              {bankTransactions.map((transaction) => {
                const difference = Math.abs(transaction.amount - proofAmount);
                const isWithinTolerance = difference <= 1.0;
                return (
                  <label
                    key={transaction.id}
                    className={`${styles.bankItem} ${selectedBankTransaction === transaction.id ? styles.bankItemSelected : ''}`}
                  >
                    <input
                      type="radio"
                      name="bankTransaction"
                      value={transaction.id}
                      checked={selectedBankTransaction === transaction.id}
                      onChange={(e) => setSelectedBankTransaction(e.target.value)}
                      className={styles.radioInput}
                    />
                    <div className={styles.bankItemContent}>
                      <div className={styles.bankItemHeader}>
                        <span className={styles.bankAmount}>
                          ${transaction.amount.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                        </span>
                        {isWithinTolerance && (
                          <span className={styles.matchBadge}>Coincide</span>
                        )}
                      </div>
                      <div className={styles.bankItemDetails}>
                        <span className={styles.bankDate}>{transaction.date}</span>
                        <span className={styles.bankDescription}>{transaction.description}</span>
                        {difference > 0 && (
                          <span className={styles.bankDifference}>
                            Diferencia: ${difference.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Invoice Selector */}
          <div className={styles.allocationSection}>
            <h3 className={styles.sectionTitle}>Facturas Pendientes</h3>
            <div className={styles.invoiceList}>
              {invoices.map((invoice) => (
                <div key={invoice.id} className={styles.invoiceItem}>
                  <div className={styles.invoiceHeader}>
                    <div>
                      <span className={styles.invoiceNumber}>{invoice.invoiceNumber}</span>
                      <span className={styles.invoiceDueDate}>Vence: {invoice.dueDate}</span>
                    </div>
                    <span className={styles.invoiceAmount}>
                      ${invoice.amount.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className={styles.allocationInputWrapper}>
                    <label className={styles.allocationLabel}>Asignar Monto:</label>
                    <input
                      type="number"
                      value={invoiceAllocations[invoice.id] || ''}
                      onChange={(e) => handleAllocationChange(invoice.id, e.target.value)}
                      className={styles.allocationInput}
                      placeholder="0.00"
                      min="0"
                      max={invoice.amount}
                      step="0.01"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.allocationSummary}>
              <div className={styles.summaryRow}>
                <span>Total Asignado:</span>
                <span className={styles.summaryAmount}>${totalAllocated.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Monto del Comprobante:</span>
                <span className={styles.summaryAmount}>${proofAmount.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
              </div>
              {!isValidAllocation && (
                <div className={styles.validationError}>
                  La suma de asignaciones excede el monto del comprobante
                </div>
              )}
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className={styles.footerActions}>
        <button
          onClick={() => setShowRejectModal(true)}
          className={styles.rejectButton}
        >
          Rechazar
        </button>
        <button
          onClick={handleVerify}
          className={styles.verifyButton}
          disabled={!isValidAllocation || !selectedBankTransaction}
        >
          Verificar
        </button>
      </div>

      {/* Reject Modal */}
      {showRejectModal && (
        <div className={styles.modalOverlay} onClick={() => setShowRejectModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Rechazar Comprobante</h3>
              <button
                onClick={() => setShowRejectModal(false)}
                className={styles.modalCloseButton}
              >
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <label className={styles.modalLabel}>
                Razón del rechazo:
              </label>
              <textarea
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
                className={styles.rejectTextarea}
                placeholder="Ingrese la razón por la cual se rechaza este comprobante..."
                rows={6}
              />
            </div>
            <div className={styles.modalFooter}>
              <button
                onClick={() => setShowRejectModal(false)}
                className={styles.modalCancelButton}
              >
                Cancelar
              </button>
              <button
                onClick={handleReject}
                className={styles.modalConfirmButton}
                disabled={!rejectReason.trim()}
              >
                Enviar y Rechazar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

