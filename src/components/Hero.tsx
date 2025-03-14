import React from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';

export const Hero: React.FC = () => {
  const surfaceColor = useThemeColor('surface');

  return (
    <div style={{ backgroundColor: surfaceColor, padding: '40px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Bem-vindo ao Meu Site</h1>
      <p style={{ fontSize: '1.2rem' }}>Este é um exemplo de componente Hero.</p>
    </div>
  );
};
