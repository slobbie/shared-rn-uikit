import { IBarProps } from '@shared/ui/molecules/progress/progress.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';
import { useEffect, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent, StyleSheet, View } from 'react-native';

const Bar = ({
  progress,
  width = '100%',
  height = 8,
  progressColor = 'primary',
  trackColor,
  style,
  dashOptions,
}: IBarProps) => {
  const { theme } = useTheme();
  const [measuredWidth, setMeasuredWidth] = useState(0);

  const clampedProgress = Math.max(0, Math.min(100, progress));
  const animatedProgress = useRef(new Animated.Value(clampedProgress)).current;

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: clampedProgress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [clampedProgress, animatedProgress]);

  const progressWidth = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width: layoutWidth } = event.nativeEvent.layout;
    if (measuredWidth !== layoutWidth) {
      setMeasuredWidth(layoutWidth);
    }
  };

  if (dashOptions) {
    const effectiveWidth = typeof width === 'number' ? width : measuredWidth;

    if (effectiveWidth === 0) {
      return <View style={[{ width }, style]} onLayout={handleLayout} />;
    }

    const { count, gapRatio = 0.5 } = dashOptions;
    const dashWidth = effectiveWidth / (count + gapRatio * (count - 1));
    const gap = dashWidth * gapRatio;

    const renderDashes = (color: string) => (
      <View style={[styles.dashContainer, { gap }]}>
        {Array.from({ length: count }).map((_, index) => (
          <View
            key={index}
            style={{
              width: dashWidth,
              height,
              borderRadius: height / 2,
              backgroundColor: color,
            }}
          />
        ))}
      </View>
    );

    return (
      <View style={[{ width, height }, style]} onLayout={handleLayout}>
        {renderDashes(trackColor || theme.baseTokens.greyOutline)}
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            { width: progressWidth, overflow: 'hidden' },
          ]}
        >
          {renderDashes(theme.colors.button[progressColor])}
        </Animated.View>
      </View>
    );
  }

  const trackStyle = [
    styles.track,
    {
      width,
      height,
      borderRadius: height / 2,
      backgroundColor: trackColor || theme.baseTokens.greyOutline,
    },
    style,
  ];

  const progressStyle = [
    styles.progress,
    {
      backgroundColor: theme.colors.button[progressColor],
      width: progressWidth,
    },
  ];

  return (
    <View style={trackStyle}>
      <Animated.View style={progressStyle} />
    </View>
  );
};

export default Bar;

const styles = StyleSheet.create({
  track: {
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
  },
  dashContainer: {
    flexDirection: 'row',
  },
});
