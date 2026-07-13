import React from 'react';
import { View } from 'react-native';

import { Switch } from '../../atoms/Switch/Switch.native';
import { Typo } from '../../atoms/Typo/Typo.native';

import type { SettingRowProps } from './SettingRow.types';

export const SettingRow: React.FC<SettingRowProps> = ({
  title,
  description,
  value,
  onChange,
  disabled = false,
  testID,
}) => (
  <View
    testID={testID}
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
    }}
  >
    <View style={{ gap: 2, flexShrink: 1 }}>
      <Typo variant="body">{title}</Typo>
      {description ? (
        <Typo variant="caption" color="secondary">
          {description}
        </Typo>
      ) : null}
    </View>
    <Switch
      value={value}
      onChange={onChange}
      disabled={disabled}
      accessibilityLabel={title}
    />
  </View>
);

export default SettingRow;
