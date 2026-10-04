# AGENTS.md — ASL Website Permanent Project Rules

Read this file fully before every implementation, refinement, QA, or maintenance task.

These rules are permanent unless a task explicitly overrides a specific rule. Brand story, page flow, and approved copy direction live in `docs/ASL_BRAND_AND_STORY.md`. If there is a conflict, this file wins on engineering/architecture and the brand document wins on brand/story/copy.

This is an active project. Tasks 00–02 and the Builder 2 refinement have already produced a working implementation. Preserve sound existing architecture and working behaviour unless a later task deliberately replaces it.

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

The same visual language should continue into capability states, section transitions, residual matter, and later route-driven experiences.

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
- The particle engine must use the actual ASL mark geometry as the logo target.
- Keep the particle logo target behind a modular API such as `getLogoPoints(count)` or `getASLMarkPoints(count)` so future brand-asset changes do not require particle-engine rewrites.
- For particle formation, sample the actual mark-only vector paths. Do not sample the lockup wordmark as text.

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
- scroll-linked typography and section transitions

### Anime.js

Responsible for event-driven or non-scroll DOM/SVG motion where it adds real value, including:

- inner-route loader animation
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

## ASL Motion Language

ASL uses three motion levels.

### Level 1 — Spatial / spectacular

Reserved for Mutable Matter:

- cloud formation
- DNA formation
- helix unravelling
- filaments
- particle logo formation
- route-driven particle state changes

This level is rare and visually dominant.

### Level 2 — Editorial choreography

Used across the DOM layer:

- clipped/masked headline reveals
- line-by-line or phrase-by-phrase typography
- large editorial numbering
- rules extending/retracting
- section wipes
- surface transitions
- sticky capability choreography
- coordinated text + material state changes
- subtle parallax and depth in editorial compositions

This is the main missing luxury layer. It should make the HTML experience feel authored rather than static.

### Level 3 — Microinteraction

Used quietly throughout:

- nav link indicators
- button arrows
- restrained magnetic CTA response
- logo/mark hover detail
- menu transitions
- small line/path movement
- form-field feedback

Luxury comes from consistency and restraint, not from animating everything.

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
| `--color-void` | #050506 to #09090A | hero / route-loader space-black |
| `--color-ink` | #111214 | charcoal sections |
| `--color-burgundy` | #621B2A | major later-page surfaces |
| `--color-bone` | #F6F1E8 | particles and primary type |
| `--color-gold` | #C6A15B | rare accent only |
| `--color-slate` | #6C737D | secondary text |

Use semantic tokens rather than raw colour literals throughout components.

### Burgundy rule

Do not use burgundy in:

- the opening Mutable Matter sequence
- the route loader / identity transition

Opening treatment:

- space-black background
- warm bone/pale primary particles
- dim neutral ambient specks

Burgundy enters later through substantial section surfaces, typography environments, navigation states, transitions, and CTA environments.

Do not make the main particle population burgundy.

---

## Environmental Texture and Residual Matter

The ASL experience must not consist of a high-detail WebGL hero followed by flat HTML sections.

Mutable Matter leaves visual residue throughout the site.

Later sections may contain a restrained secondary population of small bone-coloured particles or fragments derived from the persistent particle world.

These must remain subtle and compositional rather than becoming another particle spectacle.

Use residual matter to:

- maintain continuity between sections;
- support typography composition;
- create depth;
- connect section transitions;
- reinforce the idea that the entire site is made from one digital material.

Outside the main hero sequence, particle activity should generally decrease rather than disappear completely.

Section backgrounds should also have subtle physical texture.

Use combinations of:

- very fine low-opacity grain;
- broad restrained lighting gradients;
- slight vignetting;
- subtle tonal variation;
- occasional soft illumination near particle density;
- quiet directional light fields.

Avoid:

- obvious noise overlays;
- grunge;
- visible repeating texture patterns;
- gradient blobs;
- neon glows;
- animated noise that materially harms performance;
- decorative starfields.

