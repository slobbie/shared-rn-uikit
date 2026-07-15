<!-- 이 문서는 .agents/templates/templates.md 와 동시에 유지보수되어야 합니다. -->

# 템플릿

## 용도

이 폴더는 프로젝트 규칙이 아니라 **반복해서 쓰는 문서 형식**을 위한 곳입니다.
같은 구조의 문서를 자주 만들게 되면 에이전트가 표준 형식에서 바로 시작할 수 있어야 합니다.

## 이 프로젝트에 추천하는 템플릿 묶음

### 1. Shared Component 추가 템플릿
새 atom / molecule / layout / utils 컴포넌트를 추가할 때 사용합니다.

권장 형식:
- 컴포넌트 이름
- taxonomy (`atom` / `molecule` / `layout` / `utils`)
- 목적
- Public API
- Variants
- Theme/token 의존성
- 플랫폼별 고려사항
- Export 경로
- Story 요구사항
- 검증 체크리스트

### 2. Story 추가 템플릿
Storybook coverage를 추가하거나 개선할 때 사용합니다.

권장 형식:
- Story title
- 대상 컴포넌트
- 필수 상태
- Controls / argTypes
- 브라우저 전용 preview 동작
- 접근성 또는 interaction 메모
- 남은 공백 / 후속 story

### 3. Theme Token 변경 템플릿
토큰이나 semantic theme 필드를 추가/이름변경/재구성할 때 사용합니다.

권장 형식:
- Token 이름
- 계층 (`base token` / `semantic theme`)
- 변경 이유
- 영향 받는 컴포넌트
- Storybook 영향
- Expo preview 영향
- 크로스 플랫폼 영향
- 마이그레이션 메모

### 4. 크로스 플랫폼 결정 템플릿
React / React Native에서 shared UI API를 어떻게 맞출지 결정할 때 사용합니다.

권장 형식:
- 문제 정의
- 공통 동작
- React 전용 동작
- React Native 전용 동작
- 선택한 API surface
- 이 경계를 선택한 이유
- 리스크
- 후속 태스크

### 5. Storybook 개선 태스크 초안 템플릿
문서화나 preview 개선 작업을 계획할 때 사용합니다.

권장 형식:
- 목표
- 현재 제약
- 영향 파일/폴더
- 제안 변경사항
- 검증 방법
- 런타임/환경 전제
- 리스크

## 템플릿 규칙

- 템플릿은 복사해서 빠르게 채울 수 있을 정도로 짧게 유지합니다.
- 필수 기술 규칙은 여기에 넣지 말고 `.agents/rules/rules.md`에 둡니다.
- 템플릿 안에 체크리스트가 들어갈 수는 있지만, 그것을 강제하는 규칙 자체는 rules 문서에 둡니다.
- 같은 작업 패턴이 2~3번 이상 반복되면 이 파일에서 템플릿화할지 검토합니다.

## 문서 동기화 규칙

다음 상황이면 이 파일을 갱신합니다.
- 프로젝트에 반복되는 문서 패턴이 생겼을 때
- 반복되는 Storybook 작업 흐름에 표준 초안 형식이 필요해졌을 때
- 크로스 플랫폼 결정 기록 형식을 고정할 필요가 생겼을 때
