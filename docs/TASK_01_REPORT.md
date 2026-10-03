# Task 01 checkpoint

1. Built: persistent shader engine and lab opening; deterministic equal-count target buffers; packed seed, threshold, group, phase, offset, size and mass attributes. Shared ascending path parameter establishes correspondence. The registry emits shader declarations/transitions; new generators need one file and one registry entry. Original PROVISIONAL single-spline ASL source exports identical SVG and point targets. Three refinement passes documented by before/pass-1/pass-2/final captures.
2. Run: `pnpm dev`, visit `/lab/mutable-matter`. Leva is development-only; manual mode enables sceneProgress scrub. Geometry controls rebuild buffers outside the frame loop. Live readout includes target bounds. Production excludes Leva/stats imports.
3. No new packages since Task 00. Anime.js v4 animates CTA/link arrow on pointer hover and keyboard focus to signal the action, and reverses on exit; disabled for reduced motion. GSAP exclusively handles scroll/pin/reveal. No particle animation through Anime.js.
4. Automated Chromium on Windows reports Intel Iris Xe / ANGLE D3D11. Observed high 39–52 fps, medium 62, low 54–60; these automation snapshots are **not representative** of sustained real-device performance. Defaults unchanged. High: 60,000 + 1,800 ambient, DPR cap 2, three curl octaves, 24 history. Medium: 40,000 + 1,200, DPR 1.5, two octaves, 16 history. Low: 18,000 + 650, DPR 1.25, one octave, eight history. 100,000-main stress path rendered without errors. Pointer-only light ribbon uses 1,536 auxiliary samples and is not a morph population.
5. Screenshots: docs/screenshots/task-01 includes all seven opening states and burgundy at 1440×900, 1920×1080, 390×844; before and after captures; pointer trail, moving stretch, reduced motion, no-WebGL and dedicated logo captures. Screenshot inspection covers objective coverage, stream thickness, three size classes, bright overlapping points, motion streaks and copy separation. Subjective elegance and tactile feel remain human review.
6. Accessibility: real DOM copy; hidden decorative canvas; keyboard links and mobile disclosure; visible focus, skip link. Reduced-motion/no-WebGL: SVG hero, zero WebGL canvases, zero pin spacers, visible copy and working CTAs. Bone on void and burgundy exceeds AA; secondary text uses lighter muted token instead of the lower-contrast slate token. No horizontal overflow at the three tested sizes.
7. Limitations/deviations: pointer history low tier is eight (simplified mobile). Curved transit uses an analytic divergence-free trigonometric curl field rather than a noise texture. 700vh total consists of 100vh section plus 600vh pin duration. Mobile logo is 81% width to keep legibility. Ambient mobile count is 650. Bounds are exact projected deterministic target extents, not a per-frame GPU readback; transient curvature/idle can extend them. Low-tier mobile cloud is intentionally cropped horizontally. Raw FPS cannot certify a 60fps target. THREE.Clock deprecation warning originates in R3F, not an application error. ESLint immutability rule is scoped off for the imperative R3F engine (uniforms, camera, external store); other lint rules remain active.
8. Next: integrate validated engine into production home (Task 02). All lint/typecheck/build gates passed. Browser page errors: none in final runs. Scroll forward to 2700px produced .5, reverse to 900px produced .166667. Same geometry is retained across states; no CPU per-particle frame updates. No acceptance failure remained in the objective checks after three refinement passes.
9. Creative review: approve or replace the provisional continuous mark; review brightness and physical feel on real hardware using the panel. No creative approval is implied by automated checks.

## Projected target bounds (unclipped width × height)

| State | 1440×900 | 1920×1080 | 390×844 |
|---|---|---|---|
| Roam | 254% × 315% | 254% × 315% | 253% × 302% |
| Cloud | 52% × 105% | 46% × 105% | 183% × 105% |
| Helix | 28% × 110% | 28% × 110% | 35% × 110% |
| Filaments | 176% × 97% | 176% × 97% | 175% × 91% |
| Logo | 49% × 25% | 49% × 28% | 81% × 12% |

Unravelling and hero are transitions/DOM beats, not additional target populations. Cloud assembly starts at .15 and helix at .26 (overlapping cloud completion .285); filament-to-logo begins .80 rather than .82 to overlap travel. Target density does not fade or reset. Nav has a dark scrim to maintain text contrast. Reduced motion intentionally uses the allowed static settled SVG rather than running WebGL.

## Refinement record

- Pass 1: replaced uniform roam with correlated density bands, added continuous GPU pointer ribbon, fixed engine-specific lint assumptions.
- Pass 2: core-first cloud, avoid curl evaluation at settled transition endpoints, prevent pointer displacement from contaminating velocity stretch, strengthen tapered trail, mobile logo and fallback pin handling.
- Pass 3: center-out helix delays, viewport-aware point sizes, edge brightness variation, complete mobile navigation.
