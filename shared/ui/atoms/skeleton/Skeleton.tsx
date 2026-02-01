import React, { useEffect } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {
  ISkeletonProps,
  SkeletonVariant,
} from '@shared/ui/atoms/skeleton/skeleton.interface';

/**
 * iOS 스타일 스켈레톤 UI 컴포넌트
 * react-native-reanimated 사용
 */
const Skeleton: React.FC<ISkeletonProps> = ({
  variant = 'rectangular',
  width = '100%',
  height = 20,
  borderRadius,
  animated = true,
  baseColor = '#E5E5EA',
  highlightColor = '#F2F2F7',
  style,
  ...props
}) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    if (animated) {
      progress.value = withRepeat(
        withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
        -1,
        true,
      );
    }
  }, [animated, progress]);

  const getVariantStyle = (v: SkeletonVariant): ViewStyle => {
    switch (v) {
      case 'text':
        return { borderRadius: 4 };
      case 'circular':
        return { borderRadius: typeof height === 'number' ? height / 2 : 50 };
      case 'rounded':
        return { borderRadius: 8 };
      case 'rectangular':
      default:
        return { borderRadius: 0 };
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    if (!animated) {
      return { backgroundColor: baseColor };
    }
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [baseColor, highlightColor],
    );
    return { backgroundColor };
  });

  return (
    <Animated.View
      style={[
        styles.skeleton,
        {
          width,
          height,
          borderRadius: borderRadius ?? getVariantStyle(variant).borderRadius,
        },
        animatedStyle,
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  skeleton: {
    overflow: 'hidden',
  },
});

export default Skeleton;
