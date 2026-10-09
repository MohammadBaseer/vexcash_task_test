export default function Logo() {
  return (
    <a
      href="/"
      className="d-inline-flex flex-column text-decoration-none"
      aria-label="VEXCASH Startseite"
    >
      <span className="logo-wordmark d-inline-flex align-items-start fst-italic lh-1" aria-hidden="true">
        <span className="logo-vex">VEX</span>
        <span className="logo-cash">CASH</span>
        <sup className="logo-registered fst-normal fw-normal">®</sup>
      </span>
      <span className="logo-tagline fw-medium text-body text-nowrap">Einfach 60 Tage Geld leihen</span>
    </a>
  );
}
