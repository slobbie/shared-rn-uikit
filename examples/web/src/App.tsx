import { useState } from 'react';

import {
  Button,
  Chip,
  Divider,
  ProfileHeader,
  SettingRow,
  ThemeProvider,
  Typo,
} from '@package/design-system';

const INTERESTS = ['디자인 시스템', 'React', 'React Native', 'TypeScript', 'Storybook'];

const App = () => {
  const [selected, setSelected] = useState<string[]>(['디자인 시스템', 'React']);
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [saving, setSaving] = useState(false);

  const toggleInterest = (label: string) =>
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label],
    );

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1200);
  };

  return (
    <ThemeProvider>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#f2f4f7',
          display: 'flex',
          justifyContent: 'center',
          padding: '40px 16px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 420,
            backgroundColor: '#ffffff',
            borderRadius: 16,
            padding: 24,
            height: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* 프로필 헤더 */}
          <ProfileHeader name="김하늘" email="haneul.kim@example.com" badgeLabel="PRO" />

          <Divider spacing={20} />

          {/* 관심사 */}
          <Typo variant="subtitle">관심사</Typo>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              marginTop: 12,
            }}
          >
            {INTERESTS.map((label) => (
              <Chip
                key={label}
                label={label}
                selected={selected.includes(label)}
                onPress={() => toggleInterest(label)}
              />
            ))}
          </div>

          <Divider spacing={20} />

          {/* 설정 */}
          <Typo variant="subtitle">알림 설정</Typo>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              marginTop: 12,
            }}
          >
            {[
              {
                title: '푸시 알림',
                desc: '새 소식을 푸시로 받아요',
                value: pushEnabled,
                onChange: setPushEnabled,
              },
              {
                title: '이메일 수신',
                desc: '주간 요약 메일을 받아요',
                value: emailEnabled,
                onChange: setEmailEnabled,
              },
              {
                title: '다크 모드',
                desc: '어두운 테마를 사용해요',
                value: darkMode,
                onChange: setDarkMode,
              },
            ].map((row) => (
              <SettingRow
                key={row.title}
                title={row.title}
                description={row.desc}
                value={row.value}
                onChange={row.onChange}
              />
            ))}
          </div>

          <Divider spacing={20} />

          {/* 액션 */}
          <div style={{ display: 'flex', gap: 12 }}>
            <Button variant="primary" loading={saving} onPress={handleSave}>
              저장
            </Button>
            <Button variant="ghost" onPress={() => setSelected([])}>
              초기화
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
