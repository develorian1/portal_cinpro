'use client';

import { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import styles from './FinanzasDropdown.module.css';

interface ClientContabilidadesOption {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const clientContabilidadesOptions: ClientContabilidadesOption[] = [
  {
    id: 'client-contabilidades-progress',
    label: 'Monthly Progress',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: 'client-contabilidades-overview',
    label: 'Financial Overview',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function ClientContabilidadesDropdown() {
  const { activeItem, setActiveItem } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine current active option
  const currentOption = clientContabilidadesOptions.find(
    (option) => option.id === activeItem || 
    (activeItem === 'client-contabilidades' && option.id === 'client-contabilidades-progress')
  ) || clientContabilidadesOptions[0];

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
          {clientContabilidadesOptions.map((option) => (
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

