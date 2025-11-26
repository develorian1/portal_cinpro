'use client';

import { useState } from 'react';
import { Table } from '@/components/shared';
import styles from './CollectionEfficiency.module.css';

interface DSOData {
  date: string;
  value: number;
}

interface PaymentMethod {
  method: string;
  percentage: number;
  amount: number;
}

interface TopDebtor {
  id: string;
  clientName: string;
  outstandingAmount: number;
  daysOutstanding: number;
}

export default function CollectionEfficiency() {
  // Mock data - replace with real data from API
  const [dsoData] = useState<DSOData[]>([
    { date: 'Ene', value: 32 },
    { date: 'Feb', value: 28 },
    { date: 'Mar', value: 35 },
    { date: 'Abr', value: 30 },
    { date: 'May', value: 27 },
    { date: 'Jun', value: 29 },
    { date: 'Jul', value: 31 },
    { date: 'Ago', value: 33 },
    { date: 'Sep', value: 28 },
    { date: 'Oct', value: 26 },
    { date: 'Nov', value: 29 },
    { date: 'Dic', value: 30 },
  ]);

  const [paymentMethods] = useState<PaymentMethod[]>([
    { method: 'SPEI', percentage: 65, amount: 1250000 },
    { method: 'Cheque', percentage: 25, amount: 480000 },
    { method: 'Efectivo', percentage: 10, amount: 192000 },
  ]);

  const [topDebtors] = useState<TopDebtor[]>([
    { id: '1', clientName: 'Hospital General del Norte', outstandingAmount: 250000, daysOutstanding: 45 },
    { id: '2', clientName: 'Corporación Industrial SA', outstandingAmount: 180000, daysOutstanding: 72 },
    { id: '3', clientName: 'Clínica San José', outstandingAmount: 150000, daysOutstanding: 38 },
    { id: '4', clientName: 'Grupo Educativo ABC', outstandingAmount: 120000, daysOutstanding: 25 },
    { id: '5', clientName: 'Constructora Delta', outstandingAmount: 95000, daysOutstanding: 52 },
  ]);

  const maxDSO = Math.max(...dsoData.map((d) => d.value));
  const minDSO = Math.min(...dsoData.map((d) => d.value));
  const dsoRange = maxDSO - minDSO || 1;

  // Calculate pie chart segments
  const totalAmount = paymentMethods.reduce((sum, pm) => sum + pm.percentage, 0);
  
  // Calculate cumulative angles for pie chart
  const pieSegments = paymentMethods.reduce((acc, pm, index) => {
    const percentage = pm.percentage / totalAmount;
    const angle = percentage * 360;
    const startAngle = acc.length > 0 ? acc[acc.length - 1].endAngle : 0;
    const endAngle = startAngle + angle;
    
    const startAngleRad = (startAngle - 90) * (Math.PI / 180);
    const endAngleRad = (endAngle - 90) * (Math.PI / 180);
    const largeArcFlag = angle > 180 ? 1 : 0;

    const x1 = 100 + 80 * Math.cos(startAngleRad);
    const y1 = 100 + 80 * Math.sin(startAngleRad);
    const x2 = 100 + 80 * Math.cos(endAngleRad);
    const y2 = 100 + 80 * Math.sin(endAngleRad);

    const colors = ['var(--azure)', 'var(--success)', 'var(--warning)'];
    const color = colors[index % colors.length];

    acc.push({
      method: pm.method,
      percentage: pm.percentage,
      amount: pm.amount,
      startAngle,
      endAngle,
      x1,
      y1,
      x2,
      y2,
      largeArcFlag,
      color,
    });
    
    return acc;
  }, [] as Array<{
    method: string;
    percentage: number;
    amount: number;
    startAngle: number;
    endAngle: number;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    largeArcFlag: number;
    color: string;
  }>);

  return (
    <div className={styles.collectionEfficiency}>
      {/* DSO (Days Sales Outstanding) - Line Chart */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>DSO (Días de Ventas Pendientes)</h2>
        <div className={styles.lineChart}>
          <div className={styles.chartArea}>
            <div className={styles.chartGrid}>
              {dsoData.map((data, index) => {
                const height = ((data.value - minDSO) / dsoRange) * 100;
                const isLast = index === dsoData.length - 1;
                const nextData = dsoData[index + 1];
                const nextHeight = nextData ? ((nextData.value - minDSO) / dsoRange) * 100 : height;
                
                return (
                  <div key={index} className={styles.linePoint}>
                    <div
                      className={styles.point}
                      style={{ bottom: `${height}%` }}
                      title={`${data.date}: ${data.value} días`}
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
                      <span className={styles.monthLabel}>{data.date}</span>
                      <span className={styles.valueLabel}>{data.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Method Mix - Pie Chart */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Distribución de Métodos de Pago</h2>
        <div className={styles.pieChartContainer}>
          <div className={styles.pieChart}>
            <svg viewBox="0 0 200 200" className={styles.pieSvg}>
              {pieSegments.map((segment) => (
                <path
                  key={segment.method}
                  d={`M 100 100 L ${segment.x1} ${segment.y1} A 80 80 0 ${segment.largeArcFlag} 1 ${segment.x2} ${segment.y2} Z`}
                  fill={segment.color}
                  className={styles.pieSegment}
                  title={`${segment.method}: ${segment.percentage}%`}
                />
              ))}
            </svg>
          </div>
          <div className={styles.pieLegend}>
            {pieSegments.map((segment) => (
              <div key={segment.method} className={styles.legendItem}>
                <div className={styles.legendColor} style={{ backgroundColor: segment.color }} />
                <div className={styles.legendText}>
                  <span className={styles.legendMethod}>{segment.method}</span>
                  <span className={styles.legendPercentage}>{segment.percentage}%</span>
                  <span className={styles.legendAmount}>${segment.amount.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Debtors - List */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Principales Deudores</h2>
        <p className={styles.cardSubtitle}>Clientes que causan mayor arrastre de flujo de efectivo</p>
        <Table
          data={topDebtors}
          columns={[
            {
              key: 'clientName',
              header: 'Cliente',
              render: (debtor) => (
                <span className={styles.clientName}>{debtor.clientName}</span>
              ),
            },
            {
              key: 'outstandingAmount',
              header: 'Monto Pendiente',
              render: (debtor) => (
                <span className={styles.outstandingAmount}>
                  ${debtor.outstandingAmount.toLocaleString()}
                </span>
              ),
            },
            {
              key: 'daysOutstanding',
              header: 'Días Pendientes',
              render: (debtor) => (
                <span className={debtor.daysOutstanding > 45 ? styles.daysHigh : styles.daysMedium}>
                  {debtor.daysOutstanding} días
                </span>
              ),
            },
          ]}
          keyExtractor={(debtor) => debtor.id}
          containerClassName={styles.tableContainer}
        />
      </div>
    </div>
  );
}

