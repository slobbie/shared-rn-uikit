import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { IBaseInputProps } from '@shared/ui/atoms/textInput/textInput.interface';

/**
 * 기본 TextInput 컴포넌트
 */
const TextInputBase = ({
  variant = 'default',
  placeholderColor = '#AAAEB6',
  ...props
}: IBaseInputProps) => {
  return (
    <TextInput
      placeholderTextColor={placeholderColor}
      style={[styles.base, styles[variant]]}
      {...props}
    />
  );
};

export default TextInputBase;

const styles = StyleSheet.create({
  base: {
    width: '100%',
    height: 56,
    backgroundColor: '#F6F7F9',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  default: {
    borderRadius: 14,
  },
  outlined: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#222',
  },
  underlined: {
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
});
