import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View, Text, Pressable } from 'react-native';

import Card from '@shared/ui/layout/card';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
    },
    padding: { control: 'number' },
    borderRadius: { control: 'number' },
    elevation: { control: { type: 'range', min: 0, max: 24, step: 1 } },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    padding: 16,
  },
  render: (args) => (
    <View style={{ width: 320 }}>
      <Card {...args}>
        <Card.Header title="카드 제목" subtitle="부제목입니다" />
        <Card.Content>
          <Text style={{ color: '#374151', lineHeight: 22 }}>
            카드 콘텐츠가 여기에 표시됩니다. 다양한 정보를 담을 수 있습니다.
          </Text>
        </Card.Content>
        <Card.Footer>
          <Pressable style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
            <Text style={{ color: '#3B82F6', fontWeight: '600' }}>자세히 보기</Text>
          </Pressable>
        </Card.Footer>
      </Card>
    </View>
  ),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    padding: 16,
  },
  render: (args) => (
    <View style={{ width: 320 }}>
      <Card {...args}>
        <Card.Header title="Outlined Card" />
        <Card.Content>
          <Text style={{ color: '#374151' }}>테두리가 있는 카드 스타일입니다.</Text>
        </Card.Content>
      </Card>
    </View>
  ),
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    padding: 16,
  },
  render: (args) => (
    <View style={{ width: 320 }}>
      <Card {...args}>
        <Card.Header title="Filled Card" />
        <Card.Content>
          <Text style={{ color: '#374151' }}>배경색이 채워진 카드 스타일입니다.</Text>
        </Card.Content>
      </Card>
    </View>
  ),
};

export const Clickable: Story = {
  render: () => (
    <View style={{ width: 320 }}>
      <Card
        variant="elevated"
        onPress={() => alert('Card clicked!')}
      >
        <Card.Header title="클릭 가능한 카드" subtitle="탭하여 상호작용" />
        <Card.Content>
          <Text style={{ color: '#374151' }}>이 카드는 클릭할 수 있습니다.</Text>
        </Card.Content>
      </Card>
    </View>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <View style={{ width: 320 }}>
      <Card variant="elevated">
        <Card.Header
          title="사용자 이름"
          subtitle="2시간 전"
          avatar={
            <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#3B82F6', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontWeight: '600' }}>U</Text>
            </View>
          }
        />
        <Card.Content>
          <Text style={{ color: '#374151', lineHeight: 22 }}>
            아바타와 함께 표시되는 카드 헤더입니다.
          </Text>
        </Card.Content>
      </Card>
    </View>
  ),
};
