import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const CosmicDustCanvas: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 ${
        isDark ? 'opacity-40' : 'opacity-20'
      }`}
    />
  );
};
