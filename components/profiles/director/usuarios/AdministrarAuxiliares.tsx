'use client';

import { useState } from 'react';
import { Table, TableColumn } from '@/components/shared';
import styles from './AdministrarAuxiliares.module.css';

interface Auxiliar {
  id: string;
  name: string;
  avatar?: string;
  workload: number; // Active clients count
  pendingItems: number;
  chiefAssigned: string;
}

export default function AdministrarAuxiliares() {
  // Mock data - replace with real data from API
  const [auxiliares] = useState<Auxiliar[]>([
    {
      id: '1',
      name: 'María González',
      workload: 15,
      pendingItems: 8,
      chiefAssigned: 'Carlos Ramírez',
    },
    {
      id: '2',
      name: 'Juan Pérez',
      workload: 12,
      pendingItems: 3,
      chiefAssigned: 'Ana Martínez',
    },
    {
      id: '3',
      name: 'Laura Sánchez',
      workload: 18,
      pendingItems: 15,
      chiefAssigned: 'Carlos Ramírez',
    },
    {
      id: '4',
      name: 'Pedro López',
      workload: 10,
      pendingItems: 2,
      chiefAssigned: 'Ana Martínez',
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

  const handleEditProfile = (id: string) => {
    // TODO: Implement edit profile logic
    console.log('Edit profile:', id);
  };

  const handleResetPassword = (id: string) => {
    // TODO: Implement reset password logic
    console.log('Reset password:', id);
  };

  const handleViewLogs = (id: string) => {
    // TODO: Implement view logs logic
    console.log('View logs:', id);
  };

  const columns: TableColumn<Auxiliar>[] = [
    {
      key: 'name',
      header: 'Nombre',
      render: (auxiliar) => (
        <div className={styles.nameCell}>
          <div className={styles.avatar}>
            {auxiliar.avatar ? (
              <img src={auxiliar.avatar} alt={auxiliar.name} />
            ) : (
              <span>{getInitials(auxiliar.name)}</span>
            )}
          </div>
          <span className={styles.name}>{auxiliar.name}</span>
        </div>
      ),
    },
    {
      key: 'workload',
      header: 'Carga de Trabajo',
      render: (auxiliar) => (
        <span className={styles.workload}>
          {auxiliar.workload} Clientes Activos
        </span>
      ),
    },
    {
      key: 'pendingItems',
      header: 'Elementos Pendientes',
      render: (auxiliar) => (
        <span className={auxiliar.pendingItems > 10 ? styles.pendingHigh : styles.pending}>
          {auxiliar.pendingItems}
        </span>
      ),
    },
    {
      key: 'chief',
      header: 'Jefe Asignado',
      render: (auxiliar) => (
        <span className={styles.chief}>{auxiliar.chiefAssigned}</span>
      ),
    },
    {
      key: 'action',
      header: 'Acción',
      render: (auxiliar) => (
        <div className={styles.actionButtons}>
          <button
            className={styles.actionBtn}
            onClick={(e) => {
              e.stopPropagation();
              handleEditProfile(auxiliar.id);
            }}
            title="Editar Perfil"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
          <button
            className={styles.actionBtn}
            onClick={(e) => {
              e.stopPropagation();
              handleResetPassword(auxiliar.id);
            }}
            title="Restablecer Contraseña"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </button>
          <button
            className={styles.actionBtn}
            onClick={(e) => {
              e.stopPropagation();
              handleViewLogs(auxiliar.id);
            }}
            title="Ver Registros"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.auxiliares}>
      <Table
        data={auxiliares}
        columns={columns}
        keyExtractor={(auxiliar) => auxiliar.id}
        containerClassName={styles.tableContainer}
      />
    </div>
  );
}

