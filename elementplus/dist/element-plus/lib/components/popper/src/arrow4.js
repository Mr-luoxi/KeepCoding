'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index2.js');
require('../../../tokens/index2.js');
var arrow = require('./arrow3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index2.js');
var popper = require('../../../tokens/popper2.js');

const __default__ = {
  name: "ElPopperArrow",
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: arrow.usePopperArrowProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = index.useNamespace("popper");
    const { arrowOffset, arrowRef } = vue.inject(popper.POPPER_CONTENT_INJECTION_KEY, void 0);
    vue.watch(() => props.arrowOffset, (val) => {
      arrowOffset.value = val;
    });
    vue.onBeforeUnmount(() => {
      arrowRef.value = void 0;
    });
    expose({
      arrowRef
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        class: vue.normalizeClass(vue.unref(ns).e("arrow")),
        "data-popper-arrow": ""
      }, null, 2);
    };
  }
});
var ElPopperArrow = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/popper/src/arrow.vue"]]);

exports["default"] = ElPopperArrow;
//# sourceMappingURL=arrow4.js.map
