# Maestro E2E Testing Rules

> Reference: Maestro official documentation and internal testing guides

---

# E2E Testing Philosophy

## Test User-Visible Behavior

- Test what users actually see and interact with
- Prefer rendered UI validation over implementation details
- Validate visible text, buttons, loading states, and navigation results

---

## Verify State Transitions

- Validate UI changes after user interactions
- Verify loading → success/error transitions
- Ensure navigation results are rendered correctly

---

## Prefer Stable Assertions

- Use stable UI elements for assertions
- Avoid fragile selectors tied to temporary UI states
- Prefer deterministic rendering points

---

## Keep Tests Independent

- Each test must run independently
- Do not depend on previous test state
- Reset app state when necessary

---

## Test Real User Flows

- Prioritize real-world user scenarios over implementation coverage
- Test complete interaction flows:
  - Login
  - Form submission
  - Navigation
  - Error handling
  - Retry flows

---

## Handle Async UI Safely

- Wait for rendered UI instead of arbitrary delays
- Use assertVisible or extendedWaitUntil
- Verify loading indicators disappear when necessary

---

## Test Behavior, Not Implementation Details

- Focus on user-facing behavior instead of internal implementation
- Avoid testing internal state structures or component internals

---

# DO

- Use kebab-case file names with English characters only
- One feature per file
- Prefer:
  - Text > testID > index
- Use optional: true for dynamic UI
- Use assertVisible instead of explicit waits
- Add section comments for readability

---

# DON'T

- Do not use hardcoded waits


- wait: 5000


- Do not use dynamically changing text as selectors
- Do not create excessively long flows
- Do not test implementation details directly
- Do not create tests dependent on execution order

---

# Basic Template


# [Feature] Test

appId: your.application.id

---
- launchApp:
    clearState: true

# Test steps...
