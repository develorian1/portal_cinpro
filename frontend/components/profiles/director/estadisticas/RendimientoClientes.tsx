'use client';

import { useState } from 'react';
import { Table, TableColumn } from '@/components/shared';
import styles from './RendimientoClientes.module.css';

type Timeframe = 'last30Days' | 'lastQuarter' | 'yearToDate';

interface TopClient {
  id: string;
  name: string;
  annualContractValue: number;
}

interface ChurnRiskClient {
  id: string;
  name: string;
  avgDaysToPay: number;
  totalLifetimeValue: number;
}

interface RendimientoClientesProps {
  timeframe: Timeframe;
}

export default function RendimientoClientes({ timeframe }: RendimientoClientesProps) {
  // Mock data - replace with real data from API
  const [topClients] = useState<TopClient[]>([
    { id: '1', name: 'Hospital San José', annualContractValue: 1200000 },
    { id: '2', name: 'Constructora ABC', annualContractValue: 980000 },
    { id: '3', name: 'Retail Corp', annualContractValue: 850000 },
    { id: '4', name: 'Clínica Central', annualContractValue: 720000 },
    { id: '5', name: 'Obras Públicas SA', annualContractValue: 650000 },
    { id: '6', name: 'Supermercado XYZ', annualContractValue: 580000 },
    { id: '7', name: 'Hospital Regional', annualContractValue: 520000 },
    { id: '8', name: 'Constructora Delta', annualContractValue: 480000 },
    { id: '9', name: 'Tienda Nacional', annualContractValue: 420000 },
    { id: '10', name: 'Centro Médico', annualContractValue: 380000 },
  ]);

  const [churnRiskClients] = useState<ChurnRiskClient[]>([
    { id: '1', name: 'Cliente A', avgDaysToPay: 75, totalLifetimeValue: 250000 },
    { id: '2', name: 'Cliente B', avgDaysToPay: 68, totalLifetimeValue: 180000 },
    { id: '3', name: 'Cliente C', avgDaysToPay: 82, totalLifetimeValue: 320000 },
    { id: '4', name: 'Cliente D', avgDaysToPay: 71, totalLifetimeValue: 150000 },
    { id: '5', name: 'Cliente E', avgDaysToPay: 90, totalLifetimeValue: 280000 },
  ]);

  const maxValue = Math.max(...topClients.map((c) => c.annualContractValue));

  return (
    <div className={styles.rendimientoClientes}>
      {/* Top Clients Chart */}
      <div className={styles.topClientsCard}>
        <h2 className={styles.cardTitle}>Top 10 Clientes por Valor de Contrato Anual</h2>
        <div className={styles.barChart}>
          {topClients.map((client) => {
            const height = (client.annualContractValue / maxValue) * 100;
            return (
              <div key={client.id} className={styles.barGroup}>
                <div className={styles.barContainer}>
                  <div
                    className={styles.bar}
                    style={{ height: `${height}%` }}
                    title={`${client.name}: $${client.annualContractValue.toLocaleString()}`}
                  />
                </div>
                <div className={styles.barLabel}>
                  <span className={styles.clientName}>{client.name}</span>
                  <span className={styles.clientValue}>
                    ${(client.annualContractValue / 1000).toFixed(0)}k
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Churn Risk / Late Payers */}
      <div className={styles.churnRiskCard}>
        <Table
          data={churnRiskClients}
          columns={[
            {
              key: 'name',
              header: 'Nombre del Cliente',
              render: (client) => (
                <span className={styles.clientName}>{client.name}</span>
              ),
            },
            {
              key: 'daysToPay',
              header: 'Días Promedio para Pagar',
              render: (client) => (
                <span
                  className={`${styles.daysToPay} ${
                    client.avgDaysToPay > 75 ? styles.highRisk : styles.mediumRisk
                  }`}
                >
                  {client.avgDaysToPay} días
                </span>
              ),
            },
            {
              key: 'lifetimeValue',
              header: 'Valor Total de Vida',
              render: (client) => (
                <span className={styles.lifetimeValue}>
                  ${client.totalLifetimeValue.toLocaleString()}
                </span>
              ),
            },
          ]}
          keyExtractor={(client) => client.id}
          containerClassName={styles.tableContainer}
        />
      </div>
    </div>
  );
}


