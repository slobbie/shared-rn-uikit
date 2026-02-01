import React, { useRef } from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Animated,
  GestureResponderEvent,
} from 'react-native';

import { IClickableProps, ClickableFeedback } from '@shared/ui/utils/clickable/clickable.interface';

/**
 * 클릭 가능한 영역 컴포넌트
 */
const Clickable: React.FC<IClickableProps> = ({
  feedback = 'opacity',
  activeOpacity = 0.7,
  scaleValue = 0.97,
  highlightColor = 'rgba(0, 0, 0, 0.1)',
  debounceDelay = 300,
  onPress,
  disabled,
  children,
  style,
  ...props
}) => {
  const isCoolDown = useRef(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    if (feedback === 'scale') {
      Animated.spring(scaleAnim, {
        toValue: scaleValue,
        useNativeDriver: true,
      }).start();
    }
  };

  const handlePressOut = () => {
    if (feedback === 'scale') {
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  const handlePress = (event: GestureResponderEvent) => {
    if (isCoolDown.current) return;
    isCoolDown.current = true;
    onPress?.(event);
    setTimeout(() => {
      isCoolDown.current = false;
    }, debounceDelay);
  };

  const getPressableStyle = (pressed: boolean) => {
    const baseStyle = [styles.container, style];

    switch (feedback) {
      case 'opacity':
        return [...baseStyle, pressed && { opacity: activeOpacity }];
      case 'none':
      default:
        return baseStyle;
    }
  };

  const renderContent = (pressed: boolean) => {
    return (
      <>
        {children}
        {feedback === 'highlight' && pressed && (
          <View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: highlightColor },
            ]}
          />
        )}
      </>
    );
  };

  if (feedback === 'scale') {
    return (
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Pressable
          onPress={handlePress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          disabled={disabled}
          style={[styles.container, style]}
          {...props}
        >
          {children}
        </Pressable>
      </Animated.View>
    );
  }

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={({ pressed }) => getPressableStyle(pressed)}
      {...props}
    >
      {({ pressed }) => renderContent(pressed)}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});

export default Clickable;
