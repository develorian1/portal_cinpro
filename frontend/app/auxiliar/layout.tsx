'use client';

import { ProfileProvider } from '@/contexts/ProfileContext';
import { ClientProvider } from '@/contexts/ClientContext';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import styles from '../layout.module.css';

export default function AuxiliarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProfileProvider
      defaultProfile="auxiliar"
      defaultUserName="Auxiliar"
      defaultUserInitials="AU"
    >
      <ClientProvider>
        <LayoutWrapper>
          <main className={styles.mainContent}>{children}</main>
        </LayoutWrapper>
      </ClientProvider>
    </ProfileProvider>
  );
}


