import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';

import Avatar from '@shared/ui/atoms/avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'small', 'medium', 'large', 'xl'],
    },
    name: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: 'John Doe',
    size: 'medium',
  },
};

export const Sizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
      <Avatar name="A" size="xs" />
      <Avatar name="AB" size="small" />
      <Avatar name="John" size="medium" />
      <Avatar name="Jane Doe" size="large" />
      <Avatar name="Kim" size="xl" />
    </View>
  ),
};

export const WithImage: Story = {
  args: {
    source: { uri: 'https://i.pravatar.cc/150?img=1' },
    size: 'large',
  },
};

export const WithBorder: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16 }}>
      <Avatar name="User 1" size="large" borderWidth={2} borderColor="#007AFF" />
      <Avatar name="User 2" size="large" borderWidth={3} borderColor="#34C759" />
      <Avatar name="User 3" size="large" borderWidth={2} borderColor="#FF3B30" />
    </View>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16 }}>
      <Avatar name="A" size="large" backgroundColor="#007AFF" />
      <Avatar name="B" size="large" backgroundColor="#34C759" />
      <Avatar name="C" size="large" backgroundColor="#FF9500" />
      <Avatar name="D" size="large" backgroundColor="#FF3B30" />
    </View>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <View style={{ flexDirection: 'row' }}>
      {['Alice', 'Bob', 'Charlie', 'David'].map((name, index) => (
        <Avatar
          key={name}
          name={name}
          size="medium"
          borderWidth={2}
          borderColor="#FFFFFF"
          style={{ marginLeft: index > 0 ? -12 : 0 }}
        />
      ))}
    </View>
  ),
};
