# Task08 motion / visual revision evidence

Production browser observations at 1440×900, 1024×768, 768×1024 and 390×844. Screenshots are sampled frames, not recordings, GPU benchmarks or exact first-paint timestamps. Earlier Task08 evidence is historical; this directory documents the revision.

| Required observation | Files |
|---|---|
| First observed hard-refresh frame / early cover | `loader-0.jpg`, `loader-1.jpg` |
| Canonical identity resolved | `loader-2.jpg`, `loader-3.jpg` |
| Cover exit and destination arrival | `loader-4.jpg` through `loader-8.jpg` |
| Cover/interface phase observations | `loader-frames.json` (DOM observations follow each screenshot; not exact simultaneous timestamps) |
| Other direct entries | `projects-hard-entry.jpg`, `contact-hard-entry.jpg` |
| Internal routes, branded cover hidden | `internal-home-capabilities.jpg`, `internal-capabilities-projects.jpg`, `internal-projects-contact.jpg`, `internal-contact-capabilities.jpg`, `internal-contact-home.jpg` |
| Design entering / formed / local pointer | `design-entering.jpg`, `design-final.jpg`, `design-pointer.jpg` |
| Development transformation / formed | `development-transformation.jpg`, `development-final.jpg` |
| Deployment transformation / propagation | `deployment-transformation.jpg`, `deployment-final.jpg` |
| Product transformation / coordination | `products-transformation.jpg`, `products-final.jpg` |
| Phone capability states | `mobile-design.jpg`, `mobile-development.jpg`, `mobile-deployment.jpg`, `mobile-products.jpg` |
| Tablet / landscape | `tablet-design.jpg`, `landscape-design.jpg` |
| Projects regression | `mobile-projects-regression.jpg` |
| Console | `browser-console.json` |

`entry-*` files are preliminary cover observations from the first implementation pass; use the `loader-*` sequence for final choreography. Later loader frames duplicate the settled arrival. The pointer sample predates only the final label/framing CSS adjustment; the pointer engine did not change.

Observed: pending cover opacity 1 with interface hidden; revealing interface visible under withdrawing cover; ready cover hidden. Internal routes and browser Back/Forward preserve hidden cover. One canvas, one H1, all 33 service items and no horizontal overflow observed. Projects retains seven entries/order and safe new-tab title links. No form submission.

Mobile visual inspection caught and corrected a field/label collision. Final phone images have formation space above headings and intact copy. Final desktop labels sit in the copy half. Native scroll/reverse morph and local pointer drag exercised.

Console: inherited THREE.Clock warning; no shader/runtime errors. Actual OS-reduced-motion, forced no-WebGL/no-JS, physical touch, FPS and CWV remain unmeasured. Reduced/fallback branches reviewed in source. The server-rendered cover/critical CSS establishes pre-hydration coverage; the tool captures first observed refresh state rather than the browser's first raster frame.
