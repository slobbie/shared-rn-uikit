import type { ReactNode } from 'react';

import type {
  TypoVariant,
  TypoWeight,
} from '@shared/core/tokens/typography';

export type { TypoVariant, TypoWeight };

export type TypoColor = 'default' | 'secondary' | 'inverse' | 'primary';

export interface TypoProps {
  variant?: TypoVariant;
  /** 스케일 기본 weight 오버라이드 */
  weight?: TypoWeight;
  color?: TypoColor;
  align?: 'left' | 'center' | 'right';
  numberOfLines?: number;
  children: ReactNode;
}
