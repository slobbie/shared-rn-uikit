import React from 'react';
import { View } from 'react-native';

import { Avatar } from '../../atoms/Avatar/Avatar.native';
import { Badge } from '../../atoms/Badge/Badge.native';
import { Typo } from '../../atoms/Typo/Typo.native';

import type { ProfileHeaderProps } from './ProfileHeader.types';

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  email,
  badgeLabel,
  testID,
}) => (
  <View testID={testID} style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
    <Avatar size="lg" name={name} />
    <View style={{ gap: 4 }}>
      <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
        <Typo variant="h3">{name}</Typo>
        {badgeLabel ? <Badge label={badgeLabel} variant="primary" /> : null}
      </View>
      {email ? (
        <Typo variant="caption" color="secondary">
          {email}
        </Typo>
      ) : null}
    </View>
  </View>
);

export default ProfileHeader;
