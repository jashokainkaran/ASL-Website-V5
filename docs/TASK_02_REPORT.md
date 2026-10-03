# Task 02 — Production homepage

## 1. What was built

The complete six-part homepage: Mutable Matter opening, ASL identity and positioning, four capability chapters, burgundy editorial statement with three explicitly marked placeholder proofs, final conversion, and footer. The provisional continuous ASL spline was redrawn with a geometric A, asymmetric S, and slanted L. It is shared by the particle targets and static SVG; navigation has a heavier optical stroke. Larger editorial hero type, real serif italic, readable supporting copy, and separated CTAs complete the HTML layer.

The root Client Component shell retains one code-split WebGL canvas across navigation. Deterministic target buffers and registry-driven GLSL remain separate from typed content. Added lattice, strata, directed stream, orbital cluster, and edge-recession generators. Final assembly reuses the existing logo buffer. GSAP owns one canonical full-page progress value, pinning, smoothing, and hero reveal. Anime.js v4 has one purposeful use: a small directional arrow motion on CTA/link hover and keyboard focus, reversed on exit and disabled under reduced motion.

Clunky handoffs were traced to competing scroll writers and pin-refresh measurements. They now use one smoothed driver and measured section-height anchors. Transit spiral amplitude changed from 0.65 to 0.20; coherent idle phases and exponentially weighted pointer history reduce noisy motion without reducing particle quality. The opening remains 700vh total with 0.8-second scrub smoothing. Capability focus brings the appropriate chapter into view. Particle rendering pauses while the opaque burgundy statement dominates.

## 2. How to run

`pnpm dev` at http://localhost:3000 for tuning. `pnpm build` then `pnpm start` for production. The reviewed production server runs at http://localhost:3001 (`pnpm start --port 3001`). Set NEXT_PUBLIC_SITE_URL before deployment; the checked-in example intentionally uses localhost. README.md documents setup.

## 3. Packages

No packages added in Task 02. Stack and exact resolved versions are in package.json/pnpm-lock.yaml: Next 16.3.8, React 19.3.0, Three 0.186.1, R3F 9.8.1, Drei 10.7.9, GSAP 3.15.0, Anime.js 4.5.0, Tailwind 4.3.3, Leva 0.10.1, stats-gl 4.2.3. TypeScript 6.0.3 and ESLint 9.39.5 use the compatible major lines rather than incompatible latest majors. Leva/stats are development-only and absent from the production UI.

## 4. Performance and quality

| Tier | Main | Ambient | DPR cap | Curl octaves | Pointer history |
|---|---:|---:|---:|---:|---:|
| High | 60,000 | 1,800 | 2 | 3 | 24 |
| Medium | 40,000 | 1,200 | 1.5 | 2 | 16 |
| Low/mobile | 18,000 | 650 | 1.25 | 1 | 8 |

An additional 1,536 GPU samples render only the tapered pointer light ribbon. Main population count stays identical across formations. The 100,000-main override rendered the new states without application errors.

Automated Windows Chromium exposes Intel Iris Xe / ANGLE D3D11. A settled high-tier scroll check sampled 60fps; short tier-rebuild checks sampled high 3fps (cold/rebuild interval), medium 61fps, low 48fps, and 100k 22fps at actual DPR approximately 1. These automation samples are **not representative**. Earlier Task 01 snapshots were high 39–52, medium 62, low 54–60. Compilation, buffer rebuilds, viewport changes and automated rendering make these unsuitable for sustained GPU qualification. Counts/effects were not lowered. Sustained 60fps desktop/30fps mobile, high-DPR fill rate, thermals and tactile feel remain unverified on real devices. The dev panel exposes all requested tuning controls and bounds.

## 5. Screenshots and objective review

`docs/screenshots/task-02/` contains roaming, cloud, DNA, unravelling, filaments, hero, lattice, strata, stream, cluster, statement and final at 1440×900, 1920×1080 and 390×844. Filenames begin `1440-`, `1920-` or `390-`. Additional captures show reduced motion, no WebGL, context loss, and full-page live/static layouts. The live full-page screenshot cannot represent every time-dependent state of one fixed canvas; individual viewport captures are the reliable state evidence.

Refinement passes: (1) fixed vertex attribute overflow that hid the new particle states; (2) replaced conflicting progress writers and fixed pin-refresh measurement; (3) enlarged/recomposed the hero, revised the provisional mark, bounded pointer forces, and checked full-screen/mobile; (4) corrected capability anchors, mobile menu dismissal, fallback recovery, label contrast and final-label header clearance. Objective review checked coverage, thick streams, size variation, copy separation, missing states and overflow. No horizontal overflow was measured at any requested size. Subjective visual approval is not claimed.

Projected target bounds, unclipped width × height (base targets, not GPU transient readback):

