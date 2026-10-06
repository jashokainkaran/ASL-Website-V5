TASK 05 — HOMEPAGE ART DIRECTION, MATERIAL SYSTEM & LOADER REBUILD

The project has already been developed through Task 04.

DO NOT restart the project.
DO NOT recreate Tasks 00–04.
DO NOT replace stable architecture unnecessarily.

Read the complete current AGENTS.md first.

Inspect the existing implementation before changing anything.

This is the FINAL Task 05 specification and supersedes earlier Task 05
wording where there is any conflict.


==================================================
PRIMARY OBJECTIVE
==================================================

Refine the existing homepage into a cohesive premium ASL experience.

This task must address THREE major areas:

1. MUTABLE MATTER VISUAL REFINEMENT
2. REAL MATERIAL/TEXTURED HOMEPAGE ENVIRONMENTS
3. COMPLETE LOADER / SITE-AWAKENING BEHAVIOUR FIX

The result must not feel like:

"a page with particles floating over flat backgrounds."

It should feel like:

"a designed digital material environment in which particles, surfaces,
typography, texture, light and motion all belong to one system."


==================================================
STEP 1 — AUDIT BEFORE MODIFYING
==================================================

Inspect the current:

- loader
- loader stacking order
- loader timing
- loader lifecycle
- page visibility during loading
- persistent canvas
- homepage
- Mutable Matter states
- site-awakening
- ambient particles
- DNA geometry
- filament states
- ASL mark
- section backgrounds
- CSS texture implementation
- burgundy sections
- charcoal sections
- GSAP timelines
- Anime.js usage
- Leva controls
- mobile behaviour
- reduced-motion behaviour
- routing architecture

Briefly identify:

A. what already works;
B. what looks visually weak;
C. what is causing the loader layering problem;
D. what can be preserved;
E. what must be changed.

Then implement the task.

Do not stop after the audit.


==================================================
PART A — LOADER MUST APPEAR BEFORE CONTENT
==================================================

The current behaviour where destination/page content becomes visible and
the loader then appears behind or after it is unacceptable.

REBUILD / CORRECT THE LOADER LIFECYCLE.

The expected visual order is:

REQUEST / INITIAL APP ENTRY
→
LOADER IS THE FIRST VISIBLE LAYER
→
DESTINATION EXPERIENCE PREPARES UNDERNEATH
→
LOADER COMPLETES
→
LOADER EXITS
→
PAGE CONTENT IS REVEALED

The user must NEVER visually experience:

PAGE CONTENT
→
then loader appears

or:

PAGE CONTENT visible through/above loader

or:

loader animating behind page content.


==================================================
LOADER STACKING
==================================================

The loader must sit above the complete destination page while active.

Use an appropriate top-level overlay architecture.

Requirements:

- loader has reliable highest visual stacking priority;
- loader is not trapped inside a stacking context below page content;
- it covers the viewport fully;
- page cannot visually bleed through before intended reveal;
- WebGL canvas should not unexpectedly render above it;
- fixed navigation should not appear above it unless intentionally designed.

Inspect current z-index/stacking-context architecture rather than simply
setting an arbitrarily huge z-index.

Fix the underlying stacking/lifecycle issue cleanly.


==================================================
CONTENT VISIBILITY DURING LOAD
==================================================

The destination page may mount/render underneath for performance, but it
must remain visually unrevealed until the loader exit reaches the correct
stage.

Possible strategies include:

- root reveal state;
- opacity/visibility gating;
- clip/mask reveal;
- controlled top-level app state.

Do NOT create cumulative layout shift.

Do NOT briefly flash the page before loader activation.

Eliminate first-frame FOUC / page flash.


==================================================
LOADER TIMING
==================================================

The current loader is too fast.

Make it:

SLOWER
SLEEKER
CALMER
MORE DELIBERATE

Do not make it painfully long.

Target first-load experience:

approximately 1.8–2.6 seconds visually

depending on actual readiness.

The loader should have a minimum visual duration sufficient to feel
intentional, but it should never fake a very long loading process.

If critical assets require longer:

remain in a graceful active state until ready.

If everything is ready very quickly:

still allow the short premium entry choreography to complete.


==================================================
LOADER MOTION CHARACTER
==================================================

Avoid:

