'use client';

import { useState } from 'react';
import styles from './SupportLoad.module.css';

interface MessageVolumeData {
  date: string;
  count: number;
}

interface TemplateUsage {
  templateName: string;
  usageCount: number;
}

export default function SupportLoad() {
  // Mock data - replace with real data from API
  const [messageVolume] = useState<MessageVolumeData[]>([
    { date: 'Lun', count: 45 },
    { date: 'Mar', count: 52 },
    { date: 'Mié', count: 38 },
    { date: 'Jue', count: 61 },
    { date: 'Vie', count: 48 },
    { date: 'Sáb', count: 25 },
    { date: 'Dom', count: 18 },
  ]);

  const [templateUsage] = useState<TemplateUsage[]>([
    { templateName: 'Recordatorio de Impuestos', usageCount: 145 },
    { templateName: 'Solicitud de Documentos', usageCount: 98 },
    { templateName: 'Confirmación de Cita', usageCount: 76 },
    { templateName: 'Recordatorio de Pago', usageCount: 64 },
    { templateName: 'Bienvenida Nuevo Cliente', usageCount: 52 },
    { templateName: 'Actualización de Estado', usageCount: 43 },
    { templateName: 'Seguimiento de Proyecto', usageCount: 38 },
  ]);

  const maxMessages = Math.max(...messageVolume.map((m) => m.count));
  const maxTemplateUsage = Math.max(...templateUsage.map((t) => t.usageCount));

  return (
    <div className={styles.supportLoad}>
      {/* Messages Volume - Line Chart */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Volumen de Mensajes</h2>
        <p className={styles.cardSubtitle}>Mensajes por día</p>
        <div className={styles.lineChart}>
          <div className={styles.chartArea}>
            <div className={styles.chartGrid}>
              {messageVolume.map((data, index) => {
                const height = (data.count / maxMessages) * 100;
                const isLast = index === messageVolume.length - 1;
                const nextData = messageVolume[index + 1];
                const nextHeight = nextData ? (nextData.count / maxMessages) * 100 : height;
                
                return (
                  <div key={index} className={styles.linePoint}>
                    <div
                      className={styles.point}
                      style={{ bottom: `${height}%` }}
                      title={`${data.date}: ${data.count} mensajes`}
                    />
                    {!isLast && (
                      <svg className={styles.line} style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}>
                        <line
                          x1="50%"
                          y1={`${100 - height}%`}
                          x2="150%"
                          y2={`${100 - nextHeight}%`}
                          stroke="var(--azure)"
                          strokeWidth="2"
                        />
                      </svg>
                    )}
                    <div className={styles.pointLabel}>
                      <span className={styles.dayLabel}>{data.date}</span>
                      <span className={styles.countLabel}>{data.count}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Template Usage - Bar Chart */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Uso de Plantillas</h2>
        <p className={styles.cardSubtitle}>Plantillas más utilizadas</p>
        <div className={styles.barChart}>
          {templateUsage.map((template, index) => {
            const height = (template.usageCount / maxTemplateUsage) * 100;
            return (
              <div key={index} className={styles.barGroup}>
                <div className={styles.barContainer}>
                  <div
                    className={styles.bar}
                    style={{ height: `${height}%` }}
                    title={`${template.templateName}: ${template.usageCount} usos`}
                  />
                </div>
                <div className={styles.barLabel}>
                  <span className={styles.templateName}>{template.templateName}</span>
                  <span className={styles.usageCount}>{template.usageCount}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

