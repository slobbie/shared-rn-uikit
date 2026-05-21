# AGENTS.md

## Absolute Routing Rule

- In this repository, agents must always inspect the project-root `.agents/` folder before doing any substantial work.
- `.agents/` is the authoritative instruction tree for this project.
- If `.agents/` and other docs conflict, follow `.agents/`.
- Do not treat this file as the full operating guide; use it only as the mandatory entrypoint that routes work into `.agents/`.

## Required Read Order

1. Read `.agents/global.md` first.
2. Then read the most relevant document under `.agents/` for the task.
3. For UI / Storybook / component work, prioritize:
   - `.agents/roles/frontend/frontend-engineer.md`
   - `.agents/domain/domain.md`
   - `.agents/rules/rules.md`
   - `.agents/infra/infra.md`
4. If task tracking or documentation sync is needed, also inspect:
   - `.agents/workflow/task-management.md`
   - `.agents/tasks/`

## Documentation Priority

- Operational source of truth: non-`.ko.md` documents inside `.agents/`
- Human reference only: `.ko.md` files and `.agents/README.md`

## Project Scope Reminder

This repository is `shared-rn-uikit`.
Current focus is shared UI, Storybook, Expo, theming, and cross-platform component evolution for React / React Native.
