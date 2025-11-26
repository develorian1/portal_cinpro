'use client';

import { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import styles from './PagosCINPRO.module.css';

interface Invoice {
  id: string;
  service: string;
  month: string;
  amount: number;
  currency: string;
}

interface PaymentProofForm {
  file: File | null;
  paymentDate: string;
  reference: string;
}

export default function PagosCINPRO() {
  const { setActiveItem } = useNavigation();
  const [selectedInvoices, setSelectedInvoices] = useState<Set<string>>(new Set());
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<PaymentProofForm>({
    file: null,
    paymentDate: '',
    reference: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropzoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveItem('client-pagos');
  }, [setActiveItem]);

  // Mock data - replace with real API calls
  const invoices: Invoice[] = [
    { id: '1', service: 'Accounting Services', month: 'October 2024', amount: 5000, currency: 'MXN' },
    { id: '2', service: 'Tax Filing', month: 'September 2024', amount: 3500, currency: 'MXN' },
  ];

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const totalAmount = invoices
    .filter((inv) => selectedInvoices.has(inv.id))
    .reduce((sum, inv) => sum + inv.amount, 0);

  const handleToggleInvoice = (invoiceId: string) => {
    setSelectedInvoices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(invoiceId)) {
        newSet.delete(invoiceId);
      } else {
        newSet.add(invoiceId);
      }
      return newSet;
    });
  };

  const handleReportPayment = () => {
    if (selectedInvoices.size === 0) {
      alert('Please select at least one invoice');
      return;
    }
    setShowModal(true);
  };

  const handleFileSelect = (file: File | null) => {
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && (file.type.startsWith('image/') || file.type === 'application/pdf')) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileSelect(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.file || !formData.paymentDate) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: Replace with actual API call
      const formDataToSend = new FormData();
      formDataToSend.append('file', formData.file);
      formDataToSend.append('paymentDate', formData.paymentDate);
      formDataToSend.append('reference', formData.reference);
      formDataToSend.append('invoiceIds', JSON.stringify(Array.from(selectedInvoices)));

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      setTimeout(() => {
        setShowModal(false);
        setSubmitSuccess(false);
        setFormData({ file: null, paymentDate: '', reference: '' });
        setSelectedInvoices(new Set());
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }, 2000);
    } catch (error) {
      console.error('Error submitting payment proof:', error);
      alert('Error submitting payment proof. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.sectionHeader}>Pending Invoices from CINPRO</h1>

      <div className={styles.invoiceList}>
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className={styles.invoiceRow}
            onClick={() => handleToggleInvoice(invoice.id)}
          >
            <input
              type="checkbox"
              className={styles.invoiceCheckbox}
              checked={selectedInvoices.has(invoice.id)}
              onChange={() => handleToggleInvoice(invoice.id)}
              onClick={(e) => e.stopPropagation()}
            />
            <div className={styles.invoiceService}>{invoice.service}</div>
            <div className={styles.invoiceMonth}>{invoice.month}</div>
            <div className={styles.invoiceAmount}>
              {formatCurrency(invoice.amount, invoice.currency)}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.stickyFooter}>
        <div>
          <span className={styles.totalLabel}>Total: </span>
          <span className={styles.totalAmount}>
            {formatCurrency(totalAmount, 'MXN')}
          </span>
        </div>
        <button
          className={styles.btnReportPayment}
          onClick={handleReportPayment}
          disabled={selectedInvoices.size === 0}
        >
          Report Payment
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalHeader}>Upload Payment Proof</h2>
            <p className={styles.modalInstruction}>
              Upload an image or PDF of your payment receipt
            </p>

            {submitSuccess ? (
              <div className={styles.successFeedback}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Proof Sent! Status: Pending Verification.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formField}>
                  <label className={styles.fieldLabel}>Payment Proof (Image/PDF)</label>
                  <div
                    ref={dropzoneRef}
                    className={styles.dropzone}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileInputChange}
                      style={{ display: 'none' }}
                    />
                    {formData.file ? (
                      <div className={styles.fileInfo}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                          <polyline points="13 2 13 9 20 9" />
                        </svg>
                        <span>{formData.file.name}</span>
                        <button
                          type="button"
                          className={styles.removeFileBtn}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFileSelect(null);
                            if (fileInputRef.current) {
                              fileInputRef.current.value = '';
                            }
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <div className={styles.dropzoneContent}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                        <p>Click or drag file here</p>
                        <p className={styles.dropzoneHint}>Supports: PDF, JPG, PNG</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles.formField}>
                  <label className={styles.fieldLabel}>
                    Payment Date <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="date"
                    className={styles.fieldInput}
                    value={formData.paymentDate}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, paymentDate: e.target.value }))
                    }
                    required
                  />
                </div>

                <div className={styles.formField}>
                  <label className={styles.fieldLabel}>Reference (Optional)</label>
                  <input
                    type="text"
                    className={styles.fieldInput}
                    value={formData.reference}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, reference: e.target.value }))
                    }
                    placeholder="Transaction reference number"
                  />
                </div>

                <div className={styles.modalActions}>
                  <button
                    type="button"
                    className={styles.btnCancel}
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={styles.btnSubmit}
                    disabled={isSubmitting || !formData.file || !formData.paymentDate}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Proof'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

