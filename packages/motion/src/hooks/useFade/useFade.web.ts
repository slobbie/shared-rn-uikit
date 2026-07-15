import { useMemo } from 'react';

import type { MotionResult } from '../../core/motion.types';
import type { WebMotionBinding } from '../../core/motionStyle.web';
import { DURATION, EASING, normalizeDuration } from '../../core/tokens';
import { useMotionPresence } from '../../core/useMotionPresence';
import { useReducedMotion } from '../../core/useReducedMotion.web';
import type { UseFadeOptions } from './useFade.types';

export const useFade = ({
  duration = DURATION.fast,
  reducedMotion = 'system',
  ...options
}: UseFadeOptions): MotionResult<WebMotionBinding> => {
  const presence = useMotionPresence(options);
  const reduce = useReducedMotion(reducedMotion);
  const seconds = (reduce ? 0 : normalizeDuration(duration)) / 1000;
  const binding = useMemo<WebMotionBinding>(
    () => ({
      shown: {
        opacity: 1,
        transition: { duration: seconds, ease: [...EASING.enter] },
      },
      hidden: {
        opacity: 0,
        transition: { duration: seconds, ease: [...EASING.exit] },
      },
    }),
    [seconds],
  );

  return { ...presence, binding };
};
