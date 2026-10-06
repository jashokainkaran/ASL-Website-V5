# Task 08 — Capabilities and Projects content

Completed 2026-10-06. Task 08 only. No Task 09 work, remote push or deployment.

## Audit and references

Read AGENTS.md completely, brand/story, Task06 status, Task07 handoff and both Task07 briefs, and Task08 before implementation. Requested `docs/tasks/` path does not exist; actual brief is `docs/TASK_08_CAPABILITIES_AND_PROJECTS_CONTENT.md`. Baseline had only that untracked user brief. The particle references were available inside `docs/asl_particle_reference_pack/docs/particle-reference/` and inspected.

Capabilities was a minimal server page. Projects had a typed but empty publication registry and a working archive story. Contact had a deliberately unconfigured delivery adapter. Those facts were verified in code rather than assumed from reports.

Full primary-source research, limitations and adoption decisions: [reference analysis](../TASK_08_REFERENCE_ANALYSIS.md). AREA 17 informed category/purpose/deliverable hierarchy; Clay informed explicit scope and alternating media/content; ustwo informed readable mobile lists and connected disciplines. Instrument and Huge supplied limited homepage/navigation observations; basement supplied concise capability/work relationships. No agency copy, identity, templates, code or assets adopted. Rejected consultancy expansion, outcome promises, client rosters, agency colours, generic SaaS cards and long methodology sections. No dependencies added or removed. UI/UX Pro Max was used for practical accessibility/media guidance; its generic light/blue design suggestion was rejected.

## Capabilities architecture

Server-readable `src/app/capabilities/page.tsx`: introduction → Design → Development → Deployment → Digital Products → connection → Projects bridge → final CTA → existing footer. One H1, labelled sections and service lists. Native anchor links retain the Home link destinations `lattice`, `strata`, `stream`, `cluster`. No pinning or scroll trapping. `src/content/capabilities-page.ts` owns all approved production copy separately from Home content.

### Final production copy

**From idea to working product.**

ASL brings design, development and technology together to create websites and digital products from the first idea through to launch and beyond.

Start a Project → `/contact`; Explore Our Work → `/projects`.

**Design — Shaping the experience before we build it.**

We turn ideas into clear, distinctive digital experiences — defining structure, interaction, visual direction and the systems that hold everything together.

- UX and information architecture
- Interface design
- Responsive web design
- Interaction and motion design
- Design systems
- Prototyping
- Creative direction
- 3D and WebGL experiences where the project benefits from them

**Development — Turning the experience into working software.**

We build responsive, production-ready websites and digital experiences with an emphasis on performance, maintainability and the details users actually feel.

- Frontend engineering
- React and Next.js development
- Component systems
- CMS integration
- API and third-party integrations
- E-commerce implementation
- Accessibility
- Performance optimisation
- Technical architecture

**Deployment — Taking the build into production properly.**

We handle the technical path from finished build to live product — including hosting, domains, deployment configuration and the systems needed to keep it dependable.

- Hosting and deployment
- Vercel and cloud deployment
- Domain and DNS configuration
- SSL and production configuration
- CI/CD
- Analytics setup
- Technical SEO foundations
- Performance monitoring
- Maintenance and support

**Digital Products — When the idea needs more than a website.**

We apply the same design-and-engineering approach to web applications, product interfaces, prototypes and tools that need to work as well as they look.

- Product discovery
- MVPs
- Web applications
- Dashboards and portals
- Interactive prototypes
- SaaS interfaces
- Internal tools

**One build, connected from end to end.**

Design decisions affect the build. Development decisions affect launch. Deployment affects how the product performs after it reaches people. Keeping those parts connected lets ASL carry an idea through without losing the thinking that shaped it.

**See the thinking in practice.**

Explore websites and digital experiences shaped across design, development and deployment.

Explore Projects → `/projects`. Real ÉMBER preview links to the archive.

**Have something to build?**

Tell us where you are, what you need and what you want the finished experience to do.

