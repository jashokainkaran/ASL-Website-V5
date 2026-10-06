TASK 07 — PRODUCTION PROJECTS PAGE + CONTACT PAGE

IMPORTANT:

THIS IS A NEW CODEX CONVERSATION.

You do not have access to the previous Codex chat history.

The repository is the source of truth.

The project has already been implemented through the final/revised TASK 06.

DO NOT:

- restart the project;
- recreate previous tasks;
- rebuild the particle engine;
- replace the persistent canvas;
- replace the entry system;
- rewrite stable shaders;
- discard the established material system.

Before changing code:

1. Read AGENTS.md completely.
2. Read docs/handoffs/TASK_05_HANDOFF.md.
3. Read docs/handoffs/TASK_06_STATUS.md.
4. Inspect package.json.
5. Inspect the current route structure.
6. Inspect the persistent canvas architecture.
7. Inspect the route-transition controller.
8. Inspect the current Home → Projects/Work transition if present.
9. Inspect current project/content data.
10. Inspect the current contact implementation if one exists.
11. Inspect the current material/texture system.
12. Inspect reduced-motion and no-WebGL implementations.

Treat the current repository as authoritative.

Working principle:

PRESERVE
→ EXTEND
→ REFINE


==================================================
PRIMARY OBJECTIVE
==================================================

Build TWO client-facing production pages:

1. /projects
2. /contact

These are no longer prototypes.

They must be visually polished and contain production-quality wording.

PROJECTS should be the major cinematic experience.

CONTACT should be the quieter conversion experience.


==================================================
PART 1 — ARC AI VISUAL REFERENCE STUDY
==================================================

Before designing /projects, open the live page:

https://www.arcai.agency/portfolio

Inspect it visually in the browser.

Do not rely only on page source or text extraction.

Study specifically:

- what happens as the user scrolls;
- how each project becomes active;
- how project imagery enters and exits;
- image translation;
- image scaling;
- overlap;
- project text movement;
- active vs inactive hierarchy;
- spacing between projects;
- how much of the next project is visible;
- whether media is pinned;
- hover behaviour;
- cursor behaviour;
- transition timing;
- how the final project exits;
- mobile behaviour if inspectable.

Write a short internal analysis before implementation:

A. interaction principles worth borrowing;
B. what would not fit ASL;
C. how you will reinterpret the useful mechanics.

DO NOT copy:

- ARC AI source code;
- its exact composition;
- typography;
- colours;
- wording;
- projects;
- branding;
- metrics;
- imagery.

We want the QUALITY and interaction idea, not a clone.


==================================================
PART 2 — PROJECTS PAGE CONCEPT
==================================================

The ASL Projects page should feel like a SPATIAL ARCHIVE.

Behavioural verb:

EXPLORE

It should feel as though projects occupy positions inside the same digital
world introduced on Home.

The route transition from Home should naturally lead into this environment.


Conceptual progression:

HOME CURRENT MATTER
→
particles stretch through depth
→
camera moves into deeper space
→
PROJECTS environment appears
→
first project becomes dominant
→
scroll moves through successive work
→
active project comes forward
→
previous project recedes
→
next project emerges
→
final project transitions into CTA


==================================================
PART 3 — PROJECTS ENTRY
==================================================

If navigating internally:

DO NOT show the loader.

Use the existing persistent route transition.

HOME → PROJECTS should preferably use the Task 06 Explore/depth transition.


If directly loading /projects:

use the established NON-HOME direct-entry loader.

Do not create a new Projects-specific loading system.


==================================================
PART 4 — PROJECTS HERO
==================================================

Use final production copy:

Eyebrow if composition benefits:

Selected work

Primary heading:

Projects shaped from idea to experience.

Supporting copy:

A selection of websites, digital experiences and product work created
through design, engineering and technology.


Alternative shorter heading permitted if visual composition strongly
benefits:

Selected work.

Do not use both large headings redundantly.

Choose the stronger composition and keep the copy concise.


==================================================
PART 5 — PROJECT DATA AUDIT
==================================================

