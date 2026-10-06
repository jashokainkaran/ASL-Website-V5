// Mutable uniforms are intentionally outside React: no particle/frame state updates.
export const scene = { sceneProgress: 0, homeIntro: 0, entryProgress: 0, entryDebug: false, awakening: 1, routeMix: 0, archivePopulated: false, routeEntry: false, contactFocus: {x: 0, y: 0, strength: 0}, contactReceipt: 0, routeProgress: 1, routeFrom: 0, routeFromPreset: 'home', routePreset: 'home', routeActive: false, sectionPreview: '', manual: false, ready: false, rendered: false, checked: false, fallback: false, reduced: false, fps: 0, count: 60000, ambient: 1800, dpr: 1, state: 'filaments', bounds: {} as Record<string, {width:number;height:number}> };
export const tuning = {
 ambientDensity: 1, ambientBrightness: .1, ambientMovement: 1, ambientDepth: 1, textureIntensity: .018, materialIntensity: .3, contamination: .18, lightStrength: .07, dprCap: 2,
 sectionStrength: 1, openingScreens: 4, tier: 'auto', count: 60000, pointSize: 2.4, sizeDistribution: .7, largeShare: .0025,
 coreSize: .48, falloffSize: .72, particleBrightness: 1.05, particleOpacity: .76, densityResponse: 1,
 focalDistance: 10, blur: .65, stretch: 1, twinkle: .18, idleNoise: .11, curvature: 1,
 cloudDensity: .7, cloudSpread: 1, helixRadius: 1, helixLength: 1, helixTurns: 1.8, helixTwist: .3, helixYaw: .35, helixPitch: .12, helixRoll: .04, helixVariation: .14, cameraDepth: 0, helixOffset: 0, helixDepth: 1,
 filamentCount: 7, filamentSpread: 1, filamentDepth: 1, braid: .35, surfaceFold: 1, surfaceTwist: .7, surfaceDepth: 1, surfaceScale: 1, logoScale: 1, pointerEnabled: true, pointerRadius: 90, pointerStrength: .85,
 pointerFalloff: 1.15, pointerDepth: .6, recovery: 10, velocityInfluence: .25,
};
export type Tuning = typeof tuning;
