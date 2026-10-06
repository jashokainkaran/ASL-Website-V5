# Task 06 — Section refinement

The user requested richer section forms and more substantial particles, especially against burgundy. Item 9 of the earlier implementation kept folded surface/sculpture generators as previews; it did not replace the live lattice/strata/stream/cluster section defaults.

## Result

- Design: a folded, textured membrane with a broad cross-section and depth.
- Development: nine curved, interlocking layers.
- Deployment: three broad flowing ribbons with different phases and depth.
- Digital Products: a thick, open asymmetric shell.
- Existing section URL anchors and business copy remain intact; visible material labels now match the new shapes.
- Earlier formation generators remain available in the development preview controls.
- The Capabilities route target follows the new Design default.
- Section sprites gain 20% size and broader cores; brightness increases through capabilities and relaxes for the statement. Opening sprite treatment remains unchanged.
- Statement perimeter folds move further into view, gain thickness and retain depth without filling the text area.
- Mobile formations have their own width, height and vertical placement above the main copy.

## Architecture

The same primary population and deterministic longitudinal sampling continue through all states. Two replaceable section buffers remain lazy; no new resident hero attributes, per-frame JavaScript population updates, dependencies or canvases were introduced. High-tier primary attribute memory remains 8.4 MB. The canonical hero sequence is unchanged.

## Verification

Lint, typecheck, production build and the formation integrity script passed. All 12 section generators pass deterministic/finite-coordinate and camera-clearance checks at desktop and mobile aspect ratios.

Desktop 1440×900 and mobile 390×844 inspected; screenshots are in `docs/screenshots/task-06-refinement`. Reverse scrolling and the Design → Capabilities anchor transition were checked. Browser showed no runtime errors; the existing Three.Clock deprecation warning remains. Hardware GPU performance was not measured.

Sources: supplied particle reference contact sheet and written project direction; no external component or animation pattern was adopted. Existing Three.js/GLSL implements the new material forms. No material Anime.js changes were needed.
