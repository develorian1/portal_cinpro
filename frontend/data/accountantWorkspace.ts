import {
  AISuggestion,
  BankTransaction,
  ManualProof,
  ReportFormat,
  ReportJob,
  ReportType,
  WorkspaceClient,
  WorkspaceNotification,
  WorkspaceSnapshot,
  WorkspaceTask,
} from '@/types/accountant';

interface WorkspaceState extends WorkspaceSnapshot {}

const workspaceState: WorkspaceState = {
  counts: {
    pendingReconciliations: 6,
    missingStatements: 2,
    rejectedItems: 1,
  },
  tasks: [
    {
      id: 'task-1',
      priority: 'high',
      clientId: 'client-1',
      clientName: 'Acme Corporation',
      description: 'Conciliar enero - movimientos mayores a $20k',
      dueDate: '2025-01-20',
      status: 'pending',
      targetTab: 'conciliacion',
    },
    {
      id: 'task-2',
      priority: 'medium',
      clientId: 'client-2',
      clientName: 'Tech Solutions SA',
      description: 'Subir estados de cuenta Banamex',
      dueDate: '2025-01-18',
      status: 'in-progress',
      targetTab: 'bancos',
    },
    {
      id: 'task-3',
      priority: 'low',
      clientId: 'client-1',
      clientName: 'Acme Corporation',
      description: 'Generar Relacion de Facturas',
      dueDate: '2025-01-25',
      status: 'pending',
      targetTab: 'reportes',
    },
  ],
  clients: [
    {
      id: 'client-1',
      entityName: 'Acme Corporation',
      rfc: 'ACM123456789',
      group: 'Medical',
      status: 'behind',
      lastAction: '2025-01-10',
      balance: 125000.25,
      receivables: [
        {
          id: 'inv-1',
          date: '2025-01-05',
          folio: 'F-2025-001',
          uuid: 'UUID-ACME-001',
          customer: 'Acme Corporation',
          amount: 52000,
          status: 'pending',
          ppdPue: 'PPD',
          lineItems: [
            {
              id: 'line-1',
              description: 'Servicios contables enero',
              quantity: 1,
              unitPrice: 40000,
              total: 40000,
            },
            {
              id: 'line-2',
              description: 'IVA 16%',
              quantity: 1,
              unitPrice: 12000,
              total: 12000,
              taxRate: 0.16,
            },
          ],
          relatedDocuments: [
            {
              id: 'doc-xml-1',
              type: 'xml',
              label: 'CFDI XML',
              url: '/docs/acme-001.xml',
              createdAt: '2025-01-05T10:12:00Z',
              status: 'linked',
            },
            {
              id: 'doc-proof-1',
              type: 'proof',
              label: 'Transferencia Banorte',
              createdAt: '2025-01-09T15:22:00Z',
              status: 'pending',
            },
          ],
          linkedPayment: {
            uuid: 'PAY-ACME-001',
            date: '2025-01-09',
            amount: 25000,
            source: 'bank',
          },
          documentType: 'receivable',
        },
        {
          id: 'inv-2',
          date: '2024-12-20',
          folio: 'F-2024-119',
          uuid: 'UUID-ACME-002',
          customer: 'Acme Corporation',
          amount: 18000,
          status: 'paid',
          ppdPue: 'PUE',
          lineItems: [
            {
              id: 'line-3',
              description: 'Implementacion portal SAT',
              quantity: 1,
              unitPrice: 18000,
              total: 18000,
            },
          ],
          relatedDocuments: [
            {
              id: 'doc-xml-2',
              type: 'xml',
              label: 'CFDI XML',
              url: '/docs/acme-119.xml',
              createdAt: '2024-12-20T09:10:00Z',
              status: 'linked',
            },
            {
              id: 'doc-payment-1',
              type: 'payment',
              label: 'Pago SPEI 9021',
              createdAt: '2024-12-23T16:05:00Z',
              status: 'linked',
            },
          ],
          linkedPayment: {
            uuid: 'SPEI-9021',
            date: '2024-12-23',
            amount: 18000,
            source: 'bank',
          },
          documentType: 'receivable',
        },
      ],
      payables: [
        {
          id: 'exp-1',
          date: '2025-01-04',
          supplier: 'Proveedores MX',
          concept: 'Servicios de limpieza',
          amount: 6500,
          iva: 1040,
          isr: 0,
          status: 'pending',
          lineItems: [
            {
              id: 'exp-line-1',
              description: 'Limpieza mensual oficinas',
              quantity: 1,
              unitPrice: 6500,
              total: 6500,
            },
          ],
          relatedDocuments: [
            {
              id: 'exp-doc-1',
              type: 'xml',
              label: 'XML Proveedores MX',
              createdAt: '2025-01-04T12:00:00Z',
              status: 'linked',
            },
          ],
          documentType: 'payable',
        },
      ],
      bankAccounts: [
        {
          id: 'acct-1',
          name: 'Banorte MXN',
          number: '****4321',
          currency: 'MXN',
          currentBalance: 125000.25,
        },
      ],
      bankTransactions: [
        {
          id: 'txn-1',
          accountId: 'acct-1',
          date: '2025-01-09',
          description: 'Deposito transferencia SPEI',
          reference: 'SPEI-001',
          deposit: 25000,
          balance: 125000.25,
          currency: 'MXN',
          status: 'staged',
        },
        {
          id: 'txn-2',
          accountId: 'acct-1',
          date: '2025-01-08',
          description: 'Pago proveedor Proveedores MX',
          reference: 'TRX-9482',
          withdrawal: 6500,
          balance: 100000.25,
          currency: 'MXN',
          status: 'staged',
        },
        {
          id: 'txn-3',
          accountId: 'acct-1',
          date: '2025-01-06',
          description: 'Deposito servicios contables',
          reference: 'SPEI-0007',
          deposit: 42000,
          balance: 106500.25,
          currency: 'MXN',
          status: 'sent',
        },
      ],
      reconciliation: {
        bankLines: [
          {
            id: 'bankline-1',
            amount: 25000,
            date: '2025-01-09',
            description: 'SPEI DentaLife',
            reference: 'SPEI-001',
            currency: 'MXN',
            linkedInvoices: [],
          },
          {
            id: 'bankline-2',
            amount: 42000,
            date: '2025-01-06',
            description: 'Servicios mensuales',
            reference: 'SPEI-0007',
            currency: 'MXN',
            linkedInvoices: ['inv-1'],
          },
        ],
        invoiceCandidates: [
          {
            id: 'cand-1',
            bankLineId: 'bankline-1',
            uuid: 'UUID-ACME-001',
            amount: 52000,
            confidence: 0.82,
            rationale: 'Coincidencia por RFC, apliquen parcialidad',
          },
          {
            id: 'cand-2',
            bankLineId: 'bankline-1',
            uuid: 'UUID-ACME-002',
            amount: 18000,
            confidence: 0.61,
            rationale: 'Coincidencia por importe similar',
          },
        ],
        history: [
          {
            id: 'hist-1',
            bankLineId: 'bankline-2',
            invoices: ['inv-1'],
            amount: 42000,
            status: 'completed',
            settledAt: '2025-01-07',
            reviewer: 'Laura Flores',
            notes: 'Se aplico a pago parcial',
          },
        ],
        aiSuggestions: [
          {
            id: 'ai-1',
            bankLineId: 'bankline-1',
            invoiceUuid: 'UUID-ACME-001',
            confidence: 0.93,
            reason: 'Importe cercano y mismo RFC',
            amountDelta: -27000,
          },
        ],
        manualProofs: [
          {
            id: 'proof-1',
            bankLineId: 'bankline-1',
            fileName: 'transferencia_banorte.pdf',
            uploadedAt: '2025-01-10T15:00:00Z',
            status: 'pending',
          },
        ],
      },
      reportPresets: [
        {
          id: 'preset-1',
          label: 'Estado mensual',
          reportType: 'estado-cuenta',
          format: 'pdf',
          dateRange: {
            start: '2025-01-01',
            end: '2025-01-31',
          },
        },
        {
          id: 'preset-2',
          label: 'Relacion facturas trimestral',
          reportType: 'relacion-facturas',
          format: 'excel',
          dateRange: {
            start: '2024-10-01',
            end: '2024-12-31',
          },
        },
      ],
    },
    {
      id: 'client-2',
      entityName: 'Tech Solutions SA',
      rfc: 'TEC987654321',
      group: 'Technology',
      status: 'up-to-date',
      lastAction: '2025-01-09',
      balance: 82000,
      receivables: [
        {
          id: 'inv-3',
          date: '2025-01-08',
          folio: 'TS-9001',
          uuid: 'UUID-TECH-001',
          customer: 'Tech Solutions',
          amount: 32000,
          status: 'pending',
          ppdPue: 'PPD',
          lineItems: [
            {
              id: 'ts-line-1',
              description: 'Implementacion ERP',
              quantity: 1,
              unitPrice: 32000,
              total: 32000,
            },
          ],
          relatedDocuments: [
            {
              id: 'ts-doc-1',
              type: 'xml',
              label: 'CFDI XML',
              createdAt: '2025-01-08T17:00:00Z',
              status: 'linked',
            },
          ],
          documentType: 'receivable',
        },
      ],
      payables: [
        {
          id: 'exp-2',
          date: '2025-01-06',
          supplier: 'AWS Mexico',
          concept: 'Servicios nube diciembre',
          amount: 12000,
          iva: 0,
          isr: 0,
          status: 'paid',
          lineItems: [
            {
              id: 'exp2-line-1',
              description: 'Uso mensual cloud',
              quantity: 1,
              unitPrice: 12000,
              total: 12000,
            },
          ],
          relatedDocuments: [
            {
              id: 'exp2-doc-1',
              type: 'pdf',
              label: 'Factura AWS PDF',
              createdAt: '2025-01-06T12:00:00Z',
              status: 'linked',
            },
          ],
          documentType: 'payable',
        },
      ],
      bankAccounts: [
        {
          id: 'acct-2',
          name: 'Banamex MXN',
          number: '****8899',
          currency: 'MXN',
          currentBalance: 82000,
        },
      ],
      bankTransactions: [
        {
          id: 'txn-4',
          accountId: 'acct-2',
          date: '2025-01-11',
          description: 'Deposito cliente Innovate',
          reference: 'SPEI-2201',
          deposit: 28000,
          balance: 82000,
          currency: 'MXN',
          status: 'staged',
        },
        {
          id: 'txn-5',
          accountId: 'acct-2',
          date: '2025-01-09',
          description: 'Pago AWS',
          reference: 'SPEI-2198',
          withdrawal: 12000,
          balance: 54000,
          currency: 'MXN',
          status: 'sent',
        },
      ],
      reconciliation: {
        bankLines: [
          {
            id: 'bankline-3',
            amount: 28000,
            date: '2025-01-11',
            description: 'Innovate Labs',
            reference: 'SPEI-2201',
            currency: 'MXN',
            linkedInvoices: [],
          },
        ],
        invoiceCandidates: [
          {
            id: 'cand-3',
            bankLineId: 'bankline-3',
            uuid: 'UUID-TECH-001',
            amount: 32000,
            confidence: 0.78,
            rationale: 'Importe cercano; faltan $4k (ajuste esperado)',
          },
        ],
        history: [],
        aiSuggestions: [
          {
            id: 'ai-2',
            bankLineId: 'bankline-3',
            invoiceUuid: 'UUID-TECH-001',
            confidence: 0.88,
            reason: 'Coincidencia por folio y cliente',
            amountDelta: -4000,
          },
        ],
        manualProofs: [],
      },
      reportPresets: [
        {
          id: 'preset-3',
          label: 'Conciliacion semanal',
          reportType: 'conciliacion-summary',
          format: 'excel',
          dateRange: {
            start: '2025-01-01',
            end: '2025-01-12',
          },
        },
      ],
    },
  ],
  notifications: [
    {
      id: 'notif-1',
      title: 'Documento rechazado',
      message: 'SAT rechazo CFDI 1234 por error de timbrado',
      time: '2025-01-12T15:00:00Z',
      unread: true,
      type: 'document',
      clientId: 'client-1',
      tab: 'sat-receivables',
    },
    {
      id: 'notif-2',
      title: 'Deadlines proximos',
      message: 'Conciliacion enero vence en 3 dias para Tech Solutions',
      time: '2025-01-11T08:00:00Z',
      unread: true,
      type: 'deadline',
      clientId: 'client-2',
      tab: 'conciliacion',
    },
    {
      id: 'notif-3',
      title: 'Reporte listo',
      message: 'Estado de Cuenta diciembre para Acme listo para descargar',
      time: '2025-01-09T12:15:00Z',
      unread: false,
      type: 'report',
      clientId: 'client-1',
      tab: 'reportes',
    },
  ],
  reports: [
    {
      id: 'report-1',
      clientId: 'client-1',
      type: 'estado-cuenta',
      format: 'pdf',
      range: {
        start: '2024-12-01',
        end: '2024-12-31',
      },
      status: 'ready',
      requestedAt: '2024-12-31T18:00:00Z',
      completedAt: '2025-01-01T02:00:00Z',
      url: '/downloads/acme-estado-cuenta-dic.pdf',
    },
  ],
};

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