The intended result is tactile, cinematic, premium, and dimensional rather than flat.

Suggested environmental rhythm:

**Hero**
- space-black
- atmospheric depth
- grain
- ambient specks

**Capabilities**
- charcoal
- fine grain
- residual particles
- architectural light
- editorial rules/lines

**Statement**
- textured deep burgundy
- near-still matter
- sparse bone points
- strong editorial typography

**Final CTA**
- near-black / dark burgundy
- perimeter particles
- restrained convergence
- directional light toward the conversion area

Particles may visibly cross section boundaries where useful so transitions feel continuous rather than like separate stacked webpage blocks.

Residual particles outside the hero should usually be sparse enough that typography remains dominant.

---

## Section Continuity

The homepage should feel like one authored environment, not stacked sections.

Avoid hard visual resets between:

- hero → capabilities
- capabilities → burgundy statement
- burgundy statement → final CTA

Prefer transitions where one visual system becomes the next.

Examples:

- a filament becomes an editorial rule;
- residual particles cross into the next section;
- particle density recedes while typography takes over;
- a dark surface gradually warms into burgundy;
- near-still burgundy matter begins gathering again before the final CTA.

The user should feel a continuous material journey even when the composition changes radically.

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

Client-only WebGL mounting must use an architecture compatible with the installed Next.js version.

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

## Route Loader and Identity Transition

### Home

The homepage (`/`) does **not** use a branded loader.

The Mutable Matter opening sequence is the homepage arrival experience and must begin directly.

Do not delay the homepage with a separate logo intro.

### Inner-route direct entry

The branded particle loader is reserved for direct entry to inner routes:

- `/work`
- `/work/[slug]`
- `/capabilities`
- `/about`
- `/contact`

The loader uses the canonical ASL vector mark.

### Loader behaviour

Begin in the same space-black material environment used by Mutable Matter.

A sparse population of warm bone-coloured particles exists around the viewport and through depth.

Particles progressively accelerate inward.

The motion must NOT resemble:

- a black hole
- galaxy spiral
- reverse explosion
- portal
- generic particle vortex

Initial motion is broad attraction.

As the animation progresses, particles transition from centre-directed movement into target-directed curved trajectories toward sampled coordinates of the canonical ASL mark.

The mark progressively resolves from the incoming matter.

Different mark regions should form at slightly different times.

Particles may slightly overshoot their target positions before recovering and settling so the mark feels physical rather than mathematically snapped into place.

Once formed:

- most particles settle;
- a small residual population may continue subtle movement;
- the mark remains clearly legible;
- route content reveals quickly.

The loader is an identity transition, not a fake progress indicator.

Do not display percentages or invented loading progress.

### Timing

A direct inner-page entry should target roughly 1.0–1.4 seconds, subject to visual tuning.

Do not unnecessarily delay usable page content.

### Client-side navigation

Do not replay the complete direct-entry loader on every internal navigation.

Because the `ExperienceCanvas` persists across routes, use a shorter material transition where appropriate:

```text
current route state
→ brief inward convergence
→ canonical ASL mark
→ release into target route state
```

Target roughly 0.5–0.8 seconds where appropriate.

### Route release states

After ASL forms, its particles may release differently according to route:

- Work: recede toward the frame edges so project imagery can dominate.
- Capabilities: reorganise toward structured material states.
- About: release into very quiet atmospheric drift.
- Contact: remain relatively concentrated around the conversion environment.

These are one visual system, not separate loaders.

### Colour

Loader and inner-route identity transitions use:

- space black;
- warm bone / cream particles;
- subtle pale highlights.

Do not introduce burgundy into the loader.

### Reduced motion

The loader remains animated when `prefers-reduced-motion` is enabled.

Reduced-motion mode may lower:

- travel distance;
- acceleration;
- depth movement;
- overshoot;
- particle velocity.

It must not remove the identity-formation sequence.

### No-WebGL

The no-WebGL fallback should reproduce the same conceptual sequence with SVG / CSS / Anime.js as far as practical:

