import React from 'react';

import { FONT_WEIGHT_VALUE, TYPO_SCALE } from '@shared/core/tokens/typography';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { TypoProps } from './Typo.types';

const TAG_MAP = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle: 'p',
  body: 'p',
  caption: 'span',
} as const;

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

  const clampStyle: React.CSSProperties = numberOfLines
    ? {
        display: '-webkit-box',
        WebkitLineClamp: numberOfLines,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }
    : {};

  const Tag = TAG_MAP[variant];

  return (
    <Tag
      style={{
        margin: 0,
        fontSize: scale.fontSize,
        lineHeight: `${scale.lineHeight}px`,
        fontWeight: FONT_WEIGHT_VALUE[weight ?? scale.weight],
        color: colorValue,
        textAlign: align,
        ...clampStyle,
      }}
    >
      {children}
    </Tag>
  );
};

export default Typo;
