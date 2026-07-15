import { useAnimatedStyle } from 'react-native-reanimated';

import type { MotionResult } from '../../core/motion.types';
import type {
  NativeMotionBinding,
  NativeMotionStyle,
} from '../../core/motionStyle.native';
import {
  DURATION,
  MOTION_DEFAULT,
  normalizeScale,
} from '../../core/tokens';
import { useNativePresence } from '../../core/useNativePresence.native';
import type { UseScaleOptions } from './useScale.types';

export const useScale = ({
  duration = DURATION.normal,
  from = MOTION_DEFAULT.scaleFrom,
  ...options
}: UseScaleOptions): MotionResult<NativeMotionBinding> => {
  const presence = useNativePresence({ ...options, duration });
  const safeScale = normalizeScale(from);
  const animatedStyle = useAnimatedStyle<NativeMotionStyle>(() => ({
    opacity: presence.progress.value,
    transform: [
      { scale: safeScale + (1 - safeScale) * presence.progress.value },
    ],
  }));

  return { ...presence, binding: { animatedStyle } };
};
