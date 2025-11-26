'use client';

import { useState } from 'react';
import styles from './ReportGenerator.module.css';
import 'boxicons/css/boxicons.min.css';

interface ReportType {
  id: string;
  name: string;
  description: string;
  iconClass: string;
}

export default function ReportGenerator() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const reportTypes: ReportType[] = [
    {
      id: 'profit-loss',
      name: 'Estado de Resultados',
      description: 'Estado de Resultados',
      iconClass: 'bx-bar-chart-alt-2',
    },
    {
      id: 'balance-sheet',
      name: 'Balance General',
      description: 'Balance General',
      iconClass: 'bx-trending-up',
    },
    {
      id: 'commissions',
      name: 'Nómina de Comisiones',
      description: 'Historial de Comisiones',
      iconClass: 'bx-dollar',
    },
    {
      id: 'tax-report',
      name: 'Impuestos Firm',
      description: 'Reporte Fiscal',
      iconClass: 'bx-file-blank',
    },
  ];

  const handleReportClick = (reportId: string) => {
    setSelectedReport(reportId);
    // Set default date range to current month
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    setDateRange({
      start: firstDay.toISOString().split('T')[0],
      end: lastDay.toISOString().split('T')[0],
    });
  };

  const handleDownload = () => {
    if (!selectedReport) return;
    if (!dateRange.start || !dateRange.end) {
      alert('Por favor selecciona un rango de fechas');
      return;
    }
    // TODO: Implement actual download logic
    console.log('Download report:', selectedReport, dateRange);
    alert(`Descargando reporte: ${reportTypes.find(r => r.id === selectedReport)?.name}`);
  };

  const handleCancel = () => {
    setSelectedReport(null);
    setDateRange({ start: '', end: '' });
  };

  return (
    <div className={styles.reportGenerator}>

      {!selectedReport ? (
        <div className={styles.reportGrid}>
          {reportTypes.map((report) => (
            <div
              key={report.id}
              className={styles.reportCard}
              onClick={() => handleReportClick(report.id)}
            >
              <div className={styles.reportIcon}>
                <i className={`bx ${report.iconClass}`}></i>
              </div>
              <div className={styles.reportInfo}>
                <h3 className={styles.reportName}>{report.name}</h3>
                <p className={styles.reportDescription}>{report.description}</p>
              </div>
              <div className={styles.reportArrow}>→</div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.reportConfig}>
          <div className={styles.configHeader}>
            <h3 className={styles.configTitle}>
              {reportTypes.find(r => r.id === selectedReport)?.name}
            </h3>
            <button className={styles.cancelBtn} onClick={handleCancel}>
              ← Volver
            </button>
          </div>

          <div className={styles.dateRangeSelector}>
            <div className={styles.dateField}>
              <label htmlFor="startDate">Fecha Inicio</label>
              <input
                id="startDate"
                type="date"
                value={dateRange.start}
                onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                className={styles.dateInput}
              />
            </div>
            <div className={styles.dateField}>
              <label htmlFor="endDate">Fecha Fin</label>
              <input
                id="endDate"
                type="date"
                value={dateRange.end}
                onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                className={styles.dateInput}
              />
            </div>
          </div>

          <div className={styles.downloadOptions}>
            <button
              className={styles.downloadBtn}
              onClick={handleDownload}
              disabled={!dateRange.start || !dateRange.end}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Descargar PDF
            </button>
            <button
              className={`${styles.downloadBtn} ${styles.excelBtn}`}
              onClick={handleDownload}
              disabled={!dateRange.start || !dateRange.end}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Descargar Excel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

