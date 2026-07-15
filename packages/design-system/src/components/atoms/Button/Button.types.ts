import type { ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Web/RN 공통 Button 계약.
 * 플랫폼 전용 prop(예: DOM 이벤트, RN 스타일)은 여기에 추가하지 않는다.
 */
export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  /** 접근성 레이블 — 텍스트 children이 아닌 경우 필수 */
  accessibilityLabel?: string;
  testID?: string;
  children: ReactNode;
}
