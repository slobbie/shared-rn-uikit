# Storybook Improvement and Playground Roadmap

## Status
- Active
- Created: 2026-05-21
- Scope: Medium
- Primary area: `shared-rn-uikit` Storybook / shared UI documentation / preview workflow

## Goal
Turn the current Storybook from a simple component showcase into a more useful exploration surface with standardized stories, stronger documentation, and an incremental playground experience.

## Why This Task Exists
Current Storybook behavior is still close to a minimal preview layer.
The project needs a clearer improvement path so each Storybook change moves toward:
- better component discovery
- stronger variant/state coverage
- easier prop experimentation
- future React / React Native shared-system validation

## Current Limitations
- Story quality and coverage are uneven across component groups.
- Story structure is not yet standardized enough to scale cleanly.
- Decorator/provider setup should better match real shared UI usage.
- Tokens and semantic theme behavior are not visualized well enough.
- Playground behavior is not yet treated as a first-class improvement track.
- Storybook is not yet being used as a practical cross-platform review surface.

## Relevant Project Paths
- `.storybook/`
- `stories/`
- `shared/ui/`
- `shared/utils/lib/`
- `app/`
- `.github/workflows/deploy-storybook.yml`

## Delivery Principle
Build in this order:
1. standardize stories
2. improve coverage
3. strengthen docs and theme visibility
4. introduce playground interactions
5. add cross-platform validation checkpoints

Do not jump straight to a large playground layer before the shared component stories are standardized.

## Phase Plan

### Phase 1 — Foundation
#### T1. Create and maintain the Storybook improvement task definition
- Keep this roadmap current as scope, blockers, and progress change.
- Record execution order, validation rules, and follow-up tasks.

#### T2. Audit current Storybook coverage
- List atoms, molecules, layout components, and key utility-facing components.
- Mark which components already have stories.
- Mark missing states, missing controls, and missing docs.
- Produce a prioritized improvement list.

#### T3. Standardize story authoring rules
- Define the baseline structure for `Meta`, `args`, `argTypes`, decorators, and naming.
- Define required state coverage by component type.
- Keep colocated story placement unless a project-specific reason requires otherwise.

#### T4. Normalize Storybook decorators and providers
- Align theme/provider usage with shared UI runtime expectations.
- Add or refine preview wrappers for background, spacing, and viewport context when needed.
- Keep browser-only preview helpers isolated from shared component contracts.

### Phase 2 — Story Quality
#### T5. Improve core atom stories first
Recommended initial focus:
- button
- textInput / input-like components
- checkbox
- typo
- icon-related atoms if part of the public surface

For each target:
- cover core variants
- cover disabled/error/selected or equivalent states
- expose meaningful controls
- add concise docs where needed

#### T6. Improve molecules and layout stories
Recommended initial focus:
- chip
- card
- container
- other composition-oriented shared UI pieces

For each target:
- show practical composition scenarios
- include edge cases such as long text, empty states, and dense layouts
- make relationships between child components clearer

#### T7. Visualize theme and token layers
- Add token preview stories or docs pages for color, typography, spacing, and semantic values.
- Make it easier to see the effect of token/theme changes before shared component updates ship further.

### Phase 3 — Documentation and Discovery
#### T8. Restructure Storybook docs pages
Recommended sections:
- Introduction
- Getting Started
- Theme / Token
- Component Guidelines
- Contribution Guide
- Playground Guide

The docs layer should help a new contributor understand how to browse, test, and extend the UI kit.

### Phase 4 — Playground
#### T9. Playground v1: controls-driven component playground
- Start with high-value atoms.
- Expose safe, meaningful props through controls.
- Keep playground stories separate from baseline reference stories when needed.

Success criteria:
- a contributor can change common props interactively without touching source code
- the playground remains a preview layer, not the source of truth for API design

#### T10. Playground v2: composition sandbox stories
Examples:
- form playground
- card + chip + button composition playground
- typography + spacing showcase
- theme switching comparison stories

Success criteria:
- multiple shared components can be explored together in one controlled preview surface

### Phase 5 — Cross-Platform Direction and Validation
#### T11. Add portability checkpoints
- Flag browser-only assumptions that should not leak into shared APIs.
- Record React-specific vs React Native-specific behavior boundaries when necessary.
- Treat Storybook as an early warning surface for future shared-system portability.

#### T12. Strengthen validation workflow
- Re-check local Storybook build flow after runtime alignment.
- Document environment constraints and CI expectations.
- Consider future visual regression tooling only after baseline story quality improves.

## Recommended Execution Order
1. T2 coverage audit
2. T3 story rules
3. T4 decorators/providers
4. T5 atoms
5. T6 molecules/layout
6. T7 token/theme visibility
7. T8 docs restructuring
8. T9 playground v1
9. T10 playground v2
10. T11 portability checkpoints
11. T12 validation hardening

## Suggested First Sprint Scope
Use this as the most realistic first execution slice:
- [ ] T2 coverage audit complete
- [ ] T3 story rules documented and applied to initial targets
- [ ] T4 preview decorators/providers normalized
- [ ] T5 first batch of atom stories upgraded
- [ ] T9 first controls-driven playground stories added for selected atoms

## Completion Conditions
- [ ] Storybook improvement roadmap is saved and maintained in `.agents/tasks/active/`
- [ ] Story coverage baseline is audited and prioritized
- [ ] Standard story rules are documented and reused
- [ ] Core atom stories are improved with controls and meaningful state coverage
- [ ] Initial playground flow exists for selected high-value components
- [ ] Documentation explains how Storybook should evolve beyond a simple showcase
- [ ] Cross-platform direction is preserved instead of weakened by browser-only shortcuts

## Validation Method
- Read target components and story files before editing.
- Verify that changes respect `.agents/rules/rules.md` and `.agents/domain/domain.md`.
- When Storybook build validation is attempted, record the actual runtime result.
- Keep environment mismatch visible: local Node currently observed as `16.13.0`, while Storybook build requires Node 18+.

## Risks
- Building playground features too early can hide weak story foundations.
- Browser-only interaction helpers can accidentally distort the shared component API.
- Local runtime mismatch may block full Storybook build validation until Node is aligned.
- Coverage work can sprawl unless atoms and high-value shared components are prioritized first.

## Progress Log
- 2026-05-21: Initial roadmap captured from approved Storybook improvement discussion.

## Follow-up Files Likely Needed Later
- coverage audit doc under `.agents/tasks/active/` or `.agents/tasks/backlog/`
- story authoring checklist/template refinement in `.agents/templates/`
- implementation task(s) for atom upgrades and playground rollout
