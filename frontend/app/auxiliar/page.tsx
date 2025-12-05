'use client';

import { HomeDashboard } from '@/components/profiles/auxiliar/dashboard';
import { ClientesWorkspace } from '@/components/profiles/auxiliar/clientes';
import { Mensajes } from '@/components/profiles/auxiliar/mensajes';
import { Calendario } from '@/components/profiles/auxiliar/calendario';
import { PedidosFacturas } from '@/components/profiles/auxiliar/pedidos-facturas';
import { ProcesamientoPDF } from '@/components/profiles/auxiliar/procesamiento-pdf';
import { Tareas } from '@/components/profiles/auxiliar/tareas';
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

  // Render Pedidos de Facturas section
  if (activeItem === 'pedidos-facturas') {
    return (
      <SectionErrorBoundary sectionName="Pedidos de Facturas">
        <PedidosFacturas />
      </SectionErrorBoundary>
    );
  }

  // Render PDF Bancario section
  if (activeItem === 'pdf-bancario') {
    return (
      <SectionErrorBoundary sectionName="PDF Bancario">
        <ProcesamientoPDF />
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

  // Render Mensajes section
  if (activeItem === 'mensajes') {
    return (
      <SectionErrorBoundary sectionName="Mensajes">
        <Mensajes />
      </SectionErrorBoundary>
    );
  }

  if (activeItem === 'calendario') {
    return (
      <SectionErrorBoundary sectionName="Calendario">
        <Calendario />
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


