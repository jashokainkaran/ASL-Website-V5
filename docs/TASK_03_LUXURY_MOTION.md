# TASK 03 — Luxury Motion, Editorial Art Direction, Texture & Route Identity

Read completely before implementation:

- `AGENTS.md`
- `docs/ASL_BRAND_AND_STORY.md`
- `docs/qa/QA_REPORT_TASK_02.md`
- the Builder 2 refinement report
- Task 00–02 prompts/reports
- all particle reference material
- all current screenshots

Inspect the current deployed/local implementation before changing code.

This task is a refinement pass. Do NOT redesign the site from scratch and do NOT replace the custom Mutable Matter engine.

The particle system is currently one of the strongest parts of the site.

The problem to solve is that the DOM layer, section transitions, backgrounds, and surrounding interaction language do not yet feel as authored or luxurious as the WebGL experience.

The goal is to make the rest of the site deserve the particle system.

---

## 1. Primary Goal

Introduce a coherent second visual system around Mutable Matter:

1. editorial motion;
2. section continuity;
3. residual particles outside the hero;
4. tactile environmental texture;
5. richer but restrained microinteraction;
6. a revised inner-route particle identity loader.

The finished homepage should feel like one continuous premium digital environment rather than a spectacular particle hero followed by static sections.

---

## 2. Non-negotiable Preservation

Preserve unless a verified defect requires change:

- persistent root-level `ExperienceCanvas`
- custom R3F/Three/GLSL particle engine
- canonical ASL mark
- current core hero sequence
- deterministic formation buffers
- GSAP ownership of scroll choreography
- Anime.js role for event-driven DOM/SVG motion
- existing accessibility architecture
- current black / charcoal / burgundy / bone palette
- current homepage section order
- content-integrity rules

Do NOT replace Mutable Matter with any off-the-shelf particle component.

---

## 3. Home Loader Rule

Remove the branded loader from `/`.

The homepage must start directly in the Mutable Matter opening.

The opening animation itself is the homepage arrival experience.

Do not delay it with another logo intro.

Verify:

- direct visit to `/` shows no branded loader;
- refresh on `/` shows no branded loader;
- returning to `/` through client navigation does not show the direct-entry loader.

---

## 4. Inner-Route Particle Loader

Rebuild the branded loader for direct entry to inner routes:

- `/work`
- `/work/[slug]`
- `/capabilities`
- `/about`
- `/contact`

Use the canonical ASL vector mark.

### Desired behaviour

Begin in space-black.

A sparse field of warm bone particles exists around the viewport and through depth.

Particles progressively accelerate inward.

The animation should initially feel like broad attraction.

Then, during the latter part of the sequence, particles stop moving merely toward the centre and instead curve toward their actual sampled coordinates on the canonical ASL mark.

Sequence:

```text
scattered matter
→ broad inward attraction
→ curved convergence
→ target-directed motion
→ ASL mark forms
→ slight overshoot
→ recovery / settle
→ page reveal
```

The effect must feel like digital matter being pulled into identity.

It must NOT resemble:

- a black hole;
- galaxy vortex;
- reverse explosion;
- glowing portal;
- generic particle swirl.

Use a physical-feeling slight overshoot/recovery rather than snapping mathematically onto the mark.

Different parts of the mark should resolve at slightly different times.

Keep a few subtle residual particles alive around the silhouette.

### Timing

Target roughly 1.0–1.4 seconds for direct inner-route entry.

Tune based on feel.

Do not fake progress percentages.

Do not block usable page content indefinitely.

### Internal navigation

Do not replay the full loader on every internal navigation.

Prototype a shorter persistent-canvas route transition:

```text
current route particle state
→ brief inward convergence
→ canonical ASL mark
→ release into target route state
```

Target roughly 0.5–0.8 seconds if it feels natural.

Route-specific release direction may follow `AGENTS.md`.

### Colour

Space-black + bone / pale neutral only.

No burgundy in the loader.

### Reduced motion

The loader remains animated.

Lower intensity only.

### No WebGL

Provide an SVG/CSS/Anime.js conceptual equivalent:

```text
scattered points / fragments
→ inward convergence
→ canonical ASL mark
→ reveal
```

---

## 5. Build an ASL Editorial Motion System

