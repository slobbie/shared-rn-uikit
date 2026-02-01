import React, { useState } from 'react';
import {
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import {
  ITooltipProps,
  TooltipPosition,
} from '@shared/ui/atoms/tooltip/tooltip.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';

/**
 * iOS 스타일 툴팁 컴포넌트
 * 클릭하여 표시/숨김
 * react-native-reanimated 사용
 */
const Tooltip: React.FC<ITooltipProps> = ({
  content,
  visible: controlledVisible,
  position = 'top',
  backgroundColor,
  textColor,
  arrowSize = 8,
  children,
  onShow,
  onHide,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const [internalVisible, setInternalVisible] = useState(false);
  const [tooltipLayout, setTooltipLayout] = useState({ width: 0, height: 0 });
  const [triggerLayout, setTriggerLayout] = useState({ width: 0, height: 0 });
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.9);

  const isVisible = controlledVisible ?? internalVisible;

  const bgColor = backgroundColor || '#1C1C1E';
  const txtColor = textColor || '#FFFFFF';

  const showTooltip = () => {
    setInternalVisible(true);
    opacity.value = withTiming(1, { duration: 200 });
    scale.value = withSpring(1, { damping: 15, stiffness: 300 });
    onShow?.();
  };

  const hideTooltip = () => {
    opacity.value = withTiming(0, { duration: 150 });
    scale.value = withTiming(0.9, { duration: 150 });
    setTimeout(() => {
      setInternalVisible(false);
      onHide?.();
    }, 150);
  };

  const handleTriggerLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setTriggerLayout({ width, height });
  };

  const handleTooltipLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setTooltipLayout({ width, height });
  };

  const getTooltipPosition = (pos: TooltipPosition) => {
    const offset = arrowSize + 4;
    switch (pos) {
      case 'top':
        return {
          bottom: triggerLayout.height + offset,
          left: (triggerLayout.width - tooltipLayout.width) / 2,
        };
      case 'bottom':
        return {
          top: triggerLayout.height + offset,
          left: (triggerLayout.width - tooltipLayout.width) / 2,
        };
      case 'left':
        return {
          right: triggerLayout.width + offset,
          top: (triggerLayout.height - tooltipLayout.height) / 2,
        };
      case 'right':
        return {
          left: triggerLayout.width + offset,
          top: (triggerLayout.height - tooltipLayout.height) / 2,
        };
    }
  };

  const getArrowStyle = (pos: TooltipPosition) => {
    const baseArrow = {
      position: 'absolute' as const,
      width: 0,
      height: 0,
      borderStyle: 'solid' as const,
    };

    switch (pos) {
      case 'top':
        return {
          ...baseArrow,
          bottom: -arrowSize,
          left: tooltipLayout.width / 2 - arrowSize,
          borderLeftWidth: arrowSize,
          borderRightWidth: arrowSize,
          borderTopWidth: arrowSize,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderTopColor: bgColor,
        };
      case 'bottom':
        return {
          ...baseArrow,
          top: -arrowSize,
          left: tooltipLayout.width / 2 - arrowSize,
          borderLeftWidth: arrowSize,
          borderRightWidth: arrowSize,
          borderBottomWidth: arrowSize,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: bgColor,
        };
      case 'left':
        return {
          ...baseArrow,
          right: -arrowSize,
          top: tooltipLayout.height / 2 - arrowSize,
          borderTopWidth: arrowSize,
          borderBottomWidth: arrowSize,
          borderLeftWidth: arrowSize,
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent',
          borderLeftColor: bgColor,
        };
      case 'right':
        return {
          ...baseArrow,
          left: -arrowSize,
          top: tooltipLayout.height / 2 - arrowSize,
          borderTopWidth: arrowSize,
          borderBottomWidth: arrowSize,
          borderRightWidth: arrowSize,
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent',
          borderRightColor: bgColor,
        };
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={[styles.container, style]} {...props}>
      <Pressable
        onPressIn={showTooltip}
        onPressOut={hideTooltip}
        onLayout={handleTriggerLayout}
      >
        {children}
      </Pressable>

      {isVisible && (
        <Animated.View
          style={[
            styles.tooltip,
            { backgroundColor: bgColor },
            getTooltipPosition(position),
            animatedStyle,
          ]}
          onLayout={handleTooltipLayout}
        >
          <Text style={[styles.text, { color: txtColor }]}>{content}</Text>
          <View style={getArrowStyle(position)} />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  tooltip: {
    position: 'absolute',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
    minWidth: 60,
    maxWidth: 250,
  },
  text: {
    fontSize: 13,
    fontWeight: '500',
    flexShrink: 1,
  },
});

export default Tooltip;
