'use client';

import { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useNavigation } from '@/contexts/NavigationContext';
import { useClient } from '@/contexts/ClientContext';
import { ClientTab } from '@/types/accountant';

export function useWorkspaceNavigation() {
  const { setActiveItem } = useNavigation();
  const { setSelectedClientId, setActiveTab } = useClient();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const goToClientWorkspace = useCallback(
    (clientId: string, tab: ClientTab = 'sat-receivables') => {
      setActiveItem('clientes');
      setSelectedClientId(clientId);
      setActiveTab(tab);

      const params = new URLSearchParams(searchParams.toString());
      params.set('clientId', clientId);
      params.set('tab', tab);

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [setActiveItem, setSelectedClientId, setActiveTab, router, pathname, searchParams]
  );

  return { goToClientWorkspace };
}
