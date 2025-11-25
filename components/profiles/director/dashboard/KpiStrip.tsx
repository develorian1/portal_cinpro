import styles from './KpiStrip.module.css';

interface KpiStripProps {
  children: React.ReactNode;
}

export default function KpiStrip({ children }: KpiStripProps) {
  return <div className={styles.kpiStrip}>{children}</div>;
}

