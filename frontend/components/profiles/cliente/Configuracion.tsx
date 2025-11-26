'use client';

import { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import styles from './Configuracion.module.css';

interface Certificate {
  id: string;
  type: 'efirma' | 'csd';
  status: 'active' | 'expiring' | 'expired';
  expiryDate: string;
}

interface Document {
  id: string;
  name: string;
  uploadDate: string;
  url: string;
}

export default function Configuracion() {
  const { setActiveItem, activeItem } = useNavigation();
  const [certificateFiles, setCertificateFiles] = useState<{
    cer: File | null;
    key: File | null;
  }>({ cer: null, key: null });
  const [certificatePassword, setCertificatePassword] = useState('');
  const cerInputRef = useRef<HTMLInputElement>(null);
  const keyInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Set default tab when configuracion is clicked directly
    if (activeItem === 'client-configuracion') {
      setActiveItem('client-config-certificates');
    }
  }, [activeItem, setActiveItem]);

  // Mock data - replace with real API calls
  const certificates: Certificate[] = [
    {
      id: '1',
      type: 'efirma',
      status: 'active',
      expiryDate: '2025-12-31',
    },
    {
      id: '2',
      type: 'csd',
      status: 'expiring',
      expiryDate: '2024-11-15',
    },
  ];

  const documents: Document[] = [
    { id: '1', name: 'Acta Constitutiva', uploadDate: '2024-01-15', url: '/documents/acta.pdf' },
    {
      id: '2',
      name: 'Comprobante de Domicilio',
      uploadDate: '2024-01-15',
      url: '/documents/domicilio.pdf',
    },
    { id: '3', name: 'ID of Legal Rep', uploadDate: '2024-01-15', url: '/documents/id.pdf' },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const getDaysUntilExpiry = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const handleFileChange = (type: 'cer' | 'key', file: File | null) => {
    setCertificateFiles((prev) => ({ ...prev, [type]: file }));
  };

  const handleCertificateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificateFiles.cer || !certificateFiles.key || !certificatePassword) {
      alert('Please fill in all required fields');
      return;
    }

    // TODO: Implement API call
    console.log('Submitting certificate update');
    alert('Certificates updated successfully');
    setCertificateFiles({ cer: null, key: null });
    setCertificatePassword('');
    if (cerInputRef.current) cerInputRef.current.value = '';
    if (keyInputRef.current) keyInputRef.current.value = '';
  };

  const handleDocumentUpload = (documentId: string) => {
    // TODO: Implement document upload
    console.log('Uploading document:', documentId);
  };

  // Determine which content to show based on activeItem
  const showCertificates = activeItem === 'client-config-certificates' || activeItem === 'client-configuracion';
  const showDocuments = activeItem === 'client-config-documents';
  const showProfile = activeItem === 'client-config-profile';

  return (
    <div className={styles.container}>
      <h1 className={styles.sectionHeader}>Configuracion</h1>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {showCertificates && (
          <div className={styles.certificatesTab}>
            {/* Expiry Alert */}
            {certificates.some((c) => {
              const days = getDaysUntilExpiry(c.expiryDate);
              return days < 30 && days > 0;
            }) && (
              <div className={styles.expiryAlert}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span className={styles.expiryAlertText}>
                  Some certificates are expiring soon. Please update them.
                </span>
              </div>
            )}

            {/* Two Column Grid */}
            <div className={styles.certificatesGrid}>
              {/* Left Column: Certificate Cards */}
              <div className={styles.certificatesColumn}>
                <div className={styles.certificatesList}>
                  {certificates.map((cert) => {
                    const days = getDaysUntilExpiry(cert.expiryDate);
                    const isExpiring = days < 30 && days > 0;
                    const isExpired = days <= 0;

                    return (
                      <div key={cert.id} className={styles.certificateCard}>
                        <div className={styles.certificateInfo}>
                          <span className={styles.certificateTitle}>
                            {cert.type === 'efirma' ? 'e.firma' : 'CSD (Sells)'}
                          </span>
                          <span className={styles.certificateDetail}>
                            {formatDate(cert.expiryDate)}
                            {isExpiring && ` • ${days} days left`}
                          </span>
                        </div>
                        <div
                          className={`${styles.certificateStatus} ${
                            isExpired
                              ? styles.expired
                              : isExpiring
                              ? styles.expiring
                              : styles.active
                          }`}
                        >
                          {isExpired ? 'Expired' : isExpiring ? 'Expiring' : 'Active'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Update Certificate Form */}
              <div className={styles.formColumn}>
                <div className={styles.updateForm}>
                  <h3 className={styles.formTitle}>Update Certificate</h3>
                  <form onSubmit={handleCertificateSubmit}>
                    <div className={styles.formField}>
                      <label className={styles.fieldLabel}>
                        Certificate File (.cer) <span className={styles.required}>*</span>
                      </label>
                      <div className={styles.fileInputWrapper}>
                        <input
                          ref={cerInputRef}
                          type="file"
                          accept=".cer"
                          onChange={(e) => handleFileChange('cer', e.target.files?.[0] || null)}
                          className={styles.fileInput}
                          id="cer-file-input"
                        />
                        <label htmlFor="cer-file-input" className={styles.fileInputLabel}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                          </svg>
                          {certificateFiles.cer ? 'Change File' : 'Choose File'}
                        </label>
                      </div>
                      {certificateFiles.cer && (
                        <div className={styles.fileName}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                            <polyline points="13 2 13 9 20 9" />
                          </svg>
                          <span className={styles.fileNameText}>{certificateFiles.cer.name}</span>
                        </div>
                      )}
                    </div>

                    <div className={styles.formField}>
                      <label className={styles.fieldLabel}>
                        Private Key File (.key) <span className={styles.required}>*</span>
                      </label>
                      <div className={styles.fileInputWrapper}>
                        <input
                          ref={keyInputRef}
                          type="file"
                          accept=".key"
                          onChange={(e) => handleFileChange('key', e.target.files?.[0] || null)}
                          className={styles.fileInput}
                          id="key-file-input"
                        />
                        <label htmlFor="key-file-input" className={styles.fileInputLabel}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                          </svg>
                          {certificateFiles.key ? 'Change File' : 'Choose File'}
                        </label>
                      </div>
                      {certificateFiles.key && (
                        <div className={styles.fileName}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                            <polyline points="13 2 13 9 20 9" />
                          </svg>
                          <span className={styles.fileNameText}>{certificateFiles.key.name}</span>
                        </div>
                      )}
                    </div>

                    <div className={styles.formField}>
                      <label className={styles.fieldLabel}>
                        Password <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="password"
                        className={styles.fieldInput}
                        value={certificatePassword}
                        onChange={(e) => setCertificatePassword(e.target.value)}
                        required
                      />
                    </div>

                    <button type="submit" className={styles.btnSubmit}>
                      Update Certificate
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {showDocuments && (
          <div className={styles.documentsTab}>
            <div className={styles.documentList}>
              {documents.map((doc) => (
                <div key={doc.id} className={styles.documentItem}>
                  <div className={styles.documentInfo}>
                    <svg
                      className={styles.documentIcon}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <polyline points="13 2 13 9 20 9" />
                    </svg>
                    <div>
                      <div className={styles.documentName}>{doc.name}</div>
                      <div className={styles.documentDate}>Uploaded: {formatDate(doc.uploadDate)}</div>
                    </div>
                  </div>
                  <div className={styles.documentActions}>
                    <button
                      className={styles.btnUpload}
                      onClick={() => handleDocumentUpload(doc.id)}
                    >
                      Upload New Version
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showProfile && (
          <div className={styles.profileTab}>
            <div className={styles.profileSection}>
              <div className={styles.profileField}>
                <label className={styles.profileLabel}>Name</label>
                <div className={styles.profileValue}>John Doe</div>
              </div>
              <div className={styles.profileField}>
                <label className={styles.profileLabel}>Email</label>
                <div className={styles.profileValue}>john.doe@example.com</div>
              </div>
              <div className={styles.profileField}>
                <label className={styles.profileLabel}>Phone Number</label>
                <div className={styles.profileValue}>+52 55 1234 5678</div>
              </div>
            </div>

            <div className={styles.securitySection}>
              <h3 className={styles.securityTitle}>Security</h3>
              <button className={styles.changePasswordBtn}>Change Password</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

