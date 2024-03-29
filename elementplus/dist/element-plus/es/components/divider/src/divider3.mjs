import '../../../utils/index2.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props2.mjs';

const dividerProps = buildProps({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  contentPosition: {
    type: String,
    values: ["left", "center", "right"],
    default: "center"
  },
  borderStyle: {
    type: definePropType(String),
    default: "solid"
  }
});

export { dividerProps };
//# sourceMappingURL=divider3.mjs.map
