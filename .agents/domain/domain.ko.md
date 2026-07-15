<!-- 이 문서는 .agents/domain/domain.md 와 동시에 유지보수되어야 합니다. -->

# 도메인

## 프로젝트 도메인 요약

이 프로젝트는 현재 **React Native 중심의 shared UI kit**이며, 앞으로 **React와 React Native 양쪽에서 함께 사용할 수 있는 크로스 플랫폼 디자인 시스템**으로 발전시키려는 방향을 가집니다.

현재 기준 사실:
- 구현 소스는 RN 중심입니다.
- Storybook은 브라우저 기반 문서화/미리보기 레이어입니다.
- Expo / Expo Router는 로컬 프리뷰 앱 셸 역할을 합니다.
- 테마 토큰과 시맨틱 테마 매핑이 이미 존재하며, 이 계층이 향후 크로스 플랫폼 확장의 핵심 경계입니다.

## 주요 소스 구조

- `shared/ui/atoms/`: 가장 작은 단위의 UI 요소
- `shared/ui/molecules/`: atoms를 조합한 UI 블록
- `shared/ui/layout/`: 구조와 배치를 담당하는 컴포넌트
- `shared/ui/utils/`: 로딩, 에러 바운더리 같은 공통 보조 UI
- `shared/utils/lib/`: 테마, 토큰, 컨텍스트, 병합 유틸리티
- `app/`: Expo Router 기반 프리뷰 화면
- `.storybook/`: Storybook 브라우저 미리보기/문서 설정

## 컴포넌트 분류 규칙

### Atoms
가장 작은 재사용 UI 요소에 사용합니다.
현재 예시:
- button
- typo
- textInput
- checkbox
- radio
- switch
- slider
- modal
- toast
- tooltip

Atoms는 다음을 만족해야 합니다.
- 가능한 한 가장 작은 실용 API를 제공할 것
- 제품 기능보다 theme / token 기반 스타일에 의존할 것
- 페이지 구조나 업무 흐름을 알지 않을 것

### Molecules
atoms를 조합한 의미 있는 상호작용 단위에 사용합니다.
현재 예시:
- avatar
- badge
- chip
- progress
- radio group
- checkbox 조합
- switch 조합

Molecules는 다음을 만족해야 합니다.
- atoms를 조합해 하나의 의미 있는 UI 단위를 만들 것
- 제품 특화 로직 없이 재사용 가능할 것
- 특정 화면 배치를 전제하지 않을 것

### Layout
구조와 배치를 담당하는 컴포넌트에 사용합니다.
현재 예시:
- container
- grid
- card
- accordion

Layout 컴포넌트는 다음을 만족해야 합니다.
- spacing, containment, arrangement, hierarchy를 해결할 것
- 도메인 특화 콘텐츠를 전제하지 않을 것

### Utils
여러 곳에서 공통으로 쓰이는 보조 UI에 사용합니다.
현재 예시:
- loading
- errorBoundary
- clickable

## Export Surface

이 프로젝트는 이미 집계 export 구조를 일부 사용하고 있습니다.
현재 예시:
- `shared/ui/atoms/index.ts`
- `shared/ui/molecules/index.tsx`

이건 중요한 도메인 규칙입니다.
- 가능하면 소비자는 집계 export를 우선 사용합니다.
- 새 shared 컴포넌트 계열도 안정적인 app-facing API surface를 제공해야 합니다.
- 내부 파일 경로가 의도 없이 장기 public contract가 되지 않게 합니다.

## 컴포넌트 API 패턴

### Compound Component Pattern
이 프로젝트의 핵심 패턴입니다.
예시:
- `Button.Static`, `Button.Opacity`, `Button.Highlight`
- `Typo.H1`, `Typo.Body1`, `Typo.Caption`
- `TextInput.Default`, `TextInput.Outlined`, `TextInput.Underlined`

다음 조건이면 이 패턴을 우선 고려합니다.
- 여러 variant가 하나의 개념적 컴포넌트 패밀리로 묶일 때
- 여러 개의 형제 export보다 grouped API가 더 명확할 때
- 공통 props와 공통 사용 맥락이 있을 때

### Simple Wrapper Export Pattern
하나의 명확한 기본 형태만 있고 grouped API가 필요 없는 경우에는 단순 `index.tsx` export wrapper를 사용합니다.

## 테마 도메인 모델

테마는 구현 디테일이 아니라 핵심 도메인 개념입니다.
현재 테마 계층:
- base tokens: `variant`, `colors`, `background`, `typography`
- merge 단계: `createTheme()`
- semantic mapping 단계: `createSemanticTheme()`
- runtime 접근: `ThemeProvider` / `useTheme()`

도메인 관점 의미:
- 가능하면 컴포넌트는 semantic theme 값을 소비해야 합니다.
- raw 하드코딩 색상은 최소화해야 합니다.
- token 변경은 Storybook과 Expo preview 둘 다에 영향을 줍니다.
- 앞으로 React / React Native 공용화는 렌더링 구현보다 먼저 token / semantic theme 경계에서 정리되어야 합니다.

## 크로스 플랫폼 방향

목표는 단순히 “RN 컴포넌트를 웹 Storybook에 띄우는 것”이 아닙니다.
목표는 다음입니다.
- 하나의 shared design language
- 하나의 shared token / theme 모델
- 하나의 shared component taxonomy
- 렌더링 경계에서만 통제된 플랫폼 차이

즉 앞으로는 아래를 구분해서 관리해야 합니다.
- shared behavior / shared API
- shared visual semantics
- platform-specific implementation details

## 향후 발전 제약

React + React Native 공용 방향으로 갈 때는 다음을 지킵니다.
- Storybook 브라우저 편의 로직이 core component API를 바꾸지 않게 합니다.
- Expo 전용 가정이 모든 컴포넌트 계약으로 새지 않게 합니다.
- 가능하면 prop / variant 이름은 플랫폼 중립적으로 유지합니다.
- 플랫폼 차이는 암묵적으로 방치하지 말고 명시적으로 문서화합니다.

## 문서 동기화 규칙

다음이 바뀌면 이 문서를 같은 패스에서 함께 수정합니다.
- component taxonomy
- public export 구조
- theme token 모델
- semantic theme 구조
- cross-platform boundary 결정
