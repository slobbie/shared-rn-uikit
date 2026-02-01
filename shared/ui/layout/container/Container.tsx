import React from 'react';
import { View, StyleSheet, DimensionValue } from 'react-native';

import { IContainerProps, ContainerSize } from '@shared/ui/layout/container/container.interface';

/**
 * 콘텐츠를 감싸는 컨테이너 컴포넌트
 */
const Container: React.FC<IContainerProps> = ({
  size = 'full',
  centered = false,
  padding,
  paddingHorizontal = 16,
  paddingVertical = 0,
  maxWidth,
  children,
  style,
  ...props
}) => {
  const getSizeMaxWidth = (containerSize: ContainerSize): DimensionValue => {
    switch (containerSize) {
      case 'sm':
        return 540;
      case 'md':
        return 720;
      case 'lg':
        return 960;
      case 'xl':
        return 1140;
      case 'full':
      default:
        return '100%';
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          maxWidth: maxWidth ?? getSizeMaxWidth(size),
          paddingHorizontal: padding ?? paddingHorizontal,
          paddingVertical: padding ?? paddingVertical,
        },
        centered && styles.centered,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  centered: {
    alignSelf: 'center',
  },
});

export default Container;
