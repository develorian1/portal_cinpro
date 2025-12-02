'use client';

import { useState, useEffect } from 'react';
import styles from './ProcesamientoPDF.module.css';

type MovementType = 'deposit' | 'withdrawal' | 'transfer' | 'fee' | 'payment' | 'other';
type ProcessingStatus = 'processing' | 'completed' | 'error';

interface PDFMovement {
  id: string;
  pdfName: string;
  uploadDate: string;
  movementType: MovementType;
  amount: number;
  status: ProcessingStatus;
  client: string;
  description?: string;
  errorMessage?: string;
}

interface Filters {
  bank: string;
  group: string;
  client: string;
  status: ProcessingStatus | 'all';
  dateRange: { start: Date | null; end: Date | null };
}

interface TableRow {
  pagina: string;
  fila: string;
  fecha: string;
  concepto: string;
  depositoAjustado: string;
  retiroAjustado: string;
  saldoAjustado: string;
  depositoModelo: string;
  retiroModelo: string;
  saldoModelo: string;
  correccionAplicada: string;
  camposCorregidos: string;
}

const DEFAULT_COLUMNS = [
  'Página',
  'Fila',
  'Fecha',
  'Concepto',
  'Depósito ajustado',
  'Retiro ajustado',
  'Saldo ajustado',
  'Depósito modelo',
  'Retiro modelo',
  'Saldo modelo',
  'Corrección aplicada',
  'Campos corregidos',
];

const DEFAULT_ROW: TableRow = {
  pagina: '2',
  fila: '1',
  fecha: '2025-09-30',
  concepto: 'SALDO ANTERIOR',
  depositoAjustado: '0',
  retiroAjustado: '0',
  saldoAjustado: '2147428.96',
  depositoModelo: '0',
  retiroModelo: '0',
  saldoModelo: '2147428.96',
  correccionAplicada: 'FALSE',
  camposCorregidos: '',
};

const BASE_ROW_COUNT = 12; // Fill modal with rows to maintain base height

