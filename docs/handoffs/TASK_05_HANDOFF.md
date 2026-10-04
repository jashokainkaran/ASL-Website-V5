# Task 05 handoff

Completed 2026-10-05. Baseline: Task 04 commit `1841737`. Read the current root AGENTS.md, ASL_BRAND_AND_STORY.md and the next task before editing. Task 05 is a targeted refinement, not a rebuild. The supplied mark remains provisional under current creative direction; its supplied geometry has not changed.

## Current architecture

Next.js 16 App Router, React 19, strict TypeScript, Tailwind v4 semantic tokens. Root layout owns ASLLoader, ExperienceShell and #site-interface (skip link, Header, LinkMotion and route DOM). Essential content is server-rendered. Routes: /, /work, /work/[slug], /capabilities, /about, /contact, /lab/mutable-matter. Work detail pages without published content intentionally return notFound; do not fabricate projects. Business CTA URLs remain centralised.

ExperienceShell dynamically mounts one client-only R3F canvas at root level. It survives client navigation. SceneEnvironment controls the persistent environment from the shared scene store. No separate route canvas was added. WebGL capability/context-loss handling switches to the existing SVG mark/content fallback.

Packages: Three/R3F/custom GLSL own particle geometry, rendering, displacement and morphing; GSAP/ScrollTrigger own canonical sceneProgress, pinned opening, editorial choreography and environmental timing; Anime.js owns the non-scroll entry veil, existing navigation/menu/link/CTA details. Leva and stats-gl remain development only. Drei remains available in the existing dependency set. No dependency or lockfile changes in Task 05.

## Entry and reveal architecture

The old loader was hidden in server HTML and enabled in an effect, so destination content could paint before activation. Its z-index was already above navigation: lifecycle and absent DOM gating were the main defects. A fixed safety timeout also ignored readiness.

Root HTML now begins with data-entry="pending". ASLLoader is visible in server markup as a fixed opaque space-black sibling. #site-interface is opacity:0, visibility:hidden and pointer-events:none from the first CSS paint. Hydration also sets it inert. The canvas prepares underneath. There is no layout removal, and stable scrollbar gutter prevents a reveal-width jump.

Stacking: canvas 0, content 1, header 30, grain 35, entry 50. Development UI is hidden while pending. The loader is not inside a route stacking context. No logo/progress counter is placed on the homepage veil.

One root useEffect runs per full app entry, not on pathname changes. Full reload starts again; client navigation does not. There is no sessionStorage dependency. The Task 05 unified environmental entry replaces the earlier separate direct-inner SVG loader. Short existing internal material transitions are preserved for Task 06 to develop.

Readiness: document.fonts.ready plus either the first ParticleField frame (scene.rendered) or confirmed scene.fallback. A GSAP ticker checks readiness; there is no extra loader RAF. The scene awakening independently eases 0→1 over 1.7s. Anime.js introduces extremely faint grain, 48 deterministic tiny SVG specks, and a broad restrained horizontal disturbance. Integer SVG coordinates avoid server/client float hydration mismatches.

Normal entry minimum: 1350ms preparation, then 850ms soft directional mask exit, then 350ms interface opacity settle. Typical observed entry was about 2.4s from the first sampled frame to reveal. Slow critical fonts extend the hold. No noncritical images are awaited. At 8s without renderer readiness, capability degrades to no-WebGL; at 10s the gate fails open even if fonts stall. These are failure bounds, not normal pacing.

Reduced motion: 450ms minimum plus 350ms fade, then 150ms DOM settle. Spatial disturbance and speck travel are removed; opacity/identity/environment animation remains. Keyboard-operable Skip introduction completes awakening and uses a 180ms exit once ready (350ms under reduced motion), then focuses Skip to content. No-JS CSS exposes content and hides the veil. Cleanup removes listeners/ticker and reverts Anime/GSAP work.

## Particle engine and shader

One primary BufferGeometry/ShaderMaterial population continues across all formations. No React particle components, per-particle React state or per-frame CPU position updates. Deterministic Float32Array targets are generated on geometry construction/resize/tuning; geometry/material resources are disposed. Pointer raycasts feed shader uniforms and a bounded history. Camera drift, noise, delayed activation, curved transit, size/brightness/depth variation and restrained velocity stretch remain shader-owned.

