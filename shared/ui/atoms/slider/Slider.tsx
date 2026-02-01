import React, { useCallback, useEffect, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { ISliderProps } from '@shared/ui/atoms/slider/slider.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';

/**
 * iOS 스타일 슬라이더 컴포넌트
 * react-native-reanimated 및 react-native-gesture-handler 사용
 */
const Slider: React.FC<ISliderProps> = ({
  value = 0,
  minValue = 0,
  maxValue = 100,
  step = 1,
  disabled = false,
  trackColor,
  activeTrackColor,
  thumbColor,
  thumbSize = 28,
  trackHeight = 4,
  onValueChange,
  onSlidingStart,
  onSlidingComplete,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const [sliderWidth, setSliderWidth] = useState(0);

  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);

  const clamp = useCallback(
    (val: number) => Math.min(Math.max(val, minValue), maxValue),
    [minValue, maxValue],
  );

  const getValueFromPosition = useCallback(
    (positionX: number) => {
      if (sliderWidth <= 0) return minValue;
      const clampedX = Math.max(0, Math.min(positionX, sliderWidth));
      const ratio = clampedX / sliderWidth;
      const rawValue = minValue + ratio * (maxValue - minValue);
      const steppedValue = Math.round(rawValue / step) * step;
      return clamp(steppedValue);
    },
    [sliderWidth, minValue, maxValue, step, clamp],
  );

  const getPositionFromValue = useCallback(
    (val: number) => {
      if (sliderWidth <= 0) return 0;
      const range = maxValue - minValue;
      if (range <= 0) return 0;
      const ratio = (val - minValue) / range;
      return ratio * sliderWidth;
    },
    [sliderWidth, minValue, maxValue],
  );

  // 초기 값 및 외부 값 변경 대응
  useEffect(() => {
    if (sliderWidth > 0) {
      translateX.value = getPositionFromValue(value);
    }
  }, [value, sliderWidth, getPositionFromValue, translateX]);

  const handleValueChange = (newValue: number) => {
    onValueChange?.(newValue);
  };

  const handleSlidingStart = () => {
    onSlidingStart?.();
  };

  const handleSlidingComplete = (finalValue: number) => {
    onSlidingComplete?.(finalValue);
  };

  const panGesture = Gesture.Pan()
    .enabled(!disabled)
    .onStart(() => {
      scale.value = withSpring(1.2);
      runOnJS(handleSlidingStart)();
    })
    .onUpdate((event) => {
      const newX = Math.max(0, Math.min(event.x, sliderWidth));
      translateX.value = newX;
      const newValue = getValueFromPosition(newX);
      runOnJS(handleValueChange)(newValue);
    })
    .onEnd(() => {
      scale.value = withSpring(1);
      const finalValue = getValueFromPosition(translateX.value);
      runOnJS(handleSlidingComplete)(finalValue);
    });

  const tapGesture = Gesture.Tap()
    .enabled(!disabled)
    .onEnd((event) => {
      const newX = Math.max(0, Math.min(event.x, sliderWidth));
      translateX.value = withSpring(newX);
      const newValue = getValueFromPosition(newX);
      runOnJS(handleValueChange)(newValue);
      runOnJS(handleSlidingComplete)(newValue);
    });

  const composedGesture = Gesture.Exclusive(panGesture, tapGesture);

  const handleLayout = (event: LayoutChangeEvent) => {
    const width = event.nativeEvent.layout.width;
    setSliderWidth(width);
  };

  const thumbAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value - thumbSize / 2 },
      { scale: scale.value },
    ],
  }));

  const activeTrackAnimatedStyle = useAnimatedStyle(() => ({
    width: translateX.value,
  }));

  const defaultTrackColor = trackColor || '#E5E5EA';
  const defaultActiveColor = activeTrackColor || '#007AFF';
  const defaultThumbColor = thumbColor || '#FFFFFF';

  return (
    <GestureDetector gesture={composedGesture}>
      <View
        style={[styles.container, { opacity: disabled ? 0.5 : 1 }, style]}
        onLayout={handleLayout}
        {...props}
      >
        <View
          style={[
            styles.track,
            {
              height: trackHeight,
              backgroundColor: defaultTrackColor,
              borderRadius: trackHeight / 2,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.activeTrack,
              {
                height: trackHeight,
                backgroundColor: defaultActiveColor,
                borderRadius: trackHeight / 2,
              },
              activeTrackAnimatedStyle,
            ]}
          />
        </View>
        <Animated.View
          style={[
            styles.thumb,
            {
              width: thumbSize,
              height: thumbSize,
              borderRadius: thumbSize / 2,
              backgroundColor: defaultThumbColor,
              top: (40 - thumbSize) / 2,
            },
            thumbAnimatedStyle,
          ]}
        />
      </View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    width: '100%',
  },
  track: {
    width: '100%',
    position: 'relative',
  },
  activeTrack: {
    position: 'absolute',
    left: 0,
  },
  thumb: {
    position: 'absolute',
    left: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 0.5,
    borderColor: '#D1D1D6',
  },
});

export default Slider;
