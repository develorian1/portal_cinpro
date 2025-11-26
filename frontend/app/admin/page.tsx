'use client';

import { Usuarios } from '@/components/profiles/administrador/usuarios';
import { Clientes } from '@/components/profiles/administrador/clientes';
import { Finanzas } from '@/components/profiles/administrador/finanzas';
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

  // Render Clientes section
  if (activeItem === 'clientes' || 
      activeItem === 'clientes-directorio' || 
      activeItem === 'clientes-nuevo-cliente' || 
      activeItem === 'clientes-certificados') {
    return (
      <SectionErrorBoundary sectionName="Clientes">
        <Clientes />
      </SectionErrorBoundary>
    );
  }

  // Render Finanzas section
  if (activeItem === 'finanzas' || 
      activeItem === 'finanzas-verificar-pagos' || 
      activeItem === 'finanzas-cobranza' ||
      activeItem === 'finanzas-certificados') {
    return (
      <SectionErrorBoundary sectionName="Finanzas">
        <Finanzas />
      </SectionErrorBoundary>
    );
  }

  // TODO: Add other sections as they are implemented
  // - Home
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
