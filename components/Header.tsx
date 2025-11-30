
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface NavLink {
  path: string;
  name: string;
}

const navLinks: NavLink[] = [
  { path: '/', name: 'Home' },
  { path: '/courses', name: 'Courses' },
  { path: '/about', name: 'About Us' },
  { path: '/pricing', name: 'Pricing' },
  { path: '/gallery', name: 'Gallery' },
  { path: '/faq', name: 'FAQ' },
  { path: '/contact', name: 'Contact' },
];

const Header: React.FC = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? 'text-primary dark:text-primary text-sm font-bold leading-normal'
      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors';
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 px-4 md:px-10 py-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <Link to="/" className="flex items-center gap-4 text-gray-900 dark:text-white">
        <Logo />
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">RD Classes</h2>
      </Link>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={getLinkClass(link.path)}>
              {link.name}
            </Link>
          ))}
        </nav>
        <Link to="/signup">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
            <span className="truncate">Enroll Now</span>
          </button>
        </Link>
      </div>
      <button className="md:hidden text-gray-900 dark:text-white">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
};

export default Header;
