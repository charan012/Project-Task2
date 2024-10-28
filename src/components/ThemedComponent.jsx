import React from 'react';
import { useTheme } from './ThemeProvider';
import './Theme.css';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`theme-container ${theme}`}>
      <h2>Current Theme: {theme === 'light' ? 'Light' : 'Dark'}</h2>
      <div className="toggle-switch">
        <input type="checkbox" id="switch" onChange={toggleTheme} checked={theme === 'dark'} />
        <label htmlFor="switch" className="toggle-label"></label>
      </div>
    </div>
  );
};

export default ThemedComponent;
