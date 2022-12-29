'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../tokens/index2.js');
var arrow = require('./arrow4.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var tooltipV2 = require('../../../tokens/tooltip-v22.js');

const __default__ = {
  name: "ElTooltipV2Arrow"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    ...arrow.tooltipV2ArrowProps,
    ...arrow.tooltipV2ArrowSpecialProps
  },
  setup(__props) {
    const props = __props;
    const { ns } = vue.inject(tooltipV2.tooltipV2RootKey);
    const { arrowRef } = vue.inject(tooltipV2.tooltipV2ContentKey);
    const arrowStyle = vue.computed(() => {
      const { style, width, height } = props;
      const namespace = ns.namespace.value;
      return {
        [`--${namespace}-tooltip-v2-arrow-width`]: `${width}px`,
        [`--${namespace}-tooltip-v2-arrow-height`]: `${height}px`,
        [`--${namespace}-tooltip-v2-arrow-border-width`]: `${width / 2}px`,
        [`--${namespace}-tooltip-v2-arrow-cover-width`]: width / 2 - 1,
        ...style || {}
      };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        style: vue.normalizeStyle(vue.unref(arrowStyle)),
        class: vue.normalizeClass(vue.unref(ns).e("arrow"))
      }, null, 6);
    };
  }
});
var TooltipV2Arrow = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/tooltip-v2/src/arrow.vue"]]);

exports["default"] = TooltipV2Arrow;
//# sourceMappingURL=arrow3.js.map
