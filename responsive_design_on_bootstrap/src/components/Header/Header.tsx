import Logo from './Logo';
import MenuToggle from './MenuToggle';
import UserBar from '../UserBar/UserBar';
import type { User } from '../../types';

interface HeaderProps {
  user: User;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  menuId: string; // id of the <nav> the toggle button controls
}

export default function Header({ user, isMenuOpen, onToggleMenu, menuId }: HeaderProps) {
  return (
    <header className="site-header d-flex flex-column flex-lg-row bg-white">
      <div className="brand-row d-flex align-items-center justify-content-between justify-content-xl-center gap-3">
        <Logo />
        <MenuToggle isOpen={isMenuOpen} onClick={onToggleMenu} controls={menuId} />
      </div>
      <UserBar name={user.fullName} status={user.status} />
    </header>
  );
}