- rapid wipes
- harsh eases
- sudden scale pops
- flashing
- busy logo spins
- generic progress bars
- fake 0–100 percentage counters
- bouncing indicators
- gaming-style loaders

Aim for:

- slow acceleration
- smooth ease-in/ease-out
- long elegant curves
- controlled opacity
- subtle mask/reveal behaviour
- restrained particle awakening
- premium pacing


==================================================
LOADER / SITE-AWAKENING CONCEPT
==================================================

Use the existing loader/site-awakening system where possible.

Do NOT build a second competing loader.

Preferred visual sequence:

STATE 0
full deep black

STATE 1
extremely subtle material texture becomes perceptible

STATE 2
a few tiny ambient depth particles appear

STATE 3
a restrained horizontal/spatial disturbance travels through the environment

STATE 4
Mutable Matter begins to become visible

STATE 5
loader surface / mask slowly clears

STATE 6
main experience becomes fully visible

STATE 7
navigation / DOM content completes its settle


==================================================
LOADER → PAGE REVEAL
==================================================

The transition from loader to page must feel continuous.

Avoid simply:

loader opacity 1 → 0
page opacity 0 → 1

if a better visual transition can be achieved cleanly.

Explore restrained approaches such as:

- dark material veil lifting;
- mask opening;
- grain field dispersing;
- subtle depth reveal;
- particle field becoming visible through loader surface;
- soft directional wipe with material texture.

Do not make the reveal flashy.


==================================================
LOADER AND REAL LOADING
==================================================

Where possible, loader readiness should be connected to meaningful
application readiness.

Consider:

- hydration complete;
- WebGL canvas mounted;
- critical fonts available;
- essential scene initialised;
- critical above-the-fold assets available.

Do not wait for every non-critical site image before revealing the home page.

Do not invent a fake numerical progress percentage unless based on real
loading progress.


==================================================
REPEAT VISITS
==================================================

Do not replay the full initial loader unnecessarily on every internal route.

For now:

- full premium loader/site-awakening = initial session/site entry;
- internal route transition system will be handled separately later.

If a session-level mechanism is useful, implement it cleanly.

Do not make users watch a 2-second loader every time they click navigation.


==================================================
REDUCED MOTION
==================================================

prefers-reduced-motion:

- still cover/prevent content flash;
- dramatically simplify loader motion;
- use short opacity/material reveal;
- avoid sweeping disturbance;
- avoid unnecessary particle animation.

Accessibility must not expose the page behind the loader early.


==================================================
PART B — REAL MATERIAL BACKGROUNDS
==================================================

The homepage sections must NOT rely on particles alone for visual richness.

Every major editorial environment needs an actual designed MATERIAL
BACKGROUND SYSTEM.

Particles are an additional layer.

They are NOT the background texture itself.


==================================================
TEXTURE PRINCIPLE
==================================================

The viewer should perceive:

depth
material
light
surface
tone

without immediately thinking:

"this has a noise overlay."

Texture should be sophisticated enough to feel nearly subconscious.


==================================================
CHARCOAL MATERIAL
==================================================

Build/refine a charcoal material system using combinations of:

- near-black base
- graphite-grey tonal variation
- extremely fine grain
- large-scale low-frequency noise
- soft directional light gradients
- shadow falloff
- subtle mineral-like irregularity
- faint atmospheric depth
- optional very low-opacity burgundy contamination

The result should feel like:

graphite
dark mineral
smoked technical material
premium matte surface

NOT:

flat #111214.


==================================================
BURGUNDY MATERIAL
==================================================

Build/refine a burgundy material system.

Start from the approximate ASL burgundy family but do not use one perfectly
flat fill.

Use:

- deep burgundy base
- darker wine/oxblood tonal regions
- charcoal shadowing
- extremely subtle grain
- large-scale low-frequency texture
- restrained directional lighting
- almost-black edge/falloff regions
- very small brightness variations

It should feel like:

deep pigment
luxury material
dark stained mineral
rich photographic colour field

NOT:

a red rectangle.


==================================================
TEXTURE TECHNIQUE
==================================================

Prefer lightweight reusable techniques such as:

- layered CSS gradients;
- pseudo-elements;
- CSS masks;
- SVG noise/filter if performant;
- lightweight procedural texture;
- very small reusable noise asset;
- existing shader system where appropriate.

Do NOT add a large dependency solely to create grain.

Avoid obvious repeating patterns.


