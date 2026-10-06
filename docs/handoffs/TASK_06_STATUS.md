# Task 06 status / handoff

Implemented 2026-10-05. Extend this baseline for Task 07; do not rebuild the renderer or full entry system. Work remains the existing honest placeholder. No packages or lockfile changes; no remote push.

## Audit and entry root cause

The historical flash came from hiding the loader in server HTML and enabling it in a hydration effect, combined with absent initial DOM gating and a timeout unrelated to readiness. It was not principally a z-index defect. Task 05 had already corrected those defects: the actual baseline passed 158 sampled hard-refresh frames with zero pending frames exposing interface content. Task 06 preserved that solution rather than duplicating it.

Root layout owns one opaque server-rendered ASLLoader, ExperienceShell, RouteTransitionController and #site-interface. Critical document-inline CSS now independently establishes the initial cover and hidden interface before the full stylesheet. The cover is a root sibling at z=50. Canvas is z=0; interface is an isolated z=1 stacking context, so nested navigation/fixed content cannot escape above the cover. No layout removal or canvas remount occurs. Stable scrollbar gutter remains.

Hydration marks the interface inert. Fonts and the first particle frame (or confirmed fallback) prepare underneath. The gate opens only when both readiness and minimum choreography are satisfied. At 8 seconds without renderer readiness it degrades to fallback; at 10 seconds it fails open if fonts stall. These are failure bounds, not normal pacing. No-JS escapes visibility, opacity, overflow AND pointer-events; the previously missing pointer-events restoration was found by an actual CTA click test and fixed.

## Direct entry branches and timing

Home: black → fine tonal texture → 32 deterministic dim specks → one broad restrained disturbance → 500ms opacity withdrawal. No mark is visible in this branch. The scene underneath has ambient depth and zero primary emergence. Prepared choreography: approximately 1100ms plus 500ms exit (1.6s from controller start).

Inner routes: same root cover, with a compact 76px supplied ASL mark resolved by staggered vector path drawing and a short hold. No separate renderer or identity system. Approximately 1100ms preparation plus 400ms exit (1.5s). This is a vector identity signature rather than a second particle engine.

Reduced entry: no sweeping disturbance, no speck travel and no complex identity assembly; approximately 400ms plus 300ms controlled fade. Inner mark receives a simple opacity reveal. Keyboard Skip introduction waits for readiness, uses a short exit and then focuses Skip to content. Pending interface remains inert.

Cold document duration includes hydration, fonts and WebGL preparation. One production fresh-context sample reached ready at 3.084s after navigation; the first sampled covered document frame was at .363s. This is not a claim of a 1.6s cold-network total. Normal choreography remains bounded; slower assets hold the quiet state. There is no fake progress UI.

## Separate Home emergence

src/lib/home-intro.ts owns a 1.4s GSAP uniform tween beginning only after the cover is hidden. homeIntro controls spatially staggered births, depth approach, point-size variation, weak currents and progressive organisation into filaments in GLSL; it is not a global particle opacity fade. Birth thresholds combine seed and longitudinal position, so central partial paths resolve before outer material.

ScrollTrigger stays in control throughout. Any meaningful scroll advances canonical progress and resolves emergence once in .22s. Repeated scroll updates do not restart the resolver. Tested immediate wheel input advanced scroll about 350px and sceneProgress about .05, with homeIntro=1 after 450ms. Internal navigation cancels any active intro tween and retains established matter. Reduced emergence is lower intensity with a shorter .9s duration.

## Canonical Home story

One sceneProgress driver is retained for the whole homepage. heroProgress is its derived opening range: sceneProgress / .52 (clamped for interpretation outside the opening), not another scroll source.

| heroProgress | Material |
|---|---|
| 0–.20 | Filaments hold |
| .20–.42 | Filaments compress into cloud |
| .42–.49 | Cloud hold |
| .49–.72 | Cloud organises into spatial DNA |
| .72–.81 | DNA hold |
| .81–.95 | DNA redirects directly into ASL |
| .95–1 | Calm ASL settlement and DOM reveal |

