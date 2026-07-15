'use client';

import { useState, type CSSProperties, type ReactNode } from 'react';
import { Fade, Scale, Slide } from '@package/motion';

import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Chip,
  Divider,
  Modal,
  ProfileHeader,
  ProgressBar,
  Radio,
  SegmentedControl,
  SettingRow,
  Skeleton,
  Slider,
  Spacer,
  Switch,
  TextArea,
  TextInput,
  ThemeProvider,
  Toast,
  Tooltip,
  Typo,
} from '@package/design-system';

const cardStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 12,
  padding: 24,
  border: '1px solid rgba(128, 128, 128, 0.25)',
  borderRadius: 12,
  backgroundColor: '#ffffff',
};

const DemoCard = ({
  children,
  column = false,
}: {
  children: ReactNode;
  column?: boolean;
}) => (
  <ThemeProvider>
    <div
      style={{
        ...cardStyle,
        flexDirection: column ? 'column' : 'row',
        alignItems: column ? 'stretch' : 'center',
      }}
    >
      {children}
    </div>
  </ThemeProvider>
);

const MotionStage = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      minHeight: 88,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: 10,
      backgroundColor: '#f4f7ff',
    }}
  >
    {children}
  </div>
);

const MotionSample = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      padding: '12px 16px',
      borderRadius: 8,
      backgroundColor: '#315efb',
      color: '#ffffff',
      fontWeight: 600,
    }}
  >
    {children}
  </div>
);

export const SlideMotionDemo = () => {
  const [visible, setVisible] = useState(true);
  return (
    <DemoCard column>
      <Button size="sm" onPress={() => setVisible((current) => !current)}>
        Slide 전환
      </Button>
      <MotionStage>
        <Slide visible={visible} from="bottom" sizing="intrinsic">
          <MotionSample>아래에서 등장</MotionSample>
        </Slide>
      </MotionStage>
    </DemoCard>
  );
};

export const FadeMotionDemo = () => {
  const [visible, setVisible] = useState(true);
  return (
    <DemoCard column>
      <Button size="sm" onPress={() => setVisible((current) => !current)}>
        Fade 전환
      </Button>
      <MotionStage>
        <Fade visible={visible} sizing="intrinsic">
          <MotionSample>투명도 전환</MotionSample>
        </Fade>
      </MotionStage>
    </DemoCard>
  );
};

export const ScaleMotionDemo = () => {
  const [visible, setVisible] = useState(true);
  return (
    <DemoCard column>
      <Button size="sm" onPress={() => setVisible((current) => !current)}>
        Scale 전환
      </Button>
      <MotionStage>
        <Scale visible={visible} from={0.92} sizing="intrinsic">
          <MotionSample>크기와 투명도 전환</MotionSample>
        </Scale>
      </MotionStage>
    </DemoCard>
  );
};

export const ButtonDemo = () => {
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <DemoCard>
      <Button variant="primary" loading={loading} onPress={handlePress}>
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
    </DemoCard>
  );
};

export const ButtonSizeDemo = () => (
  <DemoCard>
    <Button size="sm" onPress={() => {}}>
      Small
    </Button>
    <Button size="md" onPress={() => {}}>
      Medium
    </Button>
    <Button size="lg" onPress={() => {}}>
      Large
    </Button>
  </DemoCard>
);

export const TypoDemo = () => (
  <DemoCard column>
    <Typo variant="h1">Heading 1</Typo>
    <Typo variant="h2">Heading 2</Typo>
    <Typo variant="h3">Heading 3</Typo>
    <Typo variant="subtitle">Subtitle</Typo>
    <Typo variant="body">Body — 본문 텍스트</Typo>
    <Typo variant="caption" color="secondary">
      Caption — 보조 설명
    </Typo>
  </DemoCard>
);

export const AvatarDemo = () => (
  <DemoCard>
    <Avatar size="sm" name="김하늘" />
    <Avatar size="md" name="김하늘" />
    <Avatar size="lg" name="Haneul Kim" />
  </DemoCard>
);

export const BadgeDemo = () => (
  <DemoCard>
    <Badge label="PRO" variant="primary" />
    <Badge label="NEW" variant="success" />
    <Badge label="에러" variant="error" />
    <Badge label="기본" variant="neutral" />
  </DemoCard>
);

export const ChipDemo = () => {
  const [selected, setSelected] = useState<string[]>(['React']);
  const labels = ['디자인 시스템', 'React', 'React Native', 'TypeScript'];

  const toggle = (label: string) =>
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label],
    );

  return (
    <DemoCard>
      {labels.map((label) => (
        <Chip
          key={label}
          label={label}
          selected={selected.includes(label)}
          onPress={() => toggle(label)}
        />
      ))}
    </DemoCard>
  );
};

export const DividerDemo = () => (
  <DemoCard column>
    <Typo variant="body">위 콘텐츠</Typo>
    <Divider spacing={16} />
    <Typo variant="body">아래 콘텐츠</Typo>
  </DemoCard>
);

export const SwitchDemo = () => {
  const [on, setOn] = useState(true);
  const [off, setOff] = useState(false);

  return (
    <DemoCard>
      <Switch value={on} onChange={setOn} accessibilityLabel="켜짐 예시" />
      <Switch value={off} onChange={setOff} accessibilityLabel="꺼짐 예시" />
      <Switch value onChange={() => {}} disabled accessibilityLabel="비활성 예시" />
    </DemoCard>
  );
};

