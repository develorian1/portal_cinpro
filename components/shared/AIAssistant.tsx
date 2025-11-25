'use client';

import { useState, useRef, useEffect } from 'react';
import { useProfile } from '@/contexts/ProfileContext';
import styles from './AIAssistant.module.css';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  downloadLink?: string;
}

export default function AIAssistant() {
  const { profile } = useProfile();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const processDirectorQuery = async (query: string): Promise<Message> => {
    // Check if query is about PDF report generation
    const pdfReportPattern = /(?:show|generate|create|get|give me|i need|i want).*pdf.*report.*(?:loss|losses|medical group|group|medical)/i;
    const lossPattern = /(?:loss|losses|pérdida|pérdidas)/i;
    const medicalGroupPattern = /(?:medical group|medical|grupo médico)/i;
    const isPdfReportQuery = pdfReportPattern.test(query) || 
      (lossPattern.test(query) && medicalGroupPattern.test(query) && /report/i.test(query));

    if (isPdfReportQuery) {
      // Simulate database query and PDF generation
      setIsProcessing(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock data - in production, this would query the actual database
      const mockLossData = {
        medicalGroup: 'Medical Group',
        period: 'Q4 2024',
        totalLosses: 125000,
        breakdown: [
          { category: 'Operating Expenses', amount: 75000 },
          { category: 'Uncollected Receivables', amount: 35000 },
          { category: 'Write-offs', amount: 15000 },
        ],
      };

      // Generate a mock PDF download link
      // In production, this would call an API endpoint that:
      // 1. Queries the database for loss data
      // 2. Formats the data into a PDF
      // 3. Returns a download link
      const downloadLink = `/api/reports/losses?group=medical&format=pdf&timestamp=${Date.now()}`;
      
      setIsProcessing(false);

      return {
        id: `msg-${Date.now()}`,
        role: 'assistant',
        content: `He generado un reporte PDF de las pérdidas del Grupo Médico para ${mockLossData.period}.\n\n**Resumen:**\n- Pérdidas Totales: $${mockLossData.totalLosses.toLocaleString()}\n- Gastos Operativos: $${mockLossData.breakdown[0].amount.toLocaleString()}\n- Cuentas por Cobrar No Recaudadas: $${mockLossData.breakdown[1].amount.toLocaleString()}\n- Cancelaciones: $${mockLossData.breakdown[2].amount.toLocaleString()}\n\nHaz clic en el botón de descarga a continuación para obtener el reporte PDF completo.`,
        timestamp: new Date(),
        downloadLink,
      };
    }

    // Default response for other queries
    return {
      id: `msg-${Date.now()}`,
      role: 'assistant',
      content: `¡Estoy aquí para ayudar! Para el perfil de director, puedo asistir con:\n\n- Generación de reportes PDF (ej., "Muéstrame un reporte PDF de las pérdidas del Grupo Médico")\n- Consultas de datos financieros\n- Perspectivas del panel de control\n- Generación de reportes\n\n¿Cómo puedo asistirte hoy?`,
      timestamp: new Date(),
    };
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isProcessing) return;

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsProcessing(true);

    try {
      let assistantMessage: Message;

      if (profile === 'director') {
        assistantMessage = await processDirectorQuery(userMessage.content);
      } else {
        // Default response for other profiles
        assistantMessage = {
          id: `msg-${Date.now() + 1}`,
          role: 'assistant',
          content: '¡Estoy aquí para ayudar! ¿Cómo puedo asistirte hoy?',
          timestamp: new Date(),
        };
      }

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: `msg-${Date.now() + 1}`,
        role: 'assistant',
        content: 'Lo siento, encontré un error al procesar tu solicitud. Por favor intenta de nuevo.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleDownload = (link: string) => {
    // In production, this would trigger the actual PDF download
    // For now, we'll simulate it
    window.open(link, '_blank');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className={`${styles.floatingButton} ${isOpen ? styles.hidden : ''}`}
        onClick={handleToggle}
        aria-label="Abrir Asistente IA"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.chatHeaderContent}>
              <div className={styles.chatHeaderIcon}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className={styles.chatHeaderText}>
                <h3>Asistente IA</h3>
                <p>¿Cómo puedo ayudarte hoy?</p>
              </div>
            </div>
            <button
              className={styles.closeButton}
              onClick={handleToggle}
              aria-label="Cerrar Asistente IA"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className={styles.messagesContainer}>
            {messages.length === 0 && (
              <div className={styles.welcomeMessage}>
                <div className={styles.welcomeIcon}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h4>Bienvenido al Asistente IA</h4>
                <p>
                  {profile === 'director'
                    ? 'Puedo ayudarte a generar reportes, analizar datos y responder preguntas sobre tu panel de control.'
                    : '¡Estoy aquí para ayudar! ¿Cómo puedo asistirte hoy?'}
                </p>
                {profile === 'director' && (
                  <div className={styles.exampleQueries}>
                    <p className={styles.exampleTitle}>Intenta preguntar:</p>
                    <button
                      className={styles.exampleButton}
                      onClick={() => setInputValue("Muéstrame un reporte PDF de las pérdidas del Grupo Médico")}
                    >
                      "Muéstrame un reporte PDF de las pérdidas del Grupo Médico"
                    </button>
                  </div>
                )}
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.message} ${styles[message.role]}`}
              >
                <div className={styles.messageContent}>
                  <p>{message.content}</p>
                  {message.downloadLink && (
                    <button
                      className={styles.downloadButton}
                      onClick={() => handleDownload(message.downloadLink!)}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Descargar Reporte PDF
                    </button>
                  )}
                </div>
                <span className={styles.messageTime}>{formatTime(message.timestamp)}</span>
              </div>
            ))}

            {isProcessing && (
              <div className={`${styles.message} ${styles.assistant}`}>
                <div className={styles.messageContent}>
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className={styles.inputContainer}>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu mensaje..."
              className={styles.input}
              disabled={isProcessing}
            />
            <button
              className={styles.sendButton}
              onClick={handleSend}
              disabled={!inputValue.trim() || isProcessing}
              aria-label="Enviar mensaje"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

