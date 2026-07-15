# Storybook Story Authoring Rules

## Status
- Active
- Created: 2026-05-21
- Task link: `T3` from `2026-05-21-improve-storybook-playground-roadmap.md`
- Branch: `feature/storybook-foundation`

## Goal
Define the standard way this project writes and evolves Storybook stories so coverage can grow without style drift, and so later playground work builds on a stable foundation.

## Why This Task Exists
The current Storybook already contains useful examples, but the style is still uneven.
Before adding missing atom and molecule stories, the project needs one clear baseline for:
- story purpose
- story structure
- state coverage
- interactive preview handling
- browser-only preview boundaries

## Applies To
- `shared/ui/atoms/*/*.stories.tsx`
- `shared/ui/molecules/*/*.stories.tsx`
- `shared/ui/layout/*/*.stories.tsx`
- `shared/ui/utils/*/*.stories.tsx`
- future playground-oriented stories and docs pages

## Core Principle
Storybook is a preview and documentation surface.
It demonstrates shared component behavior, but it must not become the place that defines or distorts the real shared component API.

## Story Types

### 1. Reference Stories
Use for the baseline representation of a component.
These should show the public API in the clearest and simplest way.

Examples:
- default state
- key variant state
- disabled state
- size differences

Preferred shape:
- rely on `args`
- keep `render` minimal or unnecessary
- optimize for readability

### 2. Interactive Stories
Use when a component needs local state to demonstrate realistic behavior.
These are still regular stories, but they go beyond static prop snapshots.

Examples:
- checkbox toggle
- radio group selection
- modal open/close
- toast visible/hidden flow

Preferred shape:
- use `render` with local state only when the interaction is important to understand the component
- keep the local state small and explicit
- avoid turning every story into a mini app

### 3. Playground Stories
Use for deliberate prop experimentation.
These should be introduced after the reference story baseline is already clean.

Examples:
- high-value atoms with controls-driven prop exploration
- composition sandboxes for multiple shared components

Preferred shape:
- keep separate from baseline reference stories when the purpose is experimentation rather than documentation
- clearly label the story as playground-oriented

## File Placement Rules
- Keep stories colocated with the component in the same folder.
- Continue the existing filename convention: `ComponentName.stories.tsx`.
- Do not move stories into a centralized stories folder unless the project later adopts that intentionally.

## Title Rules
Follow the current taxonomy:
- `Atoms/*`
- `Molecules/*`
- `Layout/*`
- `Utils/*`

Examples:
- `Atoms/Button`
- `Molecules/Chip`
- `Layout/Card`
- `Utils/Loading`

Rules:
- The title must reflect the component group, not product context.
- Use singular component names unless the component is intentionally plural.
- New molecule stories must use the `Molecules/*` namespace.

## Meta Rules
Each story file should start from a consistent `meta` definition.

Required baseline:
- `title`
- `component`
- `argTypes` when the component has controllable public props

Add when relevant:
- `parameters.layout`
- `parameters.docs`
- `args`

Preferred pattern:
```ts
const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
  args: {
    variant: 'primary',
  },
} satisfies Meta<typeof Button>;
```

## Args Rules
Use `args` for the default public configuration of the story.

Guidelines:
- Put the most common usage in `args`
- Prefer stable defaults over extreme or edge-case values
- Avoid hiding important setup inside `render` when it can live in `args`
- If many stories share the same baseline, keep it in meta-level `args`

Good use cases:
- default label text
- default variant
- default size
- disabled false

## ArgTypes Rules
Use `argTypes` only for meaningful public controls.

Include when:
- the prop is useful to explore in Storybook controls
- the prop has a clear set of selectable values
- the prop helps compare variants or states

Avoid when:
- the prop is implementation noise
- the prop is too low-level to help documentation
- the prop is not safe or meaningful to manipulate in preview

Preferred controls:
- `text`
- `boolean`
- `number`
- `select`
- `radio`

