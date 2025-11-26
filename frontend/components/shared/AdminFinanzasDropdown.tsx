'use client';

import { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import styles from './FinanzasDropdown.module.css';

interface AdminFinanzasOption {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const adminFinanzasOptions: AdminFinanzasOption[] = [
  {
    id: 'finanzas-verificar-pagos',
    label: 'Verificar Pagos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    id: 'finanzas-cobranza',
    label: 'Cobranza',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
        <path d="M12 4v6" />
      </svg>
    ),
  },
  {
    id: 'finanzas-certificados',
    label: 'Certificados SAT',
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

export default function AdminFinanzasDropdown() {
  const { activeItem, setActiveItem } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine current active option
  const currentOption = adminFinanzasOptions.find(
    (option) => option.id === activeItem || (activeItem === 'finanzas' && option.id === 'finanzas-verificar-pagos')
  ) || adminFinanzasOptions[0];

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
          {adminFinanzasOptions.map((option) => (
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
      )}
    </div>
  );
}

