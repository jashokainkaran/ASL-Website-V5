TASK 06 — ENTRY SYSTEM, HOMEPAGE NARRATIVE & ROUTE TRANSITION FOUNDATION

IMPORTANT CONTEXT:

This is a NEW Codex conversation.

You do NOT have the previous Codex chat history.

The repository itself is the source of truth.

The project has already been implemented through TASK 05.

DO NOT restart the application.
DO NOT recreate Tasks 00–05.
DO NOT replace stable working architecture without first understanding it.

Before modifying code:

1. Read AGENTS.md completely.
2. Read docs/handoffs/TASK_05_HANDOFF.md completely.
3. Inspect package.json.
4. Inspect the Next.js layouts and routing architecture.
5. Inspect the persistent canvas/WebGL architecture.
6. Inspect the loader/entry implementation.
7. Inspect the homepage Mutable Matter timeline.
8. Inspect current homepage sections and formation generators.
9. Inspect current GSAP/Anime.js/Leva implementation.
10. Inspect responsive, reduced-motion and no-WebGL behaviour.

Treat actual repository behaviour as authoritative when historical wording
differs from what was ultimately implemented.

Working principle:

PRESERVE
→ EXTEND
→ REFINE

not:

REBUILD
→ REPLACE


==================================================
PRIMARY OBJECTIVES
==================================================

Task 06 has THREE major objectives:

A. FIX THE ENTRY/LOADER SYSTEM PROPERLY.

B. CORRECT AND SIMPLIFY THE HOMEPAGE PARTICLE STORY.

C. CREATE THE PERSISTENT ROUTE-TRANSITION FOUNDATION FOR FUTURE PAGES.

Do not build the full Work page yet.

That is Task 07.


==================================================
STEP 1 — AUDIT FIRST
==================================================

Before making changes, inspect the current implementation and report briefly:

A. Current loader architecture.

B. Why page content is currently visible before the loader becomes visually
dominant.

C. Whether the issue is caused by:
- mount timing
- hydration timing
- stacking context
- route layout architecture
- loader state
- CSS visibility
- animation sequencing
- or a combination.

D. Current homepage hero states.

E. Which formation generators already exist.

F. Current persistent-canvas behaviour.

G. Which Task 05 systems should remain untouched.

Then implement the task.

Do not stop after the audit.


==================================================
PART 1 — CRITICAL LOADER BUG
==================================================

CURRENT PROBLEM:

The page content is currently visible BEFORE the loader.

The loader then appears / moves behind or around already-visible content
and exits quickly.

This destroys the intended entry experience.

THIS MUST BE FIXED AT THE ARCHITECTURAL LEVEL.

The expected visual order is:

FULL DOCUMENT LOAD
→
ENTRY COVER IS ALREADY THE FIRST VISIBLE PIXEL
→
APP / DESTINATION CONTENT PREPARES UNDERNEATH
→
ENTRY SEQUENCE PLAYS
→
ENTRY COVER EXITS
→
CONTENT BECOMES VISIBLE

The user must NEVER experience:

PAGE
→
LOADER

or:

PAGE FLASH
→
LOADER

or:

CONTENT VISIBLE THROUGH LOADER

or:

LOADER BEHIND CONTENT.


==================================================
PART 2 — FIRST-PAINT REQUIREMENT
==================================================

Do not solve this merely by mounting a loader component after React
hydration.

That can still allow a first-frame content flash.

Inspect the application shell/root layout and implement a solution where
the entry cover exists from the initial rendered document / first paint.

The exact implementation is your engineering decision, but the architecture
must guarantee that the first visible state is the entry cover.

Possible techniques may include:

- server-rendered entry cover in the root application shell;
- initial root-level CSS state;
- a top-level app reveal state;
- critical initial styles preventing page bleed-through;
- persistent overlay mounted above the entire application.

Do not rely solely on:

useEffect(() => showLoader(), [])

because that occurs too late to guarantee first-paint coverage.


==================================================
PART 3 — LOADER STACKING
==================================================

The entry cover must reliably sit above:

- WebGL canvas
- navigation
- page content
- section backgrounds
- fixed elements
- route content

