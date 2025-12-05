'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ProfileType } from '@/types/profile';
import { PROFILE_TYPES } from '@/types/profile';
import { useNavigation } from '@/contexts/NavigationContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useClient } from '@/contexts/ClientContext';
import { useNotifications } from '@/contexts/NotificationContext';
import { useWorkspaceNavigation } from '@/hooks/useWorkspaceNavigation';
import { ClientTab } from '@/types/accountant';
import {
  FinanzasDropdown,
  EstadisticasDropdown,
  UsuariosDropdown,
  AdminUsuariosDropdown,
  AdminClientesDropdown,
  AdminFinanzasDropdown,
  ClientContabilidadesDropdown,
  ClientConfiguracionDropdown,
  AuxiliarClientesDropdown,
  GerenteSupervisionDropdown,
  GerenteEstadisticasDropdown,
} from '@/components/shared';
import styles from './Topbar.module.css';

type UserStatus = 'activo' | 'ausente' | 'inactivo';

interface TopbarProps {
  profile?: ProfileType;
  userName?: string;
  userInitials?: string;
  onMobileMenuToggle?: () => void;
}

interface SearchResult {
  id: string;
  label: string;
  description: string;
  type: 'client' | 'invoice' | 'expense';
  clientId: string;
  tab: ClientTab;
}

