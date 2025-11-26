'use client';

import { useState, useRef } from 'react';
import styles from './CertificadosSAT.module.css';

interface UploadFormData {
  client: string;
  certificateFile: File | null;
  privateKeyFile: File | null;
  password: string;
}

export default function CertificadosSAT() {
  const [formData, setFormData] = useState<UploadFormData>({
    client: '',
    certificateFile: null,
    privateKeyFile: null,
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const certificateInputRef = useRef<HTMLInputElement>(null);
  const privateKeyInputRef = useRef<HTMLInputElement>(null);

  // Mock client data - replace with real data from API
  const [selectedClient] = useState('Hospital General del Norte S.A. de C.V.');

  const handleFileChange = (
    type: 'certificate' | 'privateKey',
    file: File | null
  ) => {
    if (file) {
      // Validate file extension
      const validExtensions =
        type === 'certificate' ? ['.cer'] : ['.key'];
      const fileExtension = file.name
        .substring(file.name.lastIndexOf('.'))
        .toLowerCase();

      if (!validExtensions.includes(fileExtension)) {
        setErrors(prev => ({
          ...prev,
          [type === 'certificate' ? 'certificateFile' : 'privateKeyFile']:
            `Tipo de archivo inválido. Se espera ${validExtensions.join(', ')}`,
        }));
        return;
      }

      setErrors(prev => ({
        ...prev,
        [type === 'certificate' ? 'certificateFile' : 'privateKeyFile']: '',
      }));
    }

    setFormData(prev => ({
      ...prev,
      [type === 'certificate' ? 'certificateFile' : 'privateKeyFile']: file,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.certificateFile) {
      newErrors.certificateFile = 'El archivo de certificado es requerido';
    }
    if (!formData.privateKeyFile) {
      newErrors.privateKeyFile = 'El archivo de llave privada es requerido';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'La contraseña es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData for multipart/form-data upload
      const formDataToSend = new FormData();
      formDataToSend.append('client', selectedClient);
      formDataToSend.append('certificate', formData.certificateFile!);
      formDataToSend.append('privateKey', formData.privateKeyFile!);
      formDataToSend.append('password', formData.password);

      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/sat-certificates/upload', {
        method: 'POST',
        body: formDataToSend,
        // Don't set Content-Type header - browser will set it with boundary
        headers: {
          // Authorization header will be added by API client if needed
        },
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      // Success - reset form
      setFormData({
        client: selectedClient,
        certificateFile: null,
        privateKeyFile: null,
        password: '',
      });
      if (certificateInputRef.current) {
        certificateInputRef.current.value = '';
      }
      if (privateKeyInputRef.current) {
        privateKeyInputRef.current.value = '';
      }

      alert('¡Certificados cargados y encriptados exitosamente!');
    } catch (error) {
      console.error('Error uploading certificates:', error);
      alert('Error al cargar los certificados. Por favor intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.certificados}>
      <div className={styles.uploadCard}>
        <form onSubmit={handleSubmit} className={styles.uploadForm}>
          {/* Client (Read-only) */}
          <div className={styles.formField}>
            <label className={styles.label}>Cliente</label>
            <div className={styles.readOnlyField}>{selectedClient}</div>
          </div>

          {/* Certificate File */}
          <div className={styles.formField}>
            <label className={styles.label}>
              Certificado (.cer) <span className={styles.required}>*</span>
            </label>
            <div className={styles.fileInputContainer}>
              <input
                ref={certificateInputRef}
                type="file"
                accept=".cer"
                onChange={e =>
                  handleFileChange(
                    'certificate',
                    e.target.files?.[0] || null
                  )
                }
                className={styles.fileInput}
                id="certificate-input"
              />
              <label htmlFor="certificate-input" className={styles.fileLabel}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                {formData.certificateFile
                  ? formData.certificateFile.name
                  : 'Seleccionar Archivo de Certificado'}
              </label>
            </div>
            {errors.certificateFile && (
              <span className={styles.errorText}>
                {errors.certificateFile}
              </span>
            )}
          </div>

          {/* Private Key File */}
          <div className={styles.formField}>
            <label className={styles.label}>
              Llave Privada (.key) <span className={styles.required}>*</span>
            </label>
            <div className={styles.fileInputContainer}>
              <input
                ref={privateKeyInputRef}
                type="file"
                accept=".key"
                onChange={e =>
                  handleFileChange('privateKey', e.target.files?.[0] || null)
                }
                className={styles.fileInput}
                id="privatekey-input"
              />
              <label htmlFor="privatekey-input" className={styles.fileLabel}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                {formData.privateKeyFile
                  ? formData.privateKeyFile.name
                  : 'Seleccionar Archivo de Llave Privada'}
              </label>
            </div>
            {errors.privateKeyFile && (
              <span className={styles.errorText}>
                {errors.privateKeyFile}
              </span>
            )}
          </div>

          {/* Password */}
          <div className={styles.formField}>
            <label className={styles.label}>
              Contraseña <span className={styles.required}>*</span>
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={e =>
                setFormData(prev => ({ ...prev, password: e.target.value }))
              }
              className={`${styles.passwordInput} ${
                errors.password ? styles.inputError : ''
              }`}
              placeholder="Ingrese la contraseña del certificado"
            />
            {errors.password && (
              <span className={styles.errorText}>{errors.password}</span>
            )}
            <p className={styles.helpText}>
              ⚠️ La llave privada será encriptada y almacenada de forma segura. No
              se almacenará en el almacenamiento local.
            </p>
          </div>

          {/* Submit Button */}
          <div className={styles.formActions}>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Encriptando y Almacenando...' : 'Encriptar y Almacenar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

