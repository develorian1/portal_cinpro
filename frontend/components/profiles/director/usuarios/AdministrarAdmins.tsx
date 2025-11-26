'use client';

import { useState } from 'react';
import { Table, TableColumn } from '@/components/shared';
import styles from './AdministrarAdmins.module.css';

interface Admin {
  id: string;
  name: string;
  avatar?: string;
  role: string;
  lastActive: string;
  keyActivity: string;
}

export default function AdministrarAdmins() {
  // Mock data - replace with real data from API
  const [admins] = useState<Admin[]>([
    {
      id: '1',
      name: 'Roberto Fernández',
      role: 'General Admin',
      lastActive: '2024-01-15 14:30',
      keyActivity: 'Verified 45 payments this month',
    },
    {
      id: '2',
      name: 'Sofía Martínez',
      role: 'General Admin',
      lastActive: '2024-01-15 10:15',
      keyActivity: 'Processed 120 invoices this month',
    },
    {
      id: '3',
      name: 'Diego Hernández',
      role: 'General Admin',
      lastActive: '2024-01-14 18:45',
      keyActivity: 'Updated 30 client records this month',
    },
    {
      id: '4',
      name: 'Carmen Ruiz',
      role: 'General Admin',
      lastActive: '2024-01-15 09:20',
      keyActivity: 'Approved 25 expense reports this month',
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

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('es-MX', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleEditProfile = (id: string) => {
    // TODO: Implement edit profile logic
    console.log('Edit profile:', id);
  };

  const handleRevokeAccess = (id: string) => {
    // TODO: Implement revoke access logic
    if (confirm('¿Estás seguro de que deseas revocar el acceso de este administrador?')) {
      console.log('Revoke access:', id);
    }
  };

  const columns: TableColumn<Admin>[] = [
    {
      key: 'name',
      header: 'Nombre',
      render: (admin) => (
        <div className={styles.nameCell}>
          <div className={styles.avatar}>
            {admin.avatar ? (
              <img src={admin.avatar} alt={admin.name} />
            ) : (
              <span>{getInitials(admin.name)}</span>
            )}
          </div>
          <span className={styles.name}>{admin.name}</span>
        </div>
      ),
    },
    {
      key: 'role',
      header: 'Rol',
      render: (admin) => (
        <span className={styles.role}>{admin.role}</span>
      ),
    },
    {
      key: 'lastActive',
      header: 'Última Actividad',
      render: (admin) => (
        <span className={styles.lastActive}>
          {formatTimestamp(admin.lastActive)}
        </span>
      ),
    },
    {
      key: 'activity',
      header: 'Actividad Clave',
      render: (admin) => (
        <span className={styles.activity}>{admin.keyActivity}</span>
      ),
    },
    {
      key: 'action',
      header: 'Acción',
      render: (admin) => (
        <div className={styles.actionButtons}>
          <button
            className={styles.actionBtn}
            onClick={(e) => {
              e.stopPropagation();
              handleEditProfile(admin.id);
            }}
            title="Editar Perfil"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
          <button
            className={`${styles.actionBtn} ${styles.revokeBtn}`}
            onClick={(e) => {
              e.stopPropagation();
              handleRevokeAccess(admin.id);
            }}
            title="Revocar Acceso"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.admins}>
      <Table
        data={admins}
        columns={columns}
        keyExtractor={(admin) => admin.id}
        containerClassName={styles.tableContainer}
      />
    </div>
  );
}

