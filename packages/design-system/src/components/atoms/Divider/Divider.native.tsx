import React from 'react';
import { View } from 'react-native';

import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { DividerProps } from './Divider.types';

export const Divider: React.FC<DividerProps> = ({ spacing = 0, testID }) => {
  const { theme } = useTheme();

  return (
    <View
      testID={testID}
      style={{
        height: 1,
        alignSelf: 'stretch',
        backgroundColor: theme.colors.text.grey5,
        marginVertical: spacing,
      }}
    />
  );
};

export default Divider;
