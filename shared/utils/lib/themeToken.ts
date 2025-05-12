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

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
};

export const lineHeight = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
  xxl: 24,
};

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const fontFamily = {
  regular: 'System',
  medium: 'System',
  semibold: 'System',
  bold: 'System',
};

export const spacing = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
};

export const typography = {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
};

export const baseTokens = {
  variant,
  colors,
  background,
  spacing,
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

export interface FontSizes {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  [key: string]: number;
}

export interface LineHeights {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  [key: string]: number;
}

export interface FontWeights {
  regular: number;
  medium: number;
  bold: number;
  [key: string]: number;
}

export interface FontFamilies {
  regular: string;
  medium: string;
  bold: string;
  [key: string]: string;
}

export interface Spacings {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  [key: string]: number;
}

export interface Typography {
  fontFamily: FontFamilies;
  fontSize: FontSizes;
  lineHeight: LineHeights;
  fontWeight: FontWeights;
  [key: string]: any;
}

export interface ThemeTokensInterface {
  variant?: Partial<VariantColors>;
  colors?: Partial<BaseColors>;
  background?: Partial<BackgroundColors>;
  spacing?: Partial<Spacings>;
  typography?: Partial<Typography>;
  [key: string]: any;
}

export type ThemeTokens = typeof baseTokens;

export type CustomThemeTokens = Partial<ThemeTokensInterface>;
