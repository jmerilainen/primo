# Staged Toolchain Modernization with Hard Cutovers

Primo will modernize the stack in staged cutovers, with at most one overlap stage per tool and mandatory removal of the replaced tool in the next commit. We chose this approach over a big-bang migration to isolate regressions, keep CI signal clean, and preserve delivery continuity while still preventing long-lived dual-stack drift. The migration is anchored to a Node 24 baseline across local, CI, and Docker, with strict merge gates (lint, typecheck, unit, E2E) and per-stage synchronization of documentation and operational assets.
