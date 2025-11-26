'use client';

import { ProfileProvider } from '@/contexts/ProfileContext';
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
      <LayoutWrapper>
        <main className={styles.mainContent}>{children}</main>
      </LayoutWrapper>
    </ProfileProvider>
  );
}


