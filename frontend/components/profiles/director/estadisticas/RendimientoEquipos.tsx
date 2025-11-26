'use client';

import { useState } from 'react';
import styles from './RendimientoEquipos.module.css';

type Timeframe = 'last30Days' | 'lastQuarter' | 'yearToDate';

interface SectorData {
  id: string;
  groupName: string;
  chief: string;
  netMargin: number;
  operationalLoad: number; // Total transactions
}

interface WorkloadData {
  group: string;
  volume: number; // Volume of invoices
}

interface RendimientoEquiposProps {
  timeframe: Timeframe;
}

export default function RendimientoEquipos({ timeframe }: RendimientoEquiposProps) {
  // Mock data - replace with real data from API
  const [sectorData] = useState<SectorData[]>([
    {
      id: '1',
      groupName: 'Medical',
      chief: 'Dr. Ana Martínez',
      netMargin: 1250000,
      operationalLoad: 15420,
    },
    {
      id: '2',
      groupName: 'Construction',
      chief: 'Ing. Carlos Rodríguez',
      netMargin: 980000,
      operationalLoad: 12850,
    },
    {
      id: '3',
      groupName: 'Retail',
      chief: 'Lic. María González',
      netMargin: 750000,
      operationalLoad: 11200,
    },
  ]);

  const [workloadData] = useState<WorkloadData[]>([
    { group: 'Medical', volume: 15420 },
    { group: 'Construction', volume: 12850 },
    { group: 'Retail', volume: 11200 },
  ]);

  const totalVolume = workloadData.reduce((sum, item) => sum + item.volume, 0);

  return (
    <div className={styles.rendimientoEquipos}>
      {/* Sector Profitability Grid */}
      <div className={styles.sectorGrid}>
        <h2 className={styles.sectionTitle}>Rentabilidad por Sector</h2>
        <div className={styles.cardsGrid}>
          {sectorData.map((sector, index) => (
            <div key={sector.id} className={styles.sectorCard}>
              <div className={styles.sectorHeader}>
                <h3 className={styles.sectorName}>{sector.groupName}</h3>
                <div className={styles.chiefInfo}>
                  <span className={styles.chiefLabel}>Chief:</span>
                  <span className={styles.chiefName}>{sector.chief}</span>
                </div>
              </div>
              <div className={styles.sectorMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>Margen Neto</span>
                  <span className={styles.metricValue}>
                    ${sector.netMargin.toLocaleString()}
                  </span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>Carga Operativa</span>
                  <span className={styles.metricValue}>
                    {sector.operationalLoad.toLocaleString()} trans.
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workload Distribution */}
      <div className={styles.workloadCard}>
        <h2 className={styles.cardTitle}>Distribución de Carga de Trabajo</h2>
        <p className={styles.cardSubtitle}>
          Volumen de facturas procesadas por grupo
        </p>
        <div className={styles.pieChartContainer}>
          <div 
            className={styles.pieChart}
            style={{
              background: `conic-gradient(
                var(--azure) 0deg ${(workloadData[0].volume / totalVolume) * 360}deg,
                var(--success) ${(workloadData[0].volume / totalVolume) * 360}deg ${((workloadData[0].volume + workloadData[1].volume) / totalVolume) * 360}deg,
                var(--warning) ${((workloadData[0].volume + workloadData[1].volume) / totalVolume) * 360}deg 360deg
              )`,
            }}
          />
          <div className={styles.pieLegend}>
            {workloadData.map((item, index) => {
              const percentage = (item.volume / totalVolume) * 100;
              const color = index === 0 ? 'var(--azure)' : index === 1 ? 'var(--success)' : 'var(--warning)';
              
              return (
                <div key={item.group} className={styles.legendItem}>
                  <div
                    className={styles.legendColor}
                    style={{ background: color }}
                  />
                  <div className={styles.legendText}>
                    <span className={styles.legendLabel}>{item.group}</span>
                    <span className={styles.legendValue}>
                      {item.volume.toLocaleString()} ({percentage.toFixed(1)}%)
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

