// Mutable uniforms are intentionally outside React: no particle/frame state updates.
export const scene = { sceneProgress: 0, awakening: 1, routeMix: 0, manual: false, ready: false, checked: false, fallback: false, reduced: false, fps: 0, count: 60000, ambient: 1800, dpr: 1, state: 'roam', bounds: {} as Record<string, {width:number;height:number}> };
export const tuning = {
 ambientDensity: 1, ambientBrightness: .1, ambientMovement: 1, ambientDepth: 1, textureIntensity: .018,
 openingScreens: 4, tier: 'auto', count: 60000, pointSize: 1.6, sizeDistribution: 1, largeShare: .012,
 focalDistance: 10, blur: .65, stretch: 1, twinkle: .18, idleNoise: .11, curvature: 1,
 cloudDensity: .7, cloudSpread: 1, helixRadius: 1, helixLength: 1, helixTurns: 1.8, helixTwist: .3, helixYaw: .14, helixOffset: 0, helixDepth: 1,
 filamentCount: 7, filamentSpread: 1, logoScale: 1, pointerRadius: 1.4, pointerStrength: .3,
 pointerFalloff: 2, swirl: .3, recovery: 3, trailLength: 24, trailWidth: .12,
};
export type Tuning = typeof tuning;
