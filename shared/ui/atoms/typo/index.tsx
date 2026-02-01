import React from 'react';

import BaseText from '@shared/ui/atoms/typo/BaseText';
import {
  IBaseTextProps,
  TypoComponent,
} from '@shared/ui/atoms/typo/index.interface';

// 기본 타이포그래피 컴포넌트
const TypoBase: React.FC<IBaseTextProps> = ({
  variant = 'body1',
  weight = 'regular',
  ...props
}) => <BaseText variant={variant} weight={weight} {...props} />;

// Headline 컴포넌트들
const H1: React.FC<IBaseTextProps> = (props) => (
  <BaseText {...props} variant='h1' />
);

const H2: React.FC<IBaseTextProps> = (props) => (
  <BaseText {...props} variant='h2' />
);

const H3: React.FC<IBaseTextProps> = (props) => (
  <BaseText {...props} variant='h3' />
);

const H4: React.FC<IBaseTextProps> = (props) => (
  <BaseText {...props} variant='h4' />
);

const H5: React.FC<IBaseTextProps> = (props) => (
  <BaseText {...props} variant='h5' />
);

const H6: React.FC<IBaseTextProps> = (props) => (
  <BaseText {...props} variant='h6' />
);

// Subtitle 컴포넌트들
const Subtitle1: React.FC<IBaseTextProps> = (props) => (
  <BaseText {...props} variant='subtitle1' />
);

const Subtitle2: React.FC<IBaseTextProps> = (props) => (
  <BaseText {...props} variant='subtitle2' />
);

// Body 컴포넌트들
const Body1: React.FC<IBaseTextProps> = (props) => (
  <BaseText {...props} variant='body1' />
);

const Body2: React.FC<IBaseTextProps> = (props) => (
  <BaseText {...props} variant='body2' />
);

// Button 컴포넌트
const Button: React.FC<IBaseTextProps> = (props) => (
  <BaseText {...props} variant='button' />
);

// Caption 컴포넌트
const Caption: React.FC<IBaseTextProps> = (props) => (
  <BaseText {...props} variant='caption' />
);

// Overline 컴포넌트
const Overline: React.FC<IBaseTextProps> = (props) => (
  <BaseText {...props} variant='overline' />
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
