<!-- This document is maintained together with agents/roles/qa/qa.ko.md -->
<!-- Overview of QA role split and responsibility boundaries. -->

# QA Overview

QA is the role group responsible for verifying product quality.
The work is split into narrower roles so that responsibility does not become ambiguous.

## Sub-Roles

- QA Strategist: defines test scope, priority, release criteria, and risk thresholds.
- QA E2E Specialist: validates end-to-end scenarios based on real user flows.
- QA Integration/Regression Specialist: validates module connections and the stability of existing behavior.

## Role Separation Principles

- Strategy handles strategy, execution handles execution, and regression handles regression.
- Unit tests are the responsibility of each development persona.
- QA serves as the final gate for overall product quality.

## One-Line Summary

QA becomes much clearer when it is split into strategy, E2E, and integration/regression instead of being treated as one broad role.
