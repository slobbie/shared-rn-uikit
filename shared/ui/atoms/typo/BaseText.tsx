import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
import styled from '@emotion/native';

import { useTheme } from '@shared/utils/lib/ThemeContext';
import {
  colors,
  fontSize,
  fontWeight,
  variant,
} from '@shared/utils/lib/themeToken';

export interface TextProps extends RNTextProps {
  size?: keyof typeof fontSize;
  weight?: keyof typeof fontWeight;
  color?: keyof typeof colors | keyof typeof variant;
}

/** BaseText 컴포넌트 */
const BaseText: React.FC<TextProps> = ({
  size = 'md',
  weight = 'regular',
  color,
  style,
  children,
  ...props
}) => {
  const { theme } = useTheme();

  // 색상 처리 로직
  let textColor = 'black';

  if (color) {
    textColor = theme.colors.text[color];
  }

  const textStyle = {
    color: textColor,
    fontSize: theme.typography.fontSize[size],
    fontWeight: theme.typography.fontWeight[weight],
    fontFamily: theme.typography.fontFamily[weight],
    lineHeight: theme.typography.lineHeight[size],
  };

  return (
    <StyledText style={[textStyle, style]} {...props}>
      {children}
    </StyledText>
  );
};

export default BaseText;

const StyledText = styled.Text``;
