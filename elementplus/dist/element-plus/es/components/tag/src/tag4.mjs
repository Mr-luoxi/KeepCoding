import '../../../utils/index2.mjs';
import '../../../constants/index2.mjs';
import { buildProps } from '../../../utils/vue/props2.mjs';
import { componentSizes } from '../../../constants/size2.mjs';

const tagProps = buildProps({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: componentSizes,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
});
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};

export { tagEmits, tagProps };
//# sourceMappingURL=tag4.mjs.map
