# Builder 2 refinement — 4 October 2026

## Outcome and scope

Refined the existing Task 02 homepage on its existing branch and architecture. One root-level, code-split R3F canvas, deterministic buffers, custom GLSL, GSAP scroll ownership and server-readable DOM remain intact. No dependencies were added, removed or updated. Nothing was pushed and no remote was configured.

## 1. Baseline and verified findings

Read AGENTS, brand/story, Tasks 00–02, all three reports and the independent QA report before implementation. Reference notes and all eight frames plus the contact sheet were found under `docs/asl_particle_reference_pack/docs/particle-reference/`; `docs/brand/README.md` did not exist and was created. Inspected the supplied SVGs, legacy JSX/CSS, baseline captures, actual components, engine, shaders and commit history.

Confirmed: provisional logo throughout production; no integrated branded loader; reduced motion disabled the canvas; refreshInit measured before refreshed pin positions; menu lacked Escape/outside/focus-exit dismissal; hero skip did not transfer focus; arbitrary work slugs rendered the same placeholder; identical fake-proof rows; final CTA repeated the centred hero; several fine capability silhouettes were visually similar. Baseline roaming was spread through excessive depth, and unravel had no separate release gesture.

## 2. Accepted, modified and deferred QA recommendations

Accepted technical/navigation/routing findings and the need for stronger material distinctions. Kept the substantial burgundy statement and existing renderer. The audit's static reduced-motion behavior is superseded by the new explicit project rules: animation remains enabled.

Tested 400, 450, 500 and 550vh opening configurations through the dev tuning control and real scroll/skip path. All reached progress 0.52 and focused the introduction. Selected **500vh total** (100vh section + 400vh pin), reducing the former 700vh by roughly 29% while leaving space for the new release gesture. This is an art-direction choice for human review, not a claimed user-study result.

Did not invent booking, projects, testimonials or business proof to clear launch warnings. Did not lower the 60k high tier based on automated FPS. Did not replace the DOM choreography or install Motion/component frameworks. No proven memory leak was found; targeted waste was removed rather than a renderer rewrite.

## 3. Technical changes

Pin refresh priority places the pin before its scroll driver; the driver's refreshed end calculation measures the now-current pin positions. Removed the stale refreshInit measurement. Opening initialization now listens for an explicit WebGL capability result rather than a timed race. The viewport tier responds to width/coarse-pointer changes. Materials survive viewport changes, with viewport uniforms updated in the existing frame loop. Final formation aliases the existing logo data instead of generating/uploading another copy.

Unknown `/work/[slug]` routes now return 404 with noindex metadata. No placeholder project is presented as a real case study. Existing sitemap, robots, metadata and central booking URL remain. The configured site origin still needs a real deployment domain.

## 4. Brand and loader

Added typed ASLMark, ASLLogo and ASLLoader components. Canonical line geometry is shared by UI, favicon, fallback and particle sampling. Source assets are preserved. DOM wordmark text accompanies the vector in navigation/footer. `--brand-accent` controls the baseline; the opening uses monochrome bone.

Sampling follows the four independent source paths by arc length, with deterministic coverage of their 2.2-unit stroke width. No joining strokes or lockup text are introduced. Browser comparison of the rendered mark and supplied SVG returned **zero coordinate deviation at 21 samples on each of four paths**.

Incomplete Signal adapts the legacy stroke arrival/path-drawing sequence. Anime.js suggests near-alignment without finishing the whole mark, then dissolves the overlay at approximately 1.6 seconds. Sparse neutral specks connect it visually to the hero. Session storage is guarded; a timer and CSS cutoff provide safe completion. The overlay never removes DOM content, intercepts pointers, locks scroll or traps keyboard focus. Internal navigation retains the root loader instance.

## 5. Mutable Matter and capability refinement

Roaming now uses coherent density folds and a smaller depth spread, with a sparse loose fringe. Filaments have fuller tapered cross-sections and retain depth. A dedicated shader release first rotates, widens and pulls the helix strands progressively from their ends; only then does material travel into the filaments. It adds no particle population or vertex attribute. Formation/transit remains deterministic and reverses with canonical progress.

