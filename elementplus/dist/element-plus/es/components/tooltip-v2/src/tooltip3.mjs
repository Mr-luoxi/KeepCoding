import '../../../utils/index2.mjs';
import { tooltipV2RootProps } from './root3.mjs';
import { tooltipV2TriggerProps } from './trigger3.mjs';
import { tooltipV2ArrowProps } from './arrow4.mjs';
import { tooltipV2ContentProps } from './content3.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props2.mjs';

const tooltipV2Props = buildProps({
  ...tooltipV2RootProps,
  ...tooltipV2ArrowProps,
  ...tooltipV2TriggerProps,
  ...tooltipV2ContentProps,
  alwaysOn: Boolean,
  fullTransition: Boolean,
  transitionProps: {
    type: definePropType(Object),
    default: null
  },
  teleported: Boolean,
  to: {
    type: definePropType(String),
    default: "body"
  }
});

export { tooltipV2Props };
//# sourceMappingURL=tooltip3.mjs.map
