import { ICircularProps } from '@shared/ui/molecules/progress/progress.interface';
import Stroke from '@shared/ui/molecules/progress/Stroke';
import { useTheme } from '@shared/utils/lib/ThemeContext';

const CircleProgress = ({
  progress,
  size = 100,
  progressColor = 'primary',
  trackColor,
  style,
}: Omit<ICircularProps, 'strokeWidth'>) => {
  const { theme } = useTheme();

  const strokeWidth = size / 2;

  return (
    <Stroke
      progress={progress}
      size={size}
      strokeWidth={strokeWidth}
      progressColor={progressColor}
      trackColor={trackColor || theme.baseTokens.greyOutline}
      style={style}
    />
  );
};

export default CircleProgress;
