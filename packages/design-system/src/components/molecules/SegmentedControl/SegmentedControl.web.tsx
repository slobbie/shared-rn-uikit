import React from 'react';

import { SEGMENTED } from '@shared/core/tokens/display';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { SegmentedControlProps } from './SegmentedControl.types';

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  value,
  onChange,
  disabled = false,
  testID,
}) => {
  const { theme } = useTheme();

  return (
    <div
      role="tablist"
      data-testid={testID}
      style={{
        display: 'flex',
        height: SEGMENTED.height,
        padding: SEGMENTED.padding,
        borderRadius: SEGMENTED.borderRadius,
        backgroundColor: theme.colors.text.grey5,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {options.map((option) => {
        const selected = option === value;
        return (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={selected}
            disabled={disabled}
            onClick={() => {
              if (!selected) onChange(option);
            }}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              borderRadius: SEGMENTED.itemBorderRadius,
              padding: '0 10px',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              wordBreak: 'keep-all',
              fontSize: SEGMENTED.fontSize,
              fontWeight: selected ? 600 : 400,
              backgroundColor: selected ? theme.colors.text.white : 'transparent',
              color: selected ? theme.colors.text.black : theme.colors.text.grey2,
              boxShadow: selected ? '0 1px 2px rgba(0, 0, 0, 0.1)' : 'none',
              cursor: disabled ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.15s ease, color 0.15s ease',
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default SegmentedControl;
