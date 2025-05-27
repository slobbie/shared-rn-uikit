export interface IBadgeBaseProps {
  label?: string;
  /** default: 20 */
  size?: number;
}

export type IBadgeDotProps = {
  /** default: 10 */
  size?: number;
};

export type BadgeComponent = {
  withText: React.FC<IBadgeBaseProps>;
  dot: React.FC<IBadgeDotProps>;
};
