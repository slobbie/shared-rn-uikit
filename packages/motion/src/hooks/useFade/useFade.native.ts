import { useAnimatedStyle } from 'react-native-reanimated';

import type { MotionResult } from '../../core/motion.types';
import type {
  NativeMotionBinding,
  NativeMotionStyle,
} from '../../core/motionStyle.native';
import { DURATION } from '../../core/tokens';
import { useNativePresence } from '../../core/useNativePresence.native';
import type { UseFadeOptions } from './useFade.types';

export const useFade = ({
  duration = DURATION.fast,
  ...options
}: UseFadeOptions): MotionResult<NativeMotionBinding> => {
  const presence = useNativePresence({ ...options, duration });
  const animatedStyle = useAnimatedStyle<NativeMotionStyle>(() => ({
    opacity: presence.progress.value,
  }));

  return { ...presence, binding: { animatedStyle } };
};