The same deterministic primary population traverses these targets through delayed curved transit. Horizontal DNA retains Task 05's spatial rotation and tunable yaw/pitch/roll (defaults about 20°/7°/2°), length, radius, turns and depth. No surface, sculpture, separate unravelling-to-filaments beat or other extra object occurs in the hero. DNA opens through the existing curved transit directly toward mark regions. The supplied mark sampler is unchanged and remains replaceable/provisional under current creative direction.

## Sections and material

| Chapter | Live default | Additional development preview |
|---|---|---|
| Design | Folded membrane, text left | Lattice / folded surface |
| Development | Interlocking curved layers, text right | Strata / spatial frame |
| Deployment | Broad flowing ribbons, text left | Stream / wavefront |
| Digital Products | Open sculptural shell, text right | Cluster / cohesive shell |

The surface/sculpture modules are preserved, placed in section compositions and generated only for selected previews. New frame/wave generators are small deterministic modules within section-formations.ts. Production chapters remain one dominant idea each. Task 05's mineral/grain/light/shadow system, burgundy contamination, GSAP editorial score, numbering/rules, residual matter, content, CTA URLs and final conversion are retained. The statement remains calm and the final CTA remains the existing quieter identity echo.

Two replaceable section attributes hold adjacent targets. Regeneration occurs only when crossing section boundaries, changing previews or rebuilding geometry, not every frame. One extra reserved route attribute is populated lazily for structural route targeting. Surface and shell are no longer resident hero target attributes. Final convergence still shares the main logo buffer. Geometries and materials retain existing disposal.

## Route foundation

src/lib/route-transition.ts exposes transitionTo('home'|'work'|'project'|'capabilities'|'about'|'contact') and named semantic presets: transform/explore/focus/organise/connect/attract. These verbs are internal, not product copy. Route logic is independent of Header/menus.

A root controller observes valid same-origin navigation requests without preventing Next links, modified clicks, downloads or external links. It snapshots current progress before route DOM changes; usePathname also handles history/programmatic route changes. Destination progress is assigned once. A GSAP routeProgress tween controls the persistent shader transition and restrained destination DOM settlement. Source progress is sampled independently during the transition, so removing Opening does not destroy its visual source.

Home→Work prototype: current material separates and extends along Z, a small camera movement suggests passage, and matter settles to an edge field while the placeholder destination appears. Normal duration about 1.05s; reduced about .45s with depth travel removed. No black veil or intervening identity loader appears. Canvas identity was explicitly unchanged across Home→Work, Back and Forward in development and production.

Capabilities has a structural target; About a quiet separated field; Contact a concentrated identity/conversion target; Project an edge/focus target. These are foundations, not fully art-directed future pages. No Work archive or invented projects were built. Unpublished project slugs continue to return 404.

Destination main receives focus after settlement; server-rendered main elements have tabindex=-1 so the skip link also works on initial entry and without JS. Real links, content, metadata and keyboard styles remain. No-WebGL uses the existing simplified SVG/content fallback, with entry and route DOM choreography preserved. It does not reproduce every WebGL formation.

## Development controls

Hero states: SCROLL / EMERGENCE / FILAMENTS / CLOUD / DNA / ASL. Section variants are in a separate preview folder. Entry debug/progress/bypass, homeIntro, derived heroProgress, route preset/progress, section strength and existing DNA/filament/cloud/ambient controls are available only in development.

Console APIs: window.__ASL.replayEntry('home'|'inner'), startHomeIntro(), transitionTo(preset), scene, tuning and rebuild(). The root loader handles development replay events; production neither mounts DevTools nor exposes __ASL. Entry debug holds the gate intentionally; use the console API or Skip introduction to leave it because normal dev panels are hidden while pending.

## Verification and evidence

