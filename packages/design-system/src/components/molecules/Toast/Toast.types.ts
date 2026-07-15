export type ToastVariant = 'info' | 'success' | 'error';

export interface ToastProps {
  visible: boolean;
  message: string;
  variant?: ToastVariant;
  /** 자동 숨김까지 ms (0이면 자동 숨김 없음) */
  duration?: number;
  onHide: () => void;
  testID?: string;
}
