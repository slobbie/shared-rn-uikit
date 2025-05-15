import { useRef } from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import { IBaseButtonProps } from '@shared/ui/atoms/button/button.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';

/**
 * 기본 버튼 컴포넌트
 */
const BaseButton = ({
  variant = 'static',
  onPress,
  color = 'primary',
  disabled,
  children,
  highlight = 0.7,
  opacity = 0.7,
  radius = 8,
  debounceDelay = 300,
  ...props
}: IBaseButtonProps) => {
  const { theme } = useTheme();
  const isCoolDown = useRef(false);

  const baseStyle = [
    styles.button,
    { backgroundColor: theme.colors.button[color], borderRadius: radius },
    variant === 'highlight' && styles.highlightBase,
    disabled && { backgroundColor: theme.colors.button.disabled },
  ];

  const pressableStyle = ({ pressed }: { pressed: boolean }) => {
    if (variant === 'opacity') {
      return [...baseStyle, pressed && { opacity }];
    }
    return baseStyle;
  };

  const handlePress = (event: GestureResponderEvent) => {
    if (isCoolDown.current) return;
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
      {({ pressed }) => (
        <>
          {children}
          {variant === 'highlight' && (
            <View
              pointerEvents='none'
              style={[
                StyleSheet.absoluteFill,
                {
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  opacity: pressed ? 1 : 0,
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