Start a Project → `/contact`.

### Formation and motion mapping

| State | Existing formation | Canonical score | Composition |
|---|---|---|---|
| ORGANISE arrival | Seven shader-generated ordered paths | .52 → .535 | Right of desktop headline; above mobile headline |
| Design | Folded membrane (`lattice`) | .52–.59 | Copy left, membrane right |
| Development | Interlocking curved layers (`strata`) | .61–.67 | Layers left, copy right |
| Deployment | Broad flowing ribbons (`stream`) | .69–.75 | Copy left, ribbons through right edge |
| Digital Products | Open sculptural shell (`cluster`) | .77–.84 | Shell left, copy right |
| Connection onward | Receding residual/edge state | .84 → .91 | Typography dominates |

`CapabilitiesMotion` uses one GSAP ScrollTrigger score mapped to native chapter positions. The ticker copies it into existing canonical `sceneProgress` only when route/entry are ready. Arrival is 1.25 seconds, .6 reduced, and any scroll takes ownership immediately. GSAP also extends chapter rules and settles copy by 30px (3px reduced). Reverse scroll reuses the same mapping. No independent scrollY readers.

Task06 deterministic formations and shader pointer recovery retained. `capability-placement.ts` applies route-only framing to lazily generated adjacent arrays; Home generators are untouched. The ordered arrival is computed from packed identities in GLSL, requiring no additional target buffer. Destination/source preset is passed to positionAt so departing capability geometry stays continuous. Contact alone writes its existing route target buffer, preventing Capabilities arrival from overwriting Contact source geometry.

Route controller's Capabilities destination is `.52` rather than the old `.60`. Same root direct-entry cover, canonical SVG mark loader and persistent canvas; no second loader. Internal navigation retains Task07 shorter convergence/material release and route heading reveal. SceneEnvironment preserves the departing Capabilities burgundy level. Shader owns population, GSAP owns scroll/route/DOM choreography. Existing Anime.js RouteEditorialMotion owns non-scroll arrival details; no new Anime.js population or scroll animation.

### Environments, responsive behaviour and fallback

Space-black arrival progresses through charcoal and increasing burgundy, with existing mineral texture, fine environmental grain, architectural light and restrained bone matter. Background masks soften service and connection boundaries. Quiet bridge/CTA replace spectacle after the shell.

Desktop alternates copy/formation; single-column service lists begin below 1100px. Phones and portrait tablets through 900px stack formation then copy, with a viewport-scaled visual slot and native scrolling. Mobile framing reserves space for labels and headline. All service names remain visible without hover. Designed SVG paths appear on static/no-WebGL fallback; noscript explicitly reveals them.

Reduced branches retain every chapter and material state, reduce arrival duration, copy travel, pointer strength/depth, velocity stretch, idle and camera motion. Projects removes depth travel/clip animation in reduced mode. This browser exposes only visibility and viewport overrides, so OS-reduced-motion, forced no-WebGL and JavaScript-disabled visual runs were **not** measured. They require human/device QA; code review is not a substitute for those runs.

## Projects content

Every entry below is **ASL Concept**, **Live**, with **Design / Development / Deployment** tags. No commissioned client, result, metric, testimonial or Digital Products claim. Each source was opened, its visible brand/title/headings inspected, and captured. Names reflect the live primary branding rather than the brief's shorthand.