- pnpm lint, pnpm typecheck, pnpm build and node scripts/check-formations.cjs passed (see final check record in TASK_06_REPORT.md).
- CPU checks: 18k/40k/60k finite targets, deterministic identity, buffer sharing, attribute budget, spatial DNA, preserved surface/shell and all eight lazy section variants at desktop/portrait sizes.
- Browser: fresh entry, hard refresh, direct Work entry, immediate scroll, forward/reverse hero scroll, real chapter scrolling, Home→Work, Back/Forward, semantic preset navigation, entry replays, skip focus, mobile, reduced motion, no-WebGL and no-JS CTA clicks.
- Production route sweep: /, /work, /capabilities, /about, /contact and /lab/mutable-matter 200; unpublished work slug 404. No horizontal overflow or observed console/page errors.
- Production first HTML explicitly contains pending state, cover and critical content gate. Sampled pending frames never exposed interface content; first ready dev frame had homeIntro=0.
- 1440×900 desktop and 390×844 touch emulation inspected. Mobile uses 18k+650 and five filaments; portrait DNA and mark/DOM composition remain legible.
- Screenshots and sampling caveats: ../screenshots/task-06/README.md. A screenshot is the first available sampled frame, not a pixel-perfect recording of browser rasterisation. Video could not be captured because the Playwright ffmpeg binary is absent; it was not installed for this task.

## Performance and limitations

Measured array bytes: 8,400,000 at 60k main particles versus Task 05's 10,560,000, about 20.5% less resident primary attribute storage. This excludes ambient/material/driver overhead and temporary CPU regeneration allocations. Expected GPU attribute savings follow the array layout; driver memory was not independently measured. No tier downgrade or GPGPU introduced.

One short steady desktop DNA sample: 60fps, 60k+1800, DPR≈1, ANGLE Intel Iris Xe Direct3D11. This is not a sustained multi-device benchmark. Physical phones, Safari, high-DPR thermals, throttled networks and long-session GPU behaviour remain unmeasured.

Creative review: the desktop DNA can approach the frame edge; the cloud is deliberately broad; subtle material texture depends on display black levels. The remaining route presets require page-specific art direction. Rapid successive navigation restarts from committed semantic scene progress rather than a captured interpolated particle state, so interruptions may need future continuity refinement. Catastrophic failure before hydration starts can leave the cover in place when JS is enabled; no-JS has an explicit escape. No comprehensive accessibility certification is claimed.

## External influence / next task

No external component was copied or installed. Existing GSAP, Anime.js, Three/R3F, Leva and stats-gl were extended. UI/UX Pro Max's local keyboard-navigation/focus guidance informed QA; behaviour was independently implemented within ASL's architecture. Behavioural particle references were found in docs/asl_particle_reference_pack/docs/particle-reference (the shorter specified directory was absent); contact sheet and notes were inspected, without copying artwork.

Task 07 should build the Work spatial archive on this persistent edge/depth transition, then refine Explore/Focus and route interruption continuity around real project data. Retain the one document-entry gate, mark API and lazy section buffers. Do not replay a loader inside navigation.


## Task 06 revision — material, pointer physics and production copy (2026-10-06)

This refinement supersedes older rendering, pointer and homepage-copy descriptions. Original Task 06 was not rerun. Persistent canvas, root document-entry gate, route controller, canonical GSAP progress, lazy section targets, horizontal spatial DNA, mark sampling, mineral/pigment textures and section architecture remain. Hero contains emergence → filaments → cloud → DNA → ASL → calm copy; capability targets enter only after sceneProgress .52. No new dependencies, bloom pass, GPGPU pipeline or per-particle React state were introduced. No Task 07 work was begun.

### Material rendering

The requested Astra quality reference informed readable cores and cohesive additive density only. The official launch page was consulted, but no artwork, target distribution, lighting design, shader source, assets or brand identity was copied. The implementation is independent ASL GLSL, warm bone on space black and existing burgundy surfaces.

