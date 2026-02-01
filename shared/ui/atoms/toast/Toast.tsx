import React, { useCallback, useEffect } from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { IToastProps, ToastType } from '@shared/ui/atoms/toast/toast.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

/**
 * iOS 스타일 토스트 알림 컴포넌트
 * react-native-reanimated 사용
 */
const Toast: React.FC<IToastProps> = ({
  visible,
  message,
  type = 'info',
  position = 'bottom',
  duration = 3000,
  onDismiss,
  showIcon = true,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(position === 'top' ? -100 : 100);

  const getTypeColors = (toastType: ToastType) => {
    const colors = {
      info: { bg: '#007AFF', icon: 'ℹ️' },
      success: { bg: '#34C759', icon: '✓' },
      warning: { bg: '#FF9500', icon: '⚠️' },
      error: { bg: '#FF3B30', icon: '✕' },
    };
    return colors[toastType];
  };

  const handleDismiss = useCallback(() => {
    onDismiss?.();
  }, [onDismiss]);

  const hideToast = useCallback(() => {
    opacity.value = withTiming(0, { duration: 300 });
    translateY.value = withSpring(
      position === 'top' ? -100 : 100,
      {
        damping: 15,
        stiffness: 300,
      },
      () => {
        runOnJS(handleDismiss)();
      },
    );
  }, [position, handleDismiss]);

  useEffect(() => {
    if (visible) {
      opacity.value = withTiming(1, { duration: 300 });
      translateY.value = withSpring(0, { damping: 15, stiffness: 300 });

      if (duration > 0) {
        const timer = setTimeout(() => {
          hideToast();
        }, duration);
        return () => clearTimeout(timer);
      }
    } else {
      opacity.value = 0;
      translateY.value = position === 'top' ? -100 : 100;
    }
  }, [visible, duration, position, hideToast]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  if (!visible) return null;

  const typeColors = getTypeColors(type);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: typeColors.bg,
          [position]: 50,
        },
        animatedStyle,
        style,
      ]}
      {...props}
    >
      {showIcon && <Text style={styles.icon}>{typeColors.icon}</Text>}
      <Text style={[styles.message, { color: '#FFFFFF' }]}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 20,
    right: 20,
    maxWidth: SCREEN_WIDTH - 40,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    zIndex: 9999,
  },
  icon: {
    fontSize: 16,
    marginRight: 10,
  },
  message: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
});

export default Toast;