Do not scatter unrelated animations around the page.

Create a coherent DOM motion language.

Use three levels:

### Level 1
Mutable Matter / WebGL spectacle.

Already exists.

### Level 2
Editorial choreography.

Implement a reusable system for things such as:

- clipped/masked headline reveals;
- phrase/line reveals;
- large section numbering;
- rules extending/retracting;
- labels entering with subtle offset;
- editorial section transitions;
- surface/background wipes where appropriate;
- text and particle-state choreography tied to the same scroll chapters.

### Level 3
Microinteraction.

Use restrained behaviour for:

- nav links;
- CTA buttons;
- arrows;
- route indicators;
- logo/mark interaction;
- menu details.

Create reusable primitives/utilities rather than hand-authoring unrelated logic in every section.

---

## 6. Hero DOM Choreography

The current hero should not feel like:

```text
particles finish
→ static headline appears
→ paragraph
→ buttons
```

Art-direct the reveal.

Suggested direction:

- ASL particle mark settles;
- one thin rule or directional line appears;
- headline reveals through clipping/masking by line or phrase;
- supporting copy enters after the headline with a small controlled offset;
- CTA treatment appears last;
- the composition remains in the negative space of the particle mark.

Keep movement restrained.

No bouncing.

No dramatic letter-by-letter gimmick.

Use GSAP when timing is linked to hero `sceneProgress`.

---

## 7. Hero → Capabilities Transition

Remove the feeling of one section ending and another page section beginning.

Create a visual handoff.

Explore a mechanic where:

- one filament/rule from the hero becomes part of the capability layout;
- residual particles continue across the boundary;
- particle density changes while editorial typography takes control;
- section surface changes gradually rather than as a hard cut.

The user should feel the same material becoming the next visual system.

---

## 8. Capabilities — Re-art-direct as Editorial Chapters

Capabilities are not cards.

They should feel like one authored sequence containing four clearly differentiated chapters:

01 — DESIGN  
02 — DEVELOPMENT  
03 — DEPLOYMENT  
04 — DIGITAL PRODUCTS

Material states remain:

- Design → lattice
- Development → strata
- Deployment → directed stream
- Digital Products → living cluster

The current particle states are technically distinct but the DOM compositions are too similar.

Improve perceived differentiation using:

- large numbering;
- typography scale;
- alignment changes;
- negative-space composition;
- editorial rules;
- restrained motion;
- different text placements;
- chapter progress;
- subtle background-light changes;
- particle/material responses.

Do NOT turn them into four unrelated visual gimmicks.

They must remain one system.

### Suggested chapter transition behaviour

As one capability gives way to the next:

- current label/copy exits with controlled clipping or vertical displacement;
- number transitions;
- a rule travels/reframes the composition;
- particle state morphs;
- new copy enters at the same authored anchor.

Keep text readable and outside dense particle matter.

---

## 9. Residual Matter Through Later Sections

Introduce subtle traces of Mutable Matter outside the hero.

These are NOT mini versions of the main 60k-particle spectacle.

Use quiet residual matter such as:

- sparse small particles;
- occasional loose groupings;
- soft drifting fragments;
- edge particles;
- particles integrated with editorial rules;
- tiny streams crossing section boundaries.

Typography remains dominant.

Typical later-section visible density may be tens of points, not thousands of visually dominant particles.

Where practical, derive these from or coordinate them with the persistent particle world rather than creating unrelated decorative effects.

Use residual particles to connect:

- hero → capabilities;
- capabilities → burgundy statement;
- burgundy statement → final CTA.

---

## 10. Environmental Texture

Current flat surfaces need more physical depth.

Create a restrained texture system for page environments.

### Required qualities

- very fine grain;
- subtle tonal variation;
- broad restrained lighting fields;
- slight vignetting where useful;
- tactile dark surfaces;
- no obvious repeating pattern;
- no visible grunge;
- no neon;
- no generic SaaS gradient blobs.

The viewer should feel the texture more than consciously notice it.

### Performance

Prefer cheap implementations:

- small repeating noise asset;
- SVG noise/filter if appropriate;
- CSS pseudo-elements;
- lightweight static texture;
- extremely slow tiny movement only if it materially improves the result.

Do not add an expensive full-screen animated shader simply to create grain.