while active.

Inspect stacking contexts properly.

Do not fix this by blindly using an absurd z-index while leaving broken
stacking architecture underneath.

The loader should live high enough in the application shell that nested
stacking contexts cannot place destination content above it.


==================================================
PART 4 — CONTENT MAY PREPARE UNDERNEATH
==================================================

It is acceptable — and desirable — for:

- React content
- WebGL
- fonts
- shaders
- critical hero state

to initialise underneath the entry cover.

However, NONE of it may visually appear before reveal.

Avoid:

- layout shift when the cover exits;
- page flash;
- unstyled content;
- navigation appearing early;
- canvas appearing early.

The loader is a VISUAL GATE, not a requirement to postpone all rendering.


==================================================
PART 5 — ROUTE-SPECIFIC ENTRY RULES
==================================================

There are THREE different entry/navigation behaviours.

Do not treat them as one system.


--------------------------------------------------
A. DIRECT ENTRY TO HOME `/`
--------------------------------------------------

The HOME loader MUST NOT show the ASL logo.

The homepage's narrative eventually forms the ASL identity from Mutable
Matter.

Showing the logo before that would duplicate and weaken the payoff.

HOME direct-entry sequence:

FIRST PAINT
→
deep black entry cover
→
subtle material depth emerges
→
very sparse ambient points / depth become perceptible
→
restrained directional/spatial disturbance
→
entry cover withdraws
→
almost-empty HOME particle environment
→
HOMEPAGE PARTICLE EMERGENCE begins

NO ASL LOGO inside the Home loader.


--------------------------------------------------
B. DIRECT ENTRY / HARD REFRESH ON NON-HOME ROUTES
--------------------------------------------------

Examples:

/work
/work/[slug]
/capabilities
/about
/contact

For these direct entries, a compact ASL identity entry sequence MAY be used.

Suggested concept:

deep black
→
subtle material texture
→
sparse ambient particles
→
small stylised ASL particle identity resolves
→
brief hold
→
identity releases / veil transitions into destination page

This is a compact brand signature.

It is NOT another cinematic homepage introduction.


--------------------------------------------------
C. INTERNAL CLIENT-SIDE NAVIGATION
--------------------------------------------------

DO NOT show a loader during ordinary navigation inside the running site.

Example:

HOME → WORK

must NOT be:

click
→
black loader
→
ASL logo
→
Work

Instead:

click
→
persistent Mutable Matter transition
→
Work environment

Internal navigation uses the route-transition system developed later in
this task.


==================================================
PART 6 — LOADER PACING
==================================================

The current loader exits too quickly.

Make it:

SLOW
SLEEK
CONTROLLED
PREMIUM

but not frustrating.

For a fully ready direct entry, target approximately:

1.2–1.8 seconds

of visual choreography.

Do not artificially stretch actual loading far beyond this.

If critical assets require longer:

hold gracefully in an intermediate active state.

Do not restart animations or loop aggressively.


==================================================
PART 7 — HOME LOADER STORY
==================================================

The homepage loader should have a SMALL STORY despite containing no logo.

Suggested progression:

0%–15%
deep black / almost complete stillness

15%–35%
extremely subtle material texture / tonal variation appears

35%–60%
a small number of ambient depth particles become perceptible

60%–80%
one restrained directional / spatial disturbance travels through the field

80%–100%
cover begins its slow reveal / withdrawal

Then:

HOME PARTICLE EMERGENCE STARTS.

Do not make these exact percentages rigid if a better timeline feels
stronger.

The important point is:

the loader should feel intentional rather than flying away immediately.


==================================================
PART 8 — LOADER MOTION CHARACTER
==================================================

Prefer:

- long elegant easing
- smooth acceleration/deceleration
- restrained mask movement
- controlled opacity
- subtle depth
- fine material texture
- slow movement

Avoid:

- fast wipes
- abrupt scale changes
- spinning logos
- bouncing
- loading bars
- fake percentages
- bright flashes
- glitch effects
- aggressive distortion
- gamer-style loading screens


==================================================
PART 9 — HOME LOADER EXIT
==================================================

The Home loader exit must transition naturally into the actual particle
environment.

