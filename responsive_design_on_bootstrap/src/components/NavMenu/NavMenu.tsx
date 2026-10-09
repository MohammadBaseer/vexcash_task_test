import type { MouseEvent } from 'react';
import type { NavItem } from '../../types';

interface NavMenuProps {
  id: string;
  items: NavItem[];
  activeId: string;
  isOpen: boolean; // only used on mobile/tablet; desktop always shows the menu
  onSelect: (id: string) => void;
}

export default function NavMenu({ id, items, activeId, isOpen, onSelect }: NavMenuProps) {

  const navClassName = `account-nav ${isOpen ? 'd-block' : 'd-none'} d-lg-block`;

  return (
    <nav id={id} className={navClassName} aria-label="Kontonavigation">

      <ul className="account-nav-list list-unstyled m-0 d-xl-block">
        {items.map((item) => {
          const isActive = item.id === activeId;
          const Icon = item.icon;

          function handleClick(event: MouseEvent<HTMLAnchorElement>) {
            event.preventDefault(); // stay on this page, just switch the active item
            onSelect(item.id);
          }

          return (
            <li key={item.id} className="account-nav-item">
              <a
                href={`#${item.id}`}
                className={`account-nav-link d-flex align-items-center h-100 fw-medium text-decoration-none${isActive ? ' is-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
                title={item.label}
                onClick={handleClick}
              >
                <Icon className="account-nav-icon flex-shrink-0" aria-hidden="true" />
                <span className="account-nav-label text-nowrap overflow-hidden">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
