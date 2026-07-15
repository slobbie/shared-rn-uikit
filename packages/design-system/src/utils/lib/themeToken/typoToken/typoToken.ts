export const fontFamily = {
  regular: 'System',
  medium: 'System',
  semibold: 'System',
  bold: 'System',
};

export const fontSize = {
  // Headline
  h1: 48,
  h2: 34,
  h3: 28,
  h4: 24,
  h5: 20,
  h6: 18,
  // Subtitle
  subtitle1: 16,
  subtitle2: 14,
  // Body
  body1: 16,
  body2: 14,
  // Button
  button: 14,
  // Caption
  caption: 12,
  // Overline
  overline: 10,
};

export const lineHeight = {
  // Headline
  h1: 58,
  h2: 42,
  h3: 36,
  h4: 32,
  h5: 28,
  h6: 24,
  // Subtitle
  subtitle1: 24,
  subtitle2: 20,
  // Body
  body1: 24,
  body2: 20,
  // Button
  button: 20,
  // Caption
  caption: 16,
  // Overline
  overline: 14,
};

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const letterSpacing = {
  // Headline
  h1: -1.5,
  h2: -0.5,
  h3: 0,
  h4: 0.25,
  h5: 0,
  h6: 0.15,
  // Subtitle
  subtitle1: 0.15,
  subtitle2: 0.1,
  // Body
  body1: 0.5,
  body2: 0.25,
  // Button
  button: 1.25,
  // Caption
  caption: 0.4,
  // Overline
  overline: 1.5,
};

/**
 * 타이포그래피 토큰
 */
export const typography = {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
  letterSpacing,
} as const;

/** 스타일 매핑 */
export const materialTypographyStyles = {
  // Headline
  h1: {
    fontSize: 'h1',
    fontWeight: 'regular',
    lineHeight: 'h1',
    letterSpacing: 'h1',
  },
  h2: {
    fontSize: 'h2',
    fontWeight: 'regular',
    lineHeight: 'h2',
    letterSpacing: 'h2',
  },
  h3: {
    fontSize: 'h3',
    fontWeight: 'regular' as const,
    lineHeight: 'h3',
    letterSpacing: 'h3',
  },
  h4: {
    fontSize: 'h4',
    fontWeight: 'regular' as const,
    lineHeight: 'h4',
    letterSpacing: 'h4',
  },
  h5: {
    fontSize: 'h5',
    fontWeight: 'regular' as const,
    lineHeight: 'h5',
    letterSpacing: 'h5',
  },
  h6: {
    fontSize: 'h6',
    fontWeight: 'medium' as const,
    lineHeight: 'h6',
    letterSpacing: 'h6',
  },
  // Subtitle
  subtitle1: {
    fontSize: 'subtitle1',
    fontWeight: 'regular' as const,
    lineHeight: 'subtitle1',
    letterSpacing: 'subtitle1',
  },
  subtitle2: {
    fontSize: 'subtitle2',
    fontWeight: 'medium' as const,
    lineHeight: 'subtitle2',
    letterSpacing: 'subtitle2',
  },
  // Body
  body1: {
    fontSize: 'body1',
    fontWeight: 'regular' as const,
    lineHeight: 'body1',
    letterSpacing: 'body1',
  },
  body2: {
    fontSize: 'body2',
    fontWeight: 'regular' as const,
    lineHeight: 'body2',
    letterSpacing: 'body2',
  },
  // Button
  button: {
    fontSize: 'button',
    fontWeight: 'medium' as const,
    lineHeight: 'button',
    letterSpacing: 'button',
    textTransform: 'uppercase' as const,
  },
  // Caption
  caption: {
    fontSize: 'caption',
    fontWeight: 'regular' as const,
    lineHeight: 'caption',
    letterSpacing: 'caption',
  },
  // Overline
  overline: {
    fontSize: 'overline',
    fontWeight: 'regular' as const,
    lineHeight: 'overline',
    letterSpacing: 'overline',
    textTransform: 'uppercase' as const,
  },
} as const;