| State | 1440×900 | 1920×1080 | 390×844 |
|---|---|---|---|
| Roam | 254% × 315% | 254% × 315% | 253% × 302% |
| Cloud | 52% × 105% | 46% × 105% | 183% × 105% |
| Helix | 28% × 110% | 28% × 110% | 35% × 110% |
| Filaments | 176% × 97% | 176% × 97% | 175% × 91% |
| Logo/final | 49% × 25% | 49% × 27% | 81% × 12% |
| Lattice | 71% × 106% | 71% × 106% | 109% × 44% |
| Strata | 77% × 90% | 77% × 90% | 134% × 42% |
| Stream | 78% × 79% | 78% × 79% | 160% × 42% |
| Cluster | 62% × 74% | 62% × 74% | 81% × 34% |
| Edge rest | 117% × 119% | 116% × 119% | 126% × 119% |

Desktop capabilities occupy the right-hand visual field. Mobile recomposes matter across the upper viewport and readable copy below, rather than shrinking the entire desktop scene.

## 6. Verification, accessibility and SEO

Final lint, TypeScript and production build pass. Production routes `/`, `/work`, `/work/sample-project`, `/capabilities`, `/about`, `/contact`, `/lab/mutable-matter`, `/sitemap.xml`, `/robots.txt`, `/icon.svg` returned 200. All homepage link destinations and capability fragments resolve. Explore Our Work navigates to /work; Book a Call remains the single /contact constant. Canvas DOM identity survives client navigation. No application page errors were observed; a THREE.Clock deprecation warning comes from R3F.

At 1440×900, forward scroll samples 0, 2700, 5400, 6300, 7200, 8100 and 9000px produced progress 0, .26, .52, .60, .68, .76 and .85. Reverse samples returned the same values. Skip to introduction reveals the hero at the end of the pin.

Semantic DOM, one homepage H1, descriptive links, native mobile disclosure, visible keyboard focus and skip link are present. Keyboard focus was exercised, and the mobile menu closes after navigation. Decorative canvas is aria-hidden. Reduced-motion and forced no-WebGL tests produced zero scene canvases, zero pin spacers, visible SVG identity/copy, and working CTA destinations. Forced runtime WebGL loss also unmounts the canvas and removes the pin. Static capabilities become compact editorial sections. Native vertical touch scrolling is preserved.

Token contrast ratios: bone/void 17.90:1, bone/ink 16.66:1, bone/burgundy 10.92:1, bone/wine 15.59:1; muted on these surfaces 9.22, 8.59, 5.63 and 8.04; gold 8.29, 7.72, 5.06 and 7.23. All exceed AA normal-text thresholds. Opaque/scrimmed text regions separate copy from bright matter. This is not a full assistive-technology audit. Page metadata/Open Graph, sitemap, robots and shared-mark favicon are present; /lab is excluded from crawling.

## 7. Limitations and deviations

- Task 00/01 STOP lines were internal checkpoints as explicitly authorized. Commits: 386472a and 0eea732. No later task began before its prerequisite checks passed.
- Reference files were found under docs/asl_particle_reference_pack/docs/particle-reference rather than the abbreviated path. All nine reference images were inspected. Task-heading references were resolved against the actual AGENTS headings; no missing engineering heading remained.
- One full-page progress now assigns 0–0.52 to the opening, preserving its local timing. Capabilities use 0.52–0.86, recession/rest 0.86–0.92 and final assembly 0.92–1. This avoids a second canonical scroll value.
- Final formation shares aLogoTarget instead of allocating a duplicate vertex attribute, preserving the intended return while respecting the device attribute limit.
- Existing Task 01 deviations remain: analytic trigonometric curl instead of a noise texture; eight low-tier history entries; 650 mobile ambient points; 81%-wide mobile mark; 1,536 auxiliary pointer samples; target-only projected bounds; 600vh pin plus 100vh section; earlier overlap boundaries .26/.285 and .80 in local opening progress; scoped lint exemption for imperative R3F mutation. No main-particle quality reduction.
- New motion tuning: smaller mid-transit spiral and tapered history accumulation to reduce erratic motion. New logo remains PROVISIONAL. Reduced motion deliberately uses SVG/static DOM, not WebGL. No new dependencies or postprocessing.
- Proof entries, marketing copy, provisional identity, contact email, Work/About/Contact and project content remain flagged placeholders. No company names, claims, statistics, testimonials or awards were fabricated. Booking cannot be completed until genuine contact/booking details are provided.
- This is a completed landing-page implementation, not a deployed public site or finished case-study/contact backend. Domain-specific SEO URLs need configuration. Browser testing used Chromium on Windows; Safari, Firefox, real touch hardware, screen readers, real-GPU sustained performance and subjective aesthetics were not certified. No field Core Web Vitals or LCP audit was run.

## 8. Recommended next work

Review on the intended GPU with the development panel, then replace approved identity/copy/proof. Prepare real Work case studies, an About narrative and a functioning Contact/booking destination. Configure the production domain before deployment. Keep the particle engine and content adapters separate.

## 9. Creative review

Review the revised continuous ASL silhouette at large and navigation sizes, the opening duration, matter brightness/force response, and desktop/mobile type balance on real hardware. These are review topics, not outstanding implementation permission requests.
