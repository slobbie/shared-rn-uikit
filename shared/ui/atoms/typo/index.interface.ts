import {
  FontWeightVariant,
  ILetterSpacing,
  TypographyVariant,
} from '@shared/utils/lib/themeToken/typoToken/typoToken.interface';
import { TextProps as RNTextProps } from 'react-native';

// BaseTextProps에서 불필요한 속성 제외
export interface IBaseTextProps extends RNTextProps {
  variant?: TypographyVariant;
  weight?: FontWeightVariant;
  /**
   * 텍스트 색상 (테마 색상 키 또는 HEX 코드)
   */
  color?: string;
  /**
   * 글자 간격
   */
  letterSpacing?: keyof ILetterSpacing;
  /**
   * 자식 요소
   */
  children?: React.ReactNode;
}

// 타이포그래피 컴포넌트 타입 정의
export type TypoComponent = React.FC<RNTextProps> & {
  // Headline
  H1: React.FC<IBaseTextProps>;
  H2: React.FC<IBaseTextProps>;
  H3: React.FC<IBaseTextProps>;
  H4: React.FC<IBaseTextProps>;
  H5: React.FC<IBaseTextProps>;
  H6: React.FC<IBaseTextProps>;

  // Subtitle
  Subtitle1: React.FC<IBaseTextProps>;
  Subtitle2: React.FC<IBaseTextProps>;

  // Body
  Body1: React.FC<IBaseTextProps>;
  Body2: React.FC<IBaseTextProps>;

  // Button
  Button: React.FC<IBaseTextProps>;

  // Caption
  Caption: React.FC<IBaseTextProps>;

  // Overline
  Overline: React.FC<IBaseTextProps>;
};
