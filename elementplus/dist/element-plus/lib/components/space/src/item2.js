'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/index2.js');
require('../../../hooks/index2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var props = require('../../../utils/vue/props2.js');
var index = require('../../../hooks/use-namespace/index2.js');

const spaceItem = props.buildProps({
  prefixCls: {
    type: String,
    default: ""
  }
});
const _sfc_main = vue.defineComponent({
  props: spaceItem,
  setup(props) {
    const ns = index.useNamespace("space");
    const classes = vue.computed(() => `${props.prefixCls || ns.b()}__item`);
    return {
      classes
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(_ctx.classes)
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Item = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/space/src/item.vue"]]);

exports["default"] = Item;
//# sourceMappingURL=item2.js.map