```text
scattered points / line fragments
→ inward movement
→ canonical ASL mark formation
→ page reveal
```

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

### Capabilities

Capabilities are a continuous editorial sequence, not four repeated cards.

The material states remain:

- Design → lattice
- Development → strata
- Deployment → directed stream
- Digital Products → living cluster

Their DOM compositions should feel materially different enough to avoid repetition while remaining part of one system.

Use typography, numbering, rules, placement, and controlled motion to strengthen differentiation.

### Burgundy statement

This is a deliberate visual-rest moment, not a dead section.

Use:

- textured burgundy environment
- near-still residual matter
- strong editorial typography
- subtle rule/line choreography
- minimal but deliberate motion

### Final CTA

Treat the final conversion as a callback to the hero rather than a replay.

Prefer:

- quieter convergence
- perimeter/residual particles
- CTA-led composition
- partial or offset brand geometry
- calm motion

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

- inner-route loader animation
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

Environmental grain/texture should be implemented cheaply. Avoid large animated noise shaders or huge texture assets when a lightweight CSS/SVG/repeating-noise solution can achieve the same result.

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
- poor logo legibility;
- hard section seams;
- flat backgrounds;
- motionless DOM compositions that feel disconnected from WebGL;
- residual particles overpowering text;
- grain/noise that is visibly obvious.

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

==================================================
CURRENT CREATIVE DIRECTION UPDATE
APPLIES FROM TASK 04 ONWARD
==================================================

The implementation completed through Task 03 is the current baseline.

DO NOT restart the application.
DO NOT recreate existing architecture unnecessarily.
DO NOT replace working particle/shader/route/brand systems merely to conform
to newer wording in this document.

From Task 04 onward, modify and extend the existing implementation.

If an older rule conflicts with this update, THIS UPDATE wins.


==================================================
1. OPENING ENVIRONMENT
==================================================

The Mutable Matter opening remains predominantly SPACE BLACK.

Use a very deep black such as approximately:

#050506
to
#09090A

The environment should contain a subtle layer of tiny ambient particles
distributed throughout depth.

These particles:

- are much smaller than the main Mutable Matter particles
- are much dimmer
- move extremely slowly
- create spatial depth
- remain visually secondary
- do not participate in the primary morph sequence

The visual result may suggest an infinite dark digital space but must NOT
become literal astronomy.

Avoid:

- visible galaxies
- nebula imagery
- obvious constellations
- colourful stars
- sci-fi space photography

The main Mutable Matter remains warm bone / pale neutral.


==================================================
2. BURGUNDY
==================================================

DO NOT introduce burgundy into the opening Mutable Matter sequence.

The opening remains:

space black
+
bone/pale particles
+
subtle pale ambient particles

Burgundy becomes important AFTER the opening experience.

It should appear substantially in later homepage environments.

It must not be treated merely as a tiny accent colour.


==================================================
3. HORIZONTAL DNA
==================================================

The DNA formation is now canonically HORIZONTAL.

The main helix axis runs approximately:

LEFT → RIGHT

across the viewport.

It should have:

- substantial horizontal length
- strong three-dimensional depth
- elegant twist
- slight yaw/perspective
- clear silhouette
- room around it for negative space

It must not look like a flat side-on biology diagram.

A small amount of perspective rotation is encouraged.

The camera may gently move:

- along the helix axis
- slightly around the structure
- or with restrained parallax

Do not use aggressive orbiting.


==================================================
4. INITIAL SITE AWAKENING
==================================================

The website should not simply appear fully rendered on first load.

Introduce a short SITE AWAKENING sequence before the main scroll experience.

Target duration:

approximately 1.2–1.8 seconds.

Conceptual progression:

BLACK
→
background texture becomes faintly perceptible
→
a few ambient depth particles appear
→
a restrained spatial / particle disturbance occurs
→
Mutable Matter becomes visible
→
navigation / interface settles into place

This should feel like the digital environment waking up.

DO NOT create:

