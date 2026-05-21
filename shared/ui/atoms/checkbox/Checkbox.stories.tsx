import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View } from 'react-native';

import Checkbox from '@shared/ui/atoms/checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '체크박스 크기',
    },
    label: {
      control: 'text',
      description: '라벨 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    color: {
      control: 'color',
      description: '체크 상태 색상',
    },
  },
  args: {
    checked: false,
    label: '동의합니다',
    size: 'medium',
    disabled: false,
    color: '#007AFF',
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Sizes: Story = {
  args: {
    checked: true,
  },
  render: (args) => (
    <View style={{ gap: 16 }}>
      <Checkbox {...args} label='Small' size='small' />
      <Checkbox {...args} label='Medium' size='medium' />
      <Checkbox {...args} label='Large' size='large' />
    </View>
  ),
};

export const Interactive: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? true);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onValueChange={setChecked}
        label='클릭해서 상태 변경'
      />
    );
  },
};

export const ColorStates: Story = {
  args: {
    checked: true,
  },
  render: (args) => (
    <View style={{ gap: 16 }}>
      <Checkbox {...args} label='Primary' color='#007AFF' />
      <Checkbox {...args} label='Success' color='#34C759' />
      <Checkbox {...args} label='Warning' color='#FF9500' />
      <Checkbox {...args} label='Error' color='#FF3B30' />
    </View>
  ),
};

export const Disabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Checkbox checked={false} disabled label='비활성화 (체크 안됨)' />
      <Checkbox checked={true} disabled label='비활성화 (체크됨)' />
    </View>
  ),
};
