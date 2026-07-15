import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { MotionBox, useSlide } from '@package/motion';

import { TOAST } from '@shared/core/tokens/overlay';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { ToastProps } from './Toast.types';

export const Toast: React.FC<ToastProps> = ({
  visible,
  message,
  variant = 'info',
  duration = 3000,
  onHide,
  testID,
}) => {
  const { theme } = useTheme();
  const motion = useSlide({ visible, from: 'bottom' });

  // 자동 숨김 타이머
  useEffect(() => {
    if (!visible || duration <= 0) return;
    const timer = setTimeout(onHide, duration);
    return () => clearTimeout(timer);
  }, [visible, duration, onHide]);

  if (!motion.mounted) return null;

  const backgroundColor =
    variant === 'success'
      ? theme.colors.button.success
      : variant === 'error'
        ? theme.colors.button.error
        : theme.colors.text.black;

  // 가장 가까운 화면 컨테이너 기준 절대 배치
  return (
    <View
      pointerEvents="box-none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1100,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: TOAST.offset,
      }}
    >
      <MotionBox motion={motion} sizing="intrinsic">
        <View
          accessibilityRole="alert"
          accessibilityLiveRegion="polite"
          testID={testID}
          style={{
            maxWidth: '90%',
            paddingVertical: TOAST.paddingVertical,
            paddingHorizontal: TOAST.paddingHorizontal,
            borderRadius: TOAST.borderRadius,
            backgroundColor,
          }}
        >
          <Text
            style={{ color: theme.colors.text.white, fontSize: TOAST.fontSize }}
          >
            {message}
          </Text>
        </View>
      </MotionBox>
    </View>
  );
};

export default Toast;
