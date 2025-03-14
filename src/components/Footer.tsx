import React from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';

export const Footer: React.FC = () => {
  const surfaceColor = useThemeColor('surface');

  return (
    <footer style={{ backgroundColor: surfaceColor, padding: '20px', textAlign: 'center' }}>
      <p>© 2023 Meu Site</p>
    </footer>
  );
};
