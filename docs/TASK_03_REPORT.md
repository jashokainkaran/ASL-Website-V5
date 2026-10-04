# Task 03 - Luxury motion refinement

## 1. Scope and baseline

Refined Builder 2 without replacing the particle renderer, deterministic formation buffers, canonical geometry, root canvas, quality tiers, native scrolling, or homepage section order. Current AGENTS.md and TASK_03_LUXURY_MOTION.md supersede the old homepage Incomplete Signal intro. Read the brand story, previous task briefs/reports, independent QA, Builder 2 implementation/report and reference contact sheet before changes. Actual reference assets remain under docs/asl_particle_reference_pack/docs/particle-reference.

Verified the baseline in the local browser: strong particle states, nearly static capability copy, flat later environments, repeated chapter composition and the old global loader. No dependencies were added, removed or updated. No remote was configured or pushed.

## 2. Implementation and files

- `components/motion/Editorial.tsx`, `lib/editorial-motion.ts`: reusable semantic phrase masks, rules and reversible GSAP scores.
- `Opening.tsx`: sequenced hero reveal, focus-safe CTAs and a localized handoff scrim.
- `HomeSections.tsx`, `HomeChoreography.tsx`: differentiated editorial chapters, statement/closing composition and progress synchronization.
- `components/motion/ResidualMatter.tsx`: sparse canonical-mark-derived residue.
- `styles/editorial.css`, `styles/globals.css`, `public/textures/grain.png`: texture, lighting, continuity, responsive composition and interaction styling.
- `LinkMotion.tsx`, `MobileMenu.tsx`: bounded magnetic response, arrow movement, staggered disclosure entry and cleanup.
- `brand/ASLLoader.tsx`, `styles/brand/asl-loader.css`: new direct-entry particle identity.
- `scene-store.ts`, `SceneEnvironment.tsx`, `ParticleField.tsx`, `ExperienceCanvas.tsx`, `shaders/particle.ts`: one route-convergence uniform and existing-canvas release choreography.
- Brand documentation, this report, and screenshots/index.

## 3. Editorial system and hero

A paused GSAP score orders rule extension, masked phrases, supporting details, then actions. Home choreography samples the existing canonical sceneProgress; it adds no independent scroll listener or scroll position reader. Scores scrub backward as well as forward, with writes skipped when progress is unchanged. Mark settling overlaps the hero reveal from 92.5% to 99.8% of opening progress. Existing skip/focus behavior is retained. Meaningful headings remain ordinary DOM with authored phrase boundaries and whitespace, not character-by-character replacement.

Design uses large serif typography and an upper number; Development uses a narrower inset composition and vertical rule; Deployment uses a higher copy anchor and lower number; Digital Products returns to a stacked serif heading and living cluster. Numbers, labels and rules enter with the corresponding material chapter. Exiting copy recedes gently; keyboard focus forces it readable. Mobile uses a shared lower reading area, leaving the upper material field open.

## 4. Continuity, texture and residual matter

Hero/chapter rules establish a common horizontal axis. Capability scrims soften at their vertical boundaries; a broad directional light field adds depth. During hero-to-lattice travel, a local charcoal scrim protects the outgoing supporting copy, correcting a collision found in review.

The statement warms from charcoal into substantial burgundy and returns through dark wine into the final environment. Its premise sits upper left; the larger answer resolves lower right, becoming a vertical composition on mobile. The final remains left aligned, with offset identity, a rule, phrase reveal and a quieter perimeter. Its headline and Book a Call destination are unchanged. No proof rows or fabricated content were added.

Grain is one deterministic 128x128 grayscale PNG (16,585 bytes), at 1.8% opacity on a pointer-transparent fixed pseudo-element. It is static. Lighting/vignettes are CSS gradients using semantic tokens, with no animated noise shader.

Thirty-eight small SVG points derive from the canonical mark sampler and sit at the viewport edges. Their group opacity and small vertical displacement follow sceneProgress, connecting later sections even when their surfaces cover WebGL. This is a sparse projection, not a second particle simulation. The statement remains nearly still; there is no perpetual residual animation loop.

## 5. Homepage and inner-route identity

Home and the lab never play the branded overlay, including direct entry, refresh and return navigation. Session storage is no longer used. The persistent root loader tracks the initial route and suppresses replay after leaving it.

