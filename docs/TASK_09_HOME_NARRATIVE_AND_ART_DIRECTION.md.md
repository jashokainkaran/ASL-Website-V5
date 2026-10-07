# TASK 09 — HOME NARRATIVE, MOTION LANGUAGE & FINAL ART DIRECTION

Status: Ready  
Type: Production homepage creative-development pass  
Depends on: Completed + revised Task 08

Read first:

- `/AGENTS.md`
- `/docs/handoffs/TASK_08_HANDOFF.md`
- all Task 08 revision documentation that exists
- current Home implementation
- current Mutable Matter implementation
- current particle shaders
- current loader / entry system
- current persistent route-transition system
- current typography
- current material/background system
- current Home content

IMPORTANT:

This is a PRODUCTION task.

The ASL website is already being shown to prospective clients.

Task 09 should make the homepage feel intentional, finished and
commercially understandable while preserving its distinctive visual identity.

Do NOT restart the project.

Do NOT rebuild working systems without a concrete reason.

Working principle:

PRESERVE
→
UNDERSTAND
→
RESEARCH
→
EXPLORE
→
ART-DIRECT
→
REFINE


==================================================
PRIMARY PROBLEM
==================================================

The current Home introduction has strong particle visuals, but the particles
do not yet have enough PURPOSE.

The visitor currently experiences something close to:

particles
→
another particle state
→
DNA
→
ASL

This can look impressive while communicating very little.

Task 09 must turn the introduction into a BRAND NARRATIVE.

The animation must communicate:

POSSIBILITY
→
DIRECTION
→
STRUCTURE
→
SYSTEM
→
IDENTITY

The visitor should understand the philosophy behind ASL while experiencing
the motion.


==================================================
PRIMARY OBJECTIVES
==================================================

Task 09 must:

1. turn the Home particle introduction into a meaningful narrative;

2. substantially improve particle/material quality;

3. substantially improve the DNA sequence;

4. improve scroll choreography and pacing;

5. give typography a stronger editorial role;

6. replace the current primary typography direction;

7. keep the permanent header hidden until the ASL identity payoff;

8. ensure the loader and Home introduction remain separate systems;

9. turn the black environment into a rich textured material;

10. allow purposeful creative experimentation within the existing
    architecture;

11. refine the remainder of Home so the introduction leads naturally into
    the commercial website;

12. preserve production performance, responsiveness and accessibility.


==================================================
STEP 1 — AUDIT BEFORE CHANGING CODE
==================================================

Inspect the current implementation and briefly report:

A. current Home loading sequence;

B. current first visible frame;

C. current Home narrative states;

D. current scroll/progress architecture;

E. current particle formations;

F. current DNA implementation;

G. current ASL target;

H. current pointer interaction;

I. current black-background implementation;

J. current typography;

K. current header visibility logic;

L. current Skip Intro behaviour;

M. current Home section structure;

N. what currently looks strong;

O. what currently feels arbitrary, decorative, rushed, flat or unfinished.

Then continue directly into implementation.

Do not stop after the audit.


==================================================
PART 1 — REQUIRED REFERENCE RESEARCH
==================================================

Before redesigning the Home motion, visually inspect relevant current live
references in a browser.

Do not rely only on source inspection.


--------------------------------------------------
REFERENCE A — OPENAI GPT-6 ASTRA
--------------------------------------------------

Inspect:

https://openai.com/index/gpt-6-astra/

Study particularly:

- particle core treatment;
- how points retain visibility;
- dense vs sparse areas;
- perceived material cohesion;
- depth;
- restrained luminosity;
- negative space;
- how black is used around luminous matter;
- how particles feel substantial rather than dusty;
- how motion remains elegant without excessive noise.


Use Astra primarily as a reference for:

PARTICLE MATERIAL QUALITY
+
SPATIAL COHESION
+
RESTRAINT.


DO NOT COPY:

- Astra branding;
- its symbols;
- exact particle shapes;
- exact point arrangement;
- its colour system;
- exact scene composition;
- exact animation sequence.


--------------------------------------------------
REFERENCE B — SCROLLTIDE
--------------------------------------------------

Inspect:

https://www.scrolltide.co/

Study relevant live examples/components involving:

- DNA / helix forms;
- 3D scroll animation;
- spatial sliders;
- spiral motion;
- mesh flow;
- shader movement;
- scroll-scrubbed 3D scenes;
- camera depth;
- layered transitions.

Also inspect relevant Scrolltide Academy examples where useful.


Use Scrolltide primarily as a reference for:

SCROLL CHOREOGRAPHY
+
3D DEPTH
+
SPATIAL DNA
+
CAMERA RELATIONSHIP
+
HOLD MOMENTS
+
TRANSITION PACING.


DO NOT COPY:

- source code;
- exact components;
- layout;
- typography;
- animation timing verbatim;
- visual identity.


--------------------------------------------------
REFERENCE C — CREATIVE DEVELOPMENT RESEARCH
--------------------------------------------------

You MAY inspect additional high-quality examples where they help solve a
specific ASL problem.

Examples may include:

- official Three.js examples;
- React Three Fiber examples;
- Drei examples;
- GSAP / ScrollTrigger showcases;
- Anime.js examples;
- shader examples;
- respected creative-development experiments;
- premium agency/studio websites.

Research should answer:

"What technique would improve ASL's story?"

