'use client';

import { useState, useMemo } from 'react';
import styles from './FirmExpenses.module.css';

interface Expense {
  id: string;
  description: string;
  type: string;
  amount: number;
  date: string;
  cfdiType: 'E'; // Egreso
}

export default function FirmExpenses() {
  // Mock data - replace with real data from API
  const allExpenses: Expense[] = [
    // Enero 2024
    {
      id: '1',
      description: 'Renta Oficina - Enero',
      type: 'Renta',
      amount: 45000,
      date: '2024-01-15',
      cfdiType: 'E',
    },
    {
      id: '2',
      description: 'Suscripción Software - Q1',
      type: 'Software',
      amount: 12000,
      date: '2024-01-20',
      cfdiType: 'E',
    },
    {
      id: '3',
      description: 'Servicios de Internet y Teléfono',
      type: 'Servicios',
      amount: 3500,
      date: '2024-01-25',
      cfdiType: 'E',
    },
    {
      id: '4',
      description: 'Material de Oficina',
      type: 'Suministros',
      amount: 8500,
      date: '2024-01-28',
      cfdiType: 'E',
    },
    // Febrero 2024
    {
      id: '5',
      description: 'Renta Oficina - Febrero',
      type: 'Renta',
      amount: 45000,
      date: '2024-02-15',
      cfdiType: 'E',
    },
    {
      id: '6',
      description: 'Servicios de Internet y Teléfono',
      type: 'Servicios',
      amount: 3500,
      date: '2024-02-25',
      cfdiType: 'E',
    },
    {
      id: '7',
      description: 'Mantenimiento Equipos',
      type: 'Mantenimiento',
      amount: 12500,
      date: '2024-02-10',
      cfdiType: 'E',
    },
    {
      id: '8',
      description: 'Seguro de Oficina',
      type: 'Seguros',
      amount: 8500,
      date: '2024-02-20',
      cfdiType: 'E',
    },
    // Marzo 2024
    {
      id: '9',
      description: 'Renta Oficina - Marzo',
      type: 'Renta',
      amount: 45000,
      date: '2024-03-15',
      cfdiType: 'E',
    },
    {
      id: '10',
      description: 'Servicios de Internet y Teléfono',
      type: 'Servicios',
      amount: 3500,
      date: '2024-03-25',
      cfdiType: 'E',
    },
    {
      id: '11',
      description: 'Capacitación Personal',
      type: 'Capacitación',
      amount: 18000,
      date: '2024-03-05',
      cfdiType: 'E',
    },
    {
      id: '12',
      description: 'Publicidad y Marketing',
      type: 'Marketing',
      amount: 22000,
      date: '2024-03-18',
      cfdiType: 'E',
    },
    // Abril 2024
    {
      id: '13',
      description: 'Renta Oficina - Abril',
      type: 'Renta',
      amount: 45000,
      date: '2024-04-15',
      cfdiType: 'E',
    },
    {
      id: '14',
      description: 'Servicios de Internet y Teléfono',
      type: 'Servicios',
      amount: 3500,
      date: '2024-04-25',
      cfdiType: 'E',
    },
    {
      id: '15',
      description: 'Limpieza y Aseo',
      type: 'Servicios',
      amount: 6000,
      date: '2024-04-10',
      cfdiType: 'E',
    },
    // Mayo 2024
    {
      id: '16',
      description: 'Renta Oficina - Mayo',
      type: 'Renta',
      amount: 45000,
      date: '2024-05-15',
      cfdiType: 'E',
    },
    {
      id: '17',
      description: 'Servicios de Internet y Teléfono',
      type: 'Servicios',
      amount: 3500,
      date: '2024-05-25',
      cfdiType: 'E',
    },
    {
      id: '18',
      description: 'Actualización Software',
      type: 'Software',
      amount: 15000,
      date: '2024-05-08',
      cfdiType: 'E',
    },
    {
      id: '19',
      description: 'Consultoría Legal',
      type: 'Servicios Profesionales',
      amount: 28000,
      date: '2024-05-22',
      cfdiType: 'E',
    },
    // Junio 2024
    {
      id: '20',
      description: 'Renta Oficina - Junio',
      type: 'Renta',
      amount: 45000,
      date: '2024-06-15',
      cfdiType: 'E',
    },
    {
      id: '21',
      description: 'Servicios de Internet y Teléfono',
      type: 'Servicios',
      amount: 3500,
      date: '2024-06-25',
      cfdiType: 'E',
    },
    {
      id: '22',
      description: 'Equipamiento Nuevo',
      type: 'Equipamiento',
      amount: 45000,
      date: '2024-06-12',
      cfdiType: 'E',
    },
    // Julio 2024
    {
      id: '23',
      description: 'Renta Oficina - Julio',
      type: 'Renta',
      amount: 45000,
      date: '2024-07-15',
      cfdiType: 'E',
    },
    {
      id: '24',
      description: 'Servicios de Internet y Teléfono',
      type: 'Servicios',
      amount: 3500,
      date: '2024-07-25',
      cfdiType: 'E',
    },
    {
      id: '25',
      description: 'Evento Corporativo',
      type: 'Eventos',
      amount: 35000,
      date: '2024-07-05',
      cfdiType: 'E',
    },
    // Agosto 2024
    {
      id: '26',
      description: 'Renta Oficina - Agosto',
      type: 'Renta',
      amount: 45000,
      date: '2024-08-15',
      cfdiType: 'E',
    },
    {
      id: '27',
      description: 'Servicios de Internet y Teléfono',
      type: 'Servicios',
      amount: 3500,
      date: '2024-08-25',
      cfdiType: 'E',
    },
    // Septiembre 2024
    {
      id: '28',
      description: 'Renta Oficina - Septiembre',
      type: 'Renta',
      amount: 45000,
      date: '2024-09-15',
      cfdiType: 'E',
    },
    {
      id: '29',
      description: 'Servicios de Internet y Teléfono',
      type: 'Servicios',
      amount: 3500,
      date: '2024-09-25',
      cfdiType: 'E',
    },
    {
      id: '30',
      description: 'Auditoría Externa',
      type: 'Servicios Profesionales',
      amount: 32000,
      date: '2024-09-10',
      cfdiType: 'E',
    },
    // Octubre 2024
    {
      id: '31',
      description: 'Renta Oficina - Octubre',
      type: 'Renta',
      amount: 45000,
      date: '2024-10-15',
      cfdiType: 'E',
    },
    {
      id: '32',
      description: 'Servicios de Internet y Teléfono',
      type: 'Servicios',
      amount: 3500,
      date: '2024-10-25',
      cfdiType: 'E',
    },
    // Noviembre 2024
    {
      id: '33',
      description: 'Renta Oficina - Noviembre',
      type: 'Renta',
      amount: 45000,
      date: '2024-11-15',
      cfdiType: 'E',
    },
    {
      id: '34',
      description: 'Servicios de Internet y Teléfono',
      type: 'Servicios',
      amount: 3500,
      date: '2024-11-25',
      cfdiType: 'E',
    },
    {
      id: '35',
      description: 'Bonos de Fin de Año',
      type: 'Personal',
      amount: 55000,
      date: '2024-11-28',
      cfdiType: 'E',
    },
    // Diciembre 2024
    {
      id: '36',
      description: 'Renta Oficina - Diciembre',
      type: 'Renta',
      amount: 45000,
      date: '2024-12-15',
      cfdiType: 'E',
    },
    {
      id: '37',
      description: 'Servicios de Internet y Teléfono',
      type: 'Servicios',
      amount: 3500,
      date: '2024-12-25',
      cfdiType: 'E',
    },
    {
      id: '38',
      description: 'Fiesta de Fin de Año',
      type: 'Eventos',
      amount: 25000,
      date: '2024-12-20',
      cfdiType: 'E',
    },
    // Diciembre 2023
    {
      id: '39',
      description: 'Renta Oficina - Diciembre 2023',
      type: 'Renta',
      amount: 45000,
      date: '2023-12-15',
      cfdiType: 'E',
    },
    {
      id: '40',
      description: 'Servicios de Internet y Teléfono',
      type: 'Servicios',
      amount: 3500,
      date: '2023-12-25',
      cfdiType: 'E',
    },
    // Noviembre 2023
    {
      id: '41',
      description: 'Renta Oficina - Noviembre 2023',
      type: 'Renta',
      amount: 45000,
      date: '2023-11-15',
      cfdiType: 'E',
    },
    {
      id: '42',
      description: 'Servicios de Internet y Teléfono',
      type: 'Servicios',
      amount: 3500,
      date: '2023-11-25',
      cfdiType: 'E',
    },
  ];

  // Initialize period to current month
  const now = new Date();
  const [selectedMonth, setSelectedMonth] = useState(
    String(now.getMonth() + 1).padStart(2, '0')
  );
  const [selectedYear, setSelectedYear] = useState(String(now.getFullYear()));

  // Filter expenses by selected period
  const expenses = useMemo(() => {
    return allExpenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      const expenseMonth = String(expenseDate.getMonth() + 1).padStart(2, '0');
      const expenseYear = String(expenseDate.getFullYear());
      return expenseMonth === selectedMonth && expenseYear === selectedYear;
    });
  }, [selectedMonth, selectedYear, allExpenses]);

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  // Generate month options
  const months = [
    { value: '01', label: 'Enero' },
    { value: '02', label: 'Febrero' },
    { value: '03', label: 'Marzo' },
    { value: '04', label: 'Abril' },
    { value: '05', label: 'Mayo' },
    { value: '06', label: 'Junio' },
    { value: '07', label: 'Julio' },
    { value: '08', label: 'Agosto' },
    { value: '09', label: 'Septiembre' },
    { value: '10', label: 'Octubre' },
    { value: '11', label: 'Noviembre' },
    { value: '12', label: 'Diciembre' },
  ];

  // Generate year options (current year and 2 years back)
  const currentYear = now.getFullYear();
  const years = Array.from({ length: 3 }, (_, i) => currentYear - i);

  return (
    <div className={styles.firmExpenses}>
      <div className={styles.header}>
        <div className={styles.periodSelector}>
          <div className={styles.periodField}>
            <label htmlFor="periodMonth">Mes</label>
            <select
              id="periodMonth"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className={styles.periodSelect}
            >
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.periodField}>
            <label htmlFor="periodYear">Año</label>
            <select
              id="periodYear"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className={styles.periodSelect}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.total}>
          <span className={styles.totalLabel}>Total del Período</span>
          <span className={styles.totalAmount}>${totalExpenses.toLocaleString()}</span>
        </div>
      </div>

      <div className={styles.expensesList}>
        {expenses.map((expense) => (
          <div key={expense.id} className={styles.expenseItem}>
            <div className={styles.expenseInfo}>
              <div className={styles.expenseDescription}>{expense.description}</div>
              <div className={styles.expenseMeta}>
                <span className={styles.expenseType}>{expense.type}</span>
                <span className={styles.expenseDate}>
                  {new Date(expense.date).toLocaleDateString('es-MX', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </div>
            <div className={styles.expenseAmount}>
              ${expense.amount.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {expenses.length === 0 && (
        <div className={styles.emptyState}>
          <p>No hay gastos registrados para el período seleccionado.</p>
        </div>
      )}
    </div>
  );
}

