import React, { useState } from 'react';
import { Text, TextInput as RNTextInput, View } from 'react-native';

import { INPUT } from '@shared/core/tokens/input';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { TextAreaProps } from './TextArea.types';

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChangeText,
  placeholder,
  label,
  helperText,
  error = false,
  disabled = false,
  numberOfLines = 4,
  accessibilityLabel,
  testID,
}) => {
  const { theme } = useTheme();
  const [focused, setFocused] = useState(false);

  const borderColor = error
    ? theme.colors.button.error
    : focused
      ? theme.colors.button.primary
      : theme.colors.text.grey4;

  return (
    <View style={{ gap: INPUT.gap, opacity: disabled ? 0.5 : 1 }}>
      {label ? (
        <Text
          style={{
            fontSize: INPUT.labelFontSize,
            color: error ? theme.colors.button.error : theme.colors.text.grey2,
          }}
        >
          {label}
        </Text>
      ) : null}
      <RNTextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.text.grey3}
        editable={!disabled}
        multiline
        numberOfLines={numberOfLines}
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{ disabled }}
        testID={testID}
        style={{
          minHeight: INPUT.textAreaMinHeight,
          paddingHorizontal: INPUT.paddingHorizontal,
          paddingVertical: INPUT.textAreaPaddingVertical,
          fontSize: INPUT.fontSize,
          borderRadius: INPUT.borderRadius,
          borderWidth: INPUT.borderWidth,
          borderColor,
          color: theme.colors.text.black,
          backgroundColor: theme.colors.text.white,
          // Android 상단 정렬 필수
          textAlignVertical: 'top',
        }}
      />
      {helperText ? (
        <Text
          style={{
            fontSize: INPUT.helperFontSize,
            color: error ? theme.colors.button.error : theme.colors.text.grey2,
          }}
        >
          {helperText}
        </Text>
      ) : null}
    </View>
  );
};

export default TextArea;
