# TASK 01: Mutable Matter Engine Proof

Read `AGENTS.md` again before starting. Then inspect:

- `docs/particle-reference/REFERENCE_NOTES.md`
- `docs/particle-reference/reference_contact_sheet.png`
- `docs/particle-reference/ref_*.png`

These are behavioural references only. If they are missing, work from the written description in `AGENTS.md` and say so in your report.

Work on `/lab/mutable-matter`. Do not build the production homepage. The persistent `ExperienceCanvas` from Task 00 stays in the root layout. The lab route supplies the scroll section and drives `sceneProgress`.

## Goal

A polished technical and visual prototype proving this sequence on one particle population:

ROAMING FIELD, DENSE CLOUD, DNA HELIX, HELIX UNRAVELLING, SWEEPING FILAMENTS, TEMPORARY STYLISED ASL MARK, HERO REVEAL

## Build

1. **Environment:** space-black (about `#050506` to `#09090A`). A separate ambient layer of 1,000 to 3,000 tiny, dim, slow specks with subtle parallax, not part of any morph. Must not read as a galaxy, nebula or starfield.
2. **Primary engine:** about 60,000 main particles on the `high` tier (tunable 40,000 to 100,000), R3F, `BufferGeometry`, custom GLSL `ShaderMaterial`. Equal-count target buffers `aRoamTarget`, `aCloudTarget`, `aHelixTarget`, `aFilamentTarget`, `aLogoTarget`, generated deterministically. No GPGPU, no per-particle React components, no per-frame JavaScript particle updates.
3. **Target correspondence:** reorder each formation by a shared key (angle and height, or a path parameter) so neighbouring particles stay neighbours between states. No random assignment.
4. **Per-particle attributes:** seed, activation threshold, group, phase, offset, size class, mass.
5. **Curved, staggered transit:** each transition adds curl-noise and spiral offsets that peak mid-transition and are zero at both ends, with per-particle delays from the thresholds. No straight-line lerps.
6. **Formations:**
   - Roam: broad 3D volume, uneven density, loose clusters, a depth gradient, restrained drift. It fills the whole viewport edge to edge
   - Cloud: irregular, layered and heavy, not a sphere, at least about 60 percent of viewport height. Core condenses first, outer matter follows, a few particles orbit outside
   - DNA helix: spans about 85 to 100 percent of viewport height (may run past top and bottom), two elegant strands (about 45 percent of particles each), sparse bridging particles (about 10 percent), clear depth, slow idle motion. Formation order: central twist, first strand, second strand, remaining matter wraps in
   - Unravelling: regions leave the helix at different times, strands stretch and widen into thick voluminous ribbons, order gives way to flow. It must not explode and must not collapse into thin lines. Density stays high throughout
   - Filaments: 5 to 9 spline streams on different depth planes, crossing, some near camera, some leaving frame, procedural variation, not rigid tubes or hairlines. Each stream has real body: a width profile (thick middle, tapering ends), cross-section thickness and a halo of fine particles. Streams sweep edge to edge across the whole viewport
   - ASL mark (PROVISIONAL): one continuous spline passing through stylised A, S and L, sampled with small thickness, behind `getLogoPoints(count)`. Filament groups map to logo regions so it assembles progressively. Once formed, most motion stops and a few peripheral particles keep settling. The same path is exported as SVG for fallbacks
