'use client';

import { useState, FormEvent } from 'react';
import styles from './CreateAuxiliarModal.module.css';

interface CreateAuxiliarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    name: string;
    email: string;
    password: string;
    chiefId: string;
  }) => void;
}

// Mock list of available chiefs - replace with real data from context/API
const availableChiefs = [
  { id: '1', name: 'Carlos Ramírez' },
  { id: '2', name: 'Ana Martínez' },
  { id: '3', name: 'Luis García' },
  { id: '4', name: 'Patricia López' },
];

export default function CreateAuxiliarModal({
  isOpen,
  onClose,
  onSubmit,
}: CreateAuxiliarModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    chiefId: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }

    if (!formData.chiefId) {
      newErrors.chiefId = 'Debe asignar un jefe';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        password: '',
        chiefId: '',
      });
      setErrors({});
      onClose();
    } catch (error) {
      console.error('Error creating auxiliar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <form className={styles.modalContent} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Nombre Completo <span className={styles.required}>*</span>
            </label>
            <input
              id="name"
              type="text"
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Ej: María González"
            />
            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Correo Electrónico <span className={styles.required}>*</span>
            </label>
            <input
              id="email"
              type="email"
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="ejemplo@correo.com"
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Contraseña <span className={styles.required}>*</span>
            </label>
            <input
              id="password"
              type="password"
              className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              placeholder="Mínimo 8 caracteres"
            />
            {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="chiefId" className={styles.label}>
              Jefe Asignado <span className={styles.required}>*</span>
            </label>
            <select
              id="chiefId"
              className={`${styles.select} ${errors.chiefId ? styles.inputError : ''}`}
              value={formData.chiefId}
              onChange={(e) => handleChange('chiefId', e.target.value)}
            >
              <option value="">Selecciona un jefe</option>
              {availableChiefs.map((chief) => (
                <option key={chief.id} value={chief.id}>
                  {chief.name}
                </option>
              ))}
            </select>
            {errors.chiefId && <span className={styles.errorMessage}>{errors.chiefId}</span>}
          </div>

          <div className={styles.modalActions}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creando...' : 'Crear Auxiliar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

