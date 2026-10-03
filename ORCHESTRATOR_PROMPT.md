# Orchestrator Prompt (paste this into Codex with GPT-6 Astra)

Do not put this file in the repo. Paste the text below into the chat. Everything else must already be in the repo (see the folder layout).

```text
You are the lead creative frontend engineer for the ASL website.

Your goal in this run is a complete, working ASL production landing page,
not just a technical prototype.

Before touching any code, read these completely:

1. AGENTS.md
2. docs/ASL_BRAND_AND_STORY.md
3. docs/TASK_00_BOOTSTRAP.md
4. docs/TASK_01_MUTABLE_MATTER_ENGINE.md
5. docs/TASK_02_PRODUCTION_HOME.md
6. docs/particle-reference/REFERENCE_NOTES.md
7. every image in docs/particle-reference/

AGENTS.md is the permanent engineering rulebook. ASL_BRAND_AND_STORY.md is
the creative source of truth. The reference images are behavioural
references only. Do not copy their artwork, colours, shapes or text.

RUN STRUCTURE

Execute sequentially: Task 00, then Task 01, then Task 02. The STOP lines at
the end of Task 00 and Task 01 are INTERNAL CHECKPOINTS for this run only.
At each checkpoint: run lint, typecheck and build, inspect the result, fix
failures, and commit with the message "Task 0X complete". Continue only if
that task's checks pass.

STOP RULE

If the Task 01 acceptance checks still fail after three repair attempts,
stop. Report exactly what fails and do not start Task 02. Task 02 builds on
the Task 01 engine, so do not build on a broken base.

IMPORTANT FACTS ABOUT THIS ENVIRONMENT

- Fps measured in a headless, cloud or software-rendered browser is NOT
  representative of a real GPU. Report it as "not representative". Never
  lower particle counts, quality or effects because of it. The user will
  tune on real hardware with the dev panel.
- You cannot reliably judge aesthetics. Use screenshots to catch objective
  failures only: a scene that is small or floating in an empty frame,
  hairline filaments, uniform identical dots, text over dense particles,
  overflow, broken layout, missing states. Fix those. Do not spend the run
  re-tuning subjective looks blind. Make sure the dev panel exposes the
  tuning controls so the user can adjust by eye.
- Numeric targets in the docs (particle counts, sample counts, durations)
  are starting targets. You may change one if the visual result or
  smoothness is clearly better. Report every change and why. The
  Composition, scale and flow rules are NOT negotiable.

ENGINEERING RULES

- Before implementing, audit the task documents for references that do not
  match AGENTS.md and resolve them against the actual headings.
- For Next.js client-only WebGL, use a pattern valid for the installed
  Next.js version. If dynamic(..., { ssr: false }) cannot be used directly in
  the root Server Component layout, use a small Client Component wrapper.
- If a documented detail is impossible or clearly incompatible with the
  installed framework version, choose the closest robust alternative that
  preserves the intended behaviour and document the deviation.
- Do not weaken the creative direction because a generic landing page would
  be easier. Do not add unnecessary libraries.
- Book a Call links to /contact. Explore Our Work links to /work.
- The placeholder proof strip stays, with every entry flagged
  isPlaceholder: true. Never use real company names, stats, testimonials or
  awards.
- Capture screenshots at 1440x900, 1920x1080 if practical, and 390x844.
  Save them to docs/screenshots/task-01/ and docs/screenshots/task-02/.
- Keep the project working throughout the run.

DO NOT ASK ME for routine implementation decisions. Stop to ask only for a
truly blocking issue that needs credentials, a destructive external action,
or information that cannot reasonably be inferred.

AT THE END

1. Run lint, typecheck and the production build.
2. Verify all routes and links.
3. Report actual performance where a real GPU allows it, otherwise say
   "not representative".
4. State clearly every check you could not run or could not judge.
5. Give a concise final report in the format described in AGENTS.md,
   including every deviation from the documents.

Do not fabricate success.
```