export default function ProcesamientoPDF() {
  const [movements, setMovements] = useState<PDFMovement[]>([]);
  const [filteredMovements, setFilteredMovements] = useState<PDFMovement[]>([]);
  const [filters, setFilters] = useState<Filters>({
    bank: '',
    group: '',
    client: '',
    status: 'all',
    dateRange: { start: null, end: null },
  });
  const [selectedMovement, setSelectedMovement] = useState<PDFMovement | null>(null);
  const [banks, setBanks] = useState<string[]>([]);
  const [groups, setGroups] = useState<string[]>([]);
  const [clients, setClients] = useState<string[]>([]);
  const [tableData, setTableData] = useState<TableRow[]>([]);
  const [undoStack, setUndoStack] = useState<TableRow[][]>([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // TODO: Replace with actual API call
    // Fetch processing PDFs from /api/pdf/processing endpoint
    const mockMovements: PDFMovement[] = [
      {
        id: '1',
        pdfName: 'Estado_Cuenta_Enero_2024.pdf',
        uploadDate: '2024-01-20T10:30:00',
        movementType: 'deposit',
        amount: 15000.00,
        status: 'processing',
        client: 'Acme Corp',
        description: 'Depósito bancario',
      },
      {
        id: '2',
        pdfName: 'Movimientos_Banco_2024.pdf',
        uploadDate: '2024-01-20T09:15:00',
        movementType: 'withdrawal',
        amount: -5000.00,
        status: 'completed',
        client: 'Tech Solutions',
        description: 'Retiro de efectivo',
      },
      {
        id: '3',
        pdfName: 'Estado_Cuenta_Febrero.pdf',
        uploadDate: '2024-01-20T11:00:00',
        movementType: 'transfer',
        amount: 25000.00,
        status: 'error',
        client: 'Global Industries',
        description: 'Transferencia recibida',
        errorMessage: 'Error al procesar fecha del movimiento',
      },
      {
        id: '4',
        pdfName: 'Movimientos_2024_01.pdf',
        uploadDate: '2024-01-20T08:45:00',
        movementType: 'fee',
        amount: -150.00,
        status: 'processing',
        client: 'Startup Ventures',
        description: 'Comisión bancaria',
      },
      {
        id: '5',
        pdfName: 'Estado_Cuenta.pdf',
        uploadDate: '2024-01-19T16:20:00',
        movementType: 'payment',
        amount: -12000.00,
        status: 'completed',
        client: 'Enterprise Group',
        description: 'Pago a proveedor',
      },
    ];

    setMovements(mockMovements);

    // Extract unique values for filters
    // Note: These would come from the actual data structure
    // For now, using mock data that would typically come from the API
    const uniqueBanks = Array.from(new Set(['Banco Nacional', 'Banco Comercial', 'Banco Internacional']));
    const uniqueGroups = Array.from(new Set(['Grupo A', 'Grupo B', 'Grupo C']));
    const uniqueClients = Array.from(new Set(mockMovements.map((m) => m.client)));

    setBanks(uniqueBanks);
    setGroups(uniqueGroups);
    setClients(uniqueClients);
  }, []);

  useEffect(() => {
    let filtered = [...movements];

    // Filter by bank
    if (filters.bank) {
      // Note: This assumes movements have bank info. If not in current structure,
      // this would need to be added to the PDFMovement interface
      // For now, we'll skip this filter if bank data isn't available
    }

    // Filter by group
    if (filters.group) {
      // Note: This assumes movements have group info. If not in current structure,
      // this would need to be added to the PDFMovement interface
      // For now, we'll skip this filter if group data isn't available
    }

    // Filter by client
    if (filters.client) {
      filtered = filtered.filter((m) => m.client === filters.client);
    }

    // Filter by status
    if (filters.status !== 'all') {
      filtered = filtered.filter((m) => m.status === filters.status);
    }

    // Filter by date range
    if (filters.dateRange.start) {
      filtered = filtered.filter(
        (m) => new Date(m.uploadDate) >= filters.dateRange.start!
      );
    }
    if (filters.dateRange.end) {
      filtered = filtered.filter(
        (m) => new Date(m.uploadDate) <= filters.dateRange.end!
      );
    }

    setFilteredMovements(filtered);
  }, [movements, filters]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    }).format(amount);
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} | ${hours}:${minutes}`;
  };

  const getMovementTypeLabel = (type: MovementType) => {
    const labels: Record<MovementType, string> = {
      deposit: 'Depósito',
      withdrawal: 'Retiro',
      transfer: 'Transferencia',
      fee: 'Comisión',
      payment: 'Pago',
      other: 'Otro',
    };
    return labels[type];
  };

  const getStatusLabel = (status: ProcessingStatus) => {
    const labels: Record<ProcessingStatus, string> = {
      processing: 'Procesando',
      completed: 'Completado',
      error: 'Error',
    };
    return labels[status];
  };

  const getStatusBadgeClass = (status: ProcessingStatus) => {
    switch (status) {
      case 'completed':
        return styles.statusCompleted;
      case 'error':
        return styles.statusError;
      case 'processing':
        return styles.statusProcessing;
      default:
        return '';
    }
  };

  const getMovementTypeClass = (type: MovementType) => {
    return styles[`movement${type.charAt(0).toUpperCase() + type.slice(1)}`];
  };

  // Initialize table data when modal opens
  useEffect(() => {
    if (selectedMovement) {
      // Initialize with default row repeated to fill base height
      const initialData = Array.from({ length: BASE_ROW_COUNT }, () => ({ ...DEFAULT_ROW }));
      setTableData(initialData);
      setUndoStack([initialData]);
      setIsEditing(false); // Reset editing state when opening new entry
    }
  }, [selectedMovement]);

  const handleCellChange = (rowIndex: number, field: keyof TableRow, value: string) => {
    const newData = [...tableData];
    newData[rowIndex] = { ...newData[rowIndex], [field]: value };
    setTableData(newData);
  };

  const handleUndo = () => {
    if (undoStack.length > 1) {
      const newStack = [...undoStack];
      newStack.pop(); // Remove current state
      const previousState = newStack[newStack.length - 1];
      setTableData(previousState.map(row => ({ ...row })));
      setUndoStack(newStack);
    } else if (undoStack.length === 1) {
      // Revert to initial state
      const initialState = undoStack[0];
      setTableData(initialState.map(row => ({ ...row })));
    }
  };

  const handleSave = () => {
    // Save current state to undo stack before saving
    setUndoStack([...undoStack, tableData.map(row => ({ ...row }))]);
    // TODO: Implement actual save to backend
    console.log('Saving data:', tableData);
  };

  const handleTemplateManage = () => {
    // TODO: Implement template management
    console.log('Template management - to be implemented');
  };

  return (
    <div className={styles.procesamientoPDF}>
      <div className={styles.filtersSection}>
        <div className={styles.filterRow}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Banco</label>
            <select
              className={styles.filterSelect}
              value={filters.bank}
              onChange={(e) => setFilters({ ...filters, bank: e.target.value })}
            >
              <option value="">Todos los bancos</option>
              {banks.map((bank) => (
                <option key={bank} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Grupo</label>
            <select
              className={styles.filterSelect}
              value={filters.group}
              onChange={(e) => setFilters({ ...filters, group: e.target.value })}
            >
              <option value="">Todos los grupos</option>
              {groups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Cliente</label>
            <select
              className={styles.filterSelect}
              value={filters.client}
              onChange={(e) => setFilters({ ...filters, client: e.target.value })}
            >
              <option value="">Todos los clientes</option>
              {clients.map((client) => (
                <option key={client} value={client}>
                  {client}
                </option>
              ))}
            </select>
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
              <option value="processing">Procesando</option>
              <option value="completed">Completado</option>
              <option value="error">Error</option>
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
          <div className={styles.headerCell}>PDF</div>
          <div className={styles.headerCell}>Fecha Carga</div>
          <div className={styles.headerCell}>Tipo</div>
          <div className={styles.headerCell}>Monto</div>
          <div className={styles.headerCell}>Estado</div>
          <div className={styles.headerCell}>Cliente</div>
          <div className={styles.headerCell}>Descripción</div>
        </div>
        <div className={styles.gridBody}>
          {filteredMovements.length > 0 ? (
            filteredMovements.map((movement) => (
              <div
                key={movement.id}
                className={styles.gridRow}
                onClick={() => setSelectedMovement(movement)}
              >
                <div className={styles.gridCell}>
                  <span className={styles.pdfName}>{movement.pdfName}</span>
                </div>
                <div className={styles.gridCell}>{formatDateTime(movement.uploadDate)}</div>
                <div className={styles.gridCell}>
                  <span className={`${styles.movementTypeBadge} ${getMovementTypeClass(movement.movementType)}`}>
                    {getMovementTypeLabel(movement.movementType)}
                  </span>
                </div>
                <div className={styles.gridCell}>
                  <span className={movement.amount < 0 ? styles.negativeAmount : styles.positiveAmount}>
                    {formatCurrency(movement.amount)}
                  </span>
                </div>
                <div className={styles.gridCell}>
                  <span className={`${styles.statusBadge} ${getStatusBadgeClass(movement.status)}`}>
                    {getStatusLabel(movement.status)}
                  </span>
                </div>
                <div className={styles.gridCell}>{movement.client}</div>
                <div className={styles.gridCell}>
                  {movement.description || '-'}
                </div>
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>No se encontraron movimientos en procesamiento</p>
            </div>
          )}
        </div>
      </div>

      {selectedMovement && (
        <div className={styles.detailModal} onClick={() => setSelectedMovement(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <h3 className={styles.modalTitle}>{selectedMovement.pdfName}</h3>
                <button
                  className={styles.templateButton}
                  onClick={handleTemplateManage}
                  title="Gestionar plantillas"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </button>
              </div>
              <button
                className={styles.closeButton}
                onClick={() => setSelectedMovement(null)}
              >
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.tableContainer}>
                <table className={styles.editableTable}>
                  <thead>
                    <tr>
                      {DEFAULT_COLUMNS.map((column) => (
                        <th key={column} className={styles.tableHeader}>
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, rowIndex) => (
                      <tr key={rowIndex} className={styles.tableRow}>
                        <td className={styles.tableCell}>
                          <input
                            type="text"
                            value={row.pagina}
                            onChange={(e) => handleCellChange(rowIndex, 'pagina', e.target.value)}
                            className={styles.editableInput}
                            disabled={!isEditing}
                          />
                        </td>
                        <td className={styles.tableCell}>
                          <input
                            type="text"
                            value={row.fila}
                            onChange={(e) => handleCellChange(rowIndex, 'fila', e.target.value)}
                            className={styles.editableInput}
                            disabled={!isEditing}
                          />
                        </td>
                        <td className={styles.tableCell}>
                          <input
                            type="date"
                            value={row.fecha}
                            onChange={(e) => handleCellChange(rowIndex, 'fecha', e.target.value)}
                            className={styles.editableInput}
                            disabled={!isEditing}
                          />
                        </td>
                        <td className={styles.tableCell}>
                          <input
                            type="text"
                            value={row.concepto}
                            onChange={(e) => handleCellChange(rowIndex, 'concepto', e.target.value)}
                            className={styles.editableInput}
                            disabled={!isEditing}
                          />
                        </td>
                        <td className={styles.tableCell}>
                          <input
                            type="text"
                            value={row.depositoAjustado}
                            onChange={(e) => handleCellChange(rowIndex, 'depositoAjustado', e.target.value)}
                            className={styles.editableInput}
                            disabled={!isEditing}
                          />
                        </td>
                        <td className={styles.tableCell}>
                          <input
                            type="text"
                            value={row.retiroAjustado}
                            onChange={(e) => handleCellChange(rowIndex, 'retiroAjustado', e.target.value)}
                            className={styles.editableInput}
                            disabled={!isEditing}
                          />
                        </td>
                        <td className={styles.tableCell}>
                          <input
                            type="text"
                            value={row.saldoAjustado}
                            onChange={(e) => handleCellChange(rowIndex, 'saldoAjustado', e.target.value)}
                            className={styles.editableInput}
                            disabled={!isEditing}
                          />
                        </td>
                        <td className={styles.tableCell}>
                          <input
                            type="text"
                            value={row.depositoModelo}
                            onChange={(e) => handleCellChange(rowIndex, 'depositoModelo', e.target.value)}
                            className={styles.editableInput}
                            disabled={!isEditing}
                          />
                        </td>
                        <td className={styles.tableCell}>
                          <input
                            type="text"
                            value={row.retiroModelo}
                            onChange={(e) => handleCellChange(rowIndex, 'retiroModelo', e.target.value)}
                            className={styles.editableInput}
                            disabled={!isEditing}
                          />
                        </td>
                        <td className={styles.tableCell}>
                          <input
                            type="text"
                            value={row.saldoModelo}
                            onChange={(e) => handleCellChange(rowIndex, 'saldoModelo', e.target.value)}
                            className={styles.editableInput}
                            disabled={!isEditing}
                          />
                        </td>
                        <td className={styles.tableCell}>
                          <input
                            type="text"
                            value={row.correccionAplicada}
                            onChange={(e) => handleCellChange(rowIndex, 'correccionAplicada', e.target.value)}
                            className={`${styles.editableInput} ${
                              row.correccionAplicada.toUpperCase() === 'TRUE'
                                ? styles.correccionTrue
                                : styles.correccionFalse
                            }`}
                            disabled={!isEditing}
                          />
                        </td>
                        <td className={styles.tableCell}>
                          <button
                            className={styles.editRowButton}
                            onClick={() => {
                              // Functionality to be added later
                            }}
                            title="Editar fila"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.modalActions}>
                <button
                  className={styles.undoButton}
                  onClick={handleUndo}
                  disabled={undoStack.length <= 1}
                >
                  Deshacer
                </button>
                <button
                  className={styles.saveButton}
                  onClick={handleSave}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

