import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Acceso Solo Desktop - CINPRO',
  description: 'Esta aplicación requiere un dispositivo de escritorio',
};

export default function MobileRestricted() {
  return (
    <div className={styles.container}>
      {/* Background decoration */}
      <div className={styles.backgroundDecoration}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gridPattern} />
      </div>

      {/* Main content */}
      <main className={styles.content}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="10" fill="url(#logoGradient)" />
              <path
                d="M12 20C12 15.5817 15.5817 12 20 12V12C24.4183 12 28 15.5817 28 20V20C28 24.4183 24.4183 28 20 28V28C15.5817 28 12 24.4183 12 20V20Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M20 16V24M16 20H24"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1880EA" />
                  <stop offset="1" stopColor="#0E0F2D" />
                </linearGradient>
              </defs>
            </svg>
            <span className={styles.logoText}>CINPRO</span>
          </div>
        </div>

        {/* Icon */}
        <div className={styles.iconContainer}>
          <div className={styles.deviceIcon}>
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Desktop monitor */}
              <rect x="14" y="12" width="52" height="36" rx="4" fill="url(#monitorGradient)" />
              <rect x="18" y="16" width="44" height="28" rx="2" fill="#0E0F2D" />
              <rect x="32" y="48" width="16" height="8" fill="url(#standGradient)" />
              <rect x="24" y="56" width="32" height="4" rx="2" fill="url(#baseGradient)" />
              
              {/* Screen glow effect */}
              <rect x="20" y="18" width="40" height="24" rx="1" fill="url(#screenGlow)" opacity="0.8" />
              
              {/* Check mark on screen */}
              <circle cx="40" cy="30" r="8" fill="rgba(16, 185, 129, 0.2)" />
              <path d="M36 30L39 33L45 27" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              
              <defs>
                <linearGradient id="monitorGradient" x1="14" y1="12" x2="66" y2="48" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#475569" />
                  <stop offset="1" stopColor="#1e293b" />
                </linearGradient>
                <linearGradient id="standGradient" x1="32" y1="48" x2="48" y2="56" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#64748b" />
                  <stop offset="1" stopColor="#475569" />
                </linearGradient>
                <linearGradient id="baseGradient" x1="24" y1="56" x2="56" y2="60" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#64748b" />
                  <stop offset="1" stopColor="#475569" />
                </linearGradient>
                <radialGradient id="screenGlow" cx="40" cy="30" r="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1880EA" stopOpacity="0.3" />
                  <stop offset="1" stopColor="#0E0F2D" stopOpacity="0.9" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          
          {/* Mobile with X */}
          <div className={styles.mobileIconOverlay}>
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="2" width="20" height="28" rx="3" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
              <rect x="10" y="6" width="12" height="18" rx="1" fill="#0E0F2D" />
              <circle cx="16" cy="27" r="1.5" fill="#64748b" />
              {/* X mark */}
              <circle cx="16" cy="15" r="6" fill="rgba(239, 68, 68, 0.2)" />
              <path d="M13 12L19 18M19 12L13 18" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Text content */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Acceso Solo para<br />
            <span className={styles.highlight}>Escritorio</span>
          </h1>
          
          <p className={styles.description}>
            Esta aplicación está diseñada para pantallas grandes y flujos de trabajo complejos. 
            Por favor, abre este enlace en una <strong>computadora de escritorio</strong> o <strong>laptop</strong> para continuar.
          </p>
        </div>

        {/* Feature list */}
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <span>Interfaz optimizada para pantallas amplias</span>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span>Herramientas profesionales de gestión</span>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span>Máxima seguridad y precisión</span>
          </div>
        </div>

        {/* Footer note */}
        <p className={styles.footerNote}>
          ¿Necesitas acceso urgente? Contacta a soporte técnico.
        </p>
      </main>
    </div>
  );
}

