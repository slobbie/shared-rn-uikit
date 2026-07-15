# Task Management Rules

## Overview

These rules define how AI agents must create, store, update, and manage tasks within the project.

---

## 1. Pre-Task Validation

### Required Questions

- Is the task scope and objective clearly defined?
- Does this task overlap with an existing task?
- Are there any dependencies on other tasks?

### Complexity Classification

| Complexity | Criteria                                      | File Structure                           |
| ---------- | --------------------------------------------- | ---------------------------------------- |
| Simple     | Single feature, modifies 1-2 files            | Single .md file                        |
| Medium     | Multiple file changes within a single domain  | Single .md file                        |
| Complex    | Multiple domains, requires phased execution   | Folder + README.md + sub-files         |

---

## 2. Task Persistence Workflow

### Step 1: Draft the Task

- Analyze the user request
- Investigate related code and documentation
- Write the initial task draft in the conversation before saving any file

### Step 2: User Confirmation (Mandatory)


Use AskUserQuestion tool:

"Would you like to save this task to `tasks/active/[path]`?"

Options:
- Save (Recommended)
- Modify Before Saving
- Do Not Save


### Step 3: Save the Task File

- Files may only be created after user approval
- Save path: tasks/active/[YYYY-MM-DD]-[task-name].md

### Step 4: Begin Execution

- Execute tasks sequentially according to the task definition
- Update progress continuously inside the task file

---

## 3. File Naming Rules

### Format


[YYYY-MM-DD]-[task-name].md
[YYYY-MM-DD]-[task-name]/README.md


### Examples


# Simple Tasks
2026-01-27-fix-login-bug.md
2026-01-27-add-logout-button.md

# Complex Tasks
2026-01-27-auth-system-refactor/
├── README.md
├── 01-analysis.md
├── 02-implementation.md
└── 03-migration.md


### task-name Rules

- Use kebab-case
- Start with a verb (`add`, fix, update, refactor, `implement`)
- Keep concise and descriptive (3-5 words recommended)

---

## 4. State Transition Rules

### Active → Complete

Conditions:

- [ ] All completion checkboxes marked as [x]
- [ ] Validation steps completed
- [ ] User confirmation completed

Actions:

1. Change task status to Complete
2. Move the file to the complete/ folder
3. Add completion date

---

### Active → Backlog

Conditions:

- Priority change
- Blocker encountered
- User request

Actions:

1. Change task status to Backlog
2. Record the reason for postponement
3. Move the file to the backlog/ folder

---

### Backlog → Active

Conditions:

- Blocker resolved
- Priority increased
- User request

Actions:

1. Change task status to Active
2. Record resume date and reason
3. Move the file to the active/ folder

---

## 5. Task File Update Rules

### Update Timing

- After completing a task phase
- When blockers occur
- When direction changes
- When completion conditions are achieved

### Update Requirements

- Mark completed items with [x]
- Add progress logs (optional)
- Record discovered issues and changes

### Example


## Completion Conditions

- [x] Condition 1 (Completed on 2026-01-27)
- [ ] Condition 2
- [ ] Condition 3

## Progress Logs

- 2026-01-27: Completed Condition 1, working on Condition 2


---

## 6. Special Case Handling

### Task Cancellation

Actions:

- Change status to Cancelled
- Record cancellation reason
- Move to complete/ folder for historical preservation

---

### Task Splitting

Actions:

- Record split reason in the original task
- Create new task files
- Add cross-reference links between tasks

---

### Task Merging

Actions:

- Record merge reasons in all related tasks
- Create a new unified task
- Mark original tasks as Cancelled

---

## 7. Prohibited Actions
- Saving task files without user confirmation
- Moving incomplete tasks to complete/
- Performing large-scale changes without a task definition
- Deleting task files (preserve history even when cancelled)
