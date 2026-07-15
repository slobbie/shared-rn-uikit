import { MotionBox } from '../MotionBox/MotionBox.web';
import { useFade } from '../../hooks/useFade/useFade.web';
import type { FadeProps } from './Fade.types';

export const Fade = ({ children, sizing, testID, ...options }: FadeProps) => {
  const motion = useFade(options);
  return (
    <MotionBox motion={motion} sizing={sizing} testID={testID}>
      {children}
    </MotionBox>
  );
};
