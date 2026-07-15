import React from 'react';

import { RADIO } from '@shared/core/tokens/selection';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { RadioProps } from './Radio.types';

export const Radio: React.FC<RadioProps> = ({
  selected,
  onPress,
  label,
  disabled = false,
  accessibilityLabel,
  testID,
}) => {
  const { theme } = useTheme();
  const { circleSize, dotSize, borderWidth, labelFontSize, gap } = RADIO;

  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      aria-label={accessibilityLabel}
      disabled={disabled}
      onClick={onPress}
      data-testid={testID}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap,
        padding: 0,
        border: 'none',
        backgroundColor: 'transparent',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: circleSize,
          height: circleSize,
          borderRadius: '50%',
          border: `${borderWidth}px solid ${
            selected ? theme.colors.button.primary : theme.colors.text.grey4
          }`,
          boxSizing: 'border-box',
          transition: 'border-color 0.15s ease',
          flexShrink: 0,
        }}
      >
        {selected && (
          <span
            style={{
              display: 'block',
              width: dotSize,
              height: dotSize,
              borderRadius: '50%',
              backgroundColor: theme.colors.button.primary,
            }}
          />
        )}
      </span>
      {label && (
        <span
          style={{
            fontSize: labelFontSize,
            color: disabled ? theme.colors.text.grey3 : theme.colors.text.black,
          }}
        >
          {label}
        </span>
      )}
    </button>
  );
};

export default Radio;
