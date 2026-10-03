# AGENTS.md: ASL Website, Permanent Project Rules

Read this file fully before every task. These rules are permanent. A task prompt adds scope on top of them and never overrides them unless it says so explicitly. Brand, story flow and copy live in `docs/ASL_BRAND_AND_STORY.md`. If the two conflict, this file wins on engineering and the brand doc wins on brand.

This is a fresh project. There is no legacy code to preserve.

## Product

ASL is a premium technology company currently focused on website design, development and deployment, and related digital services. It may later expand into broader software, digital solutions and SaaS, so the site must not feel like a small web-design agency.

The site should feel premium, dark, cinematic, futuristic, sophisticated, luxury-tech, technically accomplished, refined, interactive, memorable and commercially credible.

Avoid: generic SaaS landing pages, generic AI-startup aesthetics, purple or blue AI gradients, decorative particle backgrounds with no meaning, excessive glassmorphism, generic bento grids, dashboard mockups, cyberpunk styling, excessive glow, clutter, and animation for its own sake.

## Core visual concept: MUTABLE MATTER

A realtime particle system behaves as if the digital world is made from one intelligent substance. Particles are the main interactive material, never a background effect. The same primary particle population reorganises through every state.

Canonical opening sequence:

ROAMING FIELD, DENSE CLOUD, DNA HELIX, HELIX UNRAVELLING, SWEEPING FILAMENTS, STYLISED ASL MARK, HERO UI REVEAL

Emotional progression: freedom, attraction, concentration, intelligence, structure, decomposition, movement, convergence, identity, calm.

## Stack (fixed, do not add to it without asking)

- Next.js (current stable, App Router), React 19, TypeScript strict
- Tailwind CSS v4 with semantic design tokens
- three, @react-three/fiber (v9, the React 19 line), @react-three/drei. Keep these mutually compatible
- Custom GLSL `ShaderMaterial` on `BufferGeometry` with `BufferAttribute`s
- gsap with ScrollTrigger (owns scroll choreography)
- animejs (DOM and SVG micro-interactions and UI motion, see "Animation responsibilities" below). Install the current release and use its current API, do not assume the older v3 syntax
- leva (dev tuning only, stripped from production builds)
- stats-gl or r3f-perf (dev only)
- pnpm. Commit the lockfile. Pin exact versions (no `^`) for three, R3F, drei and gsap

Not in Phase 1 unless a proven technical blocker exists, and then only after you report it: Theatre.js, postprocessing packages, Motion or Framer Motion, Lenis, GPGPU helper frameworks, alternative renderers, component libraries (shadcn, Magic UI, Aceternity), CSS-in-JS, extra state libraries (a tiny zustand store is allowed). Do not add dependencies speculatively.

**Animation responsibilities**
- Three.js, R3F and GLSL: all particle rendering, morphing, pointer forces, camera and depth.
- GSAP + ScrollTrigger: `sceneProgress`, pinning, scroll choreography and anything whose timing is tied to scroll position.
- Anime.js: use it wherever it adds real value to the HTML and SVG layer, for example navigation underline and hover details, button and link micro-interactions, SVG path drawing (such as the outline of the ASL mark in the fallback), text and heading reveals, decorative line animation, form field feedback, and menu open and close. It handles event-driven and non-scroll motion.
- Anime.js must never animate WebGL particles and must not duplicate GSAP scroll choreography. Where a reveal is tied to `sceneProgress`, GSAP drives it.
- Every Anime.js use must have a reason it improves the experience. List each use and its purpose in the report. Respect `prefers-reduced-motion` for all of it.

## Reference material

Before any visual work, inspect:

- `docs/particle-reference/REFERENCE_NOTES.md`
- `docs/particle-reference/reference_contact_sheet.png`
- `docs/particle-reference/ref_*.png`

If these files are missing, do not stop. Use the written behavioural description in the Phase 1 prompt and say in your report that the reference frames were absent.

They are behavioural references only. Study convergence, density transitions, formation and dissolution, sweeping filaments, ribbon flow, terrain behaviour, spatial depth, negative space and continuity between states. Do not reproduce any artwork, geometry, formations, typography, copy, layout, branding or colour treatment. Translate the mechanics into an original ASL system.

## Environment and colour

Hero background is a deep space-black, about `#050506` to `#09090A`. This is not a literal galaxy or outer-space scene.

Palette (semantic tokens in one file, never raw hex in components):

| Token | Value | Role |
|---|---|---|
| `--color-void` | #050506 to #09090A | hero space-black |
| `--color-ink` | #111214 | charcoal sections |
| `--color-burgundy` | #621B2A | large surfaces and section backgrounds, later in the page |
| `--color-bone` | #F6F1E8 | main particles and primary type |
| `--color-gold` | #C6A15B | rare accent: hairlines, CTA hover, the odd bright spark |
| `--color-slate` | #6C737D | secondary text |

