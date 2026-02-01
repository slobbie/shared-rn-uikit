import React, { useEffect } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolateColor,
} from 'react-native-reanimated';

import { ISwitchProps } from '@shared/ui/atoms/switch/switch.interface';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

/**
 * iOS 스타일 스위치 컴포넌트
 * react-native-reanimated 사용
 * iOS/Android 동일 표현
 */
const Switch: React.FC<ISwitchProps> = ({
  value,
  onValueChange,
  disabled = false,
  trackColorOn = '#34C759',
  trackColorOff = '#E5E5EA',
  thumbColor = '#FFFFFF',
  size = 'medium',
  style,
  ...props
}) => {
  const progress = useSharedValue(value ? 1 : 0);

  const getSizeConfig = () => {
    switch (size) {
      case 'small':
        return { width: 42, height: 26, thumbSize: 22, padding: 2 };
      case 'large':
        return { width: 60, height: 36, thumbSize: 32, padding: 2 };
      case 'medium':
      default:
        return { width: 51, height: 31, thumbSize: 27, padding: 2 };
    }
  };

  const config = getSizeConfig();
  const thumbTravel = config.width - config.thumbSize - config.padding * 2;

  useEffect(() => {
    progress.value = withSpring(value ? 1 : 0, {
      damping: 15,
      stiffness: 300,
    });
  }, [value, progress]);

  const handlePress = () => {
    if (!disabled) {
      onValueChange?.(!value);
    }
  };

  const trackAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [trackColorOff, trackColorOn]
    );
    return { backgroundColor };
  });

  const thumbAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: progress.value * thumbTravel }],
  }));

  return (
    <AnimatedPressable
      onPress={handlePress}
      disabled={disabled}
      style={[
        styles.track,
        {
          width: config.width,
          height: config.height,
          borderRadius: config.height / 2,
          padding: config.padding,
          opacity: disabled ? 0.5 : 1,
        },
        trackAnimatedStyle,
        style,
      ]}
      {...props}
    >
      <Animated.View
        style={[
          styles.thumb,
          {
            width: config.thumbSize,
            height: config.thumbSize,
            borderRadius: config.thumbSize / 2,
            backgroundColor: thumbColor,
          },
          thumbAnimatedStyle,
        ]}
      />
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  track: {
    justifyContent: 'center',
  },
  thumb: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 4,
  },
});

export default Switch;
