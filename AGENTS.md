# AGENTS.md — ASL Website Permanent Project Rules

Read this file fully before every implementation, refinement, QA, or maintenance task.

These rules are permanent unless a task explicitly overrides a specific rule. Brand story, page flow, and approved copy direction live in `docs/ASL_BRAND_AND_STORY.md`. If there is a conflict, this file wins on engineering/architecture and the brand document wins on brand/story/copy.

This is now an active project. Tasks 00–02 have already produced a working implementation. Preserve sound existing architecture and working behaviour unless a later task deliberately replaces it.

---

## Product

ASL is a premium technology company currently focused on website design, development, deployment, and related digital services. It may later expand into broader software, digital solutions, products, and SaaS, so the site must not feel like a small web-design agency.

The site should feel:

- premium
- dark
- cinematic
- futuristic
- sophisticated
- luxury-tech
- technically accomplished
- refined
- interactive
- memorable
- commercially credible

Avoid:

- generic SaaS landing pages
- generic AI-startup aesthetics
- purple/blue AI gradients
- decorative particle backgrounds with no meaning
- excessive glassmorphism
- generic bento grids
- dashboard mockups
- cyberpunk styling
- excessive glow
- clutter
- animation for its own sake

---

## Core Visual Concept — MUTABLE MATTER

A realtime particle system behaves as if the digital world is made from one intelligent substance. The particles are a primary visual material, not a decorative background effect.

The same primary particle population should reorganise through the canonical opening sequence:

**ROAMING FIELD → DENSE CLOUD → DNA HELIX → HELIX UNRAVELLING → SWEEPING FILAMENTS → ASL MARK → HERO UI REVEAL**

Emotional progression:

**freedom → attraction → concentration → intelligence → structure → decomposition → movement → convergence → identity → calm**

The same visual language should continue into capability states and later route-driven experiences.

---

## Canonical ASL Brand Assets

The supplied ASL geometric mark is the current canonical brand identity for this website.

Do not invent, replace, or redesign the mark unless a task explicitly requests a brand redesign.

Canonical asset locations:

```text
public/
  brand/
    asl-mark-light.svg
    asl-mark-dark.svg
    asl-lockup-light.svg
    asl-lockup-dark.svg

src/
  components/
    brand/
      ASLMark.tsx
      ASLLogo.tsx
      ASLLoader.tsx

  styles/
    brand/
      asl-loader.css

docs/
  brand/
    README.md
```

Rules:

- Use `asl-mark-light.svg` / the equivalent inline path geometry on dark surfaces.
- Use `asl-mark-dark.svg` on light surfaces.
- Use lockups only where a standalone asset is useful.
- In React UI, prefer the vector mark plus real DOM text for the `ASL` wordmark rather than relying on SVG `<text>`.
- The mark's baseline/accent colour must be tokenised, not hard-coded, so the same mark can work on space-black, charcoal, burgundy, and light surfaces.
- The particle engine must use the actual ASL mark geometry as the logo target. Do not keep a provisional procedural monogram once the canonical vector asset is available.
- Keep the particle logo target behind a modular API such as `getLogoPoints(count)` or `getASLMarkPoints(count)` so future brand-asset changes do not require particle-engine rewrites.

For particle formation, sample the actual mark-only vector paths. Do not sample the lockup wordmark as text.

---

## Loader Direction

The existing Anime.js loader is a useful foundation and should be adapted rather than discarded.

Current direction: **Incomplete Signal**.

The loader should suggest the ASL identity without exhausting the full hero payoff.

Desired sequence:

**space-black → sparse ambient matter → fragments/strokes of the ASL mark begin forming → signal/path motion → near-alignment → loader dissolves into the Mutable Matter hero**

Rules:

- Use the canonical ASL vector geometry.
- Space-black + bone/pale neutral only during the loader.
- No burgundy in the loader or opening Mutable Matter sequence.
- Sparse ambient specks may already exist behind the loader so the transition into the hero feels continuous.
- The loader should feel integrated with the site, not like a separate splash screen.
- Target roughly 1.4–1.8 seconds unless visual testing proves a different duration is better.
- Default behaviour: play once per browser tab/session.
- Never replay on every internal route navigation.
- Anime.js is appropriate for the loader's SVG/DOM motion.
- Do not make the loader block the application indefinitely if an animation callback fails; provide a safe completion path.

