'use client';

import { useState } from 'react';
import styles from './BroadcastCenter.module.css';

type BroadcastTarget = 'all-chiefs' | 'all-clients' | 'late-payers' | 'specific-group';

export default function BroadcastCenter() {
  const [message, setMessage] = useState('');
  const [target, setTarget] = useState<BroadcastTarget>('all-chiefs');
  const [isSending, setIsSending] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) {
      alert('Por favor ingrese un mensaje');
      return;
    }

    setIsSending(true);
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setMessage('');
      alert('¡Mensaje enviado exitosamente!');
    }, 1500);
  };

  return (
    <div className={styles.broadcastCenter}>
      <div className={styles.header}>
        <h3 className={styles.title}>Centro de Mensajes</h3>
      </div>
      <div className={styles.broadcastForm}>
        <div className={styles.inputSection}>
          <label className={styles.label} htmlFor="broadcast-message">
            Mensaje
          </label>
          <textarea
            id="broadcast-message"
            className={styles.messageInput}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escriba su mensaje aquí..."
            rows={8}
          />
        </div>

        <div className={styles.targetSection}>
          <label className={styles.label} htmlFor="broadcast-target">
            Audiencia Objetivo
          </label>
          <select
            id="broadcast-target"
            className={styles.targetSelect}
            value={target}
            onChange={(e) => setTarget(e.target.value as BroadcastTarget)}
          >
            <option value="all-chiefs">Todos los Jefes</option>
            <option value="all-clients">Todos los Clientes</option>
            <option value="late-payers">Morosos</option>
            <option value="specific-group">Grupo Específico</option>
          </select>
        </div>

        <button
          className={styles.sendButton}
          onClick={handleSend}
          disabled={isSending || !message.trim()}
        >
          {isSending ? (
            <>
              <svg
                className={styles.spinning}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
              Enviando...
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Enviar por Telegram y Correo
            </>
          )}
        </button>
      </div>
    </div>
  );
}



