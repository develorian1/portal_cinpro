'use client';

import { useMemo, useState } from 'react';
import { ReconciliationState } from '@/types/accountant';
import { useToast } from '@/contexts/ToastContext';
import { useNotifications } from '@/contexts/NotificationContext';
import styles from './ConciliacionTab.module.css';

interface CashPayment {
  id: string;
  amount: number;
  date: string;
  description: string;
  relatedCFDI?: string;
}

interface ConciliacionTabProps {
  clientId: string;
  data: ReconciliationState;
}

export default function ConciliacionTab({ clientId, data }: ConciliacionTabProps) {
  const [selectedBankLine, setSelectedBankLine] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'unreconciled' | 'reconciled' | 'sat-pdf'>('unreconciled');
  const [satFile, setSatFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [satEntries, setSatEntries] = useState(data.invoiceCandidates.map((candidate) => ({
    uuid: candidate.uuid,
    amount: candidate.amount,
    date: new Date().toISOString(),
    description: candidate.rationale,
    matched: false,
  })));
  const [pdfEntries, setPdfEntries] = useState(
    data.bankLines.map((line) => ({
      id: line.id,
      amount: line.amount,
      date: line.date,
      description: line.description,
      matched: line.linkedInvoices.length > 0,
    }))
  );
  const [cashPayments, setCashPayments] = useState<CashPayment[]>([]);
  const [showCashPaymentForm, setShowCashPaymentForm] = useState(false);
  const [cashPaymentForm, setCashPaymentForm] = useState({
    amount: '',
    date: new Date().toISOString().split('T')[0],
    description: '',
    relatedCFDI: '',
  });
  const [bankLines, setBankLines] = useState(data.bankLines);
  const [candidateInvoices, setCandidateInvoices] = useState(data.invoiceCandidates);
  const [history, setHistory] = useState(data.history);
  const [aiSuggestions, setAISuggestions] = useState(data.aiSuggestions);
  const [manualProofs, setManualProofs] = useState(data.manualProofs);
  const [linkSelections, setLinkSelections] = useState<Record<string, Set<string>>>({});
  const [linkUndoStack, setLinkUndoStack] = useState<{ bankLineId: string; invoices: string[] }[]>([]);
  const [historyFilters, setHistoryFilters] = useState({
    status: 'all',
    start: '',
    end: '',
    min: '',
    max: '',
  });
  const [suggestionDelta, setSuggestionDelta] = useState(5000);
  const [manualProofForm, setManualProofForm] = useState({ bankLineId: '', fileName: '' });
  const toast = useToast();
  const { addNotification } = useNotifications();

  const candidateForSelectedLine = useMemo(
    () =>
      selectedBankLine
        ? candidateInvoices.filter((candidate) => candidate.bankLineId === selectedBankLine)
        : [],
    [candidateInvoices, selectedBankLine]
  );

  const visibleHistory = useMemo(() => {
    return history.filter((entry) => {
      if (historyFilters.status !== 'all' && entry.status !== historyFilters.status) {
        return false;
      }
      const entryDate = new Date(entry.settledAt);
      if (historyFilters.start && entryDate < new Date(historyFilters.start)) {
        return false;
      }
      if (historyFilters.end && entryDate > new Date(historyFilters.end)) {
        return false;
      }
      if (historyFilters.min && entry.amount < Number(historyFilters.min)) {
        return false;
      }
      if (historyFilters.max && entry.amount > Number(historyFilters.max)) {
        return false;
      }
      return true;
    });
  }, [history, historyFilters]);

  const filteredSuggestions = useMemo(() => {
    return aiSuggestions.filter((suggestion) => {
      const withinDelta = Math.abs(suggestion.amountDelta) <= suggestionDelta;
      const matchesLine = selectedBankLine ? suggestion.bankLineId === selectedBankLine : true;
      return withinDelta && matchesLine;
    });
  }, [aiSuggestions, suggestionDelta, selectedBankLine]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    }).format(amount);
  };

  const toggleCandidateSelection = (candidateId: string) => {
    if (!selectedBankLine) return;
    setLinkSelections((prev) => {
      const existing = prev[selectedBankLine] ? new Set(prev[selectedBankLine]) : new Set<string>();
      if (existing.has(candidateId)) {
        existing.delete(candidateId);
      } else {
        existing.add(candidateId);
      }
      return {
        ...prev,
        [selectedBankLine]: existing,
      };
    });
  };

  const handleLinkSelection = () => {
    if (!selectedBankLine) return;
    const selections = linkSelections[selectedBankLine];
    if (!selections || selections.size === 0) {
      toast.info('Selecciona al menos un CFDI');
      return;
    }
    const invoices = Array.from(selections);
    const linkedCandidates = candidateInvoices.filter((candidate) => invoices.includes(candidate.id));
    setBankLines((prev) =>
      prev.map((line) =>
        line.id === selectedBankLine
          ? {
              ...line,
              linkedInvoices: Array.from(new Set([...line.linkedInvoices, ...linkedCandidates.map((c) => c.uuid)])),
            }
          : line
      )
    );
    setCandidateInvoices((prev) => prev.filter((candidate) => !invoices.includes(candidate.id)));
    const totalAmount = linkedCandidates.reduce((acc, candidate) => acc + candidate.amount, 0);
    const newHistory = {
      id: `hist-${Date.now()}`,
      bankLineId: selectedBankLine,
      invoices: linkedCandidates.map((candidate) => candidate.uuid),
      amount: totalAmount,
      status: 'completed' as const,
      settledAt: new Date().toISOString(),
      reviewer: 'Auto match',
      notes: `Conciliado desde tablero (${linkedCandidates.length} CFDIs)`,
    };
    setHistory((prev) => [newHistory, ...prev]);
    setLinkUndoStack((prev) => [{ bankLineId: selectedBankLine, invoices: linkedCandidates.map((candidate) => candidate.uuid) }, ...prev]);
    setLinkSelections((prev) => ({ ...prev, [selectedBankLine]: new Set() }));
    addNotification({
      title: 'Conciliacion completada',
      message: `Se conciliaron ${linkedCandidates.length} CFDIs`,
      type: 'report',
      clientId,
      tab: 'conciliacion',
    });
    toast.success('Conciliacion registrada');
  };

  const handleUndoLink = () => {
    const [last, ...rest] = linkUndoStack;
    if (!last) {
      toast.info('No hay conciliaciones para deshacer');
      return;
    }
    setLinkUndoStack(rest);
    setBankLines((prev) =>
      prev.map((line) =>
        line.id === last.bankLineId
          ? { ...line, linkedInvoices: line.linkedInvoices.filter((uuid) => !last.invoices.includes(uuid)) }
          : line
      )
    );
    setHistory((prev) => prev.filter((entry) => entry.bankLineId !== last.bankLineId || entry.invoices.some((uuid) => !last.invoices.includes(uuid))));
    toast.success('Conciliacion revertida');
  };

  const handleApplySuggestion = (suggestionId: string) => {
    const suggestion = aiSuggestions.find((item) => item.id === suggestionId);
    if (!suggestion) return;
    const candidate = candidateInvoices.find((candidate) => candidate.uuid === suggestion.invoiceUuid);
    if (!candidate) {
      toast.error('No se encontro CFDI sugerido');
      return;
    }
    setSelectedBankLine(suggestion.bankLineId);
    toggleCandidateSelection(candidate.id);
    toast.info('Sugerencia aplicada, confirma enlace');
  };

  const handleManualProofSubmit = async () => {
    if (!manualProofForm.bankLineId || !manualProofForm.fileName) {
      toast.info('Completa los campos de prueba manual');
      return;
    }
    try {
      const response = await fetch('/api/auxiliar/workspace', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'manual-proof:add',
          clientId,
          bankLineId: manualProofForm.bankLineId,
          fileName: manualProofForm.fileName,
        }),
      });
      if (!response.ok) {
        throw new Error('Error al adjuntar prueba');
      }
      const result = await response.json();
      setManualProofs((prev) => [result.proof, ...prev]);
      setManualProofForm({ bankLineId: '', fileName: '' });
      toast.success('Prueba adjuntada');
    } catch (error) {
      toast.error('No se pudo adjuntar la prueba');
    }
  };

  const handleCreateMissing = () => {
    if (!selectedBankLine) {
      toast.info('Selecciona un movimiento bancario');
      return;
    }
    const newCandidate = {
      id: `manual-${Date.now()}`,
      bankLineId: selectedBankLine,
      uuid: `MAN-${Date.now()}`,
      amount: 0,
      confidence: 0.5,
      rationale: 'Creado manualmente',
    };
    setCandidateInvoices((prev) => [newCandidate, ...prev]);
    toast.success('CFDI manual creado');
  };

  const filteredSuggestionsCount = filteredSuggestions.length;
  const selectionTotals = () => {
    if (!selectedBankLine) return 0;
    const selections = linkSelections[selectedBankLine];
    if (!selections || selections.size === 0) return 0;
    return candidateInvoices
      .filter((candidate) => selections.has(candidate.id))
      .reduce((acc, candidate) => acc + candidate.amount, 0);
  };

  const handleAddCashPayment = () => {
    if (cashPaymentForm.amount && cashPaymentForm.date && cashPaymentForm.description) {
      const newPayment: CashPayment = {
        id: Date.now().toString(),
        amount: parseFloat(cashPaymentForm.amount),
        date: cashPaymentForm.date,
        description: cashPaymentForm.description,
        relatedCFDI: cashPaymentForm.relatedCFDI || undefined,
      };
      setCashPayments([...cashPayments, newPayment]);
      setCashPaymentForm({
        amount: '',
        date: new Date().toISOString().split('T')[0],
        description: '',
        relatedCFDI: '',
      });
      setShowCashPaymentForm(false);
    }
  };

  const handleLinkCFDI = (paymentId: string, cfdiUuid: string) => {
    setCashPayments(cashPayments.map((payment) =>
      payment.id === paymentId ? { ...payment, relatedCFDI: cfdiUuid } : payment
    ));
  };

  const handleSATFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSatFile(file);
    }
  };

  const handlePDFFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPdfFile(file);
    }
  };

  return (
    <div className={styles.conciliacionTab}>
      <div className={styles.tabHeader}>
        <div className={styles.viewToggle}>
          <button
            className={`${styles.tabButton} ${viewMode === 'unreconciled' ? styles.active : ''}`}
            onClick={() => setViewMode('unreconciled')}
          >
            Sin Conciliar
          </button>
          <button
            className={`${styles.tabButton} ${viewMode === 'sat-pdf' ? styles.active : ''}`}
            onClick={() => setViewMode('sat-pdf')}
          >
            Ajuste SAT vs PDF
          </button>
          <button
            className={`${styles.tabButton} ${viewMode === 'reconciled' ? styles.active : ''}`}
            onClick={() => setViewMode('reconciled')}
          >
            Historial Conciliado
          </button>
        </div>
        {selectedBankLine && (
          <div className={styles.selectionActions}>
            <span>
              {linkSelections[selectedBankLine]?.size || 0} CFDIs · {formatCurrency(selectionTotals())}
            </span>
            <button className={styles.linkButton} onClick={handleLinkSelection}>
              Vincular seleccion
            </button>
            <button className={styles.undoButton} onClick={handleUndoLink}>
              Deshacer
            </button>
          </div>
        )}
      </div>

      {viewMode === 'unreconciled' ? (
        <div className={styles.splitPane}>
          <div className={styles.leftPane}>
            <h3 className={styles.paneTitle}>Movimientos bancarios</h3>
            <div className={styles.bankLinesList}>
              {bankLines.map((line) => (
                <div
                  key={line.id}
                  className={`${styles.bankLineCard} ${selectedBankLine === line.id ? styles.selected : ''}`}
                  onClick={() => setSelectedBankLine(line.id)}
                >
                  <div className={styles.bankLineAmount}>{formatCurrency(line.amount)}</div>
                  <div className={styles.bankLineDetails}>
                    <div className={styles.bankLineDate}>{new Date(line.date).toLocaleDateString()}</div>
                    <div className={styles.bankLineDesc}>{line.description}</div>
                    <div className={styles.bankLineMeta}>
                      <span>{line.linkedInvoices.length} vinculados</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightPane}>
            <div className={styles.paneHeader}>
              <h3 className={styles.paneTitle}>CFDIs candidatos</h3>
              <input type="text" className={styles.searchInput} placeholder="Buscar RFC o monto" />
            </div>
            <div className={styles.candidatesList}>
              {candidateForSelectedLine.length > 0 ? (
                candidateForSelectedLine.map((invoice) => {
                  const isSelected = linkSelections[selectedBankLine || '']?.has(invoice.id);
                  return (
                    <div key={invoice.id} className={`${styles.candidateCard} ${isSelected ? styles.candidateSelected : ''}`}>
                      <div className={styles.candidateHeader}>
                        <span className={styles.candidateUuid}>{invoice.uuid}</span>
                        <span className={styles.matchBadge}>{Math.round(invoice.confidence * 100)}% match</span>
                      </div>
                      <div className={styles.candidateAmount}>{formatCurrency(invoice.amount)}</div>
                      <p className={styles.candidateReason}>{invoice.rationale}</p>
                      <label className={styles.candidateSelect}>
                        <input
                          type="checkbox"
                          checked={!!isSelected}
                          onChange={() => toggleCandidateSelection(invoice.id)}
                        />
                        <span>Seleccionar</span>
                      </label>
                    </div>
                  );
                })
              ) : (
                <div className={styles.emptyState}>
                  <p>Selecciona un movimiento para ver coincidencias</p>
                </div>
              )}
            </div>
            <div className={styles.manualActions}>
              <button className={styles.actionButton} onClick={() => setShowCashPaymentForm(!showCashPaymentForm)}>
                Pagos en efectivo
              </button>
              <button className={styles.actionButton} onClick={handleCreateMissing}>
                Crear CFDI faltante
              </button>
            </div>
            <div className={styles.aiPanel}>
              <div className={styles.aiHeader}>
                <h4>Sugerencias AI ({filteredSuggestionsCount})</h4>
                <div className={styles.aiFilter}>
                  <label>
                    Delta max
                    <input
                      type="number"
                      value={suggestionDelta}
                      onChange={(e) => setSuggestionDelta(Number(e.target.value) || 0)}
                    />
                  </label>
                </div>
              </div>
              <div className={styles.aiList}>
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((suggestion) => (
                    <div key={suggestion.id} className={styles.aiCard}>
                      <div className={styles.aiConfidence}>{Math.round(suggestion.confidence * 100)}%</div>
                      <div>
                        <p className={styles.aiReason}>{suggestion.reason}</p>
                        <span className={styles.aiDelta}>
                          Delta {formatCurrency(suggestion.amountDelta)}
                        </span>
                      </div>
                      <button
                        className={styles.applySuggestionBtn}
                        onClick={() => handleApplySuggestion(suggestion.id)}
                      >
                        Aplicar
                      </button>
                    </div>
                  ))
                ) : (
                  <p className={styles.emptyStateSmall}>Sin sugerencias bajo el filtro actual</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : viewMode === 'sat-pdf' ? (
        <div className={styles.satPdfView}>
          <div className={styles.fileUploadSection}>
            <div className={styles.fileUpload}>
              <label className={styles.fileUploadLabel}>
                <input type="file" accept=".xml" onChange={handleSATFileUpload} className={styles.fileInput} />
                <span className={styles.fileUploadButton}>
                  {satFile ? `SAT: ${satFile.name}` : 'Subir Archivo SAT (XML)'}
                </span>
              </label>
            </div>
            <div className={styles.fileUpload}>
              <label className={styles.fileUploadLabel}>
                <input type="file" accept=".pdf" onChange={handlePDFFileUpload} className={styles.fileInput} />
                <span className={styles.fileUploadButton}>
                  {pdfFile ? `PDF: ${pdfFile.name}` : 'Subir Estado de Cuenta (PDF)'}
                </span>
              </label>
            </div>
          </div>

          {(satEntries.length > 0 || pdfEntries.length > 0) && (
            <div className={styles.comparisonView}>
              <div className={styles.comparisonPane}>
                <h3 className={styles.paneTitle}>Entradas SAT</h3>
                <div className={styles.entriesList}>
                  {satEntries.map((entry) => (
                    <div key={entry.uuid} className={`${styles.entryCard} ${entry.matched ? styles.matched : styles.unmatched}`}>
                      <div className={styles.entryHeader}>
                        <span className={styles.entryUuid}>{entry.uuid.substring(0, 8)}...</span>
                        {entry.matched && <span className={styles.matchedBadge}>Conciliado</span>}
                      </div>
                      <div className={styles.entryAmount}>{formatCurrency(entry.amount)}</div>
                      <div className={styles.entryDate}>{new Date().toLocaleDateString('es-MX')}</div>
                      <div className={styles.entryDesc}>{entry.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.comparisonPane}>
                <h3 className={styles.paneTitle}>Movimientos PDF</h3>
                <div className={styles.entriesList}>
                  {pdfEntries.map((entry) => (
                    <div key={entry.id} className={`${styles.entryCard} ${entry.matched ? styles.matched : styles.unmatched}`}>
                      <div className={styles.entryHeader}>
                        <span className={styles.entryId}>Movimiento #{entry.id}</span>
                        {entry.matched && <span className={styles.matchedBadge}>Conciliado</span>}
                      </div>
                      <div className={styles.entryAmount}>{formatCurrency(entry.amount)}</div>
                      <div className={styles.entryDate}>{new Date(entry.date).toLocaleDateString('es-MX')}</div>
                      <div className={styles.entryDesc}>{entry.description}</div>
                      {!entry.matched && (
                        <button
                          className={styles.matchButton}
                          onClick={() => {
                            const matchingSAT = satEntries.find(
                              (sat) => !sat.matched && Math.abs(sat.amount - entry.amount) < 0.01
                            );
                            if (matchingSAT) {
                              setSatEntries((prev) =>
                                prev.map((sat) => (sat.uuid === matchingSAT.uuid ? { ...sat, matched: true } : sat))
                              );
                              setPdfEntries((prev) =>
                                prev.map((pdf) => (pdf.id === entry.id ? { ...pdf, matched: true } : pdf))
                              );
                            }
                          }}
                        >
                          Relacionar
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className={styles.manualProofs}>
            <h3 className={styles.sectionTitle}>Pruebas manuales</h3>
            <div className={styles.manualProofForm}>
              <select
                value={manualProofForm.bankLineId}
                onChange={(e) => setManualProofForm({ ...manualProofForm, bankLineId: e.target.value })}
                className={styles.formInput}
              >
                <option value="">Selecciona movimiento</option>
                {bankLines.map((line) => (
                  <option key={line.id} value={line.id}>
                    {line.description}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Nombre de archivo"
                value={manualProofForm.fileName}
                onChange={(e) => setManualProofForm({ ...manualProofForm, fileName: e.target.value })}
                className={styles.formInput}
              />
              <button className={styles.actionButton} onClick={handleManualProofSubmit}>
                Adjuntar
              </button>
            </div>
            <div className={styles.proofList}>
              {manualProofs.map((proof) => (
                <div key={proof.id} className={styles.proofCard}>
                  <div>
                    <div className={styles.proofName}>{proof.fileName}</div>
                    <span className={styles.proofMeta}>{new Date(proof.uploadedAt).toLocaleString('es-MX')}</span>
                  </div>
                  <span className={styles.proofStatus}>{proof.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.cashPaymentsSection}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Pagos en Efectivo</h3>
              <button className={styles.addButton} onClick={() => setShowCashPaymentForm(!showCashPaymentForm)}>
                + Agregar Pago en Efectivo
              </button>
            </div>

            {showCashPaymentForm && (
              <div className={styles.cashPaymentForm}>
                <div className={styles.formRow}>
                  <label className={styles.formLabel}>
                    Monto
                    <input
                      type="number"
                      step="0.01"
                      value={cashPaymentForm.amount}
                      onChange={(e) => setCashPaymentForm({ ...cashPaymentForm, amount: e.target.value })}
                      className={styles.formInput}
                      placeholder="0.00"
                    />
                  </label>
                  <label className={styles.formLabel}>
                    Fecha
                    <input
                      type="date"
                      value={cashPaymentForm.date}
                      onChange={(e) => setCashPaymentForm({ ...cashPaymentForm, date: e.target.value })}
                      className={styles.formInput}
                    />
                  </label>
                </div>
                <label className={styles.formLabel}>
                  Descripcion
                  <input
                    type="text"
                    value={cashPaymentForm.description}
                    onChange={(e) => setCashPaymentForm({ ...cashPaymentForm, description: e.target.value })}
                    className={styles.formInput}
                    placeholder="Descripcion del pago"
                  />
                </label>
                <label className={styles.formLabel}>
                  CFDI Relacionado (UUID)
                  <input
                    type="text"
                    value={cashPaymentForm.relatedCFDI}
                    onChange={(e) => setCashPaymentForm({ ...cashPaymentForm, relatedCFDI: e.target.value })}
                    className={styles.formInput}
                    placeholder="Opcional"
                  />
                </label>
                <div className={styles.formActions}>
                  <button className={styles.saveButton} onClick={handleAddCashPayment}>
                    Guardar
                  </button>
                  <button className={styles.cancelButton} onClick={() => setShowCashPaymentForm(false)}>
                    Cancelar
                  </button>
                </div>
              </div>
            )}

            <div className={styles.cashPaymentsList}>
              {cashPayments.length > 0 ? (
                cashPayments.map((payment) => (
                  <div key={payment.id} className={styles.cashPaymentCard}>
                    <div className={styles.paymentHeader}>
                      <span className={styles.paymentAmount}>{formatCurrency(payment.amount)}</span>
                      <span className={styles.paymentDate}>{new Date(payment.date).toLocaleDateString('es-MX')}</span>
                    </div>
                    <div className={styles.paymentDesc}>{payment.description}</div>
                    {payment.relatedCFDI ? (
                      <div className={styles.relatedCFDI}>CFDI: {payment.relatedCFDI.substring(0, 8)}...</div>
                    ) : (
                      <button
                        className={styles.linkCFDIButton}
                        onClick={() => {
                          const uuid = prompt('Ingrese el UUID del CFDI a relacionar:');
                          if (uuid) {
                            handleLinkCFDI(payment.id, uuid);
                          }
                        }}
                      >
                        Relacionar CFDI
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <div className={styles.emptyState}>
                  <p>No hay pagos en efectivo registrados</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.historyView}>
          <div className={styles.historyFilters}>
            <select
              value={historyFilters.status}
              onChange={(e) => setHistoryFilters({ ...historyFilters, status: e.target.value })}
              className={styles.filterSelect}
            >
              <option value="all">Todos</option>
              <option value="completed">Conciliados</option>
              <option value="flagged">Marcados</option>
              <option value="pending">Pendientes</option>
            </select>
            <input
              type="date"
              value={historyFilters.start}
              onChange={(e) => setHistoryFilters({ ...historyFilters, start: e.target.value })}
              className={styles.filterInput}
            />
            <input
              type="date"
              value={historyFilters.end}
              onChange={(e) => setHistoryFilters({ ...historyFilters, end: e.target.value })}
              className={styles.filterInput}
            />
            <input
              type="number"
              placeholder="Monto minimo"
              value={historyFilters.min}
              onChange={(e) => setHistoryFilters({ ...historyFilters, min: e.target.value })}
              className={styles.filterInput}
            />
            <input
              type="number"
              placeholder="Monto maximo"
              value={historyFilters.max}
              onChange={(e) => setHistoryFilters({ ...historyFilters, max: e.target.value })}
              className={styles.filterInput}
            />
          </div>
          <div className={styles.historyList}>
            {visibleHistory.map((record) => (
              <div key={record.id} className={styles.historyCard}>
                <div>
                  <h4 className={styles.historyAmount}>{formatCurrency(record.amount)}</h4>
                  <p className={styles.historyMeta}>
                    {new Date(record.settledAt).toLocaleDateString('es-MX')} · {record.reviewer}
                  </p>
                </div>
                <div className={styles.historyInvoices}>
                  {record.invoices.map((invoice) => (
                    <span key={invoice} className={styles.historyInvoice}>
                      {invoice.substring(0, 8)}...
                    </span>
                  ))}
                </div>
                <span className={`${styles.historyStatus} ${styles[record.status]}`}>{record.status}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
