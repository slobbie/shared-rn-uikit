import type { MotionPresenceOptions } from '../../core/motion.types';

export type SlideDirection = 'top' | 'bottom' | 'left' | 'right';

export interface UseSlideOptions extends MotionPresenceOptions {
  from: SlideDirection;
  distance?: number;
  /** translate와 함께 opacity도 애니메이션한다. */
  fade?: boolean;
}
