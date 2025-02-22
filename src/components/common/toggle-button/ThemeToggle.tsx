import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './style.css';

const ThemeToggle: React.FC = () => {
  // Initialize theme state with a fallback to 'light' if not found in localStorage
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  });

  // Update the document's theme attribute and localStorage whenever the theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div className={`toggle-slider ${theme}`}>
        {theme === 'light' ? (
          <FaSun className="toggle-icon" />
        ) : (
          <FaMoon className="toggle-icon" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
