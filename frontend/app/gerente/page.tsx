'use client';

import { Mensajes } from '@/components/profiles/gerente/mensajes';
import { useNavigation } from '@/contexts/NavigationContext';
import { SectionErrorBoundary } from '@/components/shared';

export default function GerentePage() {
  const { activeItem } = useNavigation();

  // Render Mensajes section
  if (activeItem === 'mensajes') {
    return (
      <SectionErrorBoundary sectionName="Mensajes">
        <Mensajes />
      </SectionErrorBoundary>
    );
  }

  // Default dashboard
  return (
    <div>
      <h1>Gerente Dashboard</h1>
      <p>This page is under construction.</p>
    </div>
  );
}


