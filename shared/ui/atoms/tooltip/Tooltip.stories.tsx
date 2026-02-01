import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';

import Tooltip from '@shared/ui/atoms/tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    content: { control: 'text' },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    content: '상단 툴팁입니다',
    position: 'top',
  },
  render: (args) => (
    <View style={{ padding: 100 }}>
      <Tooltip {...args}>
        <View
          style={{ backgroundColor: '#3B82F6', padding: 12, borderRadius: 8 }}
        >
          <Text style={{ color: 'white' }}>클릭해보세요</Text>
        </View>
      </Tooltip>
    </View>
  ),
};

export const Bottom: Story = {
  args: {
    content: '하단 툴팁입니다',
    position: 'bottom',
  },
  render: (args) => (
    <View style={{ padding: 100 }}>
      <Tooltip {...args}>
        <View
          style={{ backgroundColor: '#10B981', padding: 12, borderRadius: 8 }}
        >
          <Text style={{ color: 'white' }}>클릭해보세요</Text>
        </View>
      </Tooltip>
    </View>
  ),
};

export const Left: Story = {
  args: {
    content: '왼쪽 툴팁',
    position: 'left',
  },
  render: (args) => (
    <View style={{ padding: 100 }}>
      <Tooltip {...args}>
        <View
          style={{ backgroundColor: '#F59E0B', padding: 12, borderRadius: 8 }}
        >
          <Text style={{ color: 'white' }}>Left</Text>
        </View>
      </Tooltip>
    </View>
  ),
};

export const Right: Story = {
  args: {
    content: '오른쪽 툴팁',
    position: 'right',
  },
  render: (args) => (
    <View style={{ padding: 100 }}>
      <Tooltip {...args}>
        <View
          style={{ backgroundColor: '#EF4444', padding: 12, borderRadius: 8 }}
        >
          <Text style={{ color: 'white' }}>Right</Text>
        </View>
      </Tooltip>
    </View>
  ),
};