Do not use a large 4K texture unnecessarily.

### Environment rhythm

**Hero**
- space-black
- subtle grain
- depth
- ambient specks

**Capabilities**
- charcoal
- fine grain
- residual matter
- architectural/directional light
- editorial lines

**Burgundy statement**
- deep textured burgundy
- darker wine edges / subtle vignette
- sparse bone particles
- very little main-particle activity

**Final CTA**
- near-black or dark burgundy
- perimeter/residual particles
- restrained convergence
- soft directional light toward CTA

---

## 11. Burgundy Statement — Calm, Not Dead

Keep the substantial burgundy section.

Do not convert it into another high-motion sequence.

Improve it through art direction:

- textured burgundy field;
- subtle vignette;
- sparse residual bone particles;
- strong editorial typography;
- one or two restrained line/rule movements;
- staged text reveal.

Potential hierarchy:

```text
MOST WEBSITES
ARE ASSEMBLED.

OURS ARE
SHAPED.
```

The second statement may receive stronger scale/placement.

Do not fabricate proof.

If there is no real proof content, do not reintroduce fake project rows.

---

## 12. Navigation Refinement

The current navigation should remain minimal but receive more authored interaction.

Research and refine:

- active-route treatment;
- directional underline;
- subtle 1–2px type movement if appropriate;
- mark/wordmark microresponse;
- hover/focus parity;
- route transition relationship.

Do not build a mega menu.

Do not make the nav visually heavy.

Keyboard/focus behaviour remains mandatory.

---

## 13. CTA Motion

Research a restrained magnetic/directional interaction.

A CTA may respond to pointer proximity by only a few pixels.

Possible behaviour:

- button/label shifts max ~3–5px;
- arrow travels directionally;
- hairline/edge brightens;
- extremely brief warm/gold highlight if appropriate;
- returns cleanly to rest.

Keyboard focus must receive an equally intentional visual state.

Do not implement a button that dramatically follows the cursor.

---

## 14. Final CTA Recomposition

The final CTA should feel like a callback to the hero, not a replay.

Preserve the current left-aligned conversion direction if it is working.

Explore:

- partial/offset ASL particle geometry;
- particles entering from page edges;
- perimeter matter;
- CTA-led composition;
- calmer particle motion;
- residual matter reacting very subtly to CTA interaction.

Headline remains:

**Let's build something that holds its shape.**

CTA:

**Book a Call** → `/contact`

---

## 15. Research Requirement

Actively research relevant mechanics before implementation.

Use:

- 21st.dev
- Aceternity UI
- React Bits
- Motion Primitives
- Magic UI
- Cult UI
- Radix / W3C accessibility references
- other high-quality creative-frontend references where useful

Research specifically:

- editorial text reveals;
- split/clipped typography;
- sticky chapter choreography;
- scroll masks/wipes;
- line animation;
- active-route/nav treatment;
- magnetic CTA mechanics;
- section transitions;
- footer reveals;
- SVG/path motion.

Do not merely browse and then add an underline.

Document what was studied and what materially influenced the implementation.

Prefer adapting/reimplementing with the current stack.

Do not install Motion only to copy a Motion-based component if GSAP/Anime.js already cover the need.

Do not paste entire components or templates.

---

## 16. Reduced Motion

Project-specific rule:

Animations remain enabled under `prefers-reduced-motion: reduce`.

Do NOT replace this work with static states.

Instead reduce intensity:

- smaller parallax;
- shorter travel;
- gentler camera movement;
- lower pointer response;
- softer route-loader acceleration;
- smaller CTA magnetic offset;
- reduced streak/blur.

The visual story remains intact.

---

## 17. Responsive Art Direction

Do not merely shrink desktop.

Inspect and deliberately compose:

- 1920×1080
- 1440×900
- 1366×768
- 390×844
- an intermediate tablet width where practical

Check:

- editorial-number scale;
- headline wrapping;
- rules/lines;
- particle/text collisions;
- residual-particle density;
- texture strength;
- capability composition;
- burgundy typography;
- final CTA;
- route loader;
- nav interaction.

Mobile may simplify editorial motion while preserving the visual language.

---

## 18. Performance

Do not rewrite the particle core.

Do not lower high-tier counts based on headless FPS.

Profile obvious new costs.

