# Primo Toolchain Modernization Context

This context defines the language and decisions for modernizing the Primo engineering stack. It exists to keep migration choices explicit, consistent, and easy to reason about across commits.

## Language

**Staged Migration**:
An incremental modernization approach where one capability is replaced at a time in a planned sequence.
_Avoid_: Big-bang migration, all-at-once rewrite

**Overlap Window**:
A temporary period where both old and new tooling are allowed for one stage to reduce migration risk.
_Avoid_: Permanent dual tooling, indefinite compatibility mode

**Cutover Commit**:
The next commit after overlap where the previous tool is removed and the new tool becomes the only supported path.
_Avoid_: Soft transition, optional migration commit

**Runtime Baseline**:
The single Node.js LTS version that all scripts, CI jobs, and local development are pinned to during migration.
_Avoid_: Mixed Node versions, opportunistic upgrades

**Node 24 Baseline**:
The selected Runtime Baseline for this migration, applied before toolchain stages proceed.
_Avoid_: Node 22 compatibility mode, postpone-runtime-upgrade strategy

**Package Manager Cutover**:
The stage where one package manager becomes exclusive and all references to the previous one are removed.
_Avoid_: Multi-manager support, dual lockfile policy

**pnpm-Only Policy**:
The decision that pnpm is the only supported package manager after the overlap stage.
_Avoid_: yarn fallback, npm compatibility scripts

**Compatibility-First Bundler Migration**:
A bundler cutover strategy that moves from webpack to Vite without changing React major version in the same stage.
_Avoid_: coupled framework-and-bundler leap, multi-axis migration

**Framework Major Deferral**:
A rule that React major upgrades are moved to a later stage after the bundler cutover is stable.
_Avoid_: same-stage framework major bump

**Test Surface Parity**:
A testing migration rule that preserves existing test behavior, structure, and assertions while changing only the runner.
_Avoid_: simultaneous semantics and style rewrite

**Assertion Style Deferral**:
A rule that test-style cleanup (such as import style or matcher style changes) is postponed until after runner cutover.
_Avoid_: migration-plus-refactor commit

**Single-Browser Migration Gate**:
An E2E migration rule that requires only Chromium in CI during Cypress-to-Playwright cutover.
_Avoid_: immediate cross-browser expansion during cutover

**Cross-Browser Hardening Stage**:
A follow-up stage where Firefox and WebKit are added after Playwright migration is stable.
_Avoid_: bundling hardening into migration cutover

**Flat Lint Config Migration**:
The ESLint modernization step that replaces legacy `.eslintrc` format with `eslint.config.js`.
_Avoid_: deferred config model migration

**Lint Rule Continuity**:
A lint migration rule that keeps rule intent stable while changing config format and upgrading compatible plugin versions.
_Avoid_: simultaneous policy rewrite

**Type Strictness Freeze**:
A migration rule that keeps effective TypeScript strictness unchanged during toolchain cutovers.
_Avoid_: strictness ratchet during infra migration

**Type Hardening Stage**:
A dedicated follow-up stage for tightening TypeScript flags after stack migration is stable.
_Avoid_: combined migration and type-policy change

**Framework Version Hold**:
A migration rule that keeps the existing React major version unchanged through tooling cutover stages.
_Avoid_: same-window framework major changes

**Framework Upgrade Stage**:
A separate post-migration stage where React major upgrade is executed and validated in isolation.
_Avoid_: framework upgrade hidden inside infra commits

**Strict Migration Gates**:
A CI policy requiring lint, typecheck, unit, and E2E checks to pass for every migration-stage merge.
_Avoid_: temporary non-blocking checks

**Gate Completeness**:
A rule that a stage is not complete until all required CI gates pass under the new tool.
_Avoid_: partial green, deferred fixing

**Cutover Documentation Sync**:
A rule that README, CI job labels, and operational artifacts are updated in the same commit as each tool cutover.
_Avoid_: deferred docs sweep

**Operational Asset Parity**:
A requirement that commands in docs, Docker workflows, and CI match the active toolchain after every cutover.
_Avoid_: stale runbooks, mismatched commands

**Immediate Legacy Prune**:
A cutover rule that removes replaced dependencies, scripts, and config files in the same commit where the new tool becomes primary.
_Avoid_: deferred cleanup commits

**No Dual-Stack Residue**:
A quality rule that no inactive toolchain artifacts remain after cutover.
_Avoid_: dead configs, dormant lock-in

**Environment Baseline Enforcement**:
A prerequisite rule that Node baseline updates are applied consistently across local scripts, CI runners, and container images.
_Avoid_: partial baseline rollout

**Baseline-First Sequencing**:
A migration order rule where runtime baseline alignment happens before package manager and tool cutovers.
_Avoid_: mixed-environment migration

**Preexisting Failure Burn-Down**:
A migration prerequisite requiring known lint, type, unit, or E2E failures to be fixed before stage cutover completion.
_Avoid_: carrying known red checks into cutover

**Clean-Signal Requirement**:
A quality rule that migration validation must run on a failure-free baseline so new regressions are attributable.
_Avoid_: noisy red baseline

**CI Action Baseline Refresh**:
A baseline-stage policy to upgrade core GitHub Actions versions alongside runtime alignment.
_Avoid_: deferred CI action drift

**Pipeline Runtime Consistency**:
A rule that CI action versions and configured Node version move together to avoid hidden incompatibilities.
_Avoid_: partially-modernized pipelines

**Deployment Mechanism Hold**:
A migration boundary rule that keeps the current deployment mechanism unchanged while core build/test/lint modernization is completed.
_Avoid_: simultaneous delivery-path refactor

**Core-First Modernization Scope**:
A scope rule that prioritizes local developer workflow and CI validation path before deployment redesign.
_Avoid_: broad all-at-once platform changes