Avoid:

BLACK RECTANGLE
→
instant disappearance
→
completely different WebGL scene

Instead make the environments visually compatible.

For example:

entry-cover ambient specks
→
cover begins withdrawing
→
underlying WebGL ambient field becomes visible
→
visual continuity makes the two feel like one environment

The cover itself can remain DOM/CSS.

It does not need to become another WebGL scene.


==================================================
PART 10 — NON-HOME DIRECT-ENTRY LOADER
==================================================

For non-home direct entry:

use the same underlying entry-cover architecture.

Do not create a separate unrelated loading system.

The only major difference is that the non-home version may include the
provisional/stylised ASL mark.

Keep the identity small and restrained.

Target visual duration:

approximately 1.2–1.6 seconds when ready.

Do not use a large hero-scale logo.


==================================================
PART 11 — REDUCED-MOTION ENTRY
==================================================

For prefers-reduced-motion:

the FIRST-PAINT COVER REQUIREMENT STILL APPLIES.

Do not expose page content before readiness.

However simplify movement to:

deep black
→
subtle material appearance
→
short controlled reveal

No sweeping disturbance.
No complex logo assembly.
No particle travel.


==================================================
PART 12 — IMPORTANT HOMEPAGE HERO CORRECTION
==================================================

The homepage hero currently attempts too many formations.

Simplify it.

THE CANONICAL HOME HERO STORY IS NOW:

PARTICLE EMERGENCE
→
FILAMENTS
→
DENSE CLOUD
→
SPATIAL 3D DNA
→
STYLISED ASL MARK
→
CALM HERO UI

THAT IS ALL.

No other major particle forms belong inside the hero.


==================================================
PART 13 — REMOVE EXTRA HERO STATES
==================================================

If currently present in the hero timeline, remove:

- folded surface
- architectural monolith
- hollow shell
- lattice
- strata
- spatial frame
- wavefront
- orbital cluster
- generic sculpture states

IMPORTANT:

Do NOT delete useful formation-generation code.

Move/preserve those systems for homepage sections and future routes.

We are simplifying the STORY, not throwing away the formation library.


==================================================
PART 14 — HOME PARTICLE EMERGENCE
==================================================

CURRENT PROBLEM:

After the loader, the homepage currently appears with fully established
filaments already moving.

It feels like the visitor has entered the experience halfway through.

Correct this.

Once the HOME loader has COMPLETELY exited, begin from an almost-empty
environment.


Desired sequence:

STATE 0
space-black environment

STATE 1
only subtle ambient depth particles

STATE 2
a very small number of primary Mutable Matter points become perceptible

STATE 3
additional main particles progressively materialise throughout depth

STATE 4
weak directional currents begin affecting them

STATE 5
short partial lines / proto-filaments appear

STATE 6
these paths extend and attract more matter

STATE 7
the complete opening FILAMENT composition becomes established


==================================================
PART 15 — EMERGENCE MUST NOT LOOK LIKE A FADE-IN
==================================================

Do not simply animate:

particleSystem.opacity = 0 → 1

The matter should appear spatially and progressively.

Possible behaviour:

- some particles emerge from depth;
- some increase subtly in point size;
- some move inward from distant positions;
- different groups activate at different times;
- weak vector currents guide the earliest particles;
- partial filament paths become increasingly legible.

The effect should communicate:

MATTER APPEARING
→
FINDING DIRECTION
→
BECOMING ORGANISED.


==================================================
PART 16 — HOME INTRO IS NOT A LOADER
==================================================

This distinction is essential.

HOME LOADER:

technical/readiness + atmospheric entry gate

HOME PARTICLE EMERGENCE:

actual creative website content

Do not merge them into one giant unskippable animation.

Target Home particle-emergence duration:

approximately 1.0–1.6 seconds.

It should begin AFTER the loader exits.


==================================================
PART 17 — USER CONTROL DURING EMERGENCE
==================================================

Do not trap the user during particle emergence.

If the visitor scrolls immediately:

- acknowledge the input;
- do not ignore the scroll;
- accelerate/resolve the emergence gracefully if necessary;
- hand control to the scroll-driven hero timeline.