## Parameters Rules
Use `parameters` intentionally, not mechanically.

Recommended uses:
- `layout: 'centered'` for isolated atoms or compact components
- other layout settings only when they help readability

Do not add parameter noise that does not improve the preview.

## Render Rules
Use `render` only when it materially improves the preview.

Use `render` for:
- composition examples
- local state interaction
- wrapper layout needed for readability
- grouped variant comparison in one story

Avoid `render` for:
- simple default stories that can be expressed with `args`
- hiding the actual public API behind unnecessary helper code

Rule of thumb:
- if `args` alone can explain the component, prefer `args`
- if behavior or composition must be shown, use `render`

## State Coverage Rules

### Atoms
At minimum, consider these story states when relevant:
- default
- main variants
- disabled
- size differences
- notable visual states such as error, selected, checked, active

### Molecules
At minimum, consider:
- default composition
- realistic usage example
- empty/long/dense content edge case when applicable
- disabled or unavailable child interaction when relevant

### Layout
At minimum, consider:
- baseline layout usage
- key variants
- real content composition
- interactive example only if layout behavior itself needs it

### Utils
At minimum, consider:
- simplest valid usage
- one practical integration-shaped example
- edge case only if it changes understanding of the utility

## Reference vs Comparison vs Playground Separation
Do not mix every purpose into one story file section without intent.

Recommended order inside a story file:
1. `Default`
2. core variant stories
3. state stories
4. comparison/composition stories
5. interactive or playground-style stories

This keeps the Storybook page readable for both quick browsing and deeper exploration.

## Local State Rules
Using `useState` in stories is allowed when the interaction helps understanding.

Requirements:
- keep state local to the story
- keep the state shape minimal
- do not recreate application flows unnecessarily
- use clear names like `checked`, `value`, `visible`, `selectedIndex`

Bad pattern:
- large demo logic that obscures what the component actually does

Good pattern:
- a tiny state wrapper that demonstrates the interaction contract

## Browser-Only Preview Boundary Rules
Preview-only browser helpers may exist, but they must stay isolated.

Allowed examples:
- `alert()` in a demo-only click handler
- lightweight placeholder callbacks for docs previews

Rules:
- never redesign the shared API around browser-only preview behavior
- never let browser-only convenience leak into shared component naming or props
- if a story needs browser-only behavior, make that boundary obvious in the story body

## Docs and Description Rules
Use descriptions where they improve clarity, especially for:
- variant meaning
- prop intent
- behavior differences
- playground-only caveats

Do not over-document obvious props just to fill space.

## Naming Rules for Exported Stories
Story export names should be short and readable.

Preferred examples:
- `Default`
- `Disabled`
- `Outlined`
- `Sizes`
- `WithAvatar`
- `Interactive`
- `Playground`

Avoid vague names such as:
- `Example1`
- `Test`
- `Demo2`

## Initial Standard Targets
Use these components first when applying the new standard:
- `button`
- `textInput`
- `checkbox`
- `divider`
- `spacer`
- first molecule batch: `chip`, `radio`, `checkbox`, `switch`

## Recommended Next Execution Order
1. apply this standard to selected atom reference stories
2. add missing atom stories for `divider` and `spacer`
3. create first molecule stories under `Molecules/*`
4. introduce a separate playground layer only after the reference baseline is clean

## Validation Checklist
- [ ] story file is colocated with the component
- [ ] title matches taxonomy (`Atoms`, `Molecules`, `Layout`, `Utils`)
- [ ] baseline usage is visible without unnecessary helper code
- [ ] `args` are used for the common public state
- [ ] `argTypes` expose only meaningful public controls
- [ ] `render` is used only when it improves clarity
- [ ] key component states are covered
- [ ] browser-only preview behavior stays preview-only
- [ ] story purpose is clear: reference, interactive, or playground

## Progress Log
- 2026-05-21: documented the first shared story-writing baseline from live repository patterns
- 2026-05-21: aligned the standard with current coverage findings and future playground direction
