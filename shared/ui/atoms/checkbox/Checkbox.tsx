import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { ICheckboxProps } from '@shared/ui/atoms/checkbox/checkbox.interface';

/**
 * iOS 스타일 체크박스 컴포넌트
 * react-native-reanimated 사용
 */
const Checkbox: React.FC<ICheckboxProps> = ({
  checked,
  onValueChange,
  disabled = false,
  label,
  size = 'medium',
  color = '#007AFF',
  style,
  ...props
}) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(checked ? 1 : 0);
  const checkScale = useSharedValue(checked ? 1 : 0);

  const getSizeConfig = () => {
    switch (size) {
      case 'small':
        return { box: 18, check: 10, fontSize: 14 };
      case 'large':
        return { box: 28, check: 16, fontSize: 18 };
      case 'medium':
      default:
        return { box: 24, check: 14, fontSize: 16 };
    }
  };

  const config = getSizeConfig();

  useEffect(() => {
    opacity.value = withTiming(checked ? 1 : 0, { duration: 150 });
    checkScale.value = withSpring(checked ? 1 : 0, { damping: 15, stiffness: 300 });
  }, [checked, opacity, checkScale]);

  const handlePress = () => {
    if (!disabled) {
      scale.value = withSpring(0.9, { damping: 15, stiffness: 400 }, () => {
        scale.value = withSpring(1, { damping: 15, stiffness: 300 });
      });
      onValueChange?.(!checked);
    }
  };

  const boxAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    backgroundColor: checked ? color : 'transparent',
    borderColor: checked ? color : '#C7C7CC',
  }));

  const checkAnimatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: checkScale.value }],
  }));

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={[styles.container, { opacity: disabled ? 0.5 : 1 }, style]}
      {...props}
    >
      <Animated.View
        style={[
          styles.box,
          {
            width: config.box,
            height: config.box,
            borderRadius: config.box / 4,
          },
          boxAnimatedStyle,
        ]}
      >
        <Animated.Text
          style={[
            styles.check,
            { fontSize: config.check },
            checkAnimatedStyle,
          ]}
        >
          ✓
        </Animated.Text>
      </Animated.View>
      {label && (
        <Text style={[styles.label, { fontSize: config.fontSize }]}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  label: {
    marginLeft: 10,
    color: '#1C1C1E',
  },
});

export default Checkbox;
