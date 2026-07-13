import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { MODAL } from '@shared/core/tokens/overlay';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { ModalProps } from './Modal.types';

export const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  title,
  children,
  testID,
}) => {
  const { theme } = useTheme();

  // ESC 키로 닫기
  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [visible, onClose]);

  if (!visible) return null;

  return createPortal(
    <div
      onClick={onClose}
      data-testid={testID}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: `rgba(0, 0, 0, ${MODAL.backdropOpacity})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: theme.colors.text.white,
          borderRadius: MODAL.borderRadius,
          padding: MODAL.padding,
          maxWidth: MODAL.maxWidth,
          width: '90%',
          boxSizing: 'border-box',
        }}
      >
        {title ? (
          <div
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: theme.colors.text.black,
              marginBottom: 12,
            }}
          >
            {title}
          </div>
        ) : null}
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
