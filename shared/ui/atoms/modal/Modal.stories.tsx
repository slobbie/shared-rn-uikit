import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import Modal from '@shared/ui/atoms/modal';

const meta: Meta<typeof Modal> = {
  title: 'Atoms/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'fullscreen'],
    },
    title: { control: 'text' },
    showCloseButton: { control: 'boolean' },
    closeOnBackdrop: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalDemo = ({ size, title }: { size: 'small' | 'medium' | 'large' | 'fullscreen'; title: string }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, height: 500, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        onPress={() => setVisible(true)}
        style={{ backgroundColor: '#3B82F6', padding: 16, borderRadius: 8 }}
      >
        <Text style={{ color: 'white', fontWeight: '600' }}>Open Modal</Text>
      </Pressable>
      <Modal
        visible={visible}
        onClose={() => setVisible(false)}
        size={size}
        title={title}
      >
        <Text style={{ color: '#374151', lineHeight: 24 }}>
          모달 콘텐츠가 여기에 표시됩니다. 다양한 크기와 옵션을 지원합니다.
        </Text>
      </Modal>
    </View>
  );
};

export const Small: Story = {
  render: () => <ModalDemo size="small" title="작은 모달" />,
};

export const Medium: Story = {
  render: () => <ModalDemo size="medium" title="중간 모달" />,
};

export const Large: Story = {
  render: () => <ModalDemo size="large" title="큰 모달" />,
};

export const Fullscreen: Story = {
  render: () => <ModalDemo size="fullscreen" title="전체 화면 모달" />,
};
