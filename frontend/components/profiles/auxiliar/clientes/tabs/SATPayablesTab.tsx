'use client';

import { useState, useEffect } from 'react';
import FilterBar, { FilterState } from '../shared/FilterBar';
import InvoicesDataGrid, { Invoice } from '../shared/InvoicesDataGrid';
import InvoiceDetailPanel from '../shared/InvoiceDetailPanel';
import styles from './SATPayablesTab.module.css';

export default function SATPayablesTab() {
  const [expenses, setExpenses] = useState<Invoice[]>([]);
  const [selectedExpense, setSelectedExpense] = useState<Invoice | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    dateRange: { start: null, end: null },
    deductible: 'all',
    supplier: '',
  });

  useEffect(() => {
    // TODO: Replace with actual API call
    // Fetch expenses from /api/cfdis endpoint with payables filter
    setExpenses([
      {
        id: '1',
        date: '2024-01-15',
        supplier: 'Office Supplies Inc',
        concept: 'Office materials',
        amount: 5000.00,
        iva: 800.00,
        isr: 0,
        status: 'pending',
      },
      {
        id: '2',
        date: '2024-01-14',
        supplier: 'Utilities Co',
        concept: 'Electricity bill',
        amount: 12000.00,
        iva: 1920.00,
        isr: 0,
        status: 'paid',
      },
    ]);
  }, []);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    // TODO: Apply filters to API call
  };

  const handleRowClick = (expense: Invoice) => {
    setSelectedExpense(expense);
  };

  const handleClosePanel = () => {
    setSelectedExpense(null);
  };

  const handleRelateFacture = () => {
    // TODO: Open RelateFactureModal
    console.log('Relate facture for:', selectedExpense?.id);
  };

  const handleAttachProof = () => {
    // TODO: Open AttachProofUploader
    console.log('Attach spending proof for:', selectedExpense?.id);
  };

  const handleDownloadXML = () => {
    // TODO: Implement XML download
    console.log('Download XML for:', selectedExpense?.id);
  };

  const handleDownloadPDF = () => {
    // TODO: Implement PDF download
    console.log('Download PDF for:', selectedExpense?.id);
  };

  return (
    <div className={styles.tabContent}>
      <FilterBar
        onFilterChange={handleFilterChange}
        showDeductibleToggle={true}
        showSupplierFilter={true}
      />
      <div className={styles.dataGridContainer}>
        <InvoicesDataGrid
          invoices={expenses}
          onRowClick={handleRowClick}
          showSupplier={true}
          showConcept={true}
          showIvaIsr={true}
        />
      </div>
      {selectedExpense && (
        <InvoiceDetailPanel
          invoice={selectedExpense}
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

