import React from 'react';

import { CHECKBOX } from '@shared/core/tokens/selection';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { CheckboxProps } from './Checkbox.types';

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  accessibilityLabel,
  testID,
}) => {
  const { theme } = useTheme();
  const { boxSize, borderRadius, borderWidth, labelFontSize, gap } = CHECKBOX;

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={accessibilityLabel}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      data-testid={testID}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap,
        padding: 0,
        border: 'none',
        backgroundColor: 'transparent',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: boxSize,
          height: boxSize,
          borderRadius,
          border: `${borderWidth}px solid ${
            checked ? theme.colors.button.primary : theme.colors.text.grey4
          }`,
          backgroundColor: checked
            ? theme.colors.button.primary
            : 'transparent',
          boxSizing: 'border-box',
          transition: 'background-color 0.15s ease, border-color 0.15s ease',
          flexShrink: 0,
        }}
      >
        {checked && (
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 6.5L4.8 9.2L10 3.5"
              stroke="#ffffff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {label && (
        <span
          style={{
            fontSize: labelFontSize,
            color: disabled ? theme.colors.text.grey3 : theme.colors.text.black,
          }}
        >
          {label}
        </span>
      )}
    </button>
  );
};

export default Checkbox;
