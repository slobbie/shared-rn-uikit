import { useEffect, useRef } from 'react';
import {
  cancelAnimation,
  Easing,
  ReduceMotion,
  runOnJS,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import type {
  MotionPresenceOptions,
  ReducedMotionPreference,
} from './motion.types';
import { EASING, normalizeDuration } from './tokens';
import { useMotionPresence } from './useMotionPresence';

const toReduceMotion = (
  preference: ReducedMotionPreference,
): ReduceMotion => {
  if (preference === 'always') return ReduceMotion.Always;
  if (preference === 'never') return ReduceMotion.Never;
  return ReduceMotion.System;
};

export const useNativePresence = ({
  duration = 0,
  reducedMotion = 'system',
  ...options
}: MotionPresenceOptions) => {
  const presence = useMotionPresence(options);
  const progress = useSharedValue(
    options.visible && options.appear === false ? 1 : 0,
  );
  const firstRender = useRef(true);

  useEffect(() => {
    const isFirstRender = firstRender.current;
    firstRender.current = false;
    const target = options.visible ? 1 : 0;

    cancelAnimation(progress);

    if (isFirstRender && (!options.visible || options.appear === false)) {
      progress.value = target;
      return;
    }

    const easing = options.visible ? EASING.enter : EASING.exit;
    progress.value = withTiming(
      target,
      {
        duration: normalizeDuration(duration),
        easing: Easing.bezier(easing[0], easing[1], easing[2], easing[3]),
        reduceMotion: toReduceMotion(reducedMotion),
      },
      (finished) => {
        if (finished && target === 0 && presence.unmountOnExit) {
          runOnJS(presence.completeExit)();
        }
      },
    );

    return () => cancelAnimation(progress);
  }, [
    duration,
    options.appear,
    options.visible,
    presence.completeExit,
    presence.unmountOnExit,
    progress,
    reducedMotion,
  ]);

  return { ...presence, progress };
};
