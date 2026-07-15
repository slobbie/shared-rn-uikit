import { useAnimatedStyle } from 'react-native-reanimated';

import type { MotionResult } from '../../core/motion.types';
import type {
  NativeMotionBinding,
  NativeMotionStyle,
} from '../../core/motionStyle.native';
import {
  DURATION,
  MOTION_DEFAULT,
  normalizeDistance,
} from '../../core/tokens';
import { useNativePresence } from '../../core/useNativePresence.native';
import type {
  SlideDirection,
  UseSlideOptions,
} from './useSlide.types';

const offsetForDirection = (
  from: SlideDirection,
  distance: number,
): number => (from === 'top' || from === 'left' ? -distance : distance);

export const useSlide = ({
  duration = DURATION.normal,
  distance = MOTION_DEFAULT.slideDistance,
  fade = true,
  from,
  ...options
}: UseSlideOptions): MotionResult<NativeMotionBinding> => {
  const presence = useNativePresence({ ...options, duration });
  const offset = offsetForDirection(from, normalizeDistance(distance));
  const animatedStyle = useAnimatedStyle<NativeMotionStyle>(() => {
    const translate = offset * (1 - presence.progress.value);
    const transform =
      from === 'left' || from === 'right'
        ? [{ translateX: translate }]
        : [{ translateY: translate }];
    return {
      ...(fade ? { opacity: presence.progress.value } : {}),
      transform,
    };
  });

  return { ...presence, binding: { animatedStyle } };
};
