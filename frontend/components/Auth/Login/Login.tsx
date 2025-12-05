'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProfileType } from '@/types/profile';
import styles from './Login.module.css';

const PROFILE_ROUTES: Record<ProfileType, string> = {
  director: '/director',
  administrador: '/admin',
  gerente: '/gerente',
  auxiliar: '/auxiliar',
  cliente: '/cliente',
};

// Temporary user mapping - each user maps to a profile type
const USERS: Array<{ id: string; name: string; profileType: ProfileType }> = [
  { id: 'director1', name: 'Director', profileType: 'director' },
  { id: 'admin1', name: 'Administrador', profileType: 'administrador' },
  { id: 'gerente1', name: 'Gerente', profileType: 'gerente' },
  { id: 'auxiliar1', name: 'Auxiliar', profileType: 'auxiliar' },
  { id: 'cliente1', name: 'Cliente', profileType: 'cliente' },
];

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState<string>('');
  const [errors, setErrors] = useState<{ user?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { user?: string } = {};

    if (!user) {
      newErrors.user = 'Selecciona un usuario';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const selectedUser = USERS.find(u => u.id === user);
    if (selectedUser) {
      const route = PROFILE_ROUTES[selectedUser.profileType];
      if (route) {
        router.push(route);
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* Blue Background Panel */}
      <div className={styles.backgroundPanel}>
        <div className={styles.logoContainer}>
          <img 
            src="/assets/logos/logo_cinpro.png" 
            alt="CINPRO Logo" 
            className={styles.logo}
          />
        </div>
      </div>

      {/* White Form Panel */}
      <div className={styles.formPanel}>
        {/* Mobile Logo */}
        <div className={styles.mobileLogoContainer}>
          <img 
            src="/assets/logos/logo_cinpro.png" 
            alt="CINPRO Logo" 
            className={styles.mobileLogo}
          />
        </div>
        
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <p className={styles.welcomeText}>Bienvenido</p>
            <h1 className={styles.title}>Iniciar Sesión</h1>
            <p className={styles.subtitle}>
              Selecciona un usuario para acceder al sistema
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="user" className={styles.label}>
                Usuario
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>◇</span>
                <select
                  id="user"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className={`${styles.select} ${errors.user ? styles.inputError : ''}`}
                >
                  <option value="">Selecciona un usuario</option>
                  {USERS.map((userOption) => (
                    <option key={userOption.id} value={userOption.id}>
                      {userOption.name}
                    </option>
                  ))}
                </select>
              </div>
              {errors.user && (
                <span className={styles.errorMessage}>{errors.user}</span>
              )}
            </div>

            <button type="submit" className={styles.submitButton}>
              Iniciar Sesión
            </button>

            <div className={styles.divider}>
              <span className={styles.dividerLine}></span>
              <span className={styles.dividerText}>Información</span>
              <span className={styles.dividerLine}></span>
            </div>

            <div className={styles.devNote}>
              <p className={styles.devNoteText}>
                <strong>Modo desarrollo:</strong> Selecciona un usuario y haz clic en 
                "Iniciar Sesión" para acceder directamente sin credenciales.
              </p>
            </div>
          </form>

          <div className={styles.formFooter}>
            <p className={styles.footerText}>
              ¿Necesitas ayuda?{' '}
              <a href="#" className={styles.footerLink}>
                Contactar soporte
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}