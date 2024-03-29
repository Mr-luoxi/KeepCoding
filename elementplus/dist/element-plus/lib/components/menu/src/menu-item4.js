'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../tooltip/index2.js');
require('../../popper/index2.js');
require('../../../utils/index2.js');
require('../../../hooks/index2.js');
var useMenu = require('./use-menu2.js');
var menuItem = require('./menu-item3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index$1 = require('../../../hooks/use-namespace/index2.js');
var error = require('../../../utils/error2.js');
var popper = require('../../popper/src/popper3.js');

const COMPONENT_NAME = "ElMenuItem";
const _sfc_main = vue.defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElTooltip: index.ElTooltip
  },
  props: menuItem.menuItemProps,
  emits: menuItem.menuItemEmits,
  setup(props, { emit }) {
    const instance = vue.getCurrentInstance();
    const rootMenu = vue.inject("rootMenu");
    const nsMenu = index$1.useNamespace("menu");
    const nsMenuItem = index$1.useNamespace("menu-item");
    if (!rootMenu)
      error.throwError(COMPONENT_NAME, "can not inject root menu");
    const { parentMenu, paddingStyle, indexPath } = useMenu["default"](instance, vue.toRef(props, "index"));
    const subMenu = vue.inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      error.throwError(COMPONENT_NAME, "can not inject sub menu");
    const active = vue.computed(() => props.index === rootMenu.activeIndex);
    const item = vue.reactive({
      index: props.index,
      indexPath,
      active
    });
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route
        });
        emit("click", item);
      }
    };
    vue.onMounted(() => {
      subMenu.addSubMenu(item);
      rootMenu.addMenuItem(item);
    });
    vue.onBeforeUnmount(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeMenuItem(item);
    });
    return {
      Effect: popper.Effect,
      parentMenu,
      rootMenu,
      paddingStyle,
      active,
      nsMenu,
      nsMenuItem,
      handleClick
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = vue.resolveComponent("el-tooltip");
  return vue.openBlock(), vue.createElementBlock("li", {
    class: vue.normalizeClass([
      _ctx.nsMenuItem.b(),
      _ctx.nsMenuItem.is("active", _ctx.active),
      _ctx.nsMenuItem.is("disabled", _ctx.disabled)
    ]),
    role: "menuitem",
    tabindex: "-1",
    style: vue.normalizeStyle(_ctx.paddingStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.parentMenu.type.name === "ElMenu" && _ctx.rootMenu.props.collapse && _ctx.$slots.title ? (vue.openBlock(), vue.createBlock(_component_el_tooltip, {
      key: 0,
      effect: _ctx.Effect.DARK,
      placement: "right",
      "fallback-placements": ["left"],
      persistent: ""
    }, {
      content: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "title")
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.nsMenu.be("tooltip", "trigger"))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["effect"])) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
      vue.renderSlot(_ctx.$slots, "default"),
      vue.renderSlot(_ctx.$slots, "title")
    ], 64))
  ], 6);
}
var MenuItem = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/menu/src/menu-item.vue"]]);

exports["default"] = MenuItem;
//# sourceMappingURL=menu-item4.js.map
