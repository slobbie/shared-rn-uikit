import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import ProgressBar from '@shared/ui/atoms/progressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    height: { control: { type: 'range', min: 4, max: 24, step: 2 } },
    showLabel: { control: 'boolean' },
    animated: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 60,
  },
  render: (args) => (
    <View style={{ width: 300 }}>
      <ProgressBar {...args} />
    </View>
  ),
};

export const WithLabel: Story = {
  args: {
    value: 75,
    showLabel: true,
  },
  render: (args) => (
    <View style={{ width: 300 }}>
      <ProgressBar {...args} />
    </View>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <View style={{ width: 300, gap: 16 }}>
      <ProgressBar value={80} progressColor="#34C759" />
      <ProgressBar value={60} progressColor="#FF9500" />
      <ProgressBar value={40} progressColor="#FF3B30" />
      <ProgressBar value={90} progressColor="#AF52DE" />
    </View>
  ),
};

export const Heights: Story = {
  render: () => (
    <View style={{ width: 300, gap: 16 }}>
      <ProgressBar value={70} height={4} />
      <ProgressBar value={70} height={8} />
      <ProgressBar value={70} height={12} />
      <ProgressBar value={70} height={20} showLabel labelPosition="inside" />
    </View>
  ),
};

export const Animated: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setValue((prev) => (prev >= 100 ? 0 : prev + 10));
      }, 500);
      return () => clearInterval(interval);
    }, []);
    return (
      <View style={{ width: 300 }}>
        <ProgressBar value={value} showLabel />
      </View>
    );
  },
};
