import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DURATION, MotionBox, Scale, useFade } from '@package/motion';

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
  const backdropMotion = useFade({
    visible,
    duration: DURATION.normal,
  });

  // ESC 키로 닫기
  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [visible, onClose]);

  if (!backdropMotion.mounted || typeof document === 'undefined') return null;

  return createPortal(
    <MotionBox
      motion={backdropMotion}
      sizing="fill"
      layoutStyle={{ position: 'fixed', inset: 0, zIndex: 1000 }}
    >
      <div
        onClick={onClose}
        data-testid={testID}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: `rgba(0, 0, 0, ${MODAL.backdropOpacity})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: visible ? 'auto' : 'none',
        }}
      >
        <div style={{ width: '90%', maxWidth: MODAL.maxWidth }}>
          <Scale visible={visible} from={0.96} sizing="fill">
            <div
              role="dialog"
              aria-modal="true"
              aria-label={title}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: theme.colors.text.white,
                borderRadius: MODAL.borderRadius,
                padding: MODAL.padding,
                width: '100%',
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
          </Scale>
        </div>
      </div>
    </MotionBox>,
    document.body,
  );
};

export default Modal;
