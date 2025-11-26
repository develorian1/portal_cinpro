'use client';

import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import OnboardingVelocity from './OnboardingVelocity';
import CollectionEfficiency from './CollectionEfficiency';
import SupportLoad from './SupportLoad';
import styles from './Estadisticas.module.css';

type EstadisticasTab = 'onboarding' | 'collection' | 'support';

export default function Estadisticas() {
  const { activeItem, setActiveItem } = useNavigation();

  // Set default tab when estadisticas is clicked directly
  useEffect(() => {
    if (activeItem === 'estadisticas') {
      setActiveItem('estadisticas-onboarding');
    }
  }, [activeItem, setActiveItem]);

  // Determine which component to show based on activeItem
  const getActiveTab = (): EstadisticasTab => {
    if (activeItem === 'estadisticas-onboarding') return 'onboarding';
    if (activeItem === 'estadisticas-collection') return 'collection';
    if (activeItem === 'estadisticas-support') return 'support';
    return 'onboarding';
  };

  const activeTab = getActiveTab();

  const renderContent = () => {
    switch (activeTab) {
      case 'onboarding':
        return <OnboardingVelocity />;
      case 'collection':
        return <CollectionEfficiency />;
      case 'support':
        return <SupportLoad />;
      default:
        return <OnboardingVelocity />;
    }
  };

  return (
    <div className={styles.estadisticas}>
      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
}

