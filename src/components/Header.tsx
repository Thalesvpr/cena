import React from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';

export const Header: React.FC = () => {
  const surfaceColor = useThemeColor('surface');

  return (
    <header style={{ backgroundColor: surfaceColor, padding: '20px', textAlign: 'center' }}>
      <h1>Meu Header</h1>
    </header>
  );
};
