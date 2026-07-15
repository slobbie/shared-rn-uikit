import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { SEGMENTED } from '@shared/core/tokens/display';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { SegmentedControlProps } from './SegmentedControl.types';

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  value,
  onChange,
  disabled = false,
  testID,
}) => {
  const { theme } = useTheme();

  return (
    <View
      testID={testID}
      style={{
        flexDirection: 'row',
        height: SEGMENTED.height,
        padding: SEGMENTED.padding,
        borderRadius: SEGMENTED.borderRadius,
        backgroundColor: theme.colors.text.grey5,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {options.map((option) => {
        const selected = option === value;
        return (
          <Pressable
            key={option}
            // RN에는 'tab' 롤이 없어 button + selected 상태 사용
            accessibilityRole="button"
            accessibilityState={{ selected, disabled }}
            disabled={disabled}
            onPress={() => {
              if (!selected) onChange(option);
            }}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SEGMENTED.itemBorderRadius,
              backgroundColor: selected
                ? theme.colors.text.white
                : 'transparent',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: selected ? 0.1 : 0,
              shadowRadius: 2,
              elevation: selected ? 2 : 0,
            }}
          >
            <Text
              style={{
                fontSize: SEGMENTED.fontSize,
                fontWeight: selected ? '600' : '400',
                color: selected
                  ? theme.colors.text.black
                  : theme.colors.text.grey2,
              }}
            >
              {option}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default SegmentedControl;