The user should never feel imprisoned inside an intro movie.


==================================================
PART 18 — FILAMENT OPENING STATE
==================================================

The first fully established hero state is FILAMENTS.

Use approximately:

5–9 dominant paths

as currently appropriate.

Requirements:

- multiple depth planes
- elegant flow
- varying density
- negative space
- some near/far relationships
- no excessive glow
- no spaghetti
- no generic neon ribbons

The filaments should now feel like the natural RESULT of the emergence.


==================================================
PART 19 — HERO SCROLL TIMELINE
==================================================

After emergence completes, hero scroll progress controls:

FILAMENTS
→
CLOUD
→
SPATIAL DNA
→
ASL MARK

Use ONE canonical heroProgress.

Suggested initial mapping:

0.00–0.20
FILAMENTS

0.20–0.42
FILAMENTS → CLOUD

0.42–0.49
CLOUD HOLD

0.49–0.72
CLOUD → DNA

0.72–0.81
DNA HOLD

0.81–0.95
DNA → ASL

0.95–1.00
ASL SETTLE / DOM HERO REVEAL

These are tuning defaults only.


==================================================
PART 20 — FILAMENTS → CLOUD
==================================================

Maintain material continuity.

Do NOT:

fade filaments out
+
fade cloud in.

Instead:

filament curvature begins bending inward
→
streams shorten/compress
→
velocity becomes convergent
→
multiple paths feed a shared volumetric region
→
dense cloud core emerges
→
remaining stream particles continue arriving

The cloud is MADE FROM the filament material.


==================================================
PART 21 — CLOUD
==================================================

Cloud requirements:

- irregular shape
- strong dense core
- layered depth
- less dense perimeter
- several orbiting/exterior particles
- no perfect sphere
- no homogeneous density

Give the cloud a brief readable moment.


==================================================
PART 22 — CLOUD → SPATIAL DNA
==================================================

The dense cloud develops internal twisting organisation.

Progression:

central twist appears
→
first strand emerges
→
second strand follows
→
outer particles progressively join
→
complete helix

DNA must remain:

SPATIALLY HORIZONTAL

not flat-horizontal.


==================================================
PART 23 — SPATIAL DNA
==================================================

Its overall axis runs broadly left-to-right.

But it exists clearly in 3D space.

Starting tuning territory:

yaw:
approximately 15–25 degrees

pitch:
approximately 5–10 degrees

roll:
small / composition dependent

Expose these as development controls.

Use:

- perspective foreshortening
- overlapping strands
- one end closer to camera
- opposite end receding
- slight density irregularity
- slight radius irregularity

Do not produce a flat biology diagram.

Give the completed DNA a calm HOLD moment.


==================================================
PART 24 — DNA → ASL
==================================================

DNA now transforms DIRECTLY into the provisional ASL identity.

NO INTERMEDIATE HERO SCULPTURE.

Do not insert:

surface
monolith
shell
lattice
or unrelated abstract object.

Create a direct transformation.

Potential behaviour:

DNA slows
→
selected strand regions loosen
→
helix geometry partially opens
→
particle groups redirect
→
groups travel toward different ASL-mark regions
→
main identity silhouette becomes visible
→
remaining matter settles into it

The ASL mark must clearly feel constructed from the SAME material.


==================================================
PART 25 — ASL HERO PAYOFF
==================================================

This is the FIRST major ASL identity reveal on a normal Home experience.

Do not weaken it by showing an ASL logo in the Home loader.

When formed:

reduce motion dramatically.

Allow only:

- subtle settling
- very small edge motion
- low-level peripheral particles
- ambient depth

Then reveal / settle the real DOM hero content.

Primary CTA remains:

BOOK A CALL.


==================================================
PART 26 — OTHER FORMATIONS MOVE INTO HOMEPAGE SECTIONS
==================================================

Other abstract formations belong AFTER the hero.

Use them meaningfully.


--------------------------------------------------
DESIGN
--------------------------------------------------

Preferred visual language:

WOVEN LATTICE
and/or
FOLDED SURFACE

Meaning:

- composition
- visual systems
- shaping
- order from possibility

