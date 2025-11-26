'use client';

import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import VerificarPagos from './VerificarPagos';
import Cobranza from './Cobranza';
import CertificadosSAT from './CertificadosSAT';
import styles from './Finanzas.module.css';

type FinanzasTab = 'verificar-pagos' | 'cobranza' | 'certificados';

export default function Finanzas() {
  const { activeItem, setActiveItem } = useNavigation();

  // Set default tab when finanzas is clicked directly
  useEffect(() => {
    if (activeItem === 'finanzas') {
      setActiveItem('finanzas-verificar-pagos');
    }
  }, [activeItem, setActiveItem]);

  // Determine which component to show based on activeItem
  const getActiveTab = (): FinanzasTab => {
    if (activeItem === 'finanzas-verificar-pagos') return 'verificar-pagos';
    if (activeItem === 'finanzas-cobranza') return 'cobranza';
    if (activeItem === 'finanzas-certificados') return 'certificados';
    return 'verificar-pagos';
  };

  const activeTab = getActiveTab();

  const renderContent = () => {
    switch (activeTab) {
      case 'verificar-pagos':
        return <VerificarPagos />;
      case 'cobranza':
        return <Cobranza />;
      case 'certificados':
        return <CertificadosSAT />;
      default:
        return <VerificarPagos />;
    }
  };

  return (
    <div className={styles.finanzas}>
      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
}

