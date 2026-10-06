# Task 07 — Projects and Contact handoff

Implemented 2026-10-06 against the final/revised Task 06 working tree. Pages, archive architecture, navigation migration, server form architecture and validation are implemented. Enquiry delivery is **not activated**: no approved destination or credentials were supplied. No publication-approved portfolio entries were found. Do not describe the site as fully ready to receive enquiries until the delivery integration has been configured and tested.

## Initial repository audit

Read the complete AGENTS.md, brand/story document, Task 05 handoff, Task 06 handoff including its latest material/pointer/content revision, Task 06 report and Task 07 brief. Inspected the current root entry, persistent canvas, renderer, lazy route targets, semantic route controller, pointer profiles, content, route structure, environment textures and fallback paths. The nested particle reference pack exists at `docs/asl_particle_reference_pack/docs/particle-reference`; its notes and contact sheet were inspected. The shorter specified reference directory is absent.

The repo already had a large dirty Task 06 working tree and user-authored task documents. Those were preserved. No broad architectural reset, package update, lockfile change, remote push or commit grouping unrelated work was performed. The existing development server on port 3000 was reused. Production QA uses a task-owned Next server on port 3002.

Before Task 07, Work and Contact used PlaceholderPage; project data consisted of three `isPlaceholder:true` layout records, without real project assets or links. Public assets contain supplied brand vectors and material textures. No approved business email, office, telephone, booking provider or enquiry receiver was configured. No secrets were inspected or exposed.

## ARC AI observations / external influence

