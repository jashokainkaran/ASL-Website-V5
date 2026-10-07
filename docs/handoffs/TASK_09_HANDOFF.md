# Task 09 — Home narrative and art direction

Status: Task 09 implementation, technical validation and practical browser QA complete. Evidence and limitations are recorded below. Stop after Task 09; no Task 10 work was performed. Subjective art direction remains available for the owner's creative review.

## Initial audit

Read the complete on-disk AGENTS.md, Task 08 handoff, brand/story document, Task 08 revision material, and the complete Task 09 brief before editing. The requested `docs/tasks/TASK_09_HOME_NARRATIVE_AND_ART_DIRECTION.md` was absent; the supplied brief actually lives at `docs/TASK_09_HOME_NARRATIVE_AND_ART_DIRECTION.md.md`. This was disclosed before implementation. Existing user changes to AGENTS.md and that untracked brief were preserved.

The existing production architecture had the persistent R3F canvas, packed deterministic formation buffers, canonical GSAP scroll driver, actual vector-mark sampling, local GPU pointer history, technical first-paint cover, inner-entry identity loader, route transition controller, project registry and contact transport. Those were retained. Home lacked the four narrative beats; its permanent navigation and ASL label appeared early. Its material field was gated off until progress .51, leaving the opening flatter than later environments. Home capability material used the older section experiments, and Home had no project preview.

Actual development inspection also found an invalid UTF-8 byte in DevTools.tsx that prevented compilation. The diagnostic multiplication separators were repaired during this task. An older production server on port 3002 served stale HTML against newly rebuilt assets; it was not terminated because it predates this task. Use a fresh preview port when resuming.

Behavioral reference notes and the contact sheet were inspected in `docs/asl_particle_reference_pack/docs/particle-reference/`; the top-level location in the permanent instructions does not exist.

## Reference research