not:

"What effect can we add?"


==================================================
PART 2 — CREATIVE AUTONOMY FOR TASK 09 ONLY
==================================================

For THIS TASK ONLY, you have bounded creative-development freedom.

Act as both:

- senior creative developer;
- senior interaction designer.

You are encouraged to improve the implementation beyond the literal
techniques listed in this specification where a better solution is found.

The desired experience and narrative matter more than reproducing one
specific implementation recipe.


==================================================
TASK 09 EXISTING TOOLKIT
==================================================

First preference is the existing stack.

Inspect package.json before making technical decisions.

Likely established tools include:

- Three.js
- @react-three/fiber
- @react-three/drei
- custom GLSL / ShaderMaterial
- GSAP
- ScrollTrigger
- Anime.js
- CSS / browser animation APIs
- existing material/noise utilities
- Leva for development controls

Use these creatively.


==================================================
NEW DEPENDENCY RULE — TASK 09 ONLY
==================================================

You MAY add a new dependency if it provides a clear, meaningful improvement.

Before adding one, answer:

1. What exact problem does it solve?
2. Can the current stack already solve it cleanly?
3. Does it duplicate GSAP / Anime.js / Three.js?
4. What is the bundle/runtime cost?
5. Is it actively maintained?
6. Is the licence appropriate?
7. Does it fit the current Next.js/React/WebGL architecture?
8. Will it make future maintenance worse?

Do not add libraries simply because a demo looks impressive.

Avoid multiple tools owning the same concern.


==================================================
CREATIVE EXPLORATION PHASE
==================================================

Before implementing major new animation techniques, identify approximately
2–4 possible improvements.

For each, note briefly:

- idea;
- purpose;
- implementation approach;
- likely performance cost;
- whether existing tools can implement it.

Then choose the strongest options.

Do not wait for approval unless the choice requires a major architectural
rewrite.


==================================================
NARRATIVE TEST
==================================================

Every major animation should answer:

"What does this communicate?"

Examples:

particles appearing without order
→
possibility

particles beginning to align
→
direction

streams concentrating
→
structure

DNA resolving
→
system / engineering

ASL forming
→
identity

particles recovering after cursor disruption
→
coherence / resilience


Bad justification:

"It looks cool."

Effects with no narrative, interaction or usability purpose should normally
be removed.


==================================================
IMPORTANT
==================================================

Do NOT add this Task 09 creative-autonomy rule to AGENTS.md.

This freedom applies to Task 09 only.


==================================================
PART 3 — CANONICAL HOME STORY
==================================================

The Home introduction now communicates:

UNFORMED MATTER
→
DIRECTION
→
STRUCTURE
→
SYSTEM
→
ASL IDENTITY
→
COMMERCIAL HERO


Canonical major visual states remain:

EMERGENCE
→
FILAMENTS
→
CLOUD
→
SPATIAL 3D DNA
→
ASL


Do NOT add additional hero showcase objects.


==================================================
PART 4 — PRODUCTION NARRATIVE COPY
==================================================

Use the following working production narrative.


BEAT 01

Everything begins without form.


BEAT 02

Direction turns possibility into intention.


BEAT 03

Structure gives an idea something to hold onto.


BEAT 04

Design gives it shape.
Engineering gives it substance.


FINAL PAYOFF

Digital matter, given form.


Supporting copy:

ASL designs, develops and launches distinctive websites and digital products
— combining design, engineering and technology into one considered
experience.


Primary CTA:

Book a Call


Secondary CTA:

Explore Our Work


Secondary destination:

/projects


==================================================
PART 5 — STORY / VISUAL MAPPING
==================================================

Text and animation must describe the SAME event.


--------------------------------------------------
BEAT 01 — POSSIBILITY
--------------------------------------------------

Text:

Everything begins without form.

Visual:

near-empty textured-black environment
→
a handful of primary particles become visible
→
additional matter emerges through depth
→
movement remains largely uncoordinated.

Do not begin with fully established filaments.


--------------------------------------------------
BEAT 02 — DIRECTION
--------------------------------------------------

Text:

Direction turns possibility into intention.

Visual:

weak directional currents appear
→
some particles begin sharing motion
→
proto-paths become legible
→
filaments establish themselves.

The user should visibly understand:

DISORDER
→
DIRECTION.


--------------------------------------------------
BEAT 03 — STRUCTURE
--------------------------------------------------

Text:

Structure gives an idea something to hold onto.

Visual:

filaments begin bending inward
→
paths converge
→
matter concentrates
→
a dense volumetric cloud develops
→
internal rotational organisation begins.

The cloud must be built FROM the filament matter.


--------------------------------------------------
BEAT 04 — SYSTEM
--------------------------------------------------

Text:

Design gives it shape.
Engineering gives it substance.

Visual:

cloud develops rotational logic
→
first structural strand emerges
→
second strand follows
→
relationships between strands become visible
→
complete spatial DNA stabilises.

This is the system/engineering payoff.


--------------------------------------------------
IDENTITY
--------------------------------------------------

Visual:

DNA holds
→
slows
→
begins releasing selected groups
→
particle groups redirect
→
ASL silhouette appears progressively
→
remaining matter fills/refines the mark
→
identity stabilises.


--------------------------------------------------
FINAL HERO
--------------------------------------------------

Text:

Digital matter, given form.

Supporting copy and CTAs appear.

