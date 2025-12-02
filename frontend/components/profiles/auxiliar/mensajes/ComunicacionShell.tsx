'use client';

import { useState } from 'react';
import Mensajes from './Mensajes';
import { Calendario } from '@/components/profiles/auxiliar/calendario';
import styles from './ComunicacionShell.module.css';

interface ComunicacionShellProps {
  initialView?: 'chat' | 'calendar';
}

export default function ComunicacionShell({ initialView = 'chat' }: ComunicacionShellProps) {
  const [activeView, setActiveView] = useState<'chat' | 'calendar'>(initialView);

  return (
    <div className={styles.shell}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeView === 'chat' ? styles.active : ''}`}
          onClick={() => setActiveView('chat')}
        >
          Conversaciones
        </button>
        <button
          className={`${styles.tabButton} ${activeView === 'calendar' ? styles.active : ''}`}
          onClick={() => setActiveView('calendar')}
        >
          Calendario
        </button>
      </div>
      <div className={styles.viewBody}>
        {activeView === 'chat' ? <Mensajes /> : <Calendario />}
      </div>
    </div>
  );
}