---

## Core Rendering and Application Stack

Core rendering/architecture baseline:

- Next.js App Router
- React 19
- TypeScript strict
- Tailwind CSS v4 with semantic tokens
- Three.js
- `@react-three/fiber` compatible with the installed React version
- `@react-three/drei` where useful
- custom GLSL `ShaderMaterial`
- `BufferGeometry` / `BufferAttribute`
- GSAP + ScrollTrigger
- Anime.js
- Leva for development tuning only
- a dev-only performance tool such as `stats-gl` or `r3f-perf`
- pnpm with committed lockfile

The core Mutable Matter renderer remains custom. Do not replace it with a packaged particle-background component.

Additional libraries are allowed when they solve a concrete problem or materially improve the experience. They must be reviewed for dependency cost, accessibility, performance, and overlap with the current stack.

Do not add dependencies merely because they are fashionable.

---

## Animation Responsibilities

### Three.js / R3F / GLSL

Responsible for:

- particle rendering
- particle formation geometry
- particle morphing
- pointer/touch forces
- camera/depth behaviour
- shader-driven procedural motion
- particle colour/size/opacity behaviour

### GSAP + ScrollTrigger

Responsible for:

- canonical `sceneProgress`
- pinned sections
- scroll choreography
- scroll-linked DOM/WebGL synchronisation
- major scene/environment timing

### Anime.js

Responsible for event-driven or non-scroll DOM/SVG motion where it adds real value, including:

- loader animation
- navigation underline and hover details
- button/link microinteractions
- SVG path drawing
- decorative lines
- menu open/close
- form feedback
- non-scroll text/heading reveals

Anime.js must never animate the WebGL particle population and must not duplicate GSAP's scroll choreography.

If a reveal is tied directly to `sceneProgress`, GSAP owns it.

Every material Anime.js use should have a clear reason and be documented in implementation reports.

---

## External Component / Interaction Research

Implementation agents are encouraged to actively research high-quality modern creative-development sources when they can improve ASL.

Preferred sources include:

- 21st.dev
- Aceternity UI
- React Bits
- Magic UI
- Motion Primitives
- Cult UI
- shadcn/ui
- Radix primitives
- other high-quality React, WebGL, shader, animation, and creative-coding resources

Use them primarily for:

- interaction mechanics
- animation patterns
- navigation behaviour
- scroll choreography
- typography transitions
- SVG/path techniques
- microinteractions
- responsive behaviour
- gallery/project transitions
- accessibility patterns
- performance techniques
- supporting shader/WebGL ideas

They are not the ASL visual identity.

Before adopting a third-party component or pattern:

1. inspect its source and dependencies;
2. identify the exact behaviour worth using;
3. decide whether adapting/reimplementing the mechanic is better than installing it;
4. restyle/restructure it so it belongs to ASL;
5. avoid unnecessary dependency chains;
6. preserve accessibility and responsive behaviour;
7. verify it does not conflict with Mutable Matter architecture;
8. verify it does not duplicate responsibilities already handled cleanly by GLSL, GSAP, or Anime.js.

Never:

- paste a complete template and recolour it;
- use a component just because it looks modern;
- copy another site's recognisable visual identity;
- introduce generic SaaS cards/bento layouts by default;
- replace the custom Mutable Matter engine with a generic particle component;
- install a new animation library for one trivial effect.

When external work materially influences the implementation, document:

- source/library
- component/pattern studied
- mechanic retained
- whether it was installed, adapted, copied with modification, or independently reimplemented
- dependencies introduced
- changes made to make it ASL-specific

---

## Reference Material

Before visual work, inspect:

```text
docs/particle-reference/REFERENCE_NOTES.md
docs/particle-reference/reference_contact_sheet.png
docs/particle-reference/ref_*.png
```

