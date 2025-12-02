'use client';

import { useState } from 'react';
import { Table, TableColumn } from '@/components/shared';
import styles from './GestionStaff.module.css';

interface StaffMember {
  id: string;
  fullName: string;
  role: string;
  baseCommission: number; // 0-1 range (0.10 = 10%)
  email: string;
  telegramChatId: string;
  isActive: boolean;
}

const STAFF_ROLES = [
  { value: 'auxiliar', label: 'Auxiliar' },
  { value: 'jefe', label: 'Jefe' },
  { value: 'gerente', label: 'Gerente' },
];

export default function GestionStaff() {
  const [staff, setStaff] = useState<StaffMember[]>([
    {
      id: '1',
      fullName: 'María González',
      role: 'auxiliar',
      baseCommission: 0.10,
      email: 'maria.gonzalez@example.com',
      telegramChatId: '123456789',
      isActive: true,
    },
    {
      id: '2',
      fullName: 'Juan Pérez',
      role: 'auxiliar',
      baseCommission: 0.12,
      email: 'juan.perez@example.com',
      telegramChatId: '987654321',
      isActive: true,
    },
    {
      id: '3',
      fullName: 'Carlos Ramírez',
      role: 'jefe',
      baseCommission: 0.15,
      email: 'carlos.ramirez@example.com',
      telegramChatId: '555555555',
      isActive: true,
    },
  ]);

  const handleRoleChange = (id: string, newRole: string) => {
    setStaff(prev =>
      prev.map(member =>
        member.id === id ? { ...member, role: newRole } : member
      )
    );
    // TODO: Implement API call to update role
    console.log(`Updating staff ${id} role to ${newRole}`);
  };

  const handleCommissionChange = (id: string, newCommission: number) => {
    // Clamp value between 0 and 1
    const clampedValue = Math.max(0, Math.min(1, newCommission));
    setStaff(prev =>
      prev.map(member =>
        member.id === id ? { ...member, baseCommission: clampedValue } : member
      )
    );
    // TODO: Implement API call to update commission
    console.log(`Updating staff ${id} commission to ${clampedValue}`);
  };


  const handleToggleActive = (id: string) => {
    setStaff(prev =>
      prev.map(member =>
        member.id === id ? { ...member, isActive: !member.isActive } : member
      )
    );
    // TODO: Implement API call to update is_active
    console.log(`Toggling active status for staff ${id}`);
  };

  const formatCommission = (value: number) => {
    return `${(value * 100).toFixed(0)}%`;
  };

  const columns: TableColumn<StaffMember>[] = [
    {
      key: 'fullName',
      header: 'Nombre Completo',
      render: (member) => (
        <span className={styles.fullName}>{member.fullName}</span>
      ),
    },
    {
      key: 'role',
      header: 'Rol',
      render: (member) => (
        <select
          value={member.role}
          onChange={(e) => handleRoleChange(member.id, e.target.value)}
          className={styles.roleSelect}
        >
          {STAFF_ROLES.map(role => (
            <option key={role.value} value={role.value}>
              {role.label}
            </option>
          ))}
        </select>
      ),
    },
    {
      key: 'baseCommission',
      header: 'Comisión Base',
      render: (member) => (
        <div className={styles.commissionInput}>
          <input
            type="number"
            min="0"
            max="1"
            step="0.01"
            value={member.baseCommission}
            onChange={(e) =>
              handleCommissionChange(member.id, parseFloat(e.target.value) || 0)
            }
            className={styles.numberInput}
          />
          <span className={styles.commissionDisplay}>
            {formatCommission(member.baseCommission)}
          </span>
        </div>
      ),
    },
    {
      key: 'contact',
      header: 'Contacto',
      render: (member) => (
        <div className={styles.contactCell}>
          <div className={styles.email}>{member.email}</div>
        </div>
      ),
    },
    {
      key: 'actions',
      header: 'Acciones',
      render: (member) => (
        <div className={styles.toggleContainer}>
          <label className={styles.toggleLabel}>
            <input
              type="checkbox"
              checked={member.isActive}
              onChange={() => handleToggleActive(member.id)}
              className={styles.toggleInput}
            />
            <span className={styles.toggleSlider}></span>
            <span className={styles.toggleText}>
              {member.isActive ? 'Activo' : 'Inactivo'}
            </span>
          </label>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.gestionStaff}>
      <Table
        data={staff}
        columns={columns}
        keyExtractor={(member) => member.id}
        containerClassName={styles.tableContainer}
      />
    </div>
  );
}

