'use client';

import { memo } from 'react';
import styles from './RefreshButton.module.css';

interface RefreshButtonProps {
  onClick: () => void;
  disabled?: boolean;
  isRefreshing?: boolean;
  label?: string;
  refreshingLabel?: string;
}

const RefreshButton = memo(function RefreshButton({
  onClick,
  disabled = false,
  isRefreshing = false,
  label = 'Actualizar',
  refreshingLabel = 'Actualizando...',
}: RefreshButtonProps) {
  return (
    <button
      className={styles.refreshBtn}
      onClick={onClick}
      disabled={disabled || isRefreshing}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={isRefreshing ? styles.spinning : ''}
      >
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
      {isRefreshing ? refreshingLabel : label}
    </button>
  );
});

export default RefreshButton;