Motion calms.

Permanent navigation appears.


==================================================
PART 6 — STORY TEXT PACING
==================================================

Do not display all narrative copy simultaneously.

One conceptual idea at a time.

Each line should have:

ENTRY
→
READABLE HOLD
→
EXIT / TRANSITION.


Do not make users read while the line is rapidly disappearing.


==================================================
PART 7 — TEXT POSITIONING
==================================================

Do not centre every sentence.

Use the particle composition's negative space.

Possible rhythm:

Beat 01:
lower-left / left

Beat 02:
left or upper-left

Beat 03:
right / offset against cloud negative space

Beat 04:
left / opposite DNA's dominant foreground end

Final hero:
strong editorial composition.


The exact composition should be art-directed after inspecting the scene.

Text must never obscure the most important formation.


==================================================
PART 8 — TYPOGRAPHIC MOTION
==================================================

Typography participates in the story but should remain restrained.

Allowed techniques include:

- controlled opacity;
- subtle masks;
- small Y movement;
- small tracking adjustments;
- material reveal;
- line-by-line entrance where appropriate.

Avoid:

- typewriter animation;
- constant split-character animation;
- scrambling;
- glitch text;
- bouncing;
- random letter motion.

Particles remain the primary kinetic language.


==================================================
PART 9 — HOME LOADER
==================================================

The Home technical loader remains separate from the creative Home story.

Required:

FIRST PAINT
→
technical entry cover
→
readiness
→
cover exits
→
near-empty Home environment
→
Home narrative begins.


The Home loader must NOT:

- show the final ASL identity;
- run the creative particle story;
- reveal the navigation prematurely.


==================================================
PART 10 — LOADER REGRESSION
==================================================

Explicitly test the current loader.

Verify:

- it is the first visible layer;
- Home content does not flash before it;
- header does not flash above it;
- WebGL does not unexpectedly appear above it;
- it no longer exits too quickly;
- it visually hands off into the Home environment.

If Task 08 already fixed this properly:

preserve it.

Do not rebuild working architecture.


==================================================
PART 11 — HOME HEADER — CRITICAL
==================================================

The screenshot/current implementation shows the permanent ASL logo and
navigation before the identity animation has finished.

This must change.


On a fresh/direct Home entry, hide:

- permanent top-left ASL logo;
- Projects;
- Capabilities;
- About;
- Contact;
- Book a Call header CTA.


They remain hidden through:

EMERGENCE
FILAMENTS
CLOUD
DNA.


==================================================
PART 12 — HEADER REVEAL
==================================================

Required sequence:

DNA
→
ASL particle identity forms
→
ASL becomes clearly recognisable
→
brief hold
→
final hero begins settling
→
permanent header appears.


This is conceptually important:

THE WEBSITE FORMS ASL

before

THE FINISHED ASL WEBSITE APPEARS.


==================================================
PART 13 — HEADER REVEAL MOTION
==================================================

Keep it subtle.

Target:

approximately 300–600ms.

Possible:

top-left ASL mark
→
small opacity / Y reveal

then tiny stagger:

Projects
Capabilities
About
Contact
Book a Call.


Suggested stagger:

40–80ms.

No dramatic header animation.


==================================================
PART 14 — HEADER STATE
==================================================

Do not drive the header using arbitrary setTimeout calls.

Tie it to the canonical Home story state/progress.

Conceptually:

LOADING
EMERGENCE
FILAMENTS
CLOUD
DNA
ASL_REVEAL
HERO_SETTLED


Header visibility derives from the story.

One source of truth.


==================================================
PART 15 — RETURNING / INTERNAL VISITS
==================================================

Do NOT replay the entire header reveal on every client-side route return.

Once the visitor has entered the site normally:

navigation may remain persistent.

The cinematic hidden-header rule primarily applies to:

- fresh `/` entry;
- hard refresh `/`.


==================================================
PART 16 — SKIP INTRO
==================================================

Keep a restrained:

Skip intro

control.


Do NOT use:

Skip to introduction.


If selected:

accelerate/resolve the story gracefully
→
reach ASL identity
→
settle final hero
→
reveal header.

Do not jump into a broken intermediate state.


==================================================
PART 17 — EARLY SCROLL
==================================================

The visitor must never feel trapped.

If the user scrolls early:

respond immediately.

Allow story progress to advance.

Resolve intermediate states cleanly.

Do not ignore scroll while waiting for a timed movie.


==================================================
PART 18 — SCROLL ARCHITECTURE
==================================================

Use one canonical Home narrative progress value.

Do not create competing independent scroll timelines.

Conceptually:

homeStoryProgress = 0 → 1


Derive from it:

- particle target;
- formation interpolation;
- narrative text;
- camera;
- environment;
- ASL reveal;
- final hero;
- header reveal.


Use the established GSAP / ScrollTrigger architecture.


==================================================
PART 19 — INTRO LENGTH
==================================================

Starting tuning territory:

approximately 300–450vh desktop.

This is not mandatory.

Tune based on real browser testing.

The user needs enough space to:

- read;
- understand formations;
- see holds;
- interact.

But the experience must not feel endless.


==================================================
PART 20 — NO SCROLL HIJACKING
==================================================

Do not force slide-by-slide wheel interception.

Native scrolling remains intact.

Scroll progress drives the story naturally.


