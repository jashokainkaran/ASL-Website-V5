# TASK 02: Production Homepage

Read `AGENTS.md`, `docs/ASL_BRAND_AND_STORY.md` and the completed Task 00 and Task 01 implementation before starting.

Task 01 proved the Mutable Matter engine on `/lab/mutable-matter`. Task 02 integrates that engine into a complete, polished, responsive production homepage at `/`. Do not rebuild the particle engine unless a demonstrated technical issue requires it. Preserve the persistent `ExperienceCanvas` architecture.

## Goal

One continuous authored experience, not separate generic website sections. Homepage flow:

1. Mutable Matter opening sequence
2. ASL mark and positioning reveal
3. Capabilities
4. Burgundy statement and proof environment
5. Final conversion
6. Footer

The Composition, scale and flow rules in `AGENTS.md` apply to every new state. Each must fill the viewport and keep density high. Offsetting a formation to leave room for text is allowed, shrinking it is not.

## 1. Opening sequence

Integrate the validated Task 01 sequence: roaming field, dense cloud, DNA helix, unravelling, sweeping filaments, stylised ASL mark, hero reveal. Keep the space-black environment, the subordinate ambient specks and bone or cream matter. No burgundy during the opening. Use the existing `sceneProgress` architecture. Reverse scroll must keep working. No important copy inside WebGL.

## 2. Hero reveal

Reveal DOM content in the breathing room around the settled mark. Placeholder copy, flagged `isPlaceholder: true`:

- Label: `ASL / DIGITAL STUDIO`
- Headline: *Digital matter, given form.*
- Supporting: ASL designs, builds and deploys websites and digital products for founders and teams who want more than a template.
- Primary CTA: **Book a Call** linking to `/contact`
- Secondary CTA: **Explore Our Work** linking to `/work`

## 3. Navigation

A refined, quiet navigation: ASL wordmark at left, Capabilities, Work, About, Contact, and a Book a Call button. It must feel premium rather than like a generic SaaS navbar. Anime.js may be used for restrained underline, path and hover details. Do not over-animate. Fully keyboard accessible.

## 4. Capabilities

Capabilities are NOT cards. Build four large typography-led states integrated with the persistent particle world:

- **DESIGN:** *We shape how it looks, feels and speaks.* Particles settle into a precise, elegant 3D **lattice**
- **DEVELOPMENT:** *We build it to last, layer by layer.* Particles organise into layered **strata** with depth
- **DEPLOYMENT:** *We release it cleanly and keep it running.* Particles become a purposeful directed **stream**
- **DIGITAL PRODUCTS:** *We grow ideas into products people use.* Particles become a living, self-sustaining orbiting **cluster**

Use the same particle material and engine, with the same particle character (size mix, depth blur, streaking, curved staggered transit). These should feel like extensions of the opening sequence, not four unrelated demos. Each is one new formation file plus a registry entry, with correspondence-sorted targets. Scroll and focus drive the changes. Hover may add detail, but everything must be understandable without a pointer. Keep breathing room around the typography.

## 5. Burgundy statement

After the high-interaction capabilities sequence, deliberately reduce activity. Transition into a substantial burgundy environment using the semantic burgundy token (about `#621B2A`). This is the first major burgundy field. Particles recede almost completely. Statement in large editorial type with generous spacing:

*Most websites are assembled. Ours are shaped.*

This is visual rest. No unnecessary cards, illustrations or animation.

## 6. Placeholder proof strip

Keep a placeholder proof strip under the statement so the layout can be reviewed: three entries labelled `Project Name`, `Sector`, `Outcome`, each flagged `isPlaceholder: true` in the content data. Never use real company names, logos, numbers, testimonials or awards. It must be trivial to find and remove later.

## 7. Final conversion

Transition to a dark burgundy and charcoal environment. Mutable Matter gradually returns, as a quieter callback to the opening, not a replay: particles return from the page edges, converge toward the CTA and the ASL identity, and settle. Headline: *Let's build something that holds its shape.* Primary CTA: **Book a Call** linking to `/contact`. The ending should feel calm, focused and conversion-oriented.

## 8. Footer

Minimal: ASL wordmark, Capabilities, Work, About, Contact, a placeholder contact email flagged as placeholder, and a basic copyright area. Do not invent social accounts.

## 9. Colour rhythm

Space-black opening, then charcoal for transition and capabilities where appropriate, then burgundy for the statement, then charcoal and dark burgundy for the final conversion. Particles stay predominantly bone or cream. Gold stays rare. Burgundy must be a real environment, not just a button accent.

## 10. Typography

Follow `docs/ASL_BRAND_AND_STORY.md`: expressive display type used sparingly, readable body type, restrained mono labels, strong scale contrast. Keep text away from visually dense particle regions.

## 11. Architecture

The existing `ExperienceCanvas` stays the foundation. Do not mount a separate canvas per section. Sections request visual states from the same persistent particle system. Keep business content, scroll state, renderer state and formation generators separate, and stay compatible with future route-driven states.

## 12. Responsive behaviour

Desktop is the primary art-directed experience. Also build a robust mobile version: fewer particles and lower DPR per the tiers, simplified camera travel, the same conceptual sequence, readable copy, no text and particle collisions, sparing touch interaction, and native vertical scrolling. Do not simply shrink the desktop composition.

## 13. Accessibility and fallbacks

Keep all Task 01 fallbacks. The homepage must work with WebGL unavailable, with `prefers-reduced-motion`, with keyboard only, and with touch. Meaningful text stays in the DOM. The canvas stays `aria-hidden`. Reduced-motion and no-WebGL users see deliberate static or low-motion compositions, never an empty background.

## 14. Performance

Keep the adaptive quality tiers. Reduce or pause expensive particle work while the burgundy editorial section dominates. Avoid unnecessary React rerenders. Report measured fps only where a real GPU is available. Fps from a headless or cloud browser is not representative and must not lower particle counts.

## 15. Optional external pattern research

If network access exists, you may look at 21st.dev or similar sites for implementation mechanics only (typography transitions, nav behaviour, hover, scroll choreography, section transitions). Do not copy visual identities, and do not add a component library without a concrete engineering need.

## 16. Visual QA

Follow the Visual QA rules in `AGENTS.md`. Inspect 1440x900, 1920x1080 if practical and 390x844. Check for particle and text collisions, spacing, nav readability, capability transitions, the burgundy transition, the final CTA, overflow and responsiveness. Do at least two refinement passes for objective problems after the first implementation. Do not tune subjective aesthetics blind.

## 17. Quality gates

Verify and report honestly, marking anything you could not test:

- Homepage renders; opening sequence works forward and backward; hero UI reveals correctly
- All four capabilities render and each visibly changes the particle state
- Burgundy section is substantial and calm; final CTA works
- `/work` and `/contact` links work
- Responsive layout, reduced-motion fallback, no-WebGL fallback and keyboard navigation work
- WCAG AA text contrast where required
- No real company names, stats, testimonials or awards were introduced; placeholder content is flagged
- No console-breaking errors; lint, typecheck and production build pass

## 18. Screenshots

Save to `docs/screenshots/task-02/`: roaming, DNA, filaments, ASL mark with hero reveal, the four capability states, burgundy statement, final CTA, a full-page desktop capture where possible, and mobile hero plus mobile capabilities and CTA.

## 19. Final report

Use the report format in `AGENTS.md`, and add: final architecture summary, particle states implemented, Anime.js uses, desktop and mobile quality settings, remaining placeholder content, known visual limitations, and recommended next work for the Work, About and Contact pages. Do not fabricate success. State clearly any check you could not run.

Commit the result as `Task 02 complete`.
