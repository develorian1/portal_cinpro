'use client';

import { useState } from 'react';
import { useProfile } from '@/contexts/ProfileContext';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { AIAssistant } from '@/components/shared';
import styles from '../../app/layout.module.css';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { profile, userName, userInitials } = useProfile();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Sidebar 
        profile={profile} 
        collapsed={collapsed}
        onToggleSidebar={() => setCollapsed(!collapsed)}
      />
      <div className={`${styles.mainWrapper} ${collapsed ? styles.mainWrapperCollapsed : ''}`}>
        <Topbar 
          profile={profile} 
          userName={userName} 
          userInitials={userInitials}
        />
        {children}
      </div>
      <AIAssistant />
    </>
  );
}

