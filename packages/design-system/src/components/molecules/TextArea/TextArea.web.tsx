import React, { useId, useState } from 'react';

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
  const inputId = useId();

  const borderColor = error
    ? theme.colors.button.error
    : focused
      ? theme.colors.button.primary
      : theme.colors.text.grey4;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: INPUT.gap,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {label ? (
        <label
          htmlFor={inputId}
          style={{
            fontSize: INPUT.labelFontSize,
            color: error ? theme.colors.button.error : theme.colors.text.grey2,
          }}
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={inputId}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        disabled={disabled}
        rows={numberOfLines}
        aria-label={accessibilityLabel}
        aria-invalid={error || undefined}
        data-testid={testID}
        style={{
          minHeight: INPUT.textAreaMinHeight,
          padding: `${INPUT.textAreaPaddingVertical}px ${INPUT.paddingHorizontal}px`,
          fontSize: INPUT.fontSize,
          fontFamily: 'inherit',
          borderRadius: INPUT.borderRadius,
          border: `${INPUT.borderWidth}px solid ${borderColor}`,
          color: theme.colors.text.black,
          backgroundColor: theme.colors.text.white,
          outline: 'none',
          resize: 'vertical',
          boxSizing: 'border-box',
          width: '100%',
        }}
      />
      {helperText ? (
        <span
          style={{
            fontSize: INPUT.helperFontSize,
            color: error ? theme.colors.button.error : theme.colors.text.grey2,
          }}
        >
          {helperText}
        </span>
      ) : null}
    </div>
  );
};

export default TextArea;
