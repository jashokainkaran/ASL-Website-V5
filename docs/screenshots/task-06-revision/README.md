# Task 06 revision evidence

Captured from the actual development and production browsers at 1440×900 desktop and 390×844 touch emulation (DPR 1.25). No synthetic artwork substitutes for implementation screenshots.

- particle-core-detail.png: primary core crop.
- filaments/cloud/dna/asl-before.png, -during.png and -recovered.png: local pointer sequences. Idle noise/twinkle/ambient movement were disabled only for these isolated recovery comparisons. 240ms active, pointer outside viewport, then 700ms recovery. Filament response is intentionally very gentle. recovery-metrics.json contains pixel differences over the material region, not a physics benchmark.
- desktop-membrane/layers/ribbons/shell.png: four production chapter compositions/copy. Corresponding *-dispersion.png files show local interaction.
- mobile-membrane/layers/ribbons/shell.png: native touch viewport compositions. mobile-touch-before/dna/recovered.png: touch input sequence; local response is subtle in still images.
- burgundy.png: restrained statement matter, grain and pigment environment.
- hero-copy.png: approved hero copy at the mark settlement (development state preview); production-hero-copy.png captured an earlier production scroll state and is not hero-copy evidence; desktop-copy-first.png and mobile-copy-first.png provide additional copy/layout evidence.
- loader-01-cover.png, loader-02-story.png, loader-03-emergence-start.png, loader-04-filaments.png: direct production entry sequence. loader-hard-refresh-cover.png: reload cover. Timings include instrumentation/assets; frames are samples, not continuous raster recordings.
- reduced-motion-dna.png: reduced-motion mode retains the material story and interaction.
- production-entry-results.json: hard-refresh sampling and persistent-canvas navigation results.

Lint, typecheck, production build, formation and pointer checks passed. Latest production console had no errors and one inherited THREE.Clock deprecation warning. Short RAF measurements remained approximately 60fps before and after; physical mobile/Safari/sustained thermal performance were not measured. No video was captured because Playwright ffmpeg is unavailable.

Full implementation, per-state tuning, performance caveats and file inventory: ../../handoffs/TASK_06_STATUS.md.
