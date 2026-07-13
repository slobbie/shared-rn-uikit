import type { ReactNode } from 'react';

export interface TooltipProps {
  /** 말풍선 텍스트 */
  content: string;
  children: ReactNode;
  testID?: string;
}