function findClient(clientId: string): WorkspaceClient | undefined {
  return workspaceState.clients.find((client) => client.id === clientId);
}

export function getWorkspaceSnapshot(): WorkspaceSnapshot {
  return clone(workspaceState);
}

export function getClientWorkspace(clientId: string): WorkspaceClient | undefined {
  const client = findClient(clientId);
  return client ? clone(client) : undefined;
}

export function updateBankTransactions(
  clientId: string,
  transactions: BankTransaction[]
): BankTransaction[] {
  const client = findClient(clientId);
  if (!client) {
    throw new Error('Client not found');
  }
  client.bankTransactions = clone(transactions);
  return client.bankTransactions;
}

export function addManualProof(
  clientId: string,
  proof: Omit<ManualProof, 'id' | 'uploadedAt' | 'status'> & {
    id?: string;
    uploadedAt?: string;
    status?: ManualProof['status'];
  }
): ManualProof {
  const client = findClient(clientId);
  if (!client) {
    throw new Error('Client not found');
  }
  const manualProof: ManualProof = {
    id: proof.id || `proof-${Date.now()}`,
    uploadedAt: proof.uploadedAt || new Date().toISOString(),
    status: proof.status || 'pending',
    bankLineId: proof.bankLineId,
    fileName: proof.fileName,
  };
  client.reconciliation.manualProofs.unshift(manualProof);
  return manualProof;
}

