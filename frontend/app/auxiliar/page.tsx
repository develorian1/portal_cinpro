'use client';

import { HomeDashboard } from '@/components/profiles/auxiliar/dashboard';
import { ClientesWorkspace } from '@/components/profiles/auxiliar/clientes';
import { Mensajes } from '@/components/profiles/auxiliar/mensajes';
import { useNavigation } from '@/contexts/NavigationContext';
import { SectionErrorBoundary } from '@/components/shared';

export default function AuxiliarPage() {
  const { activeItem } = useNavigation();

  // Render Clientes section (The Workspace)
  if (activeItem === 'clientes' || activeItem.startsWith('clientes-')) {
    return (
      <SectionErrorBoundary sectionName="The Workspace">
        <ClientesWorkspace />
      </SectionErrorBoundary>
    );
  }

  // Render Mensajes section
  if (activeItem === 'mensajes') {
    return (
      <SectionErrorBoundary sectionName="Mensajes">
        <Mensajes />
      </SectionErrorBoundary>
    );
  }

  // Default home dashboard
  return (
    <SectionErrorBoundary sectionName="Home">
      <HomeDashboard />
    </SectionErrorBoundary>
  );
}