Before populating the page:

inspect the repository for ACTUAL ASL project information and assets.

Identify:

- real client projects;
- genuine internal ASL concepts;
- genuine projects in development;
- usable screenshots/videos;
- external URLs;
- project descriptions.

DO NOT assume a project is real merely because an image or mockup exists.

If provenance is unclear:

flag it and do not present it as client work.


==================================================
PART 6 — NO FAKE PORTFOLIO
==================================================

Under no circumstances create fictional:

- client companies;
- logos;
- project names;
- launch statuses;
- results;
- metrics;
- testimonials.

Do not populate the page with fake projects simply because the design needs
more rows.


==================================================
PART 7 — IF REAL PROJECTS EXIST
==================================================

Populate the Projects page with verified real project information.

Use only supported labels:

LIVE

IN DEVELOPMENT

CLIENT PROJECT

ASL CONCEPT


Only show status information when true.


==================================================
PART 8 — IF THERE ARE NOT ENOUGH REAL PROJECTS
==================================================

Do not fabricate filler.

Use fewer, larger projects.

Two beautifully presented real projects are better than eight fictional
ones.

If genuine ASL concepts/demos exist, they may appear in a clearly separated:

ASL CONCEPTS

section.

Production wording:

Experiments and self-initiated work used to explore new interactions,
interfaces and digital ideas.

Never visually disguise concepts as client commissions.


==================================================
PART 9 — IF NO PUBLISHABLE PROJECTS EXIST
==================================================

If repository inspection finds no verified publishable work:

DO NOT invent projects.

Build the complete production Projects architecture, but use an honest
client-facing state.

Use:

Selected work is being prepared for publication.

Supporting text:

We are documenting current projects properly rather than publishing work
without the context behind it. In the meantime, explore what we do or tell
us what you're looking to build.

Actions:

Explore Capabilities
Start a Project

This state should still be beautifully art-directed.

Do not display development/debug placeholders publicly.


==================================================
PART 10 — PROJECT PRESENTATION
==================================================

For actual project entries, each project should support:

- large project title;
- status if useful;
- type / disciplines;
- short description;
- large image/video/media;
- external visit link if real;
- internal case-study link if available.

Example layout information:

PROJECT NAME

Website / Digital Product / etc.

One concise paragraph.

View Project →
or
View Case Study →

Do not overload the archive with detailed case-study copy.


==================================================
PART 11 — PROJECT SCROLL ANIMATION
==================================================

Take inspiration from the ARC AI interaction study but reinterpret it.

Desired behaviour:

as a project approaches the active viewport region:

- its media increases in visual dominance;
- depth moves toward viewer;
- typography reaches full opacity/clarity;
- surrounding projects recede;
- Mutable Matter subtly reorganises around the project.

As it leaves:

- media recedes/scales/ translates;
- surrounding matter changes direction;
- next project gains prominence.

Avoid a normal static card grid on desktop.


==================================================
PART 12 — SPATIAL COMPOSITION
==================================================

Do not place every project at exactly the same screen coordinates.

Allow controlled spatial rhythm.

For example:

PROJECT 01
media dominant right
text left

PROJECT 02
media dominant left
text right

PROJECT 03
larger central media
text offset

PROJECT 04
different crop/depth relationship

Maintain grid discipline.

Do not make the archive randomly scattered.


==================================================
PART 13 — PROJECT MEDIA
==================================================

Real project imagery must remain the hero.

Particles should support it rather than obscure it.

Possible Mutable Matter behaviours:

- flow around media perimeter;
- bend as project approaches;
- stretch behind media;
- locally disperse near pointer;
- dissolve into depth between projects.

Do not coat every project screenshot in particles.


==================================================
PART 14 — PROJECT CURSOR INTERACTION
==================================================

Preserve the Task 06 Mutable Matter physical law.

Where particles are visible:

cursor may locally disperse/bend them.

Project imagery itself may use a restrained hover response such as:

- subtle depth shift;
- small scale change;
- image-mask movement;
- directional parallax.

