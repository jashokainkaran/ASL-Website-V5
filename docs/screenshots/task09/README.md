# Task 09 browser evidence

Captured through native Edge's UI against the local production preview on port 3004. Development-only WebGL-loss controls used port 3005. These are observed state captures, not a motion recording or FPS measurement. Browser chrome is retained; screenshots are local review artifacts. The final production rebuild includes the DNA clearance and fallback timing fixes.

## Required categories

| Brief category | Evidence |
| --- | --- |
| 1. First frame after technical Home cover | 01-desktop-emergence.png |
| 2. Beat 01 | 01-desktop-emergence.png |
| 3. Emergence close-up | 40-emergence-closeup.png (crop of 01) |
| 4. Beat 02 | 02-desktop-direction.png, 39-established-filaments.png |
| 5. Established filaments | 39-established-filaments.png |
| 6. Beat 03 | 04-desktop-structure.png |
| 7. Cloud | 03-desktop-cloud.png, 04-desktop-structure.png |
| 8. Beat 04 | 38-final-dna-clearance.png |
| 9. DNA construction | 05-desktop-dna-construction.png |
| 10. Completed DNA | 06-desktop-dna-hold.png, 38-final-dna-clearance.png |
| 11. Angled/depth DNA | 06-desktop-dna-hold.png, 38-final-dna-clearance.png |
| 12. DNA pointer disruption | 07-dna-pointer.png |
| 13. DNA reconstruction | 08-dna-recovery.png |
| 14. DNA → ASL | 09-dna-asl-transit.png |
| 15. ASL completed before header | 10-asl-before-header.png |
| 16. ASL pointer carve | 11-asl-pointer.png |
| 17. ASL reconstruction | 12-final-hero-recovered.png |
| 18. Final hero with header | 12-final-hero-recovered.png |
| 19. Textured black close-up | 41-textured-black-closeup.png (crop of 12) |
| 20. Home capability overview | 13-capability-design.png through 16-capability-products.png |
| 21. Project previews | 17-project-previews.png |
| 22. Burgundy statement | 18-burgundy-statement.png |
| 23. Final CTA | 19-final-cta.png |
| 24. Mobile story | 23-phone-entry.png, 24-phone-direction.png, 25-phone-dna.png |
| 25. Mobile hero | 26-phone-final-hero.png |
| 26. Reduced motion | 28-reduced-motion-dna.png through 31-tablet-reduced-hero.png |

## Additional checks and capture notes

- 20-projects-route.png, 21-capabilities-route.png, 22-contact-route.png: actual internal-route navigation. Back/Forward and persistent Home-return header were exercised interactively.
- 27-tablet-hero.png actually captures tablet DNA after resizing, rather than the hero its initial filename suggests. The tablet hero is recorded in 31-tablet-reduced-hero.png.
- 29-reduced-motion-entry-cover.png captures the technical cover on hard reload. 30-reduced-motion-emergence.png captures the cloud/Structure beat restored by browser scroll-position restoration, rather than the top-of-page emergence its initial filename suggests.
- 32-no-webgl-story.png and 33-no-webgl-final-hero.png were replaced after the fallback fix: no early canonical mark during Beat 01; resolved SVG hero and navigation after Skip intro. Development controls/browser console may remain visible in these diagnostic captures.
- 34-keyboard-skip-focus.png, 35-keyboard-hero-focus.png, 36-keyboard-cta-focus.png: visible keyboard focus before Skip intro, after activation and on the following Tab.
- 37-production-console.png: final rebuilt application has no observed application errors. Existing Three.Clock deprecation and Edge lazy-image intervention remain.
- 38-final-dna-clearance.png: authoritative final desktop DNA/copy spacing. Earlier DNA captures predate the .45→.95 desktop Y-offset adjustment.
- 39-established-filaments.png is a reverse-scroll capture after entering the site, so its persistent header is intentional. Fresh-entry header hiding is documented in 01–10.
- Phone/tablet widths were 390px/820px under device emulation. Actual available viewport height was approximately 611px; the device toolbar's 844px field did not establish an 844px viewport.
- Native desktop captures are 1536×816 including browser chrome. Pointer glow is the computer-use cursor indicator in the capture, not a new ASL particle colour.
- No actual touch device, representative GPU FPS, Core Web Vitals or motion recording was measured. Reduced motion was browser media emulation; WebGL fallback used the existing loss event. No-JS behavior was source-reviewed.

See ../../handoffs/TASK_09_HANDOFF.md for implementation, validation and external influence details. Stop after Task 09.