export default function Topbar({
  profile = 'director',
  userName,
  userInitials,
  onMobileMenuToggle,
}: TopbarProps) {
  const { activeItem } = useNavigation();
  const { theme, toggleTheme } = useTheme();
  const { goToClientWorkspace } = useWorkspaceNavigation();
  const { selectedClientId, clients } = useClient();
  const { notifications, unreadCount, markRead, markAllRead, removeNotification } = useNotifications();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const profileDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [userStatus, setUserStatus] = useState<UserStatus>('activo');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const searchBlurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isGerentePage = profile === 'gerente';

  const isFinanzasPage =
    activeItem === 'finanzas' ||
    activeItem === 'finanzas-aging' ||
    activeItem === 'finanzas-debtors' ||
    activeItem === 'finanzas-commissions' ||
    activeItem === 'finanzas-expenses' ||
    activeItem === 'finanzas-reports';

  const isAdminClientesPage =
    (activeItem === 'clientes' ||
      activeItem === 'clientes-directorio' ||
      activeItem === 'clientes-nuevo-cliente' ||
      activeItem === 'clientes-certificados') &&
    profile === 'administrador';

  const isEstadisticasPage =
    activeItem === 'estadisticas' ||
    activeItem === 'estadisticas-empleados' ||
    activeItem === 'estadisticas-clientes' ||
    activeItem === 'estadisticas-equipos' ||
    activeItem === 'estadisticas-finanzas' ||
    activeItem === 'estadisticas-onboarding' ||
    activeItem === 'estadisticas-collection' ||
    activeItem === 'estadisticas-support';

  const isUsuariosPage =
    activeItem === 'usuarios' ||
    activeItem === 'usuarios-auxiliares' ||
    activeItem === 'usuarios-admins' ||
    activeItem === 'usuarios-jefes';

  const isAdminUsuariosPage =
    activeItem === 'usuarios' ||
    activeItem === 'usuarios-estructura' ||
    activeItem === 'usuarios-gestion' ||
    activeItem === 'usuarios-accesos';

  const isAdminFinanzasPage =
    (activeItem === 'finanzas' ||
      activeItem === 'finanzas-verificar-pagos' ||
      activeItem === 'finanzas-cobranza' ||
      activeItem === 'finanzas-certificados') &&
    profile === 'administrador';

  const isClientContabilidadesPage =
    activeItem === 'client-contabilidades' ||
    activeItem === 'client-contabilidades-progress' ||
    activeItem === 'client-contabilidades-overview';

  const isClientConfiguracionPage =
    activeItem === 'client-configuracion' ||
    activeItem === 'client-config-certificates' ||
    activeItem === 'client-config-documents' ||
    activeItem === 'client-config-profile';

  const isAccountantPage = profile === 'auxiliar';
  const isAuxiliarClientPage =
    isAccountantPage && activeItem === 'clientes' && Boolean(selectedClientId);

  // Gerente profile specific pages
  const isGerenteSupervisionPage =
    isGerentePage && (activeItem === 'supervision' || activeItem === 'supervision-tareas');
  const isGerenteEstadisticasPage =
    isGerentePage && (activeItem === 'estadisticas' || activeItem === 'estadisticas-comisiones');

  const profileInfo = PROFILE_TYPES[profile];
  const displayName = userName || `${profileInfo.displayName} Usuario`;
  const initials = userInitials || profileInfo.displayName.substring(0, 2).toUpperCase();


  // Close notifications dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };

    if (notificationsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [notificationsOpen]);

  useEffect(() => {
    return () => {
      if (profileDropdownTimeoutRef.current) {
        clearTimeout(profileDropdownTimeoutRef.current);
      }
      if (searchBlurTimeoutRef.current) {
        clearTimeout(searchBlurTimeoutRef.current);
      }
    };
  }, []);

  // Build omnibox results whenever query or clients change
  const searchResults = useMemo((): SearchResult[] => {
    if (!searchQuery || searchQuery.trim().length < 2) {
      return [];
    }

    const normalized = searchQuery.trim().toLowerCase();
    const results: SearchResult[] = [];

    clients.forEach((client) => {
      if (
        client.entityName.toLowerCase().includes(normalized) ||
        client.rfc.toLowerCase().includes(normalized)
      ) {
        results.push({
          id: `client-${client.id}`,
          label: client.entityName,
          description: client.rfc,
          type: 'client',
          clientId: client.id,
          tab: 'sat-receivables',
        });
      }

      client.receivables.forEach((invoice) => {
        if (
          invoice.uuid?.toLowerCase().includes(normalized) ||
          invoice.folio?.toLowerCase().includes(normalized) ||
          invoice.customer?.toLowerCase().includes(normalized)
        ) {
          results.push({
            id: `invoice-${invoice.id}`,
            label: invoice.uuid || invoice.folio || 'CFDI',
            description: `${client.entityName} · ${invoice.amount.toLocaleString('es-MX', {
              style: 'currency',
              currency: 'MXN',
            })}`,
            type: 'invoice',
            clientId: client.id,
            tab: 'sat-receivables',
          });
        }
      });

      client.payables.forEach((expense) => {
        if (
          expense.supplier?.toLowerCase().includes(normalized) ||
          expense.concept?.toLowerCase().includes(normalized)
        ) {
          results.push({
            id: `expense-${expense.id}`,
            label: expense.supplier || 'Proveedor',
            description: `${expense.concept || ''} · ${expense.amount.toLocaleString('es-MX', {
              style: 'currency',
              currency: 'MXN',
            })}`,
            type: 'expense',
            clientId: client.id,
            tab: 'sat-payables',
          });
        }
      });
    });

    return results.slice(0, 6);
  }, [clients, searchQuery]);


  const handleNotificationClick = useCallback(
    (notificationId: string, clientId?: string, tab?: ClientTab) => {
      markRead(notificationId);
      if (clientId && tab) {
        goToClientWorkspace(clientId, tab);
      }
      setNotificationsOpen(false);
    },
    [goToClientWorkspace, markRead]
  );

  const handleSearchSelect = useCallback(
    (result: SearchResult) => {
      goToClientWorkspace(result.clientId, result.tab);
      setSearchQuery('');
      setSearchFocused(false);
    },
    [goToClientWorkspace]
  );


  return (
    <header className={styles.topbar}>
      {/* Mobile burger menu */}
      <div className={styles.topbarLeft}>
        {onMobileMenuToggle && (
          <button 
            className={styles.mobileMenuBtn} 
            onClick={onMobileMenuToggle}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        )}
      </div>

      <div className={styles.topbarCenter}>
        {isAuxiliarClientPage && <AuxiliarClientesDropdown />}
        {isAdminClientesPage && <AdminClientesDropdown />}
        {isAdminFinanzasPage && <AdminFinanzasDropdown />}
        {isFinanzasPage && !isAdminFinanzasPage && <FinanzasDropdown />}
        {isEstadisticasPage && !isGerentePage && <EstadisticasDropdown profile={profile} />}
        {isAdminUsuariosPage && profile === 'administrador' && <AdminUsuariosDropdown />}
        {isUsuariosPage && profile !== 'administrador' && <UsuariosDropdown />}
        {isClientContabilidadesPage && profile === 'cliente' && <ClientContabilidadesDropdown />}
        {isClientConfiguracionPage && profile === 'cliente' && <ClientConfiguracionDropdown />}
        {/* Gerente Profile Dropdowns */}
        {isGerenteSupervisionPage && <GerenteSupervisionDropdown />}
        {isGerenteEstadisticasPage && <GerenteEstadisticasDropdown />}
        <div className={styles.searchContainer}>
          <svg
            className={styles.searchIcon}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className={styles.searchInput}
            placeholder={
              isAccountantPage
                ? 'Invoice UUID, Client Name, Amount'
                : isGerentePage
                ? 'Search within group...'
                : 'Buscar...'
            }
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => {
              searchBlurTimeoutRef.current = setTimeout(() => {
                setSearchFocused(false);
              }, 150);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && searchResults.length > 0) {
                event.preventDefault();
                handleSearchSelect(searchResults[0]);
              }
            }}
          />
          {searchFocused && searchResults.length > 0 && (
            <div className={styles.searchDropdown}>
              {searchResults.map((result) => (
                <button
                  key={result.id}
                  className={styles.searchResult}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => handleSearchSelect(result)}
                >
                  <span className={styles.searchResultTitle}>{result.label}</span>
                  <span className={styles.searchResultMeta}>
                    {result.description}
                    <span className={styles.searchResultType}>{result.type}</span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.topbarRight}>
        <div className={styles.notifContainer} ref={notificationRef}>
          <button
            className={styles.notifBtn}
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            aria-label="Notifications"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            {unreadCount > 0 && <span className={styles.notifBadge}>{unreadCount}</span>}
          </button>
          {notificationsOpen && (
            <div className={styles.notifDropdown}>
              <div className={styles.notifHeader}>
                <h3 className={styles.notifTitle}>Notificaciones</h3>
                <div className={styles.notifActions}>
                  <button className={styles.markAllBtn} onClick={markAllRead}>
                    Marcar todo como leido
                  </button>
                  <button
                    className={styles.notifCloseBtn}
                    onClick={() => setNotificationsOpen(false)}
                    aria-label="Close notifications"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={styles.notifList}>
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`${styles.notifItem} ${notification.unread ? styles.notifItemUnread : ''}`}
                      onClick={() =>
                        handleNotificationClick(notification.id, notification.clientId, notification.tab)
                      }
                    >
                      <div className={styles.notifItemContent}>
                        <h4 className={styles.notifItemTitle}>{notification.title}</h4>
                        <p className={styles.notifItemMessage}>{notification.message}</p>
                        <span className={styles.notifItemTime}>
                          {new Date(notification.time).toLocaleString('es-MX')}
                        </span>
                      </div>
                      <button
                        className={styles.notifRemoveBtn}
                        aria-label="Remove notification"
                        onClick={(event) => {
                          event.stopPropagation();
                          removeNotification(notification.id);
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                      {notification.unread && <div className={styles.notifItemDot} />}
                    </div>
                  ))
                ) : (
                  <div className={styles.notifEmpty}>
                    <p>No hay notificaciones</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div
          className={styles.profileContainer}
          ref={profileDropdownRef}
          onMouseEnter={() => {
            if (profileDropdownTimeoutRef.current) {
              clearTimeout(profileDropdownTimeoutRef.current);
              profileDropdownTimeoutRef.current = null;
            }
            setProfileDropdownOpen(true);
          }}
          onMouseLeave={() => {
            profileDropdownTimeoutRef.current = setTimeout(() => {
              setProfileDropdownOpen(false);
              profileDropdownTimeoutRef.current = null;
            }, 300);
          }}
        >
          <button className={styles.userMenu} aria-expanded={profileDropdownOpen} aria-haspopup="true">
            <div className={styles.userAvatar}>{initials}</div>
            <span className={styles.userName}>{displayName}</span>
            <svg
              className={`${styles.chevron} ${profileDropdownOpen ? styles.chevronOpen : ''}`}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {profileDropdownOpen && (
            <div
              className={styles.profileDropdown}
              onMouseEnter={() => {
                if (profileDropdownTimeoutRef.current) {
                  clearTimeout(profileDropdownTimeoutRef.current);
                  profileDropdownTimeoutRef.current = null;
                }
              }}
              onMouseLeave={() => {
                profileDropdownTimeoutRef.current = setTimeout(() => {
                  setProfileDropdownOpen(false);
                  profileDropdownTimeoutRef.current = null;
                }, 300);
              }}
            >
              <div className={styles.profileHeader}>
                <div className={styles.profileHeaderInfo}>
                  <div className={styles.userAvatar}>{initials}</div>
                  <div>
                    <div className={styles.profileName}>{displayName}</div>
                    <div className={styles.profileRole}>{profileInfo.displayName}</div>
                  </div>
                </div>
              </div>
              <div className={styles.profileDivider}></div>
              <div className={styles.profileSection}>
                <div className={styles.profileSectionTitle}>Estado</div>
                <div className={styles.statusOptions}>
                  <button
                    className={`${styles.statusOption} ${
                      userStatus === 'activo' ? styles.statusOptionActive : ''
                    }`}
                    onClick={() => setUserStatus('activo')}
                  >
                    <div className={styles.statusIndicator}>
                      <span className={`${styles.statusDot} ${styles.statusDotActive}`}></span>
                    </div>
                    <span className={styles.statusLabel}>Activo</span>
                  </button>
                  <button
                    className={`${styles.statusOption} ${
                      userStatus === 'ausente' ? styles.statusOptionActive : ''
                    }`}
                    onClick={() => setUserStatus('ausente')}
                  >
                    <div className={styles.statusIndicator}>
                      <span className={`${styles.statusDot} ${styles.statusDotAway}`}></span>
                    </div>
                    <span className={styles.statusLabel}>Ausente</span>
                  </button>
                </div>
              </div>
              <div className={styles.profileDivider}></div>
              <div className={styles.profileSection}>
                <button className={styles.profileMenuItem} onClick={toggleTheme}>
                  <div className={styles.menuItemIcon}>
                    {theme === 'light' ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                      </svg>
                    )}
                  </div>
                  <span className={styles.menuItemLabel}>
                    {theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
                  </span>
                </button>
              </div>
              <div className={styles.profileDivider}></div>
              <div className={styles.profileSection}>
                <button
                  className={`${styles.profileMenuItem} ${styles.profileMenuItemDanger}`}
                  onClick={() => {
                    console.log('Logout clicked');
                    setProfileDropdownOpen(false);
                  }}
                >
                  <div className={styles.menuItemIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                  </div>
                  <span className={styles.menuItemLabel}>Cerrar sesion</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