==================================================
PART 21 — PURPOSEFUL MOTION GRAMMAR
==================================================

Task 09 may use the following recurring physical behaviours.


GATHER / DISPERSE

Matter can separate temporarily and return.


ALIGN / ORGANISE

Unordered matter finds shared direction.


STRETCH THROUGH DEPTH

Useful for spatial transitions and dimensionality.


ATTRACT / SETTLE

Matter converges toward a target or identity.


MATERIAL REVEAL

Environment/lighting can reveal content without requiring particles for
every transition.


Use these as a language.

Do not treat them as a checklist requiring all five everywhere.


==================================================
PART 22 — OPTIONAL ADDITIONAL MOTION TECHNIQUES
==================================================

You may discover/use other techniques where they improve narrative quality.

Potential ideas worth evaluating include:

- subtle travelling impulse through matter;
- staged particle activation;
- local density waves;
- restrained depth-crossing particles;
- material-mask typography reveals;
- low-frequency light response;
- delayed particle arrival;
- hierarchical formation;
- progressive reconstruction;
- restrained camera parallax;
- formation-specific local turbulence;
- transitional environment contamination.

Use only the techniques that materially improve the experience.


==================================================
PART 23 — TRAVELLING IMPULSE
==================================================

One technique worth testing:

a subtle directional disturbance passing through otherwise loose matter.

Possible use:

Beat 01
→
impulse passes
→
particles begin sharing direction
→
Beat 02 / filaments emerge.

Do not render a glowing sci-fi ring.

It should feel like a physical change passing through the material.


==================================================
PART 24 — DEPTH CROSSING
==================================================

A small number of particles may move closer to camera to establish volume.

Use sparingly.

Close points may become:

- slightly softer;
- slightly larger;
- lower-opacity depending on depth.

Avoid:

- snowfall;
- stars flying at viewer;
- constant foreground noise.


==================================================
PART 25 — PARTICLE MATERIAL QUALITY
==================================================

Continue the Astra-quality-inspired direction.

Primary Mutable Matter needs:

- crisp readable core;
- restrained falloff;
- stronger visibility;
- subtle point-size variation;
- depth variation;
- density hierarchy;
- controlled luminosity.

Particles should read as one coherent MATERIAL.


Do not create:

- glitter;
- stars;
- faint dust;
- large glowing blobs.


==================================================
PART 26 — DENSITY RESPONSE
==================================================

Dense formations should naturally feel visually richer.

Particularly:

- cloud core;
- DNA overlaps;
- ASL primary strokes.

Do not use whole-screen bloom as the solution.


==================================================
PART 27 — AMBIENT PARTICLES
==================================================

Ambient specks remain different from Mutable Matter.

Ambient layer:

- much smaller;
- dimmer;
- slower;
- sparse;
- less interactive.

Avoid galaxy/starfield appearance.


==================================================
PART 28 — POINTER PHYSICS
==================================================

Preserve the established cursor-displacement system.

Behaviour remains local.

Rendered conceptually as:

formation target
+
idle behaviour
+
pointer displacement.


Particles return when the pointer leaves.


==================================================
PART 29 — STATE-SPECIFIC POINTER BEHAVIOUR
==================================================

EMERGENCE

very weak effect.


FILAMENTS

local bending/separation.


CLOUD

stronger local cavity.


DNA

local strand disruption.


ASL

local carve through identity.


Recovery should remain smooth and magnetic.


==================================================
PART 30 — POINTER CLAMPING
==================================================

The interaction must not destroy narrative readability.

The user should not be able to scatter the complete DNA or ASL mark off
screen.

Clamp appropriately.


==================================================
PART 31 — FILAMENTS
==================================================

Review the current filament state.

It should feel like:

matter discovering shared direction.

Aim for approximately:

5–9 dominant paths

with:

- depth;
- irregular density;
- strong negative space;
- layered near/far relationship.

Avoid:

- spaghetti;
- generic neon ribbons;
- too many equal paths.


==================================================
PART 32 — FILAMENT → CLOUD
==================================================

Maintain material continuity.

Do NOT fade one object out and another in.

Desired:

filaments begin curving inward
→
streams compress
→
velocity becomes convergent
→
dense region develops
→
remaining matter continues arriving.


==================================================
PART 33 — CLOUD
==================================================

Cloud should have:

- irregular silhouette;
- dense internal region;
- layered depth;
- sparse perimeter;
- a few exterior particles;
- subtle rotational organisation.

Avoid perfect sphere.


==================================================
PART 34 — CLOUD → DNA
==================================================

Do not uniformly interpolate every point at the same rate.

Explore staged construction.

Preferred conceptual progression:

cloud rotation becomes intentional
→
one incomplete strand appears
→
second strand starts resolving
→
structural relationships appear
→
far region resolves
→
near region resolves
→
complete DNA stabilises.


The exact implementation is open to creative improvement.


==================================================
PART 35 — DNA — MAJOR ART-DIRECTION PASS
==================================================

The DNA must be one of the strongest moments in the homepage.

Use the reference research to improve:

- shape;
- strand definition;
- particle density;
- 3D readability;
- camera relationship;
- transition;
- hold;
- pointer response.

It should feel like:

A SUSPENDED COMPUTATIONAL SCULPTURE.

Not:

a biology textbook diagram.


==================================================
PART 36 — DNA ORIENTATION
==================================================

