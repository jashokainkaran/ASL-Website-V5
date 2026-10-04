# ASL brand integration

The four supplied files in `public/brand/` remain the canonical source assets, preserved as supplied. Their baseline colours are retained in standalone assets. Production React UI uses their exact path geometry through `ASLMark` and real DOM text through `ASLLogo`.

- ASLMark inherits `currentColor`; its baseline uses `--brand-accent`, falling back to currentColor. Set these semantic contextual colours on a parent for light, charcoal or burgundy surfaces.
- The loader explicitly uses bone for `--brand-accent`. Opening particle material uses pale neutral/bone; no burgundy or gold highlights enter the opening.
- The favicon uses the canonical mark with a monochrome baseline.
- `src/legacy-brand/` remains untouched source material, not imported by production.
- `ASLLoader` adapts the legacy per-stroke Anime.js choreography into a 1.6-second Incomplete Signal intro. It never completes the whole stroke drawing, never adds a loading percentage, and never gates the application.
- Session storage is optional and guarded. Completion has a 1.85-second timer and a 1.9-second CSS safety cutoff. Root-layout mounting preserves session behavior across routes. The loader is noninteractive and cannot trap focus or pointer input.
- Reduced motion reduces spatial displacement and retains drawing, navigation, CTA, and particle motion.

See `docs/BUILDER_2_REPORT.md` for implementation and verification evidence.
