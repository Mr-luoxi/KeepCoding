'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index2.js');
require('../../../utils/index2.js');
var token = require('./token2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index2.js');
var resizeEvent = require('../../../utils/dom/resize-event2.js');

const _sfc_main = vue.defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select = vue.inject(token.selectKey);
    const ns = index.useNamespace("select");
    const popperClass = vue.computed(() => select.props.popperClass);
    const isMultiple = vue.computed(() => select.props.multiple);
    const isFitInputWidth = vue.computed(() => select.props.fitInputWidth);
    const minWidth = vue.ref("");
    function updateMinWidth() {
      var _a;
      minWidth.value = `${(_a = select.selectWrapper) == null ? void 0 : _a.getBoundingClientRect().width}px`;
    }
    vue.onMounted(() => {
      updateMinWidth();
      resizeEvent.addResizeListener(select.selectWrapper, updateMinWidth);
    });
    vue.onBeforeUnmount(() => {
      resizeEvent.removeResizeListener(select.selectWrapper, updateMinWidth);
    });
    return {
      ns,
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass([_ctx.ns.b("dropdown"), _ctx.ns.is("multiple", _ctx.isMultiple), _ctx.popperClass]),
    style: vue.normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 6);
}
var ElSelectMenu = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/select/src/select-dropdown.vue"]]);

exports["default"] = ElSelectMenu;
//# sourceMappingURL=select-dropdown2.js.map
