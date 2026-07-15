import { MotionBox } from '../MotionBox/MotionBox.web';
import { useScale } from '../../hooks/useScale/useScale.web';
import type { ScaleProps } from './Scale.types';

export const Scale = ({ children, sizing, testID, ...options }: ScaleProps) => {
  const motion = useScale(options);
  return (
    <MotionBox motion={motion} sizing={sizing} testID={testID}>
      {children}
    </MotionBox>
  );
};
