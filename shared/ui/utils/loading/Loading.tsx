import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import {
  ILoadingProps,
  LoadingSize,
  LoadingVariant,
} from '@shared/ui/utils/loading/loading.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';

/**
 * 로딩 인디케이터 컴포넌트
 */
const Loading: React.FC<ILoadingProps> = ({
  size = 'medium',
  variant = 'spinner',
  color,
  overlay = false,
  text,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const defaultColor = color || theme.colors.button.primary;

  const getSizeValue = (s: LoadingSize) => {
    switch (s) {
      case 'small':
        return { indicator: 'small' as const, dotSize: 6, fontSize: 12 };
      case 'medium':
        return { indicator: 'large' as const, dotSize: 10, fontSize: 14 };
      case 'large':
        return { indicator: 'large' as const, dotSize: 14, fontSize: 16 };
    }
  };

  const sizeConfig = getSizeValue(size);

  const renderIndicator = (v: LoadingVariant) => {
    switch (v) {
      case 'spinner':
        return (
          <ActivityIndicator size={sizeConfig.indicator} color={defaultColor} />
        );
      case 'dots':
        return (
          <DotsIndicator dotSize={sizeConfig.dotSize} color={defaultColor} />
        );
      case 'pulse':
        return (
          <PulseIndicator size={sizeConfig.dotSize * 3} color={defaultColor} />
        );
    }
  };

  const content = (
    <View style={[styles.container, style]} {...props}>
      {renderIndicator(variant)}
      {text && (
        <Text
          style={[
            styles.text,
            { color: defaultColor, fontSize: sizeConfig.fontSize },
          ]}
        >
          {text}
        </Text>
      )}
    </View>
  );

  if (overlay) {
    return <View style={styles.overlay}>{content}</View>;
  }

  return content;
};

/**
 * 점 애니메이션 인디케이터 (Reanimated)
 */
const DotsIndicator: React.FC<{ dotSize: number; color: string }> = ({
  dotSize,
  color,
}) => {
  return (
    <View style={styles.dotsContainer}>
      {[0, 1, 2].map((index) => (
        <Dot key={index} index={index} dotSize={dotSize} color={color} />
      ))}
    </View>
  );
};

const Dot: React.FC<{ index: number; dotSize: number; color: string }> = ({
  index,
  dotSize,
  color,
}) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0.5);

  useEffect(() => {
    scale.value = withDelay(
      index * 150,
      withRepeat(
        withSequence(
          withTiming(1.5, { duration: 300 }),
          withTiming(1, { duration: 300 }),
        ),
        -1,
        false,
      ),
    );
    opacity.value = withDelay(
      index * 150,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 300 }),
          withTiming(0.5, { duration: 300 }),
        ),
        -1,
        false,
      ),
    );
  }, [index]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        styles.dot,
        {
          width: dotSize,
          height: dotSize,
          borderRadius: dotSize / 2,
          backgroundColor: color,
        },
        animatedStyle,
      ]}
    />
  );
};

/**
 * 펄스 애니메이션 인디케이터 (Reanimated)
 */
const PulseIndicator: React.FC<{ size: number; color: string }> = ({
  size,
  color,
}) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1000 }), -1, false);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(progress.value, [0, 1], [1, 2]) }],
    opacity: interpolate(progress.value, [0, 1], [1, 0]),
  }));

  return (
    <View
      style={{
        width: size * 2,
        height: size * 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Animated.View
        style={[
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: color,
          },
          animatedStyle,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  text: {
    marginTop: 12,
    fontWeight: '500',
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {},
});

export default Loading;
