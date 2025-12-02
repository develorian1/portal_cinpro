'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ClientDetailView, { Client } from './ClientDetailView';
import { useClient } from '@/contexts/ClientContext';
import { useToast } from '@/contexts/ToastContext';
import { ClientTab, WorkspaceClient } from '@/types/accountant';
import styles from './ClientesWorkspace.module.css';

interface WorkspaceResponse {
  clients: WorkspaceClient[];
}

const validTabs: ClientTab[] = ['sat-receivables', 'sat-payables', 'bancos', 'conciliacion', 'reportes'];
const isClientTab = (value: string): value is ClientTab => validTabs.includes(value as ClientTab);

export default function ClientesWorkspace() {
  const [clients, setLocalClients] = useState<Client[]>([]);
  const { selectedClientId, setSelectedClientId, activeTab, setActiveTab, setClients } = useClient();
  const toast = useToast();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const initializedRef = useRef(false);

  useEffect(() => {
    let isMounted = true;
    const fetchClients = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/auxiliar/workspace');
        if (!response.ok) {
          throw new Error('Failed to fetch clients');
        }
        const data: WorkspaceResponse = await response.json();
        if (!isMounted) return;
        setLocalClients(data.clients as Client[]);
        setClients(data.clients);
      } catch (error) {
        if (isMounted) {
          toast.error('No se pudieron cargar los clientes');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchClients();

    return () => {
      isMounted = false;
    };
  }, [setClients, toast]);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    const clientIdParam = searchParams.get('clientId');
    const tabParam = searchParams.get('tab');
    if (clientIdParam) {
      setSelectedClientId(clientIdParam);
    }
    if (tabParam && isClientTab(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams, setActiveTab, setSelectedClientId]);

  const syncUrl = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedClientId) {
      params.set('clientId', selectedClientId);
    } else {
      params.delete('clientId');
    }
    params.set('tab', activeTab);
    const newQuery = params.toString();
    if (newQuery === searchParams.toString()) return;
    router.replace(`${pathname}?${newQuery}`, { scroll: false });
  }, [activeTab, pathname, router, searchParams, selectedClientId]);

  useEffect(() => {
    syncUrl();
  }, [syncUrl]);

  if (isLoading) {
    return (
      <div className={styles.loadingState}>
        <p>Cargando clientes...</p>
      </div>
    );
  }

  return (
    <div className={styles.clientesWorkspace}>
      <ClientDetailView
        clients={clients}
        selectedClientId={selectedClientId}
        onSelectClient={setSelectedClientId}
      />
    </div>
  );
}
