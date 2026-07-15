<!-- This document must be maintained simultaneously with .agents/rules/rules.ko.md -->

# Rules

## Core Standards

- Use Yarn commands for install, run, and build flows.
- Treat `.agents/` as the mandatory operational instruction tree.
- Prefer non-`.ko.md` files in `.agents/` as source of truth.
- Do not introduce project-foreign guidance such as Next.js server routing or Tailwind-only assumptions unless the project actually adopts them.

## Shared UI Implementation Rules

### 1. Theme First
- Prefer theme and semantic theme values over hardcoded visual values.
- Use `useTheme()` and shared theme layers before introducing local color systems.
- If a new visual token is needed, extend the token/theme model rather than scattering repeated literals.

### 2. Cross-Platform Direction First
- New shared UI work must be evaluated for React and React Native reuse potential.
- Do not let browser-only Storybook convenience APIs define the long-term shared component contract.
- Keep shared props platform-neutral where practical.
- Isolate platform-specific behavior at the implementation boundary, not in naming or public API unless the difference is intentional.

### 3. Component Boundary Discipline
- Atoms must stay primitive.
- Molecules must stay compositional and product-agnostic.
- Layout components must not absorb business-specific logic.
- Utils must stay reusable across many components or previews.

### 4. API Surface Discipline
- Prefer aggregated exports for shared consumption.
- Do not force consumers to depend on deep internal file paths unless intentionally public.
- When introducing a component family with clear variants, prefer a grouped API such as a compound component pattern.

## Styling Rules

- Use Emotion / React Native-compatible styling patterns already present in the codebase.
- Avoid introducing a second competing styling system without explicit approval.
- Prefer semantic names over presentational names when extending theme structure.
- Minimize raw color literals inside components.
- Keep spacing, radius, and visual states consistent with token-driven patterns whenever possible.

## Storybook Rules

### Story Placement
- Keep stories close to the component when the existing local colocated pattern is already used.
- Use clear Storybook titles that reflect the component taxonomy such as `Atoms/*`, `Layout/*`, and similar groupings.

### Story Quality
- Every shared component that is part of the intended public UI surface should have a story unless there is a documented reason not to.
- Prefer `args` and `argTypes` for controllable variants.
- Include stories for key states such as default, disabled, variant differences, and notable interaction states.
- If a story uses browser-only helpers such as `alert()`, treat it as preview-only behavior and do not let that leak into shared component logic.

### Storybook vs Source-of-Truth
- Storybook demonstrates components; it does not redefine them.
- Do not contort the core component API purely to satisfy Storybook rendering.

## Expo / Preview App Rules

- `app/` is a preview and exploration surface, not the primary domain source of truth for shared component contracts.
- Preview screens may demonstrate usage, but shared components should remain independent from app-specific routing assumptions.

## Dependency Rules

- Do not add new packages without explicit user approval.
- Before introducing a web-only or RN-only dependency into shared code, evaluate whether it harms cross-platform direction.
- If a capability is platform-specific, document the boundary first.

## Validation Rules

- After structural or documentation changes, re-check `.agents/` references and project alignment.
- After Storybook-related changes, verify build/runtime assumptions against the local environment.
- Environment issues must be recorded explicitly. Current known issue: local Node version is `16.13.0`, while current Storybook build requires Node 18+.

## Documentation Sync Rules

Update `.agents/` documents in the same pass when changing:
- shared component taxonomy
- Storybook organization
- theme/token architecture
- Expo preview structure
- cross-platform React / React Native strategy
