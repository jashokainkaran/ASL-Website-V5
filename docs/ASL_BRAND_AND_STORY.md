# ASL: Brand Design and Story Flow

Concept: **MUTABLE MATTER**. Place this file at `docs/ASL_BRAND_AND_STORY.md`. Engineering rules are in `AGENTS.md`.

## 1. Brand idea

ASL turns raw digital material into finished form. The site demonstrates this instead of describing it: one living material that roams, gathers, becomes structure, flows and resolves into identity.

**Story spine:** raw, then shaped, then built, then released, then alive.

| Beat | Service | What the material does |
|---|---|---|
| Shaped | Design | Settles into precise, aligned form |
| Built | Development | Organises into layered structure |
| Released | Deployment | Moves as a directed stream |
| Alive | Digital Products | Becomes a self-sustaining living cluster |

**Voice:** confident, calm, precise. Short sentences. No hype words ("revolutionary", "cutting-edge", "synergy"). Speaks to founders and teams who care about craft.

## 2. Visual language

**Surfaces and rhythm:** space-black hero, then charcoal, then burgundy, then charcoal, then dark burgundy for the final CTA. Burgundy must be a real environment (whole sections and large surfaces), not just button accents. It does not appear in the opening particle sequence.

**Colour roles**
- Space-black `#050506` to `#09090A`: the hero world
- Charcoal `#111214`: base for later sections
- Burgundy `#621B2A`: depth and emotional weight
- Bone `#F6F1E8`: main particles and primary type
- Gold `#C6A15B`: rare. Hairlines, CTA hover, the odd bright spark. Never large fills
- Slate `#6C737D`: secondary text and quiet UI

**Typography (proposal, adjustable)**
- Display: a refined high-contrast serif (Instrument Serif or similar), large and tight, used sparingly
- Body and UI: Geist or Inter
- Labels: small uppercase mono with wide tracking
- Type and WebGL are composed together: the scene fills the whole viewport, and headlines sit in its breathing room (often by offsetting a large formation left or right), never over its densest region

**Motion principles**
- One material, three behaviours: gather, flow, rest
- Hero is the highest interaction density. Capabilities is controlled. The burgundy statement is nearly still. The final CTA gets one memorable moment
- One easing family across the site. Transitions feel physical (mass, drag), never bouncy
- Particles flow between states, they never simply fade

**Particle character:** bone-coloured luminous matter with a mix of tiny, medium and rare large out-of-focus particles, soft depth blur, brightening where density overlaps, streaking while moving, and a pointer that leaves a soft light trail. Never uniform dots. Full spec in the Particle character paragraph under Shader and motion rules in `AGENTS.md`.

## 3. Opening sequence (Mutable Matter)

| Order | State | Feeling | What happens |
|---|---|---|---|
| A | Roaming field | freedom | Thousands of particles drift through a broad 3D volume: uneven density, loose clusters, filling the whole frame with depth. Intelligent digital matter, not random stars |
| B | Dense cloud | attraction, concentration | Particles are drawn inward progressively: core first, medium distance next, far matter spirals in later, a few stay orbiting outside. Volumetric, irregular, heavy. Not a perfect sphere |
| C | DNA helix | intelligence, structure | A twisting motion starts inside the cloud and resolves into an abstract double helix: two elegant strands, sparse bridging particles, clear depth. Not a textbook molecule |
| D | Helix unravelling | decomposition | It does not explode. Regions leave the helix first, strands stretch, curvature widens, and the form is pulled into streams |
| E | Sweeping filaments | movement | 5 to 9 sweeping streams on different depth planes, crossing the viewport, sometimes passing close to camera or leaving frame. Silk-like, never rigid tubes. Computational silk, digital matter, controlled velocity |
| F | ASL mark | identity, calm | Filaments converge into the stylised ASL monogram. Regions resolve at slightly different times. Motion settles, the mark stays alive but calm |
| G | Hero reveal | calm | Headline, supporting line and CTAs appear in the breathing room around the mark |

The ambient layer (sparse, tiny, dim specks) gives the black space depth throughout.

## 4. Page flow and state map

The canvas persists across all pages. Each route sets a target state, so navigating morphs the same particles.

| Page | Particle state | Surface | Purpose |
|---|---|---|---|
| Home | Opening sequence, then capability states, rest, final convergence | Space-black, charcoal, burgundy, dark burgundy | Impress, position, convert |
| Capabilities | Structured field that changes per capability | Charcoal | Explain Design, Development, Deployment, Digital Products |
| Work and Work/[slug] | Particles recede to a quiet edge field | Charcoal with bone type | Let project visuals lead |
| About | Almost still, faint drift | Burgundy editorial | Philosophy, people, process |
| Contact | Final convergence around the CTA | Dark burgundy | Book a Call |

Navigation: minimal top bar (Capabilities, Work, About, Contact) plus a Book a Call button, wordmark at left.

## 5. Homepage script (placeholder copy, all flagged `isPlaceholder: true`)

**1. Opening sequence:** states A to F, with only a small mono label `ASL / DIGITAL STUDIO` and the minimal nav.

**2. Mark and positioning reveal (state G)**
- Headline: *Digital matter, given form.*
- Sub: ASL designs, builds and deploys websites and digital products for founders and teams who want more than a template.
- CTAs: **Book a Call** (primary, links to `/contact` until a booking URL exists), Explore Our Work (secondary, links to `/work`)

**3. Capabilities:** large typographic lines integrated with the particle field, not cards. Focus changes the particle behaviour.
- Design: *We shape how it looks, feels and speaks.* Particles align into a precise lattice
- Development: *We build it to last, layer by layer.* Particles stack into strata
- Deployment: *We release it cleanly and keep it running.* Particles form a directed stream
- Digital Products: *We grow ideas into products people use.* Particles form a living orbiting cluster

**4. Statement and proof (burgundy, near-still):** particles recede almost completely.
- Statement: *Most websites are assembled. Ours are shaped.*
- Proof strip (placeholders kept for layout review): `Project Name, Sector, Outcome` x 3, all flagged `isPlaceholder: true`. No invented company names, numbers or quotes

**5. Final conversion:** particles return and converge around the CTA, with the ASL mark as the last memorable moment.
- Headline: *Let's build something that holds its shape.*
- Button: **Book a Call**

**6. Footer:** wordmark, nav links, placeholder contact email, small print.

## 6. Formation library

Phase 1 builds 1 to 5. The rest come with the Capabilities phase.

1. Roaming field
2. Dense cloud
3. DNA helix
4. Sweeping filaments
5. ASL mark (provisional, one continuous spline through A, S and L)
6. Flowing field (wave or terrain of points)
7. Lattice (Design)
8. Strata (Development)
9. Stream (Deployment)
10. Cluster (Digital Products)

## 7. Roadmap

1. **Phase 1:** Task 00 bootstrap (`docs/TASK_00_BOOTSTRAP.md`), then Task 01 engine prototype of the opening sequence on `/lab/mutable-matter` plus a burgundy composition check (`docs/TASK_01_MUTABLE_MATTER_ENGINE.md`). Review after each task
2. **Phase 2 (Task 02):** full Home (`docs/TASK_02_PRODUCTION_HOME.md`): capability states, calm burgundy section, final conversion, footer
3. **Phase 3:** Capabilities, Work, About and Contact pages with route-driven particle states
4. **Phase 4:** mobile pass, reduced-motion and fallback polish, performance, SEO and accessibility audit
5. **Phase 5:** CMS for Work, real copy and logo, link Book a Call
