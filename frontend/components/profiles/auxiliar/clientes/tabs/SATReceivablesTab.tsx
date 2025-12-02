'use client';

import { useEffect, useMemo, useState } from 'react';
import FilterBar, { FilterState } from '../shared/FilterBar';
import InvoicesDataGrid from '../shared/InvoicesDataGrid';
import InvoiceDetailPanel from '../shared/InvoiceDetailPanel';
import { WorkspaceInvoice } from '@/types/accountant';
import { useToast } from '@/contexts/ToastContext';
import styles from './SATReceivablesTab.module.css';

interface SATReceivablesTabProps {
  invoices: WorkspaceInvoice[];
  clientId: string;
  clientName: string;
}

export default function SATReceivablesTab({ invoices, clientId, clientName }: SATReceivablesTabProps) {
  const [filters, setFilters] = useState<FilterState>({
    dateRange: { start: null, end: null },
    paymentStatus: 'all',
    cancelled: false,
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
      const { dateRange, paymentStatus, cancelled } = filters;

      const matchesDate =
        (!dateRange.start || invoiceDate >= dateRange.start) &&
        (!dateRange.end || invoiceDate <= dateRange.end);

      const matchesStatus =
        paymentStatus === 'all' ? true : invoice.status === paymentStatus;

      const matchesCancelled = cancelled ? true : invoice.status !== 'cancelled';

      return matchesDate && matchesStatus && matchesCancelled;
    });
  }, [filters, invoiceData]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const buildXML = (invoice: WorkspaceInvoice) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4" Fecha="${invoice.date}T12:00:00" Folio="${
      invoice.folio || invoice.id
    }" Total="${invoice.amount.toFixed(2)}" UUID="${invoice.uuid || '00000000-0000-0000-0000-000000000000'}">
  <cfdi:Emisor Rfc="CIN123456789" Nombre="CINPRO S.A. de C.V."/>
  <cfdi:Receptor Rfc="${invoice.customer || 'CLIENTE'}" Nombre="${clientName}"/>
  <cfdi:Conceptos>
    ${invoice.lineItems
      .map(
        (item) =>
          `<cfdi:Concepto Cantidad="${item.quantity}" Descripcion="${item.description}" ValorUnitario="${item.unitPrice.toFixed(
            2
          )}" Importe="${item.total.toFixed(2)}"/>`
      )
      .join('\n')}
  </cfdi:Conceptos>
</cfdi:Comprobante>`;
  };

  const handleRowClick = (invoice: WorkspaceInvoice) => {
    setSelectedInvoice(invoice);
    setSelectedInvoiceXML(buildXML(invoice));
  };

  const handleClosePanel = () => {
    setSelectedInvoice(null);
  };

  const updateInvoice = (invoiceId: string, updater: (invoice: WorkspaceInvoice) => WorkspaceInvoice) => {
    setInvoiceData((prev) => prev.map((invoice) => (invoice.id === invoiceId ? updater(invoice) : invoice)));
    setSelectedInvoice((current) => (current && current.id === invoiceId ? updater(current) : current));
  };

  const handleRelateFacture = () => {
    if (!selectedInvoice) return;
    toast.success('Factura marcada como conciliada');
    updateInvoice(selectedInvoice.id, (invoice) => ({
      ...invoice,
      linkedPayment: {
        uuid: `MATCH-${Date.now()}`,
        date: new Date().toISOString(),
        amount: invoice.amount,
        source: 'bank',
      },
    }));
  };

  const handleAttachProof = () => {
    if (!selectedInvoice) return;
    const proofLabel = `Comprobante manual ${new Date().toLocaleString('es-MX')}`;
    updateInvoice(selectedInvoice.id, (invoice) => ({
      ...invoice,
      relatedDocuments: [
        ...invoice.relatedDocuments,
        {
          id: `proof-${Date.now()}`,
          type: 'proof',
          label: proofLabel,
          createdAt: new Date().toISOString(),
          status: 'pending',
        },
      ],
    }));
    toast.success('Prueba adjuntada');
  };

  const triggerDownload = (content: string, fileName: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const handleDownloadXML = () => {
    if (!selectedInvoice || !selectedInvoiceXML) return;
    triggerDownload(selectedInvoiceXML, `${selectedInvoice.uuid || selectedInvoice.id}.xml`, 'text/xml');
    toast.info('Descarga iniciada (XML)');
  };

  const handleDownloadPDF = () => {
    if (!selectedInvoice) return;
    const pdfContent = `Factura ${selectedInvoice.uuid || selectedInvoice.id} - ${clientName}`;
    triggerDownload(pdfContent, `${selectedInvoice.uuid || selectedInvoice.id}.pdf`, 'application/pdf');
    toast.info('Descarga iniciada (PDF)');
  };

  return (
    <div className={styles.tabContent}>
      <FilterBar onFilterChange={handleFilterChange} />
      <div className={styles.dataGridContainer}>
        <InvoicesDataGrid invoices={filteredInvoices} onRowClick={handleRowClick} />
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
