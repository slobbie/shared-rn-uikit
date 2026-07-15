import type { ReactNode } from 'react';

import type { MotionSizing } from '../../core/motion.types';
import type { UseSlideOptions } from '../../hooks/useSlide/useSlide.types';

export interface SlideProps extends UseSlideOptions {
  children: ReactNode;
  sizing?: MotionSizing;
  testID?: string;
}
