import React from 'react';

import { Switch } from '../../atoms/Switch/Switch.web';
import { Typo } from '../../atoms/Typo/Typo.web';

import type { SettingRowProps } from './SettingRow.types';

export const SettingRow: React.FC<SettingRowProps> = ({
  title,
  description,
  value,
  onChange,
  disabled = false,
  testID,
}) => (
  <div
    data-testid={testID}
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typo variant="body">{title}</Typo>
      {description ? (
        <Typo variant="caption" color="secondary">
          {description}
        </Typo>
      ) : null}
    </div>
    <Switch
      value={value}
      onChange={onChange}
      disabled={disabled}
      accessibilityLabel={title}
    />
  </div>
);

export default SettingRow;
