'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../tokens/index2.js');
require('../../../hooks/index2.js');
var buttonGroup = require('./button-group3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var button = require('../../../tokens/button2.js');
var index = require('../../../hooks/use-namespace/index2.js');

const __default__ = {
  name: "ElButtonGroup"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: buttonGroup.buttonGroupProps,
  setup(__props) {
    const props = __props;
    vue.provide(button.buttonGroupContextKey, vue.reactive({
      size: vue.toRef(props, "size"),
      type: vue.toRef(props, "type")
    }));
    const ns = index.useNamespace("button");
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(`${vue.unref(ns).b("group")}`)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var ButtonGroup = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/button/src/button-group.vue"]]);

exports["default"] = ButtonGroup;
//# sourceMappingURL=button-group4.js.map
