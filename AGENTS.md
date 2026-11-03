# AGENTS.md

**vahvelainen.com** — Leevi Vahvelainen's portfolio. A static React site, prerendered to
one HTML file per page and hosted on Firebase Hosting.

## General

- Static site first: every page is built to HTML at build time. There is no server, no
  backend and no runtime data fetching.
- Yarn; every command works from the root. Vars the site reads are prefixed `VITE_`.
- No file exceeds **200 lines of code**.
- The site's prose is the author's own words. Port, move and restyle it freely, but never
  reword, "fix" or summarise content unless asked.

## Code

- Small functions and components; reusable atomic React components.
- Explicit named exports only. **No default exports**, no `index.ts` barrel files. Route
  modules under `src/routes/` and `src/root.tsx` are the one exception — React Router
  requires them.
- TypeScript everywhere; type where practical, don't overcomplicate typing.
- Comments are bad code. One line, and only for a non-obvious caveat or a "why" the code
  cannot express; docstrings may run a few lines. Rationale and history belong in the
  commit message.
- Avoid unnecessary abstractions and duplication.
- Cross-folder imports use the `@/` alias; siblings import with `./`.

## Frontend

- **React Router (framework mode)** with `ssr: false` and prerendering. Every page lives at
  its own URL, deep-linkable and shareable. Route modules are thin: `meta` plus a default
  export of a page from `src/pages/`. The URL map lives in
  [ARCHITECTURE.md](ARCHITECTURE.md).
- **Prerender-safe rendering.** Components render the same HTML at build time and in the
  browser. `window`, `document` and other browser APIs are touched only inside effects,
  event handlers or hooks, never during render.
- **Content is data.** Works, history and profile copy live as typed modules in
  `src/content/`; components render them and never hard-code them. Long-form case-study
  prose is the exception and stays in its page under `src/pages/work/`.
- **Styling: Tailwind.** Design tokens and shared typography utilities live in
  `src/global.css` (`@theme` / `@utility`). Use tokens, never ad-hoc colours; there is no
  other plain CSS.
- Images in `public/` are referenced by absolute path (`/images/...`); images imported by
  components live in `src/assets/`.
- Every image has meaningful `alt` text.

## Should these ever be needed

None of these exist today. Add them only when a feature genuinely needs them, and then
this way:

- **State:** Zustand stores in `src/stores/`. Component-local state stays local.
- **Data access:** all HTTP goes through API clients in `src/api/`, extended from one shared
  `ApiClient`. Never re-implement HTTP, never call APIs from components.
- **Server state:** TanStack Query, with query definitions in `src/api/queries/`.
- **Pure logic:** `src/core/`, with no React, stores, API clients or browser APIs.
- **Firebase SDK** (beyond Hosting): wrapped in `src/platform/`, config from `VITE_`
  vars, never imported by components directly.
- **Per-request rendering:** prefer prerendering plus client data over turning on `ssr`.

## Testing

- `yarn test` runs **Vitest** with **@testing-library/react**, each test beside the code it
  covers.
- Test content integrity (ordering, media that exists, routes that match content) and
  important user-facing behaviour — not everything for the sake of coverage.

## Git

- Work on separate branches; never work directly on `main`. Squash-merge feature branches.
- Small, focused commits — working, coherent increments; never mix unrelated changes.

## Checks

Run `yarn lint && yarn typecheck && yarn test && yarn build` from the root before
finishing work.

## When editing this file

This file is the short list of **principles we enforce**. It is not a record of decisions,
not a per-file map and not a setup guide — structure lives in
[ARCHITECTURE.md](ARCHITECTURE.md), setup in [README.md](README.md). If a bullet starts
collecting file paths, commands or steps, that part moves out.
