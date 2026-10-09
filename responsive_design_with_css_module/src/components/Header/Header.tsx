import Logo from './Logo';
import MenuToggle from './MenuToggle';
import UserBar from '../UserBar/UserBar';
import type { User } from '../../types';
import styles from './Header.module.css';

interface HeaderProps {
  user: User;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  menuId: string; // id of the <nav> the toggle button controls
}

export default function Header({ user, isMenuOpen, onToggleMenu, menuId }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.brandRow}>
        <Logo />
        <MenuToggle isOpen={isMenuOpen} onClick={onToggleMenu} controls={menuId} />
      </div>
      <UserBar name={user.fullName} status={user.status} />
    </header>
  );
}
