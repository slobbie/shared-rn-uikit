import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { IAvatarProps, AvatarSize } from '@shared/ui/atoms/avatar/avatar.interface';

const COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
  '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F',
];

/**
 * iOS 스타일 아바타 컴포넌트
 */
const Avatar: React.FC<IAvatarProps> = ({
  source,
  name,
  size = 'medium',
  backgroundColor,
  textColor = '#FFFFFF',
  borderWidth = 0,
  borderColor = '#FFFFFF',
  style,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);

  const getSizeConfig = (s: AvatarSize) => {
    switch (s) {
      case 'xs':
        return { size: 24, fontSize: 10 };
      case 'small':
        return { size: 32, fontSize: 12 };
      case 'large':
        return { size: 56, fontSize: 22 };
      case 'xl':
        return { size: 72, fontSize: 28 };
      case 'medium':
      default:
        return { size: 44, fontSize: 16 };
    }
  };

  const config = getSizeConfig(size);

  const getInitials = (fullName?: string) => {
    if (!fullName) return '?';
    const names = fullName.trim().split(' ');
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  const getBackgroundColor = (fullName?: string) => {
    if (backgroundColor) return backgroundColor;
    if (!fullName) return '#8E8E93';
    const index = fullName.charCodeAt(0) % COLORS.length;
    return COLORS[index];
  };

  const showImage = source && !imageError;

  return (
    <View
      style={[
        styles.container,
        {
          width: config.size,
          height: config.size,
          borderRadius: config.size / 2,
          backgroundColor: showImage ? 'transparent' : getBackgroundColor(name),
          borderWidth,
          borderColor,
        },
        style,
      ]}
      {...props}
    >
      {showImage ? (
        <Image
          source={source}
          style={[
            styles.image,
            {
              width: config.size - borderWidth * 2,
              height: config.size - borderWidth * 2,
              borderRadius: (config.size - borderWidth * 2) / 2,
            },
          ]}
          onError={() => setImageError(true)}
        />
      ) : (
        <Text style={[styles.initials, { fontSize: config.fontSize, color: textColor }]}>
          {getInitials(name)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
  initials: {
    fontWeight: '600',
  },
});

export default Avatar;
