'use client';

import { useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import Mensajes from '@/components/shared/mensajes/Mensajes';
import CalendarioFiscal from './CalendarioFiscal';
import comunicacionData from '@/data/gerente/comunicacion.json';
import styles from './Comunicacion.module.css';

export default function Comunicacion() {
  const { activeItem } = useNavigation();
  const [calendarEvents] = useState(comunicacionData.calendarEvents);

  // Determine active tab from navigation
  const activeTab = activeItem === 'mensajes-calendario' ? 'calendario' : 'mensajes';

  return (
    <div className={styles.comunicacion}>
      <div className={styles.comunicacionContent}>
        {activeTab === 'mensajes' ? (
          <Mensajes />
        ) : (
          <CalendarioFiscal events={calendarEvents} />
        )}
      </div>
    </div>
  );
}

