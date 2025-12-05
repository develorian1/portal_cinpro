'use client';

import { useEffect } from 'react';
import { Home } from '@/components/profiles/director/home';
import { Finanzas } from '@/components/profiles/director/finanzas';
import { Estadisticas, EstadisticasOverview } from '@/components/profiles/director/estadisticas';
import { Usuarios } from '@/components/profiles/director/usuarios';
import { Clientes } from '@/components/profiles/director/clientes';
import { Comunicacion } from '@/components/profiles/director/comunicacion';
import { CalendarioCinpro } from '@/components/profiles/director/calendario';
import { Mensajes } from '@/components/profiles/director/mensajes';
import { Tareas } from '@/components/profiles/director/tareas';
import { useNavigation } from '@/contexts/NavigationContext';
import { SectionErrorBoundary } from '@/components/shared';

export default function DirectorPage() {
  const { activeItem } = useNavigation();

  // Disable right-click
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  // Render Usuarios section
  if (activeItem === 'usuarios' || activeItem.startsWith('usuarios-')) {
    return (
      <SectionErrorBoundary sectionName="Usuarios">
        <Usuarios />
      </SectionErrorBoundary>
    );
  }

  // Render Finanzas section
  if (activeItem === 'finanzas' || activeItem.startsWith('finanzas-')) {
    return (
      <SectionErrorBoundary sectionName="Finanzas">
        <Finanzas />
      </SectionErrorBoundary>
    );
  }

  // Render Clientes section
  if (activeItem === 'clientes') {
    return (
      <SectionErrorBoundary sectionName="Clientes">
        <Clientes />
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

  // Render Tareas section
  if (activeItem === 'tareas' || activeItem.startsWith('tareas-')) {
    return (
      <SectionErrorBoundary sectionName="Tareas">
        <Tareas />
      </SectionErrorBoundary>
    );
  }

  // Render Comunicacion section
  if (activeItem === 'comunicacion') {
    return (
      <SectionErrorBoundary sectionName="Comunicación">
        <Comunicacion />
      </SectionErrorBoundary>
    );
  }

  // Render Calendario section
  if (activeItem === 'calendario') {
    return (
      <SectionErrorBoundary sectionName="Calendario">
        <CalendarioCinpro />
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

  // Default home dashboard (The Boardroom)
  return (
    <SectionErrorBoundary sectionName="Home">
      <Home />
    </SectionErrorBoundary>
  );
}


