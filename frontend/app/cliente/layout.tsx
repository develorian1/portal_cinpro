'use client';

import { ProfileProvider } from '@/contexts/ProfileContext';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import styles from '../layout.module.css';

export default function ClienteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProfileProvider
      defaultProfile="cliente"
      defaultUserName="Cliente"
      defaultUserInitials="CL"
    >
      <LayoutWrapper>
        <main className={styles.mainContent}>{children}</main>
      </LayoutWrapper>
    </ProfileProvider>
  );
}


