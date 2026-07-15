import React from 'react';
import { View } from 'react-native';

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
    <View
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel}
      accessibilityValue={{ min: 0, max: 100, now: pct }}
      testID={testID}
      style={{
        width: '100%',
        height: PROGRESS.height,
        borderRadius: PROGRESS.borderRadius,
        backgroundColor: theme.colors.text.grey5,
        overflow: 'hidden',
      }}
    >
      <View
        style={{
          width: `${pct}%`,
          height: '100%',
          borderRadius: PROGRESS.borderRadius,
          backgroundColor: fillColor,
        }}
      />
    </View>
  );
};

export default ProgressBar;
