import styles from './UserBar.module.css';

interface UserBarProps {
  name: string;
  status: string;
}

export default function UserBar({ name, status }: UserBarProps) {
  return (
    <div className={styles.userBar}>
      <div className={styles.greeting}>
        <span className={styles.label}>Hallo,</span>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.status}>
        <span className={styles.label}>
          {/* The extra words are only shown on tablet and larger (see CSS) */}
          Status<span className={styles.statusExtra}> Ihrer Identifizierung</span>
        </span>
        <span className={styles.statusValue}>{status}</span>
      </div>
    </div>
  );
}
