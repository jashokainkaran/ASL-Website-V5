# ASL independent audit

## 1. Executive assessment

The homepage has a coherent art direction and a real custom particle engine. The persistent canvas, typed content, static fallback, and six-part page structure are sound foundations. The site is **ready for creative review, but not ready for launch**: “Book a Call” reaches a placeholder contact page, Work and About remain placeholders, and the provisional mark still needs identity approval.

This was a read-only audit. I inspected the implementation and reference material, reviewed the supplied WebGL captures, ran the production site at desktop and mobile sizes, and researched external interaction patterns. The audit browser had no WebGL, so I could verify the live fallback and DOM behavior, but **could not independently verify live particle motion, reverse scrubbing, pointer feel, or real GPU frame rate**.

## 2. What is genuinely strong

- One root-level, code-split canvas serves the routes. Particle formations use deterministic typed buffers and shader uniforms, with no per-particle React rendering. See [ExperienceShell.tsx](E:/ASL%20v5/src/components/ExperienceShell.tsx) and [geometry.ts](E:/ASL%20v5/src/particles/engine/geometry.ts).
- The checked-in captures show a legible helix, a substantial burgundy editorial section, and readable capability layouts. The no-WebGL runtime produced a deliberate SVG hero with working navigation and CTAs.
- Content claims are controlled: proof entries, contact details, and provisional copy are marked as placeholders. No fabricated client or outcome claims were found.

## 3–4. Critical and visual issues

| Priority | Finding | Evidence and recommendation |
|---|---|---|
| **P0 for launch** | **The primary conversion action has no usable booking outcome.** Every “Book a Call” link goes to `/contact`, which says booking is not connected. | [site.ts](E:/ASL%20v5/src/content/site.ts:1), [contact/page.tsx](E:/ASL%20v5/src/app/contact/page.tsx). Supply a real booking or contact method before publishing. |
| **P0 for launch** | Work, About, and project pages are placeholders; arbitrary `/work/[slug]` URLs render the same “Project Name” page. | [work/[slug]/page.tsx](E:/ASL%20v5/src/app/work/%5Bslug%5D/page.tsx), [site.ts](E:/ASL%20v5/src/content/site.ts:16). Add real content and reject unknown slugs before indexing. |
| **P1** | The **700vh opening** is a large commitment before the positioning copy appears. The skip affordance helps, but its behavior needs a keyboard and focus pass. | [scroll.ts](E:/ASL%20v5/src/particles/engine/scroll.ts:11), [Opening.tsx](E:/ASL%20v5/src/components/Opening.tsx:21). Test a shorter roughly 350–450vh cut with users before fixing the duration. |
| **P1** | The roaming frame can read as a starfield; the unravel frame reads more like a broad redistribution than strands visibly peeling away. Several filament lanes appear wispy in still captures. | Compare [roaming](E:/ASL%20v5/docs/screenshots/task-02/1440-roaming.png), [unravelling](E:/ASL%20v5/docs/screenshots/task-02/1440-unravelling.png), and [filaments](E:/ASL%20v5/docs/screenshots/task-02/1440-filaments.png). Validate these judgments in motion before changing geometry. |
| **P1 creative** | The provisional monogram is readable as ASL at hero scale, but its sharp L terminal can resemble a Z-like stroke at small sizes. The final CTA repeats the centered mark from the hero. | [1920 hero](E:/ASL%20v5/docs/screenshots/task-02/1920-hero.png), [390 final](E:/ASL%20v5/docs/screenshots/task-02/390-final.png). Review the silhouette at navigation size; give the ending a quieter, CTA-led convergence. |
| **P2** | The burgundy section has welcome visual weight, while three identical “Project Name” entries make it visibly unfinished. The fixed black header creates a hard seam over burgundy. | [statement capture](E:/ASL%20v5/docs/screenshots/task-02/1440-statement.png). Keep the environment; replace proof and tune the header state before launch. |

## 5–6. Particle engine and architecture

The same main point population is used across formations. A shared ascending path parameter gives useful correspondence, and shader transitions apply thresholds and curved offsets. These are substantive strengths. The “unravelling” beat has no dedicated formation or strand-release rule: it is the helix-to-filaments morph, which explains why its still frame has a less distinct decomposition gesture. See [states.ts](E:/ASL%20v5/src/particles/states.ts) and [particle.ts](E:/ASL%20v5/src/particles/shaders/particle.ts:11).

