import React from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const surfaceColor = useThemeColor('surface');

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: surfaceColor, padding: '20px', borderRadius: '8px', width: '300px' }}>
        {children}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};
