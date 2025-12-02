'use client';

import { useState, useEffect } from 'react';
import styles from './PedidosFacturas.module.css';
import { parseCFDIXML } from './xmlParser';
import { xmlFiles } from './xmlData';
import type { InvoiceRequest, InvoiceData, InvoiceConcept, Filters } from './types';

export default function PedidosFacturas() {
  const [requests, setRequests] = useState<InvoiceRequest[]>([]);
  const [filteredRequests, setFilteredRequests] = useState<InvoiceRequest[]>([]);
  const [filters, setFilters] = useState<Filters>({
    dateRange: { start: null, end: null },
    client: '',
    status: 'all',
    search: '',
  });
  const [selectedRequest, setSelectedRequest] = useState<InvoiceRequest | null>(null);
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Load XML files and parse them to create invoice requests
    const loadXMLFiles = () => {
      const requests: InvoiceRequest[] = [];
      const statuses: Array<'pending' | 'approved' | 'rejected'> = ['pending', 'approved', 'rejected'];

      xmlFiles.forEach((xmlFile, i) => {
        try {
          const invoiceData = parseCFDIXML(xmlFile.content);

          // Parse date from invoice
          const invoiceDate = new Date(invoiceData.fecha);
          const requestDate = new Date(invoiceDate);
          requestDate.setDate(requestDate.getDate() - 5); // Request date is 5 days before invoice date

          requests.push({
            id: (i + 1).toString(),
            uuid: xmlFile.uuid,
            date: invoiceDate.toISOString().split('T')[0],
            client: invoiceData.receptor.nombre,
            amount: invoiceData.total,
            status: statuses[i % statuses.length], // Rotate through statuses
            requestDate: requestDate.toISOString().split('T')[0],
          });
        } catch (error) {
          console.error(`Error parsing XML file ${xmlFile.filename}:`, error);
        }
      });

      setRequests(requests);
    };

    loadXMLFiles();
  }, []);

  useEffect(() => {
    let filtered = [...requests];

    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.uuid.toLowerCase().includes(searchLower) ||
          r.client.toLowerCase().includes(searchLower)
      );
    }

    // Filter by client
    if (filters.client) {
      filtered = filtered.filter((r) =>
        r.client.toLowerCase().includes(filters.client.toLowerCase())
      );
    }

    // Filter by status
    if (filters.status !== 'all') {
      filtered = filtered.filter((r) => r.status === filters.status);
    }

    // Filter by date range
    if (filters.dateRange.start) {
      filtered = filtered.filter(
        (r) => new Date(r.date) >= filters.dateRange.start!
      );
    }
    if (filters.dateRange.end) {
      filtered = filtered.filter(
        (r) => new Date(r.date) <= filters.dateRange.end!
      );
    }

    setFilteredRequests(filtered);
  }, [requests, filters]);

  const handleApprove = (id: string) => {
    // TODO: Call API to approve request
    setRequests(
      requests.map((r) => (r.id === id ? { ...r, status: 'approved' as const } : r))
    );
  };

  const handleReject = (id: string) => {
    // TODO: Call API to reject request
    setRequests(
      requests.map((r) => (r.id === id ? { ...r, status: 'rejected' as const } : r))
    );
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('es-MX');
  };

  const getStatusBadgeClass = (status: InvoiceRequest['status']) => {
    switch (status) {
      case 'approved':
        return styles.statusApproved;
      case 'rejected':
        return styles.statusRejected;
      case 'pending':
        return styles.statusPending;
      default:
        return '';
    }
  };

  const getStatusLabel = (status: InvoiceRequest['status']) => {
    switch (status) {
      case 'approved':
        return 'Aprobado';
      case 'rejected':
        return 'Rechazado';
      case 'pending':
        return 'Pendiente';
      default:
        return status;
    }
  };

  const handleSelectRequest = (request: InvoiceRequest) => {
    setSelectedRequest(request);
    
    // Find and parse the corresponding XML file
    try {
      const requestIndex = parseInt(request.id) - 1;
      if (requestIndex >= 0 && requestIndex < xmlFiles.length) {
        const xmlFile = xmlFiles[requestIndex];
        const parsedData = parseCFDIXML(xmlFile.content);
        setInvoiceData(parsedData);
        return;
      }

      // Fallback: try to find XML by UUID
      const xmlFile = xmlFiles.find((file) => file.uuid === request.uuid);
      if (xmlFile) {
        const parsedData = parseCFDIXML(xmlFile.content);
        setInvoiceData(parsedData);
        return;
      }

      // If no XML found, show error
      console.error('XML file not found for UUID:', request.uuid);
    } catch (error) {
      console.error('Error parsing XML for request:', error);
    }
  };


  // If a request is selected, show the PDF-style invoice template
  if (selectedRequest && invoiceData) {
    return (
      <div className={`${styles.pedidosFacturas} ${styles.detailView}`}>
        <div className={styles.detailHeader}>
          <button
            className={styles.backButton}
            onClick={() => {
              setSelectedRequest(null);
              setInvoiceData(null);
            }}
            aria-label="Volver a la lista"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Volver
          </button>
          <div className={styles.detailTitle}>
            <h2 className={styles.detailTitleText}>Factura - {selectedRequest.uuid}</h2>
            <span className={styles.detailSubtitle}>{selectedRequest.client}</span>
          </div>
        </div>

        <div className={styles.invoiceContainer}>
          <div className={styles.invoiceTemplate}>
            {/* Invoice Header */}
            <div className={styles.invoiceSection}>
              <h3 className={styles.sectionTitle}>COMPROBANTE FISCAL DIGITAL</h3>
              <div className={styles.invoiceMetadata}>
                <div className={styles.metadataItem}>
                  <span className={styles.metadataLabel}>Serie:</span>
                  <span className={styles.metadataValue}>{invoiceData.serie || 'N/A'}</span>
                </div>
                <div className={styles.metadataItem}>
                  <span className={styles.metadataLabel}>Folio:</span>
                  <span className={styles.metadataValue}>{invoiceData.folio}</span>
                </div>
                <div className={styles.metadataItem}>
                  <span className={styles.metadataLabel}>Fecha:</span>
                  <span className={styles.metadataValue}>{new Date(invoiceData.fecha).toLocaleString('es-MX')}</span>
                </div>
              </div>
            </div>

            {/* Emisor Section */}
            <div className={styles.invoiceSection}>
              <h4 className={styles.subsectionTitle}>Emisor</h4>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Nombre:</span>
                  <span className={styles.infoValue}>{invoiceData.emisor.nombre}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>RFC:</span>
                  <span className={styles.infoValue}>{invoiceData.emisor.rfc}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Régimen Fiscal:</span>
                  <span className={styles.infoValue}>{invoiceData.emisor.regimenFiscal}</span>
                </div>
              </div>
            </div>

            {/* Receptor Section */}
            <div className={styles.invoiceSection}>
              <h4 className={styles.subsectionTitle}>Receptor</h4>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Nombre:</span>
                  <span className={styles.infoValue}>{invoiceData.receptor.nombre}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>RFC:</span>
                  <span className={styles.infoValue}>{invoiceData.receptor.rfc}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Uso CFDI:</span>
                  <span className={styles.infoValue}>{invoiceData.receptor.usoCFDI}</span>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className={styles.invoiceSection}>
              <h4 className={styles.subsectionTitle}>Información de Pago</h4>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Forma de Pago:</span>
                  <span className={styles.infoValue}>{invoiceData.formaPago}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Método de Pago:</span>
                  <span className={styles.infoValue}>{invoiceData.metodoPago}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Moneda:</span>
                  <span className={styles.infoValue}>{invoiceData.moneda}</span>
                </div>
              </div>
            </div>

            {/* Conceptos Section */}
            <div className={styles.invoiceSection}>
              <h4 className={styles.subsectionTitle}>Conceptos</h4>
              <div className={styles.conceptsTable}>
                <div className={styles.conceptsHeader}>
                  <div className={styles.conceptHeaderCell}>Cant.</div>
                  <div className={styles.conceptHeaderCell}>Unidad</div>
                  <div className={styles.conceptHeaderCell}>Descripción</div>
                  <div className={styles.conceptHeaderCell}>P. Unitario</div>
                  <div className={styles.conceptHeaderCell}>Importe</div>
                </div>
                <div className={styles.conceptsBody}>
                  {invoiceData.conceptos.map((concepto) => (
                    <div key={concepto.id} className={styles.conceptRow}>
                      <div className={styles.conceptCell}>
                        <span className={styles.infoValue}>{concepto.cantidad}</span>
                      </div>
                      <div className={styles.conceptCell}>
                        <span className={styles.infoValue}>{concepto.unidad}</span>
                      </div>
                      <div className={styles.conceptCell}>
                        <span className={styles.infoValue}>{concepto.descripcion}</span>
                      </div>
                      <div className={styles.conceptCell}>
                        <span className={styles.infoValue}>{formatCurrency(concepto.precioUnitario)}</span>
                      </div>
                      <div className={styles.conceptCell}>
                        <span className={styles.calculatedValue}>{formatCurrency(concepto.importe)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Totals Section */}
            <div className={styles.invoiceSection}>
              <div className={styles.totalsContainer}>
                <div className={styles.totalRow}>
                  <span className={styles.totalLabel}>Subtotal:</span>
                  <span className={styles.totalValue}>{formatCurrency(invoiceData.subtotal)}</span>
                </div>
                <div className={styles.totalRow}>
                  <span className={styles.totalLabel}>IVA (16%):</span>
                  <span className={styles.totalValue}>{formatCurrency(invoiceData.iva)}</span>
                </div>
                <div className={`${styles.totalRow} ${styles.grandTotal}`}>
                  <span className={styles.totalLabel}>Total:</span>
                  <span className={styles.totalValue}>{formatCurrency(invoiceData.total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pedidosFacturas}>
      <div className={styles.filtersSection}>
        <div className={styles.filterRow}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Buscar</label>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Buscar por UUID o cliente..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
          </div>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Cliente</label>
            <input
              type="text"
              className={styles.filterInput}
              placeholder="Filtrar por cliente..."
              value={filters.client}
              onChange={(e) => setFilters({ ...filters, client: e.target.value })}
            />
          </div>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Estado</label>
            <select
              className={styles.filterSelect}
              value={filters.status}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  status: e.target.value as Filters['status'],
                })
              }
            >
              <option value="all">Todos</option>
              <option value="pending">Pendiente</option>
              <option value="approved">Aprobado</option>
              <option value="rejected">Rechazado</option>
            </select>
          </div>
        </div>
        <div className={styles.filterRow}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Fecha Desde</label>
            <input
              type="date"
              className={styles.filterInput}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  dateRange: {
                    ...filters.dateRange,
                    start: e.target.value ? new Date(e.target.value) : null,
                  },
                })
              }
            />
          </div>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Fecha Hasta</label>
            <input
              type="date"
              className={styles.filterInput}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  dateRange: {
                    ...filters.dateRange,
                    end: e.target.value ? new Date(e.target.value) : null,
                  },
                })
              }
            />
          </div>
        </div>
      </div>

      <div className={styles.dataGrid}>
        <div className={styles.gridHeader}>
          <div className={styles.headerCell}>UUID</div>
          <div className={styles.headerCell}>Fecha Factura</div>
          <div className={styles.headerCell}>Cliente</div>
          <div className={styles.headerCell}>Monto</div>
          <div className={styles.headerCell}>Estado</div>
          <div className={styles.headerCell}>Fecha Solicitud</div>
          <div className={styles.headerCell}>Acciones</div>
        </div>
        <div className={styles.gridBody}>
          {filteredRequests.length > 0 ? (
            filteredRequests.map((request) => (
              <div
                key={request.id}
                className={styles.gridRow}
                onClick={() => handleSelectRequest(request)}
              >
                <div className={styles.gridCell}>
                  <span className={styles.uuidText}>{request.uuid.substring(0, 8)}...</span>
                </div>
                <div className={styles.gridCell}>{formatDate(request.date)}</div>
                <div className={styles.gridCell}>{request.client}</div>
                <div className={styles.gridCell}>{formatCurrency(request.amount)}</div>
                <div className={styles.gridCell}>
                  <span className={`${styles.statusBadge} ${getStatusBadgeClass(request.status)}`}>
                    {getStatusLabel(request.status)}
                  </span>
                </div>
                <div className={styles.gridCell}>{formatDate(request.requestDate)}</div>
                <div className={styles.gridCell}>
                  <div className={styles.actionButtons}>
                    {request.status === 'pending' && (
                      <>
                        <button
                          className={styles.approveButton}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApprove(request.id);
                          }}
                          title="Aprobar"
                          aria-label="Aprobar"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </button>
                        <button
                          className={styles.rejectButton}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReject(request.id);
                          }}
                          title="Rechazar"
                          aria-label="Rechazar"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      </>
                    )}
                    <button
                      className={styles.viewButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectRequest(request);
                      }}
                      title="Ver Detalles"
                      aria-label="Ver Detalles"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>No se encontraron solicitudes de facturas</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

