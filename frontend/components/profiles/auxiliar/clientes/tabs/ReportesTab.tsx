'use client';

import { useState } from 'react';
import styles from './ReportesTab.module.css';

export default function ReportesTab() {
  const [reportType, setReportType] = useState<string>('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [format, setFormat] = useState<'pdf' | 'excel'>('pdf');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!reportType || !dateRange.start || !dateRange.end) {
      alert('Please fill in all required fields');
      return;
    }

    setIsGenerating(true);
    // TODO: Implement report generation API call
    setTimeout(() => {
      setIsGenerating(false);
      // TODO: Trigger download
    }, 2000);
  };

  return (
    <div className={styles.reportesTab}>
      <div className={styles.reportGenerator}>
        <h3 className={styles.generatorTitle}>Generate Report</h3>
        
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Report Type</label>
          <select
            className={styles.formSelect}
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="">Select report type...</option>
            <option value="estado-cuenta">Estado de Cuenta</option>
            <option value="relacion-facturas">Relación de Facturas</option>
            <option value="conciliacion-summary">Conciliation Summary</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Date Range</label>
          <div className={styles.dateInputs}>
            <input
              type="date"
              className={styles.dateInput}
              value={dateRange.start}
              onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            />
            <span className={styles.dateSeparator}>to</span>
            <input
              type="date"
              className={styles.dateInput}
              value={dateRange.end}
              onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Format</label>
          <div className={styles.formatSelector}>
            <label className={styles.formatOption}>
              <input
                type="radio"
                name="format"
                value="pdf"
                checked={format === 'pdf'}
                onChange={(e) => setFormat(e.target.value as 'pdf' | 'excel')}
              />
              <span>PDF</span>
            </label>
            <label className={styles.formatOption}>
              <input
                type="radio"
                name="format"
                value="excel"
                checked={format === 'excel'}
                onChange={(e) => setFormat(e.target.value as 'pdf' | 'excel')}
              />
              <span>Excel</span>
            </label>
          </div>
        </div>

        <button
          className={styles.generateButton}
          onClick={handleGenerate}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <div className={styles.spinner}></div>
              Generating...
            </>
          ) : (
            'Generate & Download'
          )}
        </button>
      </div>
    </div>
  );
}