==================================================
TEXTURE LAYERS
==================================================

A section may conceptually contain layers such as:

BASE COLOUR
+
LOW-FREQUENCY TONAL FIELD
+
DIRECTIONAL LIGHT
+
SHADOW FIELD
+
FINE GRAIN
+
SUBTLE COLOUR CONTAMINATION
+
OPTIONAL PARTICLE / GRAPHIC LAYER
+
DOM CONTENT

These layers must remain restrained.


==================================================
TEXTURE MOTION
==================================================

The background does not need to be completely static.

Allow extremely subtle scroll-linked or time-based change such as:

- directional light shifting slightly;
- tonal cloud movement;
- grain remaining mostly static;
- burgundy contamination slowly changing position;
- shadow field moving subtly.

Do not animate grain aggressively.

Do not create visible "moving noise".


==================================================
PART C — SECTION COLOUR RHYTHM
==================================================

The homepage should have a controlled material rhythm.

Example:

OPENING
SPACE BLACK

↓

SECTION 1
CHARCOAL / GRAPHITE TEXTURE

↓

SECTION 2
DEEP BURGUNDY TEXTURE

↓

SECTION 3
CHARCOAL WITH BURGUNDY UNDERTONE

↓

SECTION 4
BURGUNDY / CHARCOAL HYBRID

↓

FINAL CONVERSION
DARK MATERIAL ENVIRONMENT


==================================================
COLOUR CROSS-CONTAMINATION
==================================================

Sections must not feel like isolated PowerPoint slides.

Allow:

CHARCOAL:
- faint burgundy haze
- burgundy edge reflection
- low-opacity burgundy directional field

BURGUNDY:
- black/charcoal shadows
- graphite edge falloff
- dark vignette/depth

Keep it restrained.


==================================================
SECTION TRANSITIONS
==================================================

Do not use abrupt:

charcoal
CUT
burgundy

Instead allow material transformation.

Example:

charcoal texture
→
burgundy undertone appears
→
burgundy slowly occupies larger tonal regions
→
deep burgundy environment

Reverse transition:

burgundy
→
charcoal shadows deepen
→
burgundy recedes
→
graphite environment

Use existing scroll architecture where possible.


==================================================
PART D — LEFT / RIGHT HOMEPAGE RHYTHM
==================================================

Major editorial sections continue to alternate direction.

General rhythm:

TEXT LEFT
VISUAL RIGHT

then

VISUAL LEFT
TEXT RIGHT

then

TEXT LEFT
VISUAL RIGHT

then

VISUAL LEFT
TEXT RIGHT

But do NOT create repetitive identical 50/50 layouts.

Vary:

- 40/60
- 55/45
- vertical positioning
- visual scale
- text measure
- negative space
- particle intrusion
- cropping
- section height


==================================================
PART E — MUTABLE MATTER REFINEMENT
==================================================

Refine the existing opening sequence rather than rebuilding it.

Current sequence:

SITE AWAKENING
→
ROAMING FIELD
→
DENSE CLOUD
→
SPATIAL DNA
→
DNA UNRAVELS
→
SWEEPING / BRAIDED FILAMENTS
→
FOLDED PARTICLE SURFACE
→
ABSTRACT SCULPTURAL FORM
→
STYLISED ASL MARK
→
CALM HERO REVEAL


==================================================
ROAM
==================================================

Avoid homogeneous random distribution.

Introduce:

- subtle currents
- sparse regions
- denser groups
- directional movement
- depth
- negative space

It should feel like intelligent material searching for structure.


==================================================
CLOUD
==================================================

Cloud should be:

- irregular
- volumetric
- layered
- dense toward core
- looser around perimeter

Core particles organise first.

Outer matter arrives later.

Avoid perfect sphere.


==================================================
SPATIAL DNA
==================================================

DNA is NOT flat-horizontal.

It is SPATIALLY HORIZONTAL.

Overall axis:

broadly left → right

but existing clearly in 3D.

Starting art-direction range:

yaw:
~15–25 degrees

pitch:
~5–10 degrees

roll:
small/tunable

Expose these controls rather than permanently hard-coding them.

The helix should show:

- perspective foreshortening
- one end closer to camera
- opposite end receding
- strand overlap
- depth
- slight radius/density irregularity

It must feel like computational sculpture.

Not biology textbook art.


==================================================
DNA HOLD
==================================================

