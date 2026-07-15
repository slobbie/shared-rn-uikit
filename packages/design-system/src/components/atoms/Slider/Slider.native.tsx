import React, { useCallback, useMemo, useRef, useState } from 'react';
import { LayoutChangeEvent, PanResponder, View } from 'react-native';

import { SLIDER } from '@shared/core/tokens/overlay';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { SliderProps } from './Slider.types';

export const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  accessibilityLabel,
  testID,
}) => {
  const { theme } = useTheme();
  const { trackHeight, thumbSize, borderRadius } = SLIDER;
  const [trackWidth, setTrackWidth] = useState(0);
  const trackWidthRef = useRef(0);

  const handleLayout = useCallback((e: LayoutChangeEvent) => {
    const width = e.nativeEvent.layout.width;
    trackWidthRef.current = width;
    setTrackWidth(width);
  }, []);

  // 터치 x좌표 → step 스냅 + 범위 클램프
  const valueFromX = useCallback(
    (x: number) => {
      const width = trackWidthRef.current;
      if (width <= 0 || max <= min) return min;
      const ratio = Math.max(0, Math.min(x, width)) / width;
      const raw = min + ratio * (max - min);
      const snapped = Math.round((raw - min) / step) * step + min;
      return Math.max(min, Math.min(max, snapped));
    },
    [min, max, step],
  );

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => !disabled,
        onMoveShouldSetPanResponder: () => !disabled,
        onPanResponderGrant: (e) => {
          onChange(valueFromX(e.nativeEvent.locationX));
        },
        onPanResponderMove: (e) => {
          onChange(valueFromX(e.nativeEvent.locationX));
        },
      }),
    [disabled, onChange, valueFromX],
  );

  const range = max - min;
  const ratio = range > 0 ? (Math.max(min, Math.min(max, value)) - min) / range : 0;
  const thumbLeft = Math.max(0, ratio * trackWidth - thumbSize / 2);

  return (
    <View
      accessibilityRole="adjustable"
      accessibilityLabel={accessibilityLabel}
      accessibilityValue={{ min, max, now: value }}
      accessibilityState={{ disabled }}
      testID={testID}
      onLayout={handleLayout}
      {...panResponder.panHandlers}
      style={{
        width: '100%',
        height: thumbSize,
        justifyContent: 'center',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {/* 트랙 */}
      <View
        style={{
          height: trackHeight,
          borderRadius,
          backgroundColor: theme.colors.text.grey5,
          overflow: 'hidden',
        }}
      >
        {/* 채워진 구간 */}
        <View
          style={{
            width: ratio * trackWidth,
            height: trackHeight,
            borderRadius,
            backgroundColor: theme.colors.button.primary,
          }}
        />
      </View>
      {/* 썸 */}
      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          left: thumbLeft,
          width: thumbSize,
          height: thumbSize,
          borderRadius: thumbSize / 2,
          backgroundColor: theme.colors.button.primary,
        }}
      />
    </View>
  );
};

export default Slider;