Maintain the overall axis broadly:

LEFT → RIGHT.

But it must clearly occupy 3D space.


Starting territory:

yaw:
15–30°

pitch:
5–12°

roll:
small / art-directed.


One end closer to camera.

Opposite end receding.


==================================================
PART 37 — DNA IRREGULARITY
==================================================

Avoid mathematical sterility.

Allow restrained:

- radius variation;
- point-density variation;
- small spacing differences;
- local drift;
- nonuniform edge density.

Maintain overall structural clarity.


==================================================
PART 38 — DNA INTERNAL MOTION
==================================================

Once formed, evaluate subtle internal life.

Potential:

- extremely small torsion;
- tiny longitudinal travel;
- density breathing;
- restrained internal flow.

Do not make the DNA constantly spin.


==================================================
PART 39 — DNA CAMERA
==================================================

Camera may participate subtly.

Potential:

- very small lateral shift;
- mild depth push;
- tiny parallax.

No orbiting showcase camera.

Typography must remain readable.


==================================================
PART 40 — DNA HOLD
==================================================

Give completed DNA a proper readable hold.

Cloud
→
DNA
→
immediately ASL

is not acceptable.

The visitor needs enough time to understand the form.


==================================================
PART 41 — DNA → ASL
==================================================

Transition directly.

NO intermediate sculpture.

Explore a hierarchical reconstruction:

DNA slows
→
specific groups loosen
→
primary ASL silhouette begins establishing
→
major strokes become recognisable
→
secondary particles fill density
→
late stray particles arrive
→
identity locks.


Do not simply cross-fade targets.


==================================================
PART 42 — ASL FORMATION
==================================================

ASL is the payoff.

When recognisable:

greatly reduce motion.

Allow only:

- tiny settling;
- subtle depth breathing;
- sparse peripheral matter;
- pointer interaction.


==================================================
PART 43 — BLACK MUST BE MATERIAL
==================================================

CRITICAL:

The homepage black environment must not be:

flat `#000`

or:

flat dark CSS colour + particles.


The BLACK ITSELF must have material character.


==================================================
PART 44 — BLACK BASE
==================================================

Starting range:

#050506
through
#09090A


Avoid pure black across the entire field.


==================================================
PART 45 — BLACK MATERIAL STACK
==================================================

Build the environment from restrained layers such as:

1. near-black base;

2. large low-frequency tonal variation;

3. graphite/mineral irregularity;

4. extremely fine grain;

5. broad directional illumination;

6. soft shadow/vignette falloff;

7. extremely restrained warm/burgundy contamination only where appropriate;

8. ambient depth particles.


The result should feel like one material environment.


==================================================
PART 46 — TONAL FIELD
==================================================

Use large-scale variation.

Think:

near-black
→
slightly lifted charcoal
→
graphite
→
near-black.

No obvious gradient circles/bands.


==================================================
PART 47 — GRAIN
==================================================

Use extremely fine grain to break digital flatness.

It should be:

felt
not noticed.


Avoid:

- TV noise;
- aggressive film grain;
- white dots;
- repeating tiles;
- obvious animated noise.


==================================================
PART 48 — GRAPHITE / MINERAL CHARACTER
==================================================

Black may suggest:

- graphite;
- smoked material;
- matte technical surface;
- dark mineral depth.

Do NOT suggest:

- paper;
- concrete;
- grunge;
- distressed metal;
- scratched surfaces.


==================================================
PART 49 — DIRECTIONAL LIGHT
==================================================

Use very broad, restrained illumination.

It should reveal material depth.

No obvious spotlight.


==================================================
PART 50 — MATERIAL MOTION
==================================================

Where helpful, the environment may move almost imperceptibly.

Possible:

- tiny low-frequency tonal drift;
- extremely slow light movement.

Do not animate grain rapidly.


==================================================
PART 51 — MATERIAL REACTION TO STORY
==================================================

The black environment may respond subtly to narrative beats.

Examples:

Cloud:
slight tonal lift behind dense region.

DNA:
light orientation subtly reinforces its 3D shape.

ASL:
surrounding environment becomes calmer/darker to emphasise identity.

Keep changes understated.


==================================================
PART 52 — NO GALAXY
==================================================

The homepage must not resemble outer space.

Avoid:

- nebula;
- stars;
- Milky Way bands;
- twinkling;
- cosmic gradients;
- lens-star flares.

This is:

DIGITAL MATERIAL SPACE.

Not space imagery.


==================================================
PART 53 — BACKGROUND PERFORMANCE
==================================================

Choose an efficient material implementation.

Possible:

- CSS layered gradients;
- generated grain texture;
- lightweight shader;
- static texture + restrained movement.

Do not spend significant GPU budget on background noise if a simpler
technique looks equally strong.


==================================================
PART 54 — TYPOGRAPHY CHANGE
==================================================

The current primary typography should be replaced/refined.

Primary recommended candidate:

INSTRUMENT SANS.


Secondary technical candidate:

GEIST MONO.


Implement and evaluate in the real page.


If another properly licensed primary typeface discovered during Task 09
research is demonstrably stronger for the ASL composition, it MAY be used
instead, but:

- it must retain premium editorial clarity;
- it must work well in long and short copy;
- it must not look sci-fi/gimmicky;
- the final choice must be justified in the handoff.


Do not keep the current font merely to avoid changing typography.


