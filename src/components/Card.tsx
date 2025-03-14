import React from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, title }) => {
  const surfaceColor = useThemeColor('surface');

  return (
    <div style={{ backgroundColor: surfaceColor, padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      {title && <h3 style={{ marginBottom: '10px' }}>{title}</h3>}
      {children}
    </div>
  );
};
