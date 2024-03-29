'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/index2.js');
require('../../../hooks/index2.js');
var icon = require('./icon3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index2.js');
var types = require('../../../utils/types2.js');
var style = require('../../../utils/dom/style2.js');

const __default__ = {
  name: "ElIcon",
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: icon.iconProps,
  setup(__props) {
    const props = __props;
    const ns = index.useNamespace("icon");
    const style$1 = vue.computed(() => {
      if (!props.size && !props.color)
        return {};
      return {
        fontSize: types.isUndefined(props.size) ? void 0 : style.addUnit(props.size),
        "--color": props.color
      };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("i", vue.mergeProps({
        class: vue.unref(ns).b(),
        style: vue.unref(style$1)
      }, _ctx.$attrs), [
        vue.renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/icon/src/icon.vue"]]);

exports["default"] = Icon;
//# sourceMappingURL=icon4.js.map
