import { useLayoutEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(() => window.localStorage.getItem('tis-theme') || 'light');

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('tis-theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light');
  }

  return { theme, toggleTheme };
}