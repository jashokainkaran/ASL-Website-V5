# ASL brand integration

The four supplied files in `public/brand/` remain the implementation source assets, preserved as supplied. Under the Task 04 direction, the identity is provisional pending approval; no replacement mark has been invented. These files remain unchanged. Their baseline colours are retained in standalone assets. Production React UI uses their exact path geometry through `ASLMark` and real DOM text through `ASLLogo`.

- ASLMark inherits `currentColor`; its baseline uses `--brand-accent`, falling back to currentColor. Set these semantic contextual colours on a parent for light, charcoal or burgundy surfaces.
- Entry specks and opening particle material use pale neutral/bone; no burgundy or gold highlights enter the opening.
- The favicon uses the canonical mark with a monochrome baseline.
- `src/legacy-brand/` remains untouched source material, not imported by production.
- Task 05 uses one server-visible environmental entry veil on full app entry, including direct inner-route entry. It replaces the earlier branded inner SVG loader and the nonblocking homepage awakening. The homepage veil uses space-black, faint grain and tiny specks without a logo intro.
- The root instance prevents client-navigation replay. It gates interface DOM from server markup until fonts and renderer/fallback are ready, then clears a soft mask. Normal preparation/exit is about 2.2 seconds plus UI settle; delayed readiness extends the hold. Reduced motion uses a short animated fade. Failure bounds are 8 seconds to renderer fallback and 10 seconds to release.
- Keyboard Skip introduction restores focus to Skip to content after release. No-JS CSS exposes page content directly.
- Internal route transitions converge the existing primary canvas through its canonical mark using a shader uniform, then release to the existing route state over 0.7 seconds.
- Reduced motion reduces spatial displacement and retains drawing, navigation, CTA, and particle motion.

See `docs/handoffs/TASK_05_HANDOFF.md` for current architecture and verification. Task 03 reports describe historical behavior.