export function enqueueReportJob(
  clientId: string,
  type: ReportType,
  format: ReportFormat,
  range: { start: string; end: string }
): ReportJob {
  const job: ReportJob = {
    id: `report-${Date.now()}`,
    clientId,
    type,
    format,
    range,
    status: 'queued',
    requestedAt: new Date().toISOString(),
  };
  workspaceState.reports.unshift(job);
  return job;
}

export function updateReportJob(
  jobId: string,
  updates: Partial<ReportJob>
): ReportJob | undefined {
  const job = workspaceState.reports.find((item) => item.id === jobId);
  if (!job) return undefined;

  Object.assign(job, updates);
  return job;
}

export function addNotification(
  notification: Omit<WorkspaceNotification, 'id' | 'time' | 'unread'> & {
    id?: string;
    time?: string;
    unread?: boolean;
  }
): WorkspaceNotification {
  const notif: WorkspaceNotification = {
    id: notification.id || `notif-${Date.now()}`,
    time: notification.time || new Date().toISOString(),
    unread: notification.unread ?? true,
    ...notification,
  };
  workspaceState.notifications.unshift(notif);
  return notif;
}

export function markNotificationRead(id: string): WorkspaceNotification | undefined {
  const notif = workspaceState.notifications.find((item) => item.id === id);
  if (!notif) return undefined;
  notif.unread = false;
  return notif;
}

