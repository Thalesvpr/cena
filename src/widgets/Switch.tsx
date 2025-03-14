import React, { useState } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';

export const Switch: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const primaryColor = useThemeColor('primary');

  return (
    <div
      style={{
        width: '50px',
        height: '30px',
        backgroundColor: isOn ? primaryColor : '#ccc',
        borderRadius: '15px',
        position: 'relative',
        cursor: 'pointer',
      }}
      onClick={() => setIsOn(!isOn)}
    >
      <div
        style={{
          width: '26px',
          height: '26px',
          backgroundColor: 'white',
          borderRadius: '50%',
          position: 'absolute',
          top: '2px',
          left: isOn ? '22px' : '2px',
          transition: 'left 0.2s',
        }}
      />
    </div>
  );
};
