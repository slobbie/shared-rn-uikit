import Animated from 'react-native-reanimated';

import type { MotionResult } from '../../core/motion.types';
import type {
  NativeLayoutStyle,
  NativeMotionBinding,
} from '../../core/motionStyle.native';
import type { MotionBoxBaseProps } from './MotionBox.types';

export interface MotionBoxProps extends MotionBoxBaseProps {
  motion: MotionResult<NativeMotionBinding>;
  layoutStyle?: NativeLayoutStyle;
}

const sizingStyle = (
  sizing: NonNullable<MotionBoxBaseProps['sizing']>,
): NativeLayoutStyle => {
  if (sizing === 'intrinsic') return { alignSelf: 'flex-start' };
  if (sizing === 'fill') return { alignSelf: 'stretch' };
  return {};
};

export const MotionBox = ({
  motion,
  children,
  sizing = 'inherit',
  layoutStyle,
  testID,
}: MotionBoxProps) => {
  if (!motion.mounted) return null;

  return (
    <Animated.View
      testID={testID}
      style={[sizingStyle(sizing), layoutStyle, motion.binding.animatedStyle]}
    >
      {children}
    </Animated.View>
  );
};
