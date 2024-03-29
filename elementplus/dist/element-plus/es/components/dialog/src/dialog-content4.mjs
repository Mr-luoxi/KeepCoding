import '../../../utils/index2.mjs';
import { buildProps } from '../../../utils/vue/props2.mjs';
import { iconPropType } from '../../../utils/vue/icon2.mjs';

const dialogContentProps = buildProps({
  center: {
    type: Boolean,
    default: false
  },
  closeIcon: {
    type: iconPropType,
    default: ""
  },
  customClass: {
    type: String,
    default: ""
  },
  draggable: {
    type: Boolean,
    default: false
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  }
});
const dialogContentEmits = {
  close: () => true
};

export { dialogContentEmits, dialogContentProps };
//# sourceMappingURL=dialog-content4.mjs.map
