'use client';

import ClientHome from '@/components/profiles/cliente/ClientHome';
import PagosCINPRO from '@/components/profiles/cliente/PagosCINPRO';
import MisContabilidades from '@/components/profiles/cliente/MisContabilidades';
import Comunicacion from '@/components/profiles/cliente/Comunicacion';
import Configuracion from '@/components/profiles/cliente/Configuracion';
import { useNavigation } from '@/contexts/NavigationContext';
import { SectionErrorBoundary } from '@/components/shared';

export default function ClientePage() {
  const { activeItem } = useNavigation();

  // Render Pagos section
  if (activeItem === 'client-pagos') {
    return (
      <SectionErrorBoundary sectionName="Pagos a CINPRO">
        <PagosCINPRO />
      </SectionErrorBoundary>
    );
  }

  // Render Contabilidades section
  if (activeItem === 'client-contabilidades' || activeItem.startsWith('client-contabilidades-')) {
    return (
      <SectionErrorBoundary sectionName="Mis Contabilidades">
        <MisContabilidades />
      </SectionErrorBoundary>
    );
  }

  // Render Comunicacion section
  if (activeItem === 'client-comunicacion') {
    return (
      <SectionErrorBoundary sectionName="Comunicacion">
        <Comunicacion />
      </SectionErrorBoundary>
    );
  }

  // Render Configuracion section
  if (activeItem === 'client-configuracion' || activeItem.startsWith('client-config-')) {
    return (
      <SectionErrorBoundary sectionName="Configuracion">
        <Configuracion />
      </SectionErrorBoundary>
    );
  }

  // Default home dashboard
  return (
    <SectionErrorBoundary sectionName="Home">
      <ClientHome />
    </SectionErrorBoundary>
  );
}


