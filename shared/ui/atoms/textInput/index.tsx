import {
  IBaseInputProps,
  TextInputComponent,
} from '@shared/ui/atoms/textInput/textInput.interface';
import TextInputBase from '@shared/ui/atoms/textInput/TextInputBase';

const InputBase: React.FC<IBaseInputProps> = ({ ...props }) => (
  <TextInputBase variant='default' {...props} />
);

const Default: React.FC<IBaseInputProps> = (props) => (
  <TextInputBase variant='default' {...props} />
);

const Outlined: React.FC<IBaseInputProps> = (props) => (
  <TextInputBase variant='outlined' {...props} />
);

const Underlined: React.FC<IBaseInputProps> = (props) => (
  <TextInputBase variant='underlined' {...props} />
);

// 컴포넌트 합성
const TextInput = InputBase as TextInputComponent;

TextInput.Default = Default;
TextInput.Outlined = Outlined;
TextInput.Underlined = Underlined;

export default TextInput;