These are behavioural references only.

Study:

- convergence
- density transitions
- formation/dissolution
- sweeping filaments
- ribbon flow
- terrain-like behaviour
- spatial depth
- negative space
- continuity between states

Do not reproduce the reference artwork, geometry, branding, layout, typography, copy, or colour treatment.

If the files are missing, continue from the written specification and report that the frames were unavailable.

---

## Environment and Colour

Hero environment: deep space-black, approximately `#050506` to `#09090A`.

This is not a literal galaxy or outer-space scene.

Semantic palette:

| Token | Value | Role |
|---|---|---|
| `--color-void` | #050506 to #09090A | hero / loader space-black |
| `--color-ink` | #111214 | charcoal sections |
| `--color-burgundy` | #621B2A | major later-page surfaces |
| `--color-bone` | #F6F1E8 | particles and primary type |
| `--color-gold` | #C6A15B | rare accent only |
| `--color-slate` | #6C737D | secondary text |

Use semantic tokens rather than raw colour literals throughout components.

### Burgundy rule

Do not use burgundy in:

- the loader
- the opening Mutable Matter sequence

Opening treatment:

- space-black background
- warm bone/pale primary particles
- dim neutral ambient specks

Burgundy enters later through substantial section surfaces, typography environments, navigation states, transitions, and CTA environments.

Do not make the main particle population burgundy.

---

## Particle Model

- One primary particle population across all main formations.
- Desktop high-tier starting point: approximately 60,000 particles, adjustable by quality/performance review.
- Formation targets are deterministic `Float32Array` data such as `aRoamTarget`, `aCloudTarget`, `aHelixTarget`, `aFilamentTarget`, `aLogoTarget`.
- Target correspondence is mandatory. Particle `i` must map meaningfully between states; avoid random target assignment.
- Never render one React component per particle.
- Never store per-particle positions in React state.
- Never update the full particle population from JavaScript each frame.
- Per-particle attributes may include seed, activation threshold, group, phase, offset, size class, mass, and other shader-friendly values.

### Ambient layer

Use a separate inexpensive ambient point layer:

- roughly 1,000–3,000 points on desktop as a starting target;
- tiny, dim, slow;
- scattered through depth;
- subtle parallax;
- not part of the morph targets;
- visually subordinate to Mutable Matter.

It must not read as a galaxy, starfield screensaver, nebula, constellation, or space photograph.

---

## Shader and Motion Rules

### Progressive morphing

Do not globally mix all particles simultaneously. Use per-particle thresholds/delays so states form and dissolve progressively.

### Curved transit

Straight-line lerps are visually weak. During transitions, use controlled curved/curl/spiral offsets whose amplitude peaks mid-transition and returns to zero at the endpoints.

### Pointer and touch

- Map interaction into world space.
- Pass pointer/touch data into shaders through uniforms.
- Use local radial displacement plus restrained swirl if appropriate.
- Particles recover naturally toward the current formation.
- A short pointer-history trail may be used if it materially improves the result.
- Keep the feel soft, tactile, material, and restrained.
- No explosive scattering.
- Touch interaction must never block native vertical scrolling.

### Velocity stretch

Apparent motion may stretch particle sprites while moving fast and return them to rounder shapes at rest. Keep it subtle enough that particles still read as material, not laser streaks.

### Particle character

Uniform flat dots are a defect.

Aim for:

- mostly tiny particles;
- fewer medium particles;
- a very small number of larger soft near-camera particles;
- crisp bright core with soft falloff;
- additive overlap where appropriate;
- depth-based dimming/softness;
- perspective parallax;
- variation in size, brightness, twinkle phase, and mass;
- formed shapes that retain subtle life rather than freezing completely;
- subtle bone-to-warm-cream variation;
- extremely rare restrained gold highlights if useful;
- no blue/violet/neon treatment;
- no bloom dependency required by default.

### Composition, scale and flow

The canvas owns the viewport. Tiny centred formations floating in empty space are a defect.

Guidelines:

