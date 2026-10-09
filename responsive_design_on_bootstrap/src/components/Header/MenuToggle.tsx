interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
  controls: string; // id of the menu this button opens and closes
}

export default function MenuToggle({ isOpen, onClick, controls }: MenuToggleProps) {
  return (
    <button
      type="button"
      className="menu-toggle d-inline-flex d-lg-none align-items-center justify-content-center flex-shrink-0 p-0 border-0 rounded-1 bg-transparent"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={controls}
      aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
    >
      {isOpen ? (
        <svg className="menu-toggle-close" viewBox="0 0 40 40" aria-hidden="true">
          <path d="M3 3 L37 37 M37 3 L3 37" />
        </svg>
      ) : (
        <span className="menu-toggle-burger d-flex flex-column justify-content-between" aria-hidden="true">
          <span className="d-block" />
          <span className="d-block" />
          <span className="d-block" />
        </span>
      )}
    </button>
  );
}
