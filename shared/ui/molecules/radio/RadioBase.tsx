import { Typo } from '@shared/ui/atoms';
import { IRadioProps } from '@shared/ui/molecules/radio/radio.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

/**
 * CheckBoxBase 스타일이 적용된 라디오 버튼 컴포넌트
 */
const RadioBase = ({
  value,
  selectedValue,
  onSelect,
  label,
  disabled = false,
  size = 24,
  labelSize = 16,
  boxColor = 'primary',
  containerStyle,
  labelStyle,
}: IRadioProps) => {
  const { theme } = useTheme();
  const isSelected = value === selectedValue;

  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: isSelected ? 1 : 0,
      velocity: 10,
      useNativeDriver: true,
    }).start();
  }, [isSelected, scaleValue]);

  const handlePress = () => {
    if (disabled) return;
    onSelect?.(value);
  };

  const activeColor = theme.colors.button[boxColor];
  const disabledColor = theme.baseTokens.disabled;

  const containerStyles: StyleProp<ViewStyle> = [
    styles.container,
    { flexDirection: 'row', alignItems: 'center' },
    containerStyle,
  ];

  const wrapperStyle: StyleProp<ViewStyle> = [
    styles.wrapper,
    {
      width: size,
      height: size,
      borderRadius: size / 2,
      borderColor: disabled ? disabledColor : activeColor,
    },
    disabled && styles.disabled,
  ];

  const dotSize = size / 2;
  const dotStyle: StyleProp<ViewStyle> = [
    {
      width: dotSize,
      height: dotSize,
      borderRadius: dotSize / 2,
      backgroundColor: disabled ? disabledColor : activeColor,
      transform: [{ scale: scaleValue }],
    },
  ];

  const labelTextStyle = [
    styles.label,
    {
      color: disabled ? theme.colors.text.grey4 : theme.colors.text.grey0,
      fontSize: labelSize,
    },
    labelStyle,
  ];

  return (
    <Pressable
      onPress={handlePress}
      style={containerStyles}
      disabled={disabled}
    >
      <View style={wrapperStyle}>
        <Animated.View style={dotStyle} />
      </View>
      {label && <Typo.Caption style={labelTextStyle}>{label}</Typo.Caption>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  wrapper: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    marginLeft: 8,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default RadioBase;
