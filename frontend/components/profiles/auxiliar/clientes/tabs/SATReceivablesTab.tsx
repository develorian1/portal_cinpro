'use client';

import { useState, useEffect } from 'react';
import FilterBar, { FilterState } from '../shared/FilterBar';
import InvoicesDataGrid, { Invoice } from '../shared/InvoicesDataGrid';
import InvoiceDetailPanel from '../shared/InvoiceDetailPanel';
import styles from './SATReceivablesTab.module.css';

export default function SATReceivablesTab() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    dateRange: { start: null, end: null },
    paymentStatus: 'all',
    cancelled: false,
  });

  useEffect(() => {
    // TODO: Replace with actual API call
    // Fetch invoices from /api/cfdis endpoint
    setInvoices([
      {
        id: '1',
        date: '2024-01-15',
        folio: 'FOL-001',
        uuid: '12345678-1234-1234-1234-123456789012',
        customer: 'Acme Corp',
        amount: 15000.00,
        status: 'pending',
        ppdPue: 'PPD',
      },
      {
        id: '2',
        date: '2024-01-14',
        folio: 'FOL-002',
        uuid: '87654321-4321-4321-4321-210987654321',
        customer: 'Tech Solutions',
        amount: 25000.00,
        status: 'paid',
        ppdPue: 'PUE',
      },
    ]);
  }, []);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    // TODO: Apply filters to API call
  };

  const handleRowClick = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
  };

  const handleClosePanel = () => {
    setSelectedInvoice(null);
  };

  const handleRelateFacture = () => {
    // TODO: Open RelateFactureModal
    console.log('Relate facture for:', selectedInvoice?.id);
  };

  const handleAttachProof = () => {
    // TODO: Open AttachProofUploader
    console.log('Attach proof for:', selectedInvoice?.id);
  };

  const handleDownloadXML = () => {
    // TODO: Implement XML download
    console.log('Download XML for:', selectedInvoice?.id);
  };

  const handleDownloadPDF = () => {
    // TODO: Implement PDF download
    console.log('Download PDF for:', selectedInvoice?.id);
  };

  return (
    <div className={styles.tabContent}>
      <FilterBar onFilterChange={handleFilterChange} />
      <div className={styles.dataGridContainer}>
        <InvoicesDataGrid
          invoices={invoices}
          onRowClick={handleRowClick}
        />
      </div>
      {selectedInvoice && (
        <InvoiceDetailPanel
          invoice={selectedInvoice}
          onClose={handleClosePanel}
          onRelateFacture={handleRelateFacture}
          onAttachProof={handleAttachProof}
          onDownloadXML={handleDownloadXML}
          onDownloadPDF={handleDownloadPDF}
        />
      )}
    </div>
  );
}

