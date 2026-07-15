import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  if (!motion.mounted || typeof document === 'undefined') return null;

  const backgroundColor =
    variant === 'success'
      ? theme.colors.button.success
      : variant === 'error'
        ? theme.colors.button.error
        : theme.colors.text.black;

  return createPortal(
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: TOAST.offset,
        boxSizing: 'border-box',
        pointerEvents: 'none',
        zIndex: 1100,
      }}
    >
      <MotionBox motion={motion} sizing="intrinsic">
        <div
          role="status"
          aria-live="polite"
          data-testid={testID}
          style={{
            padding: `${TOAST.paddingVertical}px ${TOAST.paddingHorizontal}px`,
            borderRadius: TOAST.borderRadius,
            backgroundColor,
            color: theme.colors.text.white,
            fontSize: TOAST.fontSize,
            maxWidth: '90vw',
          }}
        >
          {message}
        </div>
      </MotionBox>
    </div>,
    document.body,
  );
};

export default Toast;
