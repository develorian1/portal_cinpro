export type TaskPriority = 'high' | 'medium' | 'low';
export type TaskStatus = 'pending' | 'in-progress' | 'blocked';
export type ClientStatus = 'up-to-date' | 'behind';
export type InvoiceStatus = 'paid' | 'pending' | 'cancelled';
export type PaymentTerm = 'PPD' | 'PUE';

export interface WorkspaceTask {
  id: string;
  priority: TaskPriority;
  clientId: string;
  clientName: string;
  description: string;
  dueDate: string;
  status: TaskStatus;
  targetTab: ClientTab;
}

export interface DashboardCounts {
  pendingReconciliations: number;
  missingStatements: number;
  rejectedItems: number;
}

export type ClientTab =
  | 'sat-receivables'
  | 'sat-payables'
  | 'bancos'
  | 'conciliacion'
  | 'reportes';

export interface InvoiceLineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
  taxRate?: number;
}

export type RelatedDocumentType = 'xml' | 'pdf' | 'payment' | 'proof' | 'support';

export interface RelatedDocument {
  id: string;
  type: RelatedDocumentType;
  label: string;
  url?: string;
  createdAt: string;
  status: 'linked' | 'pending' | 'error';
}

export interface LinkedPaymentInfo {
  uuid: string;
  date: string;
  amount: number;
  source: 'bank' | 'manual';
}

export interface WorkspaceInvoice {
  id: string;
  date: string;
  folio?: string;
  uuid?: string;
  customer?: string;
  supplier?: string;
  concept?: string;
  amount: number;
  iva?: number;
  isr?: number;
  status: InvoiceStatus;
  ppdPue?: PaymentTerm;
  lineItems: InvoiceLineItem[];
  relatedDocuments: RelatedDocument[];
  linkedPayment?: LinkedPaymentInfo;
  documentType: 'receivable' | 'payable';
}

export interface BankAccount {
  id: string;
  name: string;
  number: string;
  currency: string;
  currentBalance: number;
}

export type TransactionStatus = 'staged' | 'sent' | 'flagged';

export interface BankTransaction {
  id: string;
  accountId: string;
  date: string;
  description: string;
  reference: string;
  deposit?: number;
  withdrawal?: number;
  balance: number;
  currency: string;
  status: TransactionStatus;
  flaggedReason?: string;
}

export interface WorkspaceClient {
  id: string;
  entityName: string;
  rfc: string;
  group: string;
  status: ClientStatus;
  lastAction: string;
  balance: number;
  receivables: WorkspaceInvoice[];
  payables: WorkspaceInvoice[];
  bankAccounts: BankAccount[];
  bankTransactions: BankTransaction[];
  reconciliation: ReconciliationState;
  reportPresets: ReportPreset[];
}

export interface ReconciliationBankLine {
  id: string;
  amount: number;
  date: string;
  description: string;
  reference: string;
  currency: string;
  linkedInvoices: string[];
  flagged?: boolean;
}

export interface ReconciliationInvoiceCandidate {
  id: string;
  bankLineId: string;
  uuid: string;
  amount: number;
  confidence: number;
  rationale: string;
}

export interface ReconciliationHistoryRecord {
  id: string;
  bankLineId: string;
  invoices: string[];
  amount: number;
  status: 'completed' | 'flagged' | 'pending';
  settledAt: string;
  reviewer: string;
  notes?: string;
}

export interface AISuggestion {
  id: string;
  bankLineId: string;
  invoiceUuid: string;
  confidence: number;
  reason: string;
  amountDelta: number;
}

export interface ManualProof {
  id: string;
  bankLineId: string;
  fileName: string;
  uploadedAt: string;
  status: 'pending' | 'verified';
}

export interface ReconciliationState {
  bankLines: ReconciliationBankLine[];
  invoiceCandidates: ReconciliationInvoiceCandidate[];
  history: ReconciliationHistoryRecord[];
  aiSuggestions: AISuggestion[];
  manualProofs: ManualProof[];
}

export interface ReportPreset {
  id: string;
  label: string;
  reportType: ReportType;
  format: ReportFormat;
  dateRange: {
    start: string;
    end: string;
  };
}

export type ReportType =
  | 'estado-cuenta'
  | 'relacion-facturas'
  | 'conciliacion-summary';

export type ReportFormat = 'pdf' | 'excel';

export interface ReportJob {
  id: string;
  clientId: string;
  type: ReportType;
  format: ReportFormat;
  range: { start: string; end: string };
  status: 'queued' | 'processing' | 'ready' | 'failed';
  requestedAt: string;
  completedAt?: string;
  url?: string;
  error?: string;
}

export interface WorkspaceNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  unread: boolean;
  type: 'deadline' | 'document' | 'review' | 'report';
  clientId?: string;
  tab?: ClientTab;
}

export interface WorkspaceSnapshot {
  counts: DashboardCounts;
  tasks: WorkspaceTask[];
  clients: WorkspaceClient[];
  notifications: WorkspaceNotification[];
  reports: ReportJob[];
}
