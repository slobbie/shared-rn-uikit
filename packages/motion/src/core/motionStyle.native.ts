import type { ViewStyle } from 'react-native';
import type { AnimatedStyleProp } from 'react-native-reanimated';

export type NativeMotionStyle = Pick<ViewStyle, 'opacity' | 'transform'>;

export interface NativeMotionBinding {
  readonly animatedStyle: AnimatedStyleProp<NativeMotionStyle>;
}

export type NativeLayoutStyle = Omit<ViewStyle, 'opacity' | 'transform'>;
