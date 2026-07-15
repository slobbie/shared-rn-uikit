import type { CSSProperties } from 'react';
import { AnimatePresence, motion as Motion } from 'motion/react';

import type { MotionResult } from '../../core/motion.types';
import type {
  WebLayoutStyle,
  WebMotionBinding,
} from '../../core/motionStyle.web';
import type { MotionBoxBaseProps } from './MotionBox.types';

export interface MotionBoxProps extends MotionBoxBaseProps {
  motion: MotionResult<WebMotionBinding>;
  layoutStyle?: WebLayoutStyle;
}

const sizingStyle = (
  sizing: NonNullable<MotionBoxBaseProps['sizing']>,
): CSSProperties => {
  if (sizing === 'intrinsic') return { display: 'inline-flex' };
  if (sizing === 'fill') return { display: 'flex', width: '100%' };
  return {};
};

export const MotionBox = ({
  motion: motionState,
  children,
  sizing = 'inherit',
  layoutStyle,
  testID,
}: MotionBoxProps) => {
  if (!motionState.mounted) return null;

  const element = (
    <Motion.div
      key="motion-box"
      data-testid={testID}
      style={{ ...sizingStyle(sizing), ...layoutStyle }}
      initial={motionState.appear ? motionState.binding.hidden : false}
      animate={
        motionState.visible
          ? motionState.binding.shown
          : motionState.binding.hidden
      }
      exit={motionState.binding.hidden}
    >
      {children}
    </Motion.div>
  );

  if (!motionState.unmountOnExit) return element;

  return (
    <AnimatePresence onExitComplete={motionState.completeExit}>
      {motionState.visible ? element : null}
    </AnimatePresence>
  );
};
