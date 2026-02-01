import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, LayoutChangeEvent } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import { ISegmentedControlProps } from '@shared/ui/atoms/segmentedControl/segmentedControl.interface';

/**
 * iOS 스타일 세그먼트 컨트롤 컴포넌트
 * react-native-reanimated 사용
 */
const SegmentedControl: React.FC<ISegmentedControlProps> = ({
  segments,
  selectedIndex,
  onIndexChange,
  disabled = false,
  backgroundColor = '#E5E5EA',
  activeBackgroundColor = '#FFFFFF',
  textColor = '#8E8E93',
  activeTextColor = '#1C1C1E',
  height = 32,
  borderRadius,
  style,
  ...props
}) => {
  const [containerWidth, setContainerWidth] = React.useState(0);
  const translateX = useSharedValue(0);
  const segmentWidth = containerWidth / segments.length;
  const radius = borderRadius ?? height / 2;

  useEffect(() => {
    if (containerWidth > 0) {
      translateX.value = withSpring(selectedIndex * segmentWidth, {
        damping: 15,
        stiffness: 300,
      });
    }
  }, [selectedIndex, segmentWidth, containerWidth, translateX]);

  const handleLayout = (event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  const handlePress = (index: number) => {
    if (!disabled && index !== selectedIndex) {
      onIndexChange?.(index);
    }
  };

  const indicatorAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      style={[
        styles.container,
        {
          height,
          borderRadius: radius,
          backgroundColor,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
      onLayout={handleLayout}
      {...props}
    >
      {containerWidth > 0 && (
        <Animated.View
          style={[
            styles.indicator,
            {
              width: segmentWidth - 4,
              height: height - 4,
              borderRadius: radius - 2,
              backgroundColor: activeBackgroundColor,
            },
            indicatorAnimatedStyle,
          ]}
        />
      )}
      {segments.map((segment, index) => (
        <Pressable
          key={index}
          style={[styles.segment, { width: segmentWidth }]}
          onPress={() => handlePress(index)}
          disabled={disabled}
        >
          <Text
            style={[
              styles.segmentText,
              {
                color: index === selectedIndex ? activeTextColor : textColor,
                fontWeight: index === selectedIndex ? '600' : '400',
              },
            ]}
          >
            {segment}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 2,
    position: 'relative',
  },
  indicator: {
    position: 'absolute',
    top: 2,
    left: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  segment: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  segmentText: {
    fontSize: 13,
  },
});

export default SegmentedControl;