==================================================
PART 55 — PRIMARY TYPE USAGE
==================================================

Primary type should carry:

- Home narrative;
- hero;
- navigation;
- body copy;
- capabilities;
- project names;
- CTA.


Carefully tune:

- weight;
- tracking;
- line-height;
- line breaks;
- responsive scale.


==================================================
PART 56 — MONO USAGE
==================================================

Use Geist Mono or equivalent only sparingly.

Appropriate:

- small numbering;
- eyebrows;
- metadata;
- tiny technical annotations;
- scroll hint.

Not appropriate:

- paragraphs;
- primary hero;
- whole navigation;
- every button.


Avoid developer-tool aesthetic.


==================================================
PART 57 — REMOVE PREMATURE IDENTITY LABELS
==================================================

Do not show:

ASL / DIGITAL STUDIO

during the early story before identity has formed.

If retained later, it must not undermine the narrative payoff.


==================================================
PART 58 — REMOVE DECORATIVE COPY THAT COMPETES
==================================================

Current decorative text such as:

ONE MATERIAL. INFINITE POSSIBILITY.

should be removed/replaced if it competes with the new story.

Every early line should now serve the narrative.


==================================================
PART 59 — SCROLL PROMPT
==================================================

Keep one restrained instruction.

Preferred:

Scroll to shape

or:

Scroll


Do not keep multiple instructions.

Fade/reduce it once scrolling begins.


==================================================
PART 60 — FINAL HERO
==================================================

Once ASL identity settles:

show:

Digital matter, given form.


Supporting copy:

ASL designs, develops and launches distinctive websites and digital products
— combining design, engineering and technology into one considered
experience.


Primary:

Book a Call


Secondary:

Explore Our Work


Give the commercial message a calm readable composition.


==================================================
PART 61 — FINAL HERO MOTION
==================================================

After the reveal, reduce motion significantly.

The user needs time to:

- understand ASL;
- read;
- choose a CTA.

Allow:

- micro-settling;
- ambient depth;
- restrained pointer interaction.

No continuing major morphs.


==================================================
PART 62 — HERO → HOMEPAGE
==================================================

The introduction must become the website rather than ending like a video.

As the visitor continues:

ASL matter may loosen subtly
→
some particle behaviour transitions toward the next section
→
normal Home editorial rhythm takes over.

Do not replay the story.


==================================================
PART 63 — HOME CAPABILITY OVERVIEW
==================================================

Keep this section concise.

It introduces `/capabilities`.

Use the approved production copy.


DESIGN

We turn ideas into clear, distinctive digital experiences — from structure
and interface to motion and interaction.


DEVELOPMENT

We engineer those experiences into fast, responsive and maintainable
websites and digital products.


DEPLOYMENT

We take the work from local build to live product, handling the
infrastructure and technical details needed for a clean launch.


DIGITAL PRODUCTS

When the idea goes beyond a website, we design and build product
experiences, prototypes and web-based tools.


==================================================
PART 64 — HOME CAPABILITY MOTION
==================================================

Do NOT repeat the full `/capabilities` page.

Use concise echoes of its physical logic.

DESIGN:
relationships becoming intentional.

DEVELOPMENT:
relationships becoming structural.

DEPLOYMENT:
structure becoming propagation.

DIGITAL PRODUCTS:
independent elements coordinating.


The homepage tease should encourage exploration.


==================================================
PART 65 — HOME PROJECTS PREVIEW
==================================================

Use real project data from Task 08.

Show approximately:

1–3 strong projects

depending on composition.

Use:

- actual preview media;
- actual site/project names;
- clean links to `/projects`.

Do not display deployment URLs.

Do not duplicate the full archive.


==================================================
PART 66 — HOME PROJECT MOTION
==================================================

Project previews may use restrained:

- depth shift;
- crop response;
- media reveal;
- slight parallax;
- surrounding Mutable Matter response.

Do not turn Home into a second Projects page.


==================================================
PART 67 — STATEMENT SECTION
==================================================

Keep:

Most websites are assembled.
Ours are shaped.


This should be a deliberate moment of calm after the visual complexity.

Use:

deep textured burgundy.

Very little particle activity.


==================================================
PART 68 — BURGUNDY MATERIAL
==================================================

Burgundy must also have material depth.

Use:

- deep wine / oxblood tonal variation;
- charcoal shadowing;
- fine grain;
- low-frequency texture;
- directional light;
- black falloff.

Never use a flat burgundy rectangle.


==================================================
PART 69 — MATERIAL TRANSITIONS
==================================================

Avoid hard CSS background changes.

For example:

charcoal
→
faint wine contamination
→
burgundy grows through one region
→
charcoal shadows remain
→
burgundy material becomes dominant.


Reverse similarly when appropriate.


==================================================
PART 70 — FINAL CTA
==================================================

Use:

Let's build something that holds its shape.


Primary:

Book a Call


Optional secondary:

Tell us about your project


Destination:

/contact


Keep this area calm.

Do not repeat the DNA or full ASL reveal.


==================================================
PART 71 — ROUTE EXITS
==================================================

After the Home experience is established, internal navigation continues to
use persistent route transitions.

No branded loader.


HOME → PROJECTS:

stretch through depth / EXPLORE.


HOME → CAPABILITIES:

alignment / ORGANISE.


HOME → CONTACT:

