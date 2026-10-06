# TASK 08 REVISION — LOADER FIX, CAPABILITY VISUAL LANGUAGE & PURPOSEFUL MOTION

Status: Ready
Type: Revision / Creative correction
Depends on: Completed Task 08

Read first:

- `/AGENTS.md`
- `/docs/handoffs/TASK_07_HANDOFF.md`
- `/docs/handoffs/TASK_08_HANDOFF.md`
- original Task 08 specification
- current `/capabilities`
- current `/projects`
- current loader/entry architecture
- current persistent-canvas route transitions
- current Mutable Matter shaders

IMPORTANT:

TASK 08 HAS ALREADY BEEN IMPLEMENTED.

Do NOT rebuild Task 08 from scratch.

This revision exists because:

1. the current loader/entry behaviour is still not correct;
2. route changes feel too fast / abrupt;
3. some capability particle forms feel arbitrary or visually weak;
4. the capability visuals do not sufficiently communicate WHY the particles
   are behaving the way they do;
5. the resulting experience is beginning to feel like particle decoration
   instead of one coherent ASL design language.

Working principle:

PRESERVE
→
AUDIT
→
CORRECT
→
REFINE

Do not destroy working production content, Projects content, forms,
accessibility or routing.


==================================================
1. AUDIT FIRST
==================================================

Before modifying anything, inspect and report:

A. current direct-entry loader behaviour;

B. current internal page-navigation behaviour;

C. whether a full loader currently appears during normal internal routing;

D. whether content can still appear before the loader;

E. loader timing;

F. how the loader exits;

G. current Capabilities particle formations;

H. why each current formation exists;

I. whether the motion actually communicates the capability;

J. whether the formations look like coherent Mutable Matter or arbitrary
   procedural geometry;

K. what should be preserved from Task 08.

Then implement the revision.

Do not stop after the audit.


==================================================
2. ENTRY SYSTEM — CANONICAL RULE
==================================================

There are TWO different systems.

DIRECT / HARD ENTRY:

use the branded entry loader.

INTERNAL NAVIGATION:

DO NOT use the branded entry loader.

Use persistent Mutable Matter transitions instead.

This distinction must be enforced.


==================================================
3. DIRECT ENTRY LOADER FIX
==================================================

The direct-entry loader must be the FIRST visible layer.

Destination content must never appear first.

Correct order:

FIRST PAINT
→
entry cover already visible
→
application prepares underneath
→
entry choreography
→
cover exits
→
destination arrival story

Never:

CONTENT
→
LOADER

Never:

CONTENT FLASH
→
LOADER FLIES AWAY

Never:

navigation/canvas appears above loader.


==================================================
4. LOADER TIMING
==================================================

The current loader feels too fast.

Slow it down.

For an already-ready direct entry, target approximately:

1.4–2.0 seconds

of controlled visual choreography.

This is not a mandatory artificial loading delay when real loading takes
longer.

If readiness is delayed:

hold elegantly at an intermediate state.

Do not restart the loader animation.


==================================================
5. LOADER CHARACTER
==================================================

The loader should feel:

- deliberate
- restrained
- cinematic
- premium
- calm

Suggested progression:

deep black stillness
→
subtle material depth
→
few ambient particles
→
small ASL identity resolves on non-home routes
→
brief hold
→
identity loosens
→
destination environment begins appearing beneath
→
cover withdraws slowly

Avoid:

- fast wipe
- logo flying off-screen
- abrupt opacity disappearance
- huge zoom
- spinner
- percentage
- flashing
- glitch
- loading bar


==================================================
6. LOADER EXIT
==================================================

The loader must not feel disconnected from the destination page.

Its final state should visually hand off to the underlying environment.

For example:

LOADER PARTICLES
→
begin separating
→
underlying route particles become visible
→
material surface underneath aligns tonally
→
cover recedes
→
page arrival continues

No obvious:

black rectangle disappears
→
unrelated page appears.


==================================================
7. INTERNAL NAVIGATION — REMOVE LOADER
==================================================

If the current implementation shows the branded loader between:

Home
Projects
Capabilities
Contact

during normal client-side navigation:

REMOVE THAT BEHAVIOUR.

Do not replace it with another loader.

Internal navigation should use the persistent canvas.

Examples:

HOME → CAPABILITIES