Burgundy rule: do NOT use burgundy in the opening Mutable Matter sequence. Hero background is space-black, main particles are warm bone or pale neutral, ambient specks are dim pale neutral. Burgundy enters later through sections, large surfaces, transitions, typography fields, navigation states and the final CTA. Never make the main particles burgundy: it has poor contrast on near-black. Check text contrast (WCAG AA) on every surface.

## Particle model

- One primary population, identical particle count in every formation. Desktop `high` default 60,000, tunable from 40,000 up to about 100,000 in the dev panel (see the Composition, scale and flow paragraph under Shader and motion rules).
- Formation targets are deterministic `Float32Array` data: `aRoamTarget`, `aCloudTarget`, `aHelixTarget`, `aFilamentTarget`, `aLogoTarget`.
- **Target correspondence is mandatory.** Particle `i` has a position in every formation. Do not assign them randomly. Reorder each formation's points by sorting along a shared key (for example polar angle around the vertical axis, then height, or a path parameter) so neighbouring particles stay neighbours across states. Random assignment makes particles cross the screen in chaotic straight lines.
- Never create particles as React components or hold positions in React state. Never update particles individually from JavaScript per frame. All animation is in the shaders, driven by uniforms.
- Per-particle attributes: random seed, activation threshold, group, phase, offset, size class, mass.
- **Ambient layer:** a separate, cheap point layer of about 1,000 to 3,000 specks. Very small, low brightness, scattered through depth, extremely slow, with subtle parallax. They do not take part in morphs. They must never read as a galaxy, starfield screensaver, nebula or constellation, and must stay visually subordinate to the main particles.

## Shader and motion rules

**Progressive morphing.** Never mix all particles between states at once. Use per-particle thresholds and delays so formation and dissolution are staggered. Example: particles near the future core form the helix before the outer cloud does; logo regions resolve as their filament groups arrive.

**Curved transit.** Linear interpolation looks cheap. During each transition add per-particle curl-noise and spiral offsets whose amplitude peaks mid-transition and is zero at both endpoints (for example scaled by `sin(PI * localT)`).

**Pointer and touch.** Map the pointer into a world-space interaction plane and pass it as a uniform. Compute local radial displacement plus a swirl component in the shader, and let particles recover toward the current target. Keep a short pointer history (last 16 to 32 positions) as a uniform array so the pointer leaves a soft, tapered trail of light. Feel: soft, tactile, material, restrained. No explosive scattering. Touch devices get a simplified equivalent and `touch-action: pan-y` so scrolling is never blocked.

**Velocity stretch.** There is no stored velocity, so compute apparent velocity in the vertex shader by evaluating the particle position at `t` and `t + dt`. Stretch the sprite along its screen-space velocity while moving fast, and return to round at rest.

**Particle character (a requirement, not polish).** Uniform flat dots are a defect.
1. Heavy-tailed size mix: most particles tiny (about 1 to 2 px), fewer medium, and 1 to 2 percent at most large, soft, out-of-focus discs near the camera. Cap large ones for fill-rate.
2. Sprite shape: a crisp bright core with a soft falloff edge. Additive blending, `depthWrite: false`, so overlap brightens and density creates luminosity. Not soft glowing dust, not hard flat circles.
3. Depth of field: dim and blur by distance from a focal plane (circle of confusion), with perspective parallax and slight depth fog.
4. Per-particle variation in size, brightness, twinkle phase and mass. Heavy particles respond slowly, light ones quickly.
5. Formed shapes never freeze: small breathing and shimmer, edge-weighted density, slightly brighter edges, a sparse halo of drifting sparks.
6. Colour varies subtly between bone and warmer cream, with a very rare gold hint in the brightest sparks. No blue, violet or neon.
7. Glow comes mainly from the sprites and additive overlap. No bloom in Phase 1.

