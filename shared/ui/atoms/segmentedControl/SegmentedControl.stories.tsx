import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View } from 'react-native';

import SegmentedControl from '@shared/ui/atoms/segmentedControl';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Atoms/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    height: { control: { type: 'range', min: 28, max: 48, step: 2 } },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {
  render: () => {
    const [index, setIndex] = useState(0);
    return (
      <View style={{ width: 300 }}>
        <SegmentedControl
          segments={['First', 'Second', 'Third']}
          selectedIndex={index}
          onIndexChange={setIndex}
        />
      </View>
    );
  },
};

export const TwoSegments: Story = {
  render: () => {
    const [index, setIndex] = useState(0);
    return (
      <View style={{ width: 200 }}>
        <SegmentedControl
          segments={['On', 'Off']}
          selectedIndex={index}
          onIndexChange={setIndex}
        />
      </View>
    );
  },
};

export const FourSegments: Story = {
  render: () => {
    const [index, setIndex] = useState(0);
    return (
      <View style={{ width: 320 }}>
        <SegmentedControl
          segments={['Day', 'Week', 'Month', 'Year']}
          selectedIndex={index}
          onIndexChange={setIndex}
        />
      </View>
    );
  },
};

export const CustomColors: Story = {
  render: () => {
    const [index, setIndex] = useState(0);
    return (
      <View style={{ width: 300 }}>
        <SegmentedControl
          segments={['Light', 'Dark', 'Auto']}
          selectedIndex={index}
          onIndexChange={setIndex}
          backgroundColor="#1C1C1E"
          activeBackgroundColor="#3A3A3C"
          textColor="#8E8E93"
          activeTextColor="#FFFFFF"
        />
      </View>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <View style={{ width: 300 }}>
      <SegmentedControl
        segments={['One', 'Two', 'Three']}
        selectedIndex={1}
        disabled
      />
    </View>
  ),
};

export const LargeHeight: Story = {
  render: () => {
    const [index, setIndex] = useState(0);
    return (
      <View style={{ width: 300 }}>
        <SegmentedControl
          segments={['Small', 'Medium', 'Large']}
          selectedIndex={index}
          onIndexChange={setIndex}
          height={44}
        />
      </View>
    );
  },
};
