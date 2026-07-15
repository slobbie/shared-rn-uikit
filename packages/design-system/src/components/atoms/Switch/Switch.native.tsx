import React from 'react';
import { Pressable, View } from 'react-native';
import { DURATION, Slide } from '@package/motion';

import { SWITCH } from '@shared/core/tokens/sizes';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { SwitchProps } from './Switch.types';

export const Switch: React.FC<SwitchProps> = ({
  value,
  onChange,
  disabled = false,
  accessibilityLabel,
  testID,
}) => {
  const { theme } = useTheme();
  const { trackWidth, trackHeight, thumbSize, padding } = SWITCH;
  const thumbTravel = trackWidth - thumbSize - padding * 2;

  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ checked: value, disabled }}
      disabled={disabled}
      onPress={() => onChange(!value)}
      hitSlop={8}
      testID={testID}
      style={{
        width: trackWidth,
        height: trackHeight,
        borderRadius: trackHeight / 2,
        padding,
        backgroundColor: value
          ? theme.colors.button.primary
          : theme.colors.text.grey4,
        opacity: disabled ? 0.5 : 1,
        justifyContent: 'center',
      }}
    >
      <View style={{ marginLeft: thumbTravel }}>
        <Slide
          visible={value}
          from="left"
          distance={thumbTravel}
          duration={DURATION.fast}
          fade={false}
          appear={false}
          unmountOnExit={false}
          sizing="intrinsic"
        >
          <View
            style={{
              width: thumbSize,
              height: thumbSize,
              borderRadius: thumbSize / 2,
              backgroundColor: '#ffffff',
            }}
          />
        </Slide>
      </View>
    </Pressable>
  );
};

export default Switch;