Primary sprites now use an antialiased central core and restrained low-energy exponential shoulder. Defaults: pointSize 2.4, coreSize .48, falloffSize .72, brightness 1.05, opacity .76, densityBrightnessResponse 1. Mostly small points, fewer medium and much rarer large points replace the earlier dust/soft-focus balance. Reduced oversized near-camera sprites and focal blur keep cores defined. Dense overlap naturally increases luminosity through existing additive blending. The density control scales core energy; it does NOT calculate a neighbourhood density field. Ambient shader/counts remain smaller, dimmer and subordinate. No global bloom was added. Burgundy remains a surface environment, never the primary particle colour.

### Camera-aware local physics

PointerInput holds eight bounded input samples and velocities. Passive pointer handlers perform constant-cost input work; there is no CPU population update. The previous independent 1,536-point PointerTrail was removed because local matter displacement now supplies the physical response.

Each vertex evaluates the current formation plus idle motion, projects that undeformed location into CSS viewport pixels, compares it with pointer samples, then adds bounded displacement in camera-right/up coordinates. The pixel-to-view-unit conversion uses projection scale and the particle's own view depth. Visually overlapping points are therefore affected across different Z positions. A restrained seeded depth component adds local surface separation. All deterministic formation targets remain untouched.

Soft radial influence uses smoothstep followed by adjustable falloff. Closest material moves most, the influence edge is continuous, mass varies the response, and normalized sample accumulation prevents stationary force buildup. Clamped velocity gives fast movement a modest directional increase, never an explosion. Pointerout releases only when leaving the window, rather than on every DOM child crossing. Blur/cancel release cleanly; entry and route transitions clear inputs.

Recovery decays input influence with the critically damped envelope (1 + age * rate) * exp(-age * rate). This is an analytic shader influence decay rather than a simulation of particle momentum. Default 95% influence recovery is approximately 395–558ms across active states. A similarly damped onset avoids abrupt activation. No spring overshoot or target mutation occurs. Touch has 1.2× radius and .65× strength, retains a short-tap impulse between render frames, and never prevents native vertical scrolling. Reduced motion retains interaction with lower strength/depth.

| State | Radius multiplier | Strength | Depth | Recovery-rate multiplier | Behaviour |
|---|---:|---:|---:|---:|---|
| Filaments | .85 | .42 | .16 | 1.10 | Gentle local separation/bending |
| Cloud | 1 | 1 | .30 | .85 | Strongest small cavity |
| DNA | .78 | .70 | .22 | 1.05 | Local strand separation |
| ASL | .78 | 1 | .12 | 1 | Local carve and exact reconstruction |
| Membrane | .90 | .65 | .32 | .95 | Local depression/separation |
| Layers | .85 | .78 | .26 | 1 | Nearby layers pushed apart |
| Ribbons | .85 | .50 | .14 | 1.15 | Gentle flow division |
| Open shell | .88 | .80 | .34 | .95 | Local opening/erosion |

Profiles blend from the existing canonical sceneProgress; no additional scroll source exists. Global defaults: enabled, 90 CSS-pixel radius, .85 strength, 1.15 falloff, .60 depth, recovery rate 10 and .25 velocity influence. Development-only Leva folders expose the five rendering controls, seven pointer controls and each state's four multipliers. Keys are unique to avoid folder-name collisions. Production does not expose __ASL or mount these controls.

### Working production content

The supplied hero support, four capability descriptions and optional approved descriptors are now stored as working production content. Headline remains “Digital matter, given form.” Statement remains “Most websites are assembled. Ours are shaped.” Final CTA remains “Let's build something that holds its shape.” Book a Call links to /contact and Explore Our Work to /work. Metadata uses the approved support. The unapproved example contact email is omitted; no clients, figures, outcomes, response times or proof were invented. Existing honest placeholder inner pages remain. Paragraph sizing was adjusted for the longer copy on desktop and mobile.

### Revision validation and evidence

