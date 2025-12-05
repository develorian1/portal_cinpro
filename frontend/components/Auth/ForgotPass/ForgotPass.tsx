'use client';

import { useState } from 'react';
import styles from './ForgotPass.module.css';

export default function ForgotPass() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ email?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string } = {};

    if (!email) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    // Handle password reset logic here
    console.log('Password reset requested for:', email);
  };

  if (isSubmitted) {
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
            <div className={styles.successContent}>
              <div className={styles.successIcon}>✓</div>
              <div className={styles.formHeader}>
                <p className={styles.welcomeText}>Correo Enviado</p>
                <h1 className={styles.title}>Revisa tu Bandeja</h1>
                <p className={styles.subtitle}>
                  Hemos enviado un enlace de recuperación a <strong>{email}</strong>
                </p>
              </div>
              <p className={styles.instruction}>
                Por favor revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.
              </p>
              <div className={styles.actions}>
                <a href="/auth/login" className={styles.backLink}>
                  Volver al inicio de sesión
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            <p className={styles.welcomeText}>Recuperación</p>
            <h1 className={styles.title}>Recuperar Contraseña</h1>
            <p className={styles.subtitle}>
              Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Correo Electrónico
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>◇</span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                />
              </div>
              {errors.email && (
                <span className={styles.errorMessage}>{errors.email}</span>
              )}
            </div>

            <button type="submit" className={styles.submitButton}>
              Enviar Enlace de Recuperación
            </button>

            <div className={styles.divider}>
              <span className={styles.dividerLine}></span>
              <span className={styles.dividerText}>Información</span>
              <span className={styles.dividerLine}></span>
            </div>

            <div className={styles.devNote}>
              <p className={styles.devNoteText}>
                <strong>¿Recordaste tu contraseña?</strong>{' '}
                <a href="/auth/login" className={styles.footerLink}>
                  Volver al inicio de sesión
                </a>
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

