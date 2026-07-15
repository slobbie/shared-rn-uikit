import type { ReactNode } from 'react';

import type { MotionSizing } from '../../core/motion.types';
import type { UseFadeOptions } from '../../hooks/useFade/useFade.types';

export interface FadeProps extends UseFadeOptions {
  children: ReactNode;
  sizing?: MotionSizing;
  testID?: string;
}
