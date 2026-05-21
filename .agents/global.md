# Global Agent Rules

## Documentation Priority Rules

- Files ending with `.ko.md` are human-only reference documents.
- `README.md` files under `.agents/` are human-facing overview documents, not operational instructions.
- Agents must never use `.ko.md` or `README.md` files as operational instructions.
- Agents must use non-`.ko.md` documents under `.agents/` as the working source of truth.
- If localized and non-localized documents both exist, the non-`.ko.md` version is the single source of truth unless the file is a `README.md`.
- Agents must prioritize concise operational documents over descriptive overview documents.

## Project Scope

This `.agents/` tree is for the `shared-rn-uikit` project.

Current project facts:
- Stack: Expo, Expo Router, React Native, TypeScript, Emotion, Storybook
- Package manager: Yarn
- Main UI source: `shared/ui/`
- Main app shell / preview routes: `app/`
- Shared utilities and theme: `shared/utils/lib/`
- Storybook config: `.storybook/`

Inactive copied role folders may remain in `.agents/roles/`, but they are not the primary routing targets for this project unless the user explicitly reactivates them.

## Task-Specific Routing Guide

Before execution, identify the task category and follow the matching path.

### 1. UI / Frontend Development
Use this path for user-facing components, screen previews, styling, or component APIs.
- Primary role document: `.agents/roles/frontend/frontend-engineer.md`
- Shared component implementation: `.agents/domain/domain.md` and `.agents/rules/rules.md`
- App-level preview routes and Expo Router structure: `app/` plus `.agents/domain/domain.md`
- Storybook work: `.agents/infra/infra.md` and `.agents/rules/rules.md`

### 2. Domain / UI Kit Structure
Use this path when the task is about component taxonomy, naming, exports, theming, or token meaning.
- Domain model and UI kit structure: `.agents/domain/domain.md`
- Shared implementation rules: `.agents/rules/rules.md`

### 3. Testing / Quality
Use this path when validating components, reviewing regressions, or checking stories/build output.
- Testing strategy and validation references: `.agents/testing/`
- Task execution / progress handling: `.agents/workflow/task-management.md`
- Shared rules that affect review: `.agents/rules/rules.md`

### 4. Infrastructure / Tooling
Use this path when changing execution, bundling, Storybook config, or deployment.
- Expo / Storybook / GitHub Pages operations: `.agents/infra/infra.md`
- Shared project rules: `.agents/rules/rules.md`

### 5. Workflow / Task Management
Use this path when creating task docs, updating task status, or syncing documentation.
- Task lifecycle and storage rules: `.agents/workflow/task-management.md`
- Task files: `.agents/tasks/`

### 6. Rules / Templates
Use these paths when editing shared standards or reusable document shapes.
- Mandatory implementation rules and guardrails: `.agents/rules/rules.md`
- Reusable document/checklist templates: `.agents/templates/templates.md`

## Final Sync Rule

- After task completion, verify that code changes are reflected in the related `.agents/` documents when applicable.
- If a task changes component patterns, tokens, file structure, Storybook behavior, or project conventions, update the matching `.agents/` documents in the same pass.
- Do not introduce project-foreign guidance such as Next.js server routing, Tailwind-only styling rules, or backend API assumptions unless the project actually adopts them.
