import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Pressable, ViewStyle } from 'react-native';

import { ISwitch } from '@shared/ui/molecules/switch/switch.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';

/**
 * 스위치 컴포넌트
 */
const Switch = ({
  onPress,
  isOn,
  isDisabled = false,
  width = 40,
  height = 24,
  onBackgroundColor = '#05AFF2',
  offBackgroundColor = '#EBECEF',
}: ISwitch) => {
  const { theme } = useTheme();
  const animatedValue = useRef(new Animated.Value(isOn ? 1 : 0)).current;

  // --- 1. 크기에 따른 동적 값 계산 ---
  const padding = 3; // 내부 여백
  const wheelSize = height - padding * 2; // 토글 핸들(원)의 크기
  const travelDistance = width - wheelSize - padding * 2;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [animatedValue, isOn]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, travelDistance],
  });

  const animatedStyle = {
    transform: [{ translateX }],
  };

  const backgroundColor = isOn ? onBackgroundColor : offBackgroundColor;

  const toggleContainerStyle: ViewStyle[] = [
    {
      width,
      height,
      padding,
      backgroundColor,
      borderRadius: height / 2,
    },
  ];

  const toggleWheelStyle: ViewStyle[] = [
    {
      width: wheelSize,
      height: wheelSize,
      backgroundColor: theme.colors.background.background_white,
      borderRadius: wheelSize / 2,
    },
  ];

  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      style={toggleContainerStyle}
    >
      <Animated.View style={[toggleWheelStyle, animatedStyle]} />
    </Pressable>
  );
};

export default Switch;
