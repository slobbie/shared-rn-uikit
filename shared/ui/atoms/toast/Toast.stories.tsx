import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View, Pressable, Text } from 'react-native';

import Toast from '@shared/ui/atoms/toast';

const meta: Meta<typeof Toast> = {
  title: 'Atoms/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    position: {
      control: 'select',
      options: ['top', 'bottom'],
    },
    message: { control: 'text' },
    duration: { control: 'number' },
    showIcon: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

const ToastDemo = ({ type, position, message }: { type: 'info' | 'success' | 'warning' | 'error'; position: 'top' | 'bottom'; message: string }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, height: 400, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        onPress={() => setVisible(true)}
        style={{ backgroundColor: '#3B82F6', padding: 16, borderRadius: 8 }}
      >
        <Text style={{ color: 'white', fontWeight: '600' }}>Show Toast</Text>
      </Pressable>
      <Toast
        visible={visible}
        message={message}
        type={type}
        position={position}
        onDismiss={() => setVisible(false)}
      />
    </View>
  );
};

export const Info: Story = {
  render: () => <ToastDemo type="info" position="bottom" message="정보 메시지입니다." />,
};

export const Success: Story = {
  render: () => <ToastDemo type="success" position="bottom" message="성공적으로 저장되었습니다!" />,
};

export const Warning: Story = {
  render: () => <ToastDemo type="warning" position="top" message="주의가 필요합니다." />,
};

export const Error: Story = {
  render: () => <ToastDemo type="error" position="bottom" message="오류가 발생했습니다." />,
};
