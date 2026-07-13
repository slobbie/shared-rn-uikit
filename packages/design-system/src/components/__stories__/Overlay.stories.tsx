import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';

import { Button } from '../atoms/Button/Button.web';
import { Modal } from '../molecules/Modal/Modal.web';
import { Toast } from '../molecules/Toast/Toast.web';
import { Tooltip } from '../molecules/Tooltip/Tooltip.web';
import { Typo } from '../atoms/Typo/Typo.web';

const meta: Meta = { title: 'Components/Overlay' };
export default meta;

const ButtonExample = () => {
  const [loading, setLoading] = useState(false);
  const press = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 600);
  };
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button variant="primary" loading={loading} onPress={press}>
        저장
      </Button>
      <Button variant="secondary" onPress={() => {}}>
        보조
      </Button>
      <Button variant="ghost" onPress={() => {}}>
        고스트
      </Button>
      <Button variant="primary" disabled onPress={() => {}}>
        비활성
      </Button>
    </div>
  );
};

export const Buttons: StoryObj = {
  render: () => <ButtonExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', { name: '비활성' })).toBeDisabled();
    // loading 중엔 라벨이 '…'로 바뀌므로 요소 참조를 고정해서 단언
    const save = canvas.getByRole('button', { name: '저장' });
    await userEvent.click(save);
    await waitFor(() => expect(save).toHaveAttribute('aria-busy', 'true'));
    // 600ms 후 loading 해제
    await waitFor(() => expect(save).not.toHaveAttribute('aria-busy', 'true'), {
      timeout: 2000,
    });
    await expect(save).toHaveTextContent('저장');
  },
};

const ModalExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onPress={() => setOpen(true)}>모달 열기</Button>
      <Modal visible={open} onClose={() => setOpen(false)} title="알림">
        <Typo variant="body">변경 사항을 저장하시겠습니까?</Typo>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <Button size="sm" onPress={() => setOpen(false)}>
            확인
          </Button>
        </div>
      </Modal>
    </>
  );
};

export const Modals: StoryObj = {
  render: () => <ModalExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', { name: '모달 열기' }));
    // portal이라 document.body에서 조회
    const dialog = await body.findByRole('dialog');
    await expect(dialog).toHaveAttribute('aria-modal', 'true');
    await expect(within(dialog).getByText('알림')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
  },
};

export const Tooltips: StoryObj = {
  render: () => (
    <Tooltip content="설정 열기">
      <Button size="sm">호버해 보세요</Button>
    </Tooltip>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button', { name: '호버해 보세요' }));
    const tip = await canvas.findByRole('tooltip');
    await expect(tip).toHaveTextContent('설정 열기');
    await userEvent.unhover(canvas.getByRole('button', { name: '호버해 보세요' }));
    await waitFor(() => expect(canvas.queryByRole('tooltip')).not.toBeInTheDocument());
  },
};

const ToastExample = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onPress={() => setVisible(true)}>토스트 표시</Button>
      <Toast
        visible={visible}
        message="저장되었습니다"
        variant="success"
        duration={800}
        onHide={() => setVisible(false)}
      />
    </>
  );
};

export const Toasts: StoryObj = {
  render: () => <ToastExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', { name: '토스트 표시' }));
    const toast = await body.findByRole('status');
    await expect(toast).toHaveTextContent('저장되었습니다');
    // duration 800ms 후 자동 숨김
    await waitFor(() => expect(body.queryByRole('status')).not.toBeInTheDocument(), {
      timeout: 3000,
    });
  },
};
