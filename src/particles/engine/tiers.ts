export const tiers = {
 high: {count:60000, ambient:1800, dpr:2, octaves:3, history:24},
 medium: {count:40000, ambient:1200, dpr:1.5, octaves:2, history:16},
 low: {count:18000, ambient:650, dpr:1.25, octaves:1, history:8},
} as const;
export type Tier = keyof typeof tiers;
export function detectTier(): Tier { return matchMedia('(max-width: 700px), (pointer: coarse)').matches ? 'low' : navigator.hardwareConcurrency <= 4 ? 'medium' : 'high'; }
