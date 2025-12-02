'use client';

import { useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import TeamPerformance from './TeamPerformance';
import MisComisiones from './MisComisiones';
import estadisticasData from '@/data/gerente/estadisticas.json';
import styles from './Estadisticas.module.css';

export default function Estadisticas() {
  const { activeItem } = useNavigation();
  const [teamPerformance] = useState(estadisticasData.teamPerformance);
  const [commissions] = useState(estadisticasData.commissions);

  // Determine active tab from navigation
  const activeTab = activeItem === 'estadisticas-comisiones' ? 'commissions' : 'performance';

  return (
    <div className={styles.estadisticas}>
      <div className={styles.estadisticasContent}>
        {activeTab === 'performance' ? (
          <TeamPerformance
            reconciliationSpeed={teamPerformance.reconciliationSpeed}
            errorRates={teamPerformance.errorRates}
            clientSatisfaction={teamPerformance.clientSatisfaction}
          />
        ) : (
          <MisComisiones
            summary={commissions.summary}
            clients={commissions.clients}
          />
        )}
      </div>
    </div>
  );
}

