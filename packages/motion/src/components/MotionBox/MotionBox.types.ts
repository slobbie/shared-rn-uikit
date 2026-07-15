import type { ReactNode } from 'react';

import type { MotionSizing } from '../../core/motion.types';

export interface MotionBoxBaseProps {
  children: ReactNode;
  sizing?: MotionSizing;
  testID?: string;
}
