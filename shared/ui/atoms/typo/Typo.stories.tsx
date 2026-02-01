import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import Typo from './index';
import { IBaseTextProps } from './index.interface';

const meta = {
  title: 'Atoms/Typo',
  component: Typo,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'button',
        'caption',
        'overline',
      ],
      description: '텍스트 스타일 변형',
    },
    weight: {
      control: 'select',
      options: ['thin', 'light', 'regular', 'medium', 'bold', 'black'],
      description: '폰트 두께',
    },
    color: {
      control: 'color',
      description: '텍스트 색상',
    },
  },
  args: {
    variant: 'body1',
    weight: 'regular',
    children: 'Typography Text',
  },
} satisfies Meta<IBaseTextProps>;

export default meta;
type Story = StoryObj<IBaseTextProps>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <View style={{ gap: 16 }}>
      <Typo.H1 {...args}>Headline 1 (48px)</Typo.H1>
      <Typo.H2 {...args}>Headline 2 (34px)</Typo.H2>
      <Typo.H3 {...args}>Headline 3 (28px)</Typo.H3>
      <Typo.H4 {...args}>Headline 4 (24px)</Typo.H4>
      <Typo.H5 {...args}>Headline 5 (20px)</Typo.H5>
      <Typo.H6 {...args}>Headline 6 (18px)</Typo.H6>
      <Typo.Subtitle1 {...args}>Subtitle 1 (16px)</Typo.Subtitle1>
      <Typo.Subtitle2 {...args}>Subtitle 2 (14px)</Typo.Subtitle2>
      <Typo.Body1 {...args}>Body 1 (16px)</Typo.Body1>
      <Typo.Body2 {...args}>Body 2 (14px)</Typo.Body2>
      <Typo.Caption {...args}>Caption (12px)</Typo.Caption>
      <Typo.Overline {...args}>OVERLINE (10px)</Typo.Overline>
    </View>
  ),
};
