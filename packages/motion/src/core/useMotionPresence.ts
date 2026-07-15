import { useCallback, useEffect, useRef, useState } from 'react';

import type { MotionPresenceOptions } from './motion.types';

export interface MotionPresenceState {
  readonly mounted: boolean;
  readonly visible: boolean;
  readonly appear: boolean;
  readonly unmountOnExit: boolean;
  readonly completeExit: () => void;
}

export const useMotionPresence = ({
  visible,
  appear = true,
  unmountOnExit = true,
}: MotionPresenceOptions): MotionPresenceState => {
  const [mounted, setMounted] = useState(() =>
    unmountOnExit ? visible : true,
  );
  const latestVisible = useRef(visible);
  latestVisible.current = visible;

  useEffect(() => {
    if (visible || !unmountOnExit) setMounted(true);
  }, [unmountOnExit, visible]);

  const completeExit = useCallback(() => {
    if (unmountOnExit && !latestVisible.current) setMounted(false);
  }, [unmountOnExit]);

  return {
    mounted,
    visible,
    appear,
    unmountOnExit,
    completeExit,
  };
};
