import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View, Text } from 'react-native';

import Badge from '@shared/ui/atoms/badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'dot'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    content: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

const IconBox = () => (
  <View style={{ width: 40, height: 40, backgroundColor: '#E5E5EA', borderRadius: 8 }} />
);

export const Default: Story = {
  args: {
    content: 5,
    color: 'error',
  },
  render: (args) => (
    <Badge {...args}>
      <IconBox />
    </Badge>
  ),
};

export const Variants: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 32 }}>
      <Badge content={3} variant="filled"><IconBox /></Badge>
      <Badge content={3} variant="outlined"><IconBox /></Badge>
      <Badge variant="dot"><IconBox /></Badge>
    </View>
  ),
};

export const Colors: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 24 }}>
      <Badge content={1} color="primary"><IconBox /></Badge>
      <Badge content={2} color="secondary"><IconBox /></Badge>
      <Badge content={3} color="success"><IconBox /></Badge>
      <Badge content={4} color="warning"><IconBox /></Badge>
      <Badge content={5} color="error"><IconBox /></Badge>
    </View>
  ),
};

export const MaxCount: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 24 }}>
      <Badge content={99}><IconBox /></Badge>
      <Badge content={100}><IconBox /></Badge>
      <Badge content={999} maxCount={999}><IconBox /></Badge>
    </View>
  ),
};

export const Standalone: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
      <Badge content="New" color="primary" />
      <Badge content="Hot" color="error" />
      <Badge content={42} color="success" />
    </View>
  ),
};
