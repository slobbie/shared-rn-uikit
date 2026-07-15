import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

import { SKELETON } from '@shared/core/tokens/display';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { SkeletonProps } from './Skeleton.types';

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = 16,
  circle = false,
  testID,
}) => {
  const { theme } = useTheme();
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // 펄스 루프
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [opacity]);

  return (
    <Animated.View
      accessibilityElementsHidden
      testID={testID}
      style={{
        width: circle ? height : (width as number | `${number}%`),
        height,
        borderRadius: circle ? 999 : SKELETON.borderRadius,
        backgroundColor: theme.colors.text.grey5,
        flexShrink: 0,
        opacity,
      }}
    />
  );
};

export default Skeleton;
