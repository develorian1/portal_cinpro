'use client';

import { ProfileProvider } from '@/contexts/ProfileContext';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import styles from '../layout.module.css';

export default function DirectorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProfileProvider
      defaultProfile="director"
      defaultUserName="Director Martinez"
      defaultUserInitials="DM"
    >
      <LayoutWrapper>
        <main className={styles.mainContent}>{children}</main>
      </LayoutWrapper>
    </ProfileProvider>
  );
}


