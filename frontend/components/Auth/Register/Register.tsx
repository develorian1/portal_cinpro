'use client';

import { useState } from 'react';
import styles from './Register.module.css';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Por favor confirma tu contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    // Handle registration logic here
    console.log('Register:', formData);
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
            <h1 className={styles.title}>Crear Cuenta</h1>
            <p className={styles.subtitle}>
              Completa el formulario para registrarte
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Nombre Completo
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>◇</span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                />
              </div>
              {errors.name && (
                <span className={styles.errorMessage}>{errors.name}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Correo Electrónico
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>◇</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                />
              </div>
              {errors.email && (
                <span className={styles.errorMessage}>{errors.email}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Contraseña
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>◇</span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.passwordToggle}
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.password && (
                <span className={styles.errorMessage}>{errors.password}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirmar Contraseña
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>◇</span>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`${styles.input} ${errors.confirmPassword ? styles.inputError : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={styles.passwordToggle}
                  aria-label={showConfirmPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className={styles.errorMessage}>{errors.confirmPassword}</span>
              )}
            </div>

            <button type="submit" className={styles.submitButton}>
              Crear Cuenta
            </button>

            <div className={styles.divider}>
              <span className={styles.dividerLine}></span>
              <span className={styles.dividerText}>Información</span>
              <span className={styles.dividerLine}></span>
            </div>

            <div className={styles.devNote}>
              <p className={styles.devNoteText}>
                <strong>¿Ya tienes una cuenta?</strong>{' '}
                <a href="/auth/login" className={styles.footerLink}>
                  Inicia sesión aquí
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

