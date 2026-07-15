import React from 'react';
import { Pressable, Text } from 'react-native';

import { CHIP } from '@shared/core/tokens/sizes';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { ChipProps } from './Chip.types';

export const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  disabled = false,
  onPress,
  testID,
}) => {
  const { theme } = useTheme();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected, disabled }}
      disabled={disabled}
      onPress={onPress}
      hitSlop={4}
      testID={testID}
      style={({ pressed }) => ({
        height: CHIP.height,
        paddingHorizontal: CHIP.paddingHorizontal,
        borderRadius: CHIP.borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        backgroundColor: selected
          ? theme.colors.button.primary
          : 'transparent',
        borderWidth: 1,
        borderColor: selected
          ? theme.colors.button.primary
          : theme.colors.text.grey4,
        opacity: disabled ? 0.5 : pressed ? 0.8 : 1,
      })}
    >
      <Text
        style={{
          fontSize: CHIP.fontSize,
          fontWeight: '500',
          color: selected ? theme.colors.text.white : theme.colors.text.grey1,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default Chip;
