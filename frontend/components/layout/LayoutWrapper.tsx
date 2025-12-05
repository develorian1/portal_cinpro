'use client';

import { useState, useEffect, useRef } from 'react';
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
  const sidebarRef = useRef<HTMLElement>(null);

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

  // Track sidebar width and update CSS variable for main content positioning
  useEffect(() => {
    if (isMobile) {
      // On mobile, sidebar is hidden, so no margin needed
      document.documentElement.style.setProperty('--sidebar-actual-width', '0px');
      return;
    }

    const updateSidebarWidth = () => {
      const sidebar = sidebarRef.current;
      if (sidebar) {
        const width = sidebar.offsetWidth;
        document.documentElement.style.setProperty('--sidebar-actual-width', `${width}px`);
      }
    };

    // Initial update with a small delay to ensure sidebar is rendered
    const timeoutId = setTimeout(() => {
      updateSidebarWidth();
    }, 0);

    // Use ResizeObserver to track sidebar width changes
    let resizeObserver: ResizeObserver | null = null;
    if (sidebarRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateSidebarWidth();
      });
      resizeObserver.observe(sidebarRef.current);
    }

    // Also listen for transition end to catch width changes
    const handleTransitionEnd = (e: TransitionEvent) => {
      // Only handle width transitions
      if (e.propertyName === 'width') {
        updateSidebarWidth();
      }
    };

    if (sidebarRef.current) {
      sidebarRef.current.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
      clearTimeout(timeoutId);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (sidebarRef.current) {
        sidebarRef.current.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [collapsed, isMobile]);

  // Hide AIAssistant on mobile when in Mensajes section (to avoid UI conflict)
  const shouldShowAIAssistant = profile !== 'cliente' && !(isMobile && activeItem === 'mensajes');

  return (
    <NotificationProvider>
      <Sidebar
        ref={sidebarRef}
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

