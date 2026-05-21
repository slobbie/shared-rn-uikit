import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';

import Divider from './index';

const meta = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: {
      control: 'text',
      description: '구분선 너비',
    },
    height: {
      control: { type: 'number', min: 0.4, max: 8, step: 0.4 },
      description: '구분선 두께',
    },
    color: {
      control: 'color',
      description: '구분선 색상',
    },
  },
  args: {
    width: '100%',
    height: 1,
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

const DividerCanvas = ({ children }: { children: React.ReactNode }) => (
  <View style={{ width: 320, gap: 12 }}>{children}</View>
);

export const Default: Story = {
  render: (args) => (
    <DividerCanvas>
      <Text>위 콘텐츠</Text>
      <Divider {...args} />
      <Text>아래 콘텐츠</Text>
    </DividerCanvas>
  ),
};

export const ThicknessComparison: Story = {
  render: (args) => (
    <DividerCanvas>
      <Divider {...args} height={0.5} />
      <Divider {...args} height={1} />
      <Divider {...args} height={2} />
      <Divider {...args} height={4} />
    </DividerCanvas>
  ),
};

export const WidthComparison: Story = {
  render: (args) => (
    <DividerCanvas>
      <Divider {...args} width='100%' />
      <Divider {...args} width='75%' />
      <Divider {...args} width='50%' />
      <Divider {...args} width={120} />
    </DividerCanvas>
  ),
};

export const ColorStates: Story = {
  render: (args) => (
    <DividerCanvas>
      <Divider {...args} color='#D1D5DB' />
      <Divider {...args} color='#3B82F6' />
      <Divider {...args} color='#10B981' />
      <Divider {...args} color='#EF4444' />
    </DividerCanvas>
  ),
};
