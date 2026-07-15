import React from 'react';
import { Text } from 'react-native';

import { FONT_WEIGHT_VALUE, TYPO_SCALE } from '@shared/core/tokens/typography';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { TypoProps } from './Typo.types';

export const Typo: React.FC<TypoProps> = ({
  variant = 'body',
  weight,
  color = 'default',
  align = 'left',
  numberOfLines,
  children,
}) => {
  const { theme } = useTheme();
  const scale = TYPO_SCALE[variant];

  const colorValue = {
    default: theme.colors.text.black,
    secondary: theme.colors.text.grey2,
    inverse: theme.colors.text.white,
    primary: theme.colors.text.primary,
  }[color];

  return (
    <Text
      numberOfLines={numberOfLines}
      style={{
        fontSize: scale.fontSize,
        lineHeight: scale.lineHeight,
        fontWeight: FONT_WEIGHT_VALUE[weight ?? scale.weight],
        color: colorValue,
        textAlign: align,
      }}
    >
      {children}
    </Text>
  );
};

export default Typo;
