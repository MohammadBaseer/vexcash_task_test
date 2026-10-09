import styles from './Logo.module.css';

export default function Logo() {
  return (
    <a href="/" className={styles.logo} aria-label="VEXCASH Startseite">
      <span className={styles.wordmark} aria-hidden="true">
        <span className={styles.vex}>VEX</span>
        <span className={styles.cash}>CASH</span>
        <sup className={styles.registered}>®</sup>
      </span>
      <span className={styles.tagline}>Einfach 60 Tage Geld leihen</span>
    </a>
  );
}
