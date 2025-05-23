import DividerBase from '@shared/ui/atoms/divider/Divider';
import { IDividerProps } from '@shared/ui/atoms/divider/divider.interface';

const Divider: React.FC<IDividerProps> = ({ ...props }) => (
  <DividerBase {...props} />
);

export default Divider;
