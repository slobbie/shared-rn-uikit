import React from 'react';

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

  const baseStyle: React.CSSProperties = {
    width: diameter,
    height: diameter,
    borderRadius: '50%',
    flexShrink: 0,
  };

  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={name}
        data-testid={testID}
        style={{ ...baseStyle, objectFit: 'cover' }}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={name}
      data-testid={testID}
      style={{
        ...baseStyle,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.text.grey5,
        color: theme.colors.text.grey1,
        fontSize,
        fontWeight: 600,
        userSelect: 'none',
      }}
    >
      {getInitials(name)}
    </div>
  );
};

export default Avatar;
