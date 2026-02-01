import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Slider from '@shared/ui/atoms/slider';

const meta: Meta<typeof Slider> = {
  title: 'Atoms/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    minValue: { control: 'number' },
    maxValue: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
    thumbSize: { control: { type: 'range', min: 16, max: 40, step: 2 } },
    trackHeight: { control: { type: 'range', min: 2, max: 12, step: 1 } },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    value: 50,
    minValue: 0,
    maxValue: 100,
    step: 1,
  },
  render: (args) => (
    <View style={{ width: 300 }}>
      <Slider {...args} />
    </View>
  ),
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState(30);
    return (
      <View style={{ width: 300 }}>
        <Text style={{ marginBottom: 10, textAlign: 'center' }}>Value: {value}</Text>
        <Slider value={value} onValueChange={setValue} />
      </View>
    );
  },
};

export const CustomStyle: Story = {
  args: {
    value: 60,
    thumbSize: 32,
    trackHeight: 8,
    activeTrackColor: '#10B981',
    thumbColor: '#059669',
  },
  render: (args) => (
    <View style={{ width: 300 }}>
      <Slider {...args} />
    </View>
  ),
};

export const Disabled: Story = {
  args: {
    value: 40,
    disabled: true,
  },
  render: (args) => (
    <View style={{ width: 300 }}>
      <Slider {...args} />
    </View>
  ),
};

export const StepSlider: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <View style={{ width: 300 }}>
        <Text style={{ marginBottom: 10, textAlign: 'center' }}>Step: {value}</Text>
        <Slider value={value} minValue={0} maxValue={100} step={25} onValueChange={setValue} />
      </View>
    );
  },
};
