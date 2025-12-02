'use client';

import { useState, useEffect } from 'react';
import { useProfile } from '@/contexts/ProfileContext';
import { useNavigation } from '@/contexts/NavigationContext';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { AIAssistant } from '@/components/shared';
import { NotificationProvider } from '@/contexts/NotificationContext';
import styles from '../../app/layout.module.css';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { profile, userName, userInitials } = useProfile();
  const { activeItem } = useNavigation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile sidebar when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileOpen) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Listen for custom event to open mobile sidebar (from Mensajes component)
  useEffect(() => {
    const handleOpenSidebar = () => {
      setMobileOpen(true);
    };

    window.addEventListener('openMobileSidebar', handleOpenSidebar);
    return () => window.removeEventListener('openMobileSidebar', handleOpenSidebar);
  }, []);

  // Hide AIAssistant on mobile when in Mensajes section (to avoid UI conflict)
  const shouldShowAIAssistant = profile !== 'cliente' && !(isMobile && activeItem === 'mensajes');

  return (
    <NotificationProvider>
      <Sidebar
        profile={profile}
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onToggleSidebar={() => setCollapsed(!collapsed)}
        onMobileClose={() => setMobileOpen(false)}
      />
      <div className={`${styles.mainWrapper} ${collapsed ? styles.mainWrapperCollapsed : ''}`}>
        <Topbar
          profile={profile}
          userName={userName}
          userInitials={userInitials}
          onMobileMenuToggle={() => setMobileOpen(!mobileOpen)}
        />
        {children}
      </div>
      {shouldShowAIAssistant && <AIAssistant />}
    </NotificationProvider>
  );
}

