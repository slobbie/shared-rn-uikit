import React from 'react';

import BaseText from '@shared/ui/atoms/typo/BaseText';
import { IBaseTextProps, TypoComponent } from './index.interface';

// 기본 타이포그래피 컴포넌트
const TypoBase: React.FC<IBaseTextProps> = ({
  variant = 'body1',
  weight = 'regular',
  ...props
}) => <BaseText variant={variant} weight={weight} {...props} />;

// Headline 컴포넌트들
const H1: React.FC<IBaseTextProps> = (props) => (
  <BaseText variant='h1' weight='regular' {...props} />
);

const H2: React.FC<IBaseTextProps> = (props) => (
  <BaseText variant='h2' weight='regular' {...props} />
);

const H3: React.FC<IBaseTextProps> = (props) => (
  <BaseText variant='h3' weight='regular' {...props} />
);

const H4: React.FC<IBaseTextProps> = (props) => (
  <BaseText variant='h4' weight='regular' {...props} />
);

const H5: React.FC<IBaseTextProps> = (props) => (
  <BaseText variant='h5' weight='regular' {...props} />
);

const H6: React.FC<IBaseTextProps> = (props) => (
  <BaseText variant='h6' weight='medium' {...props} />
);

// Subtitle 컴포넌트들
const Subtitle1: React.FC<IBaseTextProps> = (props) => (
  <BaseText variant='subtitle1' weight='regular' {...props} />
);

const Subtitle2: React.FC<IBaseTextProps> = (props) => (
  <BaseText variant='subtitle2' weight='medium' {...props} />
);

// Body 컴포넌트들
const Body1: React.FC<IBaseTextProps> = (props) => (
  <BaseText variant='body1' weight='regular' {...props} />
);

const Body2: React.FC<IBaseTextProps> = (props) => (
  <BaseText variant='body2' weight='regular' {...props} />
);

// Button 컴포넌트
const Button: React.FC<IBaseTextProps> = (props) => (
  <BaseText variant='button' weight='medium' {...props} />
);

// Caption 컴포넌트
const Caption: React.FC<IBaseTextProps> = (props) => (
  <BaseText variant='caption' weight='regular' {...props} />
);

// Overline 컴포넌트
const Overline: React.FC<IBaseTextProps> = (props) => (
  <BaseText variant='overline' weight='regular' {...props} />
);

// 컴포넌트 합성
const Typo = TypoBase as TypoComponent;

// Headline 컴포넌트 할당
Typo.H1 = H1;
Typo.H2 = H2;
Typo.H3 = H3;
Typo.H4 = H4;
Typo.H5 = H5;
Typo.H6 = H6;

// Subtitle 컴포넌트 할당
Typo.Subtitle1 = Subtitle1;
Typo.Subtitle2 = Subtitle2;

// Body 컴포넌트 할당
Typo.Body1 = Body1;
Typo.Body2 = Body2;

// Button 컴포넌트 할당
Typo.Button = Button;

// Caption 컴포넌트 할당
Typo.Caption = Caption;

// Overline 컴포넌트 할당
Typo.Overline = Overline;

export default Typo;
