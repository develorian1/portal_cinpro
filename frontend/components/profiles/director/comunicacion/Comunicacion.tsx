'use client';

import AiAgentActivityLog from './AiAgentActivityLog';
import BroadcastCenter from './BroadcastCenter';
import styles from './Comunicacion.module.css';

export default function Comunicacion() {
  const handleNewBroadcast = () => {
    // Focus the message input when "New Broadcast" is clicked
    const messageInput = document.getElementById('broadcast-message') as HTMLTextAreaElement;
    if (messageInput) {
      messageInput.focus();
      messageInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className={styles.comunicacion}>
      <div className={styles.comunicacionContent}>
        {/* Top Bar Context (Zone 2) */}
        <div className={styles.topBar}>
          <div className={styles.header}>
            <h2 className={styles.title}>Comunicacion</h2>
          </div>
          <button className={styles.newBroadcastBtn} onClick={handleNewBroadcast}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Nuevo Mensaje
          </button>
        </div>

        {/* Main Canvas Area */}
        <div className={styles.tabContent}>
          <div className={styles.mensajesTab}>
            <AiAgentActivityLog />
            <BroadcastCenter />
          </div>
        </div>
      </div>
    </div>
  );
}

