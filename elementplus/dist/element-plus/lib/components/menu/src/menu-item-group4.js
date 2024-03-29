'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/index2.js');
require('../../../hooks/index2.js');
var menuItemGroup = require('./menu-item-group3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var error = require('../../../utils/error2.js');
var index = require('../../../hooks/use-namespace/index2.js');

const COMPONENT_NAME = "ElMenuItemGroup";
const _sfc_main = vue.defineComponent({
  name: COMPONENT_NAME,
  props: menuItemGroup.menuItemGroupProps,
  setup() {
    const instance = vue.getCurrentInstance();
    const menu = vue.inject("rootMenu");
    if (!menu)
      error.throwError(COMPONENT_NAME, "can not inject root menu");
    const ns = index.useNamespace("menu-item-group");
    const levelPadding = vue.computed(() => {
      if (menu.props.collapse)
        return 20;
      let padding = 20;
      let parent = instance.parent;
      while (parent && parent.type.name !== "ElMenu") {
        if (parent.type.name === "ElSubMenu") {
          padding += 20;
        }
        parent = parent.parent;
      }
      return padding;
    });
    return {
      levelPadding,
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("li", {
    class: vue.normalizeClass(_ctx.ns.b())
  }, [
    vue.createElementVNode("div", {
      class: vue.normalizeClass(_ctx.ns.e("title")),
      style: vue.normalizeStyle({ paddingLeft: `${_ctx.levelPadding}px` })
    }, [
      !_ctx.$slots.title ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
        vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
      ], 2112)) : vue.renderSlot(_ctx.$slots, "title", { key: 1 })
    ], 6),
    vue.createElementVNode("ul", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
var MenuItemGroup = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/menu/src/menu-item-group.vue"]]);

exports["default"] = MenuItemGroup;
//# sourceMappingURL=menu-item-group4.js.map
