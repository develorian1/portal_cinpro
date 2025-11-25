'use client';

import { Table, TableColumn } from '@/components/shared';
import { Client } from './Clientes';
import styles from './ClientProfile.module.css';

interface ClientProfileProps {
  client: Client;
  onClose: () => void;
}

export default function ClientProfile({ client, onClose }: ClientProfileProps) {
  // Mock revenue history data
  const revenueHistory = [
    { month: 'Jan 2024', amount: 125000, status: 'paid' },
    { month: 'Feb 2024', amount: 125000, status: 'paid' },
    { month: 'Mar 2024', amount: 125000, status: 'paid' },
    { month: 'Apr 2024', amount: 125000, status: 'overdue' },
    { month: 'May 2024', amount: 125000, status: 'overdue' },
  ];

  // Mock contact info
  const contactInfo = {
    primaryContact: 'Dr. Juan Pérez',
    email: 'contacto@hospitalnorte.com',
    phone: '+52 55 1234 5678',
    address: 'Av. Insurgentes Sur 1234, CDMX, 03100',
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.modalTitle}>{client.legalName}</h2>
            <p className={styles.modalSubtitle}>RFC: {client.rfc}</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className={styles.modalContent}>
          {/* Client Info Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Información del Cliente</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Grupo:</span>
                <span className={styles.infoValue}>
                  <span className={styles.groupBadge}>{client.group}</span>
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Gestionado Por:</span>
                <span className={styles.infoValue}>{client.managedBy}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Cuota Mensual:</span>
                <span className={styles.infoValue}>
                  ${client.monthlyFee.toLocaleString()}
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Estado:</span>
                <span className={styles.infoValue}>
                  <span
                    className={`${styles.statusBadge} ${
                      client.debtStatus === 'clean' ? styles.clean : styles.overdue
                    }`}
                  >
                    {client.debtStatus === 'clean' ? 'Al Día' : 'Vencido'}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Información de Contacto</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Contacto Principal:</span>
                <span className={styles.infoValue}>{contactInfo.primaryContact}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Correo:</span>
                <span className={styles.infoValue}>
                  <a href={`mailto:${contactInfo.email}`} className={styles.link}>
                    {contactInfo.email}
                  </a>
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Teléfono:</span>
                <span className={styles.infoValue}>
                  <a href={`tel:${contactInfo.phone}`} className={styles.link}>
                    {contactInfo.phone}
                  </a>
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Dirección:</span>
                <span className={styles.infoValue}>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Revenue History */}
          <div className={styles.section}>
            <div className={styles.revenueTable}>
              <Table
                data={revenueHistory}
                columns={[
                  {
                    key: 'month',
                    header: 'Mes',
                    render: (entry) => entry.month,
                  },
                  {
                    key: 'amount',
                    header: 'Monto',
                    render: (entry) => `$${entry.amount.toLocaleString()}`,
                  },
                  {
                    key: 'status',
                    header: 'Estado',
                    render: (entry) => (
                      <span
                        className={`${styles.statusBadge} ${
                          entry.status === 'paid' ? styles.paid : styles.overdue
                        }`}
                      >
                        {entry.status === 'paid' ? 'Pagado' : 'Vencido'}
                      </span>
                    ),
                  },
                ]}
                keyExtractor={(entry, index) => index.toString()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