- wide-ish perspective suitable for immersive depth;
- roaming field fills the viewport;
- cloud is substantial and volumetric;
- helix may span most of viewport height;
- filaments travel edge-to-edge and through depth;
- ASL mark should be large enough to function as a true identity reveal;
- negative space is intentional composition for DOM content, not emptiness caused by underscaled geometry;
- mass should feel conserved through transitions;
- helix unravelling should retain volume and body rather than collapsing into hairlines;
- transitions should overlap enough to avoid visual resets.

Particle counts and numeric values are starting targets, not vanity metrics. Choose by visual result and real performance.

---

## Canonical Scene Progress

There is exactly one canonical normalised value:

```text
sceneProgress = 0.0 → 1.0
```

GSAP ScrollTrigger owns it.

Everything major derives from it:

- particle morphs
- cloud density
- helix formation
- filament states
- camera behaviour
- logo formation
- hero reveal
- scroll-linked DOM timing

Do not create unrelated scroll listeners or read `window.scrollY` independently across components.

Default opening map (tunable):

| sceneProgress | State |
|---|---|
| 0.00–0.15 | Roaming field |
| 0.15–0.28 | Roam → dense cloud |
| 0.28–0.46 | Cloud → DNA helix |
| 0.46–0.52 | Helix hold |
| 0.52–0.69 | Helix → filaments |
| 0.69–0.82 | Filament travel |
| 0.82–0.94 | Filaments → canonical ASL mark |
| 0.94–1.00 | Mark settle + hero DOM reveal |

The exact scroll length and smoothing are tuning values, not permanent laws.

---

## Application Architecture

Use Next.js App Router.

Primary routes:

```text
/
/work
/work/[slug]
/capabilities
/about
/contact
/lab/mutable-matter
```

The persistent WebGL `ExperienceCanvas` should remain app-level so route transitions can retain visual continuity where practical.

Do not mount separate canvases per page without a strong technical reason.

Client-only WebGL mounting must use an architecture compatible with the installed Next.js version. If `dynamic(..., { ssr: false })` cannot be used directly in a Server Component layout, use an appropriate Client Component wrapper.

All meaningful content remains server-readable DOM.

Keep renderer code separate from business content.

Recommended structure:

```text
src/
  app/
  components/
    brand/
  content/
  particles/
    engine/
    formations/
    logo/
    shaders/
    states.ts
  lib/
  styles/
    brand/

docs/
  brand/
  particle-reference/
  screenshots/

public/
  brand/
```

Dispose geometries/materials/resources correctly. Avoid leaks across route transitions.

Adding a new particle formation should be modular rather than requiring renderer rewrites.

---

## ASL Mark as Particle Target

The canonical geometric ASL mark replaces the earlier provisional procedural mark.

Particle target requirements:

- sample the actual mark-only SVG/path geometry;
- preserve its recognisable silhouette;
- distribute enough points across the paths/shape to read clearly at large scale;
- form progressively as filament groups arrive;
- once formed, settle substantially while retaining subtle peripheral life;
- remain modular behind a function such as `getASLMarkPoints(count)`.

The same canonical SVG/geometry should support no-WebGL fallbacks.

Do not use plain system-font `ASL` as the final particle identity.

---

## Homepage Structure

Do not add sections without a deliberate brief.

Current structure:

1. Mutable Matter opening sequence
2. canonical ASL mark + positioning / CTA reveal
3. Capabilities
4. calm burgundy statement/proof section
5. final conversion experience
6. Footer

Do not automatically add:

- How ASL Works
- generic bento service grids
- dashboard visuals
- large testimonial carousels
- fabricated proof
- unnecessary filler sections

---

## Content Integrity

Realistic placeholder copy is allowed where clearly identified.

Never fabricate:

- client names
- client logos
- testimonials
- awards
- partnerships
- revenue
- conversion numbers
- user counts
- project metrics
- claimed outcomes

Primary CTA:

**Book a Call** → `/contact` until a real booking URL is supplied.

Secondary CTA:

**Explore Our Work** → `/work`.

Keep business URLs/configuration centralised so they can be replaced easily.

