# ASL brand integration

The four supplied files in `public/brand/` remain the canonical source assets, preserved as supplied. Their baseline colours are retained in standalone assets. Production React UI uses their exact path geometry through `ASLMark` and real DOM text through `ASLLogo`.

- ASLMark inherits `currentColor`; its baseline uses `--brand-accent`, falling back to currentColor. Set these semantic contextual colours on a parent for light, charcoal or burgundy surfaces.
- The loader explicitly uses bone for `--brand-accent`. Opening particle material uses pale neutral/bone; no burgundy or gold highlights enter the opening.
- The favicon uses the canonical mark with a monochrome baseline.
- `src/legacy-brand/` remains untouched source material, not imported by production.
- `ASLLoader` now runs only on direct inner-route entry. Home begins directly in Mutable Matter. The superseded Incomplete Signal behavior is retained only in historical Builder 2 documentation.
- 360 canonical sampled SVG particles gather, curve toward targets, overshoot and settle, with 18 residual points. Anime.js owns the 1.27-second non-scroll sequence; no second WebGL canvas is created. This also provides the no-WebGL identity path.
- No session storage is needed. The root instance prevents client-navigation replay. Timer/CSS safety cutoffs are 1.45/1.5 seconds. Focus or pointer interaction dismisses the noninteractive overlay immediately.
- Internal route transitions converge the existing primary canvas through its canonical mark using a shader uniform, then release to the existing route state over 0.7 seconds.
- Reduced motion reduces spatial displacement and retains drawing, navigation, CTA, and particle motion.

See `docs/TASK_03_REPORT.md` for implementation and verification evidence.
