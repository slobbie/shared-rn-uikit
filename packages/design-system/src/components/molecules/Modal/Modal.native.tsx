import React from 'react';
import { Modal as RNModal, Pressable, Text, View } from 'react-native';
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

  return (
    <RNModal
      visible={backdropMotion.mounted}
      transparent
      animationType="none"
      onRequestClose={onClose}
      testID={testID}
    >
      <MotionBox
        motion={backdropMotion}
        sizing="fill"
        layoutStyle={{ flex: 1 }}
      >
        <Pressable
          onPress={onClose}
          pointerEvents={visible ? 'auto' : 'none'}
          style={{
            flex: 1,
            backgroundColor: `rgba(0, 0, 0, ${MODAL.backdropOpacity})`,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View style={{ width: '90%', maxWidth: MODAL.maxWidth }}>
            <Scale visible={visible} from={0.96} sizing="fill">
              <Pressable
                onPress={() => {}}
                style={{
                  backgroundColor: theme.colors.text.white,
                  borderRadius: MODAL.borderRadius,
                  padding: MODAL.padding,
                  width: '100%',
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
            </Scale>
          </View>
        </Pressable>
      </MotionBox>
    </RNModal>
  );
};

export default Modal;
