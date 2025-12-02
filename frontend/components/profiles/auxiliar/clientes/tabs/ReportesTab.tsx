'use client';

import { useEffect, useState } from 'react';
import { ReportJob, ReportPreset } from '@/types/accountant';
import { useToast } from '@/contexts/ToastContext';
import { useNotifications } from '@/contexts/NotificationContext';
import styles from './ReportesTab.module.css';

interface ReportesTabProps {
  clientId: string;
  presets: ReportPreset[];
  clientName: string;
}

export default function ReportesTab({ clientId, clientName, presets }: ReportesTabProps) {
  const [reportType, setReportType] = useState<string>('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [format, setFormat] = useState<'pdf' | 'excel'>('pdf');
  const [isGenerating, setIsGenerating] = useState(false);
  const [presetList, setPresetList] = useState<ReportPreset[]>(presets);
  const [jobs, setJobs] = useState<ReportJob[]>([]);
  const toast = useToast();
  const { addNotification } = useNotifications();

  useEffect(() => {
    if (presets.length > 0) {
      const preset = presets[0];
      setReportType(preset.reportType);
      setFormat(preset.format);
      setDateRange(preset.dateRange);
    }
  }, [presets]);

  const updateJob = (jobId: string, updates: Partial<ReportJob>) => {
    setJobs((prev) => prev.map((job) => (job.id === jobId ? { ...job, ...updates } : job)));
  };

  const simulateJobProgress = (job: ReportJob) => {
    setTimeout(() => {
      updateJob(job.id, { status: 'processing' });
    }, 700);
    setTimeout(() => {
      updateJob(job.id, {
        status: 'ready',
        completedAt: new Date().toISOString(),
        url: `/downloads/${job.id}.${job.format === 'pdf' ? 'pdf' : 'xlsx'}`,
      });
      addNotification({
        title: 'Reporte listo',
        message: `${job.type} disponible para ${clientName}`,
        type: 'report',
        clientId,
        tab: 'reportes',
      });
    }, 2500);
  };

  const handleGenerate = async () => {
    if (!reportType || !dateRange.start || !dateRange.end) {
      toast.info('Completa el formulario para generar el reporte');
      return;
    }

    setIsGenerating(true);
    try {
      const response = await fetch('/api/auxiliar/workspace', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'reports:enqueue',
          clientId,
          type: reportType,
          format,
          range: dateRange,
        }),
      });
      if (!response.ok) {
        throw new Error('No se pudo iniciar el reporte');
      }
      const result = await response.json();
      const job: ReportJob = result.job;
      setJobs((prev) => [job, ...prev]);
      simulateJobProgress(job);
      toast.success('Reporte en proceso');
    } catch (error) {
      toast.error('Ocurrio un error al generar el reporte');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleApplyPreset = (presetId: string) => {
    const preset = presetList.find((item) => item.id === presetId);
    if (!preset) return;
    setReportType(preset.reportType);
    setFormat(preset.format);
    setDateRange(preset.dateRange);
  };

  const handleSavePreset = () => {
    if (!reportType || !dateRange.start || !dateRange.end) {
      toast.info('Configura el reporte antes de guardar el preset');
      return;
    }
    const newPreset: ReportPreset = {
      id: `preset-${Date.now()}`,
      label: `${reportType} ${dateRange.start}`,
      reportType,
      format,
      dateRange,
    };
    setPresetList((prev) => [newPreset, ...prev]);
    toast.success('Preset guardado');
  };

  const handleDownload = (job: ReportJob) => {
    if (!job.url) return;
    const link = document.createElement('a');
    link.href = job.url;
    link.download = job.url.split('/').pop() || 'reporte';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.reportesTab}>
      <div className={styles.reportGenerator}>
        <h3 className={styles.generatorTitle}>Generar Reporte para {clientName}</h3>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Tipo de reporte</label>
          <select
            className={styles.formSelect}
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="">Selecciona...</option>
            <option value="estado-cuenta">Estado de Cuenta</option>
            <option value="relacion-facturas">Relacion de Facturas</option>
            <option value="conciliacion-summary">Resumen de Conciliacion</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Rango de fechas</label>
          <div className={styles.dateInputs}>
            <input
              type="date"
              className={styles.dateInput}
              value={dateRange.start}
              onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            />
            <span className={styles.dateSeparator}>a</span>
            <input
              type="date"
              className={styles.dateInput}
              value={dateRange.end}
              onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Formato</label>
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

        <div className={styles.buttonsRow}>
          <button className={styles.secondaryButton} onClick={handleSavePreset}>
            Guardar preset
          </button>
          <button
            className={styles.generateButton}
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <div className={styles.spinner}></div>
                Generando...
              </>
            ) : (
              'Generar'
            )}
          </button>
        </div>
      </div>

      <div className={styles.presetsSection}>
        <h4>Presets guardados</h4>
        <div className={styles.presetList}>
          {presetList.length === 0 && <p className={styles.emptyState}>Sin presets</p>}
          {presetList.map((preset) => (
            <button
              key={preset.id}
              className={styles.presetChip}
              onClick={() => handleApplyPreset(preset.id)}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.jobsSection}>
        <h4>Historial de reportes</h4>
        {jobs.length === 0 ? (
          <p className={styles.emptyState}>Aun no generas reportes</p>
        ) : (
          <div className={styles.jobsList}>
            {jobs.map((job) => (
              <div key={job.id} className={styles.jobCard}>
                <div>
                  <div className={styles.jobTitle}>{job.type}</div>
                  <p className={styles.jobMeta}>
                    {new Date(job.requestedAt).toLocaleString('es-MX')} · {job.format.toUpperCase()}
                  </p>
                </div>
                <span className={`${styles.jobStatus} ${styles[job.status]}`}>{job.status}</span>
                <div className={styles.jobActions}>
                  {job.status === 'ready' && job.url && (
                    <button className={styles.downloadButton} onClick={() => handleDownload(job)}>
                      Descargar
                    </button>
                  )}
                  {job.status === 'failed' && (
                    <button className={styles.retryButton} onClick={handleGenerate}>
                      Reintentar
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