**Composition, scale and flow (the scene owns the whole viewport).** The canvas is full-bleed and fixed. A small formation floating in the middle of an empty frame is a defect.
1. **Camera and framing.** Use a fairly wide field of view (about 55 to 70 degrees) with the camera inside or close to the particle volume, so the matter wraps around the viewer and particles extend beyond every edge of the frame.
2. **Scale targets (desktop, 16:9):** the roaming field fills the entire frame with a depth gradient. The cloud spans at least about 60 percent of viewport height. The helix spans about 85 to 100 percent of viewport height (it may run past the top and bottom edges) and about 25 to 30 percent of width. Filaments sweep edge to edge, with at least three streams crossing the central third of the screen and some entering or leaving the frame. The ASL mark spans roughly 40 to 55 percent of viewport width.
3. **Offsetting is fine, shrinking is not.** A formation may sit left or right of centre to compose with HTML text, but it must stay large.
4. **Negative space is intentional breathing room**, such as around the final mark for the hero text. It is never an empty middle with a tiny object in it.
5. **Mass conservation.** The same particles are always visible and nothing disappears. Density stays high through every transition.
6. **Unravelling keeps its volume.** The helix stretches into thick, voluminous ribbons (varying width and depth), not into hairlines. Filaments need body: a width profile (thick in the middle, tapering at the ends), cross-section thickness, and a halo of fine particles. Single-line trails are only for the pointer trail.
7. **Overlapping transitions.** The next state starts forming while the previous one is still finishing (overlap of about 20 to 30 percent of each window), so the frame never resets to a sparse field between states.
8. **Particle budget follows coverage.** A full-bleed scene needs more points than a centred object. The `high` tier default is 60,000, tested up to 100,000. Choose by screenshot review and measured fps. Scale point size with viewport and DPR so density reads the same on large monitors.
9. **Measure it.** The dev panel must show, per state, the projected bounding box of the main particles as a percentage of viewport width and height. Report these numbers.

**Stateless today, GPGPU later.** Phase 1 is shader-driven target interpolation. Move to GPGPU ping-pong textures only if a later requirement needs persistent velocity, collisions, fluid-like interaction or behaviour that target interpolation cannot express. Do not add GPGPU because it is impressive.

## One scene progress value

There is exactly one canonical value, `sceneProgress` from 0.0 to 1.0, owned by GSAP ScrollTrigger and written to a small shared store. Everything derives from it: particle morphs, cloud density, helix formation, filaments, camera, UI timing, logo formation and hero reveal. No unrelated scroll listeners, no reading `window.scrollY` in components.

The opening sequence is one pinned section about 700vh long, scrubbed with moderate smoothing (about 0.8 s). Default mapping (tunable, not permanent):

| sceneProgress | State |
|---|---|
| 0.00 to 0.15 | Roaming field |
| 0.15 to 0.28 | Roam to dense cloud |
| 0.28 to 0.46 | Cloud to DNA helix |
| 0.46 to 0.52 | Helix hold |
| 0.52 to 0.69 | Helix to filaments |
| 0.69 to 0.82 | Filament travel |
| 0.82 to 0.94 | Filaments to stylised ASL mark |
| 0.94 to 1.00 | Logo settle and hero DOM reveal |

## Architecture

- Next.js App Router. Prepare routes: `/`, `/work`, `/work/[slug]`, `/capabilities`, `/about`, `/contact`.
- The WebGL `ExperienceCanvas` lives in a persistent app-level shell (root layout) so route changes can morph the same particles. Pages never mount their own canvas.
- Load the canvas client-side only. In current Next.js, `dynamic(..., { ssr: false })` cannot be used directly inside a Server Component such as the root layout, so mount it through a small Client Component wrapper (for example `ExperienceShell`) and use whatever pattern is valid for the installed Next.js version. The canvas must never block first paint or worsen LCP. All meaningful content is normal server-readable DOM.
- Keep the renderer separate from business content. Content is typed data, never inline in JSX: `content/site.ts`, `content/navigation.ts`, `content/capabilities.ts`, `content/projects.ts`.
- Dispose geometries, materials and render targets on unmount. No leaks across route changes.

```
src/
  app/                  routes, root layout (hosts the persistent canvas)
  components/           HTML UI
  content/              typed copy and data
  particles/
    engine/             uniforms, tiers, scene progress wiring
    formations/         roam, cloud, helix, filaments, logo (one file each)
    logo/               logo target source (see The ASL mark section)
    shaders/            vertex and fragment sources
    states.ts
  lib/                  store, utils
  styles/               tokens, globals
docs/                   brand doc, phase prompts, particle-reference/
```

Adding a new formation must only require a new file in `formations/` and a registry entry. The system must later accept a custom model or point cloud as a formation.

## The ASL mark (provisional)

There is no approved ASL logo file. For now create a temporary, original, procedural monogram target, clearly marked `PROVISIONAL` in code and content.

Build it as **one continuous spline path that passes through stylised A, S and L forms**, sampled into points with a small thickness. This matches the filament motif (filaments converge into one stroke) and is far more reliable than inventing three separate letter shapes. Requirements: recognisably A, S and L, custom, geometric and flowing, premium, strong silhouette, not a system font spelling "ASL", not visually copied from an existing company.

Keep the logo target source modular behind one function (`getLogoPoints(count)`), so an approved SVG or vector path can replace it without touching the particle engine. The same path is exported as SVG for the no-WebGL and reduced-motion fallbacks.

