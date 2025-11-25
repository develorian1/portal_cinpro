'use client';

import React, { useState } from 'react';
import styles from './Mensajes.module.css';

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  status: 'online' | 'offline' | 'away';
  avatar?: string;
  archived?: boolean;
}

interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'xlsx' | 'docx' | 'txt' | 'csv' | 'xml';
  size: string;
  url?: string;
}

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
  document?: Document;
}

export default function Mensajes() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [isDocumentViewerOpen, setIsDocumentViewerOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDocument, setModalDocument] = useState<Document | null>(null);
  const [isMicActive, setIsMicActive] = useState(false);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showArchived, setShowArchived] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

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

  // Mock data - replace with real data from API
  const [chats, setChats] = useState<Chat[]>([
    {
      id: '1',
      name: 'María González',
      lastMessage: 'Gracias por la información',
      timestamp: '10:30 AM',
      unreadCount: 2,
      status: 'online',
      archived: false,
    },
    {
      id: '2',
      name: 'Carlos Ramírez',
      lastMessage: '¿Podemos revisar el proyecto mañana?',
      timestamp: '9:15 AM',
      unreadCount: 0,
      status: 'away',
      archived: false,
    },
    {
      id: '3',
      name: 'Ana Martínez',
      lastMessage: 'Perfecto, lo revisaré',
      timestamp: 'Ayer',
      unreadCount: 1,
      status: 'offline',
      archived: false,
    },
    {
      id: '4',
      name: 'Juan Pérez',
      lastMessage: 'El informe está listo',
      timestamp: 'Ayer',
      unreadCount: 0,
      status: 'online',
      archived: false,
    },
    {
      id: '5',
      name: 'Laura Sánchez',
      lastMessage: 'Necesito tu aprobación',
      timestamp: 'Lunes',
      unreadCount: 3,
      status: 'offline',
      archived: false,
    },
  ]);

  const [messages] = useState<Record<string, Message[]>>({
    '1': [
      {
        id: '1',
        sender: 'María González',
        content: 'Hola, ¿cómo estás?',
        timestamp: '10:20 AM',
        isOwn: false,
      },
      {
        id: '2',
        sender: 'Tú',
        content: 'Muy bien, gracias. ¿En qué puedo ayudarte?',
        timestamp: '10:25 AM',
        isOwn: true,
      },
      {
        id: '3',
        sender: 'María González',
        content: 'Te envío el informe financiero del mes',
        timestamp: '10:28 AM',
        isOwn: false,
        document: {
          id: 'doc1',
          name: 'Informe_Financiero_Enero_2024.pdf',
          type: 'pdf',
          size: '2.4 MB',
        },
      },
      {
        id: '4',
        sender: 'María González',
        content: 'Y aquí está la hoja de cálculo con los detalles',
        timestamp: '10:29 AM',
        isOwn: false,
        document: {
          id: 'doc2',
          name: 'Balance_General_Q1_2024.xlsx',
          type: 'xlsx',
          size: '856 KB',
        },
      },
      {
        id: '5',
        sender: 'María González',
        content: 'Documento de análisis contable',
        timestamp: '10:29 AM',
        isOwn: false,
        document: {
          id: 'doc3',
          name: 'Analisis_Contable_2024.docx',
          type: 'docx',
          size: '1.2 MB',
        },
      },
      {
        id: '6',
        sender: 'María González',
        content: 'Datos en formato texto',
        timestamp: '10:30 AM',
        isOwn: false,
        document: {
          id: 'doc4',
          name: 'Transacciones_Diarias.txt',
          type: 'txt',
          size: '124 KB',
        },
      },
      {
        id: '7',
        sender: 'María González',
        content: 'Exportación CSV de movimientos',
        timestamp: '10:30 AM',
        isOwn: false,
        document: {
          id: 'doc5',
          name: 'Movimientos_Bancarios.csv',
          type: 'csv',
          size: '342 KB',
        },
      },
      {
        id: '8',
        sender: 'María González',
        content: 'Facturación electrónica XML',
        timestamp: '10:31 AM',
        isOwn: false,
        document: {
          id: 'doc6',
          name: 'Factura_CFDI_001234.xml',
          type: 'xml',
          size: '45 KB',
        },
      },
      {
        id: '9',
        sender: 'María González',
        content: 'Gracias por la información',
        timestamp: '10:30 AM',
        isOwn: false,
      },
    ],
    '2': [
      {
        id: '1',
        sender: 'Carlos Ramírez',
        content: '¿Podemos revisar el proyecto mañana?',
        timestamp: '9:15 AM',
        isOwn: false,
      },
    ],
    '3': [
      {
        id: '1',
        sender: 'Ana Martínez',
        content: 'Perfecto, lo revisaré',
        timestamp: 'Ayer',
        isOwn: false,
      },
    ],
    '4': [
      {
        id: '1',
        sender: 'Juan Pérez',
        content: 'El informe está listo',
        timestamp: 'Ayer',
        isOwn: false,
      },
    ],
    '5': [
      {
        id: '1',
        sender: 'Laura Sánchez',
        content: 'Necesito tu aprobación',
        timestamp: 'Lunes',
        isOwn: false,
      },
    ],
  });

  const selectedChatData = selectedChat ? chats.find(chat => chat.id === selectedChat) : null;
  const selectedMessages = selectedChat ? messages[selectedChat] || [] : [];

  const handleChatSelect = (chatId: string) => {
    setSelectedChat(chatId);
  };

  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedChat) return;
    
    // TODO: Send message to API
    console.log('Sending message:', messageInput);
    setMessageInput('');
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // TODO: Handle file upload
      console.log('Files selected:', files);
    }
    // Reset the input so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleMicClick = () => {
    setIsMicActive(!isMicActive);
    // TODO: Implement actual microphone recording logic
    if (!isMicActive) {
      console.log('Microphone activated');
    } else {
      console.log('Microphone deactivated');
    }
  };

  const getStatusColor = (status: Chat['status']) => {
    switch (status) {
      case 'online':
        return styles.statusOnline;
      case 'away':
        return styles.statusAway;
      case 'offline':
        return styles.statusOffline;
      default:
        return styles.statusOffline;
    }
  };

  // Handle search mode toggle
  const handleSearchClick = () => {
    setIsSearchMode(true);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  };

  // Handle search input blur
  const handleSearchBlur = () => {
    if (!searchQuery.trim()) {
      setIsSearchMode(false);
      setSearchQuery('');
    }
  };

  // Handle archive chat
  const handleArchiveChat = (chatId: string) => {
    setChats(chats.map(chat => 
      chat.id === chatId ? { ...chat, archived: true } : chat
    ));
    if (selectedChat === chatId) {
      setSelectedChat(null);
    }
    setIsDropdownOpen(false);
  };

  // Handle delete chat
  const handleDeleteChat = (chatId: string) => {
    setChats(chats.filter(chat => chat.id !== chatId));
    if (selectedChat === chatId) {
      setSelectedChat(null);
    }
    setIsDropdownOpen(false);
  };

  // Filter chats based on search and archived view
  const filteredChats = chats.filter(chat => {
    const matchesArchived = showArchived ? chat.archived : !chat.archived;
    const matchesSearch = searchQuery.trim() === '' || 
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesArchived && matchesSearch;
  });

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className={styles.mensajes}>
      <div className={`${styles.chatsList} ${!isDocumentViewerOpen ? styles.chatsListExpanded : ''}`}>
        <div className={styles.chatsListHeader}>
          <div className={`${styles.chatsListHeaderContent} ${isSearchMode ? styles.chatsListHeaderContentSearch : ''}`}>
            <h2 className={styles.chatsListTitle}>Mensajes</h2>
            <div className={styles.chatsListSearchContainer}>
              <input
                ref={searchInputRef}
                type="text"
                className={styles.chatsListSearchInput}
                placeholder="Buscar conversaciones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onBlur={handleSearchBlur}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setIsSearchMode(false);
                    setSearchQuery('');
                  }
                }}
              />
              {searchQuery && (
                <button
                  className={styles.chatsListSearchClear}
                  onClick={() => {
                    setSearchQuery('');
                    searchInputRef.current?.focus();
                  }}
                  title="Limpiar búsqueda"
                  type="button"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          <div className={styles.chatsListHeaderActions}>
            {!isSearchMode && (
              <button
                className={styles.chatsListHeaderButton}
                onClick={handleSearchClick}
                title="Buscar"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
            )}
            <button
              className={`${styles.chatsListHeaderButton} ${showArchived ? styles.chatsListHeaderButtonActive : ''}`}
              onClick={() => setShowArchived(!showArchived)}
              title={showArchived ? "Ver conversaciones activas" : "Ver conversaciones archivadas"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="21 8 21 21 3 21 3 8" />
                <rect x="1" y="3" width="22" height="5" />
                <line x1="10" y1="12" x2="14" y2="12" />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.chatsListContent}>
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              className={`${styles.chatItem} ${selectedChat === chat.id ? styles.chatItemActive : ''}`}
              onClick={() => handleChatSelect(chat.id)}
            >
              <div className={styles.chatInfo}>
                <div className={styles.chatHeader}>
                  <span className={styles.chatName}>{chat.name}</span>
                  <span className={styles.chatTimestamp}>{chat.timestamp}</span>
                </div>
                <div className={styles.chatFooter}>
                  <span className={styles.chatLastMessage}>{chat.lastMessage}</span>
                  {chat.unreadCount > 0 && (
                    <span className={styles.unreadBadge}>{chat.unreadCount}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.chatWindow} ${!isDocumentViewerOpen ? styles.chatWindowExpanded : ''}`}>
        {selectedChatData ? (
          <>
            <div className={styles.chatHeader}>
              <div className={styles.chatHeaderInfo}>
                <div>
                  <h3 className={styles.chatHeaderName}>{selectedChatData.name}</h3>
                  <span className={styles.chatHeaderStatus}>
                    {selectedChatData.status === 'online' ? 'En línea' : 
                     selectedChatData.status === 'away' ? 'Ausente' : 'Desconectado'}
                  </span>
                </div>
              </div>
              <div className={styles.chatHeaderActions} ref={dropdownRef}>
                <button
                  className={styles.chatHeaderMenuButton}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  title="Más opciones"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className={styles.chatHeaderDropdown}>
                    <button
                      className={styles.chatHeaderDropdownItem}
                      onClick={() => handleArchiveChat(selectedChatData.id)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="21 8 21 21 3 21 3 8" />
                        <rect x="1" y="3" width="22" height="5" />
                        <line x1="10" y1="12" x2="14" y2="12" />
                      </svg>
                      <span>Archivar chat</span>
                    </button>
                    <button
                      className={`${styles.chatHeaderDropdownItem} ${styles.chatHeaderDropdownItemDanger}`}
                      onClick={() => handleDeleteChat(selectedChatData.id)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                      </svg>
                      <span>Eliminar chat</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.messagesContainer}>
              {selectedMessages.map((message) => (
                <div
                  key={message.id}
                  className={`${styles.message} ${message.isOwn ? styles.messageOwn : styles.messageOther}`}
                >
                  <div className={styles.messageContent}>
                    {message.content && (
                      <p className={styles.messageText}>{message.content}</p>
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
                    <span className={styles.messageTime}>{message.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.messageInputContainer}>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple
                style={{ display: 'none' }}
                accept=".pdf,.xlsx,.docx,.txt,.csv,.xml,image/*"
              />
              <button
                className={styles.attachButton}
                title="Adjuntar archivo"
                onClick={handleAttachClick}
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </button>
              <button
                className={`${styles.micButton} ${isMicActive ? styles.micButtonActive : ''}`}
                title="Grabar audio"
                onClick={handleMicClick}
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              </button>
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
          </>
        ) : (
          <div className={styles.emptyChat}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <p className={styles.emptyChatText}>Selecciona una conversación para comenzar</p>
          </div>
        )}
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
                      <h4>INFORME FINANCIERO - ENERO 2024</h4>
                      <p className={styles.documentDate}>Fecha: {new Date().toLocaleDateString('es-MX')}</p>
                    </div>
                    <div className={styles.documentBody}>
                      <p className={styles.documentParagraph}>
                        <strong>RESUMEN EJECUTIVO</strong>
                      </p>
                      <p className={styles.documentParagraph}>
                        El presente informe presenta el estado financiero de la empresa para el mes de enero de 2024.
                        Se incluyen análisis de ingresos, gastos, flujo de efectivo y proyecciones.
                      </p>
                      <p className={styles.documentParagraph}>
                        <strong>INGRESOS TOTALES:</strong> $1,250,000.00 MXN
                      </p>
                      <p className={styles.documentParagraph}>
                        <strong>GASTOS OPERATIVOS:</strong> $850,000.00 MXN
                      </p>
                      <p className={styles.documentParagraph}>
                        <strong>UTILIDAD NETA:</strong> $400,000.00 MXN
                      </p>
                    </div>
                  </>
                )}
                {selectedDocument.type === 'xlsx' && (
                  <>
                    <div className={styles.documentHeader}>
                      <h4>BALANCE GENERAL - Q1 2024</h4>
                      <p className={styles.documentDate}>Fecha: {new Date().toLocaleDateString('es-MX')}</p>
                    </div>
                    <div className={styles.documentBody}>
                      <table className={styles.documentTable}>
                        <thead>
                          <tr>
                            <th>Concepto</th>
                            <th>Enero</th>
                            <th>Febrero</th>
                            <th>Marzo</th>
                            <th>Total Q1</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Activos</td>
                            <td>$5,000,000</td>
                            <td>$5,200,000</td>
                            <td>$5,400,000</td>
                            <td>$15,600,000</td>
                          </tr>
                          <tr>
                            <td>Pasivos</td>
                            <td>$2,000,000</td>
                            <td>$2,100,000</td>
                            <td>$2,200,000</td>
                            <td>$6,300,000</td>
                          </tr>
                          <tr>
                            <td>Capital</td>
                            <td>$3,000,000</td>
                            <td>$3,100,000</td>
                            <td>$3,200,000</td>
                            <td>$9,300,000</td>
                          </tr>
                        </tbody>
                      </table>
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
                {selectedDocument.type === 'txt' && (
                  <>
                    <div className={styles.documentHeader}>
                      <h4>TRANSACCIONES DIARIAS</h4>
                      <p className={styles.documentDate}>Fecha: {new Date().toLocaleDateString('es-MX')}</p>
                    </div>
                    <div className={styles.documentBody}>
                      <pre className={styles.documentPre}>
{`ID | Fecha       | Concepto              | Monto      | Tipo
---|-------------|----------------------|------------|----------
001| 2024-01-15  | Venta Producto A     | $15,000.00 | Ingreso
002| 2024-01-15  | Pago Proveedor B     | $8,500.00  | Egreso
003| 2024-01-15  | Servicio Consultoría | $25,000.00 | Ingreso
004| 2024-01-15  | Nómina Empleados     | $45,000.00 | Egreso
005| 2024-01-15  | Venta Producto C     | $12,000.00 | Ingreso`}
                      </pre>
                    </div>
                  </>
                )}
                {selectedDocument.type === 'csv' && (
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
                            <td>2024-01-15</td>
                            <td>Depósito Cliente A</td>
                            <td>-</td>
                            <td>$50,000.00</td>
                            <td>$250,000.00</td>
                          </tr>
                          <tr>
                            <td>2024-01-15</td>
                            <td>Pago Proveedor</td>
                            <td>$30,000.00</td>
                            <td>-</td>
                            <td>$220,000.00</td>
                          </tr>
                          <tr>
                            <td>2024-01-16</td>
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
                {selectedDocument.type === 'xml' && (
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
  <cfdi:Receptor Rfc="CLI987654321" Nombre="${selectedChatData?.name || 'Cliente'}"/>
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
      )}

      {/* Modal for large files */}
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
                  {modalDocument.type === 'pdf' && (
                    <>
                      <div className={styles.documentHeader}>
                        <h4>INFORME FINANCIERO - ENERO 2024</h4>
                        <p className={styles.documentDate}>Fecha: {new Date().toLocaleDateString('es-MX')}</p>
                      </div>
                      <div className={styles.documentBody}>
                        <p className={styles.documentParagraph}>
                          <strong>RESUMEN EJECUTIVO</strong>
                        </p>
                        <p className={styles.documentParagraph}>
                          El presente informe presenta el estado financiero de la empresa para el mes de enero de 2024.
                          Se incluyen análisis de ingresos, gastos, flujo de efectivo y proyecciones.
                        </p>
                        <p className={styles.documentParagraph}>
                          <strong>INGRESOS TOTALES:</strong> $1,250,000.00 MXN
                        </p>
                        <p className={styles.documentParagraph}>
                          <strong>GASTOS OPERATIVOS:</strong> $850,000.00 MXN
                        </p>
                        <p className={styles.documentParagraph}>
                          <strong>UTILIDAD NETA:</strong> $400,000.00 MXN
                        </p>
                      </div>
                    </>
                  )}
                  {modalDocument.type === 'xlsx' && (
                    <>
                      <div className={styles.documentHeader}>
                        <h4>BALANCE GENERAL - Q1 2024</h4>
                        <p className={styles.documentDate}>Fecha: {new Date().toLocaleDateString('es-MX')}</p>
                      </div>
                      <div className={styles.documentBody}>
                        <table className={styles.documentTable}>
                          <thead>
                            <tr>
                              <th>Concepto</th>
                              <th>Enero</th>
                              <th>Febrero</th>
                              <th>Marzo</th>
                              <th>Total Q1</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Activos</td>
                              <td>$5,000,000</td>
                              <td>$5,200,000</td>
                              <td>$5,400,000</td>
                              <td>$15,600,000</td>
                            </tr>
                            <tr>
                              <td>Pasivos</td>
                              <td>$2,000,000</td>
                              <td>$2,100,000</td>
                              <td>$2,200,000</td>
                              <td>$6,300,000</td>
                            </tr>
                            <tr>
                              <td>Capital</td>
                              <td>$3,000,000</td>
                              <td>$3,100,000</td>
                              <td>$3,200,000</td>
                              <td>$9,300,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}
                  {modalDocument.type === 'docx' && (
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
001| 2024-01-15  | Venta Producto A     | $15,000.00 | Ingreso
002| 2024-01-15  | Pago Proveedor B     | $8,500.00  | Egreso
003| 2024-01-15  | Servicio Consultoría | $25,000.00 | Ingreso
004| 2024-01-15  | Nómina Empleados     | $45,000.00 | Egreso
005| 2024-01-15  | Venta Producto C     | $12,000.00 | Ingreso`}
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
                              <td>2024-01-15</td>
                              <td>Depósito Cliente A</td>
                              <td>-</td>
                              <td>$50,000.00</td>
                              <td>$250,000.00</td>
                            </tr>
                            <tr>
                              <td>2024-01-15</td>
                              <td>Pago Proveedor</td>
                              <td>$30,000.00</td>
                              <td>-</td>
                              <td>$220,000.00</td>
                            </tr>
                            <tr>
                              <td>2024-01-16</td>
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
  <cfdi:Receptor Rfc="CLI987654321" Nombre="${selectedChatData?.name || 'Cliente'}"/>
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

