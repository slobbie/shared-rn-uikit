import {
  baseTokens,
  CustomThemeTokens,
  ThemeTokens,
} from '@shared/utils/lib/themeToken';
import {
  createSemanticTheme,
  SemanticTheme,
} from '@shared/utils/lib/createSemanticTheme';
import { deepMerge } from '@shared/utils/lib/deepMerge';

export const createTheme = (options: {
  tokens?: CustomThemeTokens;
  semanticOverrides?: Partial<SemanticTheme>;
}) => {
  // 1. 기본 토큰에 사용자 토큰 병합
  const mergedTokens = deepMerge(
    baseTokens,
    options.tokens || {}
  ) as ThemeTokens;

  // 2. 시맨틱 테마 생성
  const semanticTheme = createSemanticTheme(mergedTokens);

  // 3. 시맨틱 테마에 오버라이드 적용
  const finalTheme = deepMerge(semanticTheme, options.semanticOverrides || {});

  return {
    tokens: mergedTokens,
    theme: finalTheme,
  };
};

export type Theme = ReturnType<typeof createTheme>['theme'];
export type Tokens = ReturnType<typeof createTheme>['tokens'];
