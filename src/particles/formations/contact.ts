import {sample, hash, cross, type Generator} from './shared';
/** ATTRACT: quiet perimeter paths converge toward the form's outer margin. */
export const contact: Generator = (count, context) => sample(count, (u, i) => {
  const angle = u * Math.PI * 2;
  const mobile = context.width < context.height;
  const spread = cross(i, .04 + hash(i, 37) * .07);
  // Quiet paths occupy the gutter and outer form margin, never the input centre.
  const centre = mobile ? 0 : context.width * .22;
  return [
    centre + Math.cos(angle) * context.width * (mobile ? .48 : .27) + spread[0],
    Math.sin(angle) * context.height * .48 + spread[1],
    Math.sin(angle * 2) * .25 + (hash(i, 38) - .5) * .3,
  ];
});
