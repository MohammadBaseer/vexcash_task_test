import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import ProfileOverview from './components/ProfileOverview/ProfileOverview';
import PagePlaceholder from './components/PagePlaceholder/PagePlaceholder';
import { NAV_ITEMS } from './data/navigation';
import { USER, PROFILE_COLUMNS } from './data/profile';

const NAV_ID = 'account-navigation';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<string>('persoenliche-daten');

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleSelect(id: string) {
    setActiveId(id);
    setIsMenuOpen(false);
  }


  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const activeItem = NAV_ITEMS.find((item) => item.id === activeId);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header
        user={USER}
        isMenuOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
        menuId={NAV_ID}
      />

      <div className="d-flex flex-column flex-xl-row flex-grow-1">
        <NavMenu
          id={NAV_ID}
          items={NAV_ITEMS}
          activeId={activeId}
          isOpen={isMenuOpen}
          onSelect={handleSelect}
        />

        <main className="app-content">
          {activeId === 'persoenliche-daten' ? (
            <ProfileOverview columns={PROFILE_COLUMNS} />
          ) : (
            <PagePlaceholder title={activeItem ? activeItem.label : ''} />
          )}
        </main>
      </div>
    </div>
  );
}
