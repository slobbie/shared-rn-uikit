import AvatarBase from '@shared/ui/molecules/avatar/AvatarBase';
import { IAvatarBaseProps } from '@shared/ui/molecules/avatar/avatar.interface';

const Avatar = ({ size, label, imageUrl }: IAvatarBaseProps) => {
  return <AvatarBase size={size} label={label} imageUrl={imageUrl} />;
};

const AvatarImage = ({ size, imageUrl }: IAvatarBaseProps) => {
  return <Avatar size={size} imageUrl={imageUrl} />;
};

const AvatarText = ({ size, label }: IAvatarBaseProps) => {
  return <Avatar size={size} label={label} />;
};

Avatar.image = AvatarImage;
Avatar.text = AvatarText;

export default Avatar;
