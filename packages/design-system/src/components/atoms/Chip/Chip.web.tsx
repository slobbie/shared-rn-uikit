import React from 'react';

import { CHIP } from '@shared/core/tokens/sizes';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { ChipProps } from './Chip.types';

export const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  disabled = false,
  onPress,
  testID,
}) => {
  const { theme } = useTheme();

  return (
    <button
      type="button"
      aria-pressed={selected}
      disabled={disabled}
      onClick={onPress}
      data-testid={testID}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: CHIP.height,
        padding: `0 ${CHIP.paddingHorizontal}px`,
        borderRadius: CHIP.borderRadius,
        fontSize: CHIP.fontSize,
        fontWeight: 500,
        backgroundColor: selected ? theme.colors.button.primary : 'transparent',
        color: selected ? theme.colors.text.white : theme.colors.text.grey1,
        border: `1px solid ${
          selected ? theme.colors.button.primary : theme.colors.text.grey4
        }`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {label}
    </button>
  );
};

export default Chip;
