export interface IAvatarBaseProps {
  /** default size is 44 */
  size?: number;
  label?: string;
  imageUrl?: string;
  backgroundColor?: string;
}

export type IAvatarImageProps = Omit<IAvatarBaseProps, 'label'>;

export type IAvatarTextProps = Omit<IAvatarBaseProps, 'imageUrl'>;

export type AvatarComponent = {
  image: React.FC<IAvatarImageProps>;
  text: React.FC<IAvatarTextProps>;
};
