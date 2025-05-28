import { IBadgeBaseProps, IBadgeDotProps } from './badge.interface';
import BadgeBase from './BadgeBase';

const Badge = ({ label, size }: IBadgeBaseProps) => {
  return <BadgeBase label={label} size={size} />;
};

const BadgeWithText: React.FC<IBadgeBaseProps> = ({ label, size }) => (
  <Badge label={label} size={size} />
);

const BadgeDot: React.FC<IBadgeDotProps> = ({ size = 10 }) => (
  <Badge size={size} />
);

Badge.withText = BadgeWithText;
Badge.dot = BadgeDot;

export default Badge;
