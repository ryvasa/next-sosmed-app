'use client';
import { themeStore } from '@/store';
import { Dark, Light } from '../ui/icons';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themeStore((state: any) => state.theme));

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <>
      {theme === 'light' ? (
        <button
          className="flex justify-start items-center"
          onClick={() => {
            toggleTheme();
          }}
        >
          <Light />
          <p>Light mode</p>
        </button>
      ) : (
        <button
          className="flex justify-start items-center"
          onClick={() => {
            toggleTheme();
          }}
        >
          <Dark />
          <p className="text-sm lg:text-md">Dark mode</p>
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
