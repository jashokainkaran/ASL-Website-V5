# Task08 evidence — 2026-10-06

Production browser QA on `http://127.0.0.1:3002`, Next start after production builds. Browser screenshots, not generated mockups. Some early frames remain as arrival/transition evidence; the viewport-specific hero and chapter files were refreshed after framing fixes. No video recording or real-device FPS claim.

## Sources

`sources/cafe-01.jpg`, `cafe-02.jpg`, `ember.jpg`, `nova.jpg`, `salon.jpg`, `atelier-noir.jpg`, `burger-join.jpg`: actual supplied websites captured before local preview encoding. See the handoff for name verification and source URLs.

## Final page evidence

| Requirement | Files under `final/` |
|---|---|
| Capabilities direct/internal arrival | `capabilities-direct-arrival.jpg`, `capabilities-internal-arrival.jpg` |
| Final desktop introduction | `capabilities-1440-hero.jpg` |
| Design and pointer sample | `design.jpg`, `design-pointer.jpg`, `design-services.jpg` |
| Other formations | `development.jpg`, `deployment.jpg`, `digital-products.jpg` |
| Progressive membrane-to-layers morph | `capability-transition.jpg` |
| Connection, project bridge, conversion | `connection.jpg`, `projects-bridge.jpg`, `capabilities-cta.jpg` |
| Capabilities phone | `capabilities-390-hero.jpg`, `capabilities-390-design.jpg`, `capabilities-390-development.jpg`, `capabilities-390-deployment.jpg`, `capabilities-390-digital-products.jpg`, `capabilities-390-services.jpg` |
| Capabilities responsive | `capabilities-1024-hero.jpg`, `capabilities-1024-development.jpg`, `capabilities-768-hero.jpg`, `capabilities-768-development.jpg` |
| Seven final desktop showcases | `project-ember.jpg`, `project-nova.jpg`, `project-salon.jpg`, `project-cafe-02.jpg`, `project-atelier-noir.jpg`, `project-burger-join.jpg`, `project-cafe-01.jpg` |
| Seven phone showcases | Same slug names with `project-390-` prefix |
| Project-to-project continuity | `project-transition.jpg` (Nova recedes as Salon arrives) |
| Actual outbound interaction | `external-link-ember.jpg`; all seven links opened separate tabs with the expected live titles/URLs |
| Projects responsive | `projects-1440-hero.jpg`, `projects-1024-hero.jpg`, `projects-1024-entry.jpg`, `projects-768-hero.jpg`, `projects-768-entry.jpg`, `projects-390-hero.jpg` |
| Projects closing scene | `projects-cta.jpg` |
| Home regression | `home-regression.jpg` |
| Clean console | `browser-console.json` |

## Responsive observations

| Viewport | Capabilities | Projects |
|---|---|---|
| 1440×900 | Alternating large formations, 2-column lists, clear primary copy | Left/right/wide media, caption below, perimeter matter |
| 1024×768 | Alternating compositions, single-column service lists | Scaled media/captions remain legible |
| 768×1024 | Portrait stack, extra visual slot prevents layer/headline collision | Existing archive composition retained; media and captions legible |
| 390×844 | Ordered arrival above headline; formation-before-copy chapters; native scrolling | All seven images loaded during traversal; titles always below media |

No horizontal document overflow observed at these dimensions. One persistent canvas remained after internal route changes. Capabilities DOM has 1 H1 and 33 service list items. Projects has 1 H1, 7 entries, and no `.archive-publication` empty state. This is sampled visual QA, not an exhaustive device/browser matrix.

Direct navigation/hard refresh first exposed only “Preparing ASL experience” and “Skip introduction” in the accessibility tree; content became available at entry ready. No frame-by-frame loader timing or flash measurement was taken. Same root gate code was preserved.

Home → Capabilities, Capabilities → Projects, Projects → Capabilities, Capabilities → Contact, browser Back/Forward and native/reverse scroll exercised. Keyboard Tab focused Start a Project with a solid visible outline; Return navigated to Contact. Preview/title external links use `_blank` and `noopener noreferrer`; all seven opened their approved URLs in separate tabs. No external form submitted.

Pointer drag/click sampled Design; `design-pointer.jpg` shows a local disturbance near the membrane fold. Reconstruction/history/recovery also covered by the existing pointer test. Native physical touch behaviour was not measured; responsive browser gestures are not a touch-device test.

Fresh final console: no error or missing-selector warning; inherited THREE.Clock deprecation remains. Earlier obsolete publication-selector warnings were fixed with conditional GSAP setup and are not present in the fresh final console JSON.

Reduced-motion override, no-WebGL override and no-JS override are unavailable in the browser tool. Their code paths were reviewed, but visual execution is **unverified**. Actual GPU performance, FPS, CWV and LCP remain unmeasured. No quality-tier defaults changed to compensate for this environment.

## Final commands

`pnpm lint`, `pnpm typecheck`, `node scripts/check-formations.cjs`, `node scripts/check-pointer.cjs`, `node scripts/check-contact.cjs`: pass. Final production build passes using `$env:ASL_BUILD_CPUS='1'; pnpm build`, all 11 static pages generated. Default worker run and one later memory-heavy run failed on this Windows host; final build passed after closing task-created external tabs and using the optional worker setting. No dependency/lockfile change.
