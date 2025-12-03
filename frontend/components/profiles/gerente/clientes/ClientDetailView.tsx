'use client';

import { useState } from 'react';
import styles from './ClientDetailView.module.css';

interface Client {
  id: string;
  entityName: string;
  rfc: string;
  currentBalance: number;
  taxStatus: 'filed' | 'pending' | 'overdue';
  lastActivity: string;
  assignedAccountant: {
    id: string;
    name: string;
    avatar: string;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  monthlyRevenue: number;
  sector: string;
}

interface LedgerEntry {
  id: string;
  date: string;
  description: string;
  debit: number;
  credit: number;
  balance: number;
  status: string;
  confidenceScore: number;
}

interface Document {
  id: string;
  type: string;
  folio: string;
  uuid: string;
  date: string;
  amount: number;
  status: string;
}

interface ChatEntry {
  id: string;
  timestamp: string;
  type: string;
  message: string;
  response: string;
}

interface ClientDetails {
  ledger: LedgerEntry[];
  documents: Document[];
  chatLog: ChatEntry[];
}

interface ClientDetailViewProps {
  client: Client;
  details: ClientDetails;
  onBack: () => void;
}

type DetailTab = 'ledger' | 'documents' | 'chat';

export default function ClientDetailView({ client, details, onBack }: ClientDetailViewProps) {
  const [activeTab, setActiveTab] = useState<DetailTab>('ledger');

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('es-MX', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const tabs = [
    { id: 'ledger' as DetailTab, label: 'Libro Mayor', count: details.ledger.length },
    { id: 'documents' as DetailTab, label: 'Documentos', count: details.documents.length },
    { id: 'chat' as DetailTab, label: 'Historial Chat', count: details.chatLog.length },
  ];

  return (
    <div className={styles.clientDetailView}>
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Volver
        </button>

        <div className={styles.clientHeader}>
          <div className={styles.clientInfo}>
            <h2 className={styles.clientName}>{client.entityName}</h2>
            <span className={styles.clientRfc}>{client.rfc}</span>
          </div>
          <div className={styles.clientMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Ingresos Mensuales</span>
              <span className={styles.metaValue}>{formatCurrency(client.monthlyRevenue)}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Contacto</span>
              <span className={styles.metaValue}>{client.contact.name}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Email</span>
              <span className={styles.metaValue}>{client.contact.email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            <span className={styles.tabCount}>{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {/* Ledger Tab */}
        {activeTab === 'ledger' && (
          <div className={styles.ledgerTab}>
            <table className={styles.ledgerTable}>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Descripción</th>
                  <th>Débito</th>
                  <th>Crédito</th>
                  <th>Balance</th>
                  <th>Confianza</th>
                </tr>
              </thead>
              <tbody>
                {details.ledger.map((entry) => (
                  <tr key={entry.id}>
                    <td>{formatDate(entry.date)}</td>
                    <td className={styles.description}>{entry.description}</td>
                    <td className={styles.debit}>
                      {entry.debit > 0 ? formatCurrency(entry.debit) : '-'}
                    </td>
                    <td className={styles.credit}>
                      {entry.credit > 0 ? formatCurrency(entry.credit) : '-'}
                    </td>
                    <td className={`${styles.balance} ${entry.balance >= 0 ? styles.positive : styles.negative}`}>
                      {formatCurrency(entry.balance)}
                    </td>
                    <td>
                      <span className={`${styles.confidenceBadge} ${entry.confidenceScore >= 0.9 ? styles.high : entry.confidenceScore >= 0.7 ? styles.medium : styles.low}`}>
                        {Math.round(entry.confidenceScore * 100)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <div className={styles.documentsTab}>
            <div className={styles.documentGrid}>
              {details.documents.map((doc) => (
                <div key={doc.id} className={styles.documentCard}>
                  <div className={styles.docIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div className={styles.docInfo}>
                    <span className={styles.docType}>{doc.type}</span>
                    <span className={styles.docFolio}>{doc.folio}</span>
                    <span className={styles.docUuid}>{doc.uuid.substring(0, 12)}...</span>
                  </div>
                  <div className={styles.docMeta}>
                    <span className={styles.docDate}>{formatDate(doc.date)}</span>
                    <span className={styles.docAmount}>{formatCurrency(doc.amount)}</span>
                  </div>
                  <span className={`${styles.docStatus} ${styles[doc.status]}`}>
                    {doc.status === 'valid' ? 'Válido' : doc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Chat Log Tab */}
        {activeTab === 'chat' && (
          <div className={styles.chatTab}>
            {details.chatLog.map((entry) => (
              <div key={entry.id} className={styles.chatEntry}>
                <div className={styles.chatQuestion}>
                  <div className={styles.chatBubble}>
                    <span className={styles.chatIcon}>👤</span>
                    <div className={styles.chatContent}>
                      <p>{entry.message}</p>
                      <span className={styles.chatTime}>{formatDateTime(entry.timestamp)}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.chatAnswer}>
                  <div className={styles.chatBubble}>
                    <span className={styles.chatIcon}>🤖</span>
                    <div className={styles.chatContent}>
                      <p>{entry.response}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {details.chatLog.length === 0 && (
              <div className={styles.emptyChat}>
                <p>No hay historial de conversaciones</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


