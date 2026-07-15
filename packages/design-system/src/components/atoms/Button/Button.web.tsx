import React from 'react';

import {
  BUTTON_SIZE,
  getButtonColors,
  getButtonState,
} from '@shared/core/state/button';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onPress,
  accessibilityLabel,
  testID,
  children,
}) => {
  const { theme } = useTheme();
  const state = getButtonState({ disabled, loading });
  const dimensions = BUTTON_SIZE[size];
  const buttonColors = getButtonColors(
    theme.colors.button,
    variant,
    state.isDisabled,
  );

  return (
    <button
      type="button"
      aria-label={accessibilityLabel}
      aria-busy={state.isBusy || undefined}
      data-testid={testID}
      disabled={!state.isInteractive}
      onClick={onPress}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        height: dimensions.height,
        padding: `0 ${dimensions.paddingHorizontal}px`,
        borderRadius: dimensions.borderRadius,
        fontSize: dimensions.fontSize,
        fontWeight: 600,
        backgroundColor: buttonColors.background,
        color: buttonColors.text,
        border: `1px solid ${buttonColors.border}`,
        cursor: state.isInteractive ? 'pointer' : 'not-allowed',
        opacity: 1,
      }}
    >
      {loading ? '…' : children}
    </button>
  );
};

export default Button;
