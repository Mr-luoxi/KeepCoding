'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../tokens/index2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var popper = require('../../../tokens/popper2.js');

const __default__ = {
  name: "ElPopperRoot",
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  setup(__props, { expose }) {
    const triggerRef = vue.ref();
    const popperInstanceRef = vue.ref();
    const contentRef = vue.ref();
    const referenceRef = vue.ref();
    const popperProvides = {
      triggerRef,
      popperInstanceRef,
      contentRef,
      referenceRef
    };
    expose(popperProvides);
    vue.provide(popper.POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return vue.renderSlot(_ctx.$slots, "default");
    };
  }
});
var Popper = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/popper/src/popper.vue"]]);

exports["default"] = Popper;
//# sourceMappingURL=popper4.js.map
