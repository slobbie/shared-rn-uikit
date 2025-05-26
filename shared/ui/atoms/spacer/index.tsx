import { default as Space } from '@shared/ui/atoms/spacer/Spacer';
import {
  ISpace,
  SpacerComponent,
} from '@shared/ui/atoms/spacer/spacer.interface';

const SpacerBase: React.FC<ISpace> = ({
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
}) => <Space top={top} bottom={bottom} left={left} right={right} />;

const Spacer = SpacerBase as SpacerComponent;

export default Spacer;
