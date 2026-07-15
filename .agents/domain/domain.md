<!-- This document must be maintained simultaneously with .agents/domain/domain.ko.md -->

# Domain

## Project Domain Summary

This project is a shared UI kit centered on React Native components, but it is being evolved toward a cross-platform design system that can be used in both React and React Native contexts.

Current reality:
- The implementation source is RN-first.
- Storybook is used as the browser-facing documentation and preview layer.
- Expo / Expo Router provide a local preview app shell.
- Theme tokens and semantic theme mapping already exist and are the main abstraction layer that can support cross-platform growth.

## Primary Source Structure

- `shared/ui/atoms/`: primitive UI elements
- `shared/ui/molecules/`: composed UI blocks built from atoms
- `shared/ui/layout/`: structural layout components
- `shared/ui/utils/`: cross-cutting helper UI such as loading and error boundaries
- `shared/utils/lib/`: theme, tokens, context, merge utilities
- `app/`: Expo Router preview surface
- `.storybook/`: Storybook browser preview and docs config

## Component Taxonomy Rules

### Atoms
Use for the smallest reusable UI primitives.
Examples currently present:
- button
- typo
- textInput
- checkbox
- radio
- switch
- slider
- modal
- toast
- tooltip

Atoms should:
- expose the smallest practical API
- depend on theme and tokens rather than product-specific business state
- avoid knowledge of app flows or page structure

### Molecules
Use for composed components built from atoms.
Examples currently present:
- avatar
- badge
- chip
- progress
- radio group
- checkbox composition
- switch composition

Molecules should:
- combine atoms into a meaningful interaction unit
- stay product-agnostic
- avoid screen-specific layout assumptions

### Layout
Use for composition and structure.
Examples currently present:
- container
- grid
- card
- accordion

Layout components should:
- solve spacing, containment, arrangement, or structural hierarchy
- avoid domain-specific content assumptions

### Utils
Use for support UI with cross-cutting behavior.
Examples currently present:
- loading
- errorBoundary
- clickable

## Export Surface

The project already uses aggregated exports for shared consumption.
Current examples:
- `shared/ui/atoms/index.ts`
- `shared/ui/molecules/index.tsx`

This is an important domain rule:
- consumers should prefer aggregated exports when possible
- new shared component families should expose a stable app-facing API surface
- internal file paths should not become the long-term public contract unless intentionally designed that way

## Component API Patterns

### Compound Component Pattern
This is a first-class pattern in the project.
Examples:
- `Button.Static`, `Button.Opacity`, `Button.Highlight`
- `Typo.H1`, `Typo.Body1`, `Typo.Caption`
- `TextInput.Default`, `TextInput.Outlined`, `TextInput.Underlined`

Use this pattern when:
- several variants clearly belong to one conceptual component family
- a grouped API is clearer than exporting many sibling names
- the variants share common props and mental model

### Simple Wrapper Export Pattern
Use a simple `index.tsx` export wrapper when the component has one clear default shape and does not need a grouped API.

## Theme Domain Model

Theme is a core domain concept, not an implementation detail.
Current theme layers:
- base tokens: `variant`, `colors`, `background`, `typography`
- merge stage: `createTheme()`
- semantic mapping stage: `createSemanticTheme()`
- runtime access: `ThemeProvider` / `useTheme()`

Domain implications:
- components should consume semantic theme values where possible
- raw hardcoded colors should be minimized
- token changes can affect both Storybook and Expo preview flows
- future React / React Native convergence should happen at the token and semantic-theme boundary before diverging into platform-specific rendering details

## Cross-Platform Direction

The target direction is not “web-only Storybook wrappers.”
The target direction is:
- one shared design language
- one shared token and theme model
- one shared component taxonomy
- carefully controlled platform differences at the rendering boundary

That means future work should distinguish between:
- shared behavior and API
- shared visual semantics
- platform-specific implementation details

## Domain Constraints for Future Evolution

When moving toward React + React Native shared usage:
- do not let Storybook-only browser behavior redefine the core component API
- do not let Expo-only assumptions leak into all component contracts
- prefer platform-neutral naming for props and variants when practical
- document intentional platform divergence explicitly rather than letting it happen implicitly

## Documentation Sync Requirement

When any of these change, update this document in the same pass:
- component taxonomy
- public export structure
- theme token model
- semantic theme structure
- cross-platform boundary decisions