Avoid excessive magnetic cursor tricks.


==================================================
PART 15 — ACTIVE / INACTIVE HIERARCHY
==================================================

The current active project should clearly dominate.

Inactive work may become:

- darker;
- smaller;
- farther in depth;
- slightly desaturated;
- lower opacity;

but must remain discoverable.

Do not reduce inactive project text below accessible contrast when users
need to read it.


==================================================
PART 16 — PROJECT STATUS DESIGN
==================================================

Statuses should be understated.

Examples:

LIVE
IN DEVELOPMENT
ASL CONCEPT

Use small typography / metadata.

Do not use bright SaaS-style pills unless they genuinely suit the final
composition.


==================================================
PART 17 — PROJECTS MATERIAL ENVIRONMENT
==================================================

Projects remains predominantly:

space black
charcoal
graphite

with controlled burgundy presence.

Use the established textured environment system.

Do not make the page one continuous flat black canvas.

Allow material sections / tonal changes between work where useful.

Keep the environment darker than the capability page so project media
remains dominant.


==================================================
PART 18 — PROJECTS CTA
==================================================

At the end of Projects use final production copy:

Heading:

Have something in mind?

Supporting copy:

Tell us what you're building, where you are in the process and what you need
help with.

Primary CTA:

Start a Project

Destination:

/contact


Optional secondary:

Explore Capabilities

Destination:

/capabilities


==================================================
PART 19 — PROJECTS MOBILE
==================================================

Do NOT try to reproduce an elaborate desktop spatial camera journey exactly
on mobile.

Create a premium vertical editorial portfolio.

Mobile should use:

- large project media;
- strong titles;
- simple depth/parallax where performant;
- reduced particles;
- minimal camera movement;
- clear touch targets.

Projects remain impressive without scroll hijacking.


==================================================
PART 20 — PROJECTS REDUCED MOTION
==================================================

For reduced motion:

disable large project camera travel and dramatic media transforms.

Use:

- static editorial layout;
- short fades;
- gentle opacity/scale;
- minimal particle activity.

All project information and links remain available.


==================================================
PART 21 — PROJECTS SEO
==================================================

Use production metadata.

Suggested title:

Projects | ASL

Suggested description:

Explore selected websites, digital experiences and product work by ASL,
created through design, development and technology.

If the actual project mix changes materially, adjust description accurately.

Use one clear H1.

Project names should use semantic headings.


==================================================
PART 22 — CONTACT PAGE CONCEPT
==================================================

Now build /contact.

Behavioural verb:

ATTRACT

Contact should feel much calmer than:

- Home;
- Projects;
- Capabilities.

The visitor has reached a conversion point.

Do not create another particle showcase.


==================================================
PART 23 — CONTACT ENTRY
==================================================

Internal navigation:

use persistent route-transition system.

Particles should:

- become more sparse;
- slow down;
- develop subtle directional attraction toward the contact composition.

Direct hard load:

use the established compact non-home ASL entry loader.

Do not build a separate Contact loader.


==================================================
PART 24 — CONTACT ENVIRONMENT
==================================================

Use a premium material environment.

Preferred direction:

deep textured burgundy
+
charcoal shadowing
+
subtle grain
+
near-black falloff

Particles:

- sparse
- restrained
- warm bone
- gently attracted toward form region

Do not cover the form with particles.


==================================================
PART 25 — CONTACT FINAL COPY
==================================================

Use the following production copy.


H1:

Tell us what you're building.


INTRO:

Starting from an idea, improving something that already exists, or building
something entirely new? Tell us where you are and what you need.


FORM LABELS:

Your name

Work email

Company / organisation

Optional


PROJECT TYPE LABEL:

What are you looking for?


Options:

New website

Website redesign

Development

Digital product

Deployment / technical support

Ongoing maintenance

Something else


PROJECT DETAILS LABEL:

Tell us about the project


Helper text:

A few lines about what you're building, what you need help with and where
you are in the process.


TIMELINE:

Timeline

Optional


BUDGET:

Budget range

Optional


SUBMIT BUTTON:

