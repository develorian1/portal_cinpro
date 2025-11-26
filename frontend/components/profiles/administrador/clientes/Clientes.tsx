'use client';

import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import Directorio from './Directorio';
import NuevoCliente from './NuevoCliente';
import CertificadosSAT from './CertificadosSAT';
import styles from './Clientes.module.css';

export default function Clientes() {
  const { activeItem, setActiveItem } = useNavigation();

  // Set default tab when clientes is clicked directly
  useEffect(() => {
    if (activeItem === 'clientes') {
      setActiveItem('clientes-directorio');
    }
  }, [activeItem, setActiveItem]);

  // Determine which tab to show based on activeItem
  const getActiveTab = () => {
    if (activeItem === 'clientes-directorio') return 'directorio';
    if (activeItem === 'clientes-nuevo-cliente') return 'nuevo-cliente';
    if (activeItem === 'clientes-certificados') return 'certificados';
    // Default to directorio if clientes is clicked directly
    return 'directorio';
  };

  const activeTab = getActiveTab();

  return (
    <div className={styles.clientes}>
      <div className={styles.tabContent}>
        {activeTab === 'directorio' && <Directorio />}
        {activeTab === 'nuevo-cliente' && <NuevoCliente />}
        {activeTab === 'certificados' && <CertificadosSAT />}
      </div>
    </div>
  );
}

