import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';

import Chip from './index';

const meta = {
  title: 'Molecules/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'chip 라벨 텍스트',
    },
    bgColor: {
      control: 'color',
      description: '배경색',
    },
    textColor: {
      control: 'color',
      description: '텍스트 색상',
    },
    typoType: {
      control: 'select',
      options: ['Caption', 'Body', 'Button'],
      description: '라벨 타이포 타입',
    },
  },
  args: {
    label: '기본 Chip',
    typoType: 'Caption',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

const ChipRow = ({ children }: { children: React.ReactNode }) => (
  <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12, width: 320 }}>
    {children}
  </View>
);

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <ChipRow>
      <Chip.flat {...args} label='Flat Chip' />
      <Chip.outlined {...args} label='Outlined Chip' />
    </ChipRow>
  ),
};

export const ColorStates: Story = {
  render: (args) => (
    <ChipRow>
      <Chip {...args} label='Primary' bgColor='#3B82F6' />
      <Chip {...args} label='Success' bgColor='#10B981' />
      <Chip {...args} label='Warning' bgColor='#F59E0B' />
      <Chip {...args} label='Muted' bgColor='#6B7280' />
    </ChipRow>
  ),
};

export const LongLabel: Story = {
  render: (args) => (
    <View style={{ width: 320 }}>
      <Chip.outlined
        {...args}
        label='여러 태그가 붙는 긴 라벨도 자연스럽게 표시되는지 확인'
      />
    </View>
  ),
};

export const FilterLikeGroup: Story = {
  render: (args) => (
    <ChipRow>
      <Chip {...args} label='전체' />
      <Chip.outlined {...args} label='신규' />
      <Chip.outlined {...args} label='인기' />
      <Chip.outlined {...args} label='마감 임박' />
    </ChipRow>
  ),
};
