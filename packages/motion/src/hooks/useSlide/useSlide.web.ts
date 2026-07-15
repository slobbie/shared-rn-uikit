import { useMemo } from 'react';

import type { MotionResult } from '../../core/motion.types';
import type { WebMotionBinding } from '../../core/motionStyle.web';
import {
  DURATION,
  EASING,
  MOTION_DEFAULT,
  normalizeDuration,
  normalizeDistance,
} from '../../core/tokens';
import { useMotionPresence } from '../../core/useMotionPresence';
import { useReducedMotion } from '../../core/useReducedMotion.web';
import type {
  SlideDirection,
  UseSlideOptions,
} from './useSlide.types';

const hiddenPosition = (from: SlideDirection, distance: number) => {
  if (from === 'top') return { y: -distance };
  if (from === 'bottom') return { y: distance };
  if (from === 'left') return { x: -distance };
  return { x: distance };
};

export const useSlide = ({
  duration = DURATION.normal,
  distance = MOTION_DEFAULT.slideDistance,
  fade = true,
  from,
  reducedMotion = 'system',
  ...options
}: UseSlideOptions): MotionResult<WebMotionBinding> => {
  const presence = useMotionPresence(options);
  const reduce = useReducedMotion(reducedMotion);
  const seconds = (reduce ? 0 : normalizeDuration(duration)) / 1000;
  const safeDistance = normalizeDistance(distance);
  const binding = useMemo<WebMotionBinding>(
    () => ({
      shown: {
        x: 0,
        y: 0,
        ...(fade ? { opacity: 1 } : {}),
        transition: { duration: seconds, ease: [...EASING.enter] },
      },
      hidden: {
        ...hiddenPosition(from, safeDistance),
        ...(fade ? { opacity: 0 } : {}),
        transition: { duration: seconds, ease: [...EASING.exit] },
      },
    }),
    [fade, from, safeDistance, seconds],
  );

  return { ...presence, binding };
};
