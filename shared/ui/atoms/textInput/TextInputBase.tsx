import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { IBaseInputProps } from '@shared/ui/atoms/textInput/textInput.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';

/**
 * 기본 TextInput 컴포넌트
 */
const TextInputBase = ({
  variant = 'default',
  style,
  disabled,
  editable,
  placeholderColor = '#AAAEB6',
  ...props
}: IBaseInputProps) => {
  const { theme } = useTheme();

  const styles = {
    base: {
      width: '100%',
      height: 56,
      backgroundColor: theme.colors.background.secondary,
      paddingHorizontal: 16,
      paddingVertical: 12,
    } as TextInputProps,
    default: {
      borderRadius: 14,
    },
    outlined: {
      borderRadius: 14,
      borderWidth: 1,
      borderColor: theme.colors.border.secondary,
    },
    underlined: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border.secondary,
    },
  };

  return (
    <TextInput
      editable={disabled ? false : editable}
      style={[
        styles.base,
        styles[variant],
        style,
        disabled && {
          backgroundColor: theme.colors.background.secondary,
          opacity: 0.5,
        },
      ]}
      placeholderTextColor={
        disabled ? theme.colors.text.disabled : placeholderColor
      }
      {...props}
    />
  );
};

export default TextInputBase;
