import {
  IFontFamilies,
  IFontSizes,
  IFontWeights,
  ILineHeights,
  typography,
} from '@shared/utils/lib/themeToken/typoToken';

export const variant = {
  primary: '#2089dc',
  secondary: '#ca71eb',
  warning: '#faad14',
  error: '#ff190c',
  disabled: 'hsl(208, 8%, 90%)',
  success: '#52c41a',
};

export const colors = {
  primary: '#2089dc',
  secondary: '#ca71eb',
  white: '#ffffff',
  black: '#242424',
  grey0: '#393e42',
  grey1: '#43484d',
  grey2: '#5e6977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  divider: '#bcbbc1',
};

export const background = {
  background_white: '#ffffff',
  secondary: '#e1e8ee',
  tertiary: '#bdc6cf',
  greyOutline: '#bbb',
  searchBg: '#303337',
};

export const spacing = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
};

export const baseTokens = {
  variant,
  colors,
  background,
  typography,
};

export interface VariantColors {
  primary: string;
  secondary: string;
  warning: string;
  error: string;
  disabled: string;
  success: string;
  [key: string]: string;
}

export interface BaseColors {
  primary: string;
  secondary: string;
  white: string;
  black: string;
  grey0: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  grey5: string;
  divider: string;
  [key: string]: string;
}

export interface BackgroundColors {
  background_white: string;
  secondary: string;
  tertiary: string;
  greyOutline: string;
  searchBg: string;
  [key: string]: string;
}

export interface Typography {
  fontFamily: IFontFamilies;
  fontSize: IFontSizes;
  lineHeight: ILineHeights;
  fontWeight: IFontWeights;
  [key: string]: any;
}

export interface ThemeTokensInterface {
  variant?: Partial<VariantColors>;
  colors?: Partial<BaseColors>;
  background?: Partial<BackgroundColors>;
  typography?: Partial<Typography>;
  [key: string]: any;
}

export type ThemeTokens = typeof baseTokens;

export type CustomThemeTokens = Partial<ThemeTokensInterface>;