Suggested layout:

TEXT LEFT
VISUAL RIGHT


--------------------------------------------------
DEVELOPMENT
--------------------------------------------------

Preferred visual language:

STRATA
and/or
SPATIAL FRAME

Meaning:

- layers
- architecture
- engineering
- structure

Suggested layout:

VISUAL LEFT
TEXT RIGHT


--------------------------------------------------
DEPLOYMENT
--------------------------------------------------

Preferred visual language:

WAVEFRONT
DIRECTIONAL STREAM
DISTRIBUTED FIELD

Meaning:

- release
- propagation
- distribution
- reliability

Suggested layout:

TEXT LEFT
VISUAL RIGHT


--------------------------------------------------
DIGITAL PRODUCTS
--------------------------------------------------

Preferred visual language:

ORBITAL CLUSTER
and/or
HOLLOW / COHESIVE SYSTEM

Meaning:

- components
- ecosystem
- product behaviour
- independent pieces becoming one system

Suggested layout:

VISUAL LEFT
TEXT RIGHT


==================================================
PART 27 — SECTION MOTION RULE
==================================================

Do not turn every homepage section into another hero.

Each capability section should generally have:

ONE dominant particle idea
+
ONE controlled transformation
+
enough stillness for typography.

The visitor should not feel assaulted by demonstrations.


==================================================
PART 28 — MATERIAL BACKGROUNDS
==================================================

Preserve and refine Task 05's real material environment system.

Particles are NOT the texture.

Each major section should retain:

BASE COLOUR
+
LOW-FREQUENCY TONAL FIELD
+
SUBTLE GRAIN
+
DIRECTIONAL LIGHT
+
SHADOW
+
CONTROLLED COLOUR CONTAMINATION
+
OPTIONAL PARTICLE VISUAL
+
DOM CONTENT

Charcoal must not become flat black.

Burgundy must not become flat red/burgundy.


==================================================
PART 29 — STATEMENT / PROOF SECTION
==================================================

This section should deliberately calm the experience.

Use:

- deep textured burgundy
- strong editorial typography
- generous negative space
- very little Mutable Matter activity

Particles may nearly disappear.

Do not cover the burgundy material surface in unnecessary visual effects.


==================================================
PART 30 — FINAL CTA
==================================================

Do not repeat the hero.

Use restrained behaviour such as:

- a spline knot slowly tightening;
- a few streams developing weak attraction;
- subtle particle convergence;
- faint ASL identity echo.

The CTA remains readable and calm.


==================================================
PART 31 — ROUTE TRANSITION FOUNDATION
==================================================

After correcting the Home narrative, implement the reusable persistent
route-transition architecture.

Future page behavioural verbs:

HOME
TRANSFORM

WORK
EXPLORE

PROJECT
FOCUS

CAPABILITIES
ORGANISE

ABOUT
CONNECT

CONTACT
ATTRACT

These are conceptual motion behaviours, not visible labels.


==================================================
PART 32 — ROUTE TRANSITION CONTROLLER
==================================================

Create/refine a reusable system capable of requesting semantic transition
presets.

Conceptually something equivalent to:

transitionTo("work")
transitionTo("capabilities")
transitionTo("about")
transitionTo("contact")
transitionTo("project")

Exact API is your engineering decision.

Do not tightly couple transition logic to navigation components.


==================================================
PART 33 — HOME → WORK PROTOTYPE
==================================================

Prototype ONE polished transition:

HOME → WORK

Desired concept:

ASL/current Home matter
→
particles stretch along depth/Z axis
→
spatial separation increases
→
camera appears to travel through the field
→
visual opening into a deeper environment
→
placeholder Work destination settles

Do NOT build the complete Work archive yet.

Task 07 will do that.


==================================================
PART 34 — FUTURE TRANSITION PRESETS
==================================================

Prepare lightweight architecture/hooks for:

TO_CAPABILITIES

matter becomes increasingly ordered / structural


TO_ABOUT

matter separates into strands that begin relating / connecting


TO_CONTACT

matter becomes sparse and develops directional attraction


TO_PROJECT

scene focuses and collapses attention toward a selected spatial region

