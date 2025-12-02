'use client';

import { ReactNode } from 'react';
import styles from './Table.module.css';

export interface TableColumn<T> {
  key: string;
  header: ReactNode | ((props?: { selectAll?: boolean; onSelectAll?: () => void }) => ReactNode);
  render: (row: T, index: number) => ReactNode;
  className?: string;
  headerClassName?: string;
  /** Label shown on mobile card view. If not provided, uses header text */
  mobileLabel?: string;
  /** Hide this column on mobile card view */
  hideOnMobile?: boolean;
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  keyExtractor: (row: T, index: number) => string;
  emptyMessage?: string;
  emptyMessageColSpan?: number;
  onRowClick?: (row: T, index: number) => void;
  getRowClassName?: (row: T, index: number) => string;
  className?: string;
  containerClassName?: string;
}

export default function Table<T>({
  data,
  columns,
  keyExtractor,
  emptyMessage = 'No hay datos disponibles',
  emptyMessageColSpan,
  onRowClick,
  getRowClassName,
  className,
  containerClassName,
}: TableProps<T>) {
  const colSpan = emptyMessageColSpan || columns.length;

  const renderHeader = (column: TableColumn<T>, index: number) => {
    if (typeof column.header === 'function') {
      return column.header();
    }
    return column.header;
  };

  const getMobileLabel = (column: TableColumn<T>): string => {
    if (column.mobileLabel) return column.mobileLabel;
    if (typeof column.header === 'string') return column.header;
    return '';
  };

  return (
    <div className={`${styles.tableContainer} ${containerClassName || ''}`}>
      <table className={`${styles.table} ${className || ''}`}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={column.key} className={column.headerClassName}>
                {renderHeader(column, index)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={colSpan} className={styles.emptyState}>
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={keyExtractor(row, index)}
                className={getRowClassName ? getRowClassName(row, index) : ''}
                onClick={onRowClick ? () => onRowClick(row, index) : undefined}
                style={onRowClick ? { cursor: 'pointer' } : undefined}
              >
                {columns.map((column) => (
                  <td 
                    key={column.key} 
                    className={`${column.className || ''} ${column.hideOnMobile ? styles.hideOnMobile : ''}`}
                    data-label={getMobileLabel(column)}
                  >
                    {column.render(row, index)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

