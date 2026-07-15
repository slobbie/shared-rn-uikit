import React from 'react';

import type { SpacerProps } from './Spacer.types';

export const Spacer: React.FC<SpacerProps> = ({
  size = 8,
  horizontal = false,
}) => (
  <div
    aria-hidden
    style={{
      width: horizontal ? size : undefined,
      height: horizontal ? undefined : size,
      flexShrink: 0,
    }}
  />
);

export default Spacer;
