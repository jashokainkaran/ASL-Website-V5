# Task 05 implementation report

## Audit and preserved baseline

Task 04 already supplied the persistent canvas, canonical scroll driver, custom particle shader, horizontal DNA, brand sampler, capability/editorial choreography, ambient/residual matter, alternating compositions and five environment presets. These were retained. Weak points verified in implementation were the effect-activated loader/content flash, fixed readiness-independent cutoff, flat DNA perspective, absent surface/sculpture states and backgrounds relying mainly on gradients/fine grain.

## Changes

- Root layout and ASLLoader now server-render an opaque entry layer and gate all interface DOM before hydration. Fonts plus renderer/fallback readiness control release. Typical sequence is 1.35s preparation + .85s material mask + .35s UI settle; observed reveal roughly 2.4s after first sampled frame. Reduced motion uses a shorter animated fade. Internal links do not replay it.
- DNA gains yaw/pitch/roll, radius variation and deeper perspective. Filaments retain body and correspondence while adding braiding/depth. New folded membrane and open shell formations precede the supplied ASL mark. Opening scroll length remains four screens.
- To remain within GPU attribute limits, roam uses position and offset is derived in GLSL. There is still one main population, one canvas and no per-frame CPU target update.
- Persistent mineral texture, fine grain, masked low-intensity light and shadow add material structure independently of particles. Charcoal warms continuously into substantial burgundy, then darkens into the final CTA. No-WebGL receives equivalent document-local material colours.
- Chapter widths vary within the existing alternating layout. Working editorial motion, menu, CTA and residual matter were preserved.

Primary changed files: src/app/layout.tsx; src/components/brand/ASLLoader.tsx; src/components/ExperienceShell.tsx; src/lib/awakening.ts and scene-store.ts; src/particles/engine/{geometry,ParticleField,ExperienceCanvas,SceneEnvironment,DevTools}.tsx/ts; src/particles/formations/{shared,helix,filaments,surface,sculpture}.ts; src/particles/{states,shaders/particle}.ts; src/styles/{environments,brand/asl-loader}.css; scripts/check-formations.cjs; public/textures/mineral.png. See Git diff for exact paths.

## Iteration and corrections

1. Audited entry lifecycle and actual first paint; rebuilt the root readiness gate and checked normal, reduced and delayed-font entry.
2. Inspected new formation transitions in the browser. Corrected a real GPU attribute-limit failure by packing/reusing existing data, reduced the overly flat DNA presentation, and reshaped the initial cylindrical sculpture into an open asymmetrical shell.
3. Reviewed material surfaces and desktop/mobile composition. Corrected a washed-out texture blend, clamped overflow from oversized material bounds, and retained subdued contrast behind typography.
4. Production route/refresh/reverse-scroll/fallback checks. Rounded entry SVG coordinates to eliminate hydration differences and added explicit no-WebGL section material fills after discovering a transparent burgundy statement.

## Checks

Lint, TypeScript, production build and formation invariants passed. Desktop/mobile browser review, forward/reverse formation motion, direct entry/refresh, delayed fonts, client navigation, keyboard skip, mobile menu/Escape, reduced motion, no-WebGL and no-JS were exercised. Latest production checks had no console/page errors or horizontal overflow. All implemented route shells rendered; unpublished work slugs intentionally remain 404.

Short measured desktop samples: 58–61fps at 60,000 main + 1,800 ambient, DPR1. Mobile emulation: 40–61fps at 18,000 + 650, DPR1.25, with concurrent build activity. These are observed browser samples, not physical-device or sustained thermal benchmarks. No quality downgrade was based on these samples. Additional texture overhead was not isolated.

## Dependencies and influence

No packages added or removed. No new third-party visual component or template was copied. The local ui-ux-pro-max skill's focus/loading guidance informed keyboard skip/focus checks; it introduced no runtime dependency. Existing Task 03 documented influences remain historical; this task independently extended the current GLSL/GSAP/Anime architecture. Mineral texture is locally generated deterministic multiscale noise, not external artwork.

## Review limits

Physical phones, Safari and long-session performance remain unmeasured. The supplied mark is provisional. Open-shell silhouette, DNA edge cropping and quiet material contrast remain creative-review points. No fabricated content or claims were added. Task 06 was not started; nothing was pushed.

Evidence: [screenshot index](screenshots/task-05/README.md). Detailed architecture, controls, readiness lifecycle and future-task constraints: [Task 05 handoff](handoffs/TASK_05_HANDOFF.md).
