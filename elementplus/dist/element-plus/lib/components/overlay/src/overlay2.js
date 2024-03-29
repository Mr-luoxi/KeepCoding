'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/index2.js');
require('../../../hooks/index2.js');
var props = require('../../../utils/vue/props2.js');
var index = require('../../../hooks/use-namespace/index2.js');
var index$1 = require('../../../hooks/use-same-target/index2.js');
var vnode = require('../../../utils/vue/vnode2.js');

const overlayProps = props.buildProps({
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: {
    type: Boolean,
    default: false
  },
  overlayClass: {
    type: props.definePropType([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: props.definePropType([String, Number])
  }
});
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent
};
var Overlay = vue.defineComponent({
  name: "ElOverlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit }) {
    const ns = index.useNamespace("overlay");
    const onMaskClick = (e) => {
      emit("click", e);
    };
    const { onClick, onMousedown, onMouseup } = index$1.useSameTarget(props.customMaskEvent ? void 0 : onMaskClick);
    return () => {
      return props.mask ? vue.createVNode("div", {
        class: [ns.b(), props.overlayClass],
        style: {
          zIndex: props.zIndex
        },
        onClick,
        onMousedown,
        onMouseup
      }, [vue.renderSlot(slots, "default")], vnode.PatchFlags.STYLE | vnode.PatchFlags.CLASS | vnode.PatchFlags.PROPS, ["onClick", "onMouseup", "onMousedown"]) : vue.h("div", {
        class: props.overlayClass,
        style: {
          zIndex: props.zIndex,
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }, [vue.renderSlot(slots, "default")]);
    };
  }
});

exports["default"] = Overlay;
exports.overlayEmits = overlayEmits;
exports.overlayProps = overlayProps;
//# sourceMappingURL=overlay2.js.map
