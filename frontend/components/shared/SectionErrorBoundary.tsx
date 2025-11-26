'use client';

import React from 'react';
import ErrorBoundary from './ErrorBoundary';

interface SectionErrorBoundaryProps {
  children: React.ReactNode;
  sectionName: string;
}

/**
 * Section-level error boundary that provides context about which section failed
 */
export default function SectionErrorBoundary({ children, sectionName }: SectionErrorBoundaryProps) {
  const fallback = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '300px',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontSize: '36px',
          marginBottom: '1rem',
        }}
      >
        ⚠️
      </div>
      <h3
        style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '0.5rem',
          color: 'var(--text-primary)',
        }}
      >
        Error en {sectionName}
      </h3>
      <p
        style={{
          color: 'var(--text-secondary)',
          marginBottom: '1rem',
          maxWidth: '400px',
        }}
      >
        No se pudo cargar esta sección. Por favor, intenta navegar a otra sección o recargar la página.
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: '0.5rem 1.5rem',
          backgroundColor: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 500,
        }}
      >
        Recargar página
      </button>
    </div>
  );

  return (
    <ErrorBoundary
      fallback={fallback}
      onError={(error, errorInfo) => {
        console.error(`Error in ${sectionName}:`, error, errorInfo);
        // TODO: Send to error tracking with section context
        // Sentry.captureException(error, { tags: { section: sectionName } });
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
