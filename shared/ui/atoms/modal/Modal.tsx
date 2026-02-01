import React from 'react';
import {
  Dimensions,
  Pressable,
  Modal as RNModal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { IModalProps, ModalSize } from '@shared/ui/atoms/modal/modal.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

/**
 * 모달 다이얼로그 컴포넌트
 */
const Modal: React.FC<IModalProps> = ({
  visible,
  onClose,
  size = 'medium',
  title,
  showCloseButton = true,
  closeOnBackdrop = true,
  animationType = 'fade',
  children,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const getSizeStyle = (modalSize: ModalSize) => {
    switch (modalSize) {
      case 'small':
        return { width: SCREEN_WIDTH * 0.7, maxHeight: SCREEN_HEIGHT * 0.4 };
      case 'medium':
        return { width: SCREEN_WIDTH * 0.85, maxHeight: SCREEN_HEIGHT * 0.6 };
      case 'large':
        return { width: SCREEN_WIDTH * 0.95, maxHeight: SCREEN_HEIGHT * 0.8 };
      case 'fullscreen':
        return { width: SCREEN_WIDTH, height: SCREEN_HEIGHT, borderRadius: 0 };
    }
  };

  const handleBackdropPress = () => {
    if (closeOnBackdrop) {
      onClose?.();
    }
  };

  return (
    <RNModal
      visible={visible}
      transparent
      animationType={animationType}
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={handleBackdropPress}>
        <Pressable
          style={[
            styles.container,
            { backgroundColor: theme.colors.background.background_white },
            getSizeStyle(size),
            style,
          ]}
          onPress={(e) => e.stopPropagation()}
          {...props}
        >
          {(title || showCloseButton) && (
            <View style={styles.header}>
              {title && (
                <Text
                  style={[styles.title, { color: theme.colors.text.primary }]}
                >
                  {title}
                </Text>
              )}
              {showCloseButton && (
                <Pressable
                  onPress={onClose}
                  style={styles.closeButton}
                  hitSlop={8}
                >
                  <Text
                    style={[
                      styles.closeIcon,
                      { color: theme.colors.text.secondary },
                    ]}
                  >
                    ✕
                  </Text>
                </Pressable>
              )}
            </View>
          )}
          <ScrollView
            style={styles.content}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        </Pressable>
      </Pressable>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  closeButton: {
    padding: 4,
  },
  closeIcon: {
    fontSize: 18,
    fontWeight: '500',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default Modal;
