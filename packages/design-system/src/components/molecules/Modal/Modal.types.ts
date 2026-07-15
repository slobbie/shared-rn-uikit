import type { ReactNode } from 'react';

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  /** 상단 제목 (선택) */
  title?: string;
  children: ReactNode;
  testID?: string;
}