The mark assembles progressively: different regions resolve at slightly different times as separate filament groups arrive. Once formed, most motion stops, tiny peripheral particles keep settling, and the mark stays visibly alive but calm.

## Content integrity

Realistic placeholder copy is allowed. Never fabricate client names, logos, testimonials, awards, partnerships, revenue, conversions, user numbers, project metrics or claimed outcomes. Label placeholder proof clearly and set `isPlaceholder: true` in the content files.

Primary CTA label: **Book a Call**, linking to `/contact` until a real booking URL exists (keep the URL in one content constant so it is a one-line swap). Secondary CTA: **Explore Our Work**, linking to `/work`.

**Placeholder proof is allowed for layout review.** A proof strip with obviously generic placeholder entries (`Project Name`, `Sector`, `Outcome`) may be rendered so the page layout can be judged. Every such entry carries `isPlaceholder: true` in the content data so it is trivial to find and replace. Never use real company names, logos, numbers, testimonials or awards in it.

## Accessibility and SEO

- Canvas is `aria-hidden="true"`. Essential copy is never rendered only in WebGL.
- Semantic HTML, correct heading order, real links and buttons, full keyboard use, visible focus styles, skip link.
- Next.js metadata per page, Open Graph tags, sitemap, robots.
- `prefers-reduced-motion`: a calm, near-static render of the settled ASL mark. No WebGL: a designed static fallback using the exported SVG mark. In both cases the user still gets a designed hero, the ASL identity, all content, full navigation and working CTAs.
- Mobile gets a lighter version (see the Performance section). It is lower priority for now.

## Performance

- Desktop `high` tier: about 60,000 main particles (test up to 100,000) plus 1,000 to 3,000 ambient specks, 60fps on a capable modern laptop. If 60,000 cannot hold about 60fps, lower it and report the reason. Investigate and report any sustained drop below about 50fps.
- Quality tiers `high`, `medium`, `low`, detected at startup with a manual dev override. They control particle count, DPR cap (max 2), noise octaves and interaction complexity.
- Mobile target: about 15,000 to 20,000 main particles and fewer ambient specks, at least 30fps.
- Prefer stable performance over arbitrary particle counts. Code-split the 3D bundle.
- **Numbers are targets, not laws.** Particle counts, pointer-history length, scroll length, smoothing values and similar figures in these documents are starting targets. You may change one when the visual result or smoothness is clearly better, and you must report the change and why. The composition, scale and flow rules are NOT negotiable in this way.
- **Headless and cloud fps is not real fps.** A headless, cloud or software-rendered browser has no real GPU, so WebGL runs far slower there than on a user's laptop. Never lower particle counts, quality or effects because of fps measured in such an environment. Report that number as "not representative" and keep the defaults. The user will tune on real hardware with the dev panel. An fps target that cannot be measured honestly is not a failed check.

## Homepage structure (do not add sections)

1. Mutable Matter opening sequence
2. Stylised ASL mark with main positioning and CTA reveal
3. Capabilities
4. Calm statement and proof section (burgundy)
5. Final conversion experience
6. Footer

Do not add: How ASL Works, generic bento service grids, dashboard visuals, big testimonial carousels, fabricated proof, or unnecessary sections.

## How to work and review

- Work task by task. Phase 1 is split into Task 00 (project bootstrap) and Task 01 (Mutable Matter engine). Every task has a stop gate: stop there, report, and wait for review. Never continue into the next task or phase on your own.
- Before reporting, run lint, typecheck and a production build and fix everything. Verify at runtime, and capture desktop screenshots (Playwright) of every relevant state.
- Report format: (1) what was built, (2) how to run it, (3) packages added, (4) measured fps and particle counts per tier with hardware, (5) screenshots, (6) accessibility notes, (7) known limitations and shortcuts, (8) recommended next step, (9) questions for creative review.
- **Visual QA, honestly.** You cannot reliably judge aesthetics. Capture screenshots of every state at 1440x900, 1920x1080 (if practical) and 390x844, and inspect them for objective failures: a scene that is small or floating in an empty frame, hairline filaments, uniform identical dots, text over dense particles, overflow, broken layout, missing states. Fix those. Save screenshots to `docs/screenshots/<task>/`. Leave subjective polish to the user's review and do not spend the run re-tuning looks blind.
- **Commit after each task** with the message `Task 0X complete` so the user can roll back to any stage.
- **Stop rule.** If the Task 01 acceptance checks still fail after three repair attempts, stop, report exactly what fails, and do not start later tasks.
- When a prompt says the task STOP lines are internal checkpoints, treat them as self-review points and continue only if the checks for that task pass.
- Prefer small readable modules. No dead code or commented-out experiments.
- If a requirement is ambiguous, take the most conservative choice, note it in the report and continue. Ask only when blocked.
