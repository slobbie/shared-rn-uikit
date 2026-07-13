import React from 'react';

import { SWITCH } from '@shared/core/tokens/sizes';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { SwitchProps } from './Switch.types';

export const Switch: React.FC<SwitchProps> = ({
  value,
  onChange,
  disabled = false,
  accessibilityLabel,
  testID,
}) => {
  const { theme } = useTheme();
  const { trackWidth, trackHeight, thumbSize, padding } = SWITCH;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      aria-label={accessibilityLabel}
      disabled={disabled}
      onClick={() => onChange(!value)}
      data-testid={testID}
      style={{
        width: trackWidth,
        height: trackHeight,
        borderRadius: trackHeight / 2,
        border: 'none',
        padding,
        backgroundColor: value
          ? theme.colors.button.primary
          : theme.colors.text.grey4,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        position: 'relative',
        transition: 'background-color 0.15s ease',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          display: 'block',
          width: thumbSize,
          height: thumbSize,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          transform: value
            ? `translateX(${trackWidth - thumbSize - padding * 2}px)`
            : 'translateX(0)',
          transition: 'transform 0.15s ease',
        }}
      />
    </button>
  );
};

export default Switch;
