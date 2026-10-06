# TASK 07 REVISION — PROJECTS + CONTACT MOTION, STORY & ENTRY EXPERIENCE

Status: Ready  
Type: Revision / Art-direction pass  
Depends on: Completed Task 07

Read first:

- `/AGENTS.md`
- `/docs/handoffs/TASK_06_STATUS.md`
- `/docs/handoffs/TASK_07_HANDOFF.md`
- the original Task 07 specification
- the current implemented `/projects` and `/contact` pages

IMPORTANT:

Task 07 has ALREADY been implemented.

DO NOT rebuild Projects or Contact from scratch.

DO NOT discard:

- current production copy
- verified project data
- project content architecture
- working form submission
- validation
- SEO
- redirects
- route architecture
- persistent canvas
- particle engine
- shader architecture
- material background system
- responsive work
- accessibility work

unless inspection reveals an actual defect.

This revision exists because the original Task 07 did not specify the
PAGE STORY / MOTION LANGUAGE strongly enough.

Working principle:

PRESERVE
→ REFINE
→ ADD STORY
→ POLISH


==================================================
PRIMARY OBJECTIVE
==================================================

Make `/projects` and `/contact` feel like deliberate chapters of the same
ASL digital world.

Each page must have:

1. ENTRY
2. ARRIVAL
3. PAGE BEHAVIOUR
4. USER INTERACTION
5. EXIT

They should not simply render after navigation.

The persistent Mutable Matter canvas should create continuity between routes.


==================================================
STEP 1 — AUDIT CURRENT TASK 07
==================================================

Before changing code, inspect the current implementation.

Report briefly:

A. what Projects currently does on entry;

B. what Contact currently does on entry;

C. how direct-entry loaders currently behave;

D. how internal route transitions currently behave;

E. whether page content flashes before the non-home loader;

F. how project-to-project motion currently works;

G. how Mutable Matter currently participates in Projects;

H. how Mutable Matter currently participates in Contact;

I. what current Task 07 implementation is already strong and must remain;

J. what currently feels static, abrupt, generic or disconnected.

Then implement the revision.

Do not stop after the audit.


==================================================
GLOBAL ENTRY ARCHITECTURE
==================================================

There are TWO relevant entry cases for these pages.


--------------------------------------------------
DIRECT / HARD ENTRY
--------------------------------------------------

If a visitor loads:

/projects
/contact

through:

- hard refresh
- external link
- bookmark
- browser address bar
- search result

use the existing NON-HOME direct-entry system.

The entry cover MUST be visible before destination-page content.

Required order:

FIRST PAINT
→
ENTRY COVER
→
destination prepares underneath
→
compact branded entry story
→
entry cover exits
→
page arrival story begins

Never:

PAGE CONTENT
→
LOADER

Never allow:

- project content flashing first;
- contact form flashing first;
- navigation above the loader;
- WebGL unexpectedly above the loader.


--------------------------------------------------
INTERNAL NAVIGATION
--------------------------------------------------

If the application is already running:

DO NOT show the loader.

Use the persistent Mutable Matter route-transition system.

Examples:

HOME → PROJECTS
PROJECTS → CONTACT
CONTACT → HOME

must feel continuous.

The canvas should not unnecessarily unmount and restart.


==================================================
NON-HOME DIRECT-ENTRY LOADER
==================================================

Unlike Home, non-home direct entry MAY use the restrained ASL identity.

Keep it compact.

Suggested story:

deep black
→
subtle material texture becomes visible
→
sparse ambient particles appear
→
small provisional/stylised ASL particle mark resolves
→
brief quiet hold
→
mark loosens/releases
→
cover transitions into destination environment

Target visual duration when ready:

approximately 1.2–1.6 seconds.

Motion should feel:

- slow
- sleek
- controlled
- precise
- premium

Avoid:

- fast fly-away
- spinning logo
- large hero-scale logo
- percentage counter
- loading bar
- glitch
- flash
- aggressive wipe

This must use the EXISTING entry architecture.

Do not build another loader.