Attribute budget matters: adding surface and sculpture initially exceeded the GPU vertex-attribute limit under Three's ShaderMaterial prefix. Roam now uses built-in position; aOffset is derived from identity/character values inside GLSL. There are 12 unique target buffers plus two packed identity/character attributes (14 geometry attributes), leaving room for Three prefix declarations. Final convergence reuses aLogoTarget. Do not casually add more attributes; the check script reserves two extra slots and enforces the 16-slot budget.

The opening remains four viewport scroll lengths, mapped to sceneProgress 0→.52. One canonical smoothed ScrollTrigger driver covers the whole homepage. No independent component scrollY listeners were added. Opening target windows:

| State | Canonical progress |
|---|---|
| Roam | 0 |
| Cloud | .065–.130 |
| Spatial DNA | .125–.208; hold to .245 |
| Filaments | .270–.322; unravelling begins before this |
| Folded surface | .342–.390 |
| Sculpture | .401–.434; hold to .451 |
| ASL mark | .451–.493 |
| Hero DOM | late opening, through .520 |
| Design/lattice | .520–.590 |
| Development/strata | .610–.670 |
| Deployment/stream | .690–.750 |
| Products/cluster | .770–.840 |
| Rest/edge | .860–.910 |
| Final convergence | .920–.990 |

DNA stays broadly horizontal, with approximately 20° yaw, 7° pitch, slight roll, radius variation and substantial depth. Rotation is applied to coordinates, not a flat projected biology diagram. Desktop longitudinal span is .76 of world width; portrait .82 with a smaller scatter. Subtle shader life remains during holds. The existing unravelling retains body around the horizontal axis.

Filaments use longitudinal identity and lane correspondence, varied ribbons and tunable depth/braiding. Mobile limits lanes to five. The new surface generator opens these lanes into a folded membrane with a shared u/v mapping. Sculpture curls the membrane into an asymmetric open shell with a central void, avoiding a literal object. Both are FORM states generated in small modules. Curved shader transitions and endpoint settlement remain common to the sequence. Sculpture, DNA hold and mark settle reduce idle motion; they do not freeze. The ASL target still samples the actual supplied SVG paths behind the modular logo API.

Ambient points remain separate, dim, slow and non-morphing: high tier 1800, medium 1200, mobile 650. No galaxy imagery, burgundy primary particles or second particle renderer was introduced.

## Material environment and homepage

public/textures/mineral.png is a 256×256 grayscale, 27,634-byte deterministic multiscale value-noise texture (seed 51; grids 3/7/15/31, weights .5/.28/.15/.07). It was generated locally with Python standard-library math/random/zlib, not sourced from a third party. It supplies broad material structure separately from the existing fine grain PNG.

ExperienceShell includes .material-field inside the persistent canvas layer. Its before layer blends mineral texture with charcoal using soft-light at .30 opacity. Its after layer uses the texture as a luminance mask for a restrained slate light field at .07. Vignette/shadow and chapter lighting provide directional depth. The layer shifts slightly with canonical progress (smaller in reduced motion); texture pixels themselves do not animate. canvas-layer overflow:clip prevents oversized texture bounds producing horizontal scrolling.

Charcoal uses low-frequency tonal structure, dark scrims and fine grain. Burgundy is substantial later: SceneEnvironment warms the same persistent plane through Development/Products into the statement, then darkens toward the final CTA. Opening and identity transitions remain space-black. Statement/final surfaces are transparent over this plane rather than opaque stacked colour blocks. Existing foreground typography contrast scrims remain. Material presence begins after .51 so it does not contaminate the opening.

No-WebGL does not run the pinned canonical driver, so explicit local mineral/charcoal, burgundy and wine backgrounds preserve later sections instead of leaving them transparent. This fallback deliberately uses document-local surfaces.

Homepage order and approved copy preserved: opening, positioning/CTA, four capability chapters, burgundy statement, final CTA, footer. Existing clipped typography, numbering, moving rules, residual SVG matter and magnetic CTA remain. Desktop chapter copy widths now vary (42/45/49/43%) while preserving the alternating left/right compositions. Mobile retains a single-column arrangement, native vertical touch scrolling, and the lower particle tier. No new filler sections or fake proof.

## Development controls