Do not fully art-direct these yet.


==================================================
PART 35 — PERSISTENT CANVAS
==================================================

Use the existing persistent canvas.

Avoid:

click
→
destroy canvas
→
blank frame
→
new canvas mounts.

The WebGL environment should remain continuous where the current architecture
allows.

Do not introduce a second competing renderer.


==================================================
PART 36 — INTERNAL NAVIGATION MUST NOT TRIGGER ENTRY LOADER
==================================================

This is critical.

Once the application is running:

internal navigation uses route transitions.

It must NOT trigger the initial document-entry loader.

Verify this explicitly.

The root entry loader should run once per full document load / hard entry,
not every client-side route change.


==================================================
PART 37 — BACK/FORWARD NAVIGATION
==================================================

Ensure browser history still works.

Visual transitions must not break:

- browser Back
- browser Forward
- direct URLs
- deep links

Do not replace semantic navigation with animation-only controls.


==================================================
PART 38 — DEVELOPMENT CONTROLS
==================================================

Update hero development states to:

EMERGENCE
FILAMENTS
CLOUD
DNA
ASL

Remove:

SURFACE
SCULPTURE

from HERO state controls.

They may remain available under SECTION formations.

Provide section previews for:

DESIGN_LATTICE
DESIGN_SURFACE

DEVELOPMENT_STRATA
DEVELOPMENT_FRAME

DEPLOYMENT_WAVE
DEPLOYMENT_STREAM

PRODUCT_CLUSTER
PRODUCT_SHELL


Also expose:

- entry loader progress/debug bypass
- home intro progress
- heroProgress
- route transition progress
- current route-transition preset
- DNA yaw
- DNA pitch
- DNA roll
- DNA length/radius/turns
- filament parameters
- cloud parameters
- section formation strength
- ambient parameters


==================================================
PART 39 — DEBUG ENTRY MODES
==================================================

Because entry behaviour is difficult to test repeatedly, provide a
development-only method to replay:

HOME ENTRY

NON-HOME ENTRY

HOME PARTICLE EMERGENCE

without requiring developers to constantly clear browser data.

This control must never appear in production.


==================================================
PART 40 — RESPONSIVE BEHAVIOUR
==================================================

Mobile must preserve:

entry-cover-before-content behaviour
+
particle emergence
+
filament → cloud → DNA → ASL concept

but may simplify:

- particle count
- filament count
- DNA length
- camera depth
- ambient count
- emergence complexity

Do not simply shrink desktop.


==================================================
PART 41 — PERFORMANCE
==================================================

Inspect target-buffer usage.

Since extra hero states are being removed, do not keep unnecessary
surface/sculpture buffers active in the hero.

Other section formations should be:

- generated lazily where useful;
- section-scoped;
- reusable;
- released/replaced where appropriate.

Avoid holding every formation in GPU memory simultaneously without reason.

Do not introduce GPGPU simply for this task.


==================================================
PART 42 — ACCESSIBILITY
==================================================

Preserve:

- semantic DOM content
- aria-hidden WebGL canvas
- keyboard navigation
- visible focus
- reduced-motion
- no-WebGL fallback

Entry loader must not permanently trap keyboard focus.

After loader/reveal:

focus behaviour must remain normal.

For route changes:

apply appropriate focus management without breaking cinematic transition.


==================================================
VISUAL ACCEPTANCE CRITERIA
==================================================

TASK 06 IS NOT COMPLETE MERELY BECAUSE THE BUILD PASSES.

VERIFY IN THE ACTUAL BROWSER:


ENTRY SYSTEM

1. On hard refresh, page content is NEVER visible before the entry cover.

2. The entry cover is the first visual state.

3. Navigation does not flash above the cover.

4. WebGL does not flash above the cover.

5. Home loader contains NO ASL logo.

6. Home loader has deliberate slow/sleek pacing.

7. Loader no longer simply flies away.

8. Home loader has a small visual progression/story.

9. Non-home direct entry can use the compact ASL identity treatment.

10. Internal navigation does NOT replay the loader.


HOME INTRO

11. After the Home loader clears, the hero is initially sparse.