- [OpenAI Astra](https://openai.com/index/gpt-6-astra/): inspected the live interactive field after its initial verification/loading state. Adopted the distinction between bright cores, sparse surrounding material, and luminous overlap in dense regions. Rejected its astronomical spiral, colour treatment and recognizable imagery.
- [Scrolltide](https://www.scrolltide.co/): inspected live DNA Carousel 3D and Scroll 3D Slider previews. The former uses foreground scale, receding panels, occlusion and restrained blur to establish depth; the latter uses scroll velocity and a calm settled centre. Adopted depth ordering and clear rest states. Rejected the image-carousel composition, strong panel deformation and paid/template prompts. No recognizable design or source was copied.
- [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/): checked scrub/pin mechanics; retained the existing single driver instead of adding scroll listeners.
- [Three ShaderMaterial](https://threejs.org/docs/#ShaderMaterial) and [Drei PointMaterial](https://drei.docs.pmnd.rs/shaders/point-material): inspected documentation and the installed Drei implementation. Independently adapted the derivative-based antialias principle in the custom particle fragment shader. Did not install or replace the renderer with PointMaterial.
- Applied the local ui-ux-pro-max skill for readable reveal distances, keyboard access, responsive type and buffer rendering. Its generic low particle-count advice was rejected because the project's measured-tier rules take precedence.

## Creative exploration

Selected three connected improvements: scroll-led emergence into shared currents; construction of a spatial DNA system followed directly by staged ASL arrival; editorial typography in changing negative space. They use the current buffers, uniforms and GSAP ticker. Extra intermediate hero sculptures, a fullscreen bloom pipeline, image-carousels, a new animation package and copied templates were rejected because they weaken the story or add overlapping machinery. Dependencies added/removed: none. Existing Anime.js loader and link/menu microinteraction responsibilities were preserved; no new Anime.js use was necessary for scroll-derived copy.

## Homepage story

`src/content/home-story.ts` defines the score. `homeStoryProgress = sceneProgress / .52`; no separate scroll driver was added. Ranges below are canonical sceneProgress, not a second independent timeline.

| Beat | Exact copy | Entry | Fully readable | Exit starts | Gone |
| --- | --- | --- | --- | --- | --- |
| Emergence | Everything begins without form. | .000 | .014 | .067 | .090 |
| Direction | Direction turns possibility into intention. | .093 | .115 | .175 | .197 |
| Structure | Structure gives an idea something to hold onto. | .204 | .223 | .272 | .292 |
| System | Design gives it shape. / Engineering gives it substance. | .307 | .343 | .403 | .424 |

At rest at the top, existing readiness/emergence progress fades Beat 01 in; early scroll immediately advances the material. Later beats use canonical progress exclusively. Entry is opacity with at most 12px Y travel (3px at lower intensity); exit is a small 4px shift. One idea appears at a time with distinct reading holds. Positions alternate lower-left, upper-left, lower-right against the offset cloud, and below the DNA. On phones, long copy moves into the lower reading zone.

Final H1: **Digital matter, given form.** The existing approved commercial supporting copy and Book a Call / Explore Our Work CTAs remain. Early ASL DIGITAL STUDIO and ONE MATERIAL / INFINITE POSSIBILITY labels were removed from the opening. One quiet **Scroll to shape** prompt remains.

Desktop pin distance is 350vh, adjustable through existing tuning. Phones cap it at 270vh. Including the opening viewport, the desktop introduction occupies roughly 450vh of document travel. Native scrolling is preserved. Skip intro uses the existing smooth jump to the opening's resolved identity/hero endpoint and waits for the hero before focusing `#introduction`. Final production keyboard QA confirmed its visible focus, hero focus after activation, and the primary CTA on the following Tab.

The existing later-page anchor mapper now includes project-preview height, so the statement and closing still derive from the same score. Home capability centres remain .60/.68/.76/.85.

## Particle system

- Render: derivative-antialiased cores, existing soft shoulder and additive overlaps; opening-only brightness ×1.45 and size ×1.12 strengthen near material without altering default inner-route tuning. No bloom pass. Ambient remains its inexpensive dim separate layer.
- Emergence: readiness reveals a tiny seeded subset; scroll expands the population and curves it from resident roam targets into filament targets between .015 and .102. Full filament formation no longer occurs purely from the readiness timer.
- Filaments: existing 7 paths desktop / up to 5 portrait; unequal spans .90–1.45 viewport widths, individual lateral offsets, cross-section variation and separated depth lanes. Same indices continue into the cloud.
- Cloud: existing deterministic density distribution retained; shifted left by .12 viewport width, asymmetric wave perimeter, slightly compressed vertical envelope and increased depth. This makes the right/lower copy zone clearer and retains dense core/sparse fringe logic.
- DNA: two material strands, grouped connections, richer near/far depth, irregular radius and reduced idle life during its hold. See below.
- ASL: actual mark-only vector targets remain unchanged. Target-coordinate distance and character energy now order arrival: dense central structure precedes extremities and dimmer late groups. Existing curved transit collapses to zero offset at the target. No additional hero sculpture is inserted.
- Pointer: existing eight-sample projected GPU field, velocity clamp and natural recovery preserved. Emergence further attenuates force as population grows. Touch listeners remain passive and the opening uses pan-y. Script checks passed; browser DNA displacement and local ASL carve recovered without global collapse (frames 07–08 and 11–12).

No per-particle React components, frame-position state, full CPU position updates, new resident buffers or attribute slots were added. High-tier primary attributes remain 8,400,000 bytes.

## DNA

Formation identity uses the same seed stored in aIdentity.x. First-strand thresholds precede second-strand thresholds; connecting groups are delayed and ordered by target depth. DNA-specific transit delays are stronger than general morph delays, so a strand can resolve before the opposing structure. Connections occupy 20 longitudinal groups rather than an undifferentiated diffuse web. This preserves longitudinal correspondence.

Horizontal axis retained. Default yaw .35 radians (~20°), pitch .12 (~7°), roll .04 (~2°). Z radius rose from .72 to .94 of the formation radius. The desktop span was narrowed from .76 to .68 viewport world width with a small lateral bias after actual desktop inspection showed clipping at the foreground end. Portrait span remains .82; the formation moves above the reading zone. Camera remains the current restrained perspective driver, with reduced-mode travel already lowered. There is no autonomous spinning/orbit.

Cloud→DNA .2548–.3744; readable hold .3744–.4212; direct DNA→ASL .4212–.494. Tiny internal Y/Z life uses `homeLife=.055`, scaled by the hold envelope. Logo readability .494; header gate .507; hero reveal .499–.52. The completed-identity interval precedes navigation.

Final desktop inspection confirmed a large angled two-strand form, grouped bridges and readable copy below it. QA found the near strand touching the System copy; desktop formation Y offset was raised from .45 to .95 (portrait .85 unchanged). Frame 38 records the rebuilt result with clear separation. The tighter span and grouped bridges remain intact.

## Environment

The existing static mineral PNG, semantic colour layers, fine grain, directional lighting and vignette now remain present during Home's opening (.78–1 presence). The hero stays space-black with warm bone matter; burgundy still enters later. Material motion is slow translation derived from the canonical score and reduced at lower intensity. Project preview surfaces feather into the shared environment instead of making an opaque rectangular reset. No animated noise shader, new texture asset or extra postprocessing pass was added.

## Typography

Instrument Sans is the primary/display family, loaded by next/font at 400/500/600. Geist Mono remains for sparse labels. Existing font variable aliases keep established components working while eliminating the primary Geist/Instrument Serif pairing. Home headings and capability prose are explicitly sans and non-italic. Story type scales 30–60px; final hero 60–112px desktop, 42–62px phone. Mono labels stay approximately 9–11px. Font downloads required a network-enabled build once; subsequent builds used the successful cache.

## Header

Before a fresh Home identity reveal, CSS hides the header even before client effects; JS also sets inert and aria-hidden. It becomes available only at canonical progress .507 after entry readiness. Reveal uses 420ms opacity/6px Y with 50ms link stagger (2px travel at lower intensity). The in-memory `siteEntered` latch keeps navigation available after entering the finished site, through reverse scrolling and internal-route returns. Direct inner entry reveals its normal header beneath the unchanged entry gate. No storage-based returning-visitor bypass or arbitrary header timeout was introduced.

## Home sections

- Capabilities: approved four short descriptions and existing editorial chapters retained. Home now echoes the completed Task 08 interwoven paths, suspended architecture, propagating streams and connected modules through its existing lazy buffers. The dedicated Capabilities route's content, driver and geometry controls were preserved. Older formation experiments remain available in development previews.
- Projects: two existing publication-approved ASL Concepts, ÉMBER and Nova Motor House, use their actual registry images and descriptions. Both link to `/projects`; no invented case-study route, client claim, metric or external project URL was added to Home. Layout is two staggered editorial images on desktop, one column on phones.
- Statement: calm textured burgundy, **Most websites are assembled. Ours are shaped.** Typography remains dominant.
- Closing: **Let’s build something that holds its shape.** Existing offset mark, quiet perimeter material and Book a Call `/contact` retained. No full DNA replay.

## Responsive, reduced motion and accessibility

Tablet rules retain a split hero with wrapping actions; phone rules use shorter introduction travel, raised material and a lower copy zone, single-column hero and project previews. Formations passed desktop and two portrait invariant checks. Native Edge device emulation at 390px and 820px widths verified story, horizontal DNA and final hero without observed clipping/collisions. Available emulated viewport height was about 611px; the toolbar's 844px field did not establish an 844px rendered viewport. Frames 23–27 document the actual captures.

Reduced intensity retains the story and identities with less camera/pointer/idle/curve/stretch motion. A development-only lowerIntensity checkbox permits visual inspection without changing the OS preference. It initializes from the actual media state, rather than overriding it on mount. DevTools prefers-reduced-motion emulation verified continuing DNA, copy and Skip intro/hero behavior; the development readout initialized to lower intensity. OS settings were not changed. Final production inspection confirmed the browser was back at No emulation.

No-WebGL now keeps the Home scroll driver and narrative instead of skipping directly to the final hero. The existing canonical SVG identity fades in with the identity interval; links/header still unlock at the resolved score. QA found the inherited Home fallback-emerge animation overriding the intended identity opacity. A Home-only static-mark rule now removes that inherited animation, while child breathing and inner-loader behavior remain. Rechecked fallback: Beat 01 has no early mark/header; Skip intro reveals the canonical SVG hero and navigation, and Projects navigation works (frames 32–33). This uses the existing WebGL-loss event rather than physical GPU disablement. The fallback remains simpler than GPU formations.

The canvas remains decorative/aria-hidden; essential copy, one H1, navigation and actions remain DOM. Narrative beats outside their reading window are aria-hidden. Header is inert while hidden. Skip link, focus-visible styles and real links are preserved. No-JS overrides restore the finished hero and navigation and hide unusable story/skip UI. Keyboard focus was visually verified (frames 34–36). No-JS behavior was reviewed in code rather than separately emulated.

Home SEO title: **ASL — Websites & Digital Products**. Description: **ASL designs, develops and launches distinctive websites and digital products, bringing design, engineering and technology into one considered experience.** Matching Home Open Graph metadata is provided. Sitemap/robots and inner metadata systems were retained.

## Development controls

Current beat, normalised story progress and header latch are included in the measurements readout. Home story timing folders expose each beat's enter/hold/exit/end values. Controls include openingScreens, Skip intro, FINAL HERO, ASL-before-header, internal DNA life, header gate/duration, header reset, lower intensity and no-WebGL. Existing particle, cloud, filament, DNA orientation/depth, capability and pointer controls remain development-only.

Browser QA found duplicate Leva leaf keys (`curvature`, `depth`) across folders. Design's control key is now `pathCurvature`, and Deployment's is `propagationDepth`; both retain their original scene-property mappings. Existing particle/development keys remain intact.

## Validation and evidence

Passed:

- pnpm lint.
- pnpm typecheck.
- node scripts/check-home-story.cjs: sequential reading holds and identity-before-navigation ordering.
- node scripts/check-formations.cjs: deterministic/finite 18k/40k/60k formations, canonical logo reuse, 16-attribute budget, all four capability systems, portrait camera clearance, horizontal DNA proportions/depth, 12 lazy section formations and 8.4 MB primary attribute budget.
- node scripts/check-pointer.cjs: local history, stationary stability, velocity clamp, touch-tap logic, blending and recovery windows.
- node scripts/check-contact.cjs: validation, retained values, missing configuration, honeypot, explicit receipt and throttling. No external message sent.
- Server-rendered Home content: one H1, no placeholder/lorem/dummy/sample/temporary/TODO words, and `/projects`/`/contact` targets; passed.
- Production build with ASL_BUILD_CPUS=1. Next 16.3.8 generated all existing routes successfully.

The standalone Three CommonJS test harness emits its existing deprecation warning; checks pass.

The initial in-app browser crashed and recovery attempts failed; C: was initially full. After disk space was restored (about 10.9 GB free), native Edge provided a working browser surface through the Computer Use skill. The in-app attachment still failed; no quality default was changed to hide that environment problem.

Completed browser matrix in native Edge against production on port 3004, with development-only fallback controls on port 3005:

- Fresh Home and hard reload: technical first-paint cover, then textured emergence/story with hidden navigation and no early identity. Browser-restored scroll position after a reload correctly resolves its corresponding canonical beat.
- Slow incremental, fast/aggressive and reverse native scroll: four copy windows, shared currents/cloud, staged two-strand DNA, direct ASL transit, settled identity before header, and usable final hero. Returning through the opening retains the already-entered site's header intentionally.
- Pointer: local DNA deformation and ASL carve, followed by recovery; neither resets the whole population.
- All four Home capability echoes, actual Concept project previews, textured burgundy statement, quiet closing CTA and continuity were visually inspected.
- Home→Projects/Capabilities/Contact and browser Back/Forward: content resolves, navigation persists, and the full direct-entry identity loader does not replay on each client navigation. Contact's honest missing-delivery configuration notice remains; no form submission was sent.
- Phone 390px and tablet 820px widths, at the actually available approximately 611px emulated height: story/DNA/hero fit and actions remain usable. These are emulated widths, not physical-device touch testing.
- Reduced-motion media emulation: animation and storytelling continue at lower intensity. Practical WebGL-loss fallback: story remains, no premature SVG mark, Skip intro reveals hero/header and Projects remains usable.
- Keyboard Skip intro, revealed-hero focus and next-Tab CTA focus verified visually. No-JS fallback reviewed in source.
- Final rebuilt production console: no application errors observed; existing THREE.Clock deprecation and Edge lazy-image intervention notice remain. Frame 37 records this.

After the three QA fixes, ESLint, Next type generation + TypeScript noEmit, production build, formation invariants, Home story score and git diff --check passed again. This recovery used the normal installed Node runtime to execute the package's exact CLI scripts because the bundled pnpm/runtime hit Windows realpath EPERM. The repository remains pnpm with its existing committed lockfile; no npm lockfile or dependency changes were introduced. Turbopack development encountered a Google-font download timeout; development QA used Next's webpack mode with system CA support. Final production compilation succeeded and generated all 11 routes.

Evidence is indexed in `docs/screenshots/task09/README.md`, covering the 26 requested categories plus route, fallback, console and keyboard checks. Native captures were encoded to PNG, with two inspection crops. Screenshots record observed states rather than frame rate or elapsed animation timing. No motion recording was produced.

## Performance

Defaults preserved: high 60,000 primary / 1,800 ambient; medium 40,000 / 1,200; low 18,000 / 650; existing DPR caps. Deterministic formation allocation and lazy section reuse unchanged. No dependency/bloom/extra canvas cost. Selected project images use existing Next Image optimization and responsive sizes. Frame rate on a representative real GPU has not been measured. Browser crashes/timeouts are observed; their precise cause is not established. Do not report a hardware performance conclusion from them.

## Changed files

`src/app/layout.tsx`, `src/app/page.tsx`, `src/components/Header.tsx`, `src/components/Opening.tsx`, `src/components/HomeSections.tsx`, `src/content/home-story.ts`, `src/lib/scene-store.ts`, `src/particles/engine/DevTools.tsx`, `src/particles/engine/ParticleField.tsx`, `src/particles/engine/SceneEnvironment.tsx`, `src/particles/engine/scroll.ts`, `src/particles/formations/filaments.ts`, `src/particles/formations/cloud.ts`, `src/particles/formations/helix.ts`, `src/particles/shaders/particle.ts`, `src/styles/globals.css`, `src/styles/tokens.css`, `src/styles/home-narrative.css`, `scripts/check-home-story.cjs`, this handoff.

## DO NOT REBUILD

Preserve the Task 08 root first-paint gate/technical cover, 2-second inner-entry identity behavior, SVG fallback loader, existing Anime.js responsibilities, persistent app canvas, route controller, canonical mark paths/sampler, packed buffer architecture, local pointer field, dedicated Capabilities route and its four physical systems, publication-approved project archive, contact validation/server transport, SEO infrastructure and committed dependency lockfile. Do not add this task's bounded creative permissions to AGENTS.md. No deployment/push was performed.

## Remaining limits / creative review

1. Real touch hardware, representative GPU FPS, GPU memory and Core Web Vitals were not measured. Native scrolling and emulated mobile layouts were observed; they do not establish hardware performance.
2. Fallback QA dispatched the existing WebGL-loss event; physical GPU disablement and a separate no-JS browser session were not tested.
3. The restrained opening, irregular density, grouped DNA bridges and section art direction are ready for owner review. Screenshots cannot prove every motion cadence or subjective preference.
4. Existing Three.js deprecation and browser lazy-image notices remain. No application console errors were observed in final production.
5. Task 09 ends here. Preserve completed Task 06–08 systems and do not begin Task 10 without a new brief. No push or deployment was performed.

## Owner-requested particle and shape refinement — 7 October 2026

Scope: the owner asked for an ASL mark that visibly consists of particles and for coherent, recognisable formations after finding the existing shapes too sketch-like. This is a refinement of Task 09, not Task 10. Read the complete current AGENTS.md and brand/story direction and inspected the actual browser implementation and particle references before editing. Assumed the feedback covered both the opening and capability forms after offering an optional clarification.

Actual audit: the mark's evenly filled stroke and dense additive overlap made it read as a stencil. The helix cross-section used offsets in a flat XY plane. Capability forms were thin, loosely related paths; Deployment's shader translated its target rather than following its conduit. These were verified in the in-app browser.

Changes:
- Retained the exact canonical mark paths and arc-length particle correspondence. Sampled a dense Gaussian centre with a sparse feathered fringe and shallow depth. Home identity brightness and size now expose individual grains and negative space; the complete primary population remains allocated and participates in the transition. Approximately 9,000 principal grains at high quality, plus dim residual matter. The vector UI identity is unchanged.
- Added a deterministic circular tube sampler in each path's normal plane. The horizontal double helix and opposing bridges now have round cross-sections; reduced radius wobble preserves its double-helix silhouette.
- Design is an over/under woven saddle with spatial curvature and tilt. Development is a layered braced cantilever with chords, bays, diagonals and concentrated joints. Deployment is an ordered fan of curved channels, with shader travel along the same CPU target paths and softened endpoint wrapping. Products are four connected stacks of inclined plates with perimeter connections and a shared quiet rhythm.
- Strengthened near/far brightness separation and limited bright overlapping grains in formed states (approximately 24,000 desktop / 8,000 portrait, tier capped). This is art-directed opacity, not a reduction of quality-tier particle counts. Logo uses its own grain envelope. All morphs still use canonical sceneProgress; no per-frame CPU population update, added buffer attributes or second canvas.
- Raised portrait capability material after the phone check exposed overlap with the headings. CPU and shader stream placement agree. Stream-count tuning uses the actual indexed lane rather than an assumed seven-lane identity.

External research and influence:
- [Scrolltide DNA Carousel](https://www.scrolltide.co/#c-dna-carousel): inspected the live opposing strands and near/far treatment. Retained the lesson of coherent depth; independently implemented ASL's deterministic point geometry. No prompt/template purchased or copied.
- [Scrolltide Mesh Flow](https://www.scrolltide.co/#c-mesh-flow): inspected the live continuous Gaussian deformation of a grid. Retained coherent curvature as a design principle; the ASL pointer field remains local GLSL. No Canvas2D renderer was adopted.
- [Three.js TubeGeometry](https://threejs.org/docs/pages/TubeGeometry.html) and its [source](https://github.com/mrdoob/three.js/blob/master/src/geometries/TubeGeometry.js): studied normal/binormal cross-sections along a 3D curve. Independently implemented a small deterministic volume sampler instead of adding rendered tube meshes. Also reviewed [CatmullRomCurve3](https://threejs.org/docs/pages/CatmullRomCurve3.html) and [MeshSurfaceSampler](https://threejs.org/docs/pages/MeshSurfaceSampler.html); retained analytic indexed paths to preserve correspondence instead of randomly sampling a mesh.
- [React Bits Particles source](https://github.com/DavidHDev/react-bits/blob/main/src/content/Backgrounds/Particles/Particles.jsx): studied individual point size/opacity and depth. Its OGL renderer, random spherical distribution and whole-field pointer movement were unsuitable for ASL's persistent canvas and formation architecture. No component was installed/copied; ASL-specific grain envelopes use the existing packed attributes and shader.
- Dependencies added or removed: none. Existing pnpm lockfile and all library versions preserved. GSAP/Anime.js ownership, direct-entry loader logic, navigation, Projects, contact transport and business copy preserved.

Refinement files: `src/particles/logo/path.ts`, `src/particles/formations/tube.ts`, `src/particles/formations/helix.ts`, `src/particles/formations/capability-systems.ts`, `src/particles/shaders/capability.ts`, `src/particles/shaders/particle.ts`, `src/particles/engine/ParticleField.tsx`.

Refinement validation: final ESLint passed; Next type generation and TypeScript noEmit passed, and the final production build repeated TypeScript validation successfully and generated all 11 routes. Deterministic formations passed at 18,000, 40,000 and 60,000 points, including mobile, camera clearance, module extrema and horizontal DNA depth. Home story score and git diff --check passed. Tested the actual final production in the in-app browser at verified 1440 × 900 and 390 × 844 viewports: granular identity, DNA, all four Home forms, reverse scroll, all dedicated Capabilities chapter links, Home-to-Capabilities client navigation and direct route reload. Practical lower-intensity and WebGL-loss fallback checked via existing development controls. No application or shader console errors observed in final production; existing THREE.Clock deprecation remains. Evidence is indexed in `docs/screenshots/task09-refinement/README.md`.

Limitations: these are emulated viewport checks, not real touch-device tests. Representative GPU FPS, GPU memory, Core Web Vitals and precise animation timings remain unmeasured. Screenshots and observed browser states do not establish subjective owner approval. Current art direction is ready for review. No additional dependency, push or deployment. Production preview stays on port 3004. Stop after this Task 09 refinement.

## Owner-requested homepage visibility and composition correction — 7 October 2026

The owner identified visible navigation and a lingering scroll instruction during the opening, plus repeated left-side numbering. Verified these issues in the actual in-app browser: the previously latched header remained visible on reverse scroll; the cue was coupled to the final hero reveal rather than the start of scrolling; mobile overrides moved all four capability numbers and narrative compositions to the same left edge. Prior QA missed the consequence of these states.

Corrections:
- Home navigation visibility now follows canonical sceneProgress and the existing identity threshold in both directions. It hides again when revisiting the opening, including client return from an inner route. Hidden navigation is inert and aria-hidden. The first arrival still receives the GSAP reveal; later reveals restore it immediately rather than replaying the complete animation. This supersedes earlier handoff statements that the Home header remains latched during reverse scroll, following the owner's explicit feedback. Inner-route navigation remains available.
- The single Scroll to shape cue fades over the first .025 of canonical progress, before the narrative changes, independently of the hero reveal. Skip intro remains available until the identity handoff and still focuses the hero after arriving.
- Direction occupies the upper right on desktop and mobile; Structure occupies the lower right; Emergence and System retain left anchors. Mobile capability numbers now alternate left/right/left/right, and Development/Products copy is inset toward the right. Desktop capability compositions and particle geometry are preserved.
- Fixed the Home chapter-number font family and restored desktop 01/03 sizes. Their font shorthand depended on a root-level alias to the Next font variable defined only on body, so it was unresolved where computed and left these numbers at the inherited body size. Home now rebinds its semantic font aliases locally where the intended Instrument Sans variable exists. All Home numbers use the current sans-serif token; existing distinct chapter scales remain. Inner-route typography is unchanged.

Files: src/components/Header.tsx, src/components/Opening.tsx, src/styles/home-narrative.css. No dependencies or new scroll drivers. Completed Task 06–08 systems and the preceding particle refinement are preserved.

Validation: ESLint, Next route type generation, TypeScript noEmit, home narrative timing check, git diff --check and final production build passed. In-app browser checks at 1440 × 900 and 390 × 844 covered fresh entry, all narrative beats, cue disappearance, Skip intro and hero focus, header appearance at the final handoff, reverse-scroll hiding, all four mobile capability chapters, Home → Contact → Home navigation, and final production reload. Mobile has no horizontal overflow. Console inspection found no application errors; the existing THREE.Clock deprecation remains. Production preview remains at http://localhost:3004/. Screenshots are indexed in docs/screenshots/task09-home-correction/README.md. Viewport emulation does not establish real touch-device performance. No push, deployment or Task 10 work.

## Owner-requested mobile section alternation — 7 October 2026

The owner asked for the complete mobile text/material compositions to alternate, after clarification that the earlier correction only alternated numbers and inset the copy. That clarification and this change supersede the earlier mobile-composition claim.

Home now uses a mobile editorial grid with genuine opposed columns: Design/Deployment copy left and matter right; Development/Products copy right and matter left. Narrative and business wording are unchanged. Headings remain readable; Products uses two lines within its right column. Numbers occupy a separate row so they cannot collide with chapter labels. Capability links retain at least 44px height. The grid explicitly fills its content width, avoiding inherited flex justification shrinking the grid on compact landscape viewports.

The existing formation generator accepts an optional Home mobile layout flag. It offsets the same formations into the opposing column, narrows their horizontal span, lowers their placement beside the body copy, and reduces perspective depth to keep their core visible. Shorter viewports lower the matter further. The flag uses the same 700px window breakpoint as CSS, including scrollbar widths, and is included in the lazy-buffer key. Deployment's shader path uses the same placement and scale as its CPU target. One scalar uniform was added; no buffers, renderer, particle population or scroll driver was added. Desktop and dedicated Capabilities retain the original placement through the default generator argument. Route transitions carry the outgoing layout until the existing transition finishes.

Files: src/styles/home-narrative.css, src/particles/formations/capability-systems.ts, src/particles/shaders/capability.ts, src/particles/engine/ParticleField.tsx, scripts/check-formations.cjs. No dependencies or additional external patterns. Existing researched forms and GSAP/GLSL ownership are preserved.

Validation: lint, route type generation/TypeScript noEmit, final production build and git diff --check passed. Formation tests passed across the existing quality tiers; the added invariant checks deterministic mobile regeneration, finite positions, camera clearance and at least 90% of each material core in the intended side beyond the text boundary, in portrait and compact landscape world dimensions. Production in-app browser captures cover all four mobile chapters at 360 × 640, 390 × 844, 430 × 932 and 671 × 654. No horizontal overflow; Products heading fits its column. Desktop A/B compositions were inspected at 1440 × 900. Home → Capabilities#cluster and return to Home were checked, with the dedicated layout preserved and navigation hidden on returning to the opening. No application/shader console errors observed. Evidence: docs/screenshots/task09-mobile-sides/README.md. These are viewport checks, not physical touch-device or representative GPU performance measurements. Preview stays on port 3004; no push, deployment or Task 10 work.
