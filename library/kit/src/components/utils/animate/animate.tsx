import { Spin } from './spin';
import { Shake } from './shake';
import { Scale } from './scale';

export const AnimateComponent = () => {
  return null;
};

type TAnimate = typeof AnimateComponent & {
  Spin: typeof Spin;
  Shake: typeof Shake;
  Scale: typeof Scale;
};

export const Animate: TAnimate = Object.assign(AnimateComponent, {
  Spin,
  Shake,
  Scale,
});

export { type TAnimationScaleRef } from './scale';
