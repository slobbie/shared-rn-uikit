import CheckBoxBase from '@shared/ui/molecules/checkbox/CheckBoxBase';
import { ICheckboxProps } from '@shared/ui/molecules/checkbox/checkbox.interface';

const CheckBox = (props: ICheckboxProps) => {
  return <CheckBoxBase {...props} />;
};

const Circle = (props: ICheckboxProps) => {
  const radius = props.size ? props.size / 2 : 24 / 2;
  return <CheckBoxBase borderRadius={radius} {...props} />;
};

const Square = (props: ICheckboxProps) => {
  return <CheckBoxBase {...props} />;
};

const Rounded = (props: ICheckboxProps) => {
  const borderRadius = props.borderRadius || 24 / 4;
  return <CheckBoxBase borderRadius={borderRadius} {...props} />;
};

CheckBox.Circle = Circle;
CheckBox.Square = Square;
CheckBox.Rounded = Rounded;

export default CheckBox;
