import React from 'react';
import { Text, TextStyle } from 'react-native';

import { IBaseTextProps } from '@shared/ui/atoms/typo/index.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';
import {
  fontSize as defaultFontSize,
  fontWeight as defaultFontWeight,
  letterSpacing as defaultLetterSpacing,
  lineHeight as defaultLineHeight,
  materialTypographyStyles,
} from '@shared/utils/lib/themeToken/typoToken/typoToken';

/**
 * 모든 텍스트 컴포넌트는 이 컴포넌트를 기반
 */
const BaseText: React.FC<IBaseTextProps> = ({
  variant = 'body1',
  weight = 'regular',
  color,
  letterSpacing,
  numberOfLines,
  ellipsizeMode = 'tail',
  selectable = false,
  style,
  children,
  ...props
}) => {
  const { theme } = useTheme();

  // 1. Material Design 스타일 정의 가져오기
  const materialStyle = materialTypographyStyles[variant] || {};

  // 2. 테마 토큰 안전하게 추출
  const themeTypo = theme?.typography || {};
  const themeFontSize = themeTypo.fontSize || defaultFontSize;
  const themeLineHeight = themeTypo.lineHeight || defaultLineHeight;
  const themeFontWeight = themeTypo.fontWeight || defaultFontWeight;
  const themeLetterSpacing = themeTypo.letterSpacing || defaultLetterSpacing;
  const themeFontFamily = themeTypo.fontFamily || { regular: 'System' };

  // 3. 폰트 크기 결정
  const finalFontSize =
    themeFontSize[materialStyle.fontSize as keyof typeof themeFontSize] ||
    themeFontSize[variant as keyof typeof themeFontSize] ||
    themeFontSize.body1;

  // 4. 줄 간격 결정
  const finalLineHeight =
    themeLineHeight[materialStyle.lineHeight as keyof typeof themeLineHeight] ||
    themeLineHeight[variant as keyof typeof themeLineHeight] ||
    themeLineHeight.body1;

  // 5. 폰트 두께 결정
  const finalFontWeight = (
    themeFontWeight[weight as keyof typeof themeFontWeight] ||
    (materialStyle.fontWeight &&
      themeFontWeight[
        materialStyle.fontWeight as keyof typeof themeFontWeight
      ]) ||
    themeFontWeight.regular
  ).toString() as TextStyle['fontWeight'];

  // 6. 자간 결정
  const finalLetterSpacing =
    letterSpacing !== undefined
      ? themeLetterSpacing[letterSpacing as keyof typeof themeLetterSpacing] ||
        0
      : themeLetterSpacing[
          materialStyle.letterSpacing as keyof typeof themeLetterSpacing
        ] ||
        themeLetterSpacing[variant as keyof typeof themeLetterSpacing] ||
        0;

  // 7. 최종 스타일 객체 생성
  const textStyle: TextStyle = {
    fontFamily: themeFontFamily[weight] || themeFontFamily.regular,
    fontSize: finalFontSize,
    lineHeight: finalLineHeight,
    fontWeight: finalFontWeight,
    letterSpacing: finalLetterSpacing,
    color: color || theme?.colors?.text?.black || '#242424',
  };

  return (
    <Text
      style={[textStyle, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      selectable={selectable}
      {...props}
    >
      {children}
    </Text>
  );
};

export default React.memo(BaseText);
