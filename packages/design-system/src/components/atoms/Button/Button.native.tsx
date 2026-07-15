import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

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
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled: state.isDisabled, busy: state.isBusy }}
      testID={testID}
      disabled={!state.isInteractive}
      onPress={onPress}
      hitSlop={8}
      style={({ pressed }) => [
        styles.base,
        {
          height: dimensions.height,
          paddingHorizontal: dimensions.paddingHorizontal,
          borderRadius: dimensions.borderRadius,
          backgroundColor: buttonColors.background,
          borderColor: buttonColors.border,
          opacity: pressed && state.isInteractive ? 0.8 : 1,
        },
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={buttonColors.text} />
      ) : typeof children === 'string' ? (
        <Text
          style={{
            color: buttonColors.text,
            fontSize: dimensions.fontSize,
            fontWeight: '600',
          }}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
});

export default Button;