- pnpm lint, pnpm typecheck and pnpm build passed. The first sandbox build could not fetch existing Google Fonts; the network-authorized retry and final build succeeded.
- node scripts/check-formations.cjs passed all quality tiers and current section variants. node scripts/check-pointer.cjs passed bounded history, stationary force, speed clamp, expiry/clear, short touch impulse, profile continuity and default recovery checks.
- Actual browser desktop 1440×900: filaments, cloud, DNA and ASL before/during/after pointer; all four capability forms and local dispersion; textured burgundy; production copy. Native touch emulation 390×844 with DPR 1.25: all four forms/copy, touch, native vertical pan and no horizontal overflow. Reduced-motion browser still renders animated DNA and accepts pointer input.
- With idle noise/twinkle/ambient movement temporarily disabled for image isolation, the four hero states returned to the undisturbed screenshot after 700ms. recovery-metrics.json records mean pixel differences; these are image comparisons, not measurements of simulated particle momentum. Ordinary idle life was restored outside this test.
- Production hard refresh: 24 sampled frames, 21 pending, zero exposed interface/navigation frames and zero visible Home identity marks. First covered sample .127s; first sampled ready frame 7.599s in a heavily instrumented run. This validates gating, not a cold-load speed promise. A separate development baseline sampled 552 frames with no pending content exposure and first ready about 2.25s. Home cover → near-empty emergence → filaments was captured. Canvas cannot paint above the opaque root cover. Home→Work retained the same canvas DOM node, entry stayed ready and cover stayed display:none. Loader architecture needed no correction.
- Latest console: zero errors; the inherited THREE.Clock deprecation warning remains. Production __ASL absent. Existing no-WebGL/no-JS architecture was preserved; the broader original Task 06 route/fallback sweep was not repeated in full for this refinement.
- Evidence index: ../screenshots/task-06-revision/README.md. Screenshot sequences replace video because the available Playwright ffmpeg binary is absent.

### Performance and remaining weaknesses

Short desktop RAF measurements at 60k primary + 1,800 ambient, DPR about 1: baseline DNA idle 60.27fps / pointer 60.17fps; refined idle 60.32fps / pointer 60.22fps (2–2.5s steady samples). No material regression was observed on this machine. Screenshot activity caused temporary lower rates and is not used to change quality tiers. These are short browser observations, not GPU timing or sustained device benchmarks. Physical phones, Safari, high-DPR thermals and long-session performance remain unmeasured.

Primary attribute storage remains 8.4MB at 60k; no per-particle attributes were added. Pointer uniforms are fixed-size; main shader performs eight screen-distance evaluations. The separate old cursor trail draw was removed. Existing particles/tier budgets and ambient layer remain.

Creative limits: dense ASL edges can approach solid brightness; desktop DNA approaches the left frame edge; very gentle filament movement is subtle in still images; texture visibility depends on display black levels. Formation and route art direction remain available for future review. No claim of complete accessibility certification or exact visual equivalence to the external quality reference is made.

### Revision file inventory

New: src/particles/interaction/PointerInput.ts, src/particles/interaction/profiles.ts, src/particles/shaders/pointer.ts, scripts/check-pointer.cjs. Updated: src/particles/shaders/particle.ts and README.md; engine/ParticleField.tsx, DevTools.tsx, tiers.ts; src/lib/scene-store.ts; src/content/site.ts and capabilities.ts; src/components/HomeSections.tsx; src/styles/globals.css; src/app/layout.tsx; this handoff, brand/story working-copy addendum and evidence. Removed: obsolete engine/PointerTrail.tsx. Other dirty files belong to the existing Task 06 implementation and previous section refinement; they were preserved.

External influence: official OpenAI GPT-6 Astra launch page (https://openai.com/index/gpt-6-astra/) was a user-specified quality reference, independently reimplemented in ASL's existing shader. UI/UX Pro Max local touch/hover guidance informed input QA. Local behavioural particle references were inspected at their nested repository path. No external component or new dependency was adopted.
