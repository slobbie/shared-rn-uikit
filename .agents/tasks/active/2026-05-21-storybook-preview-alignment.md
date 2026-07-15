# Storybook Preview / Decorator / Provider Alignment

## Status
- Active
- Created: 2026-05-21
- Task link: `T4` from `2026-05-21-improve-storybook-playground-roadmap.md`
- Branch: `feature/storybook-foundation`

## Goal
Document the current Storybook preview environment and define how decorators/providers should be normalized before broader story expansion and playground work continue.

## Why This Task Exists
Current Storybook rendering already has a global `ThemeProvider`, but preview shaping is still split across many individual stories.
Before adding more stories, the project should make the preview environment more consistent so authors do not keep rebuilding the same wrappers story by story.

## Current Baseline

### Global preview
Current `.storybook/preview.ts` does:
- global controls matcher setup
- global `ThemeProvider` wrapping for all stories

Current preview does **not** yet provide:
- shared width/container decorator for composition stories
- shared surface/background presets
- shared spacing wrapper strategy
- clearly documented preview-mode categories
- central dark/light or theme switching policy

### Storybook config facts
Current `.storybook/main.ts` already supports:
- RN-web Storybook flow
- shared alias `@shared`
- addon essentials, a11y, docs
- RN-web transpilation/babel handling

Interpretation:
- infra is already capable enough for richer preview setup
- the next need is standardization, not another major tooling layer

### Theme provider fact
Current `ThemeProvider` in `shared/utils/lib/ThemeContext.tsx` already gives stories access to the shared theme layer.
That means later preview improvements should build around the existing provider rather than introducing a parallel theme context.

## Current Preview Friction Found in Stories

### 1. Repeated `layout: 'centered'`
This appears across many atom/layout/utils stories.
Interpretation:
- centered layout is a common need
- but it is not enough by itself for composition-heavy stories

### 2. Repeated fixed-width wrappers
Many stories manually use wrappers like:
- `width: 320`
- `width: 300`
- `minWidth: 150`
- large local padding shells

Interpretation:
- authors are repeatedly recreating a compact device-like canvas
- this should be normalized into a shared preview pattern instead of reimplemented ad hoc

### 3. Repeated ad hoc surfaces/backgrounds
Many stories locally define background blocks and spacing shells.
Interpretation:
- the project needs a shared preview surface convention
- otherwise visual comparisons stay inconsistent across files

### 4. Preview-only interaction shells exist, but inconsistently
Some stories use local wrappers for modal/toast/tooltip/card interaction demos.
Interpretation:
- interactive previews are valid
- but the surrounding environment should become more predictable

## Standardization Direction

### A. Keep one global provider layer
Use global preview decorators for environment-level concerns only.

Global decorator responsibilities should include:
- theme provider
- future shared preview shell when safe
- future global mode toggles only if they apply broadly

Global decorators should **not**:
- impose a narrow width on every story
- force one background treatment on all components
- hide component-specific layout needs

### B. Separate environment decorators from story layout wrappers
Use this split:
- global decorators for universal environment
- local `render` wrappers for component-specific presentation
- optional reusable helper wrappers for repeated story canvas patterns

This avoids overloading `.storybook/preview.ts` with assumptions that only fit one subset of stories.

### C. Introduce named preview modes later
The project should move toward a few reusable preview shapes.
Recommended categories:
- `centered-isolated`: for compact atoms
- `content-width`: for cards, accordions, grouped controls, or list-like composition
- `surface-preview`: for components that need visible contrast against a surface
- `overlay-demo`: for tooltip, toast, modal-like demos

These do not need to become full implementation immediately, but future story work should align toward these categories.

## Recommended Rules

### 1. Global Preview Rules
Keep in `.storybook/preview.ts`:
- global provider wiring
- generic controls behavior
- only broadly valid decorators

Do not put into the global preview yet:
- one-size-fits-all width shell
- one hardcoded page background for every story
- behavior that only works for overlays or card-like layouts

### 2. Width / Canvas Rules
When a story needs a constrained width, prefer a consistent wrapper pattern instead of arbitrary repeated values.

Recommended compact content width baseline:
- `320` as the first common canvas for card/accordion/form-like previews

Recommended rule:
- if a story needs a content-width wrapper, use one shared convention instead of inventing a new width each time unless there is a real reason

### 3. Surface / Background Rules
When visual contrast matters, use a deliberate preview surface wrapper.

Recommended rule:
- prefer one neutral preview surface approach for demos that need card/background contrast
- avoid many one-off gray blocks with unrelated colors unless the story is explicitly comparing color behavior

### 4. Overlay Story Rules
Tooltip, toast, and modal-like stories may need extra padding or trigger shells.

Recommended rule:
- keep those wrappers local to the story or in a reusable overlay preview helper
- do not force overlay assumptions onto unrelated components through the global decorator

### 5. Theme Rules
All stories should continue to rely on the shared `ThemeProvider`.

Recommended rule:
- if a story needs theme variation later, extend the existing provider path rather than adding a second theme mechanism
- theme switching, if introduced, should be explicit and documented as a preview feature

## Suggested Implementation Direction

### Phase 1 — Documentation and consistency
- document preview categories
- standardize width/surface wrapper expectations
- identify stories with obviously duplicated preview shells

### Phase 2 — Reusable preview helpers
Potential future additions:
- shared preview canvas wrapper
- shared content-width wrapper
- shared surface wrapper
- shared overlay demo wrapper

These helpers should live close to Storybook preview concerns, not inside shared component public APIs.

### Phase 3 — Optional preview enhancements
Only after the baseline is stable:
- theme mode switching
- viewport presets
- more explicit docs integration for preview categories

## Immediate Candidate Targets for T4 Follow-up
Best first stories to normalize after this:
- `Card.stories.tsx`
- `Accordion.stories.tsx`
- `Tooltip.stories.tsx`
- `Toast.stories.tsx`
- `Modal.stories.tsx`
- `Container.stories.tsx`

These have enough local wrapper logic to benefit from shared preview conventions.

## Risks
- moving too much into the global decorator can make simple stories harder to reason about
- keeping everything local preserves flexibility but creates long-term inconsistency
- adding preview helpers inside shared UI folders could blur the line between component API and Storybook-only support code

## Recommended Next Execution Order
1. confirm this T4 direction
2. add a small preview convention doc or helper strategy
3. normalize 2-3 representative stories first
4. only then expand the pattern across more stories

## Validation Checklist
- [x] current `.storybook/preview.ts` reviewed
- [x] current `.storybook/main.ts` reviewed
- [x] current shared `ThemeProvider` reviewed
- [x] repeated layout/wrapper patterns identified
- [x] standardization direction documented without changing runtime yet
- [x] reusable preview wrapper file added
- [x] representative target stories normalized with shared wrappers

## Progress Log
- 2026-05-21: reviewed global preview and theme provider setup
- 2026-05-21: identified repeated width/background/layout wrappers across stories
- 2026-05-21: documented normalization direction before runtime changes
- 2026-05-21: added `.storybook/previewWrappers.tsx` with `StorybookContentWidth`, `StorybookSurface`, and `StorybookOverlayCanvas`.
- 2026-05-21: normalized representative stories: `Card`, `Container`, `Tooltip`, `Toast`, `Modal`.
