'use client';

import { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import styles from './FinanzasDropdown.module.css';

interface FinanzasOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  category?: string;
}

const finanzasOptions: FinanzasOption[] = [
  {
    id: 'finanzas-aging',
    label: 'Resumen de Antigüedad',
    category: 'Cuentas por Cobrar',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 'finanzas-debtors',
    label: 'Lista de Deudores',
    category: 'Cuentas por Cobrar',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'finanzas-commissions',
    label: 'Cola de Aprobación',
    category: 'Cuentas por Pagar',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    id: 'finanzas-expenses',
    label: 'Gastos',
    category: 'Cuentas por Pagar',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    id: 'finanzas-reports',
    label: 'Generador de Reportes',
    category: 'Reportes',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export default function FinanzasDropdown() {
  const { activeItem, setActiveItem } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine current active option
  const currentOption = finanzasOptions.find(
    (option) => option.id === activeItem
  ) || finanzasOptions[0];

  // Group options by category
  const groupedOptions = finanzasOptions.reduce((acc, option) => {
    const category = option.category || 'Otros';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(option);
    return acc;
  }, {} as Record<string, FinanzasOption[]>);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleOptionClick = (optionId: string) => {
    setActiveItem(optionId);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button
        className={styles.dropdownTrigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className={styles.dropdownIcon}>{currentOption.icon}</span>
        <span className={styles.dropdownLabel}>{currentOption.label}</span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {Object.entries(groupedOptions).map(([category, options]) => (
            <div key={category} className={styles.dropdownGroup}>
              <div className={styles.groupLabel}>{category}</div>
              {options.map((option) => (
                <button
                  key={option.id}
                  className={`${styles.dropdownOption} ${activeItem === option.id ? styles.active : ''}`}
                  onClick={() => handleOptionClick(option.id)}
                >
                  <span className={styles.optionIcon}>{option.icon}</span>
                  <span className={styles.optionLabel}>{option.label}</span>
                  {activeItem === option.id && (
                    <svg
                      className={styles.checkIcon}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

