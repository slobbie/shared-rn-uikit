import Bar from '@shared/ui/molecules/progress/Bar';
import Stroke from '@shared/ui/molecules/progress/Stroke';
import { IBarProps } from '@shared/ui/molecules/progress/progress.interface';

const Progress = (props: IBarProps) => {
  return <Bar {...props} />;
};

Progress.Bar = Bar;
Progress.Circle = Stroke;

export default Progress;