==================================================
PROJECTS — CORE PAGE IDEA
==================================================

Behavioural verb:

EXPLORE

Projects is not a card catalogue.

It is a CINEMATIC SPATIAL ARCHIVE.

The visitor should feel as though they have moved deeper into the same
digital environment introduced on Home.


==================================================
PROJECTS — INTERNAL ENTRY STORY
==================================================

When navigating internally into `/projects`, create a continuous transition.

Preferred conceptual sequence:

CURRENT PAGE MATTER
→
particles stretch through Z-depth
→
foreground density separates
→
camera appears to move deeper through the field
→
negative space opens
→
faint project planes/media surfaces become visible
→
first project approaches its active plane
→
Projects heading and metadata resolve
→
scroll becomes the primary control

Do not use:

current page
→
black fade
→
Projects appears.

The arrival itself should explain that the visitor has entered a deeper
archive.


==================================================
PROJECTS — DIRECT ENTRY ARRIVAL
==================================================

After the non-home loader exits:

do NOT reveal the entire Projects page instantly.

Begin with:

- deep charcoal / space-black environment;
- faint material texture;
- subtle depth particles;
- distant project surfaces barely perceptible.

Then:

first project surface advances
→
media becomes legible
→
heading resolves
→
supporting copy/metadata settles
→
normal scrolling begins.

This should be restrained.

Do not create another 5-second intro.


==================================================
PROJECTS — ARC AI REFERENCE
==================================================

Revisit the live ARC AI Portfolio page visually:

https://www.arcai.agency/portfolio

Study the actual motion again.

Focus on:

- how projects become active;
- scroll rhythm;
- image movement;
- scale;
- translation;
- overlap;
- project entry;
- project exit;
- text/media timing;
- active/inactive hierarchy;
- how much of adjacent projects remains visible;
- hover behaviour;
- cursor behaviour;
- mobile behaviour.

Do NOT copy:

- exact layout
- source code
- typography
- colours
- branding
- projects
- written content

Extract useful interaction principles and reinterpret them using the ASL
design system.


==================================================
PROJECTS — SCROLL STORY
==================================================

The visitor should feel as though they travel THROUGH projects.

General sequence:

PROJECT A DISTANT
→
PROJECT A APPROACHES
→
media gains scale/depth
→
title and metadata reach full clarity
→
PROJECT A becomes ACTIVE
→
brief visual hold
→
scroll continues
→
PROJECT A starts receding
→
particles/material stretch with movement
→
negative space opens
→
PROJECT B begins approaching
→
PROJECT B becomes ACTIVE

Repeat with controlled variation.

Do not make every project use precisely the same geometry.


==================================================
PROJECTS — ACTIVE PROJECT
==================================================

The active project should dominate through combinations of:

- scale
- depth
- brightness
- opacity
- clarity
- media size
- typography hierarchy

Inactive projects may:

- sit farther away;
- become somewhat darker;
- reduce scale;
- reduce media prominence.

Do not make readable project information inaccessible.


==================================================
PROJECTS — SPATIAL VARIATION
==================================================

Avoid a repetitive:

text left / image right
text left / image right
text left / image right

loop.

Use controlled composition changes.

Examples:

PROJECT 01

text left
large media right


PROJECT 02

media left
text right


PROJECT 03

larger central media
metadata offset


PROJECT 04

media occupies wider field
text positioned against negative space

The grid remains intentional.

Do not scatter elements randomly.


==================================================
PROJECTS — MEDIA MOTION
==================================================

Use restrained premium motion.

Potential behaviours:

- project surface travels forward in depth;
- slight scale increase;
- changing crop/mask;
- subtle parallax;
- controlled translation;
- next media becoming visible behind current project.

Avoid:

- enormous zoom
- spinning
- excessive 3D rotation
- distortion that makes the project impossible to inspect.

The project work itself must remain the hero.


==================================================
PROJECTS — MUTABLE MATTER ROLE
==================================================

Mutable Matter supports project presentation.

It does NOT obscure project media.

