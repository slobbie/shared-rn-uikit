import RadioBase from '@shared/ui/molecules/radio/RadioBase';
import RadioGroup from '@shared/ui/molecules/radio/RadioGroup';
import { IRadioProps } from '@shared/ui/molecules/radio/radio.interface';

const Radio = (props: IRadioProps) => {
  return <RadioBase {...props} />;
};

Radio.Group = RadioGroup;

export default Radio;
