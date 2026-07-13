import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

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

  // 자동 숨김 타이머
  useEffect(() => {
    if (!visible || duration <= 0) return;
    const timer = setTimeout(onHide, duration);
    return () => clearTimeout(timer);
  }, [visible, duration, onHide]);

  if (!visible) return null;

  const backgroundColor =
    variant === 'success'
      ? theme.colors.button.success
      : variant === 'error'
        ? theme.colors.button.error
        : theme.colors.text.black;

  return createPortal(
    <div
      role="status"
      aria-live="polite"
      data-testid={testID}
      style={{
        position: 'fixed',
        bottom: TOAST.offset,
        left: '50%',
        transform: 'translateX(-50%)',
        padding: `${TOAST.paddingVertical}px ${TOAST.paddingHorizontal}px`,
        borderRadius: TOAST.borderRadius,
        backgroundColor,
        color: theme.colors.text.white,
        fontSize: TOAST.fontSize,
        maxWidth: '90%',
        zIndex: 1100,
      }}
    >
      {message}
    </div>,
    document.body,
  );
};

export default Toast;
