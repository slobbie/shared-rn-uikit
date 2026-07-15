export type ProgressBarVariant = 'primary' | 'success' | 'error';

export interface ProgressBarProps {
  /** 진행률 0–100 (범위 밖은 클램프) */
  value: number;
  variant?: ProgressBarVariant;
  /** 접근성 레이블 */
  accessibilityLabel?: string;
  testID?: string;
}
