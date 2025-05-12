import React from 'react';
import { TextProps } from 'react-native';

import BaseText from '@shared/ui/atoms/typo/BaseText';

type TypoComponent = React.FC<TextProps> & {
  Regular: React.FC<TextProps>;
  Medium: React.FC<TextProps>;
  SemiBold: React.FC<TextProps>;
  Bold: React.FC<TextProps>;
};

const TypoBase: React.FC<TextProps> = ({ children, ...props }) => (
  <BaseText {...props}>{children}</BaseText>
);

const Regular: React.FC<TextProps> = (props) => (
  <BaseText {...props} weight='regular' />
);
const Medium: React.FC<TextProps> = (props) => (
  <BaseText {...props} weight='medium' />
);
const SemiBold: React.FC<TextProps> = (props) => (
  <BaseText {...props} weight='semibold' />
);
const Bold: React.FC<TextProps> = (props) => (
  <BaseText {...props} weight='bold' />
);

const Typo = TypoBase as TypoComponent;
Typo.Regular = Regular;
Typo.Medium = Medium;
Typo.SemiBold = SemiBold;
Typo.Bold = Bold;

export default Typo;
