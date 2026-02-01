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
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
    label: '동의합니다',
    size: 'medium',
    disabled: false,
  },
};

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

export const CustomColor: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <Checkbox
        checked={checked}
        onValueChange={setChecked}
        label='커스텀 색상'
        color='#FF9500'
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Checkbox checked={false} disabled label='비활성화 (체크 안됨)' />
      <Checkbox checked={true} disabled label='비활성화 (체크됨)' />
    </View>
  ),
};