matter becomes ordered


CAPABILITIES → PROJECTS

matter stretches into depth


PROJECTS → CONTACT

matter becomes sparse and attracted


CONTACT → HOME

attraction releases
→
matter regains transformational behaviour


==================================================
8. INTERNAL ROUTE PACING
==================================================

Although internal navigation should not use a loader, the transition must
not happen too quickly.

The current inter-page movement feels rushed.

Target initial tuning territory:

approximately 0.9–1.4 seconds

for a substantial route transition.

Do not lock the user unnecessarily.

Aim for:

CLICK
→
visual response immediately
→
matter changes state
→
destination begins appearing
→
transition resolves

instead of:

CLICK
→
instant new page.


==================================================
9. CAPABILITY VISUAL LANGUAGE — IMPORTANT CHANGE
==================================================

Stop designing the Capabilities page as:

"four different cool particle objects."

The particle behaviour must explain the service.

Each capability should represent a transformation of the SAME Mutable Matter.

The page should communicate:

DESIGN
organisation / composition

DEVELOPMENT
structure / relationships

DEPLOYMENT
release / propagation

DIGITAL PRODUCTS
systems / coordination


==================================================
10. REMOVE / RETIRE WEAK CURRENT FORMS
==================================================

The following current forms should NOT remain simply because Task 08 already
implemented them:

- folded membrane
- interlocking curved layers
- broad decorative ribbons
- open shell

If any of these genuinely look excellent after inspection and can be
reinterpreted meaningfully, components may be reused internally.

However:

DO NOT preserve weak visual forms merely to avoid changing code.

Do NOT put them back into the hero.

Do NOT replace them with four equally arbitrary blobs.


==================================================
11. NEW APPROACH — BEHAVIOURS BEFORE SHAPES
==================================================

Each capability visual should begin with a BEHAVIOUR.

The final geometry emerges from that behaviour.

This is more important than giving it a fancy shape name.


==================================================
12. DESIGN — COMPOSITION FIELD
==================================================

Meaning:

DESIGN = choosing relationships, hierarchy and composition from possibility.

Visual behaviour:

unstructured particle paths enter
→
several invisible compositional forces begin pulling them
→
curves align
→
spacing becomes intentional
→
negative space becomes visible
→
a refined woven / tension-based spatial composition emerges

The final result should resemble:

a sophisticated WOVEN TENSION FIELD

not fabric,
not a flat net,
not a membrane blob.

Characteristics:

- several elegant curved paths
- interwoven depth
- intentional gaps
- asymmetry
- strong silhouette
- sense of tension
- no perfect grid

It should feel like composition being discovered.


==================================================
13. DESIGN INTERACTION
==================================================

Cursor locally pushes/bends the weave.

Nearby strands temporarily separate.

Once cursor leaves:

the composition re-establishes itself precisely.

Meaning:

the system is flexible without losing design intent.


==================================================
14. DEVELOPMENT — SPATIAL ARCHITECTURE
==================================================

Meaning:

DEVELOPMENT = relationships, architecture and systems becoming reliable.

Do NOT use random curved layers.

Behaviour:

Design field loosens
→
particle paths become more precise
→
nodes begin establishing relationships
→
several structural planes appear at different depths
→
connections develop between them
→
a coherent spatial framework emerges

Final character:

SPATIAL ARCHITECTURE / TENSION FRAME

not:

- cube
- server rack
- literal building
- generic wireframe box

Use:

- asymmetric structural paths
- multiple depth planes
- suspended nodes
- selectively visible connections
- precise negative space

It should feel engineered rather than decorative.


==================================================
15. DEVELOPMENT INTERACTION
==================================================

Cursor disturbs only the local region.

Connections may bow or temporarily separate.

The underlying architecture remains readable.

When cursor leaves:

nodes and paths return into alignment.

Meaning:

the system responds without losing structural integrity.


==================================================
16. DEPLOYMENT — PROPAGATION FIELD
==================================================

Meaning:

DEPLOYMENT = something built becoming available, distributed and live.

Do NOT use decorative ribbon sculpture.

Behaviour:

structured framework compresses slightly
→
one directional impulse occurs
→
matter begins moving outward along several trajectories
→
wavefronts propagate
→
some streams travel faster than others
→
the field expands through depth

