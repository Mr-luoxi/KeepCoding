import '../../utils/index2.mjs';
import Popper from './src/popper4.mjs';
export { default as ElPopperArrow } from './src/arrow4.mjs';
export { default as ElPopperTrigger } from './src/trigger4.mjs';
export { default as ElPopperContent } from './src/content4.mjs';
export { Effect, usePopperProps } from './src/popper3.mjs';
export { usePopperTriggerProps } from './src/trigger3.mjs';
export { usePopperContentProps, usePopperCoreConfigProps } from './src/content3.mjs';
export { usePopperArrowProps } from './src/arrow3.mjs';
export { useDeprecateAppendToBody } from './src/deprecation2.mjs';
import { withInstall } from '../../utils/vue/install2.mjs';

const ElPopper = withInstall(Popper);

export { ElPopper, ElPopper as default };
//# sourceMappingURL=index2.mjs.map
