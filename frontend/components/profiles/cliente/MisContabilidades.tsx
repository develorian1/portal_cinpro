'use client';

import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import styles from './MisContabilidades.module.css';

interface StepperStep {
  id: number;
  label: string;
  status: 'pending' | 'active' | 'complete';
  detail?: string;
}

interface Expense {
  category: string;
  amount: number;
  currency: string;
}

interface DownloadFile {
  id: string;
  label: string;
  url: string;
}

export default function MisContabilidades() {
  const { setActiveItem, activeItem } = useNavigation();

  useEffect(() => {
    // Set default tab when contabilidades is clicked directly
    if (activeItem === 'client-contabilidades') {
      setActiveItem('client-contabilidades-overview');
    }
  }, [activeItem, setActiveItem]);

  // Mock data - replace with real API calls
  const stepperSteps: StepperStep[] = [
    {
      id: 1,
      label: 'Docs Received',
      status: 'complete',
      detail: 'Bank statements uploaded for October',
    },
    {
      id: 2,
      label: 'Processing',
      status: 'active',
      detail: 'Your accountant is currently reconciling week 3 of October (75% complete)',
    },
    {
      id: 3,
      label: 'Calculated',
      status: 'pending',
    },
    {
      id: 4,
      label: 'Filed',
      status: 'pending',
    },
  ];

  const expenses: Expense[] = [
    { category: 'Office Supplies', amount: 15000, currency: 'MXN' },
    { category: 'Utilities', amount: 8500, currency: 'MXN' },
    { category: 'Marketing', amount: 12000, currency: 'MXN' },
    { category: 'Travel', amount: 6500, currency: 'MXN' },
  ];

  const downloadFiles: DownloadFile[] = [
    { id: '1', label: 'Estado de Resultados', url: '/downloads/estado-resultados.pdf' },
    { id: '2', label: 'Acuse SAT', url: '/downloads/acuse-sat.pdf' },
    { id: '3', label: 'Opinion de Cumplimiento', url: '/downloads/opinion-cumplimiento.pdf' },
  ];

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const handleDownload = (file: DownloadFile) => {
    // TODO: Implement actual download
    console.log('Downloading:', file.url);
    window.open(file.url, '_blank');
  };

  // Mock chart data
  const chartData = [
    { month: 'Jul', income: 120000, expenses: 95000 },
    { month: 'Aug', income: 135000, expenses: 110000 },
    { month: 'Sep', income: 150000, expenses: 125000 },
    { month: 'Oct', income: 145000, expenses: 130000 },
  ];

  // Determine which content to show based on activeItem
  const showProgress = activeItem === 'client-contabilidades-progress';
  const showOverview = activeItem === 'client-contabilidades-overview' || activeItem === 'client-contabilidades';

  return (
    <div className={styles.container}>
      <h1 className={styles.sectionHeader}>Mis Contabilidades</h1>

      {/* Tab Content */}
      {showOverview && (
        <div className={styles.tabContent}>
          {/* Income vs Expenses Chart */}
          <div className={styles.chartSection}>
            <h2 className={styles.sectionTitle}>Income vs Expenses</h2>
            <div className={styles.chartContainer}>
              {/* Simple bar chart visualization */}
              <div className={styles.barChart}>
                {chartData.map((data, index) => (
                  <div key={index} className={styles.barGroup}>
                    <div className={styles.barLabels}>{data.month}</div>
                    <div className={styles.bars}>
                      <div
                        className={`${styles.bar} ${styles.incomeBar}`}
                        style={{
                          height: `${(data.income / 200000) * 100}%`,
                        }}
                        title={`Income: ${formatCurrency(data.income, 'MXN')}`}
                      />
                      <div
                        className={`${styles.bar} ${styles.expenseBar}`}
                        style={{
                          height: `${(data.expenses / 200000) * 100}%`,
                        }}
                        title={`Expenses: ${formatCurrency(data.expenses, 'MXN')}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.chartLegend}>
                <div className={styles.legendItem}>
                  <div className={`${styles.legendColor} ${styles.incomeColor}`}></div>
                  <span>Income</span>
                </div>
                <div className={styles.legendItem}>
                  <div className={`${styles.legendColor} ${styles.expenseColor}`}></div>
                  <span>Expenses</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Expenses */}
          <div className={styles.expensesSection}>
            <h2 className={styles.sectionTitle}>Top Expenses</h2>
            <div className={styles.expensesList}>
              {expenses.map((expense, index) => (
                <div key={index} className={styles.expenseItem}>
                  <span className={styles.expenseCategory}>{expense.category}</span>
                  <span className={styles.expenseAmount}>
                    {formatCurrency(expense.amount, expense.currency)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Download Center */}
          <div className={styles.downloadSection}>
            <h2 className={styles.sectionTitle}>Download Center</h2>
            <div className={styles.downloadGrid}>
              {downloadFiles.map((file) => (
                <div
                  key={file.id}
                  className={styles.downloadCard}
                  onClick={() => handleDownload(file)}
                >
                  <svg
                    className={styles.downloadIcon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  <span className={styles.downloadLabel}>{file.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showProgress && (
        <div className={styles.tabContent}>
          <div className={styles.stepper}>
            {stepperSteps.map((step, index) => (
              <div key={step.id} className={styles.stepperItem}>
                <div
                  className={`${styles.stepperCircle} ${
                    step.status === 'complete'
                      ? styles.complete
                      : step.status === 'active'
                      ? styles.active
                      : ''
                  }`}
                >
                  {step.status === 'complete' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>
                <div className={styles.stepperLabel}>{step.label}</div>
              </div>
            ))}
          </div>

          {stepperSteps.find((s) => s.status === 'active')?.detail && (
            <div className={styles.progressDetail}>
              {stepperSteps.find((s) => s.status === 'active')?.detail}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

