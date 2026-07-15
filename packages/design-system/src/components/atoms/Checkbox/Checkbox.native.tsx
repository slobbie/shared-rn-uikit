import React from 'react';
import { Pressable, Text, View } from 'react-native';

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
  const { boxSize, borderRadius, borderWidth, checkFontSize, labelFontSize, gap } =
    CHECKBOX;

  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ checked, disabled }}
      disabled={disabled}
      onPress={() => onChange(!checked)}
      hitSlop={8}
      testID={testID}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap,
        alignSelf: 'flex-start',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <View
        style={{
          width: boxSize,
          height: boxSize,
          borderRadius,
          borderWidth,
          borderColor: checked
            ? theme.colors.button.primary
            : theme.colors.text.grey4,
          backgroundColor: checked
            ? theme.colors.button.primary
            : 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {checked && (
          <Text
            style={{
              fontSize: checkFontSize,
              fontWeight: '700',
              color: theme.colors.text.white,
            }}
          >
            ✓
          </Text>
        )}
      </View>
      {label && (
        <Text
          style={{
            fontSize: labelFontSize,
            color: disabled ? theme.colors.text.grey3 : theme.colors.text.black,
          }}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
};

export default Checkbox;
