'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index2.js');

const _sfc_main = vue.defineComponent({
  name: "ElMain",
  setup() {
    const ns = index.useNamespace("main");
    return {
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("main", {
    class: vue.normalizeClass(_ctx.ns.b())
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Main = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/container/src/main.vue"]]);

exports["default"] = Main;
//# sourceMappingURL=main2.js.map
