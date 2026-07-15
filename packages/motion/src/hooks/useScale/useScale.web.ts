import { useMemo } from 'react';

import type { MotionResult } from '../../core/motion.types';
import type { WebMotionBinding } from '../../core/motionStyle.web';
import {
  DURATION,
  EASING,
  MOTION_DEFAULT,
  normalizeDuration,
  normalizeScale,
} from '../../core/tokens';
import { useMotionPresence } from '../../core/useMotionPresence';
import { useReducedMotion } from '../../core/useReducedMotion.web';
import type { UseScaleOptions } from './useScale.types';

export const useScale = ({
  duration = DURATION.normal,
  from = MOTION_DEFAULT.scaleFrom,
  reducedMotion = 'system',
  ...options
}: UseScaleOptions): MotionResult<WebMotionBinding> => {
  const presence = useMotionPresence(options);
  const reduce = useReducedMotion(reducedMotion);
  const seconds = (reduce ? 0 : normalizeDuration(duration)) / 1000;
  const safeScale = normalizeScale(from);
  const binding = useMemo<WebMotionBinding>(
    () => ({
      shown: {
        opacity: 1,
        scale: 1,
        transition: { duration: seconds, ease: [...EASING.enter] },
      },
      hidden: {
        opacity: 0,
        scale: safeScale,
        transition: { duration: seconds, ease: [...EASING.exit] },
      },
    }),
    [safeScale, seconds],
  );

  return { ...presence, binding };
};
