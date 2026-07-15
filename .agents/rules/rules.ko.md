<!-- 이 문서는 .agents/rules/rules.md 와 동시에 유지보수되어야 합니다. -->

# 규칙

## 핵심 기준

- 설치, 실행, 빌드 명령은 Yarn 기준으로 사용합니다.
- `.agents/`를 이 프로젝트의 필수 운영 지침 트리로 간주합니다.
- `.agents/` 안에서는 비 `.ko.md` 문서를 source of truth로 사용합니다.
- 실제 프로젝트에 도입되지 않은 Next.js 서버 라우팅, Tailwind 전용 가정 같은 외부 규칙은 넣지 않습니다.

## Shared UI 구현 규칙

### 1. Theme First
- 하드코딩된 시각 값보다 theme / semantic theme 값을 우선 사용합니다.
- 로컬 색상 체계를 새로 만들기 전에 `useTheme()`와 공통 theme 계층을 먼저 사용합니다.
- 새 시각 토큰이 필요하면 반복 literal을 흩뿌리지 말고 token / theme 모델을 확장합니다.

### 2. 크로스 플랫폼 방향 우선
- 새 shared UI 작업은 React / React Native 공용 가능성을 먼저 평가합니다.
- 브라우저 Storybook 편의 API가 장기적인 shared component contract를 정의하게 두지 않습니다.
- 가능하면 shared prop 이름은 플랫폼 중립적으로 유지합니다.
- 플랫폼 전용 동작은 네이밍보다 구현 경계에서 분리합니다. 단, 차이가 의도적이면 문서화합니다.

### 3. 컴포넌트 경계 규율
- atoms는 primitive하게 유지합니다.
- molecules는 조합형이되 product-specific 로직을 넣지 않습니다.
- layout은 비즈니스 특화 로직을 흡수하지 않습니다.
- utils는 여러 컴포넌트와 preview에서 재사용 가능해야 합니다.

### 4. API Surface 규율
- shared 소비에는 집계 export를 우선합니다.
- 의도하지 않은 deep internal path 의존을 public contract로 만들지 않습니다.
- variant가 명확한 component family는 compound component 같은 grouped API를 우선 고려합니다.

## 스타일 규칙

- 현재 코드베이스에 있는 Emotion / React Native 호환 스타일링 패턴을 유지합니다.
- 명시적 승인 없이 경쟁하는 두 번째 스타일 시스템을 도입하지 않습니다.
- theme 구조를 확장할 때는 표현적 이름보다 semantic naming을 우선합니다.
- 컴포넌트 내부 raw color literal은 최소화합니다.
- spacing, radius, visual state는 가능하면 token-driven 패턴으로 맞춥니다.

## Storybook 규칙

### 스토리 배치
- 현재처럼 컴포넌트 옆 colocated story 패턴이 있으면 그 구조를 유지합니다.
- Storybook title은 `Atoms/*`, `Layout/*`처럼 taxonomy가 드러나게 작성합니다.

### 스토리 품질
- public UI surface에 포함되는 shared component는 특별한 이유가 없는 한 story를 가져야 합니다.
- 조절 가능한 variant는 `args`와 `argTypes`를 우선 사용합니다.
- 기본 상태, disabled, variant 차이, 주요 interaction state를 story로 포함합니다.
- `alert()` 같은 브라우저 전용 helper가 story에 들어갈 수는 있지만, shared component 로직으로 새면 안 됩니다.

### Storybook과 원본 API의 관계
- Storybook은 컴포넌트를 보여주는 도구이지, 컴포넌트 정의 자체가 아닙니다.
- Storybook 렌더링을 맞추기 위해 core component API를 비틀지 않습니다.

## Expo / Preview App 규칙

- `app/`은 preview / exploration surface이지 shared component contract의 원본 정의 장소가 아닙니다.
- preview 화면은 사용 예시를 보여줄 수 있지만, shared component는 앱 라우팅 가정에서 독립적이어야 합니다.

## 의존성 규칙

- 새 패키지는 사용자 승인 없이 추가하지 않습니다.
- web-only 또는 RN-only 의존성을 shared 코드에 넣기 전에는 크로스 플랫폼 방향을 해치는지 먼저 검토합니다.
- 특정 기능이 플랫폼 전용이면 먼저 경계를 문서화합니다.

## 검증 규칙

- 구조나 문서 변경 후에는 `.agents/` 참조와 프로젝트 정합성을 다시 확인합니다.
- Storybook 관련 변경 후에는 빌드/런타임 전제를 로컬 환경과 대조합니다.
- 환경 이슈는 숨기지 말고 명시적으로 기록합니다. 현재 확인된 이슈: 로컬 Node 버전은 `16.13.0`이고, 현재 Storybook 빌드는 Node 18+를 요구합니다.

## 문서 동기화 규칙

다음이 바뀌면 `.agents/` 문서를 같은 패스에서 함께 수정합니다.
- shared component taxonomy
- Storybook 구성 방식
- theme/token 구조
- Expo preview 구조
- React / React Native 크로스 플랫폼 전략
