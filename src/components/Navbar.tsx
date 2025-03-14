import React from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';

export const Navbar: React.FC = () => {
  const surfaceColor = useThemeColor('surface');

  return (
    <nav style={{ backgroundColor: surfaceColor, padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Logo</h1>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li>Home</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </nav>
  );
};