Send project enquiry


==================================================
PART 26 — CONTACT SECONDARY ACTION
==================================================

Use:

Prefer a conversation?

Book a Call


If there is no real booking system configured:

do NOT create a fake booking interaction.

Either:

- route Book a Call to the same enquiry experience;
- use a real approved scheduling URL if one already exists;
- or flag scheduling integration internally for configuration.

Never link to a non-functional placeholder.


==================================================
PART 27 — BUDGET FIELD
==================================================

Budget is optional.

Do not force a budget decision before someone can contact ASL.

If implementation needs options, use broad non-prescriptive ranges only if
they have been approved.

If no budget ranges have been approved:

use a free-text optional field
or omit the field.

Do not invent commercial pricing.


==================================================
PART 28 — TIMELINE FIELD
==================================================

Timeline may be:

Not fixed yet
As soon as possible
1–2 months
3–6 months
6+ months

Only use these as planning preferences, not promises.

Alternatively use free text if cleaner.


==================================================
PART 29 — CONTACT FORM SUBMISSION
==================================================

Inspect existing infrastructure before choosing a submission implementation.

If a real submission backend already exists:

preserve/use it.

If no form endpoint currently exists:

implement the cleanest production-compatible architecture available within
the existing stack.

Do not silently pretend to submit.

Never show success unless the server/action confirms success.


==================================================
PART 30 — CONTACT SUCCESS STATE
==================================================

Successful submission:

Heading:

Enquiry received.

Copy:

Thanks for getting in touch. We have your project details and will take it
from here.


Do NOT add:

"We'll respond within 24 hours"

or any timeframe unless explicitly approved.


==================================================
PART 31 — CONTACT ERROR STATE
==================================================

Use clear human wording.

Example:

Something went wrong while sending your enquiry. Please try again.

If an approved real email address exists in project configuration, it may
also be offered as an alternative.

Do not invent an email address.


==================================================
PART 32 — CONTACT PARTICLE INTERACTION
==================================================

Use the existing pointer-dispersion system.

Contact particles should react very subtly.

The attraction behaviour remains dominant.

Do not let pointer movement create large explosions around form fields.


==================================================
PART 33 — CONTACT ACCESSIBILITY
==================================================

Ensure:

- every field has real label;
- keyboard navigation works;
- errors are programmatically associated;
- focus moves appropriately after errors/success;
- no placeholder-only field labels;
- contrast remains high over burgundy material;
- form works without WebGL;
- reduced motion retains full usability.


==================================================
PART 34 — CONTACT SEO
==================================================

Suggested metadata:

Title:

Contact ASL | Start a Project

Description:

Tell ASL what you're building and start a conversation about website
design, development, deployment or digital product work.

Do not mention locations unless verified.


==================================================
PART 35 — NAVIGATION UPDATE
==================================================

Update production navigation coherently.

Recommended primary navigation:

Projects
Capabilities
About
Contact

Primary action:

Book a Call

or:

Start a Project

Choose one consistently according to the established navigation design.

Do not show both as competing primary buttons in the same compact header.


==================================================
PART 36 — /WORK MIGRATION
==================================================

If /work exists from previous tasks:

make /projects the canonical public destination.

Preferred behaviour:

/work
→
permanent redirect to /projects

unless existing application architecture provides a stronger reason not to.

Update:

- Home Explore Our Work CTA;
- navigation;
- metadata;
- internal links.

Do not leave duplicate public portfolio pages.


==================================================
PART 37 — CONTENT SYSTEM
==================================================

Keep production copy/data outside renderer components.

Suggested:

content/projects.ts
content/contact.ts

or compatible existing content architecture.

Do not embed client copy in GLSL/WebGL components.


==================================================
PART 38 — NO PLACEHOLDER LEAKAGE
==================================================

Search the public Projects and Contact pages for:

placeholder
lorem
dummy
sample client
client name
project name
coming soon
TODO

Remove development-facing placeholder wording from public output.

Exception:

an intentionally written production empty-state sentence such as:

Selected work is being prepared for publication.

is permitted when truthful.


==================================================
PART 39 — RESPONSIVE QA
==================================================

Test:

1440px+
desktop

1024px
tablet

768px-ish
small tablet

390px-ish
mobile

Projects and Contact must both feel art-directed rather than merely stacked.


==================================================
PART 40 — PERFORMANCE
==================================================

Projects media may be heavy.

Use:

- appropriate Next.js image optimisation where applicable;
- responsive image sizing;
- lazy loading below the fold;
- video only where justified;
- poster frames;
- avoid loading every project asset immediately.

Do not compromise the initial page load for off-screen projects.

Preserve the persistent particle quality within sensible performance limits.


==================================================
PART 41 — VISUAL ACCEPTANCE — PROJECTS
==================================================

Confirm visually:

1. internal entry feels continuous from Home;
2. direct entry uses existing compact entry system;
3. Projects does not look like a generic card grid;
4. project media dominates appropriately;
5. active project hierarchy is obvious;
6. transitions feel inspired by high-end portfolio interaction without
   copying ARC AI;
7. Mutable Matter supports rather than hides media;
8. project content remains readable;
9. statuses are truthful;
10. no fictional clients exist;
11. mobile remains premium;
12. reduced motion remains complete.


==================================================
PART 42 — VISUAL ACCEPTANCE — CONTACT
==================================================

Confirm:

1. Contact is quieter than Projects;
2. deep burgundy material feels rich rather than flat;
3. particles remain subtle;
4. form is immediately understandable;
5. copy is final/professional;
6. no fake contact information appears;
7. submission does not fake success;
8. keyboard use works;
9. mobile form feels polished;
10. route transition feels continuous.


==================================================
PART 43 — REQUIRED EVIDENCE
==================================================

Capture at minimum:

PROJECTS

1. Projects entry
2. first project active
3. transition between two projects
4. another project composition
5. project hover state if applicable
6. Projects CTA
7. Projects mobile
8. Projects reduced motion if practical

CONTACT

9. Contact entry
10. full desktop contact composition
11. form interaction
12. validation/error state
13. successful state if real backend can be tested
14. Contact mobile
15. textured burgundy close-up


==================================================
PART 44 — VALIDATION
==================================================

Run:

- lint if configured
- type checking if configured
- tests if relevant
- production build

Inspect both pages in actual browser.

Test:

- direct /projects
- Home → Projects
- direct /contact
- Projects → Contact
- browser Back
- browser Forward
- hard refresh
- mobile
- reduced motion


==================================================
PART 45 — HANDOFF
==================================================

Create:

docs/handoffs/TASK_07_HANDOFF.md

Include:

- Projects architecture
- ARC AI interaction observations
- how ASL differs
- project data model
- project provenance/status rules
- current actual project entries
- spatial scroll architecture
- media performance strategy
- route transition integration
- /work redirect
- Contact architecture
- Contact content
- form submission architecture
- validation/success/error behaviour
- material system usage
- particle interaction
- mobile/reduced motion
- SEO metadata
- known weaknesses
- technical debt

Include:

## DO NOT REBUILD

List stable systems future Codex chats should preserve.

Include:

## NEXT TASK

Task 08 — Production Capabilities Page


==================================================
FINAL RESPONSE
==================================================

Return:

1. initial repo audit;
2. ARC AI animation/interaction analysis;
3. what interaction ideas were adapted;
4. Projects design implementation;
5. verified projects/content used;
6. any content excluded due to uncertain provenance;
7. route/redirect changes;
8. Contact implementation;
9. contact form submission architecture;
10. production copy implemented;
11. files changed;
12. packages added, with justification;
13. performance observations;
14. responsive behaviour;
15. accessibility/reduced-motion status;
16. SEO implementation;
17. screenshots/evidence;
18. build/test results;
19. remaining weaknesses;
20. location of TASK_07_HANDOFF.md.

STOP AFTER TASK 07.

DO NOT START THE CAPABILITIES PAGE.
Task 08 will be provided in a separate instruction.