Particles may:

- stream around media edges;
- part as a project approaches;
- stretch behind surfaces;
- react to project depth;
- redirect during transitions;
- locally disperse around pointer;
- reconstruct afterward.

Do not coat screenshots with dense particles.


==================================================
PROJECTS — POINTER PHYSICS
==================================================

Preserve the Task 06 physical law:

FORMATION TARGET
+
IDLE MOTION
+
LOCAL POINTER DISPLACEMENT

When pointer passes through visible project-adjacent matter:

nearby particles may:

- bend;
- disperse;
- separate;
- carve locally.

When pointer leaves:

matter reconstructs smoothly.

Project media itself may use only restrained:

- depth shift;
- parallax;
- small scale;
- mask response.

Avoid excessive magnetic interactions.


==================================================
PROJECTS — TRANSITION BETWEEN PROJECTS
==================================================

Create a short environmental transition between active works.

Example:

ACTIVE PROJECT
→
media begins moving deeper
→
surrounding particle flow elongates
→
material density falls
→
brief negative-space interval
→
next media plane becomes visible
→
matter reorganises around it
→
NEXT PROJECT becomes active

This prevents Projects from feeling like vertically stacked components.


==================================================
PROJECTS — FINAL EXIT INTO CTA
==================================================

After the final project:

do not instantly render a CTA underneath it.

Use:

last project recedes
→
depth simplifies
→
particles become sparse
→
motion slows
→
environment becomes calmer
→
CTA typography enters

Preserve existing production CTA copy unless the Task 07 implementation
already approved something stronger.

Current intended production copy:

Have something in mind?

Tell us what you're building, where you are in the process and what you need
help with.

Primary CTA:

Start a Project

Destination:

/contact


==================================================
PROJECTS — CONTENT
==================================================

Do not alter verified production project content unnecessarily.

Maintain all content-integrity rules.

No:

- invented clients
- invented metrics
- invented results
- invented testimonials
- fake statuses

If current Projects implementation contains any remaining prototype/filler
content, remove it or replace it only with truthful approved production copy.


==================================================
PROJECTS — MOBILE
==================================================

Do not reproduce the full desktop spatial camera experience literally.

Mobile story:

project heading
→
large project media
→
metadata
→
brief transition
→
next project

Allow:

- restrained parallax;
- small scale transitions;
- limited particle movement;
- subtle depth.

Avoid:

- scroll hijacking;
- excessive Z travel;
- tiny project text;
- heavy WebGL effects behind media.

Mobile should feel deliberately art-directed.


==================================================
PROJECTS — REDUCED MOTION
==================================================

Reduced motion should become an editorial portfolio.

Use:

- static media;
- minimal fades;
- very small scale changes if acceptable;
- little/no camera travel;
- minimal particle movement.

All content remains available.


==================================================
CONTACT — CORE PAGE IDEA
==================================================

Behavioural verb:

ATTRACT

Projects expands outward into exploration.

Contact should pull everything inward toward one clear action.

The page becomes:

- quieter;
- slower;
- more concentrated;
- more intimate.


==================================================
CONTACT — INTERNAL ENTRY STORY
==================================================

When navigating internally to Contact:

current Mutable Matter
→
particle count/density appears to reduce
→
velocity slows
→
remaining matter begins drifting toward the future form region
→
charcoal environment develops burgundy contamination
→
deep textured burgundy takes over
→
heading appears
→
form resolves
→
particles settle into restrained attraction behaviour

Do NOT show a loader.


==================================================
CONTACT — DIRECT ENTRY ARRIVAL
==================================================

After the compact non-home ASL loader:

ASL particles loosen
→
become sparse
→
begin drifting toward one side/region
→
deep burgundy material environment becomes visible
→
heading settles
→
form appears with restrained stagger

Avoid instantly presenting the full form the moment the loader disappears.


==================================================
CONTACT — MATERIAL DESIGN
==================================================

Contact should use one of the richest MATERIAL surfaces in the site.

Use:

DEEP BURGUNDY
+
CHARCOAL SHADOW REGIONS
+
FINE GRAIN
+
LOW-FREQUENCY TONAL VARIATION
+
SOFT DIRECTIONAL LIGHT
+
NEAR-BLACK FALLOFF

Particles remain warm bone.

They should be sparse.

The background must not be:

flat burgundy
+
random dots.


==================================================
CONTACT — LAYOUT
==================================================

Avoid a generic centred SaaS form card.

Prefer an editorial asymmetrical composition.

For desktop, strong options include:

LARGE HEADING / INTRO
LEFT

FORM
RIGHT

or:

HEADING
UPPER LEFT

FORM
LOWER RIGHT

Use generous negative space.

The form should feel integrated into the environment.

Avoid:

- white card
- generic glass panel
- heavy border box
- standard dashboard form appearance


==================================================
CONTACT — PRODUCTION COPY
==================================================

Preserve the approved production wording.

Primary heading:

Tell us what you're building.

Intro:

Starting from an idea, improving something that already exists, or building
something entirely new? Tell us where you are and what you need.

Fields should remain production-ready and factual.

Do not introduce generic agency filler.


==================================================
CONTACT — ARRIVAL MOTION
==================================================

Once Contact environment is established:

heading resolves first

then:

supporting copy

then:

form groups enter using a restrained stagger.

Avoid:

- bouncing fields
- dramatic slides
- individual character animation across every label
- distracting continuous movement.


==================================================
CONTACT — PARTICLE ATTRACTION
==================================================

Create a subtle gravitational logic.

Particles may slowly:

- curve toward the form region;
- flow around its perimeter;
- concentrate slightly around CTA;
- react to active-field focus.

Do not allow particles to obscure inputs.


==================================================
CONTACT — POINTER PHYSICS
==================================================

Maintain Task 06 pointer interaction but lower its strength.

Pointer may:

- gently push nearby particles aside;
- alter attraction trajectory;
- temporarily open a small region.

Particles return smoothly.

Avoid dramatic cavities.


==================================================
CONTACT — FIELD FOCUS INTERACTION
==================================================

When a form field receives focus, optionally allow an extremely subtle
environment response.

Examples:

- nearby particles orient slightly;
- directional light shifts very subtly;
- a small amount of particle attraction moves toward active field region.

The form itself must remain static/readable.

Do not turn filling a form into a game.


==================================================
CONTACT — SUBMISSION STORY
==================================================

Only when a REAL submission succeeds:

form movement calms
→
nearby particles converge slightly
→
success state resolves

Use existing approved success copy.

No:

- confetti
- fireworks
- huge particle explosion
- fake success.

If request fails:

show the existing accessible error state.

Do not play success animation.


==================================================
CONTACT — PAGE EXIT
==================================================

When navigating away internally:

attracted particles release
→
density opens
→
burgundy environment transitions toward destination material
→
persistent route transition takes over.

Do not just fade entire viewport black.


==================================================
CONTACT — MOBILE
==================================================

Mobile priority:

FORM USABILITY FIRST.

Maintain:

- rich burgundy material;
- sparse particles;
- strong heading;
- good spacing;
- comfortable touch targets.

Reduce particle interaction and background activity around fields.


==================================================
CONTACT — REDUCED MOTION
==================================================

Use:

deep burgundy material fade
→
heading/form reveal

Particles may remain nearly static.

Do not use gravitational travel animation.


==================================================
ROUTE-TO-ROUTE CONTINUITY
==================================================

Explicitly test:

HOME → PROJECTS

PROJECTS → CONTACT

CONTACT → HOME

PROJECTS → HOME

CONTACT → PROJECTS

They do not all need unique cinematic sequences yet.

But they must respect each destination's behavioural language.

PROJECTS:

EXPLORE / DEPTH

CONTACT:

ATTRACT / CONCENTRATION

HOME:

TRANSFORM


==================================================
LOADER REGRESSION TEST
==================================================

Explicitly verify direct loads:

/projects

/contact

The page content MUST NOT appear before the loader.

