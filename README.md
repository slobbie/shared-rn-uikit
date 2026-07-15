# Shared RN UIKit

🍎 **[Live Docs](https://slobbie.github.io/shared-rn-uikit/)**

웹과 React Native에서 같은 API로 사용할 수 있는 디자인 시스템입니다.
하나의 컴포넌트를 두 플랫폼에서 같은 모습과 사용법으로 제공합니다.

## ✨ 주요 기능

- **웹·네이티브 공통 API**: 어디서든 `@package/design-system`을 그대로 import합니다.
- **플랫폼별 최적화**: 웹은 DOM, 네이티브는 React Native 컴포넌트로 렌더링합니다.
- **일관된 디자인**: 색상, 크기, 간격, 타이포그래피 토큰을 두 플랫폼이 함께 사용합니다.
- **모션 지원**: 웹은 Motion, 네이티브는 Reanimated를 사용하며 사용법은 동일합니다.
- **라이브 문서**: Fumadocs에서 컴포넌트와 모션 API를 직접 확인할 수 있습니다.
- **예제 앱**: Vite와 Expo 앱에서 같은 화면을 비교할 수 있습니다.

## 📸 데모

### 모바일

<img
  src="https://github.com/user-attachments/assets/bf2b4ba5-d9f1-48d1-996d-107ab16cf32c"
  width="360"
  alt="Shared RN UIKit 모바일 데모"
/>

### 웹

<img
  src="https://github.com/user-attachments/assets/586ab4b6-1403-44cf-82a0-56bc8447ce5e"
  width="800"
  alt="Shared RN UIKit 웹 데모"
/>

## 🛠 기술 스택

- **Web**: React 19, Vite, DOM
- **Native**: React Native 0.79, Expo 53
- **Motion**: Motion 12, Reanimated 3
- **Docs**: Next.js 15, Fumadocs
- **Monorepo**: pnpm workspace
- **Test**: Storybook 8, Storybook Test Runner

## 🚀 시작하기

Node.js 22와 pnpm 10이 필요합니다.

```bash
pnpm install
```

```bash
pnpm docs:dev       # 문서 사이트
pnpm web            # 웹 예제
pnpm native         # Expo 예제
pnpm storybook      # Storybook
```

이 저장소는 `workspace:*` 의존성을 사용하므로 npm이나 yarn 대신 pnpm을 사용해야 합니다.

## 📦 패키지 구성

```text
apps/
└─ docs/                    # Next.js + Fumadocs 문서 사이트

examples/
├─ web/                     # Vite 웹 예제
└─ native/                  # Expo 네이티브 예제

packages/
├─ design-system/           # 컴포넌트, 테마, 디자인 토큰
└─ motion/                  # Fade, Slide, Scale 모션
```

## 💻 사용 예시

### Design System

```tsx
import { Button, SettingRow, Switch } from '@package/design-system';

<SettingRow
  title="알림"
  description="새 소식을 푸시 알림으로 받습니다."
  action={<Switch checked={enabled} onChange={setEnabled} />}
/>;

<Button onPress={save}>저장</Button>;
```

같은 import를 사용해도 웹에서는 `.web.tsx`, 네이티브에서는 `.native.tsx` 구현이 자동으로 선택됩니다.

### Motion

대부분의 경우 `Fade`, `Slide`, `Scale` 컴포넌트만 사용하면 됩니다. `MotionBox`를 따로 감쌀 필요는 없습니다.

```tsx
import { Slide } from '@package/motion';

<Slide visible={visible} from="bottom" sizing="intrinsic">
  <ToastContent />
</Slide>;
```

래퍼의 위치나 레이아웃을 직접 지정해야 할 때는 훅과 `MotionBox`를 함께 사용합니다.

```tsx
import { MotionBox, useFade } from '@package/motion';

const motion = useFade({ visible });

return (
  <MotionBox motion={motion} layoutStyle={layoutStyle}>
    {children}
  </MotionBox>
);
```

## 🎨 Components

### Atoms

`Button`, `Typo`, `Avatar`, `Badge`, `Chip`, `Divider`, `Switch`,
`Checkbox`, `Radio`, `Slider`, `ProgressBar`, `Skeleton`, `Spacer`

### Molecules

`TextInput`, `TextArea`, `SegmentedControl`, `Modal`, `Tooltip`, `Toast`

### Organisms

`ProfileHeader`, `SettingRow`

컴포넌트별 Props와 예제는 **[Live Docs](https://slobbie.github.io/shared-rn-uikit/)**에서 확인할 수 있습니다.
