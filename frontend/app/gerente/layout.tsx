'use client';

import { ProfileProvider } from '@/contexts/ProfileContext';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import styles from '../layout.module.css';

export default function GerenteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProfileProvider
      defaultProfile="gerente"
      defaultUserName="Gerente"
      defaultUserInitials="GE"
    >
      <LayoutWrapper>
        <main className={styles.mainContent}>{children}</main>
      </LayoutWrapper>
    </ProfileProvider>
  );
}