The compact ASL entry must be the first visible content.

This must work on HARD REFRESH.

Do not accept:

content flash
→
loader

as a minor issue.


==================================================
PRODUCTION COPY REGRESSION
==================================================

Search `/projects` and `/contact` visible content for:

placeholder
lorem
dummy
sample
TODO
temporary copy

Remove public-facing development filler.

Do NOT fabricate replacement facts.

All visible wording must be approved production wording or factual project
information.


==================================================
ACCESSIBILITY
==================================================

Preserve:

- semantic DOM
- real links
- real buttons
- heading structure
- form labels
- validation associations
- visible focus
- keyboard navigation
- reduced motion
- no-WebGL fallback

Page story must enhance, not block, usability.


==================================================
PERFORMANCE
==================================================

Do not create page story by adding large CPU animation loops.

Reuse:

- persistent canvas
- existing shader architecture
- GSAP timeline infrastructure
- existing route-transition system

Project media must remain optimised.

Avoid loading all large off-screen project media at once.


==================================================
VISUAL ACCEPTANCE — PROJECTS
==================================================

Verify:

1. internal Projects entry feels like travel into depth;
2. direct Projects entry has a real arrival story after loader;
3. archive does not appear fully formed instantly;
4. first project becomes dominant deliberately;
5. project transitions have environmental continuity;
6. projects do not look like a normal static card grid;
7. active/inactive hierarchy is strong;
8. media remains easy to inspect;
9. particles support rather than obscure work;
10. final project flows naturally into CTA;
11. mobile remains premium;
12. reduced motion remains complete.


==================================================
VISUAL ACCEPTANCE — CONTACT
==================================================

Verify:

1. Contact internal entry becomes quieter;
2. attraction behaviour is visible but restrained;
3. deep burgundy surface feels materially rich;
4. page does not look like a generic form template;
5. heading/form arrive progressively;
6. particles do not interfere with fields;
7. focus interaction remains subtle;
8. success motion only happens after real success;
9. mobile prioritises usability;
10. reduced-motion remains polished.


==================================================
REQUIRED EVIDENCE
==================================================

Capture/record where practical:

PROJECTS:

1. internal Projects route transition
2. first arrival frame
3. first project becoming active
4. active project state
5. transition between projects
6. another project with different composition
7. final project → CTA transition
8. direct Projects loader → arrival
9. Projects mobile

CONTACT:

10. internal Contact transition
11. Contact arrival
12. full desktop composition
13. form focus behaviour
14. particle attraction
15. successful submission state if real backend can be tested
16. direct Contact loader → arrival
17. Contact mobile

Also test reduced motion.


==================================================
VALIDATION
==================================================

Run:

- lint if configured
- type checking if configured
- production build
- relevant tests

Manually inspect actual browser motion.

Do not declare this revision complete based only on successful compilation.


==================================================
HANDOFF UPDATE
==================================================

Update:

/docs/handoffs/TASK_07_HANDOFF.md

Do not erase useful existing Task 07 documentation.

Add a section:

## MOTION / STORY REVISION

Document:

- direct-entry story
- Projects internal arrival
- Projects scroll story
- active/inactive project logic
- ARC AI-inspired principles actually used
- Mutable Matter behaviour
- Contact internal arrival
- Contact attraction system
- form interaction
- submission motion
- page exit behaviour
- mobile differences
- reduced-motion differences
- loader regression results
- remaining visual issues


==================================================
FINAL RESPONSE
==================================================

Report:

1. what original Task 07 implementation was preserved;
2. what was visually weak before revision;
3. Projects entry story added;
4. Projects scroll/transition changes;
5. ARC AI interaction principles used;
6. Contact arrival story added;
7. Contact attraction behaviour;
8. loader regression result;
9. production copy regression result;
10. files changed;
11. performance observations;
12. responsive behaviour;
13. accessibility/reduced-motion status;
14. screenshots/recordings;
15. build/test result;
16. remaining visual weaknesses.

STOP AFTER THIS REVISION.

Do not start Task 08.