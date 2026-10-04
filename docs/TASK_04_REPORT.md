# Task 04 — Creative direction reconciliation and homepage environment

Completed 4 October 2026. Refinement of Task 03 (`8b3fa8c`), not a rebuild. Current root AGENTS.md and the attached Task 04 brief governed this pass. Task 05 has not been started.

## Audit before implementation

Task 03 already supplied the persistent app-level R3F canvas, deterministic primary formation buffers, custom GLSL transitions, separate ambient points, tiering, canonical GSAP sceneProgress, Anime.js route identity and microinteraction systems, masked editorial choreography, residual SVG matter, static grain, semantic palettes, responsive content and no-WebGL fallback. These systems were preserved.

The conflicts were an upright DNA target, four capability chapters with left-aligned copy, no short environmental awakening, and background treatments expressed as individual section styles rather than named reusable presets. The debug panel lacked direct state selection and ambient/environment tuning. The current mark was also described as approved rather than provisional under the new direction.

The initial browser audit captured the existing upright DNA and Development composition. No changes to routes, copy, section count, dependency stack, canonical progress windows, particle correspondence, pointer interaction, or main quality tiers were needed.

## Implementation

### Horizontal DNA

The target generator now places its longitudinal axis along X. Two phase-opposed strands use Y/Z for cross-section, with a small Y-axis yaw providing perspective and roughly eight percent bridge matter. Width follows the viewport; radius is limited by both width and height, and portrait cross-section scatter is halved. Mobile and portrait tablet therefore retain a shorter horizontal silhouette instead of inheriting desktop height.

The existing shader unravelling rotates the Y/Z basis and releases mass outward from the new horizontal axis. Progressive transit, curved paths and deterministic per-particle correspondence remain intact. Leva exposes length, radius, turns, twist, yaw, vertical offset and depth. CPU checks enforce deterministic coordinates, horizontal proportions and nonzero depth at desktop/tablet/mobile aspect ratios.

### Awakening

The existing ASLLoader entry controller now chooses a homepage environment mode or the existing direct-inner-route identity mode. Home never displays the branded overlay. A GSAP tween of a single `scene.awakening` value runs for 1.6 seconds: texture becomes perceptible, ambient points fade in, a small shader wave accompanies primary-matter visibility, then navigation settles. It uses the existing GSAP ticker and R3F loop, with no new animation loop or scroll controller.

Keyboard, pointer, wheel or touch input immediately finishes the awakening; navigation is always interactive. Reduced motion uses a 0.65-second fade/state reveal without the wave. The root entry instance prevents replay after internal navigation. The inner-route Anime.js particle identity and shorter persistent-canvas transitions are unchanged.

Early-frame review found the pre-existing static fallback mark flashing before the renderer loaded. The fallback is now hidden until no-WebGL is confirmed, preventing an unintended logo intro. Fallback content and navigation remain usable. Cold renderer startup can still shorten how much of the wave is visible; it never extends or blocks the entry sequence.

### Environment and layout

Five `data-environment` presets share semantic colour tokens: SPACE_BLACK, CHARCOAL_TEXTURED, BURGUNDY_TEXTURED, CHARCOAL_WITH_BURGUNDY_UNDERTONE and BURGUNDY_WITH_CHARCOAL_DEPTH. Static directional lighting, charcoal falloff and the existing small grain asset provide depth. Grain strength is adjustable; no animated noise texture or extra dependency was introduced.

Ambient geometry retains 1,800 high-tier / 1,200 medium / 650 low-tier points, with adjustable density capped at 3,000. Aspect-aware distribution, depth-dependent point size, slow depth rotation and very low brightness keep it subordinate. Geometry and material disposal now have separate lifetimes so a geometry rebuild does not dispose a retained material.

Design keeps text left / lattice right. Development becomes strata left / text right. Deployment remains text left / stream right. Digital Products becomes cluster left / text right. Only the desktop formation centres and relevant DOM placement/scrims were mirrored. Typography, numbering and individual chapter treatments remain distinct. Mobile keeps its existing visual-above-copy composition. Burgundy statement and final conversion preserve their editorial choreography with more coherent environment presets and tonal falloff.

The supplied mark geometry remains unchanged and is documented/configured as provisional pending brand approval.

## Files

