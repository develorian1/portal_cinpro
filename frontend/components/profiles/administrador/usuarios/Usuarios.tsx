'use client';

import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import { EstructuraEquipos, GestionStaff, AccesosCliente } from './tabs';
import styles from './Usuarios.module.css';

export default function Usuarios() {
  const { activeItem, setActiveItem } = useNavigation();

  // Set default tab when usuarios is clicked directly
  useEffect(() => {
    if (activeItem === 'usuarios') {
      setActiveItem('usuarios-estructura');
    }
  }, [activeItem, setActiveItem]);

  // Determine which tab to show based on activeItem
  const getActiveTab = () => {
    if (activeItem === 'usuarios-estructura') return 'estructura';
    if (activeItem === 'usuarios-gestion') return 'gestion';
    if (activeItem === 'usuarios-accesos') return 'accesos';
    // Default to estructura if usuarios is clicked directly
    return 'estructura';
  };

  const activeTab = getActiveTab();

  return (
    <div className={styles.usuarios}>
      <div className={styles.tabContent}>
        {activeTab === 'estructura' && <EstructuraEquipos />}
        {activeTab === 'gestion' && <GestionStaff />}
        {activeTab === 'accesos' && <AccesosCliente />}
      </div>
    </div>
  );
}