7. **Particle character:** implement everything in the Particle character paragraph under Shader and motion rules in `AGENTS.md`: heavy-tailed size mix with a small share of large out-of-focus discs, crisp-core soft-edge sprites with additive blending, depth of field and fog, per-particle mass and twinkle, velocity stretch (position at `t` and `t + dt`), formations that breathe and shimmer, bone and cream palette with rare gold sparks. No bloom.
8. **Pointer and touch:** world-space interaction plane, radial displacement plus swirl, recovery toward the current target, and a pointer-history trail (last 16 to 32 positions as a uniform array) that leaves a soft tapered ribbon of light. Soft and restrained. Touch uses a simplified equivalent with `touch-action: pan-y`.
9. **Scroll:** one pinned section about 700vh long. GSAP ScrollTrigger scrubs one `sceneProgress` (smoothing about 0.8 s) into a small store, using the mapping in the One scene progress value section of `AGENTS.md`. Camera movement derives from it. Native scroll only. Reverse scrolling must reverse the whole sequence smoothly.
10. **Hero reveal (0.94 to 1.0):** a small mono label, the headline *Digital matter, given form.*, a supporting line, and the CTAs (**Book a Call** linking to `/contact`, and Explore Our Work linking to `/work`), placed in the breathing room around the mark. All real DOM text.
11. **Burgundy check:** after the pinned section add one substantial burgundy section with the large serif statement *Most websites are assembled. Ours are shaped.* The particles recede almost completely behind it. This only proves the space-black to burgundy rhythm. No burgundy appears anywhere in the opening sequence.
12. **Anime.js:** use it where it genuinely improves the HTML and SVG layer, for example nav underline and hover details, button and link micro-interactions, the SVG draw of the mark outline in the fallback, and text reveals for the hero. It must not animate particles or duplicate GSAP scroll choreography. List each use and why in the report.
13. **Dev tools (dev only):** Leva panel and a performance readout (fps, main and ambient counts, DPR, tier, current state). Controls for `sceneProgress` manual scrub, particle count, quality tier, point size, size distribution and large-particle share, focal distance and blur, stretch, twinkle, idle noise, transit curvature, cloud density and spread, helix radius, height and turns, filament count and spread, logo scale, pointer radius, strength, falloff, swirl and recovery, trail length and width.
14. **Fallbacks:** `prefers-reduced-motion` shows a calm designed render of the settled mark. No WebGL shows a designed static fallback using the exported SVG mark. Both keep content, nav and CTAs working. Mobile uses a lighter tier (about 15,000 to 20,000 particles, fewer ambient specks, lower DPR). Mobile is lower priority for now.

## Iteration requirement

After the first working version, capture screenshots at every state and compare them with the reference frames. Iterate at least three times on particle character (size mix, depth blur, stretch, trail) and on morph quality (curved paths, staggering, correspondence) before reporting. Include before and after screenshots.

## Acceptance checks (do not mark complete unless all pass)

1. The same particles survive every state
2. No per-particle React rendering and no particle data in React state
3. Roam reads as intelligent matter, not stars
4. The cloud is dense and irregular
5. The helix is recognisable but abstract, with two strands and depth
6. The helix unravels instead of exploding
7. Filaments feel spatial and flowing
8. The ASL mark is legible and stylised, not plain text (include a dedicated legibility screenshot)
9. Forward and reverse scroll both work smoothly
10. Morphs travel on curved, staggered paths, not straight lines
11. A screenshot at 100 percent zoom shows at least three particle size classes, depth blur, brighter areas where particles overlap, and streaking during motion
12. The pointer leaves a visible glowing trail and a swirl, and the field recovers naturally
13. Ambient specks stay subordinate
14. Performance is reported honestly: measured fps and hardware where a real GPU is available, or "not representative" for headless and cloud runs (which does not fail this check). The `low` tier path runs without errors
15. Reduced-motion and no-WebGL fallbacks exist and work
16. No burgundy in the opening sequence, burgundy only in the later section
17. Text contrast passes WCAG AA on space-black and burgundy
18. `pnpm lint`, `pnpm typecheck` and `pnpm build` pass
19. **Composition:** every state follows the Composition, scale and flow rules in `AGENTS.md`. The scene fills the viewport, with no small object floating in an empty frame
20. **Flow:** transitions overlap, density stays high, and the frame is never mostly empty between states
21. **No hairlines:** the unravelling and filament states show thick, voluminous streams with a particle halo, never thin single lines
22. The report includes the projected bounding box (percent of viewport width and height) of the main particles for each state

## Screenshots required

Roaming field, dense cloud, helix, partly unravelled helix, sweeping filaments, the ASL mark, hero reveal, the burgundy section, reduced-motion fallback, and mobile view if possible.

## Out of scope

Capability states, final conversion section, footer, other page content, CMS, analytics, real links or forms, component libraries, GPGPU, postprocessing, Lenis.

## Report, then stop

Use the report format in the How to work and review section of `AGENTS.md`, and add: particle architecture, target-buffer strategy, shader design, pointer mapping, `sceneProgress` architecture, Anime.js uses and reasons, current visual weaknesses, and what you recommend changing before production homepage work.

STOP after Task 01 and commit it (`Task 01 complete`). Do not begin the production homepage until reviewed, unless the prompt you were given says the STOP lines are internal checkpoints. In that case, continue to Task 02 only if the acceptance checks pass. Remember that fps measured in a headless or cloud browser is not representative and must not change the particle defaults.
