import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import { IRadioProps, IRadioGroupProps } from '@shared/ui/atoms/radio/radio.interface';

/**
 * iOS 스타일 라디오 버튼 컴포넌트
 * react-native-reanimated 사용
 */
const Radio: React.FC<IRadioProps> = ({
  selected,
  onSelect,
  disabled = false,
  label,
  size = 'medium',
  color = '#007AFF',
  style,
  ...props
}) => {
  const scale = useSharedValue(1);
  const innerScale = useSharedValue(selected ? 1 : 0);

  const getSizeConfig = () => {
    switch (size) {
      case 'small':
        return { outer: 18, inner: 8, fontSize: 14 };
      case 'large':
        return { outer: 28, inner: 14, fontSize: 18 };
      case 'medium':
      default:
        return { outer: 24, inner: 12, fontSize: 16 };
    }
  };

  const config = getSizeConfig();

  useEffect(() => {
    innerScale.value = withSpring(selected ? 1 : 0, { damping: 15, stiffness: 300 });
  }, [selected, innerScale]);

  const handlePress = () => {
    if (!disabled && !selected) {
      scale.value = withSpring(0.9, { damping: 15, stiffness: 400 }, () => {
        scale.value = withSpring(1, { damping: 15, stiffness: 300 });
      });
      onSelect?.();
    }
  };

  const outerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    borderColor: selected ? color : '#C7C7CC',
  }));

  const innerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: innerScale.value }],
    backgroundColor: color,
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
          styles.outer,
          {
            width: config.outer,
            height: config.outer,
            borderRadius: config.outer / 2,
          },
          outerAnimatedStyle,
        ]}
      >
        <Animated.View
          style={[
            styles.inner,
            {
              width: config.inner,
              height: config.inner,
              borderRadius: config.inner / 2,
            },
            innerAnimatedStyle,
          ]}
        />
      </Animated.View>
      {label && (
        <Text style={[styles.label, { fontSize: config.fontSize }]}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};

/**
 * 라디오 그룹 컴포넌트
 */
const RadioGroup: React.FC<IRadioGroupProps> = ({
  value,
  onValueChange,
  options,
  direction = 'vertical',
  size = 'medium',
  color = '#007AFF',
  style,
  ...props
}) => {
  return (
    <View
      style={[
        styles.group,
        { flexDirection: direction === 'horizontal' ? 'row' : 'column' },
        style,
      ]}
      {...props}
    >
      {options.map((option) => (
        <Radio
          key={option.value}
          selected={value === option.value}
          onSelect={() => onValueChange?.(option.value)}
          label={option.label}
          disabled={option.disabled}
          size={size}
          color={color}
          style={direction === 'horizontal' ? styles.horizontalItem : styles.verticalItem}
        />
      ))}
    </View>
  );
};

const RadioWithGroup = Radio as React.FC<IRadioProps> & {
  Group: React.FC<IRadioGroupProps>;
};
RadioWithGroup.Group = RadioGroup;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outer: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {},
  label: {
    marginLeft: 10,
    color: '#1C1C1E',
  },
  group: {
    gap: 12,
  },
  horizontalItem: {
    marginRight: 16,
  },
  verticalItem: {
    marginBottom: 8,
  },
});

export default RadioWithGroup;
