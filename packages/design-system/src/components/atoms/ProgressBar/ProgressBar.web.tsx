import React from 'react';

import { PROGRESS } from '@shared/core/tokens/display';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { ProgressBarProps } from './ProgressBar.types';

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  variant = 'primary',
  accessibilityLabel,
  testID,
}) => {
  const { theme } = useTheme();
  const pct = Math.min(100, Math.max(0, value));
  const fillColor = theme.colors.button[variant];

  return (
    <div
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={accessibilityLabel}
      data-testid={testID}
      style={{
        width: '100%',
        height: PROGRESS.height,
        borderRadius: PROGRESS.borderRadius,
        backgroundColor: theme.colors.text.grey5,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${pct}%`,
          height: '100%',
          borderRadius: PROGRESS.borderRadius,
          backgroundColor: fillColor,
          transition: 'width 0.2s ease',
        }}
      />
    </div>
  );
};

export default ProgressBar;
