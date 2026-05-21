<!-- 이 문서는 .agents/infra/infra.md 와 동시에 유지보수되어야 합니다. -->

# 인프라

## 런타임 / 툴링 요약

현재 저장소에서 확인한 툴링:
- 패키지 매니저: Yarn
- 앱 런타임 셸: Expo / Expo Router
- 브라우저 문서화 런타임: Storybook + webpack5
- RN → 브라우저 적응 레이어: `@storybook/addon-react-native-web`
- 배포 대상: GitHub Pages
- CI 파이프라인: `.github/workflows/deploy-storybook.yml`

## 중요한 환경 사실

- 검증 시점 로컬 Node 버전: `16.13.0`
- 검증 시점 Storybook 빌드 요구사항: Node 18+
- 결과: 현재 로컬에서는 Node 업그레이드 전까지 `yarn build-storybook`이 실패합니다.

이건 숨길 문제가 아니라, 명시적으로 기록해야 하는 환경 제약입니다.

## 주요 명령

이 프로젝트는 Yarn 기준으로 사용합니다.

- 앱 시작: `yarn start`
- iOS 프리뷰: `yarn ios`
- Android 프리뷰: `yarn android`
- Web 프리뷰: `yarn web`
- 린트: `yarn lint`
- Storybook 개발 서버: `yarn storybook`
- Storybook 빌드: `yarn build-storybook`

## Storybook 런타임 메모

Storybook 설정 위치: `.storybook/`
핵심 파일:
- `.storybook/main.ts`
- `.storybook/preview.ts`
- `.storybook/manager.ts`
- `.storybook/SlobbieTheme.ts`
- `.storybook/babel.config.js`

현재 동작:
- `ThemeProvider`를 preview decorator로 전역 적용
- `@shared` alias를 Storybook webpack에 설정
- RN 중심 코드를 브라우저 preview용으로 transpile

인프라 의미:
- Storybook은 단순 문서 사이트가 아니라, 브라우저에서 RN 중심 shared UI를 미리보기 위한 호환성 레이어의 일부입니다.

## CI / 배포 메모

현재 배포 워크플로우:
- 트리거: `main` 브랜치 push 또는 수동 실행
- 러너: `ubuntu-latest`
- Node: `20`
- 설치: `yarn install`
- 빌드: `yarn build-storybook`
- 배포 산출물: `storybook-static`
- 대상: GitHub Pages

즉 CI는 이미 최신 Node 런타임을 전제로 하고 있고, 로컬 개발 환경이 이를 따라가지 못하고 있습니다.

## 인프라 리스크

### 1. 로컬 / CI 런타임 불일치
- CI는 Node 20 사용
- 로컬은 Node 16.13.0 확인
- 이 차이 때문에 Storybook 빌드가 로컬에서 이미 실패함

### 2. 패키지 매니저 혼선
- 저장소에 `yarn.lock`과 `package-lock.json`이 같이 존재함
- 운영 기준은 명시적으로 방향이 바뀌기 전까지 Yarn이어야 함

### 3. Storybook 패키지 버전 혼선 가능성
일부 Storybook 패키지가 메이저/마이너 라인에서 섞여 보입니다.
큰 업그레이드나 디버깅 전에 유지보수 리스크로 보고 먼저 점검해야 합니다.

## 운영 가드레일

- 명시적 승인 없이 패키지 매니저를 바꾸지 않습니다.
- 현재 Storybook / Expo 경계가 부족하다고 검증되기 전에는 번들러 복잡도를 함부로 늘리지 않습니다.
- Storybook 설정을 바꿀 때는 아래 영향 범위를 함께 확인합니다.
  - alias resolution
  - RN web transpilation
  - ThemeProvider wrapping
  - GitHub Pages output path
- CI를 바꿀 때는 로컬/CI 런타임 전제를 함께 문서화합니다.

## 향후 크로스 플랫폼 인프라 방향

앞으로 React + React Native 공용 방향으로 갈 때는 인프라 결정을 아래로 분리해서 봐야 합니다.
- shared package/runtime 요구사항
- 브라우저 문서화 요구사항
- 네이티브 preview 요구사항

하나의 런타임 설정으로 셋 다 자동 해결된다고 가정하지 않습니다.

## 문서 동기화 규칙

다음이 바뀌면 이 문서를 함께 수정합니다.
- Node 버전 전제
- package manager 결정
- Storybook 런타임/번들러 설정
- 배포 워크플로우
- Expo preview 명령 또는 구조
