'use client';
import { useTheme } from '../../contexts/themeContext';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

const ButtonsToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='text-gray-500 dark:text-gray-400 hover:bg-slate-100 
                 dark:bg-gray-700 focus:outline-none focus:ring-4 p-2 rounded-lg'
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ButtonsToggleTheme;
