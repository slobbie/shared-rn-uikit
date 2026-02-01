import React, { useState } from 'react';
import { TextInput, StyleSheet, NativeSyntheticEvent, TextInputContentSizeChangeEventData } from 'react-native';

import { ITextAreaProps } from '@shared/ui/atoms/textArea/textArea.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';

/**
 * 멀티라인 텍스트 입력 컴포넌트
 */
const TextArea: React.FC<ITextAreaProps> = ({
  variant = 'default',
  minHeight = 100,
  maxHeight = 300,
  disabled = false,
  placeholderColor = '#AAAEB6',
  autoGrow = true,
  style,
  onContentSizeChange,
  ...props
}) => {
  const { theme } = useTheme();
  const [height, setHeight] = useState(minHeight);

  const handleContentSizeChange = (
    event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>
  ) => {
    if (autoGrow) {
      const newHeight = Math.min(
        Math.max(event.nativeEvent.contentSize.height, minHeight),
        maxHeight
      );
      setHeight(newHeight);
    }
    onContentSizeChange?.(event);
  };

  const variantStyles = {
    default: {
      borderRadius: 14,
    },
    outlined: {
      borderRadius: 14,
      borderWidth: 1,
      borderColor: theme.colors.border.secondary,
    },
  };

  return (
    <TextInput
      multiline
      editable={!disabled}
      style={[
        styles.base,
        {
          backgroundColor: theme.colors.background.secondary,
          color: theme.colors.text.primary,
          height: autoGrow ? height : minHeight,
          minHeight,
          maxHeight,
        },
        variantStyles[variant],
        disabled && {
          opacity: 0.5,
        },
        style,
      ]}
      placeholderTextColor={disabled ? theme.colors.text.disabled : placeholderColor}
      onContentSizeChange={handleContentSizeChange}
      textAlignVertical="top"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
});

export default TextArea;
