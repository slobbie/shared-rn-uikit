import React from 'react';
import { Text, View } from 'react-native';

import { BADGE } from '@shared/core/tokens/sizes';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { BadgeProps } from './Badge.types';

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
  dot = false,
  testID,
}) => {
  const { theme } = useTheme();

  const palette = {
    primary: { bg: theme.colors.button.primary, text: theme.colors.text.white },
    success: { bg: theme.colors.button.success, text: theme.colors.text.white },
    error: { bg: theme.colors.button.error, text: theme.colors.text.white },
    neutral: { bg: theme.colors.text.grey5, text: theme.colors.text.grey1 },
  }[variant];

  if (dot) {
    return (
      <View
        testID={testID}
        style={{
          width: BADGE.dotSize,
          height: BADGE.dotSize,
          borderRadius: BADGE.dotSize / 2,
          backgroundColor: palette.bg,
        }}
      />
    );
  }

  return (
    <View
      testID={testID}
      style={{
        height: BADGE.height,
        paddingHorizontal: BADGE.paddingHorizontal,
        borderRadius: BADGE.borderRadius,
        backgroundColor: palette.bg,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
      }}
    >
      <Text
        style={{
          color: palette.text,
          fontSize: BADGE.fontSize,
          fontWeight: '600',
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default Badge;
