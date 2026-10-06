# Task 06 implementation report

Task 06 is implemented; Work remains a placeholder for Task 07. Detailed architecture, timing, formation mapping, route foundation, measured performance and known limitations are in [TASK_06_STATUS.md](handoffs/TASK_06_STATUS.md). Visual evidence is indexed in [the screenshot README](screenshots/task-06/README.md).

- Historical loader flash: hydration-only activation and missing initial DOM gate. Task 05 already fixed this in the actual baseline. Task 06 preserves the server cover and strengthens it with critical inline CSS and an isolated app stacking context.
- Home entry is logo-free, about 1.6s when ready; inner entry has a small supplied vector identity, about 1.5s. Fonts/renderer readiness can extend the quiet hold. Reduced entry uses a short material/fade treatment.
- Entry runs once per document load. Internal links and browser history use semantic persistent transitions, with no veil replay.
- Separate shader emergence starts at zero after the gate clears, spatially activates matter and organises it into filaments over 1.4s. Immediate scrolling advances the canonical driver and resolves emergence in .22s.
- Hero is now filaments → cloud → horizontal spatial DNA → direct ASL → calm DOM. Surface/sculpture removed from hero buffers; their modules remain section previews. Existing chapter defaults are lattice / strata / stream / cluster, with alternating DOM composition and Task 05 materials preserved.
- transitionTo presets cover Home, Work, Project, Capabilities, About and Contact. Home→Work opens existing matter through depth, uses restrained camera travel and settles into the placeholder edge environment. Same canvas survives Back/Forward.
- Primary attribute arrays at high tier: 8.4MB versus 10.56MB, about 20.5% lower. One short desktop DNA sample reported 60fps on Intel Iris Xe at DPR≈1. No physical-phone or sustained performance claim.
- Mobile retains the story at 18k+650 and five filaments. Reduced motion retains storytelling at lower intensity. No-WebGL/no-JS CTAs were clicked successfully; no-JS pointer-events restoration and main skip-link focus were repaired.
- No packages added/removed, no lockfile changes, no external component copied. Existing Anime.js owns the root entry texture/specks/path signature and exit; GSAP owns intro uniforms, canonical scroll, route uniforms and DOM settlement. Existing Anime navigation/CTA/menu interactions remain.

## Changed implementation files

Root shell and focus: src/app/layout.tsx; src/app/page.tsx; src/app/capabilities/page.tsx; src/app/lab/mutable-matter/page.tsx; src/components/PlaceholderPage.tsx; src/components/RouteTransitionController.tsx.

Entry/intro/routes: src/components/brand/ASLLoader.tsx; src/styles/brand/asl-loader.css; src/lib/scene-store.ts; new src/lib/home-intro.ts and src/lib/route-transition.ts; unused src/lib/awakening.ts removed.

Particle integration: src/components/Opening.tsx; src/particles/states.ts; new src/particles/section-formations.ts; src/particles/shaders/particle.ts; src/particles/engine/ParticleField.tsx, geometry.ts, scroll.ts, SceneEnvironment.tsx, ExperienceCanvas.tsx, DevTools.tsx; scripts/check-formations.cjs.

Documentation: final canonical rules appended to AGENTS.md; this report; docs/handoffs/TASK_06_STATUS.md; docs/screenshots/task-06/README.md and captured images. Pre-existing task documents and user AGENTS changes were preserved.

## Final validation

Final check results are recorded below after the last implementation changes. Browser production sweep returned 200 on intended routes, 404 on unpublished project URLs, no horizontal overflow and no observed console/page errors. Fresh Home, hard refresh, direct inner refresh, internal Home→Work and Back/Forward retained the gate/canvas rules. The only observed development warning was the existing Three.Clock deprecation.

Limitations: cold readiness can exceed nominal choreography (one fresh production entry reached ready at 3.084s); video unavailable because ffmpeg is absent; screenshots represent first sampled frames. Physical devices/Safari and full accessibility certification remain future QA. Other route presets are intentionally foundations. Rapid navigation interruption continuity needs further page-specific refinement.

Task 07 recommendation: build the Work spatial archive and focus behaviour using real content on this persistent transition foundation. Do not rebuild the canvas or add navigation loaders.


| Final check | Result |
|---|---|
| pnpm lint | Pass, exit 0 |
| pnpm typecheck | Pass, exit 0 |
| pnpm build | Pass, exit 0; all intended routes generated |
| node scripts/check-formations.cjs | Pass; all tiers, eight section variants, 8.4MB attribute bound |
| git diff --check | Pass; only existing CRLF normalisation notice |
| Browser console/page errors | None observed in final route and entry checks |
| Skip/focus and development replay | main-content focus; skip-link restored; Home identity hidden |

Source changes are left reviewable in the working tree. Pre-existing user edits/task documents were not committed or overwritten.
