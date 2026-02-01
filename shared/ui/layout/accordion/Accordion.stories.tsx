import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View, Text } from 'react-native';

import Accordion from '@shared/ui/layout/accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Layout/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultExpanded: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    defaultExpanded: false,
  },
  render: (args) => (
    <View style={{ width: 320 }}>
      <Accordion {...args}>
        <Accordion.Header title="아코디언 제목" subtitle="클릭하여 펼치기" />
        <Accordion.Content>
          <Text style={{ color: '#374151', lineHeight: 22 }}>
            아코디언 콘텐츠입니다. 헤더를 클릭하면 이 영역이 펼쳐지거나 접힙니다.
          </Text>
        </Accordion.Content>
      </Accordion>
    </View>
  ),
};

export const Expanded: Story = {
  args: {
    defaultExpanded: true,
  },
  render: (args) => (
    <View style={{ width: 320 }}>
      <Accordion {...args}>
        <Accordion.Header title="기본 펼침 상태" />
        <Accordion.Content>
          <Text style={{ color: '#374151', lineHeight: 22 }}>
            이 아코디언은 기본적으로 펼쳐진 상태로 시작합니다.
          </Text>
        </Accordion.Content>
      </Accordion>
    </View>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <View style={{ width: 320 }}>
      <Accordion {...args}>
        <Accordion.Header title="비활성화된 아코디언" />
        <Accordion.Content>
          <Text style={{ color: '#374151' }}>이 콘텐츠는 보이지 않습니다.</Text>
        </Accordion.Content>
      </Accordion>
    </View>
  ),
};

export const Multiple: Story = {
  render: () => (
    <View style={{ width: 320, gap: 8 }}>
      <Accordion>
        <Accordion.Header title="섹션 1" subtitle="첫 번째 섹션" />
        <Accordion.Content>
          <Text style={{ color: '#374151' }}>첫 번째 섹션의 콘텐츠입니다.</Text>
        </Accordion.Content>
      </Accordion>
      <Accordion>
        <Accordion.Header title="섹션 2" subtitle="두 번째 섹션" />
        <Accordion.Content>
          <Text style={{ color: '#374151' }}>두 번째 섹션의 콘텐츠입니다.</Text>
        </Accordion.Content>
      </Accordion>
      <Accordion>
        <Accordion.Header title="섹션 3" subtitle="세 번째 섹션" />
        <Accordion.Content>
          <Text style={{ color: '#374151' }}>세 번째 섹션의 콘텐츠입니다.</Text>
        </Accordion.Content>
      </Accordion>
    </View>
  ),
};