Direct inner entry uses 360 SVG particles sampled from getASLMarkPoints plus 18 residual points. Anime.js first draws the broad field inward, then uses staggered, bent target-directed legs, slight overshoot and recovery. The canonical mark is formed by the particles themselves; no logo opacity reveal substitutes for formation. Bone on space-black only. The same SVG implementation runs without WebGL and does not wait for the 3D bundle. This deliberately avoids mounting another canvas or duplicating the expensive engine.

The visual sequence targets 1.27 seconds. Live mutation timing measured 1.252 seconds on entry and 1.265 seconds on refresh, from visible to hidden. A 1.45-second timer and 1.5-second CSS cutoff prevent a stuck overlay. It intercepts no input, sets no inert state and dismisses immediately on focus or pointer interaction. All page content remains mounted and usable.

Client navigation to inner routes uses the existing primary canvas: a GSAP-driven routeMix converges the current formation into centered canonical geometry over 320ms, switches the destination at full convergence, then releases over 380ms. GLSL owns particle positions. Work/About release to the existing quiet edge/rest state, Capabilities to lattice, Contact to the conversion state. Home returns directly to its opening. Demand rendering resumes during convergence. Identity transition backgrounds and header are space-black; the inner-page scrim temporarily clears. The canvas DOM instance survives navigation. This is a prototype on the existing placeholder routes, not a claim of finished inner-page art direction.

## 6. Microinteraction and motion ownership

Anime.js handles bounded CTA magnetism (4px maximum, 1.5px reduced), directional arrows, the direct-entry SVG sequence, and staggered mobile disclosure links. Pointer geometry is read on entry rather than on every move. Animations are canceled/replaced and cleaned up. A measured edge hover produced x=3.85px/y=3.57px and returned to zero. Keyboard focus retains a conspicuous ring and arrow treatment. Navigation gains directional rule origins and a 1px type lift; the brand baseline responds on hover and focus.

GSAP exclusively owns scroll-linked DOM scores and canonical scene progress, plus event-driven route timing. Three/GLSL retains all primary particle motion. No new requestAnimationFrame loop or runtime dependency was introduced.

## 7. Research and actual influence

No component or template was pasted. Source mechanics were independently implemented with the existing stack.

