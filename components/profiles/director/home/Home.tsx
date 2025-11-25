'use client';

import { useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import { useHome } from '@/contexts/HomeContext';
import { KpiStrip, KpiCard } from '@/components/profiles/director/dashboard';
import { RefreshButton } from '@/components/shared';
import styles from './Home.module.css';

// Note: timeframe from useHome() is available for future use when implementing
// SQL queries that filter by timeframe

interface Commission {
  id: string;
  staffName: string;
  staffRole: string;
  client: string;
  totalOwed: number;
  status: 'pending';
}

export default function Home() {
  const { setActiveItem } = useNavigation();
  const { timeframe, setTimeframe, isRefreshing, refresh } = useHome();

  const timeframeOptions: Array<{ value: 'Today' | 'This Week' | 'This Month'; label: string }> = [
    { value: 'Today', label: 'Hoy' },
    { value: 'This Week', label: 'Esta Semana' },
    { value: 'This Month', label: 'Este Mes' },
  ];

  // Mock data - replace with real SQL queries
  const [kpiData, setKpiData] = useState({
    netProfit: 847250,
    totalRevenue: 2145800,
    operatingCost: 1298550,
    pendingCollections: 423150,
  });

  const [urgentApprovals, setUrgentApprovals] = useState<Commission[]>([
    {
      id: '1',
      staffName: 'María González',
      staffRole: 'Gerente de Proyecto',
      client: 'Hospital General del Norte',
      totalOwed: 37500,
      status: 'pending',
    },
    {
      id: '2',
      staffName: 'Carlos Ramírez',
      staffRole: 'Consultor Senior',
      client: 'Clínica San José',
      totalOwed: 21600,
      status: 'pending',
    },
    {
      id: '3',
      staffName: 'Ana Martínez',
      staffRole: 'Especialista',
      client: 'Corporación Industrial SA',
      totalOwed: 57600,
      status: 'pending',
    },
  ]);


  const handleCommissionClick = (commissionId: string) => {
    // Navigate to Finanzas section
    setActiveItem('finanzas');
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Determine if net profit is positive or negative
  const netProfitVariant = kpiData.netProfit >= 0 ? 'positive' : 'negative';

  return (
    <div className={styles.home}>
      {/* Top Bar Context (Zone 2) */}
      <div className={styles.topBarContext}>
        <div className={styles.timeframeSelect}>
          {timeframeOptions.map((option) => (
            <button
              key={option.value}
              className={`${styles.timeframeBtn} ${timeframe === option.value ? styles.active : ''}`}
              onClick={() => setTimeframe(option.value)}
            >
              {option.label}
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
          label="Ganancia Neta (MTD)"
          value={formatCurrency(kpiData.netProfit)}
          valueVariant={netProfitVariant}
          variant={kpiData.netProfit >= 0 ? 'success' : 'danger'}
          smallLabel={true}
        />
        <KpiCard
          label="Ingresos Totales"
          value={formatCurrency(kpiData.totalRevenue)}
        />
        <KpiCard
          label="Costo Operativo"
          value={formatCurrency(kpiData.operatingCost)}
          variant="warning"
        />
        <KpiCard
          label="Cobros Pendientes"
          value={formatCurrency(kpiData.pendingCollections)}
          variant="danger"
        />
      </KpiStrip>

      {/* Pulse Panel */}
      <div className={styles.pulsePanel}>
        <div className={styles.pulseColumn}>
          <h3 className={styles.pulseTitle}>Aprobaciones Urgentes</h3>
          <div className={styles.approvalsList}>
            {urgentApprovals.length === 0 ? (
              <div className={styles.emptyState}>No hay aprobaciones pendientes</div>
            ) : (
              urgentApprovals.map((commission) => (
                <div
                  key={commission.id}
                  className={styles.approvalItem}
                  onClick={() => handleCommissionClick(commission.id)}
                >
                  <div className={styles.approvalHeader}>
                    <span className={styles.staffName}>{commission.staffName}</span>
                    <span className={styles.approvalAmount}>
                      {formatCurrency(commission.totalOwed)}
                    </span>
                  </div>
                  <div className={styles.approvalDetails}>
                    <span className={styles.staffRole}>{commission.staffRole}</span>
                    <span className={styles.clientName}>{commission.client}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className={styles.pulseColumn}>
          <h3 className={styles.pulseTitle}>Estado del Sistema</h3>
          <div className={styles.healthList}>
            <div className={styles.healthItem}>
              <div className={styles.healthStatus}>
                <span className={styles.healthIndicator} data-status="stable"></span>
                <span className={styles.healthLabel}>Conexión SAT</span>
              </div>
              <span className={styles.healthValue}>Estable</span>
            </div>
            <div className={styles.healthItem}>
              <div className={styles.healthStatus}>
                <span className={styles.healthIndicator} data-status="warning"></span>
                <span className={styles.healthLabel}>Alimentadores Bancarios</span>
              </div>
              <span className={styles.healthValue}>3 Cuentas requieren Re-Autenticación</span>
            </div>
            <div className={styles.healthItem}>
              <div className={styles.healthStatus}>
                <span className={styles.healthIndicator} data-status="stable"></span>
                <span className={styles.healthLabel}>Agentes IA</span>
              </div>
              <span className={styles.healthValue}>Activos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

