import { ViewProps, ImageSourcePropType } from 'react-native';

export type AvatarSize = 'xs' | 'small' | 'medium' | 'large' | 'xl';

export interface IAvatarProps extends ViewProps {
  source?: ImageSourcePropType;
  name?: string;
  size?: AvatarSize;
  backgroundColor?: string;
  textColor?: string;
  borderWidth?: number;
  borderColor?: string;
}
