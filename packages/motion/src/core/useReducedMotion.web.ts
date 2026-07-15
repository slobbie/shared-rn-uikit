import { useReducedMotion as useMotionReducedMotion } from 'motion/react';

import type { ReducedMotionPreference } from './motion.types';

export const useReducedMotion = (
  preference: ReducedMotionPreference,
): boolean => {
  const systemReduced = useMotionReducedMotion();

  if (preference === 'always') return true;
  if (preference === 'never') return false;
  return systemReduced === true;
};
