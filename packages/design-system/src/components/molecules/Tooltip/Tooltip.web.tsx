import React, { useState } from 'react';

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

  return (
    <span
      data-testid={testID}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      {visible ? (
        <span
          role="tooltip"
          style={{
            position: 'absolute',
            bottom: `calc(100% + ${TOOLTIP.offset}px)`,
            left: '50%',
            transform: 'translateX(-50%)',
            padding: `${TOOLTIP.paddingVertical}px ${TOOLTIP.paddingHorizontal}px`,
            borderRadius: TOOLTIP.borderRadius,
            backgroundColor: theme.colors.text.black,
            color: theme.colors.text.white,
            fontSize: TOOLTIP.fontSize,
            whiteSpace: 'nowrap',
            zIndex: 1000,
            pointerEvents: 'none',
          }}
        >
          {content}
        </span>
      ) : null}
    </span>
  );
};

export default Tooltip;