The main code risk is scroll measurement. [scroll.ts](E:/ASL%20v5/src/particles/engine/scroll.ts:14) reads `pin.end` in `onRefreshInit`; GSAP documents that `refreshInit` runs **before** triggers recalculate their positions. Resizing or rotating a device could therefore leave chapter anchors based on the previous pin distance. This is an **inferred P1 defect**, not a reproduced failure in the no-WebGL browser. Re-measure after refresh and test orientation changes. [GSAP refresh documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh%28%29/).

I found cleanup for the inspected listeners, ticker callbacks, geometries, and materials; I found no proven leak. Geometry is regenerated on viewport size changes and material recreated on size or tier changes, so resize cost and shader recompilation merit profiling. The `final` registry entry also regenerates the logo points while reusing the same GPU attribute. See [ParticleField.tsx](E:/ASL%20v5/src/particles/engine/ParticleField.tsx:13) and [geometry.ts](E:/ASL%20v5/src/particles/engine/geometry.ts:6).

## 7. Performance

| Basis | Result |
|---|---|
| **Measured in this audit** | No representative WebGL FPS: this browser selected the static fallback and created zero scene canvases. |
| **Observed in code** | High 60,000 main + 1,800 ambient; medium 40,000 + 1,200; low 18,000 + 650. DPR caps are 2, 1.5, and 1.25. Rendering switches to demand mode across the burgundy rest window. |
| **Inferred** | High-tier main geometry carries roughly **10.6 MB of float attributes**, plus CPU target arrays and GPU overhead. At the 24-history setting, the vertex shader can evaluate up to about **1.44 million pointer-history iterations per frame** across 60,000 points; it also evaluates particle position twice for velocity stretch. Actual GPU cost requires profiling. |

