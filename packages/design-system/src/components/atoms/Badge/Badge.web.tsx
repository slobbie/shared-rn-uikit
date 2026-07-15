import React from 'react';

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
      <span
        data-testid={testID}
        style={{
          display: 'inline-block',
          width: BADGE.dotSize,
          height: BADGE.dotSize,
          borderRadius: '50%',
          backgroundColor: palette.bg,
        }}
      />
    );
  }

  return (
    <span
      data-testid={testID}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: BADGE.height,
        padding: `0 ${BADGE.paddingHorizontal}px`,
        borderRadius: BADGE.borderRadius,
        backgroundColor: palette.bg,
        color: palette.text,
        fontSize: BADGE.fontSize,
        fontWeight: 600,
        lineHeight: 1,
      }}
    >
      {label}
    </span>
  );
};

export default Badge;