The mark is sized by viewport height as well as width to protect the copy below. It retains grain and quiet life. Gold highlights are disabled in the opening. The closing transforms the same mark to the right of left-aligned CTA copy; mobile uses a smaller upper-right identity.

Design retains a regular lattice; Development now presents five broad separated layers; Deployment uses a rising directed stream; Digital Products has a thicker orbiting volume. Subtle stream/cluster life remains shader-owned. The mobile review identified merged development layers caused by depth perspective; reducing mobile depth restored separation. Typography stays outside dense matter.

## 6. Composition, navigation and accessibility

Removed proof rows instead of presenting placeholder credibility. Retained an intentionally spacious burgundy editorial statement. Header surface now follows scene environment into burgundy rather than retaining the black seam. Hero supporting copy now emphasizes clear thinking and lasting craft, retaining truthful current services.

The mobile navigation keeps native disclosure/link semantics: Escape closes and returns focus to the summary, outside interaction and focus departure close it, navigation closes it, and wider viewports dismiss it. Desktop/mobile current routes have a visible indicator. Header links get a restrained underline transition. Hero skip waits for the visible reveal and focuses `#introduction` without a second scroll. Existing skip link, semantic headings, visible focus and aria-hidden decorative canvas remain.

Reduced motion keeps WebGL, pinning, transitions, loader, menu and CTA motion. It reduces particle time rate, camera travel, pointer strength, transit curvature, idle intensity and stretch. No-WebGL is separately handled through an animated canonical SVG and visible DOM. Context loss removes the pin and restores content.

## 7. Anime.js and external research

Anime.js owns the loader's event-driven SVG arrival/drawing/dissolve, mobile disclosure entry, and existing directional CTA arrow motion. Reduced-motion arrow movement is smaller rather than disabled. GSAP exclusively owns scroll progress and hero visibility; GLSL owns all primary particle positions.

