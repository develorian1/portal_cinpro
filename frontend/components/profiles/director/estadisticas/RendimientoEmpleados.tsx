'use client';

import { useState } from 'react';
import { Table, TableColumn } from '@/components/shared';
import styles from './RendimientoEmpleados.module.css';

type Timeframe = 'last30Days' | 'lastQuarter' | 'yearToDate';

interface StaffMember {
  id: string;
  name: string;
  role: 'Chief' | 'Accountant';
  efficiencyScore: number; // Avg time to reconcile (minutes)
  revenueGenerated: number;
  accuracy: number; // % of reconciliation_log entries rejected/corrected
  avatar?: string;
}

interface EfficiencyData {
  employee: string;
  itemsProcessed: number;
  timeSpent: number; // hours
}

interface RendimientoEmpleadosProps {
  timeframe: Timeframe;
}

export default function RendimientoEmpleados({ timeframe }: RendimientoEmpleadosProps) {
  // Mock data - replace with real data from API
  const [staffMembers] = useState<StaffMember[]>([
    {
      id: '1',
      name: 'María González',
      role: 'Chief',
      efficiencyScore: 12.5,
      revenueGenerated: 450000,
      accuracy: 98.5,
    },
    {
      id: '2',
      name: 'Carlos Rodríguez',
      role: 'Accountant',
      efficiencyScore: 15.2,
      revenueGenerated: 320000,
      accuracy: 95.2,
    },
    {
      id: '3',
      name: 'Ana Martínez',
      role: 'Chief',
      efficiencyScore: 10.8,
      revenueGenerated: 580000,
      accuracy: 99.1,
    },
    {
      id: '4',
      name: 'Luis Fernández',
      role: 'Accountant',
      efficiencyScore: 18.3,
      revenueGenerated: 280000,
      accuracy: 92.8,
    },
    {
      id: '5',
      name: 'Sofia López',
      role: 'Chief',
      efficiencyScore: 11.2,
      revenueGenerated: 520000,
      accuracy: 97.5,
    },
  ]);

  const [efficiencyData] = useState<EfficiencyData[]>([
    { employee: 'María González', itemsProcessed: 450, timeSpent: 94 },
    { employee: 'Carlos Rodríguez', itemsProcessed: 380, timeSpent: 96 },
    { employee: 'Ana Martínez', itemsProcessed: 520, timeSpent: 97 },
    { employee: 'Luis Fernández', itemsProcessed: 320, timeSpent: 98 },
    { employee: 'Sofia López', itemsProcessed: 480, timeSpent: 90 },
  ]);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const maxItems = Math.max(...efficiencyData.map((d) => d.itemsProcessed));
  const maxTime = Math.max(...efficiencyData.map((d) => d.timeSpent));

  return (
    <div className={styles.rendimientoEmpleados}>
      {/* Leaderboard Table */}
      <div className={styles.leaderboardCard}>
        <Table
          data={staffMembers}
          columns={[
            {
              key: 'name',
              header: 'Nombre del Personal',
              render: (staff) => (
                <div className={styles.staffNameCell}>
                  <div className={styles.avatar}>
                    {staff.avatar ? (
                      <img src={staff.avatar} alt={staff.name} />
                    ) : (
                      <span>{getInitials(staff.name)}</span>
                    )}
                  </div>
                  <span>{staff.name}</span>
                </div>
              ),
            },
            {
              key: 'role',
              header: 'Rol',
              render: (staff) => (
                <span className={styles.roleBadge}>{staff.role === 'Chief' ? 'Jefe' : 'Contador'}</span>
              ),
            },
            {
              key: 'efficiency',
              header: 'Puntuación de Eficiencia',
              render: (staff) => (
                <span className={styles.efficiencyScore}>
                  {staff.efficiencyScore.toFixed(1)} min
                </span>
              ),
            },
            {
              key: 'revenue',
              header: 'Ingresos Generados',
              render: (staff) => (
                <span className={styles.revenue}>
                  ${staff.revenueGenerated.toLocaleString()}
                </span>
              ),
            },
            {
              key: 'accuracy',
              header: 'Precisión',
              render: (staff) => (
                <span className={styles.accuracy}>
                  {staff.accuracy.toFixed(1)}%
                </span>
              ),
            },
          ]}
          keyExtractor={(staff) => staff.id}
          containerClassName={styles.tableContainer}
        />
      </div>

      {/* Efficiency Heatmap */}
      <div className={styles.heatmapCard}>
        <h2 className={styles.cardTitle}>Mapa de Calor de Eficiencia</h2>
        <p className={styles.cardSubtitle}>Elementos Procesados vs. Tiempo por Empleado</p>
        <div className={styles.heatmap}>
          {efficiencyData.map((data, index) => {
            const itemsWidth = (data.itemsProcessed / maxItems) * 100;
            const timeHeight = (data.timeSpent / maxTime) * 100;
            const efficiency = data.itemsProcessed / data.timeSpent; // items per hour
            const intensity = Math.min(efficiency / 10, 1); // Normalize to 0-1

            return (
              <div key={index} className={styles.heatmapItem}>
                <div className={styles.heatmapLabel}>{data.employee}</div>
                <div className={styles.heatmapBar}>
                  <div
                    className={styles.heatmapBarFill}
                    style={{
                      width: `${itemsWidth}%`,
                      height: `${timeHeight}%`,
                      opacity: 0.5 + intensity * 0.5,
                      background: `linear-gradient(135deg, var(--azure-light), var(--azure))`,
                    }}
                    title={`${data.itemsProcessed} items in ${data.timeSpent} hours`}
                  />
                </div>
                <div className={styles.heatmapStats}>
                  <span>{data.itemsProcessed} items</span>
                  <span>{data.timeSpent}h</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


