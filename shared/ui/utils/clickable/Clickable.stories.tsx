import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';

import Clickable from '@shared/ui/utils/clickable';

const meta: Meta<typeof Clickable> = {
  title: 'Utils/Clickable',
  component: Clickable,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    feedback: {
      control: 'select',
      options: ['none', 'opacity', 'highlight', 'scale'],
    },
    activeOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    scaleValue: { control: { type: 'range', min: 0.9, max: 1, step: 0.01 } },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Clickable>;

const ClickableBox = ({
  label,
  color = '#3B82F6',
}: {
  label: string;
  color?: string;
}) => (
  <View
    style={{
      backgroundColor: color,
      padding: 20,
      borderRadius: 12,
      minWidth: 150,
      alignItems: 'center',
    }}
  >
    <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>
      {label}
    </Text>
  </View>
);

export const Opacity: Story = {
  args: {
    feedback: 'opacity',
    activeOpacity: 0.7,
  },
  render: (args) => (
    <Clickable {...args} onPress={() => console.log('Opacity clicked!')}>
      <ClickableBox label='Opacity' />
    </Clickable>
  ),
};

export const Highlight: Story = {
  args: {
    feedback: 'highlight',
  },
  render: (args) => (
    <Clickable {...args} onPress={() => console.log('Highlight clicked!')}>
      <ClickableBox label='Highlight' color='#10B981' />
    </Clickable>
  ),
};

export const Scale: Story = {
  args: {
    feedback: 'scale',
    scaleValue: 0.95,
  },
  render: (args) => (
    <Clickable {...args} onPress={() => console.log('Scale clicked!')}>
      <ClickableBox label='Scale' color='#F59E0B' />
    </Clickable>
  ),
};

export const None: Story = {
  args: {
    feedback: 'none',
  },
  render: (args) => (
    <Clickable {...args} onPress={() => console.log('No feedback clicked!')}>
      <ClickableBox label='No Feedback' color='#6B7280' />
    </Clickable>
  ),
};

export const AllFeedbacks: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
      <Clickable feedback='opacity' onPress={() => {}}>
        <ClickableBox label='Opacity' color='#3B82F6' />
      </Clickable>
      <Clickable feedback='highlight' onPress={() => {}}>
        <ClickableBox label='Highlight' color='#10B981' />
      </Clickable>
      <Clickable feedback='scale' onPress={() => {}}>
        <ClickableBox label='Scale' color='#F59E0B' />
      </Clickable>
      <Clickable feedback='none' onPress={() => {}}>
        <ClickableBox label='None' color='#6B7280' />
      </Clickable>
    </View>
  ),
};

export const Disabled: Story = {
  args: {
    feedback: 'opacity',
    disabled: true,
  },
  render: (args) => (
    <Clickable {...args} onPress={() => console.log('This should not fire')}>
      <View
        style={{
          backgroundColor: '#9CA3AF',
          padding: 20,
          borderRadius: 12,
          opacity: 0.5,
        }}
      >
        <Text style={{ color: 'white', fontWeight: '600' }}>Disabled</Text>
      </View>
    </Clickable>
  ),
};
