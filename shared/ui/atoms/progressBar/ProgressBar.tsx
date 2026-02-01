import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { IProgressBarProps } from '@shared/ui/atoms/progressBar/progressBar.interface';

/**
 * iOS 스타일 프로그레스 바 컴포넌트
 * react-native-reanimated 사용
 */
const ProgressBar: React.FC<IProgressBarProps> = ({
  value,
  maxValue = 100,
  height = 8,
  borderRadius,
  trackColor = '#E5E5EA',
  progressColor = '#007AFF',
  animated = true,
  showLabel = false,
  labelPosition = 'outside',
  style,
  ...props
}) => {
  const progress = useSharedValue(0);
  const percentage = Math.min(Math.max((value / maxValue) * 100, 0), 100);
  const radius = borderRadius ?? height / 2;

  useEffect(() => {
    if (animated) {
      progress.value = withTiming(percentage, { duration: 300 });
    } else {
      progress.value = percentage;
    }
  }, [percentage, animated, progress]);

  const progressAnimatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value}%` as `${number}%`,
  }));

  return (
    <View style={[styles.container, style]} {...props}>
      {showLabel && labelPosition === 'outside' && (
        <Text style={styles.labelOutside}>{Math.round(percentage)}%</Text>
      )}
      <View
        style={[
          styles.track,
          {
            height,
            borderRadius: radius,
            backgroundColor: trackColor,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.progress,
            {
              height,
              borderRadius: radius,
              backgroundColor: progressColor,
            },
            progressAnimatedStyle,
          ]}
        >
          {showLabel && labelPosition === 'inside' && height >= 16 && (
            <Text style={styles.labelInside}>{Math.round(percentage)}%</Text>
          )}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  track: {
    width: '100%',
    overflow: 'hidden',
  },
  progress: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 6,
  },
  labelOutside: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 4,
    textAlign: 'right',
  },
  labelInside: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default ProgressBar;
