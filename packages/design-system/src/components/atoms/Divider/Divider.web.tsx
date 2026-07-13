import React from 'react';

import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { DividerProps } from './Divider.types';

export const Divider: React.FC<DividerProps> = ({ spacing = 0, testID }) => {
  const { theme } = useTheme();

  return (
    <hr
      data-testid={testID}
      style={{
        border: 'none',
        height: 1,
        width: '100%',
        backgroundColor: theme.colors.text.grey5,
        margin: `${spacing}px 0`,
      }}
    />
  );
};

export default Divider;
