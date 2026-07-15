<!-- This document must be maintained simultaneously with .agents/infra/infra.ko.md -->

# Infra

## Runtime / Tooling Summary

Current project tooling confirmed from the repository:
- Package manager: Yarn
- App runtime shell: Expo / Expo Router
- Browser documentation runtime: Storybook with webpack5
- RN-to-browser adaptation: `@storybook/addon-react-native-web`
- Deployment target: GitHub Pages
- CI pipeline: `.github/workflows/deploy-storybook.yml`

## Important Environment Facts

- Local current Node version observed during validation: `16.13.0`
- Current Storybook build requirement observed during validation: Node 18+
- Result: local `yarn build-storybook` currently fails until Node is upgraded

This must be treated as an environment constraint, not a hidden failure.

## Primary Commands

Use Yarn commands.

- App start: `yarn start`
- iOS preview: `yarn ios`
- Android preview: `yarn android`
- Web preview: `yarn web`
- Lint: `yarn lint`
- Storybook dev: `yarn storybook`
- Storybook build: `yarn build-storybook`

## Storybook Runtime Notes

Storybook is configured under `.storybook/`.
Important files:
- `.storybook/main.ts`
- `.storybook/preview.ts`
- `.storybook/manager.ts`
- `.storybook/SlobbieTheme.ts`
- `.storybook/babel.config.js`

Current behavior:
- `ThemeProvider` is applied globally via Storybook preview decorator
- `@shared` alias is configured for Storybook webpack resolution
- RN-focused code is transpiled for browser preview

Infra implication:
- Storybook is not a passive docs site; it is part of the compatibility surface for previewing RN-oriented shared UI in a browser context

## CI / Deployment Notes

Current deployment workflow:
- Trigger: push to `main` or manual dispatch
- Runner: `ubuntu-latest`
- Node: `20`
- Install: `yarn install`
- Build: `yarn build-storybook`
- Deploy output: `storybook-static`
- Target: GitHub Pages

This means CI already expects a modern Node runtime even if local development does not currently match it.

## Infra Risks

### 1. Local / CI Runtime Drift
- CI uses Node 20
- local machine observed with Node 16.13.0
- Storybook build already fails locally because of this mismatch

### 2. Package Manager Drift
- Repository currently contains both `yarn.lock` and `package-lock.json`
- Operationally, Yarn should remain the canonical package manager unless the project explicitly changes direction

### 3. Storybook Package Version Drift
Some Storybook packages appear mixed across major/minor lines.
This should be treated as a maintenance risk and checked before major Storybook upgrades or debugging sessions.

## Operational Guardrails

- Do not change the package manager without explicit approval.
- Do not introduce additional bundler complexity unless the current Storybook / Expo boundary proves insufficient.
- When changing Storybook config, verify whether the change affects:
  - alias resolution
  - RN web transpilation
  - ThemeProvider wrapping
  - GitHub Pages output path
- When changing CI, keep local and CI runtime assumptions documented together.

## Future Cross-Platform Infra Direction

As the project evolves toward React + React Native shared usage, infra decisions should separate:
- shared package/runtime requirements
- browser documentation requirements
- native preview requirements

Do not assume one runtime configuration will automatically fit all three.

## Documentation Sync Requirement

Update this document whenever these change:
- Node version expectations
- package manager decision
- Storybook runtime/bundler setup
- deployment workflow
- Expo preview commands or structure