sparsity + attraction / ATTRACT.


==================================================
PART 72 — MOBILE STORY
==================================================

Mobile retains the conceptual narrative:

POSSIBILITY
→
DIRECTION
→
STRUCTURE
→
SYSTEM
→
IDENTITY.


Simplify:

- particle count;
- path count;
- DNA length;
- camera movement;
- ambient density;
- scroll length.


Do not remove the narrative completely.


==================================================
PART 73 — MOBILE COMPOSITION
==================================================

Re-art-direct text placement for mobile.

Do not blindly scale desktop coordinates.

Ensure:

- story lines fit cleanly;
- no text is hidden behind particles;
- final CTA is easy to reach;
- header reveal remains coherent.


==================================================
PART 74 — MOBILE SCROLL LENGTH
==================================================

Use a shorter narrative distance if needed.

Do not force desktop's exact scroll length onto mobile.


==================================================
PART 75 — TOUCH
==================================================

Preserve a restrained touch version of particle displacement.

Do not require hover.


==================================================
PART 76 — REDUCED MOTION
==================================================

Reduced-motion users still receive the narrative.

Use:

text beat
→
stable corresponding visual
→
short transition
→
next beat.


Reduce/disable:

- camera travel;
- large particle motion;
- strong pointer physics;
- environmental drift.


ASL identity must still appear before permanent header on fresh Home entry.


==================================================
PART 77 — NO-WEBGL FALLBACK
==================================================

The Home experience must remain meaningful without WebGL.

Fallback should include:

- textured black environment;
- narrative typography;
- restrained static/DOM visual treatment;
- final hero;
- navigation;
- CTAs.

Do not leave a blank black screen.


==================================================
PART 78 — ACCESSIBILITY
==================================================

Ensure:

- narrative copy is real DOM;
- semantic heading hierarchy;
- WebGL is aria-hidden;
- Skip Intro is keyboard accessible;
- focus remains visible;
- navigation becomes predictably available;
- reduced motion works;
- no essential information exists only in Canvas.


==================================================
PART 79 — SEO
==================================================

Production title:

ASL — Websites & Digital Products


Production description:

ASL designs, develops and launches distinctive websites and digital
products, bringing design, engineering and technology into one considered
experience.


Keep one meaningful H1 in the final usable hero.


==================================================
PART 80 — PERFORMANCE
==================================================

Do not chase Astra quality by simply increasing particle count.

Quality > quantity.

Starting targets remain approximately:

desktop primary:
~40,000 particles

mobile:
~15,000–20,000


Use adaptive DPR / complexity where appropriate.


==================================================
PART 81 — FONT PERFORMANCE
==================================================

Only load necessary font weights.

Avoid layout shift.

Use framework font optimisation/self-hosting where appropriate.


==================================================
PART 82 — DEVELOPMENT CONTROLS
==================================================

Maintain/update development-only controls.


STORY:

- story progress
- current beat
- beat timing
- scroll distance
- Skip Intro


PARTICLES:

- core size
- brightness
- falloff
- density response
- idle strength


FILAMENTS:

- path count
- width/density
- curvature
- depth


CLOUD:

- core density
- spread
- rotation


DNA:

- yaw
- pitch
- roll
- length
- radius
- turns
- density
- irregularity
- internal motion


ASL:

- formation progress
- settling
- peripheral matter


BACKGROUND:

- grain
- tonal-field strength
- directional light
- falloff
- ambient amount
- contamination


HEADER:

- reveal threshold
- reveal progress


Development only.


==================================================
PART 83 — DEBUG STATES
==================================================

Provide easy development access to:

EMERGENCE

FILAMENTS

CLOUD

DNA

ASL

FINAL HERO


Do not require replaying the whole page during tuning.


==================================================
VISUAL ACCEPTANCE — NARRATIVE
==================================================

Verify:

1. the intro tells an understandable story;
2. every narrative sentence corresponds to the visible material state;
3. text and animation feel intentionally choreographed;
4. motion no longer feels decorative;
5. formations have readable hold moments;
6. ASL identity feels earned;
7. final commercial hero feels like the natural conclusion.


==================================================
VISUAL ACCEPTANCE — HEADER
==================================================

Fresh Home load:

1. loader appears first;
2. header hidden;
3. Home story begins;
4. header hidden through Emergence;
5. hidden through Filaments;
6. hidden through Cloud;
7. hidden during DNA;
8. ASL particle identity forms;
9. identity becomes clearly readable;
10. final hero starts settling;
11. permanent header then appears.

No premature top-left ASL logo.


==================================================
VISUAL ACCEPTANCE — PARTICLES
==================================================

Verify:

1. particles feel visually substantial;
2. they no longer resemble faint dust;
3. dense regions gain convincing material weight;
4. sparse regions retain elegance;
5. depth is convincing;
6. pointer behaviour works;
7. recovery is smooth;
8. no galaxy/star aesthetic emerges.


==================================================
VISUAL ACCEPTANCE — DNA
==================================================

Verify:

1. DNA has clear 3D volume;
2. orientation is broadly horizontal;
3. one end clearly recedes;
4. strands are readable;
5. it does not look mathematically sterile;
6. construction is staged/interesting;
7. completed DNA receives a readable hold;
8. pointer locally disrupts it;
9. it reconstructs cleanly;
10. transition to ASL preserves material continuity.


