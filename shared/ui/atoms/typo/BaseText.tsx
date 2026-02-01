import styled from '@emotion/native';
import React from 'react';
import { TextStyle } from 'react-native';

import { IBaseTextProps } from '@shared/ui/atoms/typo/index.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';
import { materialTypographyStyles } from '@shared/utils/lib/themeToken/typoToken/typoToken';

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

  const materialStyle = materialTypographyStyles[variant] || {};

  // 텍스트 스타일 생성
  const textStyle: TextStyle = {
    // 폰트 패밀리 (Material Design은 Roboto 사용)
    fontFamily:
      theme.typography.fontFamily[weight] ||
      theme.typography.fontFamily.regular,

    // Material Design 스타일 적용
    fontSize:
      theme.typography.fontSize[materialStyle.fontSize || variant] ||
      theme.typography.fontSize.body1,
    lineHeight:
      theme.typography.lineHeight[materialStyle.lineHeight || variant] ||
      theme.typography.lineHeight.body1,
    fontWeight: (
      theme.typography.fontWeight[weight] ||
      materialStyle.fontWeight ||
      theme.typography.fontWeight.regular
    ).toString() as TextStyle['fontWeight'],
    letterSpacing: letterSpacing
      ? theme.typography.letterSpacing[
          letterSpacing as keyof typeof theme.typography.letterSpacing
        ]
      : theme.typography.letterSpacing[
          (materialStyle.letterSpacing as keyof typeof theme.typography.letterSpacing) ||
            (variant as keyof typeof theme.typography.letterSpacing)
        ] || 0,

    // 텍스트 색상 (기본값: 테마의 텍스트 색상)
    color: color || theme.colors.text.black,
  };

  return (
    <StyledText
      style={[textStyle, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      selectable={selectable}
      {...props}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.Text``;

export default React.memo(BaseText);
