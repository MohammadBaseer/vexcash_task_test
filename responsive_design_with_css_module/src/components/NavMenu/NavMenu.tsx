import type { MouseEvent } from 'react';
import type { NavItem } from '../../types';
import styles from './NavMenu.module.css';

interface NavMenuProps {
  id: string;
  items: NavItem[];
  activeId: string;
  isOpen: boolean; // only used on mobile/tablet; desktop always shows the menu
  onSelect: (id: string) => void;
}

export default function NavMenu({ id, items, activeId, isOpen, onSelect }: NavMenuProps) {
  const navClassName = isOpen ? `${styles.nav} ${styles.open}` : styles.nav;

  return (
    <nav id={id} className={navClassName} aria-label="Kontonavigation">
      <ul className={styles.list}>
        {items.map((item) => {
          const isActive = item.id === activeId;
          const Icon = item.icon;

          function handleClick(event: MouseEvent<HTMLAnchorElement>) {
            event.preventDefault(); // stay on this page, just switch the active item
            onSelect(item.id);
          }

          return (
            <li key={item.id} className={styles.item}>
              <a
                href={`#${item.id}`}
                className={isActive ? `${styles.link} ${styles.active}` : styles.link}
                aria-current={isActive ? 'page' : undefined}
                title={item.label}
                onClick={handleClick}
              >
                <Icon className={styles.icon} aria-hidden="true" />
                <span className={styles.label}>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
