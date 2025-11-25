'use client';

import { useState } from 'react';
import styles from './FinanzasGenerales.module.css';

type Timeframe = 'last30Days' | 'lastQuarter' | 'yearToDate';

interface GrowthData {
  month: string;
  revenueGrowth: number; // %
  newClients: number;
}

interface CostData {
  category: string;
  amount: number;
  color: string;
}

interface FinanzasGeneralesProps {
  timeframe: Timeframe;
}

export default function FinanzasGenerales({ timeframe }: FinanzasGeneralesProps) {
  // Mock data - replace with real data from API
  const [growthData] = useState<GrowthData[]>([
    { month: 'Jan', revenueGrowth: 5.2, newClients: 8 },
    { month: 'Feb', revenueGrowth: 7.8, newClients: 12 },
    { month: 'Mar', revenueGrowth: 4.5, newClients: 10 },
    { month: 'Apr', revenueGrowth: 9.2, newClients: 15 },
    { month: 'May', revenueGrowth: 6.8, newClients: 11 },
    { month: 'Jun', revenueGrowth: 8.5, newClients: 14 },
    { month: 'Jul', revenueGrowth: 7.2, newClients: 13 },
    { month: 'Aug', revenueGrowth: 10.1, newClients: 16 },
    { month: 'Sep', revenueGrowth: 8.9, newClients: 18 },
    { month: 'Oct', revenueGrowth: 9.5, newClients: 17 },
    { month: 'Nov', revenueGrowth: 11.2, newClients: 20 },
    { month: 'Dec', revenueGrowth: 12.5, newClients: 22 },
  ]);

  const [costData] = useState<CostData[]>([
    { category: 'Nómina', amount: 450000, color: 'var(--azure)' },
    { category: 'Comisiones', amount: 320000, color: 'var(--success)' },
    { category: 'Software/Servidor', amount: 85000, color: 'var(--warning)' },
    { category: 'Oficina/Renta', amount: 120000, color: 'var(--danger)' },
  ]);

  const maxGrowth = Math.max(...growthData.map((d) => d.revenueGrowth));
  const maxClients = Math.max(...growthData.map((d) => d.newClients));
  const totalCosts = costData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className={styles.finanzasGenerales}>
      {/* Growth Trajectory */}
      <div className={styles.growthCard}>
        <h2 className={styles.cardTitle}>Trayectoria de Crecimiento</h2>
        <div className={styles.growthChart}>
          <div className={styles.chartContainer}>
            <div className={styles.chartYAxis}>
              <span>Crecimiento de Ingresos %</span>
            </div>
            <div className={styles.chartArea}>
              <div className={styles.chartGrid}>
                {growthData.map((data, index) => {
                  const growthHeight = (data.revenueGrowth / maxGrowth) * 100;
                  const clientsHeight = (data.newClients / maxClients) * 100;
                  
                  return (
                    <div key={index} className={styles.chartBarGroup}>
                      <div className={styles.barContainer}>
                        <div
                          className={styles.growthBar}
                          style={{ height: `${growthHeight}%` }}
                          title={`${data.month}: ${data.revenueGrowth}% crecimiento`}
                        />
                        <div
                          className={styles.clientsBar}
                          style={{ height: `${clientsHeight}%` }}
                          title={`${data.month}: ${data.newClients} clientes nuevos`}
                        />
                      </div>
                      <div className={styles.monthLabel}>{data.month}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.chartLegend}>
            <div className={styles.legendItem}>
              <div className={styles.legendColor} style={{ background: 'var(--azure)' }} />
              <span>Crecimiento de Ingresos (%)</span>
            </div>
            <div className={styles.legendItem}>
              <div className={styles.legendColor} style={{ background: 'var(--success)' }} />
              <span>Adquisición de Nuevos Clientes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Analysis */}
      <div className={styles.costCard}>
        <h2 className={styles.cardTitle}>Análisis de Costos</h2>
        <p className={styles.cardSubtitle}>
          Distribución de costos relativos a los ingresos
        </p>
        <div className={styles.costChart}>
          <div className={styles.stackedBars}>
            {costData.map((cost, index) => {
              const width = (cost.amount / totalCosts) * 100;
              const offset = costData
                .slice(0, index)
                .reduce((sum, item) => sum + (item.amount / totalCosts) * 100, 0);
              
              return (
                <div
                  key={cost.category}
                  className={styles.stackedBar}
                  style={{
                    width: `${width}%`,
                    background: cost.color,
                    left: `${offset}%`,
                  }}
                  title={`${cost.category}: $${cost.amount.toLocaleString()}`}
                />
              );
            })}
          </div>
          <div className={styles.costBreakdown}>
            {costData.map((cost) => {
              const percentage = (cost.amount / totalCosts) * 100;
              return (
                <div key={cost.category} className={styles.costItem}>
                  <div className={styles.costItemHeader}>
                    <div
                      className={styles.costColor}
                      style={{ background: cost.color }}
                    />
                    <span className={styles.costCategory}>{cost.category}</span>
                  </div>
                  <div className={styles.costItemValues}>
                    <span className={styles.costAmount}>
                      ${cost.amount.toLocaleString()}
                    </span>
                    <span className={styles.costPercentage}>
                      {percentage.toFixed(1)}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}



