import styles from './MenuToggle.module.css';

interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
  controls: string; // id of the menu this button opens and closes
}

export default function MenuToggle({ isOpen, onClick, controls }: MenuToggleProps) {
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={controls}
      aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
    >
      {isOpen ? (
        // Close icon (X)
        <svg className={styles.close} viewBox="0 0 40 40" aria-hidden="true">
          <path d="M3 3 L37 37 M37 3 L3 37" />
        </svg>
      ) : (
        // Hamburger icon (three bars)
        <span className={styles.burger} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      )}
    </button>
  );
}