| Order / final name | Source URL = external destination | Category | Local preview | Issue / naming basis |
|---|---|---|---|---|
| 1 — ÉMBER | https://ember-cafe-zeta.vercel.app/ | Hospitality | `/project-media/ember.webp` | Logo/title use accented ÉMBER. Featured bridge entry. |
| 2 — Nova Motor House | https://nova-motor-house-showroom.vercel.app/ | Automotive | `/project-media/nova.webp` | Source explicitly calls itself a demo showroom. |
| 3 — Salon | https://salon-omega-ashy.vercel.app/ | Beauty | `/project-media/salon.webp` | Logo/title say Salon; no Light Salon brand found. |
| 4 — Demo 2 | https://cafe-demo-2.netlify.app | Hospitality | `/project-media/cafe-02.webp` | Generic primary name, not replaced with an invented café brand. |
| 5 — Atelier Noir | https://atelier-noir-salon.vercel.app/ | Beauty | `/project-media/atelier-noir.webp` | Its own film skipped before landing capture. |
| 6 — Burger Join | https://burger-join.vercel.app/#menu | Food & Beverage | `/project-media/burger-join.webp` | Logo/title/footer say Join, not Joint. Preview at #top; destination keeps supplied #menu. |
| 7 — Demo 1 | https://cafe-demo-1.netlify.app | Hospitality | `/project-media/cafe-01.webp` | Header/footer/title agree on Demo1; body has legacy Cafen wording. |

Order alternates warm hospitality, dark automotive, bright beauty, dark café, dark grooming, orange food and light café finish. Existing left/right/wide archive compositions and approach → hold → recede timeline retained. Populated archive matter moves to the perimeter earlier so actual media dominates; subtle edge movement continues between projects. Empty publication DOM is no longer rendered when records exist; its animations are guarded to avoid missing-selector console warnings.

Registry extends existing Project with category; all required fields stay structured. Both preview and title are real links, open `_blank` with `noopener noreferrer`, and announce new-tab behaviour. URLs are not displayed. Title/caption sits below media on desktop and mobile, visible without hover; arrow/focus and existing pointer response support interaction.

### Preview strategy and performance

Real browser screenshots, cropped and encoded locally into seven 1250×700 WebPs. No invented art, iframes, autoplay videos or remote image dependency. First preview eager/high priority, remaining previews native lazy; reserved dimensions and responsive Next/Image sizes. Source captures: `docs/screenshots/task-08/sources/`. Seven original WebPs total 475,326 bytes (~464KiB), each 48–86KB. The browser observed only first/next images loaded at mobile arrival and all seven loaded after traversal.

Measured formation tests retained 8,400,000 bytes of high-tier primary attributes and 12 lazy section variants. No new per-particle attribute or population. GPU FPS, physical touch-device performance, LCP and production CWV **not measured**. Visual browser results are observations, not real-GPU benchmarks. Runtime quality defaults were not downgraded.

## Validation and evidence

- `pnpm lint`: pass.
- `pnpm typecheck`: pass.
- Production build: pass using `$env:ASL_BUILD_CPUS='1'; pnpm build` (see final QA addendum for final-build confirmation).
- `node scripts/check-formations.cjs`: pass at 18k/40k/60k; finite deterministic geometry, correspondence, horizontal DNA, depth/camera clearance and buffer reuse.
- `node scripts/check-pointer.cjs`: pass, history/stationary stability, clamp, touch tap, blends and recovery.
- `node scripts/check-contact.cjs`: pass, validation/value retention/missing config/honeypot/receipt/throttle; no external submission.
- Windows host exhausted memory in default static workers and once in TypeScript while many external-site tabs were open. Closed task-owned research tabs; optional single-worker build setting affects only opted-in builds, not application quality. No dependency changes.

Browser was production Next start on port 3002. Direct Capabilities navigation showed only preparing/skip loader accessibility state before ready; ready had one canvas and one H1. Home → Capabilities, Capabilities → Projects, Projects → Capabilities, Capabilities → Contact, Back and Forward exercised. Contact's honest unavailable-delivery notice remains. All seven external title links opened correct separate browser tabs; ASL tab remained on Projects. Desktop pointer drag and native/reverse scrolling exercised. No form enquiry sent.

Desktop/phone evidence and final validation notes: `docs/screenshots/task-08/final/` and `docs/screenshots/task-08/README.md`. Each supplied site and final desktop/mobile entry has a screenshot. Navigation, direct/internal arrival, four formations, pointer frame, connection, bridge and CTA also captured. Still screenshots show states; they do not prove timing or FPS. No recording produced.

