import React from 'react';
import { Modal as RNModal, Pressable, Text, View } from 'react-native';

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

  return (
    <RNModal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      testID={testID}
    >
      {/* 백드롭 — 탭하면 닫힘 */}
      <Pressable
        onPress={onClose}
        style={{
          flex: 1,
          backgroundColor: `rgba(0, 0, 0, ${MODAL.backdropOpacity})`,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Pressable
          onPress={() => {}}
          style={{
            backgroundColor: theme.colors.text.white,
            borderRadius: MODAL.borderRadius,
            padding: MODAL.padding,
            maxWidth: MODAL.maxWidth,
            width: '90%',
          }}
        >
          {title ? (
            <Text
              style={{
                fontSize: 17,
                fontWeight: '600',
                color: theme.colors.text.black,
                marginBottom: 12,
              }}
            >
              {title}
            </Text>
          ) : null}
          {children}
        </Pressable>
      </Pressable>
    </RNModal>
  );
};

export default Modal;
