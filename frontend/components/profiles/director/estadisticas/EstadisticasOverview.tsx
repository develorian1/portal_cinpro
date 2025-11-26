'use client';

import { useState } from 'react';
import { KpiStrip, KpiCard } from '@/components/profiles/director/dashboard';
import { RefreshButton } from '@/components/shared';
import styles from './EstadisticasOverview.module.css';

type Timeframe = 'last30Days' | 'lastQuarter' | 'yearToDate';

export default function EstadisticasOverview() {
  const [activeTimeframe, setActiveTimeframe] = useState<Timeframe>('last30Days');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const timeframes = [
    { id: 'last30Days' as Timeframe, label: 'Últimos 30 Días' },
    { id: 'lastQuarter' as Timeframe, label: 'Trimestre Anterior' },
    { id: 'yearToDate' as Timeframe, label: 'Año a la Fecha' },
  ];

  // Mock data - replace with real SQL queries
  const [kpiData, setKpiData] = useState({
    totalRevenue: 2145800,
    activeProjects: 24,
    teamPerformance: 87,
    clientSatisfaction: 92,
  });

  const refresh = async () => {
    setIsRefreshing(true);
    // TODO: Implement SQL query refresh logic
    // This would trigger live SQL queries to update all data
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setIsRefreshing(false);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className={styles.overview}>
      <div className={styles.overviewContent}>
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

        {/* KPI Strip */}
        <KpiStrip>
          <KpiCard
            label="Ingresos Totales"
            value={formatCurrency(kpiData.totalRevenue)}
            change={{ direction: 'up', text: '+12% vs período anterior' }}
          />
          <KpiCard
            label="Proyectos Activos"
            value={kpiData.activeProjects.toString()}
            change={{ direction: 'up', text: '+3 proyectos nuevos' }}
            variant="success"
          />
          <KpiCard
            label="Rendimiento del Equipo"
            value={`${kpiData.teamPerformance}%`}
            change={{ direction: 'up', text: '+5% mejora' }}
            variant="success"
          />
          <KpiCard
            label="Satisfacción del Cliente"
            value={`${kpiData.clientSatisfaction}%`}
            change={{ direction: 'up', text: '+2% increase' }}
            variant="success"
          />
        </KpiStrip>
      </div>
    </div>
  );
}

