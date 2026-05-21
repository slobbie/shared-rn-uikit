# Storybook Theme / Token Visibility

## Status
- Active
- Created: 2026-05-21
- Task link: `T7` from `2026-05-21-improve-storybook-playground-roadmap.md`
- Branch: `feature/storybook-foundation`

## Goal
Make the current theme/token layer visible inside Storybook so contributors can inspect foundation values before or alongside component changes.

## Why This Task Exists
The project already has a token-driven theme pipeline, but Storybook currently exposes almost none of that system directly.
Contributors can browse components, yet still cannot quickly answer:
- what the base color tokens are
- how semantic colors map from token values
- what typography scale is available
- what spacing scale exists

## Current Inputs Reviewed
- `shared/utils/lib/themeToken.ts`
- `shared/utils/lib/themeToken/typoToken/typoToken.ts`
- `shared/utils/lib/createTheme.ts`
- `shared/utils/lib/createSemanticTheme.ts`
- `shared/utils/lib/ThemeContext.tsx`
- `stories/Configure.mdx`

## Implementation Direction
Create a Storybook foundation-level token visibility surface that shows:
1. base color / variant / background tokens
2. semantic theme mappings derived from tokens
3. typography scale preview
4. spacing scale preview

## Rules
- keep this as Storybook-only documentation/preview
- do not move preview helpers into shared component public APIs
- visualize the current source-of-truth token values, not duplicated hardcoded alternatives
- prefer a contributor-facing browsing surface over decorative marketing docs

## Candidate Output
- `stories/ThemeTokens.stories.tsx`
- optional follow-up MDX restructuring later under `T8`

## Validation Checklist
- [x] token/theme source files reviewed
- [x] token visibility story added
- [x] semantic theme mapping preview included
- [x] typography scale preview included
- [x] spacing scale preview included
- [x] `yarn tsc --noEmit` passes after the change

## Progress Log
- 2026-05-21: reviewed token, semantic theme, typography, and Storybook docs baseline before implementation.
- 2026-05-21: added `stories/ThemeTokens.stories.tsx` for base tokens, semantic mappings, typography scale, and spacing scale preview.
- 2026-05-21: verified the change with `yarn tsc --noEmit`.
