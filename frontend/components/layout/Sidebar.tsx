'use client';

import { useState, useEffect, useMemo } from 'react';
import { ProfileType } from '@/types/profile';
import { getNavItemsForProfile } from '@/config/navigation';
import { useNavigation } from '@/contexts/NavigationContext';
import Tooltip from '@/components/shared/Tooltip';
import styles from './Sidebar.module.css';

interface SidebarProps {
  profile?: ProfileType;
  collapsed?: boolean;
  mobileOpen?: boolean;
  onToggleSidebar?: () => void;
  onMobileClose?: () => void;
}

export default function Sidebar({ 
  profile = 'director', 
  collapsed = false, 
  mobileOpen = false,
  onToggleSidebar,
  onMobileClose 
}: SidebarProps) {
  const { activeItem, setActiveItem } = useNavigation();

  // Memoize navItems to prevent recreation on every render
  const navItems = useMemo(() => getNavItemsForProfile(profile), [profile]);

  // Track which submenus are expanded
  // Auto-expand parent if a sub-item is active
  const getInitialExpandedItems = () => {
    const expanded = new Set<string>();
    navItems.forEach((item) => {
      if (item.subItems) {
        const hasActiveSubItem = item.subItems.some((subItem) => activeItem === subItem.id);
        if (hasActiveSubItem) {
          expanded.add(item.id);
        }
      }
    });
    return expanded;
  };

  const [expandedItems, setExpandedItems] = useState<Set<string>>(getInitialExpandedItems());

  // Auto-expand parent menu when a sub-item becomes active
  useEffect(() => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      navItems.forEach((item) => {
        if (item.subItems) {
          const hasActiveSubItem = item.subItems.some((subItem) => activeItem === subItem.id);
          if (hasActiveSubItem && !newSet.has(item.id)) {
            newSet.add(item.id);
          }
        }
      });
      return newSet;
    });
  }, [activeItem, navItems]);

  const isItemActive = (itemId: string, subItems?: typeof navItems[0]['subItems']) => {
    if (activeItem === itemId) return true;
    if (subItems) {
      return subItems.some((subItem) => activeItem === subItem.id);
    }
    // Special case: mark finanzas as active when any finanzas sub-page is active
    if (itemId === 'finanzas') {
      return activeItem === 'finanzas-receivables' ||
        activeItem === 'finanzas-payables' ||
        activeItem === 'finanzas-reports';
    }
    // Special case: mark estadisticas as active when any estadisticas sub-page is active
    if (itemId === 'estadisticas') {
      return activeItem === 'estadisticas-empleados' ||
        activeItem === 'estadisticas-clientes' ||
        activeItem === 'estadisticas-equipos' ||
        activeItem === 'estadisticas-finanzas' ||
        activeItem === 'estadisticas-onboarding' ||
        activeItem === 'estadisticas-collection' ||
        activeItem === 'estadisticas-support';
    }
    // Special case: mark usuarios as active when any usuarios sub-page is active
    if (itemId === 'usuarios') {
      return activeItem === 'usuarios-auxiliares' ||
        activeItem === 'usuarios-admins' ||
        activeItem === 'usuarios-jefes';
    }
    // Special case: mark client-contabilidades as active when any contabilidades sub-page is active
    if (itemId === 'client-contabilidades') {
      return activeItem === 'client-contabilidades-progress' ||
        activeItem === 'client-contabilidades-overview';
    }
    // Special case: mark client-configuracion as active when any configuracion sub-page is active
    if (itemId === 'client-configuracion') {
      return activeItem === 'client-config-certificates' ||
        activeItem === 'client-config-documents' ||
        activeItem === 'client-config-profile';
    }
    return false;
  };

  const toggleSubMenu = (itemId: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleNavItemClick = (itemId: string, hasSubItems: boolean) => {
    if (hasSubItems) {
      toggleSubMenu(itemId);
    } else {
      setActiveItem(itemId);
      // Close mobile sidebar when navigating
      if (onMobileClose) {
        onMobileClose();
      }
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div 
          className={styles.mobileOverlay} 
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}
      
      <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo}>
            <img src="/assets/logos/logo_cinpro.png" alt="CINPRO Logo" />
          </div>
          {/* Desktop toggle button */}
          {onToggleSidebar && (
            <button className={styles.toggleBtn} onClick={onToggleSidebar}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          )}
          {/* Mobile close button */}
          {onMobileClose && (
            <button className={styles.mobileCloseBtn} onClick={onMobileClose} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

      <nav className={styles.sidebarNav}>
        {navItems.map((item) => {
          const hasSubItems = item.subItems && item.subItems.length > 0;
          const isActive = isItemActive(item.id, item.subItems);
          const isExpanded = expandedItems.has(item.id);

          return (
            <div key={item.id} className={styles.navItemWrapper}>
              <Tooltip content={item.label} position="right" disabled={!collapsed}>
                <a
                  className={`${styles.navItem} ${isActive ? styles.active : ''} ${hasSubItems ? styles.hasSubItems : ''}`}
                  onClick={() => handleNavItemClick(item.id, hasSubItems)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {hasSubItems && (
                    <svg
                      className={`${styles.chevron} ${isExpanded ? styles.chevronExpanded : ''}`}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </a>
              </Tooltip>
              {hasSubItems && isExpanded && (
                <div className={styles.subMenu}>
                  {item.subItems && item.subItems.map((subItem) => (
                    <Tooltip key={subItem.id} content={subItem.label} position="right" disabled={!collapsed}>
                      <a
                        className={`${styles.subNavItem} ${activeItem === subItem.id ? styles.active : ''}`}
                        onClick={() => {
                          setActiveItem(subItem.id);
                          if (onMobileClose) onMobileClose();
                        }}
                      >
                        {subItem.icon}
                        <span>{subItem.label}</span>
                      </a>
                    </Tooltip>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className={styles.sidebarFooter}>
        <p className={styles.footerText}>Powered by Aletheia Solutions</p>
      </div>
    </aside>
    </>
  );
}

