import React from 'react';
import { Image, Text, View } from 'react-native';

import { getInitials } from '@shared/core/state/avatar';
import { AVATAR_SIZE } from '@shared/core/tokens/sizes';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { AvatarProps } from './Avatar.types';

export const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  imageUrl,
  name,
  testID,
}) => {
  const { theme } = useTheme();
  const { diameter, fontSize } = AVATAR_SIZE[size];

  const baseStyle = {
    width: diameter,
    height: diameter,
    borderRadius: diameter / 2,
  };

  if (imageUrl) {
    return (
      <Image
        source={{ uri: imageUrl }}
        accessibilityLabel={name}
        testID={testID}
        style={baseStyle}
      />
    );
  }

  return (
    <View
      accessibilityRole="image"
      accessibilityLabel={name}
      testID={testID}
      style={[
        baseStyle,
        {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.text.grey5,
        },
      ]}
    >
      <Text
        style={{
          color: theme.colors.text.grey1,
          fontSize,
          fontWeight: '600',
        }}
      >
        {getInitials(name)}
      </Text>
    </View>
  );
};

export default Avatar;
