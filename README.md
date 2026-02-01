# Shared React Native UI Kit

🍎 **[Live Storybook](https://slobbie.github.io/shared-rn-uikit/)**

React Native 재사용 가능한 UI 컴포넌트 라이브러리입니다. Atomic Design 패턴을 따르며, TypeScript로 완전히 타입화되어 있습니다.

## ✨ 핵심 기능

1. **Atomic Design Architecture**: Atoms, Molecules, Layout으로 구조화된 컴포넌트 계층
2. **완전한 TypeScript 지원**: 모든 컴포넌트가 타입 안전성을 보장
3. **테마 시스템**: 일관된 디자인 토큰 기반의 스타일링
4. **Storybook 문서화**: 인터랙티브 컴포넌트 탐색 및 개발 환경
5. **자동 배포**: GitHub Pages를 통한 실시간 문서 업데이트

## 🛠 기술 스택

- **Styling**: `Emotion`, `React Native`
- **Documentation**: `Storybook 8.6`, `React Native`
- **Deployment**: `GitHub Pages` (with GitHub Actions)

## 🏗 프로젝트 구조

```text
shared/
├── ui/
│   ├── atoms/       # 가장 기본적인 UI 요소 (Button, Typography, etc.)
│   ├── molecules/   # 조합된 컴포넌트 (Avatar, Badge, Chip, etc.)
│   ├── layout/      # 레이아웃 컴포넌트 (Container, Grid, etc.)
│   └── utils/       # UI 관련 유틸리티
├── utils/
│   └── lib/         # 테마 토큰, 공통 유틸리티
stories/             # Storybook 스토리 및 문서
```

## 🏗 아키텍처 패턴

### Compound Component Pattern

이 프로젝트는 **Compound Component Pattern(복합 컴포넌트 패턴)**을 사용하여 컴포넌트를 구성합니다:

```typescript
// 메인 컴포넌트가 여러 서브 컴포넌트를 속성으로 가짐
const Button = ButtonBase as ButtonComponent;
Button.Static = Static;
Button.Opacity = Opacity;
Button.Highlight = Highlight;

// 사용 방법
<Button.Static>정적 버튼</Button.Static>
<Button.Opacity>오파시티 버튼</Button.Opacity>
<Button.Highlight>하이라이트 버튼</Button.Highlight>
```

#### 장점

- **의미 있는 이름**: `Button.Static`이 `ButtonStatic`보다 직관적
- **논리적 그룹화**: 관련 컴포넌트들을 하나로 묶음
- **타입 안전성**: TypeScript로 완벽한 타입 지원
- **확장성**: 새로운 변이(variant)를 쉽게 추가 가능

#### 적용 대상

- **Button**: 다양한 상호작용 방식(static, opacity, highlight)
- **Typo**: 다양한 텍스트 스타일(H1, H2, Body1, Button 등)

### Simple Export Pattern

단일 목적의 컴포넌트는 간단한 내보내기 패턴을 사용합니다:

```typescript
// 단일 컴포넌트만 내보내기
import Radio from '@shared/ui/atoms/radio/Radio';
export default Radio;
export { IRadioProps } from '@shared/ui/atoms/radio/radio.interface';
```

#### 적용 대상

- **Radio, Checkbox**: 주요 기능이 하나로 명확한 컴포넌트
- **Avatar, Badge, Divider**: 단일 목적의 UI 요소

## 개발 가이드

### 컴포넌트 추가

1. `shared/ui/atoms/` 또는 `shared/ui/molecules/`에 컴포넌트 추가
2. `stories/` 폴더에 해당 컴포넌트의 Storybook 스토리 생성
3. TypeScript 타입 정의 및 테마 토큰 활용

### 테마 커스터마이징

테마 토큰은 `shared/utils/lib/themeToken.ts`에서 관리됩니다. 색상, 타이포그래피, 간격 등을 중앙에서 관리할 수 있습니다.

## 🎨 컴포넌트 목록

### Atoms (기본 요소)

- [x] **Button**: 다양한 스타일과 상태를 지원하는 버튼
- [x] **Typography**: 텍스트 스타일링 컴포넌트
- [x] **Divider**: 구분선 컴포넌트
- [x] **Spacer**: 마진/패딩을 통한 공간 분할
- [x] **TextInput**: 텍스트 입력 필드

### Molecules (조합 컴포넌트)

- [x] **Avatar**: 프로필 이미지 및 이니셜 표시
- [x] **Badge**: 상태 표시 (숫자, 점)
- [x] **Chip**: 선택 가능한 태그 컴포넌트
- [x] **Progress**: 진행 상태 표시 바
- [x] **Checkbox**: 체크박스
- [x] **Radio**: 라디오 버튼
- [x] **Switch**: 토글 스위치

### Layout (레이아웃 컴포넌트)

- [x] **Container**: 콘텐츠를 감싸는 컨테이너
- [x] **Grid**: 그리드 레이아웃 시스템
- [x] **Card**: 카드형 컨테이너

### 유틸리티

- [x] **Loading**: 로딩 인디케이터
- [x] **ErrorBoundary**: 에러 바운더리
- [x] **Skeleton**: 로딩 스켈레톤 UI
