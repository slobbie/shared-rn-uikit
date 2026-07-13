import { typography } from './typoToken';

export interface ILineHeights {
  // Headline
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  // Subtitle
  subtitle1: number;
  subtitle2: number;
  // Body
  body1: number;
  body2: number;
  // Button
  button: number;
  // Caption
  caption: number;
  // Overline
  overline: number;
  [key: string]: number;
}

export interface IFontSizes {
  // Headline
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  // Subtitle
  subtitle1: number;
  subtitle2: number;
  // Body
  body1: number;
  body2: number;
  // Button
  button: number;
  // Caption
  caption: number;
  // Overline
  overline: number;
  [key: string]: number;
}

export interface ILetterSpacing {
  // Headline
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  // Subtitle
  subtitle1: number;
  subtitle2: number;
  // Body
  body1: number;
  body2: number;
  // Button
  button: number;
  // Caption
  caption: number;
  // Overline
  overline: number;
  [key: string]: number;
}

export interface IFontWeights {
  regular: number;
  medium: number;
  bold: number;
  [key: string]: number;
}

export interface IFontFamilies {
  regular: string;
  medium: string;
  semibold: string;
  bold: string;
  [key: string]: string;
}

// 타이포그래피 변형 타입
export type TypographyVariant = keyof typeof typography.fontSize;

// 폰트 두께 변형 타입
export type FontWeightVariant = keyof typeof typography.fontWeight;
