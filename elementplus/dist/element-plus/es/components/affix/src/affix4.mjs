import '../../../utils/index2.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props2.mjs';

const affixProps = buildProps({
  zIndex: {
    type: definePropType([Number, String]),
    default: 100
  },
  target: {
    type: String,
    default: ""
  },
  offset: {
    type: Number,
    default: 0
  },
  position: {
    type: String,
    values: ["top", "bottom"],
    default: "top"
  }
});
const affixEmits = {
  scroll: ({ scrollTop, fixed }) => typeof scrollTop === "number" && typeof fixed === "boolean",
  change: (fixed) => typeof fixed === "boolean"
};

export { affixEmits, affixProps };
//# sourceMappingURL=affix4.mjs.map
