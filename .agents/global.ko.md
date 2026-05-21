## 문서 우선순위 규칙

- `.ko.md`로 끝나는 파일은 사람 개발자를 위한 참고 문서입니다.
- `.agents/` 아래의 `README.md`는 사람용 개요 문서이며 운영 지침이 아닙니다.
- 에이전트는 `.ko.md`와 `README.md`를 작업 지침으로 사용하면 안 됩니다.
- 에이전트는 `.agents/` 아래의 비 `.ko.md` 문서를 실제 작업 기준으로 사용합니다.
- 같은 문서의 다국어 버전이 함께 있으면, `README.md`를 제외하고 비 `.ko.md` 문서를 단일 기준 문서로 봅니다.
- 설명용 개요 문서보다 간결한 운영 문서를 우선 참조합니다.

## 프로젝트 범위

이 `.agents/` 트리는 `shared-rn-uikit` 프로젝트 전용입니다.

현재 프로젝트 사실:
- 스택: Expo, Expo Router, React Native, TypeScript, Emotion, Storybook
- 패키지 매니저: Yarn
- 주요 UI 소스: `shared/ui/`
- 앱 셸 및 미리보기 라우트: `app/`
- 공통 유틸리티와 테마: `shared/utils/lib/`
- Storybook 설정: `.storybook/`

복사되어 남아 있는 다른 역할 폴더가 있더라도, 사용자가 다시 활성화하라고 하지 않는 한 이 프로젝트의 우선 라우팅 대상은 아닙니다.

## 에이전트 작업 라우팅 가이드

작업 시작 전 요청 종류를 먼저 판단하고, 아래 경로를 따릅니다.

### 1. UI / 프론트엔드 개발
사용자 화면, 공통 컴포넌트, 스타일, 컴포넌트 API를 다룰 때 사용합니다.
- 기본 역할 문서: `.agents/roles/frontend/frontend-engineer.md`
- 공통 컴포넌트 구현 기준: `.agents/domain/domain.md`, `.agents/rules/rules.md`
- Expo Router 화면/미리보기 구조: `app/` 및 `.agents/domain/domain.md`
- Storybook 관련 작업: `.agents/infra/infra.md`, `.agents/rules/rules.md`

### 2. 도메인 / UI Kit 구조
컴포넌트 분류, 네이밍, export 구조, 테마, 토큰 의미를 다룰 때 사용합니다.
- 도메인 모델과 UI kit 구조: `.agents/domain/domain.md`
- 공통 구현 규칙: `.agents/rules/rules.md`

### 3. 테스트 / 품질
컴포넌트 검증, 회귀 확인, story/build 결과 점검 시 사용합니다.
- 테스트 전략 및 검증 참고: `.agents/testing/`
- 작업 진행/상태 관리: `.agents/workflow/task-management.md`
- 리뷰에 영향을 주는 공통 규칙: `.agents/rules/rules.md`

### 4. 인프라 / 툴링
실행 방식, 번들링, Storybook 설정, 배포를 변경할 때 사용합니다.
- Expo / Storybook / GitHub Pages 운영 기준: `.agents/infra/infra.md`
- 공통 프로젝트 규칙: `.agents/rules/rules.md`

### 5. 워크플로우 / 태스크 관리
태스크 문서 생성, 상태 변경, 문서 동기화가 필요할 때 사용합니다.
- 태스크 생명주기 및 저장 규칙: `.agents/workflow/task-management.md`
- 태스크 파일 위치: `.agents/tasks/`

### 6. 규칙 / 템플릿
공통 기준이나 재사용 문서 형식을 수정할 때 사용합니다.
- 필수 구현 규칙과 가드레일: `.agents/rules/rules.md`
- 재사용 문서/체크리스트 템플릿: `.agents/templates/templates.md`

## 최종 동기화 규칙

- 작업 완료 후, 코드 변경이 관련 `.agents/` 문서에 반영되었는지 확인합니다.
- 컴포넌트 패턴, 토큰, 폴더 구조, Storybook 동작, 프로젝트 컨벤션이 바뀌면 같은 패스에서 대응 문서를 함께 수정합니다.
- 실제 프로젝트에 없는 Next.js 서버 라우팅, Tailwind 전용 규칙, 백엔드 API 가정 같은 문구는 넣지 않습니다.