**Baseline Security Hardening**:
A rule that security fixes discovered during baseline work are in scope when they are compatible, non-architectural, and do not widen migration scope.
_Avoid_: ignore-known baseline vulnerabilities

**Non-Architectural Security Fixes**:
Security remediations that preserve deployment architecture, such as base image patch-level updates and safer defaults.
_Avoid_: platform redesign under security label

## Relationships

-   A **Staged Migration** can include an **Overlap Window** for each stage.
-   An **Overlap Window** must end with a **Cutover Commit**.
-   A **Runtime Baseline** is established before stage execution.
-   The **Node 24 Baseline** is the active **Runtime Baseline** for all stages.
-   A **Package Manager Cutover** follows one **Overlap Window** and ends with removal of previous manager artifacts.
-   The **pnpm-Only Policy** requires removing `yarn.lock` and all yarn references from scripts, CI, and docs.
-   A **Compatibility-First Bundler Migration** preserves current React major during webpack-to-Vite cutover.
-   A **Framework Major Deferral** schedules React major upgrade after bundler stabilization.
-   **Test Surface Parity** applies during Jest-to-Vitest migration.
-   **Assertion Style Deferral** follows successful runner cutover.
-   The **Single-Browser Migration Gate** applies during Cypress-to-Playwright cutover.
-   The **Cross-Browser Hardening Stage** follows a stable Playwright baseline.
-   The **Flat Lint Config Migration** occurs during tooling modernization rather than as a separate future migration.
-   **Lint Rule Continuity** constrains lint changes during config-model migration.
-   **Type Strictness Freeze** applies during toolchain migration.
-   The **Type Hardening Stage** is deferred until after migration stabilization.
-   The **Framework Version Hold** preserves current React major through migration stages.
-   The **Framework Upgrade Stage** is explicitly post-migration.
-   **Strict Migration Gates** apply to every stage from day one.
-   **Gate Completeness** is required before any cutover is considered done.
-   **Cutover Documentation Sync** applies to every migration stage.
-   **Operational Asset Parity** must hold after each cutover commit.
-   **Immediate Legacy Prune** is required in each cutover commit.
-   **No Dual-Stack Residue** is the post-cutover verification rule.
-   **Environment Baseline Enforcement** applies to local, CI, and Docker simultaneously.
-   **Baseline-First Sequencing** precedes package manager and tooling cutovers.
-   **Preexisting Failure Burn-Down** is required before stage completion.
-   The **Clean-Signal Requirement** governs migration validation and triage.
-   **CI Action Baseline Refresh** occurs in the baseline stage.
-   **Pipeline Runtime Consistency** ties action upgrades to Node baseline enforcement.
-   **Deployment Mechanism Hold** applies during core toolchain migration.
-   **Core-First Modernization Scope** defers deployment redesign to a later initiative.
-   **Baseline Security Hardening** is included in baseline-stage execution.
-   **Non-Architectural Security Fixes** are allowed within modernization scope.

## Example dialogue

> **Dev:** "Can we keep both Cypress and Playwright for a while?"
> **Domain expert:** "Only for one stage. The next commit must be the **Cutover Commit** that removes Cypress."

## Flagged ambiguities

-   "Migration phase" and "stage" were both used. Resolved: use **Staged Migration** for the full approach and "stage" for each step in that approach.
-   "Latest Node" was ambiguous between current and LTS channels. Resolved: use **Node 24 Baseline** explicitly.
-   "Package manager support" was ambiguous between preferred and exclusive. Resolved: use **pnpm-Only Policy** for exclusive support.
-   "Modernize stack" was ambiguous on migration scope. Resolved: use **Compatibility-First Bundler Migration** plus **Framework Major Deferral**.
-   "Test modernization" was ambiguous between runner migration and test refactor. Resolved: use **Test Surface Parity** with **Assertion Style Deferral**.
-   "E2E readiness" was ambiguous between migration and hardening. Resolved: use **Single-Browser Migration Gate** first, then **Cross-Browser Hardening Stage**.
-   "ESLint update" was ambiguous between version bump and config-model migration. Resolved: use **Flat Lint Config Migration** with **Lint Rule Continuity**.
-   "TypeScript modernization" was ambiguous between tool upgrade and stricter policy. Resolved: use **Type Strictness Freeze** with a separate **Type Hardening Stage**.
-   "Stack modernization" was ambiguous on framework timing. Resolved: use **Framework Version Hold** with a later **Framework Upgrade Stage**.
-   "Migration done" was ambiguous between local success and CI success. Resolved: use **Strict Migration Gates** and **Gate Completeness**.
-   "Documentation update" was ambiguous between per-stage and end-of-project. Resolved: use **Cutover Documentation Sync** with **Operational Asset Parity**.
-   "Cleanup timing" was ambiguous between immediate and deferred. Resolved: use **Immediate Legacy Prune** and verify **No Dual-Stack Residue**.
-   "Node baseline adoption" was ambiguous between scripts-only and full runtime footprint. Resolved: use **Environment Baseline Enforcement** with **Baseline-First Sequencing**.
-   "Migration gating" was ambiguous between no-new-failures and fully green baseline. Resolved: use **Preexisting Failure Burn-Down** and **Clean-Signal Requirement**.
-   "CI modernization" was ambiguous between runtime only and workflow engine updates. Resolved: use **CI Action Baseline Refresh** with **Pipeline Runtime Consistency**.
-   "Modernization scope" was ambiguous between core toolchain and deployment path. Resolved: use **Deployment Mechanism Hold** with **Core-First Modernization Scope**.
-   "Security updates" was ambiguous between immediate remediation and separate initiative. Resolved: include **Baseline Security Hardening** limited to **Non-Architectural Security Fixes**.
