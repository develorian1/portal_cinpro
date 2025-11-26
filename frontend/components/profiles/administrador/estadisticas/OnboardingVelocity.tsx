'use client';

import { useState } from 'react';
import { Table } from '@/components/shared';
import styles from './OnboardingVelocity.module.css';

interface MonthlyClientData {
  month: string;
  count: number;
}

interface SalesSource {
  id: string;
  staffName: string;
  clientsBrought: number;
  totalContractValue: number;
}

export default function OnboardingVelocity() {
  // Mock data - replace with real data from API
  const [monthlyClients] = useState<MonthlyClientData[]>([
    { month: 'Ene', count: 12 },
    { month: 'Feb', count: 15 },
    { month: 'Mar', count: 18 },
    { month: 'Abr', count: 14 },
    { month: 'May', count: 20 },
    { month: 'Jun', count: 16 },
    { month: 'Jul', count: 22 },
    { month: 'Ago', count: 19 },
    { month: 'Sep', count: 17 },
    { month: 'Oct', count: 21 },
    { month: 'Nov', count: 18 },
    { month: 'Dic', count: 23 },
  ]);

  const [salesSources] = useState<SalesSource[]>([
    { id: '1', staffName: 'María González', clientsBrought: 45, totalContractValue: 1250000 },
    { id: '2', staffName: 'Juan Pérez', clientsBrought: 38, totalContractValue: 980000 },
    { id: '3', staffName: 'Ana Martínez', clientsBrought: 32, totalContractValue: 850000 },
    { id: '4', staffName: 'Carlos Rodríguez', clientsBrought: 28, totalContractValue: 720000 },
    { id: '5', staffName: 'Laura Sánchez', clientsBrought: 25, totalContractValue: 650000 },
  ]);

  // Mock average setup time (days between "Created" and "First Bill")
  const avgSetupTime = 5.2;

  const maxClients = Math.max(...monthlyClients.map((m) => m.count));

  return (
    <div className={styles.onboardingVelocity}>
      {/* New Clients per Month - Bar Chart */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Nuevos Clientes por Mes</h2>
        <div className={styles.barChart}>
          {monthlyClients.map((data, index) => {
            const height = (data.count / maxClients) * 100;
            return (
              <div key={index} className={styles.barGroup}>
                <div className={styles.barContainer}>
                  <div
                    className={styles.bar}
                    style={{ height: `${height}%` }}
                    title={`${data.month}: ${data.count} clientes`}
                  />
                </div>
                <div className={styles.barLabel}>
                  <span className={styles.monthLabel}>{data.month}</span>
                  <span className={styles.countLabel}>{data.count}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Avg Setup Time - Number Display */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Tiempo Promedio de Configuración</h2>
        <div className={styles.setupTimeDisplay}>
          <span className={styles.setupTimeValue}>{avgSetupTime}</span>
          <span className={styles.setupTimeUnit}>días</span>
          <p className={styles.setupTimeDescription}>
            Tiempo promedio entre "Creado" y "Primera Factura"
          </p>
        </div>
      </div>

      {/* Sales Source Leaderboard - Table */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Ranking de Fuentes de Ventas</h2>
        <Table
          data={salesSources}
          columns={[
            {
              key: 'staffName',
              header: 'Nombre del Staff',
              render: (source) => (
                <span className={styles.staffName}>{source.staffName}</span>
              ),
            },
            {
              key: 'clientsBrought',
              header: 'Clientes Traídos',
              render: (source) => (
                <span className={styles.clientsCount}>{source.clientsBrought}</span>
              ),
            },
            {
              key: 'totalContractValue',
              header: 'Valor Total del Contrato',
              render: (source) => (
                <span className={styles.contractValue}>
                  ${source.totalContractValue.toLocaleString()}
                </span>
              ),
            },
          ]}
          keyExtractor={(source) => source.id}
          containerClassName={styles.tableContainer}
        />
      </div>
    </div>
  );
}

