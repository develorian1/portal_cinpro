'use client';

import { useState } from 'react';
import styles from './AdministrarJefes.module.css';

interface Jefe {
  id: string;
  name: string;
  avatar?: string;
  groupManaged: string;
  teamSize: number;
  performance: string; // e.g., "Group Revenue: $500k/mo"
}

export default function AdministrarJefes() {
  // Mock data - replace with real data from API
  const [jefes] = useState<Jefe[]>([
    {
      id: '1',
      name: 'Carlos Ramírez',
      groupManaged: 'Medical Group',
      teamSize: 5,
      performance: 'Group Revenue: $500k/mo',
    },
    {
      id: '2',
      name: 'Ana Martínez',
      groupManaged: 'Industrial Group',
      teamSize: 4,
      performance: 'Group Revenue: $420k/mo',
    },
    {
      id: '3',
      name: 'Luis García',
      groupManaged: 'Education Group',
      teamSize: 3,
      performance: 'Group Revenue: $380k/mo',
    },
    {
      id: '4',
      name: 'Patricia López',
      groupManaged: 'Retail Group',
      teamSize: 6,
      performance: 'Group Revenue: $650k/mo',
    },
  ]);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const getGroupBadgeClass = (groupName: string) => {
    const groupLower = groupName.toLowerCase();
    if (groupLower.includes('medical')) return 'medical';
    if (groupLower.includes('industrial')) return 'industrial';
    if (groupLower.includes('education')) return 'education';
    if (groupLower.includes('retail')) return 'retail';
    return ''; // Default to base style if no match
  };

  const handleReassignGroup = (id: string) => {
    // TODO: Implement reassign group logic
    console.log('Reassign group:', id);
  };

  const handleEditCommissionRate = (id: string) => {
    // TODO: Implement edit commission rate logic
    console.log('Edit commission rate:', id);
  };

  return (
    <div className={styles.jefes}>
      <div className={styles.cardsGrid}>
        {jefes.map((jefe) => (
          <div key={jefe.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.chiefInfo}>
                <div className={styles.avatar}>
                  {jefe.avatar ? (
                    <img src={jefe.avatar} alt={jefe.name} />
                  ) : (
                    <span>{getInitials(jefe.name)}</span>
                  )}
                </div>
                <div className={styles.chiefDetails}>
                  <h3 className={styles.chiefName}>{jefe.name}</h3>
                  <span className={`${styles.groupBadge} ${styles[getGroupBadgeClass(jefe.groupManaged)]}`}>
                    {jefe.groupManaged}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Tamaño del Equipo</span>
                <span className={styles.statValue}>
                  Gestionando {jefe.teamSize} Auxiliares
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Rendimiento</span>
                <span className={styles.statValue}>{jefe.performance}</span>
              </div>
            </div>

            <div className={styles.cardActions}>
              <button
                className={styles.actionBtn}
                onClick={() => handleReassignGroup(jefe.id)}
              >
                Reasignar Grupo
              </button>
              <button
                className={styles.actionBtn}
                onClick={() => handleEditCommissionRate(jefe.id)}
              >
                Editar Tasa de Comisión
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