If proof content is not real, omit it or clearly label it as placeholder/forthcoming rather than presenting fake credibility.

---

## Accessibility and SEO

- WebGL canvas is decorative: `aria-hidden="true"`.
- Essential copy is never rendered only inside WebGL.
- Use semantic HTML, correct heading hierarchy, real links/buttons, keyboard support, visible focus styles, and a skip link.
- Maintain page metadata, Open Graph, sitemap, robots, and crawlable page content.
- Touch interactions must not interfere with scrolling.
- Text contrast should meet WCAG AA where applicable.

### Reduced Motion Behaviour

ASL remains animated and interactive even when the operating system reports `prefers-reduced-motion: reduce`.

Do not disable the core visual storytelling and do not replace Mutable Matter with a static screenshot solely because reduced-motion is enabled.

The following should still work:

- loader animation
- Mutable Matter movement
- cloud formation
- DNA formation
- helix unravelling
- filament motion
- ASL mark formation
- navigation animation
- page/section transitions
- CTA microinteractions

Reduced-motion mode may lower intensity by using:

- less camera travel;
- smaller parallax range;
- reduced pointer displacement;
- lower particle velocity;
- shorter travel distances;
- reduced blur/stretch intensity;
- less dramatic depth movement.

Reduced motion means **lower-intensity animation**, not **no animation**.

### No-WebGL fallback

No-WebGL remains a separate fallback path.

Use designed SVG/CSS alternatives based on the canonical ASL mark and preserve as much of the motion language as practical while keeping all content/navigation/CTAs functional.

---

## Performance

Starting quality tiers may use approximately:

- high: ~60,000 primary particles + ambient layer
- medium: ~40,000 primary particles
- low/mobile: ~15,000–20,000 primary particles

These are targets, not laws.

Quality tiers may control:

- particle count
- DPR cap (max around 2 unless there is a reason otherwise)
- shader complexity/noise octaves
- interaction complexity
- ambient count

Prefer stable performance and visual quality over a vanity particle count.

Do not downgrade defaults because of headless/cloud/software-rendered FPS. Such measurements are not representative of real GPU performance.

Distinguish performance findings as:

- measured
- observed
- inferred

Code-split the 3D bundle and avoid making WebGL block first paint/LCP.

---

## How Agents Should Work

Before changing code:

1. inspect the current repository;
2. read this file;
3. read `docs/ASL_BRAND_AND_STORY.md`;
4. read the current task/refinement/QA instructions;
5. inspect relevant reports/screenshots/reference material;
6. verify issues in the actual implementation before changing them.

Do not assume previous implementation reports are automatically correct.

For refinement work, preserve working architecture and make targeted changes unless a clear technical reason requires deeper refactoring.

Before reporting completion:

- run lint;
- run typecheck;
- run production build;
- inspect browser console;
- verify relevant routes;
- visually inspect desktop and mobile;
- capture screenshots where the task requires them;
- report checks that could not be measured honestly.

Visual QA should inspect objective issues such as:

- underscaled formations;
- uniform dots;
- hairline filaments;
- text over dense particles;
- clipping/overflow;
- broken spacing;
- missing states;
- broken reverse scroll;
- mobile collisions;
- poor logo legibility.

Subjective aesthetic decisions should be presented for creative review rather than endlessly retuned without evidence.

Use small readable modules. Remove dead code and abandoned experiments.

If a requirement is ambiguous, choose the most conservative interpretation, note it, and continue unless truly blocked.

---

## Reporting External Influence

When a coding/refinement task uses external creative-development resources, include in the final report:

- source/library;
- pattern/component studied;
- why it was useful;
- whether it was installed, adapted, or reimplemented;
- dependencies introduced or removed;
- how the result was made ASL-specific.

---

## Git / Safety

- Keep the working tree clean at task completion where practical.
- Do not rewrite published history unless explicitly instructed.
- Do not push to a remote unless the user explicitly asks or a task explicitly authorises it.
- Local commits are acceptable and encouraged at meaningful checkpoints.
- Never expose secrets, tokens, credentials, or private keys in the repository.
