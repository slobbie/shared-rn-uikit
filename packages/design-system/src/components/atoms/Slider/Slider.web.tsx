import React from 'react';

import { SLIDER } from '@shared/core/tokens/overlay';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { SliderProps } from './Slider.types';

export const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  accessibilityLabel,
  testID,
}) => {
  const { theme } = useTheme();

  return (
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      aria-label={accessibilityLabel}
      data-testid={testID}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{
        width: '100%',
        height: SLIDER.thumbSize,
        margin: 0,
        accentColor: theme.colors.button.primary,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    />
  );
};

export default Slider;
