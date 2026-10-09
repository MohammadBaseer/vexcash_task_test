import styles from './PagePlaceholder.module.css';

interface PagePlaceholderProps {
  title: string;
}

export default function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <section className={styles.placeholder}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>Dieser Bereich ist in der Demo noch nicht verfügbar.</p>
    </section>
  );
}
