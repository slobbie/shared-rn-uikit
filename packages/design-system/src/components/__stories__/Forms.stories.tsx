import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, userEvent, within } from '@storybook/test';

import { Checkbox } from '../atoms/Checkbox/Checkbox.web';
import { Radio } from '../atoms/Radio/Radio.web';
import { SegmentedControl } from '../molecules/SegmentedControl/SegmentedControl.web';
import { Slider } from '../atoms/Slider/Slider.web';
import { Switch } from '../atoms/Switch/Switch.web';
import { TextArea } from '../molecules/TextArea/TextArea.web';
import { TextInput } from '../molecules/TextInput/TextInput.web';

const meta: Meta = { title: 'Components/Forms' };
export default meta;

const CheckboxExample = () => {
  const [agreed, setAgreed] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox checked={agreed} onChange={setAgreed} label="이용약관 동의" />
      <Checkbox checked onChange={() => {}} label="비활성" disabled />
    </div>
  );
};

export const Checkboxes: StoryObj = {
  render: () => <CheckboxExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const box = canvas.getByRole('checkbox', { name: '이용약관 동의' });
    await expect(box).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(box);
    await expect(box).toHaveAttribute('aria-checked', 'true');
  },
};

const RadioExample = () => {
  const [plan, setPlan] = useState('basic');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Radio selected={plan === 'basic'} onPress={() => setPlan('basic')} label="베이직" />
      <Radio selected={plan === 'pro'} onPress={() => setPlan('pro')} label="프로" />
    </div>
  );
};

export const Radios: StoryObj = {
  render: () => <RadioExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const pro = canvas.getByRole('radio', { name: '프로' });
    await expect(pro).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(pro);
    await expect(pro).toHaveAttribute('aria-checked', 'true');
    await expect(canvas.getByRole('radio', { name: '베이직' })).toHaveAttribute(
      'aria-checked',
      'false',
    );
  },
};

const SwitchExample = () => {
  const [on, setOn] = useState(false);
  return <Switch value={on} onChange={setOn} accessibilityLabel="알림" />;
};

export const Switches: StoryObj = {
  render: () => <SwitchExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sw = canvas.getByRole('switch');
    await expect(sw).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(sw);
    await expect(sw).toHaveAttribute('aria-checked', 'true');
  },
};

const TextInputExample = () => {
  const [pw, setPw] = useState('');
  return (
    <div style={{ maxWidth: 320 }}>
      <TextInput
        value={pw}
        onChangeText={setPw}
        label="비밀번호"
        placeholder="8자 이상"
        secureTextEntry
        error={pw.length > 0 && pw.length < 8}
        helperText={pw.length > 0 && pw.length < 8 ? '8자 이상 입력하세요' : '영문/숫자 조합'}
      />
    </div>
  );
};

export const TextInputs: StoryObj = {
  render: () => <TextInputExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('8자 이상');
    await userEvent.type(input, 'abc');
    await expect(input).toHaveValue('abc');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByText('8자 이상 입력하세요')).toBeInTheDocument();
    await userEvent.type(input, 'defgh123');
    await expect(input).not.toHaveAttribute('aria-invalid');
  },
};

const TextAreaExample = () => {
  const [memo, setMemo] = useState('');
  return (
    <div style={{ maxWidth: 320 }}>
      <TextArea value={memo} onChangeText={setMemo} label="메모" placeholder="내용을 입력하세요" />
    </div>
  );
};

export const TextAreas: StoryObj = {
  render: () => <TextAreaExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const area = canvas.getByPlaceholderText('내용을 입력하세요');
    await userEvent.type(area, '회의록 정리');
    await expect(area).toHaveValue('회의록 정리');
  },
};

const SegmentedExample = () => {
  const [filter, setFilter] = useState('전체');
  return <SegmentedControl options={['전체', '진행중', '완료']} value={filter} onChange={setFilter} />;
};

export const SegmentedControls: StoryObj = {
  render: () => <SegmentedExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole('tab', { name: '진행중' });
    await expect(tab).toHaveAttribute('aria-selected', 'false');
    await userEvent.click(tab);
    await expect(tab).toHaveAttribute('aria-selected', 'true');
  },
};

const SliderExample = () => {
  const [volume, setVolume] = useState(40);
  return (
    <div style={{ maxWidth: 320 }}>
      <Slider value={volume} onChange={setVolume} accessibilityLabel="볼륨" />
      <span style={{ fontSize: 13 }}>현재 값: {volume}</span>
    </div>
  );
};

export const Sliders: StoryObj = {
  render: () => <SliderExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const range = canvas.getByRole('slider');
    await fireEvent.input(range, { target: { value: '75' } });
    await expect(canvas.getByText('현재 값: 75')).toBeInTheDocument();
  },
};
