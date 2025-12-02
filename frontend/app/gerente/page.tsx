'use client';

import { Home } from '@/components/profiles/gerente/home';
import { Clientes } from '@/components/profiles/gerente/clientes';
import { Supervision } from '@/components/profiles/gerente/supervision';
import { Estadisticas } from '@/components/profiles/gerente/estadisticas';
import { Comunicacion } from '@/components/profiles/gerente/comunicacion';
import { useNavigation } from '@/contexts/NavigationContext';
import { SectionErrorBoundary } from '@/components/shared';

export default function GerentePage() {
  const { activeItem } = useNavigation();

  // Render Clientes section
  if (activeItem === 'clientes' || activeItem.startsWith('clientes-')) {
    return (
      <SectionErrorBoundary sectionName="Clientes">
        <Clientes />
      </SectionErrorBoundary>
    );
  }

  // Render Supervision section
  if (activeItem === 'supervision' || activeItem.startsWith('supervision-')) {
    return (
      <SectionErrorBoundary sectionName="Supervisión">
        <Supervision />
      </SectionErrorBoundary>
    );
  }

  // Render Estadisticas section
  if (activeItem === 'estadisticas' || activeItem.startsWith('estadisticas-')) {
    return (
      <SectionErrorBoundary sectionName="Estadísticas">
        <Estadisticas />
      </SectionErrorBoundary>
    );
  }

  // Render Mensajes/Comunicacion section
  if (activeItem === 'mensajes' || activeItem.startsWith('mensajes-')) {
    return (
      <SectionErrorBoundary sectionName="Comunicación">
        <Comunicacion />
      </SectionErrorBoundary>
    );
  }

  // Default home dashboard (Group Dashboard)
  return (
    <SectionErrorBoundary sectionName="Home">
      <Home />
    </SectionErrorBoundary>
  );
}

