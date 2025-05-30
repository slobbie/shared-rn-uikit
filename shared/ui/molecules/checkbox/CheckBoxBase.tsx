import { Typo } from '@shared/ui/atoms';
import { ICheckboxProps } from '@shared/ui/molecules/checkbox/checkbox.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

// Path 컴포넌트를 애니메이션 가능하게 만듭니다.
const AnimatedPath = Animated.createAnimatedComponent(Path);

/**
 * 기본 체크박스 컴포넌트
 */
const CheckBoxBase = ({
  checked: controlledChecked,
  onChange,
  label,
  disabled = false,
  size = 24,
  labelSize = 16,
  boxColor = 'primary',
  containerStyle,
  labelStyle,
  borderRadius,
}: ICheckboxProps) => {
  const { theme } = useTheme();
  const [uncontrolledChecked, setUncontrolledChecked] = useState(false);

  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : uncontrolledChecked;

  // 애니메이션 값 설정
  const animationValue = useRef(new Animated.Value(0)).current;
  const checkmarkPathLength = 28; // Path 데이터의 근사 길이

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: checked ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [checked, animationValue]);

  const handlePress = () => {
    if (disabled) return;
    const newValue = !checked;
    if (!isControlled) {
      setUncontrolledChecked(newValue);
    }
    onChange?.(newValue);
  };

  const strokeDashoffset = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [checkmarkPathLength, 0],
  });

  const sizeStyle: ViewStyle = {
    width: size,
    height: size,
    borderRadius,
  };

  const containerStyles: StyleProp<ViewStyle> = [
    { flexDirection: 'row', alignItems: 'center' },
    containerStyle,
  ];

  const checkboxStyle: StyleProp<ViewStyle> = [
    styles.checkbox,
    sizeStyle,
    {
      borderColor: disabled
        ? theme.baseTokens.disabled
        : checked
        ? theme.colors.button[boxColor]
        : theme.colors.border[boxColor],
      backgroundColor: disabled
        ? theme.baseTokens.disabled
        : checked
        ? theme.colors.button[boxColor]
        : 'transparent',
    },
    disabled && styles.disabled,
  ];

  const labelTextStyle = [
    {
      color: disabled ? theme.colors.text.grey4 : theme.colors.text.grey0,
      fontSize: labelSize,
      marginLeft: 8,
    },
    labelStyle,
  ];

  return (
    <Pressable
      onPress={handlePress}
      style={containerStyles}
      disabled={disabled}
    >
      <View style={checkboxStyle}>
        <Svg width='100%' height='100%' viewBox='0 0 24 24'>
          <AnimatedPath
            d='M5 13l4 4L19 7'
            stroke={disabled ? theme.colors.text.disabled : '#FFFFFF'}
            strokeWidth='3'
            strokeDasharray={checkmarkPathLength}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap='round'
            strokeLinejoin='round'
            fill='none'
          />
        </Svg>
      </View>
      {label && <Typo.Caption style={labelTextStyle}>{label}</Typo.Caption>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default CheckBoxBase;
