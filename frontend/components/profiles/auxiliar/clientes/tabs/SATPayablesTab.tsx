'use client';

import { useEffect, useMemo, useState } from 'react';
import FilterBar, { FilterState } from '../shared/FilterBar';
import InvoicesDataGrid from '../shared/InvoicesDataGrid';
import InvoiceDetailPanel from '../shared/InvoiceDetailPanel';
import { WorkspaceInvoice } from '@/types/accountant';
import { useToast } from '@/contexts/ToastContext';
import styles from './SATPayablesTab.module.css';

interface SATPayablesTabProps {
  invoices: WorkspaceInvoice[];
  clientId: string;
  clientName: string;
}

export default function SATPayablesTab({ invoices }: SATPayablesTabProps) {
  const [filters, setFilters] = useState<FilterState>({
    dateRange: { start: null, end: null },
    paymentStatus: 'all',
    cancelled: false,
    supplier: '',
  });
  const [invoiceData, setInvoiceData] = useState<WorkspaceInvoice[]>(invoices);
  const [selectedInvoice, setSelectedInvoice] = useState<WorkspaceInvoice | null>(null);
  const [selectedInvoiceXML, setSelectedInvoiceXML] = useState<string>('');
  const toast = useToast();

  useEffect(() => {
    setInvoiceData(invoices);
  }, [invoices]);

  const filteredInvoices = useMemo(() => {
    return invoiceData.filter((invoice) => {
      const invoiceDate = new Date(invoice.date);
      const { dateRange, paymentStatus, cancelled, supplier } = filters;
      const matchesDate =
        (!dateRange.start || invoiceDate >= dateRange.start) &&
        (!dateRange.end || invoiceDate <= dateRange.end);
      const matchesStatus =
        paymentStatus === 'all' ? true : invoice.status === paymentStatus;
      const matchesCancelled = cancelled ? true : invoice.status !== 'cancelled';
      const matchesSupplier = supplier
        ? invoice.supplier?.toLowerCase().includes(supplier.toLowerCase())
        : true;

      return matchesDate && matchesStatus && matchesCancelled && matchesSupplier;
    });
  }, [filters, invoiceData]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleRowClick = (invoice: WorkspaceInvoice) => {
    setSelectedInvoice(invoice);
    setSelectedInvoiceXML(
      `<?xml version="1.0" encoding="UTF-8"?><cfdi:Comprobante Folio="${invoice.folio || invoice.id}" Total="${invoice.amount.toFixed(
        2
      )}" />`
    );
  };

  const handleClosePanel = () => {
    setSelectedInvoice(null);
  };

  const handleRelateFacture = () => {
    toast.success('Gasto vinculado correctamente');
  };

  const handleAttachProof = () => {
    toast.success('Soporte adjuntado al gasto');
  };

  const handleDownloadXML = () => {
    if (!selectedInvoice || !selectedInvoiceXML) return;
    const blob = new Blob([selectedInvoiceXML], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedInvoice.uuid || selectedInvoice.id}.xml`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    toast.info('Descarga iniciada (XML)');
  };

  const handleDownloadPDF = () => {
    if (!selectedInvoice) return;
    toast.info('Descarga iniciada (PDF)');
  };

  return (
    <div className={styles.tabContent}>
      <FilterBar onFilterChange={handleFilterChange} showSupplierFilter showDeductibleToggle />
      <div className={styles.dataGridContainer}>
        <InvoicesDataGrid
          invoices={filteredInvoices}
          onRowClick={handleRowClick}
          showSupplier
          showConcept
          showIvaIsr
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
          xmlContent={selectedInvoiceXML}
        />
      )}
    </div>
  );
}
