import { MotionBox } from '../MotionBox/MotionBox.web';
import { useSlide } from '../../hooks/useSlide/useSlide.web';
import type { SlideProps } from './Slide.types';

export const Slide = ({ children, sizing, testID, ...options }: SlideProps) => {
  const motion = useSlide(options);
  return (
    <MotionBox motion={motion} sizing={sizing} testID={testID}>
      {children}
    </MotionBox>
  );
};