| Source | Study and decision |
|---|---|
| [React Bits ScrollReveal source](https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/content/TextAnimations/ScrollReveal/ScrollReveal.jsx) | Studied GSAP stagger/scroll synchronization. Retained progress-driven reveal; used phrase masks rather than blur/rotation or character effects. Kept local cleanup instead of its global ScrollTrigger kill. Existing GSAP only. |
| [Motion Primitives Text Effect source](https://raw.githubusercontent.com/ibelick/motion-primitives/main/components/core/text-effect.tsx) | Studied segment wrappers and stagger hierarchy. Influenced the reusable phrase/detail/action score. Semantic authored phrases replace runtime splitting; no Motion dependency. |
| [Motion Primitives Magnetic source](https://raw.githubusercontent.com/ibelick/motion-primitives/main/components/core/magnetic.tsx) | Studied center-relative displacement and return to rest. Reimplemented with Anime.js, a strict 4px cap, mouse-only attraction, cached geometry and reduced intensity. No spring or global attraction area. |
| [21st.dev Sticky Scroll listing](https://21st.dev/@manuarora700/components/sticky-scroll-reveal) and [Aceternity source registry](https://ui.aceternity.com/registry/sticky-scroll-reveal.json) | Studied active chapter/content coordination and sticky companion mechanics. Retained common authored anchors; used existing persistent material and sceneProgress, not an overflow scroller, cards, React state per scroll, or Motion installation. |
| [Magic UI Text Animate](https://magicui.design/docs/components/text-animate) | Compared line/word segmentation, stagger and accessible text treatment. No component adopted; rejected elaborate spring/blur presets and a second animation runtime. |
| [Cult UI Direction Aware Tabs](https://www.cult-ui.com/docs/components/direction-aware-tabs) | Studied directional entry/exit; no tab widget or resizing container adopted. ASL chapters remain document sections. Its Motion dependency was unnecessary. |
| [Cult UI Texture Overlay](https://www.cult-ui.com/docs/components/texture-overlay) | Compared texture patterns and opacity controls. No code adopted; the project's cheap static grain requirement is implemented with an independently generated small texture, avoiding visible dots/grids. |

UI/UX Pro Max's targeted focus-not-obscured guidance informed immediate loader dismissal on focus and retained disclosure/focus behavior. Existing W3C disclosure semantics remain: ordinary links, native details/summary, Escape and focus return, no menu-role widget or focus trap.

## 8. Four iteration passes

1. Added motion primitives and grain; removed homepage loader eligibility. Ran desktop/mobile; confirmed no home overlay or horizontal overflow. Reduced grain strength after inspection.
2. Added hero phrase choreography, chapter numbers/rules and distinct compositions. Captured intermediate hero progress plus all chapters and mobile Development. Checked progressive transforms rather than only endpoints.
3. Reworked statement/final and added sparse residue. Corrected a Windows text-encoding error found by the development server, then captured both environments at desktop/mobile sizes without application errors.
4. Implemented direct loader, persistent route convergence, navigation/CTA work, fallback/reduced checks and all requested widths. Corrected the outgoing hero copy collision and transition header/scrim specificity. Rechecked reverse motion, bounds, disclosure and final build.

## 9. Verification and evidence

- Lint, typecheck and production build pass after final code changes. `git diff --check` passes.
- Formation invariant harness passes at 18k, 40k and 60k; finite deterministic targets, equal sizes and buffer reuse preserved.
- Production homepage, Work, Capabilities, About, Contact and lab return 200. Unknown work slug returns the intended 404. No application page exceptions during normal route/fallback checks. Existing THREE.Clock deprecation remains; intentional 404 logs are expected. Temporary development encoding errors were corrected, not ignored.
- 1920x1080, 1440x900, 1366x768, 768x1024 and 390x844: hero, four chapters, statement and final captured. No horizontal overflow measured.
- Forward reveal sampled at p=.491/.506/.520; first phrase transform moves from 33px to effectively 0 to 0. Reverse p=.520/.491/.260/0 returns the phrase to its mask. Skip focuses introduction.
- Route convergence sampled every 20ms: maximum .999984, 34 nonzero samples (~680ms). Canvas identity remains unchanged. Direct loader does not replay on internal navigation or return home. Transition header measured #070708 with transparent content scrim.
- Reduced motion retains one live canvas; two captures 500ms apart differ while the page stays still. Lower-intensity loader completes. No-WebGL has zero canvas, readable hero, working navigation and animated SVG identity.
- Mobile disclosure Escape closes and restores focus to SUMMARY. Hover attraction returns to zero; native scrolling is not intercepted. Decorative grain, SVG residue, loader and canvas are nonsemantic.
- Token contrast calculations: bone/burgundy 10.92:1, muted/burgundy 5.63:1, muted/ink 8.59:1, gold/ink 7.72:1, bone/void 17.90:1. These are token pairs, not a claim of exhaustive composited-pixel or screen-reader certification.

[62 screenshots and capture notes](screenshots/task-03/README.md). Loader phase captures use a paused browser clock with only the CSS safety cutoff disabled; otherwise the wall-clock cutoff hides the frozen animation before the screenshot. Live completion was separately measured with all safeguards enabled. The stage captures therefore illustrate real computed particle positions, not a timing benchmark.

## 10. Performance, limitations and next phase

Observed: original high/medium/low counts, DPR caps, formation buffers and renderer survive. New continuous DOM work samples GSAP's existing ticker and skips unchanged progress. Grain is static; residue moves as one SVG group; no second WebGL canvas. The finite SVG loader briefly animates 378 elements and then stops. These bounded costs are engineering observations, not sustained device measurements.

No representative GPU FPS, battery, thermals or field Web Vitals measurement was made. Do not infer performance from automated-browser capture time. Real laptop/mobile GPU, Safari/Firefox, real touch and screen-reader review remain necessary.

Remaining creative review: confirm the fast identity formation on intended displays; assess large numbering and chapter cadence at normal human scroll speed. The SVG direct-entry mark is intentionally sparse and flatter than the primary 3D world. The transitional text scrim is visible briefly during handoff. Inner pages still contain truthful placeholders, and booking remains /contact until real details are supplied. No launch-readiness claim is made.

Recommended next phase: real-device creative/performance review, then genuine inner-page copy/projects and booking/contact integration. Preserve the material engine while expanding route content.

## 11. Git handling

One new local refinement commit, preserving all previous commits. Pre-existing user edits to AGENTS.md and the untracked Task 03 brief are left untouched and excluded from the authored implementation commit. No push.
