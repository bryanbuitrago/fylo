'use client';

import { useEffect, useState } from 'react';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';
import LogoHeader from './LogoHeader';
import NavItems from './NavItems';

// Custom hook for theme management
function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('color-theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    // Apply stored theme or system preference
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('color-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return { theme, toggleTheme };
}

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className='container mx-auto px-6 text-center h-40 md:h-40'>
      {/* Logo */}
      <LogoHeader />
      {/* Navigation Menu */}
      <div className='flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10'>
        <NavItems />

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className='text-gray-500 dark:text-gray-400 hover:bg-slate-100 dark:bg-gray-700 focus:outline-none focus:ring-4 p-2 rounded-lg'
        >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
