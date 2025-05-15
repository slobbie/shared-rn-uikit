import BaseButton from '@shared/ui/atoms/button/BaseButton';
import {
  ButtonComponent,
  IBaseButtonProps,
} from '@shared/ui/atoms/button/button.interface';

const ButtonBase: React.FC<IBaseButtonProps> = ({ ...props }) => (
  <BaseButton variant='static' {...props} />
);

// Headline 컴포넌트들
const Static: React.FC<IBaseButtonProps> = (props) => (
  <BaseButton variant='static' {...props} />
);

const Opacity: React.FC<IBaseButtonProps> = (props) => (
  <BaseButton variant='opacity' {...props} />
);

const Highlight: React.FC<IBaseButtonProps> = (props) => (
  <BaseButton variant='highlight' {...props} />
);

// 컴포넌트 합성
const Button = ButtonBase as ButtonComponent;

Button.Static = Static;
Button.Opacity = Opacity;
Button.Highlight = Highlight;

export default Button;
