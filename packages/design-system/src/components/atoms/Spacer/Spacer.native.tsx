import React from 'react';
import { View } from 'react-native';

import type { SpacerProps } from './Spacer.types';

export const Spacer: React.FC<SpacerProps> = ({
  size = 8,
  horizontal = false,
}) => (
  <View
    style={{
      width: horizontal ? size : undefined,
      height: horizontal ? undefined : size,
      flexShrink: 0,
    }}
  />
);

export default Spacer;
