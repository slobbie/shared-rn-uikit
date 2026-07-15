export type BadgeVariant = 'primary' | 'success' | 'error' | 'neutral';

export interface BadgeProps {
  label?: string;
  variant?: BadgeVariant;
  /** true면 label 없이 점만 표시 */
  dot?: boolean;
  testID?: string;
}
