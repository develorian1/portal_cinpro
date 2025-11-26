'use client';

import Plantillas from './Plantillas';
import styles from './Comunicacion.module.css';

export default function Comunicacion() {
  return (
    <div className={styles.comunicacion}>
      <div className={styles.content}>
        <Plantillas />
      </div>
    </div>
  );
}

