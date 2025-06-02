import { ICircularProps } from '@shared/ui/molecules/progress/progress.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';
import { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Stroke = ({
  progress,
  size = 100,
  strokeWidth = 10,
  progressColor = 'primary',
  trackColor,
  style,
  dashOptions,
}: ICircularProps) => {
  const { theme } = useTheme();
  const clampedProgress = Math.max(0, Math.min(100, progress));
  const animatedProgress = useRef(new Animated.Value(clampedProgress)).current;

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: clampedProgress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [clampedProgress, animatedProgress]);

  const strokeDashoffset = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  let dashArray;
  if (dashOptions) {
    const { count, gapRatio = 1 } = dashOptions;

    const dashLength = circumference / (count * (1 + gapRatio));
    const gap = dashLength * gapRatio;

    dashArray = [dashLength, gap];
    if (dashLength > 0 && gap > 0) {
      dashArray = [dashLength, gap];
    }
  }

  return (
    <View style={style}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <G transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={trackColor || theme.baseTokens.greyOutline}
            strokeWidth={strokeWidth}
            fill='transparent'
            strokeDasharray={dashArray}
          />
          <AnimatedCircle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={theme.colors.button[progressColor]}
            strokeWidth={strokeWidth}
            fill='transparent'
            strokeDasharray={dashArray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap='round'
          />
        </G>
      </Svg>
    </View>
  );
};

export default Stroke;
