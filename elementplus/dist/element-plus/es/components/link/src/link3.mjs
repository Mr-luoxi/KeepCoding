import '../../../utils/index2.mjs';
import { buildProps } from '../../../utils/vue/props2.mjs';
import { iconPropType } from '../../../utils/vue/icon2.mjs';

const linkProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger", "default"],
    default: "default"
  },
  underline: {
    type: Boolean,
    default: true
  },
  disabled: { type: Boolean, default: false },
  href: { type: String, default: "" },
  icon: {
    type: iconPropType,
    default: ""
  }
});
const linkEmits = {
  click: (evt) => evt instanceof MouseEvent
};

export { linkEmits, linkProps };
//# sourceMappingURL=link3.mjs.map
