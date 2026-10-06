# Task 06 browser evidence

Captured 2026-10-05. Desktop 1440×900; mobile 390×844 touch emulation. Files are actual browser screenshots. Formation diagnostics use development progress controls; chapter shots use real canonical scroll. No default particle counts were lowered.

| Evidence | Files |
|---|---|
| First available hard-entry frame, early/mid/pre-clear | 01–04; production-first-sampled-frame.png; production-hard-refresh-first-sampled.png |
| First available frame after cover, live emergence / proto-filaments | 05–07; production-first-after-clear.png |
| Fully established filaments | 08-filaments-complete.png |
| Filament→cloud / cloud hold | 09-filaments-to-cloud.png; 10-dense-cloud.png |
| Spatial DNA and its angled depth | 11-spatial-dna.png; 12-dna-depth-angle.png |
| Direct DNA→ASL / settled identity and UI | 13-dna-to-asl.png; 14-asl-hero-payoff.png |
| Capability chapters | 15-design.png through 18-digital-products.png |
| Calm burgundy statement | 19-burgundy-statement.png |
| Persistent Home→Work / settled placeholder | 20-home-to-work-depth-passage.png; 20b-work-settled.png |
| Inner direct-entry and compact identity | 21-direct-work-entry.png; production-direct-work-entry.png; 21b-compact-inner-identity.png (development replay frozen at .68) |
| Mobile entry, filaments, DNA, hero UI | 22 through 22d |
| Reduced entry, filaments, DNA, hero UI | 23 through 23d |
| Preserved section forms | section-surface-preview.png; section-shell-preview.png |
| Functional fallback DOM | no-webgl-home.png; no-js-home.png |

Early development captures can include development controls after the gate clears. Production captures contain no development UI. 01–08 came from a fresh browser context with font response delays requested to test a readiness hold. 09–14 are diagnostic progress samples; 15–19 use real scroll. The production hard-refresh capture is a separate actual reload.

First-frame caveat: screenshot APIs capture the first available frame after DOM availability, not the exact rasterisation instant of first paint. Initial HTML/critical styles and requestAnimationFrame visibility sampling provide the architectural evidence. In a development run 333 samples recorded zero pending frames with visible interface; the first ready frame had homeIntro=0. Production fresh entry, reload and inner reload also recorded zero content bleed. Mobile/reduced samples had zero bleed and zero overflow.

Video recording was attempted but Playwright's ffmpeg binary is unavailable. Screenshots satisfy the evidence path; no video tooling was installed.