**Keep 60,000 as the provisional high default.** The earlier Task 01/02 FPS figures are automated samples, not sustained measurements on the intended hardware. Profile a real laptop at DPR 1 and 2, particularly during pointer movement and transitions, before changing count or effects. [Three.js disposal guidance](https://threejs.org/manual/pages/how-to-dispose-of-objects.html) supports the existing explicit cleanup approach.

## 8–10. Accessibility, responsive behavior, SEO, and content

The live fallback had one homepage H1, semantic sections, an aria-hidden canvas layer, a visible SVG identity, and no horizontal overflow at **1920×1080, 1440×900, 1366×768, or 390×844**. All inspected routes rendered without console errors. I did not run a screen reader or real touch device.

The mobile disclosure opened with keyboard focus, but **Escape did not close it** in the browser test. [MobileMenu.tsx](E:/ASL%20v5/src/components/MobileMenu.tsx:5) only closes after a link click. Add Escape and outside-dismiss behavior while preserving ordinary link semantics; the [W3C disclosure navigation pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) describes the expected focus return. The hero skip link also scrolls to the reveal without explicitly moving focus to the revealed content; verify that path with keyboard and a screen reader. [scroll.ts](E:/ASL%20v5/src/particles/engine/scroll.ts:45).

Metadata, Open Graph fields, sitemap, and robots exist. The site origin defaults to localhost until configured, and project placeholders should not be indexed as real case studies. The current copy is generally calm and precise, though “more than a template” positions ASL somewhat narrowly for a company intending to expand beyond website services.

## 11–14. Report accuracy, ranked fixes, recommendations, and evidence

The earlier reports accurately disclose their placeholder pages and unrepresentative FPS. Their visual acceptance claims are stronger than this audit can independently confirm: the current browser cannot render WebGL, and still screenshots cannot establish smooth reverse motion, tactile pointer response, or sustained frame rate. The reported target bounds are **unclipped target projections**, not measured bounds of particles during morphs.

**Recommended order:** connect a real conversion route and replace publishable placeholders (**P0 for launch**); verify scroll anchors after resize, mobile menu dismissal, and skip-link focus (**P1**); run a real-GPU motion and FPS review, including whether 700vh earns its length (**P1**); then refine the mark, filament body, capability distinctions, and final CTA (**P1–P2**). The burgundy environment should stay substantial. The capability concepts differ in code, but their repeated text layout and several similarly fine particle treatments reduce the perceived difference in the screenshots.

Checked-in visual evidence: [desktop sequence](E:/ASL%20v5/docs/screenshots/task-02/), including the [helix](E:/ASL%20v5/docs/screenshots/task-02/1440-dna.png), [capability cluster](E:/ASL%20v5/docs/screenshots/task-02/1440-cluster.png), and [burgundy section](E:/ASL%20v5/docs/screenshots/task-02/1440-statement.png); [mobile hero](E:/ASL%20v5/docs/screenshots/task-02/390-hero.png) and [mobile statement](E:/ASL%20v5/docs/screenshots/task-02/390-statement.png). I also captured new browser views during this audit at the four sizes above, but did not save them into the repository under the read-only constraint. Those new views show the **no-WebGL fallback**, not the live particle states.

## 15. External library and creative-resource review

These are **behaviors to research or reimplement**, not installation recommendations. The fixed stack already assigns scroll to GSAP, DOM micro-interactions to Anime.js, and particles to ASL’s own Three/GLSL engine.

| Area | Behavior worth researching for ASL | Fit |
|---|---|---|
| Navigation | A subtle active-route indicator and deliberate open/close timing; on mobile, disclosure dismissal and focus return. Examine [21st.dev’s Navbar Menu](https://21st.dev/@manuarora700/components/navbar-menu) for timing and [Radix Navigation Menu](https://www.radix-ui.com/primitives/docs/components/navigation-menu) for keyboard semantics. | Adapt the mechanics with current code; ASL has only four top-level links and does not need a large menu package. |
| Typography transitions | Reveal a headline by phrase or line as its paired material reaches rest, preserving one readable DOM heading. [Motion Primitives Text Effect](https://motion-primitives.com/docs/text-effect) and [React Bits text patterns](https://reactbits.dev/c/text-animations) provide cadence ideas. | Use GSAP when tied to `sceneProgress`; Anime.js only for event-driven text. Avoid importing their animation runtimes. |
| CTA behavior | A bounded pointer attraction or directional detail that returns cleanly to rest, with an equally clear keyboard state. [Aceternity’s Magnetic Button](https://ui.aceternity.com/components/magnetic-button) illustrates the attraction mechanic. | Research at low strength; the current arrow motion may already be sufficient. |
| Scroll choreography | Let the active capability label, copy, and particle state change at the same authored anchor. [Aceternity Sticky Scroll Reveal](https://ui.aceternity.com/components/sticky-scroll-reveal) is a useful coordination reference. | Reimplement through the existing GSAP `sceneProgress`; its Motion dependency would duplicate responsibility. |
| Capability interactions | Let focus reveal the corresponding state without unexpected full-section scrolling. Pair visible chapter progress with distinct material responses. | Refine the current focus behavior in [HomeChoreography.tsx](E:/ASL%20v5/src/components/HomeChoreography.tsx:5); no component library needed. |
| Page transitions | Keep the persistent canvas continuous while the **DOM** enters and exits quietly; do not snapshot or remount the particle world. The [View Transition API guidance](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using) offers a progressive DOM pattern. | Prototype only after real inner pages exist; include reduced-motion and unsupported-browser paths. |
| Project gallery | With genuine projects, test an editorial image-and-caption selection pattern with keyboard controls and predictable image loading. A [shadcn carousel](https://ui.shadcn.com/docs/components/base/carousel) supplies interaction ideas but brings Embla; [image comparison](https://motion-primitives.com/docs/image-comparison) fits only if a case study has honest before/after evidence. | Defer until real case studies exist. Avoid a generic autoplay carousel. |
| Responsive interaction and accessibility | Treat mobile navigation as a disclosure, with Escape, outside dismissal, focus return, and current-page indication. | The [W3C pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) is the best immediate reference. Radix is worth considering only if navigation complexity grows. |
| Shader/WebGL support | Research buffer reuse, shader cost, and lifecycle techniques. Keep any SVG mark drawing confined to the fallback or DOM layer. | [Three.js BufferGeometry](https://threejs.org/docs/pages/BufferGeometry.html) and [disposal guidance](https://threejs.org/manual/pages/how-to-dispose-of-objects.html) are more useful here than a visual effects kit. **Mutable Matter remains ASL’s custom engine.** |

Cult UI is a source registry that can copy components and bring dependencies such as Motion and Base UI; [its own documentation](https://www.cult-ui.com/docs) makes that tradeoff clear. Magic UI’s [Animated Beam](https://magicui.design/docs/components/animated-beam) and its particle or glow effects would duplicate ASL’s visual language. I found no case for installing either during this audit.

**Verification:** `pnpm lint`, `pnpm typecheck`, and `pnpm build` all passed. The browser console showed no errors or warnings in the fallback route checks. Git status is unchanged from the start: the only tracked modification is the pre-existing `AGENTS.md` edit. No files, packages, or implementation code were changed.