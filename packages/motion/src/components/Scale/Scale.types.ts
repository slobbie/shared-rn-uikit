import type { ReactNode } from 'react';

import type { MotionSizing } from '../../core/motion.types';
import type { UseScaleOptions } from '../../hooks/useScale/useScale.types';

export interface ScaleProps extends UseScaleOptions {
  children: ReactNode;
  sizing?: MotionSizing;
  testID?: string;
}
