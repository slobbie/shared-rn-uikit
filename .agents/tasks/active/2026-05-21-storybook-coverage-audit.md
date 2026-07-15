# Storybook Coverage Audit

## Status
- Active
- Created: 2026-05-21
- Task link: `T2` from `2026-05-21-improve-storybook-playground-roadmap.md`
- Branch: `feature/storybook-foundation`

## Goal
Capture the current Storybook coverage baseline for `shared-rn-uikit` so the next work can prioritize story standardization, missing component coverage, and playground rollout in a controlled order.

## Audit Scope
- `shared/ui/atoms/`
- `shared/ui/molecules/`
- `shared/ui/layout/`
- `shared/ui/utils/`
- `stories/`
- representative story files currently used in the UI tree

## High-Level Summary
- Total story files found in `shared/ui/`: `23`
- Additional MDX docs page found: `1` (`stories/Configure.mdx`)
- Storybook coverage is strong for `atoms`, `layout`, and `utils`
- Storybook coverage is currently absent for `molecules`
- The current docs layer is still minimal and not yet structured as a contributor-facing documentation system
- Several stories use interactive local state, but there is no dedicated playground layer yet

## Coverage by Group

### Atoms
- Total components: `18`
- Components with stories: `16`
- Components without stories: `2`
- Coverage rate: `88.9%`

With stories:
- `avatar`
- `badge`
- `button`
- `checkbox`
- `modal`
- `progressBar`
- `radio`
- `segmentedControl`
- `skeleton`
- `slider`
- `switch`
- `textArea`
- `textInput`
- `toast`
- `tooltip`
- `typo`

Missing stories:
- `divider`
- `spacer`

### Molecules
- Total components: `7`
- Components with stories: `0`
- Components without stories: `7`
- Coverage rate: `0%`

Missing stories:
- `avatar`
- `badge`
- `checkbox`
- `chip`
- `progress`
- `radio`
- `switch`

Additional note:
- `shared/ui/molecules/switch/` currently has no `index.tsx`, unlike the rest of the group. This is not a Storybook issue by itself, but it is a small API-surface consistency signal worth checking during later cleanup.

### Layout
- Total components: `4`
- Components with stories: `4`
- Coverage rate: `100%`

Covered components:
- `accordion`
- `card`
- `container`
- `grid`

### Utils
- Total components: `3`
- Components with stories: `3`
- Coverage rate: `100%`

Covered components:
- `clickable`
- `errorBoundary`
- `loading`

## Structural Observations

### 1. Story placement pattern
Current stories are colocated in component folders.
This matches the current project rule and should be preserved unless a later reorganization has a clear benefit.

### 2. Title taxonomy
Current story titles follow these group patterns:
- `Atoms/*`
- `Layout/*`
- `Utils/*`

No `Molecules/*` stories currently exist because molecule coverage is missing.

### 3. Docs layer depth
Only one MDX docs page is currently present:
- `stories/Configure.mdx`

This confirms the docs layer is still closer to a basic setup page than a structured documentation portal.

## Story Authoring Pattern Findings

### Current strengths
- Existing stories generally use `Meta` + `StoryObj`
- Existing stories commonly define `argTypes`
- Existing stories commonly define `args`
- Existing stories often use `render` functions for composition-heavy previews
- Some stories already demonstrate local state interaction with `useState`

### Current gaps
- There is no dedicated playground story tier separated from reference stories
- There are no `play`-based interaction stories found
- No explicit `tags` usage was found in current story files
- Story depth is uneven across components: some stories are close to reference examples, others are closer to mini demos
- Molecules are missing entirely from Storybook, creating a gap between atom-level previews and layout-level previews

## Interactive Story Findings
Stories using local state exist in:
- `atoms/progressBar`
- `atoms/segmentedControl`
- `atoms/slider`
- `atoms/modal`
- `atoms/switch`
- `atoms/checkbox`
- `atoms/radio`
- `atoms/toast`

Interpretation:
- the team is already using Storybook as a light interaction surface
- but the interaction pattern is still embedded ad hoc inside individual stories rather than designed as a reusable playground approach

## Browser-Only Preview Signals
Current preview-only interaction examples include `alert()` usage in:
- `shared/ui/utils/errorBoundary/ErrorBoundary.stories.tsx`
- `shared/ui/layout/card/Card.stories.tsx`

Interpretation:
- this is acceptable as preview-only behavior
- but these cases should remain isolated and must not influence the long-term shared component API

## Priority Findings

### Priority 1 — Highest impact
1. Add molecule stories
   - This is the largest coverage gap in the current Storybook.
   - Without this layer, Storybook jumps from primitives to layout too abruptly.

2. Standardize story authoring rules before adding many new stories
   - Molecule coverage should not be added in an inconsistent style.
   - The next task should define baseline rules for `args`, `argTypes`, naming, state coverage, and reference-vs-playground separation.

### Priority 2 — Fast wins
3. Add missing atom stories for:
   - `divider`
   - `spacer`

4. Expand docs coverage beyond `stories/Configure.mdx`
   - Introduction
   - Theme / Token
   - Component Guidelines
   - Contribution Guide
   - Playground Guide

### Priority 3 — After standardization
5. Introduce playground v1 for selected high-value atoms
   - `button`
   - `textInput`
   - `checkbox`
   - `radio`
   - `switch`

6. Add token/theme visualization pages
   - color tokens
   - typography scale
   - spacing scale
   - semantic theme mappings

## Recommended Execution Order from This Audit
1. `T3` story authoring rules
2. add missing atom stories (`divider`, `spacer`) as part of the new standard
3. first molecule batch: `chip`, `radio`, `checkbox`, `switch`
4. second molecule/layout polish batch: `progress`, `avatar`, `badge`
5. docs restructure
6. playground v1

## Suggested First Implementation Slice
Use this as the most practical first execution unit after the audit:
- define story standard
- upgrade `button`, `textInput`, `checkbox` as reference examples
- add `divider` and `spacer` stories
- add first molecule stories for `chip` and `radio`
- commit as one bounded Storybook foundation task

## Validation Notes
- This audit is based on live repository inspection, not assumption.
- Local Storybook build mismatch remains relevant for later validation work:
  - local Node observed earlier: `16.13.0`
  - Storybook build requirement observed earlier: Node 18+
- This audit does not change build/runtime behavior; it documents the current coverage baseline.

## Completion Conditions
- [x] Current Storybook files inspected
- [x] Component-group coverage counted
- [x] Missing coverage list recorded
- [x] Structural gaps and priorities documented
- [x] Next execution order proposed

## Progress Log
- 2026-05-21: audited story files and component folders under `shared/ui/`
- 2026-05-21: documented missing molecule coverage and missing atom stories
- 2026-05-21: documented docs/playground gaps and recommended execution order