Final visual character:

PROPAGATION FIELD

Possible elements:

- broad particle wavefront
- directional vectors
- stretched point streams
- secondary delayed fronts
- distributed trajectories

It should communicate:

RELEASE
→
DISTRIBUTION
→
REACH

rather than "pretty flowing ribbons."


==================================================
17. DEPLOYMENT INTERACTION
==================================================

Cursor interrupts the local propagation field.

The flow moves around the pointer.

When pointer leaves:

the stream reconnects.

Meaning:

the system remains continuous despite local disturbance.


==================================================
18. DIGITAL PRODUCTS — COORDINATED SYSTEM
==================================================

Meaning:

DIGITAL PRODUCTS = many behaviours/components working as one living system.

Do NOT use a hollow decorative shell.

Behaviour:

distributed Deployment matter slows
→
multiple independent clusters appear
→
clusters establish relationships
→
small streams/data-like paths connect them
→
clusters begin synchronising
→
one coherent distributed system emerges

Final character:

COORDINATED SPATIAL SYSTEM

not:

- planet
- solar system
- generic atom
- network globe
- random sphere

Use approximately:

3–6 distinct modules

with:

- different densities
- different sizes
- clear relationships
- shared directional rhythm

The important visual idea is:

INDEPENDENT PARTS
→
COORDINATED WHOLE.


==================================================
19. DIGITAL PRODUCTS INTERACTION
==================================================

Cursor may disturb one local module.

Nearby module particles separate.

Other modules remain stable.

Connections may stretch.

After pointer departure:

the affected module reconstitutes and synchronises again.

Meaning:

a resilient system made from independent components.


==================================================
20. CAPABILITY TRANSITIONS
==================================================

These four visuals must transform into one another.

Do not:

fade Design out
→
fade Development in.

Use actual material continuity.


DESIGN → DEVELOPMENT

woven relationships become straighter/more precise
→
key points become structural nodes
→
paths gain depth
→
architecture forms


DEVELOPMENT → DEPLOYMENT

structural paths begin carrying movement
→
connections elongate
→
the first pulse travels through them
→
framework opens
→
propagation begins


DEPLOYMENT → DIGITAL PRODUCTS

distributed streams slow
→
particles begin collecting into modules
→
modules establish connections
→
coordinated system stabilises


==================================================
21. NO OBJECT SHOWCASE FEEL
==================================================

Avoid the visual rhythm:

HERE IS SHAPE 1
↓
HERE IS SHAPE 2
↓
HERE IS SHAPE 3
↓
HERE IS SHAPE 4

Instead:

ONE MATERIAL
+
FOUR DIFFERENT PHYSICAL LOGICS.


==================================================
22. PARTICLE MATERIAL
==================================================

Preserve the stronger Task 06/Astra-quality-inspired treatment.

Main Mutable Matter should retain:

- readable cores
- strong local density
- restrained halo
- warm bone colour
- subtle size variation

Do not revert to faint dust.

Do not turn it into excessive bloom.


==================================================
23. BACKGROUND PARTICLES
==================================================

Ambient depth particles remain:

- much smaller
- dimmer
- slower
- visually secondary

Do not confuse them with Mutable Matter.


==================================================
24. CAPABILITIES TEXT + VISUAL RELATIONSHIP
==================================================

The visual must reinforce what the text is explaining.

When the user reads:

Design

they should see:

relationships becoming intentional.


When they read:

Development

they should see:

relationships becoming structural.


When they read:

Deployment

they should see:

structure becoming movement/distribution.


When they read:

Digital Products

they should see:

distributed components becoming a coordinated system.


==================================================
25. MATERIAL BACKGROUNDS
==================================================

Keep the real material system.

Do not let WebGL float over empty flat backgrounds.

Preserve/refine:

- graphite
- charcoal
- burgundy
- fine grain
- tonal variation
- lighting
- shadow depth

The environment can evolve alongside the capability logic.


==================================================
26. TEXT PACING
==================================================

Do not make the user scroll past the visual before they understand it.

Each capability should have a short readable moment where:

- title is stable;
- production copy is readable;
- visual is sufficiently formed;
- movement calms.

Animation should support reading.


==================================================
27. PROJECTS REGRESSION
==================================================

Do not break the seven project showcase entries introduced in Task 08.

