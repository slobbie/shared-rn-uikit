import React, { useRef } from 'react';
import {
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
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

  const resolveStyle = (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
    const resolvedStyle =
      typeof style === 'function' ? style(state) : style;

    return StyleSheet.flatten([
      styles.container,
      resolvedStyle,
      feedback === 'opacity' && state.pressed ? { opacity: activeOpacity } : null,
    ]);
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
          style={resolveStyle}
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
      style={resolveStyle}
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