Give the DNA a readable moment.

Reduce camera and particle speed briefly.

The visitor needs enough time to perceive the geometry.


==================================================
DNA → FILAMENTS
==================================================

Preserve visual continuity.

Do NOT:

fade DNA out
+
fade unrelated filaments in.

Instead:

helix strands loosen
→
curvature expands
→
ordered sections stretch
→
particles begin directional travel
→
streams emerge

The user should see the DNA physically becoming the filament system.


==================================================
FILAMENTS
==================================================

Use roughly 5–9 dominant flows.

Allow:

- varying depth
- varying density
- varying apparent thickness
- different speeds
- path crossing
- near-camera movement
- distant movement
- occasional braiding

Avoid:

- spaghetti
- perfect symmetry
- neon tubes
- excessive glow


==================================================
FOLDED PARTICLE SURFACE
==================================================

Filaments progressively merge into a large abstract surface.

The surface may:

- bend
- twist
- fold
- overlap itself
- create holes/voids
- move through depth

It should feel like:

digital material
computational membrane
architectural surface

Do NOT make it literally look like:

cloth
paper
flag
origami.


==================================================
ABSTRACT SCULPTURAL FORM
==================================================

Allow the folded surface to briefly settle into an abstract form.

Preferred territory:

- asymmetric hollow shell
- architectural monolith
- folded volume
- carved digital mass

The sculpture must visibly belong to the same Mutable Matter material.

Do not introduce random recognizable objects.


==================================================
ASL MARK
==================================================

The abstract form reorganises into the provisional stylised ASL mark.

Maintain continuity.

Examples:

- folds align toward future mark strokes;
- particle groups stretch toward logo geometry;
- different groups arrive at different times;
- peripheral particles join after core silhouette exists.

Once formed:

slow down dramatically.

Keep only:

- subtle settling
- minimal peripheral movement
- ambient background depth


==================================================
PART F — MOTION RHYTHM
==================================================

Avoid nonstop maximum motion.

Use:

ACTIVITY
→
COMPRESSION
→
FORMATION
→
STILLNESS
→
RELEASE
→
FLOW
→
FORMATION
→
CALM

Particularly important hold states:

- DNA
- sculptural form
- ASL mark


==================================================
PART G — HERO CONTENT
==================================================

All meaningful content remains DOM content.

Do not render essential text in WebGL.

Preserve realistic placeholder copy where currently used.

Never fabricate:

- client names
- metrics
- awards
- testimonials
- project outcomes

Primary CTA remains:

BOOK A CALL


==================================================
PART H — DEVELOPMENT CONTROLS
==================================================

Preserve existing development controls.

Ensure useful controls exist for:

SCENE:
- ROAM
- CLOUD
- DNA
- FILAMENTS
- SURFACE
- SCULPTURE
- ASL

MUTABLE MATTER:
- sceneProgress
- point size
- pointer strength
- pointer radius
- cloud density
- cloud spread

DNA:
- length
- radius
- turns
- yaw
- pitch
- roll
- density variation
- camera depth

FILAMENT:
- count
- spread
- depth
- braid amount

SURFACE:
- fold intensity
- twist
- depth
- scale

ENVIRONMENT:
- ambient particle count
- ambient brightness
- material texture intensity
- charcoal/burgundy contamination
- grain intensity
- directional light strength
- quality tier
- DPR

All controls remain development-only.


==================================================
PART I — MOBILE
==================================================

Do not shrink desktop blindly.

Adjust:

- main particle count
- ambient count
- DNA length
- DNA camera
- filament count
- surface complexity
- texture complexity
- DPR

Keep material backgrounds rich even when WebGL complexity is reduced.

Mobile must not become:

flat background + tiny particles + stacked text.


==================================================
PART J — ACCESSIBILITY
==================================================

Preserve:

- semantic DOM
- aria-hidden WebGL canvas
- keyboard navigation
- focus visibility
- reduced-motion mode
- no-WebGL fallback

Material/textured section backgrounds must retain sufficient text contrast.

Reduced-motion loader still prevents content flash.


==================================================
PART K — PERFORMANCE
==================================================

Do not introduce heavy per-frame CPU work for textures.

Prefer:

CSS/compositor-friendly texture
+
GPU particle rendering

over expensive JavaScript noise calculations.

Report:

- main particle count
- ambient count
- DPR
- target-buffer count
- observed FPS
- mobile quality tier
- loader readiness strategy
- whether texture layers materially affected rendering


==================================================
VISUAL ACCEPTANCE CRITERIA
==================================================

Task 05 is NOT complete merely because build succeeds.

Verify visually:

1. page content never flashes before loader;
2. loader is always visually above unrevealed content;
3. loader no longer sits behind destination page;
4. loader movement feels slow, sleek and deliberate;
5. loader does not feel excessively long;
6. transition from loader to page feels continuous;
7. opening environment has meaningful depth;
8. ambient particles remain secondary;
9. space-black environment does not resemble a galaxy;
10. DNA clearly exists in 3D;
11. DNA is broadly horizontal but spatially angled;
12. DNA visibly becomes filaments;
13. folded surface looks abstract and premium;
14. sculptural state belongs to same material language;
15. ASL mark emerges rather than appears;
16. final ASL state becomes calm;
17. charcoal sections have real material depth;
18. burgundy sections have real material depth;
19. texture exists independently from the particle system;
20. burgundy is not a flat solid block;
21. charcoal is not a flat solid block;
22. sections transition materially rather than hard-cutting;
23. alternating layouts do not look repetitive;
24. typography stays readable;
25. mobile retains material richness;
26. reduced motion still looks intentional.


==================================================
REQUIRED SCREENSHOTS / EVIDENCE
==================================================

Capture at minimum:

1. loader initial state;
2. loader mid-state;
3. loader immediately before reveal;
4. page immediately after reveal;
5. roaming field;
6. dense cloud;
7. spatial DNA;
8. DNA angled/depth view;
9. DNA unravel;
10. filament state;
11. folded surface;
12. abstract sculpture;
13. ASL mark;
14. charcoal textured section close-up;
15. burgundy textured section close-up;
16. charcoal-to-burgundy transition;
17. left-text/right-visual section;
18. right-text/left-visual section;
19. mobile hero;
20. mobile textured section;
21. reduced-motion loader if practical.


==================================================
TECHNICAL VALIDATION
==================================================

Run:

- lint where configured;
- type checking where configured;
- production build.

Fix issues introduced by this task.

Inspect the actual loader behaviour in-browser, not only through source code.

Explicitly test hard refresh / first entry so the content-flash bug cannot
be hidden by client-side navigation.


==================================================
TASK 05 HANDOFF
==================================================

After implementation and validation, create:

docs/handoffs/TASK_05_HANDOFF.md

This file will be used by a NEW CODEX CHAT for Task 06 onward.

Document:

- current app architecture;
- persistent canvas architecture;
- loader architecture;
- exactly how content reveal gating works;
- session/first-load behaviour;
- packages and their responsibilities;
- particle engine;
- shader architecture;
- formation targets;
- site awakening;
- ambient particle system;
- spatial DNA;
- filament system;
- folded surface;
- sculpture;
- provisional ASL mark;
- material texture system;
- charcoal material implementation;
- burgundy material implementation;
- section transitions;
- homepage section layout;
- current routes;
- current Leva controls;
- mobile quality strategy;
- reduced-motion/no-WebGL behaviour;
- performance observations;
- known visual weaknesses;
- known technical debt.

Include:

## DO NOT REBUILD

List stable systems future Codex sessions should preserve.

Include:

## NEXT PLANNED TASKS

Task 06 — Persistent Route Transition Language
Task 07 — Work / Spatial Archive
Task 08 — Case Study System
Task 09 — Capabilities
Task 10 — About
Task 11 — Contact
Task 12 — Final Responsive / Performance / Accessibility / SEO / QA


==================================================
FINAL RESPONSE
==================================================

Return:

1. initial audit;
2. loader bug root cause;
3. loader fix architecture;
4. loader timing;
5. page reveal strategy;
6. files changed;
7. particle changes;
8. DNA changes;
9. filament/surface/sculpture changes;
10. material texture implementation;
11. charcoal treatment;
12. burgundy treatment;
13. homepage layout refinements;
14. packages added, if any, with justification;
15. observed performance;
16. mobile behaviour;
17. accessibility/reduced-motion status;
18. build result;
19. screenshots;
20. remaining visual weaknesses;
21. location of TASK_05_HANDOFF.md.

STOP AFTER TASK 05.

DO NOT START TASK 06.