Scene: SCROLL/ROAM/CLOUD/DNA/FILAMENTS/SURFACE/SCULPTURE/ASL, manual progress, openingScreens, tier/count.
Particle character: pointSize, sizeDistribution, largeShare, focalDistance, blur, stretch, twinkle, idleNoise, curvature.
Formations: cloudDensity/spread; helixRadius/length/twist/yaw/pitch/roll/variation/offset/depth/turns, cameraDepth; filamentCount/spread/depth, braid; surfaceFold/twist/depth/scale; logoScale.
Environment: dprCap, materialIntensity, contamination, lightStrength, ambientDensity/brightness/movement/depth, textureIntensity (fine grain).
Interaction: pointerRadius/strength/falloff, swirl, recovery, trailLength/width.

Geometry-affecting controls dispatch asl:geometry. Defaults live in scene-store.ts. window.__ASL and stats/readout are development-only; production bundles do not mount them. Keep artist tuning separate from production content.

## Validation and evidence

Final lint, typecheck and production build passed. The first restricted build could not fetch existing Google fonts; authorised network build then succeeded. Formation checks passed at 18k/40k/60k, including deterministic data, finite coordinates, shared final-logo buffer, horizontal DNA/depth, surface/sculpture camera clearance and attribute budget. The CommonJS test harness prints a Three deprecation warning; production code uses ESM.

Browser: desktop 1440×900 and emulated touch mobile 390×844. Inspected actual entry animation, formation transitions, forward/reverse scroll, menu/Escape, reveal, layouts and materials. First-entry/hard-refresh frame sampling saw zero pending frames with visible interface content. Inner-route hard entry also remained gated. Font responses delayed by 3200ms kept the page pending at 1800ms. Reduced entry sampled pending at 200ms and ready after a further 1600ms. Keyboard skip restored focus to Skip to content. No-JS and no-WebGL content/CTAs remained accessible. Latest production no-WebGL statement verified rgb(98,27,42) plus texture.

Production route sweep: /, /work, /capabilities, /about, /contact and /lab/mutable-matter render; no observed console/page errors or horizontal overflow. Home→Work retained the canvas and did not replay the entry veil. Unknown work slugs remain intentionally unpublished. No comprehensive automated accessibility certification is claimed.

Measured short live dev samples, fresh browser context, no clock mocking: desktop high 60k+1800 at DPR1 reported DNA60, surface61, sculpture60, lattice59, strata58 fps. Mobile emulation 18k+650 at DPR1.25 reported DNA40, surface61, sculpture60, strata56 fps; a production build was running concurrently with this mobile sample, so do not treat it as isolated GPU benchmarking. No default quality reductions were made. Physical phones, Safari and sustained thermal/GPU behaviour were not measured. The extra CPU target arrays and one small texture have bounded cost; exact incremental GPU/texture overhead is inferred, not isolated.

See ../screenshots/task-05/README.md for evidence and ../TASK_05_REPORT.md for the concise change report.

## Known visual weaknesses and technical debt

- The supplied ASL mark remains provisional; preserve its sampler/API pending actual brand approval.
- The sculpture is intentionally an open abstract shell; its silhouette and pacing are creative-review decisions, not a claimed final brand asset.
- Broad DNA perspective can approach/crop the desktop frame edge. Portrait is fitted more tightly; further art direction should use actual device review.
- Low-contrast mineral structure depends on display black levels. Keep it quiet; do not compensate blindly with bright texture.
- First useFrame is renderer readiness, not a GPU fence. Shader errors are checked in QA; future asset-heavy scenes may need explicit loading signals.
- Catastrophic script failure with JavaScript enabled is bounded only after loader effect starts; no-JS has its own CSS escape. Do not add a competing loader to solve this.
- Existing dense one-line source modules remain technical debt; this pass did not broadly reformat unrelated systems.
- Route-specific art direction, real case-study content and full final accessibility/performance certification belong to later tasks.

## DO NOT REBUILD

Preserve root persistent canvas, client-only mounting, canonical sceneProgress/ScrollTrigger driver, custom GLSL population, deterministic target correspondence, packed attribute layout, logo sampler, semantic tokens, existing editorial GSAP choreography, Anime event interactions, residual matter, quality tiers, fallback detection and root entry gate. Add future targets modularly with GPU-budget review. Do not reintroduce a hidden-until-effect loader or replay the full entry on internal navigation.

## NEXT PLANNED TASKS

Task 06 — Persistent Route Transition Language
Task 07 — Work / Spatial Archive
Task 08 — Case Study System
Task 09 — Capabilities
Task 10 — About
Task 11 — Contact
Task 12 — Final Responsive / Performance / Accessibility / SEO / QA

Task 06 has not been started.