| Source and pattern | Use and decision | Dependencies / ASL adaptation |
|---|---|---|
| [W3C disclosure navigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) | Independently implemented Escape, focus return and focus-departure behavior using native details/summary and links. | None. Four ASL routes, existing restrained dark navigation; no menu-role widget or focus trap. |
| [GSAP refresh lifecycle](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()/) | Used refresh ordering to correct pin measurements. | Existing GSAP only. One ASL canonical full-page progress writer. |
| [21st.dev Navbar Menu](https://21st.dev/@manuarora700/components/navbar-menu) and [Aceternity original](https://ui.aceternity.com/components/navbar-menu) | Inspected the exposed usage/source structure and dependency listing. Retained the general idea of short, deliberate navigation entry; independently implemented a 220ms disclosure entry and quiet route underline. Did not adopt its hover mega-menu or shared-layout spring. | No Framer Motion install, no copied component. ASL uses Anime.js and CSS with ordinary keyboard navigation. |

Also examined Aceternity Sticky Scroll Reveal as a coordination reference; it did not justify replacing the existing GSAP chapter architecture. Motion Primitives Text Effect could not be fetched, so no implementation is attributed to it. UI/UX Pro Max guidance informed visible focus and avoiding obscured controls; the project's established brand direction was preserved.

## 8. Performance: observed versus unverified

High remains 60,000 + 1,800 ambient, medium 40,000 + 1,200, low 18,000 + 650; DPR caps remain 2 / 1.5 / 1.25. Dev Leva/stats tooling remains and opening length is tunable there. Production has no tuning UI.

Observed in code: pointer force evaluation samples every second history point, reducing the maximum high-tier loop visits from 24 to 12 per vertex (about 1.44m to 720k at 60k). Expired and out-of-radius samples skip expensive calculations. The separate inexpensive pointer ribbon retains the full history. No force amplification was added. Position evaluation for velocity stretch is retained because it represents actual procedural/transit motion; a derivative shortcut was not assumed equivalent.

Observed in browser: live WebGL rendered all inspected states, tiers switched from 60k to 18k on mobile resize, and the canvas DOM instance survived client navigation. Burgundy rest still uses demand rendering. Material resize recreation and duplicate final buffer generation were removed; geometry still rebuilds when responsive formations require it.

No representative sustained GPU FPS, thermal, power, DPR-2 fill-rate or field Core Web Vitals measurement was made. Automated screenshots cannot certify tactile feel or 60fps. Real-device laptop/mobile review remains required. The existing THREE.Clock dependency deprecation remains; the CPU harness also reports Three's CommonJS deprecation without affecting the application bundle.

## 9. Verification

- `pnpm lint`: passed, including the standalone CommonJS invariant harness (its required import style has a file-scoped lint annotation).
- `pnpm typecheck`: passed.
- `pnpm build`: passed; Next 16.3.8 production output generated successfully.
- `node scripts/check-formations.cjs`: passed at 18k, 40k and 60k. Verifies equal target counts, finite coordinates, deterministic canonical sampling, final-buffer identity and the vertex-attribute budget. Zero/one-point logo edge cases also passed.
- Production `/`, `/work`, `/about`, `/contact`, `/capabilities`, `/lab/mutable-matter`, `/sitemap.xml`, `/robots.txt`, `/icon.svg`: 200. Unknown work slug: 404.
- No application page exceptions during route checks. Console has the existing THREE.Clock warning; intentional missing-project navigation reports its expected 404. Direct raw XML/text browsing also requested absent `/favicon.ico`; normal application pages use `/icon.svg`. Forced context loss reports the expected renderer context messages.
- Forward scroll at 1440x900: y=0/1800/3600/4500/5400/6300/7200 maps to p=0/.26/.52/.60/.68/.76/.85. Reverse returned .26 then 0. Skip ended at y=3600 and focused introduction.
- Resize/refresh: development chapter p=.68 at 1440x900, 1366x768, 390x844 and simulated 844x390 landscape. One early sample before debounced refresh settled was rejected and the settled lifecycle retested. Landscape result .67992 reflects subpixel section heights.
- Mobile Escape/focus return, outside dismissal and focus exit passed. No horizontal overflow at the four requested viewport sizes.
- Loader: fresh-session live capture; completion sets the session flag; internal navigation and return do not replay; storage getter/setter failure still completes. Reduced-motion fresh session captured active drawing and completed with WebGL enabled.
- Reduced motion: one live canvas and pin remain; DNA and hero captured; skip focuses introduction. No-WebGL: zero canvas/pin, visible hero/CTAs, canonical SVG, no overflow. Forced runtime loss also restores this path.

## 10. Screenshots and iterative review

See [screenshot index](screenshots/builder-2/README.md). `pass-1-*` documents technical/brand inspection; `pass-2-*` particle identity/release; `pass-3-*` desktop capability/CTA composition; `pass-4-*` mobile inspection before the depth correction. Final files start with their viewport width, captured from production using actual scroll rather than manual progress.

1440 captures cover loader, roaming, cloud, DNA, unravel, filaments, canonical mark, hero, all four capabilities, statement, final and footer. 1920x1080, 1366x768 and 390x844 include hero, all capabilities, statement and final. Additional mobile navigation, reduced-motion loader/DNA/hero and desktop/mobile no-WebGL captures are included. These are viewport captures; a full-page image cannot reliably represent every state of one persistent canvas.

## 11. Remaining content, limitations and next phase

Work, About and Contact still contain truthful placeholders. Booking remains `/contact`; real booking/contact details and production origin are needed before launch. The footer email is explicitly labelled placeholder. Marketing copy remains marked placeholder for approval. No projects, metrics, clients or outcomes were invented.

Real-device motion/feel/performance, Safari/Firefox, real touch and screen-reader testing remain unverified. The release gesture, opening duration and relative brightness are ready for creative review, not claimed final aesthetic approval. The no-WebGL path is intentionally simpler than the WebGL story.

Next: review the sequence on intended hardware, then supply real contact/booking and approved company/project content. Implement genuine inner-page content without changing the persistent canvas architecture.

## 12. Git handling

One local refinement commit contains implementation, the supplied canonical assets used by it, brand documentation, verification script and screenshots. Pre-existing AGENTS.md edits, docs/README.md, independent docs/qa material and src/legacy-brand source remain untouched and outside that commit. This preserves the user's existing work rather than silently committing it as authored refinement. No earlier commits were amended.