Specifically ensure:

- texture/grain layer is cheap;
- residual particles do not create a second expensive particle engine;
- DOM animations do not create excessive layout thrashing;
- scroll-linked motion uses GSAP efficiently;
- no duplicate requestAnimationFrame loops are introduced;
- inner-route loader reuses existing geometry/mark data where practical;
- hidden/offscreen effects do not keep expensive work active unnecessarily.

Distinguish measured, observed, and inferred performance.

---

## 19. Accessibility

Preserve and verify:

- semantic DOM;
- aria-hidden WebGL;
- visible focus;
- keyboard navigation;
- skip link;
- mobile menu behaviour;
- no-WebGL path;
- text contrast;
- touch scrolling.

Ensure decorative residual particles and grain are non-semantic.

Route loader must never trap focus.

Meaningful page content should remain present/accessible even while the visual transition occurs.

---

## 20. Visual QA / Iteration

Do not stop after one implementation pass.

Perform at least four passes:

### Pass 1
Motion primitives + texture foundation + homepage loader removal.

### Pass 2
Hero/capabilities editorial choreography + section continuity.

### Pass 3
Burgundy statement + final CTA + residual matter.

### Pass 4
Inner-route particle loader + responsive/accessibility/performance polish.

After each pass:

- run the site;
- inspect;
- capture representative screenshots where useful;
- fix objective composition failures before continuing.

Also inspect motion in-browser, not only still screenshots.

---

## 21. Acceptance Criteria

Do not mark Task 03 complete unless:

1. `/` has no branded loader;
2. direct inner-route entry uses the new particle-convergence ASL loader;
3. loader clearly looks like matter being pulled into the canonical mark, not a logo fading in;
4. loader contains no burgundy;
5. internal route navigation does not replay the full direct-entry loader;
6. hero DOM reveal has deliberate editorial choreography;
7. hero → capabilities no longer feels like a hard section break;
8. capability chapters are visually/editorially distinct;
9. subtle residual matter appears outside the hero without overpowering text;
10. charcoal/burgundy surfaces have restrained tactile texture;
11. burgundy section remains calm but no longer feels visually dead;
12. final CTA is a callback, not a hero replay;
13. nav and CTA microinteractions feel authored and restrained;
14. reduced-motion mode remains animated with lower intensity;
15. no-WebGL remains usable and branded;
16. desktop/mobile layouts remain coherent;
17. no fabricated proof/content is introduced;
18. lint passes;
19. typecheck passes;
20. production build passes;
21. browser console has no new application errors.

---

## 22. Screenshots / Evidence

Save evidence under:

```text
docs/screenshots/task-03/
```

Capture at minimum:

1. homepage initial state showing no loader;
2. hero mark + editorial reveal;
3. hero → capabilities handoff;
4. Design chapter;
5. Development chapter;
6. Deployment chapter;
7. Digital Products chapter;
8. textured burgundy statement;
9. final CTA;
10. direct inner-route loader — early attraction;
11. direct inner-route loader — mark forming;
12. direct inner-route loader — settled mark;
13. inner-page post-loader state;
14. mobile hero;
15. mobile capability sequence;
16. mobile burgundy section;
17. mobile final CTA;
18. reduced-motion animated state;
19. no-WebGL fallback.

Where still images cannot prove a motion behaviour, describe the runtime verification explicitly.

---

## 23. Final Report

Report:

1. what changed;
2. files changed;
3. editorial motion system;
4. section-continuity work;
5. environmental texture implementation;
6. residual-particle strategy;
7. homepage loader removal;
8. inner-route loader architecture;
9. route transition behaviour;
10. navigation/CTA refinement;
11. external references studied and actual influence;
12. dependencies added/removed and why;
13. performance observations;
14. accessibility verification;
15. screenshots/evidence;
16. lint/typecheck/build results;
17. remaining visual weaknesses;
18. areas requiring real-device review;
19. recommended next phase.

Do not claim real-device GPU performance if it was not measured.

---

## 24. Git

Before starting:

```bash
git status
```

Do not push to a remote.

Do not configure a new remote.

Preserve previous commits.

At completion, after tests/report/screenshots:

```text
Task 03 luxury motion complete
```

is an acceptable local commit message.

Report the final commit hash.
