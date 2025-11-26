'use client';

import { ProfileProvider } from '@/contexts/ProfileContext';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import styles from '../layout.module.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProfileProvider
      defaultProfile="administrador"
      defaultUserName="Administrador"
      defaultUserInitials="AD"
    >
      <LayoutWrapper>
        <main className={styles.mainContent}>{children}</main>
      </LayoutWrapper>
    </ProfileProvider>
  );
}


