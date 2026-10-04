# ASL logo and loader export

## Included files

- `asl-mark-light.svg` — logo mark for charcoal or dark backgrounds.
- `asl-mark-dark.svg` — logo mark for light backgrounds.
- `asl-lockup-light.svg` — mark and ASL wordmark for dark backgrounds.
- `asl-lockup-dark.svg` — mark and ASL wordmark for light backgrounds.
- `ASLLoader.jsx` — standalone React loader plus reusable `ASLMark` and `ASLLogo` components.
- `asl-loader.css` — all loader and React logo styling.
- `ASLParticleGlobe.jsx` — standalone responsive React + Canvas globe.
- `asl-particle-globe.css` — globe surface, labels, focus state, and mobile styling.

## Loader requirements

```bash
npm install animejs
```

## React / Next.js usage

```jsx
'use client'

import { useState } from 'react'
import { ASLLoader, ASLLogo } from './ASLLoader'

export default function Page() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <ASLLoader onComplete={() => setLoading(false)} />}
      <header><ASLLogo /></header>
      <main>Your page</main>
    </>
  )
}
```

The loader plays once per browser tab session by default. To play it every time the component mounts:

```jsx
<ASLLoader playOncePerSession={false} onComplete={() => setLoading(false)} />
```

The loader intentionally runs regardless of the browser's reduced-motion preference, matching the current ASL project behavior.

## Particle globe usage

```jsx
import { ASLParticleGlobe } from './ASLParticleGlobe'

export default function GlobalSection() {
  return (
    <section style={{ maxWidth: 760 }}>
      <ASLParticleGlobe />
    </section>
  )
}
```

Optional controls:

```jsx
<ASLParticleGlobe autoRotate rotationSpeed={0.00115} />
```

The globe uses only React and the browser Canvas API. It supports automatic rotation, pointer dragging with momentum, arrow-key rotation, responsive scaling, Retina rendering, and off-screen animation pausing.

## Original project locations

- Logo and loader JSX: `src/Site.jsx` (`ASLMark`, `ASLLogo`, and `BrandLoader`).
- Loader CSS: `src/site.css` under `/* Brand formation */`.
- Globe component: `src/Site.jsx` (`ParticleGlobe`).
- Globe CSS: `src/site.css` under `/* Global */`.
