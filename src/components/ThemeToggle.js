import React from 'react';

function ThemeToggle({ darkTheme, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      {darkTheme ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;