- Entry: `src/components/brand/ASLLoader.tsx`, new `src/lib/awakening.ts`, `src/lib/scene-store.ts`.
- Renderer: `Ambient.tsx`, `ExperienceCanvas.tsx`, `ParticleField.tsx`, `DevTools.tsx` under `src/particles/engine/`; `src/particles/shaders/particle.ts`.
- Geometry: `helix.ts`, `strata.ts`, `cluster.ts`, `shared.ts` under `src/particles/formations/`.
- Composition: `src/components/HomeSections.tsx`, `Opening.tsx`; new `src/styles/environments.css`, plus `globals.css` and `editorial.css`.
- Identity status: `src/content/site.ts`, `docs/brand/README.md`.
- Verification: `scripts/check-formations.cjs`, this report and `docs/screenshots/task-04/`.

No packages were added, removed or upgraded. No new external component code was adopted. Task 03's documented research and existing GSAP/Anime.js mechanics were reused; no additional library research was necessary for these targeted geometry and environment changes.

## Verification and iteration

1. Audited source, current rules, task brief, existing reports and live baseline. Recorded upright DNA and left-aligned Development.
2. Implemented target transforms, entry mode, environment presets and alternating composition. Reviewed desktop 1440×900, tablet 820×1180 and mobile 390×844 screenshots; checked DNA, chapter text separation, textured statement and final CTA.
3. Reviewed early/mid awakening and discovered the fallback-logo flash. Fixed visibility gating, recaptured and verified early fallback hidden; Tab immediately settled UI to full opacity.
4. Ran final lint, typecheck, production build and formation invariants. Reviewed reduced-motion and no-WebGL mobile paths. Completed production route and navigation smoke checks.

All commands passed: `pnpm lint`, `pnpm typecheck`, `pnpm build`, `node scripts/check-formations.cjs`, `git diff --check`. The standalone CPU harness emits Three.js's existing CommonJS deprecation warning, with no failed assertions.

Production `/`, `/work`, `/capabilities`, `/about`, `/contact` and `/lab/mutable-matter` returned 200, with headings present, no dev controls, and no page/console errors in the route sweep. `/work/project-1` returns the intentional 404 from the existing unpublished-case-study route. Canvas DOM identity survives home → work; returning home leaves arrival UI at 1 and the branded overlay hidden.

Forward/reverse scroll samples: 0.25284 → 0.30333 → 0.35395 → 0.40444 → 0.30333 → 0.25284. Transition frames retained matter volume and returned to horizontal DNA. Mobile Menu opens; Escape closes it and restores summary focus. Tested mobile views had no horizontal overflow. Canvas remains aria-hidden. Reduced-motion mode retained live DNA and completed awakening. Forced no-WebGL rendered the DOM hero and a working Book a Call link to Contact.

## Performance

| Context | Main | Ambient | Observed DPR | Observed FPS |
|---|---:|---:|---:|---:|
| Desktop, 1440×900, default high | 60,000 | 1,800 | ~1 | 60, 60, 60 |
| Desktop forward/reverse DNA transit | 60,000 | 1,800 | ~1 | 60 across six samples |
| Mobile viewport, reduced motion | 18,000 | 650 | ~1 | 60 |

These are short observations in the local automated Chromium browser (Intel Iris Xe/ANGLE), not a sustained thermal or physical-phone benchmark. Initial before/after samples from an inherited mocked browser clock read 1 FPS and are invalid for comparison. A fresh context without the mocked clock produced the results above. No defensible numeric pre-change delta is claimed. The preserved tiers still cap DPR at 2 / 1.5 / 1.25. Inferred added cost is small: a few shader scalar operations, existing ambient draw and static CSS backgrounds; counts were not downgraded.

## Screenshots and remaining creative review

See [the screenshot index](screenshots/task-04/README.md) for 21 baseline and final frames, including early/awake arrival, horizontal DNA, transitions, left/right chapters, textured environments, mobile and reduced motion.

Ambient specks are intentionally close to the visibility threshold and may be imperceptible on dim displays. Tablet DNA is denser than the mobile treatment because tablets retain the existing desktop tier. The mark remains provisional. Real phone thermal testing, broad display review and slow-network cold-entry timing have not been measured. These are review limitations, not reasons to replace the working particle engine.

Recommended Task 05: approve the brand mark and real project/content direction, then art-direct the inner-route editorial environments and case-study media around approved material. Include representative physical-device QA before release. Do not invent proof or start that work automatically.