Visually inspected [ARC AI Portfolio](https://www.arcai.agency/portfolio) through browser screenshots and actual scrolling, including desktop and mobile viewport overrides. The live desktop view was predominantly a two-column grid, with large screenshot panels, readable summaries, the next projects visible during traversal, fixed floating navigation, and an external-link affordance over linked imagery. Mobile became one column. Large pinned camera travel was not evident in the sampled views. Exact timing, easing and final-project exit were not measured; do not claim them as observed facts.

Retained principles: media dominance, onward discovery, clear destination affordances and status hierarchy. Independently implemented ASL's alternating editorial layout, warm-bone typography, mineral/graphite depth, understated links, and approach/hold/recede movement with existing GSAP. No ARC assets, branding, client information, layout, source, metrics, colours or copy were imported. The generic repeated grid, coloured pills and glass navigation were not adopted.

UI/UX Pro Max informed focusable linked error summaries, inline field associations, touch targets and breakpoint review. Its generated glass/card design recommendation was unsuitable; ASL's established design direction takes precedence. No external component source or dependencies were added. Analysis written before implementation: `docs/TASK_07_REFERENCE_ANALYSIS.md`.

## Projects architecture and content

Canonical `/projects` is a server-readable route with one H1. Hero uses the supplied “Projects shaped from idea to experience.” wording, with existing Instrument Serif/Geist/mono and an italic final phrase. The primary environment remains charcoal/graphite, with low-key persistent perimeter matter. The publication composition uses architectural depth rules, honest copy and real Capabilities/Contact links. The end CTA uses “Have something in mind?” plus the supplied support and Start a Project → `/contact`, with a restrained wine/mineral environment.

`src/content/projects.ts` exports typed Project/ProjectMedia, the registry, publication filter and production copy. Fields support slug, title, type, status, description, disciplines, optional year, cover, optional gallery/video, external destination, real case-study path, featured flag, approval and internal provenance. `publicationApproved` and non-empty provenance are required for publication. Approval is a human editorial responsibility, not automated verification. Only supply caseStudyPath when that real route exists; no case-study pages were invented in this task.

Actual published entries: **zero**. The three old fictional records were removed. Behavioural reference frames, ASL development screenshots and the lab were excluded as portfolio work because they lack approved project provenance. No fictional company or concept was created. The supplied “Selected work is being prepared for publication.” state is public, with its exact support and actions. Genuine ASL Concepts, when supplied, render under a separately labelled Concepts section with the approved explanatory copy.

`ProjectEntry` provides semantic H2s, status/type/discipline metadata, large media, truthful destinations and external-link announcements. Desktop compositions cycle text-left/media-right, media-left/text-right, and a larger central/offset composition. Mobile uses a single vertical editorial column. Text remains readable throughout; no opacity-driven loss of information. Images use Next Image dimensions and responsive sizes, first eager/subsequent lazy loading. Optional video is user-controlled with `preload="none"` and a poster; no unsolicited autoplay. Gallery data is available for later detail pages, not loaded by the archive.

`ProjectsMotion` is the single route scroll score, through GSAP/ScrollTrigger and matchMedia. It uses real native document scroll, no pin or scroll hijack. Canonical sceneProgress spans `.91 → .9108`, safely below the existing paused statement range. Media approaches/holds/recedes using scale and vertical displacement, with a separately authored copy movement. Each entry's own timeline gives natural adjacent overlap. Mobile uses only 15px movement; desktop uses 55px and .94→1→.96 scale. Reduced motion uses no media travel/scale change. Empty-state spatial rules have a restrained scroll shift, removed for reduced motion. MatchMedia/context cleanup releases all owned timelines/triggers on navigation or breakpoint changes. No independent window.scrollY listener exists.

There are no actual project rows to inspect, so active-project, inter-project, project-hover and alternate composition screenshots are **not applicable yet**. Renderer/choreography architecture exists but should receive a real-media art-direction pass after approved entries are supplied. Do not fill it with fictional work to obtain evidence.

## Route migration and material integration

`/work` now returns 308 permanent redirect to `/projects`. Unknown `/work/[slug]` still returns 404; there were no published case studies to migrate. Navigation label/destination is Projects, Home's Explore Our Work links to `/projects`, and sitemap contains `/projects` instead of `/work`. Both Projects and potential project detail paths resolve to the existing Explore/Focus semantic presets. Internal name `work` remains the stable preset/API name; renaming the renderer API was unnecessary.

The root document-entry gate and route controller are unchanged. Direct `/projects` or `/contact` uses the existing compact non-home cover. Internal navigation retains the canvas, no extra veil or logo loader. Home→Projects, Projects→Contact, Back/Forward and hard refresh were checked. One canvas remained present during route checks; no claim of a GPU-object identity trace is made.

A small supplemental GLSL branch derives quiet archive perimeter depth from canonical progress. Contact uses the already allocated `aRouteTarget`, lazily generated by `formations/contact.ts`; Capabilities continues to use that same reserved buffer. No new attributes or populations were added. Contact forms a near-frame perimeter with small depth/vertical drift, lower energy and only the deterministic upper 2.5% of seeds visible after arrival (about 1500 primary at high tier, 450 at low tier, before clipping). The ordinary separate ambient layer persists. Pointer profile strength/depth are reduced to .16/.2 of their existing route-resolved values. All Home formation targets, material rendering, local physical recovery and scroll story remain intact. This is quiet procedural perimeter attraction, not a new particle simulation or a second spectacle.

Contact's own layered semantic wine/burgundy/charcoal surface combines existing mineral texture with the persistent material field. The form region uses a darker scrim; warm bone particles do not coat controls. Form control borders are stronger than decorative rules, and anchor/focus targets reserve clearance under the fixed header. No-WebGL keeps all page surfaces/content/forms/links usable without requiring the canvas.

## Contact architecture and production copy

Server page `/contact` uses supplied “Tell us what you're building.” headline, introduction, optional company, required name/email/type/details, and optional free-text timeline/budget. All seven supplied project-type options are present. No commercial prices or availability promises were invented. Desktop has a sticky editorial introduction beside the form. 768px switches to a single column; 390px uses a quieter vertical composition with full-width fields/button.

“Prefer a conversation? / Book a Call” links to the enquiry anchor, with a plain instruction to include a call request. No fictitious scheduler is shown. Existing global Book a Call remains `/contact`. No invented email/phone/address or response guarantee appears.

`ContactForm` uses useActionState with a real Next server action. Pending state prevents repeat button clicks and exposes aria-busy. Server validation checks required fields, email shape, allowed type and lengths (name120, email254, details5000, optional fields200). Failed attempts retain values and inline errors. A focusable role=alert summary links to invalid fields, with aria-invalid/aria-describedby associations and helper text. Keyboard error-link/Tab behaviour was tested. Success focuses a role=status with the exact supplied “Enquiry received.” copy. Anime.js only fades the event-driven feedback container for 220ms; it never animates particles or duplicates scroll choreography.

Form inputs are server-rendered and the native action supports progressive submission. The root no-JS visibility/pointer-events escape is preserved. Live no-JS/no-WebGL browser sessions were not forced in this task: the available browser controls did not expose JS/WebGL or reduced-motion emulation. Server HTML, fallback CSS and reduced-motion branches were inspected, and the relevant limitations remain explicit.

## Submission architecture / configuration

No configured backend existed. The production-compatible adapter in `src/lib/contact-delivery.ts` reads server-only `ASL_ENQUIRY_ENDPOINT` and optional `ASL_ENQUIRY_TOKEN`. `.env.example` documents them. Only HTTPS destinations are accepted. POST JSON contains `{id, source:'ASL contact', enquiry}`; an Idempotency-Key accompanies a random UUID. The receiver must durably accept the enquiry and return HTTP2xx **and** JSON `{received:true}`. HTTP2xx alone, a non-boolean/string receipt, missing acknowledgement, error or timeout never yields public success. Fetch is no-store, redirects fail closed, and timeout is ten seconds. Credentials/payloads are not logged.

Server action adds a honeypot and bounded hashed-email per-process throttle (three attempts per ten minutes; maximum1000 active keys). Next's server action origin protection is retained. This throttle is not a distributed anti-abuse service. Configure shared throttling/delivery monitoring when deploying across instances. Sender feedback depends on receiver acknowledgement; receiver idempotency must actually be honoured by the configured service.

Current state: delivery is unconfigured. A clear notice appears before fields; submitting valid data returns an honest unavailable-delivery error and retains details. There is no fake “sent” state or invented alternate email. Activation needs the user-approved endpoint/service and a real end-to-end delivery test. The success branch was contract-tested with isolated mocks only; no external test enquiry was transmitted and no real success screenshot is claimed.

## SEO

Projects uses title Projects (existing ASL title template), canonical `/projects`, Open Graph title/description and an accurate publication-state description until real work exists. Contact uses absolute title “Contact ASL | Start a Project”, supplied description, Open Graph and canonical `/contact`. Sitemap migration was verified. Contact is dynamic so delivery configuration is evaluated on server requests. Existing robots/metadata framework is preserved. `NEXT_PUBLIC_SITE_URL` still needs an approved production origin before deployment; no domain was invented.

## Validation and evidence

Final lint/typecheck/production build passed (Contact dynamic, Projects static). Isolated `scripts/check-contact.cjs` passed validation, retained values, missing config/no transmission, honeypot, strict receipt gating, failure and throttling. Existing formation and pointer scripts passed. High-tier primary attribute arrays remain **8,400,000 bytes**, as measured by the formation script; no new per-particle attributes. No packages or lockfile changes.

Actual production browser: direct Projects/Contact, Home→Projects via navigation and Explore Our Work CTA, Projects→Contact, Back/Forward, hard refresh, native archive links, keyboard Tab, error links, empty validation, valid unavailable delivery and retained input. Direct pending samples hid #site-interface; internal navigation had entry=ready and veil display=none. One canvas was present. Main focus after route settlement and error-summary focus were observed. Final field-anchor sample put email at y135 with fixed header ending y100.

Both pages inspected at1440×900,1024×900,768×1024 and390×844. No horizontal overflow observed. Project media/hover/composition QA awaits real entries. Public visible main text had one H1 and no development-placeholder terms. Browser error logs were empty; inherited THREE.Clock deprecation warning remains. HTTP checks: intended routes200, `/work`308→`/projects`, unpublished work slug404. Initial server HTML includes DOM content, pending gate, labels and noscript escape.

Evidence index: `docs/screenshots/task-07/README.md`. Eighteen JPEGs include direct covers, publication state, desktop/mobile/tablet pages, CTA, validation, error, full Contact and texture crop. Some screenshots precede the final field-boundary contrast/anchor-clearance adjustment; their compositions are unchanged. Final desktop/full Contact frames are refreshed after QA. A screenshot is a sampled frame, not a timing trace or a video recording.

Performance: no sustained FPS, GPU timing, physical phone/Safari, thermals or cold-network benchmark was measured. Browser interaction was observed to stay usable; that is not a numerical performance claim. No default particle quality reduction was made because of browser tooling. Empty archive loads no project media. Fixed uniform/buffer strategy retains renderer memory structure; incremental CSS/client bundle cost was not isolated.

## Known weaknesses / technical debt

- Approved delivery integration is required before the public page can receive enquiries. The missing service is visible and not disguised.
- No verified project entries; actual-media choreography, active/inactive hierarchy, video behaviour and alternate project layouts need QA when content is supplied.
- Reduced-motion/no-WebGL/no-JS behaviour is implemented/preserved and inspected in code/server HTML, but not freshly forced in browser. Physical devices/Safari/accessibility certification are unmeasured.
- Delivery receiver must implement durable receipt, idempotency, appropriate data retention and monitoring; per-process throttle needs a shared store on multi-instance deployment. No durable inbox exists in this repo.
- No case studies were invented. Optional gallery/featured metadata awaits future use; remote media domains would need explicit Next image configuration before approved remote assets are supplied.
- Root supplied mark, rapid interrupted navigation and inherited clock warning remain earlier baseline concerns. Existing dense one-line modules were not broadly reformatted.
- Working tree includes pre-existing Task06/user changes; source remains reviewable without mixing them into an automatic commit.

## Files added / extended

Added: `src/app/projects/page.tsx`, `src/components/projects/ProjectEntry.tsx`, `ProjectsMotion.tsx`, `src/components/contact/ContactForm.tsx`, `src/components/SiteFooter.tsx`, `src/content/contact.ts`, `src/app/contact/actions.ts`, `src/lib/contact-validation.ts`, `contact-delivery.ts`, `src/particles/formations/contact.ts`, `src/styles/projects-contact.css`, `scripts/check-contact.cjs`, reference analysis, this handoff and screenshot evidence.

Extended: `.env.example`, `src/app/contact/page.tsx`, `src/app/work/page.tsx`, `src/app/sitemap.ts`, `src/components/Opening.tsx`, `src/content/navigation.ts`, `src/content/projects.ts`, `src/lib/route-transition.ts`, `src/particles/engine/ParticleField.tsx`, `src/particles/shaders/particle.ts`, `src/styles/globals.css`. Pre-existing changes elsewhere are not Task07 work.

## DO NOT REBUILD

Preserve the root server-first entry gate, readiness/fallback logic, one-document entry lifecycle, persistent client-only ExperienceCanvas, semantic route controller/real Next links/history/focus, custom warm-bone material shader, camera-aware bounded pointer physics/recovery, one canonical Home sceneProgress driver and derived heroProgress, current horizontal DNA/story, logo sampler, lazy section/route target buffers, particle identity correspondence, quality tiers, texture assets/tokens, server-readable production content and no-JS pointer-event escape. Extend the registry and page architecture; do not introduce new canvases, navigation loaders, fictional portfolio content or simulated form success.

## NEXT TASK

Task08 — Production Capabilities Page. **Not started.** Use the separate Task08 instruction. Configure delivery and supply approved work when available; do not treat missing facts as permission to fabricate them.

## Task07 creative refinement — 2026-10-06

The first Task07 delivery underdelivered visible design and motion: the public empty archive had faint rectangular outlines and almost imperceptible scroll drift. This refinement replaces that visual treatment with three folded, warm-bone material sheets in the persistent GPU particle population. The right-side opening composition migrates left as publication typography takes over, then recedes into the perimeter for conversion. `archive.ts` owns the procedural route geometry, using existing packed identities and no new particle attributes. Home formations, quality defaults and buffers remain unchanged. Route source preset is captured so departing Projects begins from its actual archive material state.

Projects and Contact now use reusable Anime.js event-driven masked headline arrivals, staggered details and a calmer form entrance. Anime.js owns arrival after the existing readiness/route gate; GSAP owns Projects scroll-linked heading travel, publication entrance, drawn SVG trace, conversion type and the canonical route material score. Cleanup reverts both systems. Server DOM remains visible without JavaScript; reduced motion reduces travel/duration while retaining animation. These uses rely on the installed stack; no dependency was added and no new external visual source influenced this refinement.

The Projects hero now uses three deliberate editorial lines and negative space beside the material. Publication preserves the truthful supplied empty-state copy. Contact retains textured burgundy, quiet material and adds focus colour feedback. No projects, metrics or successful enquiry delivery were invented.

Validation: lint, typecheck and production build passed. Formation, pointer and contact contract checks passed. Production browser inspected desktop and 390px mobile, direct entry, Projects→Contact→Projects, native archive jump and reverse scroll. One production canvas, no horizontal overflow, settled headline opacity and empty browser error logs observed. Existing development tools add extra debug canvases only on development pages. Reduced motion and forced no-WebGL were inspected in code, not forced in browser. FPS, physical devices and real project media remain unmeasured. Enquiry delivery remains unconfigured.

Updated running production preview: http://127.0.0.1:3002/projects. Evidence: `docs/screenshots/task-07/refinement/` contains Projects, publication and Contact desktop/mobile samples plus a conversion/footer scroll sample. Screenshots are sampled frames, not recordings of motion. The earlier screenshots document the first delivery and should not be treated as current design.

## MOTION / STORY REVISION

Revision brief: `docs/TASK_07_MOTION_STORY_REVISION.md`. Applied to the existing Task07 implementation; Task08 is not started.

### Audit / preservation

Projects already had three-line masked type, continuous GPU archive sheets, publication copy, native archive link and GSAP section movement. Contact had the approved editorial copy, burgundy surface, accessible server action/validation, honest unavailable-delivery notice and a whole-panel entrance. Direct entry correctly used a server-rendered cover with critical hidden-interface CSS; no hydration-first loader was introduced. Internal navigation retained one canvas and real Next links/history/focus. No real project-to-project movement could be observed because the approved project array remains empty. Existing structured content, metadata, sitemap/redirects, responsive layout, form data integrity, Home story, pointer law, texture assets, quality tiers and particle buffers were preserved.

Weaknesses verified: the compact identity was vector path drawing rather than particle resolution; direct entry did not lead into a material arrival; Contact revealed the form in one block; Contact targets were a viewport ellipse; the environmental controller explicitly replaced the canvas colour with space black during route transitions. Media approach/hold/recede existed but its inactive hierarchy was weak.

### Direct-entry story / loader

The existing ASLLoader now renders 240 SVG matter points sampled through the canonical `getASLMarkPoints` API. This is a compact SVG identity formation, not a second WebGL renderer. Bone points converge from deterministic scattered positions, hold briefly, loosen locally, and the same root cover withdraws. Its black/texture/ambient environment remains; Home still has no branded identity. Prepared inner choreography targets 1200ms plus 400ms exit (approximately1.6s), with readiness holding for fonts/first renderer frame or fallback. Cold document/hydration time is additional. Reduced entry keeps formation with shorter travel and a300ms exit; Skip remains functional. Animation resources are cleaned up.

After cover completion, `transitionTo(preset,true)` bridges a compact shared logo state into destination matter. Page headlines begin at routeProgress .65, then supporting details. The entry cover is never replayed for client navigation. No percentages, fabricated progress or second loader were added.

### Projects arrival / scroll

Internal Explore retains existing Z passage and opens negative space around the folded material archive. Direct entry now uses the same destination arrival after compact identity release. Current public story remains the truthful publication state; no fake distant project surfaces were inserted. Existing canonical route score migrates sheets from right to left and recedes them into the perimeter before CTA. Editorial heading, publication type, SVG rule and conversion motion remain GSAP-owned.

Future approved media entries now approach with small perspective-depth travel, scale .88→1, media brightness .72→1 and a4% mask opening; they hold, then recede to scale .90/brightness .76. A dataset active interval (.3–.7 of the local ScrollTrigger timeline) strengthens the editorial rule. Copy remains readable, unaffected by media brightness. Existing alternating left/right/wide compositions and optimised eager-first/lazy-subsequent media are preserved. GSAP owns these local timelines; no independent scroll listeners or new renderer were added. Actual-media/adjacent-project acceptance awaits approved entries and cannot honestly be demonstrated with the empty archive.

### ARC AI principles actually used

Revisited https://www.arcai.agency/portfolio visually on2026-10-06 at successive desktop scroll positions. The live reference still displayed a media-led two-column grid, visible adjacent discovery and a clear centred media link affordance; inspected samples did not demonstrate a dominant pinned camera sequence. Retained principles: media clarity/dominance, predictable onward discovery and inspectable active work. ASL independently reimplements approach/hold/recede with its own serif/mono editorial rhythm, mineral environments, alternating compositions and warm material. No source, project, image, copy, branding or template was copied; no dependencies were installed. The previous mobile reference inspection remains in `TASK_07_REFERENCE_ANALYSIS.md`.

### Contact arrival / attraction / interaction

Contact now presents headline first, supporting copy second, then a restrained80ms stagger of field groups and submit control (9px normal/2px reduced travel). No labels bounce or move character by character. Keyboard focus forces its group visible immediately, so arrival choreography cannot hide an active input. The form sits in a lighter integrated material surface with burgundy light and charcoal falloff; full-card glass or white panels were not introduced.

Lazy contact targets now occupy the form gutter/perimeter instead of the entire viewport boundary. Only about4% of the primary population contributes visible Contact energy; reduced pointer strength is retained. Very slow shader drift and bounded focus attraction support the outer form region. Focus coordinates update only on focus events, not a per-frame layout loop. Gold label/border feedback remains readable. Receipt concentration occurs only when the existing server action returns `success`; failures do not play it. No configured receiver exists, so real receipt/success motion remains untested. Server validation and failure behaviour are unchanged.

### Exit / environment continuity

Captured source preset preserves outgoing archive and Contact geometry for the requested route combinations. Contact source brightness opens progressively on departure, rather than exposing the entire population at once. SceneEnvironment now interpolates source material colour to destination; it no longer forces all transitions to black. Destination semantics remain Explore/Attract/Transform. Rapid interrupted transitions still use committed semantic source states rather than an exact interpolated-particle snapshot, an inherited limitation.

### Mobile / reduced motion / fallback

Mobile media has no Z travel, only .97→1→.98 scale and15px movement, native vertical scrolling and unchanged content. Contact uses quieter viewport-edge/gutter composition, usable16px fields and existing generous touch layout. Reduced Projects uses the quiet edge field, full-clarity static media, no mask/Z travel or scaling, and small editorial fades. Reduced Contact disables drift/focus gravitational travel and uses target-position fades. The compact loader remains animated with shorter distances. No-WebGL retains the same SVG loader and DOM entrances, established static brand/material fallback and functional links/form. The browser currently applies reduced motion: the exclusively reduced-motion interface rule computes to150ms. Final mobile evidence therefore exercises the editorial reduced path (quiet Projects edges, no Contact gravitational travel, compact animated loader and usable form). This was observed through computed DOM styles, without changing the OS preference. The tool does not expose preference emulation; final normal-intensity motion was inspected in code and earlier material screenshots, not independently forced. Forced no-WebGL/no-JS remains code/server-HTML inspection only.

### Validation / evidence / limits

See `docs/screenshots/task-07/story/README.md` for current evidence and final results. Screenshot frames are samples, not video recordings or exact first-raster timing. No default particle tier reduction, new buffers, React particle state, CPU particle loop, external component package or asset download. Attribute storage remains8,400,000 bytes high tier. Motion/resource continuity was observed; sustained GPU/FPS, physical phones, Safari, thermal and cold-network performance were not measured. Approved work and an approved enquiry receiver are still required to exercise actual media transitions and genuine success. Remaining creative review: compact mark stroke weight and quiet Contact matter depend on screen black levels; Contact intentionally prioritises form legibility.

Changed in this revision: `ASLLoader.tsx`, loader CSS, `RouteEditorialMotion.tsx`, `ProjectsMotion.tsx`, `ContactForm.tsx`, new `ContactMatter.tsx`, Contact page, route-transition/scene store, `ParticleField.tsx`, `SceneEnvironment.tsx`, contact formation, archive/particle shaders, projects/contact CSS, revision brief and handoff/evidence. No backend/content/SEO architecture was replaced.

Final checks for this revision: lint, typecheck and production build passed; contact, formation and pointer checks passed. Browser sampled11 Projects and4 Contact hard-refresh states with zero pending samples exposing interface content; particle-mark formation/release was observed. Five required route combinations retained one canvas and kept the cover off. Form keyboard Tab and invalid-submit summary focus/associations remained functional. Production-copy regex checks found no specified filler terms on either page. Final390px screenshots have no horizontal overflow. The browser's active reduced preference was confirmed by the applied150ms interface rule; final normal motion could not be independently forced. Evidence/precise caveats are indexed in `docs/screenshots/task-07/story/README.md`.
