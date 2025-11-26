'use client';

import { useState } from 'react';
import styles from './BancosTab.module.css';

export default function BancosTab() {
  const [selectedAccount, setSelectedAccount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [transactions, setTransactions] = useState<any[]>([]);

  const handleFileUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    
    setIsProcessing(true);
    // TODO: Implement PDF upload and processing
    setTimeout(() => {
      setIsProcessing(false);
      // TODO: Parse PDF and populate transactions
    }, 2000);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    handleFileUpload(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.bancosTab}>
      <div className={styles.uploadCenter}>
        <h3 className={styles.uploadTitle}>Upload Bank Statement</h3>
        <div className={styles.accountSelector}>
          <label className={styles.selectorLabel}>Bank Account</label>
          <select
            className={styles.selector}
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(e.target.value)}
          >
            <option value="">Select account...</option>
            <option value="1">Account 1 - ****1234</option>
            <option value="2">Account 2 - ****5678</option>
          </select>
        </div>
        <div
          className={styles.dropzone}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <p className={styles.dropzoneText}>Drop PDF file here or click to upload</p>
          <input
            type="file"
            accept=".pdf"
            className={styles.fileInput}
            onChange={(e) => handleFileUpload(e.target.files)}
          />
        </div>
        {isProcessing && (
          <div className={styles.processingIndicator}>
            <div className={styles.spinner}></div>
            <p>Processing PDF...</p>
          </div>
        )}
      </div>

      {transactions.length > 0 && (
        <div className={styles.transactionEditor}>
          <div className={styles.editorHeader}>
            <h3 className={styles.editorTitle}>Transaction Editor</h3>
            <div className={styles.bulkActions}>
              <button className={styles.bulkButton}>Delete Selected</button>
              <button className={styles.bulkButton}>Merge Rows</button>
            </div>
          </div>
          <div className={styles.editorPlaceholder}>
            <p>Editable transaction table will be implemented with inline editing</p>
          </div>
        </div>
      )}
    </div>
  );
}

