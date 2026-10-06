import type {Context} from './shared';
/** Route framing only. Home's approved formations and deterministic correspondence stay intact. */
export function capabilityPlacement(points: Float32Array, context: Context) {
  const mobile = context.width < context.height;
  for (let i = 0; i < points.length; i += 3) {
    points[i] *= mobile ? .9 : .82;
    if (mobile) points[i + 1] = (points[i + 1] - context.height * .14) * 1.25 + context.height * .115;
  }
  return points;
}
