# B2B Mini-App Example Lab Project

This is an example developer project demonstrating a decoupled "mini-app" approach to the BigCommerce B2B Buyer Portal. The Buyer Portal is a React app enabling B2B functionality on BigCommerce storefronts. This example approach uses a separate React app to hook into the available Buyer Portal utilities in the browser and make storefront UI enhancements based on B2B data without customizing the Buyer Portal code.

## Terminology and Git Model

This repository maintains two kinds of history **separately**:

- **Traditional branch** (`main`): a normal Git branch with stable, append-only history. Custom-code changes are made on feature branches, reviewed via pull request, and merged here. `main`'s history is never rewritten.
- **Progressive history**: a tutorial-shaped commit chain (clean framework install → step commits → end metadata) that represents the step-by-step lab progression. It is rebuilt as an independent commit chain and identified by a **project-version tag** (plain semver) at its tip plus the step tags along it.

`main` and the latest progressive history have **different tip commits but identical file trees**. Every change must be replicated across both, using the `bcedu-lab-sync` skill, and verified with its `validate-sync` command:

- **Framework/dependency upgrades**: rebuild a new progressive history with `bcedu-lab-upgrade`, then `sync-to-main` (a reviewed PR) brings it onto `main`.
- **Custom lab-code changes**: make them on a branch off `main` and merge via PR, then `sync-to-progressive` folds them into a rebuilt progressive history.
- **Publishing** a progressive history (moving step tags + creating the project-version tip tag) is done with `bcedu-lab-publish`; it does **not** advance `main`.

## Project Version and Changelogs

- The **project version** (plain semver, separate from the Vite framework version) is held in `package.json`'s `version` field and tagged on the tip of the corresponding progressive history.
- Each version has a changelog entry in `CHANGELOG.md`.
- **Metadata at the end**: the project-version bump and the addition of changelog entries and tutorial docs are folded into the final commit(s) of each rebuilt progressive history (amended on each rebuild rather than accumulating new commits).
- The lab steps and GitHub diff links live in `docs/TUTORIAL.md`, which carries a "Based on version X" banner matching the latest progressive history.

## Tag Conventions

- **Project-version tag**: plain semver (e.g. `1.0.0`) at a progressive history's tip. Created fresh per history; never migrated.
- **Framework anchor**: `framework-<semver>` (e.g. `framework-8.0.2`) marks a base-framework release point. Permanent; never migrated.
- **Step tags**: `<prefix>-NN-pre` / `<prefix>-NN-post`, plus `<prefix>-pre` / `<prefix>-post` for the full-lab span, and the global `start` / `complete`. Migrated onto a new history by the Main Tags publish.
- **eLearning tags**: `e-` prefixed. Migrated by the eLearning publish.

## Commit History Structure

- The first commit is a clean Vite (`react-ts` template) install.
- **Strict 1:1 TODO → code**: each commit that introduces `TODO:` comments is immediately followed by the code commit that resolves them (one TODO commit per code commit). Avoid bundling many TODOs into a single early commit.

### Lab Exercises

| Exercise | Description | Tag Prefix |
| ------ | ----------- | ---------- |
| Lab 1 | Wait for B2B Utils | `hook` |
| Lab 2 | Header Links | `links` |
| Lab 3 | Previously Ordered Message | `prev-order` |

### Lab Step Breakdown

Each step is a `<tag>-pre` (TODO placeholders) commit immediately followed by a `<tag>-post` (implementation) commit. eLearning state is represented by the same base tags in `e-<tag>-pre`/`e-<tag>-post` format. The whole progression starts at `start` and ends at `complete`.

**Lab 1 — Wait for B2B Utils (`hook`)**

| Step | Tag Base | Description |
| ---- | --- | ----------- |
| 1 | `hook` | Implement `useB2B` hook to wait for `window.b2b` to be available |

**Lab 2 — Header Links (`links`)** — full span: `links-pre` → `links-post`

| Step | Tag Base | Description |
| ---- | --- | ----------- |
| 1 | `links-01` | Render `HeaderLinks` component using DOM utils |
| 2 | `links-02` | Implement `HeaderLinks` buttons to open Buyer Portal pages |
| 3 | `links-03` | Add role check condition for `HeaderLinks` |

**Lab 3 — Previously Ordered Message (`prev-order`)** — full span: `prev-order-pre` → `prev-order-post`

| Step | Tag Base | Description |
| ---- | --- | ----------- |
| 1 | `prev-order-01` | Render `PreviouslyOrdered` component using DOM utils |
| 2 | `prev-order-02` | Show "previously ordered" notification on all PDPs |
| 3 | `prev-order-03` | Use B2B GraphQL to fetch `orderedProducts` |
| 4 | `prev-order-04` | Add user's B2B token to GraphQL requests |

## Framework Install Command

The base framework is Vite with the `react-ts` template. Use `npm create`:

```
npm create vite@<version> vite-project-dir -- --template react-ts --no-interactive
```

It is not crucial for the user to specify a version for a re-install of the base project. If no version is given, use `vite@latest` in the CLI command.

After re-installing the framework, use `npm install` to install dependencies.

## Rebuilding Lab History

After finishing rebuilding lab commit history, do not do a test build. Review and testing will be a separate task.
