import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View } from 'react-native';

import Switch from '@shared/ui/atoms/switch';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    value: false,
    size: 'medium',
    disabled: false,
  },
};

export const Sizes: Story = {
  args: {
    value: true,
  },
  render: (args) => (
    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
      <Switch {...args} size='small' />
      <Switch {...args} size='medium' />
      <Switch {...args} size='large' />
    </View>
  ),
};

export const CustomColors: Story = {
  render: () => {
    const [value, setValue] = useState(true);
    return (
      <Switch
        value={value}
        onValueChange={setValue}
        trackColorOn='#FF9500'
        trackColorOff='#FFE5CC'
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 20 }}>
      <Switch value={false} disabled />
      <Switch value={true} disabled />
    </View>
  ),
};
