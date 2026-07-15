<!-- This document must be maintained simultaneously with .agents/templates/templates.ko.md -->

# Templates

## Purpose

This folder exists for reusable writing shapes, not project rules.
Use templates when the structure repeats often enough that agents should start from a standard form.

## Recommended Template Set for This Project

### 1. Shared Component Addition Template
Use when introducing a new atom, molecule, layout, or utility component.

Suggested shape:
- Component name
- Taxonomy (`atom` / `molecule` / `layout` / `utils`)
- Purpose
- Public API
- Variants
- Theme/token dependencies
- Platform-specific considerations
- Export path
- Story requirements
- Validation checklist

### 2. Story Addition Template
Use when adding or improving Storybook coverage.

Suggested shape:
- Story title
- Component target
- Required states
- Controls / argTypes
- Browser-only preview behavior
- Accessibility or interaction notes
- Gaps / follow-up stories

### 3. Theme Token Change Template
Use when adding, renaming, or restructuring tokens or semantic theme fields.

Suggested shape:
- Token name
- Layer (`base token` / `semantic theme`)
- Reason for change
- Components affected
- Storybook impact
- Expo preview impact
- Cross-platform impact
- Migration notes

### 4. Cross-Platform Decision Template
Use when deciding how a shared UI API should behave across React and React Native.

Suggested shape:
- Problem statement
- Shared behavior
- React-specific behavior
- React Native-specific behavior
- Chosen API surface
- Why this boundary was chosen
- Risks
- Follow-up tasks

### 5. Storybook Improvement Task Draft
Use when planning documentation or preview improvements.

Suggested shape:
- Goal
- Current limitation
- Affected files/folders
- Proposed changes
- Validation method
- Runtime/environment assumptions
- Risks

## Template Rules

- Keep templates short enough to copy and fill quickly.
- Do not put mandatory technical rules here; put those in `.agents/rules/rules.md`.
- Templates may mention checklists, but the rules that enforce them belong in rules documents.
- When a repeated work pattern appears 2-3 times, consider formalizing it here.

## Documentation Sync Requirement

Update this file when:
- the project adopts a repeated documentation pattern
- a recurring Storybook workflow needs a standard draft shape
- cross-platform decision records need a stable format