export function markAllNotificationsRead(): void {
  workspaceState.notifications.forEach((notif) => {
    notif.unread = false;
  });
}

export function completeAISuggestion(
  clientId: string,
  suggestionId: string
): AISuggestion | undefined {
  const client = findClient(clientId);
  if (!client) return undefined;
  const suggestion = client.reconciliation.aiSuggestions.find(
    (item) => item.id === suggestionId
  );
  if (suggestion) {
    suggestion.confidence = Math.min(1, suggestion.confidence + 0.05);
  }
  return suggestion;
}

export function attachInvoicesToBankLine(
  clientId: string,
  bankLineId: string,
  invoiceUuids: string[]
): void {
  const client = findClient(clientId);
  if (!client) return;
  const bankLine = client.reconciliation.bankLines.find((line) => line.id === bankLineId);
  if (!bankLine) return;
  bankLine.linkedInvoices = Array.from(
    new Set([...(bankLine.linkedInvoices || []), ...invoiceUuids])
  );
  const historyEntryId = `hist-${Date.now()}`;
  client.reconciliation.history.unshift({
    id: historyEntryId,
    bankLineId,
    invoices: invoiceUuids,
    amount: bankLine.amount,
    status: 'completed',
    settledAt: new Date().toISOString(),
    reviewer: 'Auto Match',
  });
}