12. Filaments are NOT already fully formed on the first revealed frame.

13. Main particles progressively materialise.

14. The material visibly organises into filaments.

15. The emergence feels like website content, not another loader.

16. Immediate scrolling still works.


HERO

17. Hero contains only:

EMERGENCE
FILAMENTS
CLOUD
DNA
ASL

as its major formation story.

18. Filaments visibly become the cloud.

19. Cloud visibly becomes the DNA.

20. DNA is clearly three-dimensional.

21. DNA is broadly horizontal but spatially angled.

22. DNA has a readable hold.

23. DNA transforms DIRECTLY into the ASL mark.

24. ASL mark is the first major identity reveal on Home.

25. ASL state becomes calm enough for typography.


HOMEPAGE SECTIONS

26. Design uses appropriate FORM/STRUCTURE language.

27. Development uses structural/layered language.

28. Deployment uses flow/distribution language.

29. Digital Products uses system/cluster language.

30. Extra hero shapes have been moved/reused rather than unnecessarily
deleted.

31. Textured material backgrounds remain visually substantial.

32. Statement/Proof is calmer than capability sections.


ROUTING

33. Home → Work persistent transition works.

34. Canvas does not flash/disappear unnecessarily.

35. Internal navigation avoids the loader.

36. Back/forward navigation works.

37. Reduced motion remains usable.


==================================================
REQUIRED EVIDENCE
==================================================

Capture screenshots / recordings showing at minimum:

1. very first hard-refresh frame;
2. Home loader early state;
3. Home loader mid-state;
4. Home loader immediately before reveal;
5. first frame after loader clears;
6. early particle emergence;
7. partial filament formation;
8. completed filament state;
9. filament → cloud transition;
10. dense cloud;
11. spatial DNA;
12. DNA depth/angle view;
13. DNA → ASL transition;
14. completed ASL mark;
15. Design section;
16. Development section;
17. Deployment section;
18. Digital Products section;
19. calm textured burgundy Statement section;
20. Home → Work transition;
21. direct non-home entry loader;
22. mobile entry/home state;
23. reduced-motion entry if practical.


==================================================
TECHNICAL VALIDATION
==================================================

Explicitly test:

- hard refresh on `/`
- fresh direct load on `/`
- hard refresh on a non-home route
- internal Home → Work navigation
- browser Back
- browser Forward
- mobile viewport
- prefers-reduced-motion

Run:

- lint if configured
- type checking if configured
- production build

Resolve errors introduced by this task.


==================================================
DOCUMENTATION
==================================================

Update AGENTS.md with the final canonical entry rules if they are not already
documented:

HOME DIRECT ENTRY:
logo-free entry cover

NON-HOME DIRECT ENTRY:
compact ASL identity entry allowed

INTERNAL ROUTE NAVIGATION:
no loader; persistent route transition

HOME HERO:
emergence → filaments → cloud → spatial DNA → ASL


Also create:

docs/handoffs/TASK_06_STATUS.md

Document:

- loader root cause;
- first-paint solution;
- entry-cover architecture;
- Home/non-Home entry branching;
- loader timing;
- particle-emergence architecture;
- hero timeline;
- formations removed from hero;
- section formation mapping;
- route-transition controller;
- persistent-canvas behaviour;
- Home → Work transition prototype;
- current performance;
- known weaknesses.


==================================================
FINAL RESPONSE
==================================================

Report:

1. loader bug root cause;
2. how first-paint coverage is now guaranteed;
3. loader architecture;
4. Home loader timeline;
5. non-Home loader behaviour;
6. how internal navigation avoids loader replay;
7. homepage particle-emergence implementation;
8. revised hero timeline;
9. hero formations removed/moved;
10. homepage section formation mapping;
11. route-transition architecture;
12. Home → Work transition;
13. files changed;
14. packages added, if any, and why;
15. performance observations;
16. mobile behaviour;
17. reduced-motion/accessibility status;
18. build/test results;
19. screenshots/evidence;
20. remaining visual weaknesses;
21. recommendation for Task 07.

STOP AFTER TASK 06.

DO NOT BUILD THE FULL WORK PAGE.

Task 07 will be provided separately.