export const CheckboxDemo = () => {
  const [agreed, setAgreed] = useState(false);
  const [marketing, setMarketing] = useState(true);

  return (
    <DemoCard column>
      <Checkbox checked={agreed} onChange={setAgreed} label="이용약관 동의" />
      <Checkbox checked={marketing} onChange={setMarketing} label="마케팅 수신 동의" />
      <Checkbox checked onChange={() => {}} label="비활성" disabled />
    </DemoCard>
  );
};

export const RadioDemo = () => {
  const [plan, setPlan] = useState<'basic' | 'pro'>('basic');

  return (
    <DemoCard column>
      <Radio selected={plan === 'basic'} onPress={() => setPlan('basic')} label="베이직" />
      <Radio selected={plan === 'pro'} onPress={() => setPlan('pro')} label="프로" />
    </DemoCard>
  );
};

export const TextInputDemo = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  return (
    <DemoCard column>
      <TextInput
        value={email}
        onChangeText={setEmail}
        label="이메일"
        placeholder="you@example.com"
        keyboardType="email-address"
        helperText="회사 이메일을 입력하세요"
      />
      <TextInput
        value={pw}
        onChangeText={setPw}
        label="비밀번호"
        placeholder="8자 이상"
        secureTextEntry
        error={pw.length > 0 && pw.length < 8}
        helperText={pw.length > 0 && pw.length < 8 ? '8자 이상 입력하세요' : '영문/숫자 조합'}
      />
      <TextInput value="수정 불가" onChangeText={() => {}} label="비활성" disabled />
    </DemoCard>
  );
};

export const TextAreaDemo = () => {
  const [memo, setMemo] = useState('');

  return (
    <DemoCard column>
      <TextArea
        value={memo}
        onChangeText={setMemo}
        label="메모"
        placeholder="내용을 입력하세요"
        numberOfLines={4}
        error={memo.length > 500}
        helperText={memo.length > 500 ? '500자를 초과했습니다' : `${memo.length}/500`}
      />
    </DemoCard>
  );
};

export const SpacerDemo = () => (
  <DemoCard column>
    <Badge label="위" />
    <Spacer size={16} />
    <div style={{ display: 'flex' }}>
      <Chip label="왼쪽" />
      <Spacer size={12} horizontal />
      <Chip label="오른쪽" />
    </div>
  </DemoCard>
);

export const SkeletonDemo = () => (
  <DemoCard>
    <Skeleton circle height={44} />
    <div style={{ flex: 1 }}>
      <Skeleton width="60%" height={16} />
      <Spacer size={8} />
      <Skeleton height={16} />
    </div>
  </DemoCard>
);

export const ProgressBarDemo = () => {
  const [value, setValue] = useState(30);

  return (
    <DemoCard column>
      <ProgressBar value={value} accessibilityLabel="진행률" />
      <ProgressBar value={100} variant="success" />
      <ProgressBar value={65} variant="error" />
      <div>
        <Button size="sm" onPress={() => setValue((v) => (v >= 100 ? 0 : v + 10))}>
          +10%
        </Button>
      </div>
    </DemoCard>
  );
};

export const SegmentedControlDemo = () => {
  const [filter, setFilter] = useState('전체');

  return (
    <DemoCard>
      <SegmentedControl
        options={['전체', '진행중', '완료']}
        value={filter}
        onChange={setFilter}
      />
    </DemoCard>
  );
};

export const SliderDemo = () => {
  const [volume, setVolume] = useState(40);

  return (
    <DemoCard column>
      <Slider value={volume} onChange={setVolume} accessibilityLabel="볼륨" />
      <Typo variant="caption" color="secondary">
        현재 값: {volume}
      </Typo>
    </DemoCard>
  );
};

export const ModalDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <DemoCard>
      <Button onPress={() => setOpen(true)}>모달 열기</Button>
      <Modal visible={open} onClose={() => setOpen(false)} title="알림">
        <Typo variant="body">변경 사항을 저장하시겠습니까?</Typo>
        <Spacer size={16} />
        <div style={{ display: 'flex', gap: 8 }}>
          <Button size="sm" onPress={() => setOpen(false)}>
            확인
          </Button>
          <Button size="sm" variant="ghost" onPress={() => setOpen(false)}>
            취소
          </Button>
        </div>
      </Modal>
    </DemoCard>
  );
};

export const TooltipDemo = () => (
  <DemoCard>
    <Tooltip content="설정 열기">
      <Button size="sm">호버해 보세요</Button>
    </Tooltip>
  </DemoCard>
);

export const SettingRowDemo = () => {
  const [push, setPush] = useState(true);
  const [mail, setMail] = useState(false);

  return (
    <DemoCard column>
      <SettingRow
        title="푸시 알림"
        description="새 소식을 푸시로 받아요"
        value={push}
        onChange={setPush}
      />
      <SettingRow
        title="이메일 수신"
        description="주간 요약 메일을 받아요"
        value={mail}
        onChange={setMail}
      />
      <SettingRow title="비활성 항목" value onChange={() => {}} disabled />
    </DemoCard>
  );
};

export const ProfileHeaderDemo = () => (
  <DemoCard column>
    <ProfileHeader name="김하늘" email="haneul.kim@example.com" badgeLabel="PRO" />
  </DemoCard>
);

export const ToastDemo = () => {
  const [visible, setVisible] = useState(false);

  return (
    <DemoCard>
      <Button onPress={() => setVisible(true)}>토스트 표시</Button>
      <Toast
        visible={visible}
        message="저장되었습니다"
        variant="success"
        duration={3000}
        onHide={() => setVisible(false)}
      />
    </DemoCard>
  );
};
