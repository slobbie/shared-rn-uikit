import React, { useId, useState } from 'react';

import { INPUT } from '@shared/core/tokens/input';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { TextInputProps } from './TextInput.types';

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  label,
  helperText,
  error = false,
  disabled = false,
  secureTextEntry = false,
  keyboardType = 'default',
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
      <input
        id={inputId}
        type={secureTextEntry ? 'password' : keyboardType === 'email-address' ? 'email' : 'text'}
        inputMode={keyboardType === 'numeric' ? 'numeric' : undefined}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        disabled={disabled}
        aria-label={accessibilityLabel}
        aria-invalid={error || undefined}
        data-testid={testID}
        style={{
          height: INPUT.height,
          padding: `0 ${INPUT.paddingHorizontal}px`,
          fontSize: INPUT.fontSize,
          borderRadius: INPUT.borderRadius,
          border: `${INPUT.borderWidth}px solid ${borderColor}`,
          color: theme.colors.text.black,
          backgroundColor: theme.colors.text.white,
          outline: 'none',
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

export default TextInput;
