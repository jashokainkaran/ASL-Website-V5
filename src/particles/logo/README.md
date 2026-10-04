# Canonical ASL identity

`path.ts` contains the exact absolute line coordinates of the four mark-only paths in `public/brand/asl-mark-light.svg`. `markPaths` feeds ASLMark and `getASLMarkPoints(count)` (also exported as `getLogoPoints`) deterministically samples their stroked area. No font, lockup text, provisional spline, or fictitious connector is sampled.

Ascending arc length supplies correspondence. Stroke width is sampled with deterministic lateral offsets; the thin depth distribution keeps the silhouette legible. `formations/logo.ts` handles viewport composition. Final convergence reuses the same buffer with a shader transform, without a duplicate attribute.

When the supplied asset changes, update the coordinate adapter and compare all path lengths and sampled coordinates against the source SVG. Browser verification for Builder 2 found zero deviation at 21 samples on each path. Run `node scripts/check-formations.cjs` for count, finite-coordinate, determinism, attribute-budget and buffer-reuse checks.
