'use client';

import { useState, useRef, useEffect } from 'react';
import { ProfileType } from '@/types/profile';
import { PROFILE_TYPES } from '@/types/profile';
import { useNavigation } from '@/contexts/NavigationContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useClient } from '@/contexts/ClientContext';
import { FinanzasDropdown, EstadisticasDropdown, UsuariosDropdown, AdminUsuariosDropdown, AdminClientesDropdown, AdminFinanzasDropdown, ClientContabilidadesDropdown, ClientConfiguracionDropdown, AuxiliarClientesDropdown } from '@/components/shared';
import styles from './Topbar.module.css';

type UserStatus = 'activo' | 'ausente' | 'inactivo';

interface TopbarProps {
  profile?: ProfileType;
  userName?: string;
  userInitials?: string;
}

export default function Topbar({
  profile = 'director',
  userName,
  userInitials
}: TopbarProps) {
  const { activeItem } = useNavigation();
  const { theme, toggleTheme } = useTheme();
  const { selectedClientId } = useClient();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const profileDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [userStatus, setUserStatus] = useState<UserStatus>('activo');

  // Check if we're on a gerente (Chief Accountant) page
  const isGerentePage = profile === 'gerente';

  // Mock notifications - for gerente profile, include review requests
  const mockNotifications = isGerentePage
    ? [
        { id: 1, title: 'Review Request', message: '12 items require your approval', time: 'Hace 5 min', unread: true },
        { id: 2, title: 'Review Request', message: 'Low confidence match from María González', time: 'Hace 1 hora', unread: true },
        { id: 3, title: 'Team Message', message: 'New message in Team General', time: 'Hace 2 horas', unread: false },
        { id: 4, title: 'Review Request', message: '3 items pending review', time: 'Hace 1 día', unread: true },
      ]
    : [
        { id: 1, title: 'Nuevo mensaje', message: 'Tienes un nuevo mensaje de Juan Pérez', time: 'Hace 5 min', unread: true },
        { id: 2, title: 'Tarea completada', message: 'La tarea "Revisar reportes" ha sido completada', time: 'Hace 1 hora', unread: true },
        { id: 3, title: 'Recordatorio', message: 'Reunión de equipo en 30 minutos', time: 'Hace 2 horas', unread: false },
        { id: 4, title: 'Actualización del sistema', message: 'Nueva actualización disponible', time: 'Hace 1 día', unread: false },
      ];

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

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (profileDropdownTimeoutRef.current) {
        clearTimeout(profileDropdownTimeoutRef.current);
      }
    };
  }, []);
  
  // Check if we're on a finanzas page (director)
  const isFinanzasPage = activeItem === 'finanzas' || 
    activeItem === 'finanzas-receivables' || 
    activeItem === 'finanzas-payables' || 
    activeItem === 'finanzas-reports';

  // Check if we're on an admin clientes page
  const isAdminClientesPage = (activeItem === 'clientes' || 
    activeItem === 'clientes-directorio' || 
    activeItem === 'clientes-nuevo-cliente' || 
    activeItem === 'clientes-certificados') && profile === 'administrador';

  // Check if we're on an estadisticas page
  const isEstadisticasPage = activeItem === 'estadisticas' || 
    activeItem === 'estadisticas-empleados' || 
    activeItem === 'estadisticas-clientes' || 
    activeItem === 'estadisticas-equipos' || 
    activeItem === 'estadisticas-finanzas' ||
    activeItem === 'estadisticas-onboarding' ||
    activeItem === 'estadisticas-collection' ||
    activeItem === 'estadisticas-support';

  // Check if we're on a usuarios page
  const isUsuariosPage = activeItem === 'usuarios' || 
    activeItem === 'usuarios-auxiliares' || 
    activeItem === 'usuarios-admins' || 
    activeItem === 'usuarios-jefes';

  // Check if we're on an admin usuarios page
  const isAdminUsuariosPage = activeItem === 'usuarios' || 
    activeItem === 'usuarios-estructura' || 
    activeItem === 'usuarios-gestion' || 
    activeItem === 'usuarios-accesos';

  // Check if we're on an admin finanzas page
  const isAdminFinanzasPage = (activeItem === 'finanzas' || 
    activeItem === 'finanzas-verificar-pagos' || 
    activeItem === 'finanzas-cobranza' ||
    activeItem === 'finanzas-certificados') && profile === 'administrador';

  // Check if we're on a client contabilidades page
  const isClientContabilidadesPage = activeItem === 'client-contabilidades' || 
    activeItem === 'client-contabilidades-progress' || 
    activeItem === 'client-contabilidades-overview';

  // Check if we're on a client configuracion page
  const isClientConfiguracionPage = activeItem === 'client-configuracion' || 
    activeItem === 'client-config-certificates' || 
    activeItem === 'client-config-documents' || 
    activeItem === 'client-config-profile';

  // Check if we're on an accountant (auxiliar) page
  const isAccountantPage = profile === 'auxiliar' && (
    activeItem === 'home' ||
    activeItem === 'clientes'
  );

  // Check if we're viewing a client detail (auxiliar profile with selected client)
  const isAuxiliarClientPage = profile === 'auxiliar' && 
    activeItem === 'clientes' && 
    selectedClientId !== undefined;

  // Get display name and initials based on profile
  const profileInfo = PROFILE_TYPES[profile];
  const displayName = userName || `${profileInfo.displayName} Usuario`;
  const initials = userInitials || profileInfo.displayName.substring(0, 2).toUpperCase();

  // Mock group name - TODO: Replace with actual data from context/API
  const groupName = isGerentePage ? 'Medical Group' : null;

  // Get context label based on profile and active item
  const getContextLabel = () => {
    return null;
  };

  const contextLabel = getContextLabel();

  return (
    <header className={styles.topbar}>
      <div className={styles.topbarCenter}>
        {isAuxiliarClientPage && <AuxiliarClientesDropdown />}
        {isAdminClientesPage && <AdminClientesDropdown />}
        {isAdminFinanzasPage && <AdminFinanzasDropdown />}
        {isFinanzasPage && !isAdminFinanzasPage && <FinanzasDropdown />}
        {isEstadisticasPage && <EstadisticasDropdown profile={profile} />}
        {isAdminUsuariosPage && profile === 'administrador' && <AdminUsuariosDropdown />}
        {isUsuariosPage && profile !== 'administrador' && <UsuariosDropdown />}
        {isClientContabilidadesPage && profile === 'cliente' && <ClientContabilidadesDropdown />}
        {isClientConfiguracionPage && profile === 'cliente' && <ClientConfiguracionDropdown />}
        {isGerentePage && groupName && (
          <div className={styles.groupBadge}>
            {groupName}
          </div>
        )}
        {contextLabel && (
          <div className={styles.contextLabel}>
            {contextLabel}
          </div>
        )}
        <div className={styles.searchContainer}>
          <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className={styles.searchInput}
            placeholder={
              isAccountantPage 
                ? "Invoice UUID, Client Name, Amount" 
                : isGerentePage 
                ? "Search within group..." 
                : "Buscar..."
            }
          />
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
            <span className={styles.notifBadge}>{mockNotifications.filter(n => n.unread).length}</span>
          </button>
          {notificationsOpen && (
            <div className={styles.notifDropdown}>
              <div className={styles.notifHeader}>
                <h3 className={styles.notifTitle}>Notificaciones</h3>
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
              <div className={styles.notifList}>
                {mockNotifications.length > 0 ? (
                  mockNotifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`${styles.notifItem} ${notification.unread ? styles.notifItemUnread : ''}`}
                    >
                      <div className={styles.notifItemContent}>
                        <h4 className={styles.notifItemTitle}>{notification.title}</h4>
                        <p className={styles.notifItemMessage}>{notification.message}</p>
                        <span className={styles.notifItemTime}>{notification.time}</span>
                      </div>
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
            // Clear any pending close timeout
            if (profileDropdownTimeoutRef.current) {
              clearTimeout(profileDropdownTimeoutRef.current);
              profileDropdownTimeoutRef.current = null;
            }
            setProfileDropdownOpen(true);
          }}
          onMouseLeave={() => {
            // Add delay before closing dropdown
            profileDropdownTimeoutRef.current = setTimeout(() => {
              setProfileDropdownOpen(false);
              profileDropdownTimeoutRef.current = null;
            }, 300); // 300ms delay
          }}
        >
          <button 
            className={styles.userMenu}
            aria-expanded={profileDropdownOpen}
            aria-haspopup="true"
          >
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
                // Clear any pending close timeout when hovering over dropdown
                if (profileDropdownTimeoutRef.current) {
                  clearTimeout(profileDropdownTimeoutRef.current);
                  profileDropdownTimeoutRef.current = null;
                }
              }}
              onMouseLeave={() => {
                // Add delay before closing when leaving dropdown
                profileDropdownTimeoutRef.current = setTimeout(() => {
                  setProfileDropdownOpen(false);
                  profileDropdownTimeoutRef.current = null;
                }, 300); // 300ms delay
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
                    className={`${styles.statusOption} ${userStatus === 'activo' ? styles.statusOptionActive : ''}`}
                    onClick={() => setUserStatus('activo')}
                  >
                    <div className={styles.statusIndicator}>
                      <span className={`${styles.statusDot} ${styles.statusDotActive}`}></span>
                    </div>
                    <span className={styles.statusLabel}>Activo</span>
                  </button>
                  <button
                    className={`${styles.statusOption} ${userStatus === 'ausente' ? styles.statusOptionActive : ''}`}
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
                <button
                  className={styles.profileMenuItem}
                  onClick={toggleTheme}
                >
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
                    // TODO: Implement logout logic
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
                  <span className={styles.menuItemLabel}>Cerrar sesión</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

