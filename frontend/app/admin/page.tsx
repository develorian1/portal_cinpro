'use client';

import { Usuarios } from '@/components/profiles/administrador/usuarios';
import { useNavigation } from '@/contexts/NavigationContext';
import { SectionErrorBoundary } from '@/components/shared';

export default function AdminPage() {
  const { activeItem } = useNavigation();

  // Render Usuarios section
  if (activeItem === 'usuarios' || 
      activeItem === 'usuarios-estructura' || 
      activeItem === 'usuarios-gestion' || 
      activeItem === 'usuarios-accesos') {
    return (
      <SectionErrorBoundary sectionName="Administrar Usuarios">
        <Usuarios />
      </SectionErrorBoundary>
    );
  }

  // TODO: Add other sections as they are implemented
  // - Home
  // - Clientes
  // - Finanzas
  // - Estadísticas
  // - Comunicación
  // - Mensajes

  // Default home dashboard
  return (
    <SectionErrorBoundary sectionName="Home">
      <div>
        <h1>Administrador Dashboard</h1>
        <p>This page is under construction.</p>
      </div>
    </SectionErrorBoundary>
  );
}