SEO: Capabilities title `Capabilities | ASL`, exact brief description, canonical `/capabilities`; Projects has accurate concept-showcase metadata. Shared sitemap/robots/OpenGraph remain. Meaningful content is server HTML; decorative canvas/SVG are hidden from accessibility. Real anchors/buttons, existing skip link and keyboard focus styles retained. Final browser addendum records responsive dimensions and console findings.

## Files changed

New: capability page content, CapabilitiesMotion, CapabilityFallback, capabilities-page CSS, organise shader, route-only capability placement, seven local preview WebPs, reference analysis, Task08 handoff and screenshot evidence.

Modified: Capabilities page; Projects page, ProjectEntry, ProjectsMotion and registry; route-transition destination; scene archive flag; ParticleField, particle/archive shaders and SceneEnvironment; globals import and projects-contact CSS; opt-in build-worker setting in next.config.ts. Existing Task08 user brief remains untracked and unmodified. No lockfile change.

## Stable systems

### DO NOT REBUILD

- Next App Router, React/strict TypeScript, existing server-readable content architecture.
- Root critical-CSS opaque entry gate and canonical mark loader; no branded Home loader.
- One persistent ExperienceCanvas and semantic route transition controller, captured source preset/progress, native Next links/history/focus.
- Task06 deterministic packed particle identities, primary targets, lazy adjacent section buffers, canonical mark API, horizontal DNA and Home opening choreography.
- Custom GLSL renderer, ambient layer, quality tiers, eight-sample pointer history, passive touch input and bounded recovery.
- Task07 Projects archive approach/hold/recede and left/right/wide sequence; typed publication/provenance model.
- Task07 Contact form validation/delivery adapter, form focus and receipt material behaviour, truthful unavailable notice.
- Brand vectors, real DOM wordmark, semantic colours, existing mineral textures, font system, navigation/footer and accessible essentials.
- Task08 capability native-scroll score, approved copy/service data, ordered arrival, four material forms and responsive composition; seven verified concept records and local media.

## Remaining issues and human review

- Approve editorial renaming only if desired: Demo 1, Demo 2, Salon and Burger Join are intentionally the verified names. No fabricated replacements.
- Sources contain their own demo copy/claims and some legacy/template wording. ASL's archive labels all as concepts and does not adopt those claims. Source-site cleanup is a separate task.
- Review the final authored aesthetic on real devices. Some ribbon/shell edges deliberately cross the viewport; do not shrink every formation into a small centred object.
- Reduced-motion, forced no-WebGL/no-JS and actual mobile touch/GPU checks remain unmeasured in this tooling.
- Contact delivery and a real booking URL remain unconfigured from Task07. No false delivery or booking claim added.
- Production origin/social image and verified business information remain the existing project configuration concerns.

## Final QA addendum

Final production build passed: compilation, TypeScript, page collection, all 11 static pages and route summary. Final lint/typecheck and all three relevant checks passed. Fresh Projects → Capabilities → Contact console contains only the inherited THREE.Clock deprecation; no errors or missing-target warnings. Saved to `docs/screenshots/task-08/final/browser-console.json`.

Both pages inspected at 1440×900, 1024×768, 768×1024 and 390×844 without horizontal document overflow. Portrait tablet layer/headline collision was corrected by stacking chapters and increasing their visual slot; phone arrival moved between eyebrow and headline. Final metadata DOM has 1 H1, 33 services, and the exact description. Canonical uses the existing configured default `http://localhost:3000/capabilities`; set the real deployment origin through the existing configuration before publication. Projects has 7 entries, 1 H1 and no obsolete publication state.

Keyboard Tab focused Start a Project with a solid outline and Return navigated to Contact. All seven outbound links opened their exact approved destinations in separate tabs. Design screenshot samples local pointer disruption; automated recovery tests pass. Viewport overrides and task-owned external tabs were cleaned up. See evidence README for file mapping and limits.

Task 08 ends here. Preserve this work for Task 09; do not infer authorization to start it.
