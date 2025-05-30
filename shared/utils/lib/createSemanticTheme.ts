import {
  background,
  colors,
  ThemeTokens,
  variant,
} from '@shared/utils/lib/themeToken';
import { typography } from '@shared/utils/lib/themeToken/typoToken';

export const createSemanticTheme = (tokens: ThemeTokens) => {
  // 기본 변수들과 사용자 정의 토큰을 병합
  const mergedVariant = { ...variant, ...(tokens.variant || {}) };
  const mergedColors = { ...colors, ...(tokens.colors || {}) };
  const mergedBackground = { ...background, ...(tokens.background || {}) };

  return {
    colors: {
      text: {
        ...mergedVariant, // 오버라이드된 variant 사용
        ...mergedColors, // 오버라이드된 colors 사용
      },
      background: {
        ...mergedBackground, // 오버라이드된 background 사용
      },
      button: {
        primary: mergedColors.primary || colors.primary,
        secondary: mergedColors.secondary || colors.secondary,
        disabled: mergedVariant.disabled || variant.disabled,
        error: mergedVariant.error || variant.error,
        success: mergedVariant.success || variant.success,
      },
      border: {
        primary: mergedColors.grey5 || colors.grey5,
        secondary: mergedColors.grey3 || colors.grey3,
        focus: mergedColors.primary || colors.primary,
        error: mergedVariant.error || variant.error,
        success: mergedVariant.success || variant.success,
      },
    },
    typography: tokens.typography || typography,
    baseTokens: {
      ...background,
      ...variant,
      ...colors,
    },
  };
};

export type SemanticTheme = ReturnType<typeof createSemanticTheme>;
