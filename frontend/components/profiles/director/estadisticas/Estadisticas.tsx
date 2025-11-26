'use client';

import { useState, useEffect, useMemo } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import RendimientoEmpleados from './RendimientoEmpleados';
import RendimientoClientes from './RendimientoClientes';
import RendimientoEquipos from './RendimientoEquipos';
import FinanzasGenerales from './FinanzasGenerales';
import { RefreshButton } from '@/components/shared';
import styles from './Estadisticas.module.css';

type EstadisticasTab = 'empleados' | 'clientes' | 'equipos' | 'finanzas';
type Timeframe = 'last30Days' | 'lastQuarter' | 'yearToDate';

export default function Estadisticas() {
  const { activeItem } = useNavigation();
  const [activeTimeframe, setActiveTimeframe] = useState<Timeframe>('last30Days');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Determine active tab from navigation context
  const activeTab = useMemo<EstadisticasTab>(() => {
    if (activeItem === 'estadisticas-empleados') return 'empleados';
    if (activeItem === 'estadisticas-clientes') return 'clientes';
    if (activeItem === 'estadisticas-equipos') return 'equipos';
    if (activeItem === 'estadisticas-finanzas') return 'finanzas';
    // Default to empleados if estadisticas is clicked directly
    if (activeItem === 'estadisticas') return 'empleados';
    return 'empleados';
  }, [activeItem]);

  const timeframes = [
    { id: 'last30Days' as Timeframe, label: 'Últimos 30 Días' },
    { id: 'lastQuarter' as Timeframe, label: 'Trimestre Anterior' },
    { id: 'yearToDate' as Timeframe, label: 'Año a la Fecha' },
  ];

  const refresh = async () => {
    setIsRefreshing(true);
    // TODO: Implement SQL query refresh logic
    // This would trigger live SQL queries to update all data
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setIsRefreshing(false);
  };

  return (
    <div className={styles.estadisticas}>
      <div className={styles.estadisticasContent}>
        {/* Top Bar: Timeframe Selector and Refresh Button */}
        <div className={styles.topBar}>
          <div className={styles.timeframeSelect}>
            {timeframes.map((timeframe) => (
              <button
                key={timeframe.id}
                className={`${styles.timeframeBtn} ${activeTimeframe === timeframe.id ? styles.active : ''}`}
                onClick={() => setActiveTimeframe(timeframe.id)}
              >
                {timeframe.label}
              </button>
            ))}
          </div>
          <RefreshButton 
            onClick={refresh}
            isRefreshing={isRefreshing}
          />
        </div>

        {/* Main Canvas Area */}
        <div className={styles.tabContent}>
          {activeTab === 'empleados' && (
            <RendimientoEmpleados timeframe={activeTimeframe} />
          )}
          {activeTab === 'clientes' && (
            <RendimientoClientes timeframe={activeTimeframe} />
          )}
          {activeTab === 'equipos' && (
            <RendimientoEquipos timeframe={activeTimeframe} />
          )}
          {activeTab === 'finanzas' && (
            <FinanzasGenerales timeframe={activeTimeframe} />
          )}
        </div>
      </div>
    </div>
  );
}

