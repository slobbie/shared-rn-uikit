import type { CSSProperties } from 'react';
import type { TargetAndTransition } from 'motion/react';

export interface WebMotionBinding {
  readonly shown: TargetAndTransition;
  readonly hidden: TargetAndTransition;
}

export type WebLayoutStyle = Omit<
  CSSProperties,
  | 'opacity'
  | 'transform'
>;
