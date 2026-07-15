import React from 'react';

import { Avatar } from '../../atoms/Avatar/Avatar.web';
import { Badge } from '../../atoms/Badge/Badge.web';
import { Typo } from '../../atoms/Typo/Typo.web';

import type { ProfileHeaderProps } from './ProfileHeader.types';

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  email,
  badgeLabel,
  testID,
}) => (
  <div
    data-testid={testID}
    style={{ display: 'flex', gap: 16, alignItems: 'center' }}
  >
    <Avatar size="lg" name={name} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Typo variant="h3">{name}</Typo>
        {badgeLabel ? <Badge label={badgeLabel} variant="primary" /> : null}
      </div>
      {email ? (
        <Typo variant="caption" color="secondary">
          {email}
        </Typo>
      ) : null}
    </div>
  </div>
);

export default ProfileHeader;
