'use client';

import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import styles from './ClientHome.module.css';

interface TimelineEvent {
  id: string;
  type: 'tax' | 'payment' | 'message';
  title: string;
  date: string;
}

interface PulseCardData {
  estimatedTax: {
    amount: number;
    currency: string;
  };
  pendingFees: {
    amount: number;
    currency: string;
  };
  missingInfo: {
    message: string;
    actionLabel: string;
  } | null;
}

export default function ClientHome() {
  const { setActiveItem } = useNavigation();

  useEffect(() => {
    setActiveItem('client-home');
  }, [setActiveItem]);

  // Mock data - replace with real API calls
  const pulseData: PulseCardData = {
    estimatedTax: {
      amount: 12500,
      currency: 'MXN',
    },
    pendingFees: {
      amount: 8500,
      currency: 'MXN',
    },
    missingInfo: {
      message: 'Upload October Bank Statement',
      actionLabel: 'Upload',
    },
  };

  const timelineEvents: TimelineEvent[] = [
    {
      id: '1',
      type: 'tax',
      title: 'Tax Declaration Filed (Oct)',
      date: '2024-10-15',
    },
    {
      id: '2',
      type: 'payment',
      title: 'Payment Verified by Admin',
      date: '2024-10-12',
    },
    {
      id: '3',
      type: 'message',
      title: 'New Message from Accountant',
      date: '2024-10-10',
    },
    {
      id: '4',
      type: 'tax',
      title: 'Tax Declaration Filed (Sep)',
      date: '2024-09-15',
    },
    {
      id: '5',
      type: 'payment',
      title: 'Payment Received - $8,500 MXN',
      date: '2024-09-10',
    },
    {
      id: '6',
      type: 'message',
      title: 'Document Review Request',
      date: '2024-09-08',
    },
    {
      id: '7',
      type: 'tax',
      title: 'Tax Declaration Filed (Aug)',
      date: '2024-08-20',
    },
    {
      id: '8',
      type: 'payment',
      title: 'Payment Verified by Admin',
      date: '2024-08-15',
    },
    {
      id: '9',
      type: 'message',
      title: 'Quarterly Report Available',
      date: '2024-08-12',
    },
    {
      id: '10',
      type: 'tax',
      title: 'Tax Declaration Filed (Jul)',
      date: '2024-07-18',
    },
    {
      id: '11',
      type: 'payment',
      title: 'Payment Received - $12,000 MXN',
      date: '2024-07-10',
    },
    {
      id: '12',
      type: 'message',
      title: 'Annual Review Scheduled',
      date: '2024-07-05',
    },
    {
      id: '13',
      type: 'tax',
      title: 'Tax Declaration Filed (Jun)',
      date: '2024-06-20',
    },
    {
      id: '14',
      type: 'payment',
      title: 'Payment Verified by Admin',
      date: '2024-06-15',
    },
    {
      id: '15',
      type: 'message',
      title: 'New Compliance Requirements',
      date: '2024-06-10',
    },
  ];

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-MX', {
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  const getTimelineIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'tax':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        );
      case 'payment':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        );
      case 'message':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        );
    }
  };

  const handlePayNow = () => {
    setActiveItem('client-pagos');
  };

  const handleUpload = () => {
    // TODO: Implement upload functionality
    console.log('Upload clicked');
  };

  return (
    <div className={styles.container}>
      {/* Business Pulse Cards Section */}
      <section className={styles.pulseSection}>
        <h2 className={styles.sectionTitle}>Business Pulse</h2>
        <div className={styles.pulseCardsGrid}>
          {/* Card 1: Estimated Tax Due */}
          <div className={styles.pulseCard}>
            <h3 className={styles.cardTitle}>Estimated Tax Due</h3>
            <p className={styles.taxAmount}>
              {formatCurrency(pulseData.estimatedTax.amount, pulseData.estimatedTax.currency)}
            </p>
            <p className={styles.taxDisclaimer}>Estimation only</p>
          </div>

          {/* Card 2: Pending Fees */}
          <div className={styles.pulseCard}>
            <h3 className={styles.cardTitle}>Pending Fees</h3>
            <p className={styles.pendingAmount}>
              {formatCurrency(pulseData.pendingFees.amount, pulseData.pendingFees.currency)}
            </p>
            <button className={styles.btnPayNow} onClick={handlePayNow}>
              Pay Now
            </button>
          </div>

          {/* Card 3: Missing Info Alert */}
          {pulseData.missingInfo && (
            <div className={`${styles.pulseCard} ${styles.alertCard}`}>
              <h3 className={styles.cardTitle}>Action Required</h3>
              <p className={styles.alertText}>{pulseData.missingInfo.message}</p>
              <button className={styles.btnUpload} onClick={handleUpload}>
                {pulseData.missingInfo.actionLabel}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Recent Timeline Section */}
      <section className={styles.timelineSection}>
        <h2 className={styles.sectionTitle}>Recent Activity</h2>
        <div className={styles.timeline}>
          {timelineEvents.map((event, index) => (
            <div key={event.id} className={styles.timelineItem}>
              <div className={styles.timelineIcon}>{getTimelineIcon(event.type)}</div>
              <div className={styles.timelineContent}>
                <p className={styles.timelineTitle}>{event.title}</p>
                <p className={styles.timelineDate}>{formatDate(event.date)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

