'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../tokens/index2.js');
require('../../../hooks/index2.js');
var breadcrumb = require('./breadcrumb4.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index2.js');
var breadcrumb$1 = require('../../../tokens/breadcrumb2.js');

const __default__ = {
  name: "ElBreadcrumb"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: breadcrumb.breadcrumbProps,
  setup(__props) {
    const props = __props;
    const ns = index.useNamespace("breadcrumb");
    const breadcrumb = vue.ref();
    vue.provide(breadcrumb$1.breadcrumbKey, props);
    vue.onMounted(() => {
      const items = breadcrumb.value.querySelectorAll(`.${ns.e("item")}`);
      if (items.length) {
        items[items.length - 1].setAttribute("aria-current", "page");
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "breadcrumb",
        ref: breadcrumb,
        class: vue.normalizeClass(vue.unref(ns).b()),
        "aria-label": "Breadcrumb",
        role: "navigation"
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Breadcrumb = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/breadcrumb/src/breadcrumb.vue"]]);

exports["default"] = Breadcrumb;
//# sourceMappingURL=breadcrumb3.js.map
