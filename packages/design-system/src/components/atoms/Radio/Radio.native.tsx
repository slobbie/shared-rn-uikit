import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { RADIO } from '@shared/core/tokens/selection';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { RadioProps } from './Radio.types';

export const Radio: React.FC<RadioProps> = ({
  selected,
  onPress,
  label,
  disabled = false,
  accessibilityLabel,
  testID,
}) => {
  const { theme } = useTheme();
  const { circleSize, dotSize, borderWidth, labelFontSize, gap } = RADIO;

  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ selected, disabled }}
      disabled={disabled}
      onPress={onPress}
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
          width: circleSize,
          height: circleSize,
          borderRadius: circleSize / 2,
          borderWidth,
          borderColor: selected
            ? theme.colors.button.primary
            : theme.colors.text.grey4,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {selected && (
          <View
            style={{
              width: dotSize,
              height: dotSize,
              borderRadius: dotSize / 2,
              backgroundColor: theme.colors.button.primary,
            }}
          />
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

export default Radio;
