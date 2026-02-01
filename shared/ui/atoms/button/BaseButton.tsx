import React, { useRef } from 'react';
import {
  GestureResponderEvent,
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { useTheme } from '@shared/utils/lib/ThemeContext';
import { IBaseButtonProps } from './button.interface';

/**
 * 기본 버튼 컴포넌트
 * iOS 스타일 (반응형 피드백) 반영
 */
const BaseButton = ({
  variant = 'static',
  onPress,
  color = 'primary',
  textColor = '#FFFFFF',
  disabled,
  children,
  highlight = 0.7,
  opacity = 0.7,
  radius = 8,
  debounceDelay = 300,
  style,
  ...props
}: IBaseButtonProps) => {
  const { theme } = useTheme();
  const isCoolDown = useRef(false);

  const baseStyle: StyleProp<ViewStyle>[] = [
    styles.button,
    {
      backgroundColor: theme.colors.button[color],
      borderRadius: radius,
    },
    variant === 'highlight' && styles.highlightBase,
    disabled && { backgroundColor: theme.colors.button.disabled },
    style,
  ].filter(Boolean) as ViewStyle[];

  const pressableStyle: (
    state: PressableStateCallbackType,
  ) => StyleProp<ViewStyle> = (state) => {
    if (variant === 'opacity' && state.pressed) {
      return StyleSheet.flatten([...baseStyle, { opacity }]);
    }
    return StyleSheet.flatten(baseStyle);
  };

  const handlePress = (event: GestureResponderEvent) => {
    if (isCoolDown.current || disabled) return;
    isCoolDown.current = true;
    onPress?.(event);
    setTimeout(() => {
      isCoolDown.current = false;
    }, debounceDelay);
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={pressableStyle}
      {...props}
    >
      {(state) => (
        <>
          {children}
          {variant === 'highlight' && (
            <View
              pointerEvents='none'
              style={[
                StyleSheet.absoluteFill,
                {
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  opacity: state.pressed ? 1 : 0,
                },
              ]}
            />
          )}
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  highlightBase: {
    overflow: 'hidden',
    position: 'relative',
  },
});

export default BaseButton;
