import React, { useState } from 'react';

import { MotionBox, useFade } from '@package/motion';
import { TOOLTIP } from '@shared/core/tokens/overlay';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { TooltipProps } from './Tooltip.types';

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  testID,
}) => {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);
  const motion = useFade({ visible });

  return (
    <div
      data-testid={testID}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      <MotionBox
        motion={motion}
        sizing="intrinsic"
        layoutStyle={{
          position: 'absolute',
          bottom: `calc(100% + ${TOOLTIP.offset}px)`,
          left: '50%',
          zIndex: 1000,
          pointerEvents: 'none',
        }}
      >
        <span
          role="tooltip"
          style={{
            transform: 'translateX(-50%)',
            padding: `${TOOLTIP.paddingVertical}px ${TOOLTIP.paddingHorizontal}px`,
            borderRadius: TOOLTIP.borderRadius,
            backgroundColor: theme.colors.text.black,
            color: theme.colors.text.white,
            fontSize: TOOLTIP.fontSize,
            whiteSpace: 'nowrap',
          }}
        >
          {content}
        </span>
      </MotionBox>
    </div>
  );
};

export default Tooltip;
