# Storybook Docs Restructure

## Status
- Active
- Created: 2026-05-21
- Task link: `T8` from `2026-05-21-improve-storybook-playground-roadmap.md`
- Branch: `feature/storybook-foundation`

## Goal
Restructure the Storybook docs layer so a new contributor can understand the UI kit, theme/token system, story conventions, and future playground direction without reverse-engineering the component tree.

## Why This Task Exists
The current docs surface is too thin.
Only one MDX page exists, so Storybook still behaves more like a story listing than a contributor-friendly documentation entrypoint.

## Current Baseline
- existing docs page count: 1 (`stories/Configure.mdx`)
- theme/token visibility now exists as `stories/ThemeTokens.stories.tsx`
- story rules and preview conventions already exist in `.agents/tasks/active/`

## Recommended Sections
- Introduction
- Getting Started
- Theme / Token
- Component Guidelines
- Contribution Guide
- Playground Guide

## Implementation Direction
- keep docs pages under `stories/`
- use MDX pages for navigation and contributor-facing guidance
- point theme/token documentation toward the new `Foundations/Theme Tokens` story
- keep implementation-neutral guidance here; detailed task tracking stays under `.agents/tasks/active/`

## Validation Checklist
- [x] current docs baseline reviewed
- [x] docs section pages added
- [x] docs entry content updated to match current Storybook scope
- [x] roadmap updated with T8 progress
- [x] `yarn tsc --noEmit` still passes

## Progress Log
- 2026-05-21: confirmed only one MDX docs page exists before restructuring.
- 2026-05-21: added docs pages for `Introduction`, `Getting Started`, `Theme and Tokens`, `Component Guidelines`, `Contribution Guide`, and `Playground Guide`.
- 2026-05-21: converted existing `Configure.mdx` into a lightweight legacy redirect page.