Preserve:

- preview media
- actual project/site names
- hidden deployment URLs
- external live-site links
- project ordering
- honest classification
- Projects story from Task 07 revision

Do not rebuild Projects as part of this correction.


==================================================
28. MOBILE
==================================================

On mobile, simplified visual behaviours remain conceptually meaningful.

Design:

small woven relationship field


Development:

reduced spatial architecture


Deployment:

simplified propagation front


Digital Products:

3–4 coordinated clusters

Do not render incomprehensible miniatures of desktop geometry.


==================================================
29. REDUCED MOTION
==================================================

For reduced motion:

show the final capability compositions mostly static.

Use restrained state transitions.

Meaning must remain understandable from:

copy
+
composition

without motion.


==================================================
30. DEVELOPMENT CONTROLS
==================================================

Provide dev controls for each revised capability system.

DESIGN:

- path count
- weave strength
- curvature
- depth spread
- tension


DEVELOPMENT:

- node count
- connection density
- depth
- structural alignment


DEPLOYMENT:

- propagation speed
- front width
- stream count
- spread
- depth


DIGITAL PRODUCTS:

- module count
- module radius
- connection strength
- synchronisation amount
- spatial spread


COMMON:

- pointer radius
- pointer strength
- recovery
- core size
- density brightness

Development-only.


==================================================
31. VISUAL ACCEPTANCE — LOADER
==================================================

Verify:

1. direct-entry cover is visible on first paint;
2. no page content flashes before it;
3. non-home loader no longer feels rushed;
4. ASL mark has time to resolve;
5. exit is controlled;
6. destination visually connects to loader;
7. internal navigation DOES NOT invoke branded loader;
8. internal route transitions no longer feel instant/abrupt.


==================================================
32. VISUAL ACCEPTANCE — CAPABILITIES
==================================================

Verify:

1. forms no longer look like arbitrary blobs;
2. Design clearly communicates composition;
3. Development clearly communicates structure;
4. Deployment clearly communicates propagation;
5. Digital Products clearly communicates coordination;
6. transitions visibly reuse the same material;
7. none of the visuals resemble literal tech clichés;
8. pointer interaction remains coherent;
9. particle quality remains strong;
10. each visual supports the accompanying text;
11. there are readable calm moments;
12. mobile remains understandable.


==================================================
33. REQUIRED EVIDENCE
==================================================

Capture/record:

LOADER:

1. first hard-refresh frame
2. loader early state
3. ASL identity resolved
4. loader exit
5. destination arrival
6. internal route transition showing NO loader


CAPABILITIES:

7. Design entering
8. Design final field
9. Development transformation
10. Development final architecture
11. Deployment transformation
12. Deployment propagation field
13. Digital Products transformation
14. Digital Products coordinated system
15. pointer interaction
16. mobile capability state


==================================================
34. VALIDATION
==================================================

Test:

- hard refresh `/capabilities`
- hard refresh `/projects`
- hard refresh `/contact`
- Home → Capabilities
- Capabilities → Projects
- Projects → Contact
- Contact → Capabilities
- browser Back
- browser Forward
- mobile
- reduced motion

Run:

- lint
- type check
- tests where configured
- production build


==================================================
35. UPDATE TASK 08 HANDOFF
==================================================

Update:

`/docs/handoffs/TASK_08_HANDOFF.md`

Add:

## TASK 08 MOTION / VISUAL REVISION

Document:

- loader root cause / fixes
- loader timing
- internal navigation correction
- route-transition timing
- retired capability forms
- new capability physical behaviours
- particle transitions
- pointer behaviour
- material environment changes
- responsive behaviour
- performance
- remaining weaknesses


==================================================
FINAL RESPONSE
==================================================

Report:

1. loader problems found;
2. loader fixes;
3. internal navigation behaviour before/after;
4. route-transition pacing;
5. capability shapes retired;
6. new Design behaviour;
7. new Development behaviour;
8. new Deployment behaviour;
9. new Digital Products behaviour;
10. how transformations preserve material continuity;
11. files changed;
12. performance;
13. mobile;
14. reduced motion/accessibility;
15. screenshots/recordings;
16. build/test results;
17. remaining visual weaknesses.

STOP AFTER THIS TASK 08 REVISION.

Do not start Task 09.