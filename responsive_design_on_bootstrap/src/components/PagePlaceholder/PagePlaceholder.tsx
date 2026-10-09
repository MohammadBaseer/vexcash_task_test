interface PagePlaceholderProps {
  title: string;
}

export default function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <section className="page-placeholder">
      <h2 className="page-placeholder-title">{title}</h2>
      <p className="page-placeholder-text fw-light mb-0">
        Dieser Bereich ist in der Demo noch nicht verfügbar.
      </p>
    </section>
  );
}
