'use client';

import { useState } from 'react';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
  showDeductibleToggle?: boolean;
  showSupplierFilter?: boolean;
}

export interface FilterState {
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
  paymentStatus?: 'paid' | 'pending' | 'all';
  cancelled?: boolean;
  deductible?: 'deductible' | 'non-deductible' | 'all';
  supplier?: string;
}

export default function FilterBar({ 
  onFilterChange, 
  showDeductibleToggle = false,
  showSupplierFilter = false 
}: FilterBarProps) {
  const [filters, setFilters] = useState<FilterState>({
    dateRange: { start: null, end: null },
    paymentStatus: 'all',
    cancelled: false,
    deductible: 'all',
    supplier: '',
  });

  const handleDateChange = (type: 'start' | 'end', value: string) => {
    const newFilters = {
      ...filters,
      dateRange: {
        ...filters.dateRange,
        [type]: value ? new Date(value) : null,
      },
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleStatusChange = (status: 'paid' | 'pending' | 'all') => {
    const newFilters = { ...filters, paymentStatus: status };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleCancelledChange = (checked: boolean) => {
    const newFilters = { ...filters, cancelled: checked };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleDeductibleChange = (value: 'deductible' | 'non-deductible' | 'all') => {
    const newFilters = { ...filters, deductible: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSupplierChange = (value: string) => {
    const newFilters = { ...filters, supplier: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Date Range</label>
        <div className={styles.dateInputs}>
          <input
            type="date"
            className={styles.dateInput}
            onChange={(e) => handleDateChange('start', e.target.value)}
          />
          <span className={styles.dateSeparator}>to</span>
          <input
            type="date"
            className={styles.dateInput}
            onChange={(e) => handleDateChange('end', e.target.value)}
          />
        </div>
      </div>

      {!showDeductibleToggle && (
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Payment Status</label>
          <select
            className={styles.filterSelect}
            value={filters.paymentStatus}
            onChange={(e) => handleStatusChange(e.target.value as 'paid' | 'pending' | 'all')}
          >
            <option value="all">All</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      )}

      {!showDeductibleToggle && (
        <div className={styles.filterGroup}>
          <label className={styles.filterCheckboxLabel}>
            <input
              type="checkbox"
              checked={filters.cancelled}
              onChange={(e) => handleCancelledChange(e.target.checked)}
              className={styles.filterCheckbox}
            />
            <span>Include Cancelled</span>
          </label>
        </div>
      )}

      {showDeductibleToggle && (
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Type</label>
          <select
            className={styles.filterSelect}
            value={filters.deductible}
            onChange={(e) => handleDeductibleChange(e.target.value as 'deductible' | 'non-deductible' | 'all')}
          >
            <option value="all">All</option>
            <option value="deductible">Deductible</option>
            <option value="non-deductible">Non-Deductible</option>
          </select>
        </div>
      )}

      {showSupplierFilter && (
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Supplier</label>
          <input
            type="text"
            className={styles.filterInput}
            placeholder="Search supplier..."
            value={filters.supplier}
            onChange={(e) => handleSupplierChange(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

