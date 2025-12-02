'use client';

import { useEffect, useMemo, useState } from 'react';
import { BankAccount, BankTransaction } from '@/types/accountant';
import { useToast } from '@/contexts/ToastContext';
import { useNotifications } from '@/contexts/NotificationContext';
import styles from './BancosTab.module.css';

interface BancosTabProps {
  clientId: string;
  accounts: BankAccount[];
  transactions: BankTransaction[];
}

type EditableTransaction = BankTransaction;

export default function BancosTab({ clientId, accounts, transactions }: BancosTabProps) {
  const toast = useToast();
  const { addNotification } = useNotifications();
  const [selectedAccount, setSelectedAccount] = useState<string>(accounts[0]?.id || '');
  const [transactionDrafts, setTransactionDrafts] = useState<EditableTransaction[]>(transactions);
  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [undoStack, setUndoStack] = useState<EditableTransaction[][]>([]);

  const recomputeBalances = (drafts: EditableTransaction[]) => {
    const grouped = drafts.reduce<Record<string, EditableTransaction[]>>((acc, txn) => {
      acc[txn.accountId] = acc[txn.accountId] || [];
      acc[txn.accountId].push(txn);
      return acc;
    }, {});

    const nextDrafts: EditableTransaction[] = [];
    Object.values(grouped).forEach((list) => {
      const sorted = [...list].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      let running = 0;
      const recalculated = sorted.map((txn) => {
        const delta = (txn.deposit || 0) - (txn.withdrawal || 0);
        running += delta;
        return { ...txn, balance: running };
      });
      nextDrafts.push(
        ...recalculated.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      );
    });
    return nextDrafts;
  };

  const updateDrafts = (updater: (drafts: EditableTransaction[]) => EditableTransaction[]) => {
    setTransactionDrafts((prev) => recomputeBalances(updater(prev)));
  };

  useEffect(() => {
    setTransactionDrafts(recomputeBalances(transactions));
    if (!selectedAccount && accounts.length > 0) {
      setSelectedAccount(accounts[0].id);
    }
  }, [accounts, selectedAccount, transactions]);

  useEffect(() => {
    setSelectedRows((prev) => {
      const next: Record<string, boolean> = {};
      transactionDrafts.forEach((txn) => {
        if (prev[txn.id]) {
          next[txn.id] = true;
        }
      });
      return next;
    });
  }, [transactionDrafts]);

  const selectedAccountTransactions = useMemo(
    () =>
      transactionDrafts
        .filter((txn) => txn.accountId === selectedAccount)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [selectedAccount, transactionDrafts]
  );

  const selectedCount = selectedAccountTransactions.filter((txn) => selectedRows[txn.id]).length;

  const handleFileUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      toast.success('Archivo recibido. Pendiente de procesamiento.');
    }, 1500);
  };

  const pushUndoState = () => {
    setUndoStack((prev) => [transactionDrafts, ...prev].slice(0, 5));
  };

  const handleFieldChange = (
    id: string,
    field: keyof Pick<
      EditableTransaction,
      'date' | 'description' | 'reference' | 'deposit' | 'withdrawal'
    >
  ) => (value: string) => {
    updateDrafts((prev) =>
      prev.map((txn) => {
        if (txn.id !== id) return txn;
        if (field === 'deposit') {
          const amount = value === '' ? undefined : Number(value);
          return { ...txn, deposit: amount, withdrawal: undefined };
        }
        if (field === 'withdrawal') {
          const amount = value === '' ? undefined : Number(value);
          return { ...txn, withdrawal: amount, deposit: undefined };
        }
        return { ...txn, [field]: value };
      })
    );
  };

  const handleSaveDrafts = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/auxiliar/workspace', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'transactions:update',
          clientId,
          transactions: transactionDrafts,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to persist transactions');
      }
      toast.success('Cambios guardados en staging');
    } catch (error) {
      toast.error('No se pudieron guardar los cambios');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteSelected = () => {
    if (!selectedCount) {
      toast.info('Selecciona movimientos para eliminar');
      return;
    }
    pushUndoState();
    updateDrafts((prev) =>
      prev.filter((txn) => !(txn.accountId === selectedAccount && selectedRows[txn.id]))
    );
    setSelectedRows({});
    toast.success('Movimientos eliminados');
  };

  const handleMergeSelected = () => {
    const rows = selectedAccountTransactions.filter((txn) => selectedRows[txn.id]);
    if (rows.length < 2) {
      toast.info('Selecciona al menos dos movimientos del mismo cuenta');
      return;
    }
    pushUndoState();
    const delta = rows.reduce(
      (acc, txn) => acc + (txn.deposit || 0) - (txn.withdrawal || 0),
      0
    );
    const base = rows[0];
    const merged: EditableTransaction = {
      ...base,
      id: `merge-${Date.now()}`,
      description: `${base.description} (+${rows.length - 1})`,
      deposit: delta >= 0 ? delta : undefined,
      withdrawal: delta < 0 ? Math.abs(delta) : undefined,
      status: 'staged',
    };
    updateDrafts((prev) => [
      ...prev.filter((txn) => !rows.some((row) => row.id === txn.id)),
      merged,
    ]);
    setSelectedRows({});
    toast.success('Movimientos combinados');
  };

  const handleUndo = () => {
    const [latest, ...rest] = undoStack;
    if (!latest) {
      toast.info('Nada para deshacer');
      return;
    }
    setTransactionDrafts(latest);
    setUndoStack(rest);
  };

  const handleSendToConciliacion = (transaction: EditableTransaction) => {
    updateDrafts((prev) =>
      prev.map((txn) =>
        txn.id === transaction.id ? { ...txn, status: 'sent' as const } : txn
      )
    );
    toast.success('Movimiento enviado a conciliacion');
  };

  const handleFlagIssue = (transaction: EditableTransaction) => {
    updateDrafts((prev) =>
      prev.map((txn) =>
        txn.id === transaction.id
          ? { ...txn, status: 'flagged' as const, flaggedReason: 'Requiere revision' }
          : txn
      )
    );
    addNotification({
      title: 'Movimiento marcado',
      message: `Revisar movimiento ${transaction.reference || transaction.description}`,
      type: 'deadline',
      clientId,
      tab: 'bancos',
    });
    toast.warning('Movimiento marcado para revision');
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);

  return (
    <div className={styles.bancosTab}>
      <div className={styles.uploadCenter}>
        <h3 className={styles.uploadTitle}>Estados bancarios</h3>
        <div className={styles.accountSelector}>
          <label className={styles.selectorLabel}>Cuenta bancaria</label>
          <select
            className={styles.selector}
            value={selectedAccount}
            onChange={(event) => setSelectedAccount(event.target.value)}
          >
            {accounts.length === 0 ? (
              <option value="">Sin cuentas configuradas</option>
            ) : (
              accounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.name} - {account.number}
                </option>
              ))
            )}
          </select>
        </div>
        <div
          className={styles.dropzone}
          onDrop={(event) => {
            event.preventDefault();
            handleFileUpload(event.dataTransfer.files);
          }}
          onDragOver={(event) => event.preventDefault()}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <p className={styles.dropzoneText}>Arrastra PDF o haz clic para cargar</p>
          <input
            type="file"
            accept=".pdf"
            className={styles.fileInput}
            onChange={(event) => handleFileUpload(event.target.files)}
          />
        </div>
        {isProcessing && (
          <div className={styles.processingIndicator}>
            <div className={styles.spinner}></div>
            <p>Procesando PDF...</p>
          </div>
        )}
      </div>

      <div className={styles.transactionEditor}>
        <div className={styles.editorHeader}>
          <div>
            <h3 className={styles.editorTitle}>Editor de movimientos</h3>
            <p className={styles.editorSubtitle}>
              {selectedAccountTransactions.length} movimientos ·{' '}
              {formatCurrency(
                selectedAccountTransactions.reduce(
                  (acc, txn) => acc + (txn.deposit || 0) - (txn.withdrawal || 0),
                  0
                )
              )}
            </p>
          </div>
          <div className={styles.editorActions}>
            <button className={styles.bulkButton} onClick={handleDeleteSelected}>
              Eliminar ({selectedCount})
            </button>
            <button className={styles.bulkButton} onClick={handleMergeSelected}>
              Unir ({selectedCount})
            </button>
            <button
              className={styles.bulkButton}
              disabled={!undoStack.length}
              onClick={handleUndo}
            >
              Deshacer
            </button>
            <button
              className={styles.saveButton}
              onClick={handleSaveDrafts}
              disabled={isSaving}
            >
              {isSaving ? 'Guardando...' : 'Guardar cambios'}
            </button>
          </div>
        </div>

        {selectedAccountTransactions.length === 0 ? (
          <div className={styles.editorPlaceholder}>
            <p>No hay movimientos para esta cuenta</p>
          </div>
        ) : (
          <div className={styles.transactionsTable}>
            <div className={styles.tableHeader}>
              <div>
                  <input
                    type="checkbox"
                    checked={
                      selectedAccountTransactions.length > 0 &&
                      selectedAccountTransactions.every((txn) => selectedRows[txn.id])
                    }
                    onChange={(event) => {
                      const checked = event.target.checked;
                      setSelectedRows((prev) => {
                        const next = { ...prev };
                      selectedAccountTransactions.forEach((txn) => {
                        next[txn.id] = checked;
                      });
                      return next;
                    });
                  }}
                />
              </div>
              <div>Fecha</div>
              <div>Descripcion</div>
              <div>Referencia</div>
              <div>Deposito</div>
              <div>Retiro</div>
              <div>Balance</div>
              <div>Acciones</div>
            </div>
            {selectedAccountTransactions.map((transaction) => (
              <div key={transaction.id} className={styles.tableRow}>
                <div className={styles.tableCell}>
                  <input
                    type="checkbox"
                    checked={!!selectedRows[transaction.id]}
                    onChange={(event) =>
                      setSelectedRows((prev) => ({
                        ...prev,
                        [transaction.id]: event.target.checked,
                      }))
                    }
                  />
                </div>
                <div className={styles.tableCell}>
                  <input
                    type="date"
                    value={transaction.date.slice(0, 10)}
                    className={styles.cellInput}
                    onChange={(event) => handleFieldChange(transaction.id, 'date')(event.target.value)}
                  />
                </div>
                <div className={styles.tableCell}>
                  <input
                    type="text"
                    value={transaction.description}
                    className={styles.cellInput}
                    onChange={(event) =>
                      handleFieldChange(transaction.id, 'description')(event.target.value)
                    }
                  />
                </div>
                <div className={styles.tableCell}>
                  <input
                    type="text"
                    value={transaction.reference}
                    className={styles.cellInput}
                    onChange={(event) =>
                      handleFieldChange(transaction.id, 'reference')(event.target.value)
                    }
                  />
                </div>
                <div className={styles.tableCell}>
                  <input
                    type="number"
                    min="0"
                    className={styles.cellInput}
                    value={transaction.deposit ?? ''}
                    onChange={(event) =>
                      handleFieldChange(transaction.id, 'deposit')(event.target.value)
                    }
                  />
                </div>
                <div className={styles.tableCell}>
                  <input
                    type="number"
                    min="0"
                    className={styles.cellInput}
                    value={transaction.withdrawal ?? ''}
                    onChange={(event) =>
                      handleFieldChange(transaction.id, 'withdrawal')(event.target.value)
                    }
                  />
                </div>
                <div className={styles.tableCell}>
                  <span className={styles.balanceValue}>
                    {formatCurrency(transaction.balance)}
                  </span>
                </div>
                <div className={styles.rowActions}>
                  <span className={`${styles.statusBadge} ${styles[transaction.status]}`}>
                    {transaction.status}
                  </span>
                  <button
                    className={styles.rowActionButton}
                    onClick={() => handleSendToConciliacion(transaction)}
                    title="Enviar"
                    aria-label="Enviar"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                  <button
                    className={styles.rowActionButtonSecondary}
                    onClick={() => handleFlagIssue(transaction)}
                    title="Flag"
                    aria-label="Flag"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                      <line x1="4" y1="22" x2="4" y2="15" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
