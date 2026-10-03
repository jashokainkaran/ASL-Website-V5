# TASK 00: Project Bootstrap

Read `AGENTS.md` completely. Then read `docs/ASL_BRAND_AND_STORY.md`.

Inspect the repository before changing anything. If the repo is empty or has no application yet, initialise a modern Next.js App Router + TypeScript project with pnpm. If an application already exists, keep any useful existing structure.

## Before building, report briefly

1. Current framework and version
2. Current styling solution
3. Current routes and components
4. Existing dependencies worth keeping
5. Dependencies you plan to add now, and why

## Install (pin exact versions per the Stack section of AGENTS.md)

- three, @react-three/fiber, @react-three/drei
- gsap
- animejs (use the current release and its current API)
- leva (dev only)
- Tailwind CSS v4
- a dev-only FPS or stats readout (stats-gl or r3f-perf)

Do not add Theatre.js, postprocessing, Motion or Framer Motion, Lenis, GPGPU frameworks or component libraries.

## Build the structural foundation

- Routes: `/`, `/work`, `/work/[slug]`, `/capabilities`, `/about`, `/contact`, `/lab/mutable-matter`. Each is a simple semantic placeholder page with a real heading
- Persistent site shell in the root layout, with minimal navigation (Capabilities, Work, About, Contact, plus a Book a Call button linking to `/contact`)
- Semantic design tokens in one file (palette and roles from the Environment and colour section of AGENTS.md), including burgundy as a global token. The opening scene itself stays space-black and bone
- Typography tokens and fonts via `next/font` (display serif, body sans, small mono)
- Responsive container and grid primitives
- Typed content modules: `content/site.ts`, `content/navigation.ts`, `content/capabilities.ts`, `content/projects.ts`, with `isPlaceholder` flags
- `ExperienceCanvas` mounted once from the root layout through a small Client Component wrapper (do not call `dynamic` with `ssr: false` directly in a Server Component), `aria-hidden`, fixed behind content. For now it may only render a minimal test (a few static points) to prove the persistent canvas survives route changes without remounting
- Folder structure from the Architecture section of AGENTS.md, including empty `particles/engine`, `particles/formations`, `particles/logo` and `particles/shaders` folders with a short README or index in each

Do NOT build the final homepage design. Do NOT build the particle engine yet.

## Verify

- Dev server runs
- Production build succeeds, lint and typecheck pass
- All scaffold routes render
- The test canvas does not remount when navigating between routes
- No console errors

## Report, then stop

Provide: (A) files created and changed, (B) dependencies added and why, (C) architecture decisions, (D) build and test results, (E) anything that needs my confirmation.

STOP after Task 00 and commit it (`Task 00 complete`). Do not begin Task 01 automatically, unless the prompt you were given says the STOP lines are internal checkpoints. In that case, continue only if the checks above pass.