==================================================
VISUAL ACCEPTANCE — BLACK MATERIAL
==================================================

Verify:

1. black is not flat;
2. graphite/mineral depth is perceptible;
3. fine grain exists;
4. grain is subtle;
5. large tonal variation exists;
6. directional illumination is restrained;
7. material does not resemble paper/grunge;
8. no galaxy aesthetic;
9. background remains subordinate to content;
10. mobile retains the material character.


==================================================
VISUAL ACCEPTANCE — TYPOGRAPHY
==================================================

Verify:

1. new typography looks materially better than previous typography;
2. main type feels premium/editorial;
3. mono is sparse;
4. narrative line breaks are intentional;
5. final hero is commercially clear;
6. typography remains readable throughout movement.


==================================================
VISUAL ACCEPTANCE — REST OF HOME
==================================================

Verify:

1. Home capability overview is concise;
2. it does not duplicate the full Capabilities page;
3. project previews use real Task 08 content;
4. no deployment URLs are visible;
5. statement section provides calm contrast;
6. burgundy has material depth;
7. final CTA is calm and clear;
8. section transitions feel connected.


==================================================
REQUIRED EVIDENCE
==================================================

Capture/record at minimum:

1. first frame after Home loader
2. Beat 01
3. emergence close-up
4. Beat 02
5. established filaments
6. Beat 03
7. cloud
8. Beat 04
9. DNA construction
10. completed DNA
11. angled/depth DNA view
12. DNA pointer disruption
13. DNA reconstruction
14. DNA → ASL transition
15. ASL completed BEFORE header
16. ASL pointer carve
17. ASL reconstruction
18. final hero WITH header
19. textured black close-up
20. Home capability overview
21. project preview
22. burgundy statement material
23. final CTA
24. mobile story
25. mobile final hero
26. reduced-motion state if practical


==================================================
BROWSER TESTING
==================================================

Explicitly test:

- fresh `/`
- hard refresh `/`
- Skip Intro
- slow scrolling
- fast/aggressive scrolling
- pointer movement
- touch where possible
- Home → Projects
- Home → Capabilities
- Home → Contact
- browser Back
- browser Forward
- desktop
- tablet
- mobile
- reduced motion
- no-WebGL fallback where practical


==================================================
TECHNICAL VALIDATION
==================================================

Run:

- lint if configured
- type checking if configured
- relevant tests
- production build

Do not mark Task 09 complete because compilation succeeds.

The browser experience is the primary acceptance test.


==================================================
CONTENT REGRESSION
==================================================

Search Home-visible output for:

- placeholder
- lorem
- dummy
- sample
- temporary
- TODO

Remove accidental prototype content.

Never invent:

- clients;
- metrics;
- testimonials;
- awards;
- results;
- years of experience.


==================================================
AGENTS.MD
==================================================

Do NOT add the Task 09 creative-autonomy/dependency-freedom instructions to
AGENTS.md.

Those permissions are specific to this task.

If AGENTS.md already contains permanent ASL rules, preserve them.

Do not make unrelated permanent-rule changes as part of Task 09.


==================================================
HANDOFF
==================================================

Create:

`/docs/handoffs/TASK_09_HANDOFF.md`


Include:


## Initial audit

What existed before Task 09.


## Reference research

- Astra observations
- Scrolltide observations
- additional references inspected
- principles adopted
- principles rejected


## Creative exploration

- ideas considered
- techniques researched
- techniques selected
- techniques rejected
- reasoning
- dependencies added, if any


## Homepage story

- final copy
- beat mapping
- scroll ranges
- text choreography


## Particle system

- render changes
- filament changes
- cloud changes
- DNA changes
- ASL changes
- pointer behaviour


## DNA

- construction method
- orientation
- camera relationship
- hold
- transition into ASL


## Environment

- black material implementation
- grain
- tonal field
- lighting
- performance approach


## Typography

- final font choice
- loaded weights
- typographic scale
- mono usage


## Header

- hidden state
- reveal threshold
- returning-user behaviour


## Home sections

- capabilities overview
- projects preview
- statement
- final CTA


## Responsive

- tablet
- mobile
- reduced motion
- no-WebGL


## Performance

- particle counts
- frame-rate observations
- major optimisations


## DO NOT REBUILD

List stable systems future tasks should preserve.


## Remaining weaknesses

Document actual remaining visual/technical issues.


==================================================
FINAL RESPONSE
==================================================

Report:

1. initial Home audit;
2. Astra research;
3. Scrolltide research;
4. additional creative-development research;
5. creative ideas considered;
6. ideas selected/rejected;
7. Home narrative implementation;
8. exact text/animation mapping;
9. scroll architecture;
10. particle-quality improvements;
11. filament improvements;
12. cloud improvements;
13. DNA improvements;
14. DNA → ASL implementation;
15. pointer interaction result;
16. header reveal fix;
17. loader regression result;
18. Skip Intro behaviour;
19. black material implementation;
20. typography decision;
21. Home section refinements;
22. new dependencies, if any, with justification;
23. files changed;
24. performance;
25. mobile;
26. reduced motion;
27. accessibility;
28. SEO;
29. screenshots/recordings;
30. build/test result;
31. remaining weaknesses;
32. location of `/docs/handoffs/TASK_09_HANDOFF.md`.

STOP AFTER TASK 09.

DO NOT START TASK 10.