- loading spinner
- fake loading percentage
- progress bar unless actual loading requires it
- ENTER WEBSITE button
- long intro
- unskippable animation
- audio requirement

The user must be able to interact quickly.

Do not replay the complete awakening during normal internal route navigation.

For prefers-reduced-motion:

use an elegant short fade/state reveal instead.


==================================================
5. SECTION LAYOUT RHYTHM
==================================================

After the full-screen opening, major homepage editorial sections should
generally alternate composition.

Preferred rhythm:

SECTION A
TEXT LEFT
VISUAL / INTERACTIVE CONTENT RIGHT

SECTION B
VISUAL / INTERACTIVE CONTENT LEFT
TEXT RIGHT

SECTION C
TEXT LEFT
VISUAL / INTERACTIVE CONTENT RIGHT

SECTION D
VISUAL / INTERACTIVE CONTENT LEFT
TEXT RIGHT

Continue this rhythm where compositionally appropriate.

Do NOT mechanically alternate every tiny content block.

The final CTA, footer and special cinematic moments may use centred or other
layouts when stronger.


==================================================
6. TEXTURED BACKGROUNDS
==================================================

Do not use perfectly flat large colour backgrounds for major editorial
sections.

Create a reusable premium environment texture system.

CHARCOAL / BLACK SECTIONS may use:

- extremely fine grain
- graphite/mineral tonal texture
- subtle low-frequency noise
- controlled directional falloff
- faint cloudy variation
- extremely subtle burgundy undertone where useful

BURGUNDY SECTIONS may use:

- deep pigment-like tonal variation
- subtle grain
- charcoal shadowing
- low-frequency texture
- restrained directional light falloff

The goal is MATERIAL DEPTH, not visible texture effects.

Avoid:

- grunge
- obvious paper texture
- distressed surfaces
- strong film noise
- looping/repeating texture patterns
- visible JPG-style overlays
- anything that reduces text readability

Implement texture economically using CSS, gradients, procedural noise,
small reusable assets or shaders as appropriate.

Do not add a heavy texture library solely for this purpose.


==================================================
7. SUBTLE COLOUR CROSS-CONTAMINATION
==================================================

Sections should not feel like isolated blocks of unrelated colour.

Allow controlled cross-contamination.

Examples:

charcoal sections may contain:
- a very faint burgundy undertone
- burgundy reflected light
- low-opacity burgundy gradients

burgundy sections may contain:
- charcoal shadow regions
- near-black falloff
- graphite depth

Keep the effect restrained and premium.


==================================================
8. STYLISED ASL MARK
==================================================

There is currently no requirement for an approved final production SVG logo
during the visual-development stage.

Where the particle system needs an ASL target, maintain a stylised,
provisional ASL mark that can later be replaced.

Requirements:

- clearly connected to A / S / L
- custom rather than ordinary typed text
- strong silhouette
- premium technology character
- visually cohesive
- modular target-generation implementation

Do not treat the current generated/procedural mark as permanently approved
brand identity unless explicitly confirmed later.


==================================================
9. DEVELOPMENT CONTROLS
==================================================

The existing development controls may be extended.

Useful controls include:

scene state:
- ROAM
- CLOUD
- DNA
- FILAMENTS
- ASL

and:

- sceneProgress
- point size
- ambient particle density
- ambient particle brightness
- ambient depth spread
- pointer radius
- pointer strength
- cloud density
- cloud spread
- DNA length
- DNA radius
- DNA turns
- DNA twist
- DNA perspective/yaw
- filament count
- filament spread
- logo scale
- texture intensity
- quality tier
- DPR

These are DEVELOPMENT-ONLY controls.

Do not expose them to production visitors.


==================================================
10. PRESERVATION RULE
==================================================

Before modifying a system introduced during Tasks 00–03:

1. inspect the existing implementation;
2. understand why it exists;
3. preserve working behaviour where possible;
4. make the smallest clean architectural change;
5. avoid parallel duplicate implementations.

Do not leave old and new versions of the same system running simultaneously.