'use client';

import { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import styles from './Comunicacion.module.css';

interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'xlsx' | 'docx' | 'txt' | 'csv' | 'xml';
  size: string;
  url?: string;
}

interface Message {
  id: string;
  type: 'sent' | 'received' | 'system' | 'request';
  content: string;
  timestamp: string;
  sender?: string;
  actions?: { label: string; action: string }[];
  document?: Document;
}

interface ChatHistory {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
  unread?: number;
}

export default function Comunicacion() {
  const { setActiveItem } = useNavigation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState('');
  const [isDocumentViewerOpen, setIsDocumentViewerOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDocument, setModalDocument] = useState<Document | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
  const [activeChatId, setActiveChatId] = useState<string>('1');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveItem('client-comunicacion');
  }, [setActiveItem]);

  // Helper function to check if document is A4 format (PDF, DOCX)
  const isA4Format = (type: Document['type']): boolean => {
    return type === 'pdf' || type === 'docx';
  };

  // Helper function to get document type color class
  const getDocumentTypeClass = (type: Document['type']): string => {
    switch (type) {
      case 'pdf':
        return styles.documentTypePdf;
      case 'xlsx':
        return styles.documentTypeXlsx;
      case 'docx':
        return styles.documentTypeDocx;
      case 'txt':
        return styles.documentTypeTxt;
      case 'csv':
        return styles.documentTypeCsv;
      case 'xml':
        return styles.documentTypeXml;
      default:
        return '';
    }
  };

  // Handler for downloading documents
  const handleDownload = (doc: Document, e: React.MouseEvent) => {
    e.stopPropagation();
    // TODO: Implement actual download logic with API
    console.log('Downloading:', doc.name);
    // For now, create a temporary download link
    if (doc.url) {
      const link = document.createElement('a');
      link.href = doc.url;
      link.download = doc.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Fallback: trigger download event (can be connected to API later)
      alert(`Descargando: ${doc.name}`);
    }
  };

  useEffect(() => {
    // Mock chat history
    setChatHistory([
      {
        id: '1',
        title: 'Contador Principal',
        lastMessage: 'Hola! Te envío el informe financiero del mes',
        timestamp: '2024-10-15T10:00:00',
      },
      {
        id: '2',
        title: 'Soporte Técnico',
        lastMessage: 'Hemos resuelto tu consulta sobre...',
        timestamp: '2024-10-14T15:30:00',
        unread: 2,
      },
      {
        id: '3',
        title: 'Asesor Fiscal',
        lastMessage: 'La declaración está lista para revisión',
        timestamp: '2024-10-13T09:15:00',
      },
      {
        id: '4',
        title: 'Equipo de Cobranza',
        lastMessage: 'Recordatorio de pago pendiente',
        timestamp: '2024-10-12T14:20:00',
      },
    ]);
  }, []);

  useEffect(() => {
    // Mock initial messages with sample documents
    setMessages([
      {
        id: '1',
        type: 'received',
        content: 'Hola! Te envío el informe financiero del mes',
        timestamp: '2024-10-15T10:00:00',
        sender: 'Contador',
        document: {
          id: 'doc1',
          name: 'Informe_Financiero_Octubre_2024.pdf',
          type: 'pdf',
          size: '2.4 MB',
        },
      },
      {
        id: '2',
        type: 'received',
        content: 'Aquí está la hoja de cálculo con los detalles',
        timestamp: '2024-10-15T10:02:00',
        sender: 'Contador',
        document: {
          id: 'doc2',
          name: 'Balance_General_Q4_2024.xlsx',
          type: 'xlsx',
          size: '856 KB',
        },
      },
      {
        id: '3',
        type: 'received',
        content: 'Documento de análisis contable',
        timestamp: '2024-10-15T10:03:00',
        sender: 'Contador',
        document: {
          id: 'doc3',
          name: 'Analisis_Contable_2024.docx',
          type: 'docx',
          size: '1.2 MB',
        },
      },
      {
        id: '4',
        type: 'received',
        content: 'Datos en formato texto',
        timestamp: '2024-10-15T10:04:00',
        sender: 'Contador',
        document: {
          id: 'doc4',
          name: 'Transacciones_Diarias.txt',
          type: 'txt',
          size: '124 KB',
        },
      },
      {
        id: '5',
        type: 'received',
        content: 'Exportación CSV de movimientos',
        timestamp: '2024-10-15T10:05:00',
        sender: 'Contador',
        document: {
          id: 'doc5',
          name: 'Movimientos_Bancarios.csv',
          type: 'csv',
          size: '342 KB',
        },
      },
      {
        id: '6',
        type: 'received',
        content: 'Facturación electrónica XML',
        timestamp: '2024-10-15T10:06:00',
        sender: 'Contador',
        document: {
          id: 'doc6',
          name: 'Factura_CFDI_001234.xml',
          type: 'xml',
          size: '45 KB',
        },
      },
      {
        id: '7',
        type: 'request',
        content: 'Por favor, revisa estos documentos y confirma si todo está correcto.',
        timestamp: '2024-10-15T10:07:00',
        sender: 'Contador',
        actions: [
          { label: 'Todo Correcto', action: 'approved' },
          { label: 'Necesito Revisar', action: 'review' },
        ],
      },
      {
        id: '8',
        type: 'system',
        content: 'Declaración Fiscal Presentada',
        timestamp: '2024-10-15T09:00:00',
      },
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('es-MX', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'sent',
      content: messageInput,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessageInput('');

    // Simulate response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        type: 'received',
        content: 'Thank you for your message. I will get back to you soon.',
        timestamp: new Date().toISOString(),
        sender: 'Accountant',
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  const handleRequestAction = (action: string, messageId: string) => {
    // Handle request action
    console.log('Action:', action, 'for message:', messageId);
    const response: Message = {
      id: Date.now().toString(),
      type: 'sent',
      content: `Selected: ${action}`,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, response]);
  };

  const formatHistoryTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return new Intl.DateTimeFormat('es-MX', {
        hour: '2-digit',
        minute: '2-digit',
      }).format(date);
    } else if (diffDays === 1) {
      return 'Ayer';
    } else if (diffDays < 7) {
      return new Intl.DateTimeFormat('es-MX', {
        weekday: 'short',
      }).format(date);
    } else {
      return new Intl.DateTimeFormat('es-MX', {
        day: 'numeric',
        month: 'short',
      }).format(date);
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.chatHistorySidebar} ${isDocumentViewerOpen ? styles.chatHistorySidebarCollapsed : ''}`}>
        <div className={styles.chatHistoryHeader}>
          <h3 className={styles.chatHistoryTitle}>Conversaciones</h3>
        </div>
        <div className={styles.chatHistoryList}>
          {chatHistory.map((chat) => (
            <button
              key={chat.id}
              className={`${styles.chatHistoryItem} ${activeChatId === chat.id ? styles.chatHistoryItemActive : ''}`}
              onClick={() => setActiveChatId(chat.id)}
            >
              <div className={styles.chatHistoryItemContent}>
                <div className={styles.chatHistoryItemTitle}>{chat.title}</div>
                <div className={styles.chatHistoryItemMessage}>{chat.lastMessage}</div>
              </div>
              <div className={styles.chatHistoryItemMeta}>
                <span className={styles.chatHistoryItemTime}>{formatHistoryTime(chat.timestamp)}</span>
                {chat.unread && chat.unread > 0 && (
                  <span className={styles.chatHistoryItemBadge}>{chat.unread}</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className={`${styles.chatContainer} ${!isDocumentViewerOpen ? styles.chatContainerExpanded : ''}`}>
        <div className={styles.chatHeader}>
          <h2 className={styles.chatHeaderTitle}>Chat with Your Accountant</h2>
        </div>

        <div className={styles.chatMessages}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${styles.messageWrapper} ${
                message.type === 'sent' ? styles.sent : message.type === 'received' ? styles.received : ''
              }`}
            >
              {message.type === 'system' ? (
                <div className={styles.systemMessage}>{message.content}</div>
              ) : message.type === 'request' ? (
                <div className={styles.requestBubble}>
                  <div className={styles.requestText}>{message.content}</div>
                  {message.actions && (
                    <div className={styles.requestActions}>
                      {message.actions.map((action, index) => (
                        <button
                          key={index}
                          className={styles.requestBtn}
                          onClick={() => handleRequestAction(action.action, message.id)}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className={`${styles.messageBubble} ${
                    message.type === 'sent' ? styles.sent : styles.received
                  }`}
                >
                  {message.type === 'received' && message.sender && (
                    <div className={styles.messageSender}>{message.sender}</div>
                  )}
                  {message.content && (
                    <div className={styles.messageContent}>{message.content}</div>
                  )}
                  {message.document && (
                    <div
                      className={`${styles.documentAttachment} ${!isA4Format(message.document.type) ? styles.documentAttachmentModal : ''}`}
                      onClick={() => {
                        if (isA4Format(message.document!.type)) {
                          setSelectedDocument(message.document!);
                          setIsDocumentViewerOpen(true);
                        }
                      }}
                    >
                      <div
                        className={`${styles.documentIcon} ${getDocumentTypeClass(message.document.type)}`}
                      >
                        {message.document.type === 'pdf' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                          </svg>
                        )}
                        {message.document.type === 'xlsx' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <line x1="3" y1="9" x2="21" y2="9" />
                            <line x1="9" y1="3" x2="9" y2="21" />
                          </svg>
                        )}
                        {message.document.type === 'docx' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                          </svg>
                        )}
                        {message.document.type === 'txt' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                          </svg>
                        )}
                        {message.document.type === 'csv' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <line x1="3" y1="9" x2="21" y2="9" />
                            <line x1="9" y1="3" x2="9" y2="21" />
                            <line x1="15" y1="3" x2="15" y2="21" />
                          </svg>
                        )}
                        {message.document.type === 'xml' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 7V4c0-1.1.9-2 2-2h2" />
                            <path d="M20 7V4c0-1.1-.9-2-2-2h-2" />
                            <path d="M4 17v3c0 1.1.9 2 2 2h2" />
                            <path d="M20 17v3c0 1.1-.9-2-2-2h-2" />
                            <rect x="8" y="5" width="8" height="14" rx="1" />
                            <line x1="12" y1="9" x2="12" y2="15" />
                          </svg>
                        )}
                      </div>
                      <div className={styles.documentInfo}>
                        <span className={styles.documentName}>{message.document.name}</span>
                        <span className={styles.documentSize}>{message.document.size}</span>
                      </div>
                      <div className={styles.documentActions}>
                        <button
                          className={styles.downloadButton}
                          onClick={(e) => handleDownload(message.document!, e)}
                          title="Descargar"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                        </button>
                        {!isA4Format(message.document.type) ? (
                          <button
                            className={styles.viewModalButton}
                            onClick={(e) => {
                              e.stopPropagation();
                              setModalDocument(message.document!);
                              setIsModalOpen(true);
                            }}
                            title="Ver en modal"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          </button>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.documentArrow}>
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        )}
                      </div>
                    </div>
                  )}
                  <div className={styles.messageTime}>{formatTime(message.timestamp)}</div>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className={styles.chatInput}>
          <input
            type="text"
            className={styles.messageInput}
            placeholder="Escribe un mensaje..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button
            className={styles.sendButton}
            onClick={handleSendMessage}
            disabled={!messageInput.trim()}
          >
            ENVIAR
          </button>
        </div>
      </div>

      {selectedDocument && (
        <div className={`${styles.documentViewer} ${!isDocumentViewerOpen ? styles.documentViewerClosed : ''}`}>
          <div className={styles.documentViewerHeader}>
            <h3 className={styles.documentViewerTitle}>{selectedDocument.name}</h3>
            <div className={styles.documentViewerActions}>
              <button className={styles.documentActionButton} title="Descargar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </button>
              <button className={styles.documentActionButton} title="Imprimir">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
              </button>
              <button
                className={styles.documentActionButton}
                title="Cerrar"
                onClick={() => {
                  setIsDocumentViewerOpen(false);
                  setSelectedDocument(null);
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.documentViewerContent}>
            <div className={styles.documentPreview}>
              <div className={styles.documentPage}>
                {selectedDocument.type === 'pdf' && (
                  <>
                    <div className={styles.documentHeader}>
                      <h4>INFORME FINANCIERO - OCTUBRE 2024</h4>
                      <p className={styles.documentDate}>Fecha: {new Date().toLocaleDateString('es-MX')}</p>
                    </div>
                    <div className={styles.documentBody}>
                      <p className={styles.documentParagraph}>
                        <strong>RESUMEN EJECUTIVO</strong>
                      </p>
                      <p className={styles.documentParagraph}>
                        El presente informe presenta el estado financiero de la empresa para el mes de octubre de 2024.
                        Se incluyen análisis de ingresos, gastos, flujo de efectivo y proyecciones.
                      </p>
                      <p className={styles.documentParagraph}>
                        <strong>INGRESOS TOTALES:</strong> $1,450,000.00 MXN
                      </p>
                      <p className={styles.documentParagraph}>
                        <strong>GASTOS OPERATIVOS:</strong> $920,000.00 MXN
                      </p>
                      <p className={styles.documentParagraph}>
                        <strong>UTILIDAD NETA:</strong> $530,000.00 MXN
                      </p>
                    </div>
                  </>
                )}
                {selectedDocument.type === 'docx' && (
                  <>
                    <div className={styles.documentHeader}>
                      <h4>ANÁLISIS CONTABLE 2024</h4>
                      <p className={styles.documentDate}>Fecha: {new Date().toLocaleDateString('es-MX')}</p>
                    </div>
                    <div className={styles.documentBody}>
                      <p className={styles.documentParagraph}>
                        <strong>1. INTRODUCCIÓN</strong>
                      </p>
                      <p className={styles.documentParagraph}>
                        Este documento presenta un análisis detallado de la situación contable de la empresa
                        durante el año 2024, incluyendo evaluación de estados financieros, ratios y tendencias.
                      </p>
                      <p className={styles.documentParagraph}>
                        <strong>2. ANÁLISIS DE RENTABILIDAD</strong>
                      </p>
                      <p className={styles.documentParagraph}>
                        La empresa ha mostrado un crecimiento constante en sus márgenes de utilidad,
                        con un incremento del 15% respecto al año anterior.
                      </p>
                      <p className={styles.documentParagraph}>
                        <strong>3. CONCLUSIONES</strong>
                      </p>
                      <p className={styles.documentParagraph}>
                        Se recomienda continuar con las estrategias actuales y mantener el control
                        de costos operativos para maximizar la rentabilidad.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for non-A4 format files */}
      {isModalOpen && modalDocument && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{modalDocument.name}</h3>
              <div className={styles.modalActions}>
                <button className={styles.modalActionButton} title="Descargar">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </button>
                <button className={styles.modalActionButton} title="Imprimir">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                </button>
                <button
                  className={styles.modalActionButton}
                  title="Cerrar"
                  onClick={() => setIsModalOpen(false)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.documentPreview}>
                <div className={styles.documentPage}>
                  {modalDocument.type === 'xlsx' && (
                    <>
                      <div className={styles.documentHeader}>
                        <h4>BALANCE GENERAL - Q4 2024</h4>
                        <p className={styles.documentDate}>Fecha: {new Date().toLocaleDateString('es-MX')}</p>
                      </div>
                      <div className={styles.documentBody}>
                        <table className={styles.documentTable}>
                          <thead>
                            <tr>
                              <th>Concepto</th>
                              <th>Octubre</th>
                              <th>Noviembre</th>
                              <th>Diciembre</th>
                              <th>Total Q4</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Activos</td>
                              <td>$5,500,000</td>
                              <td>$5,700,000</td>
                              <td>$5,900,000</td>
                              <td>$17,100,000</td>
                            </tr>
                            <tr>
                              <td>Pasivos</td>
                              <td>$2,200,000</td>
                              <td>$2,300,000</td>
                              <td>$2,400,000</td>
                              <td>$6,900,000</td>
                            </tr>
                            <tr>
                              <td>Capital</td>
                              <td>$3,300,000</td>
                              <td>$3,400,000</td>
                              <td>$3,500,000</td>
                              <td>$10,200,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}
                  {modalDocument.type === 'txt' && (
                    <>
                      <div className={styles.documentHeader}>
                        <h4>TRANSACCIONES DIARIAS</h4>
                        <p className={styles.documentDate}>Fecha: {new Date().toLocaleDateString('es-MX')}</p>
                      </div>
                      <div className={styles.documentBody}>
                        <pre className={styles.documentPre}>
{`ID | Fecha       | Concepto              | Monto      | Tipo
---|-------------|----------------------|------------|----------
001| 2024-10-15  | Venta Producto A     | $15,000.00 | Ingreso
002| 2024-10-15  | Pago Proveedor B     | $8,500.00  | Egreso
003| 2024-10-15  | Servicio Consultoría | $25,000.00 | Ingreso
004| 2024-10-15  | Nómina Empleados     | $45,000.00 | Egreso
005| 2024-10-15  | Venta Producto C     | $12,000.00 | Ingreso`}
                        </pre>
                      </div>
                    </>
                  )}
                  {modalDocument.type === 'csv' && (
                    <>
                      <div className={styles.documentHeader}>
                        <h4>MOVIMIENTOS BANCARIOS</h4>
                        <p className={styles.documentDate}>Fecha: {new Date().toLocaleDateString('es-MX')}</p>
                      </div>
                      <div className={styles.documentBody}>
                        <table className={styles.documentTable}>
                          <thead>
                            <tr>
                              <th>Fecha</th>
                              <th>Descripción</th>
                              <th>Cargo</th>
                              <th>Abono</th>
                              <th>Saldo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2024-10-15</td>
                              <td>Depósito Cliente A</td>
                              <td>-</td>
                              <td>$50,000.00</td>
                              <td>$250,000.00</td>
                            </tr>
                            <tr>
                              <td>2024-10-15</td>
                              <td>Pago Proveedor</td>
                              <td>$30,000.00</td>
                              <td>-</td>
                              <td>$220,000.00</td>
                            </tr>
                            <tr>
                              <td>2024-10-16</td>
                              <td>Transferencia Ingreso</td>
                              <td>-</td>
                              <td>$75,000.00</td>
                              <td>$295,000.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}
                  {modalDocument.type === 'xml' && (
                    <>
                      <div className={styles.documentHeader}>
                        <h4>FACTURA CFDI</h4>
                        <p className={styles.documentDate}>Fecha: {new Date().toLocaleDateString('es-MX')}</p>
                      </div>
                      <div className={styles.documentBody}>
                        <pre className={styles.documentPre}>
{`<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4">
  <cfdi:Emisor Rfc="CIN123456789" Nombre="CINPRO S.A. de C.V."/>
  <cfdi:Receptor Rfc="CLI987654321" Nombre="Cliente"/>
  <cfdi:Conceptos>
    <cfdi:Concepto Cantidad="1" Unidad="PZA" 
                   Descripcion="Servicio de Consultoría" 
                   ValorUnitario="10000.00" 
                   Importe="10000.00"/>
  </cfdi:Conceptos>
  <cfdi:Impuestos TotalImpuestosTrasladados="1600.00">
    <cfdi:Traslados>
      <cfdi:Traslado Base="10000.00" Impuesto="002" 
                     TipoFactor="Tasa" TasaOCuota="0.160000" 
                     Importe="1600.00"/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
  <cfdi:Total>11600.00</cfdi:Total>
</cfdi:Comprobante>`}
                        </pre>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

