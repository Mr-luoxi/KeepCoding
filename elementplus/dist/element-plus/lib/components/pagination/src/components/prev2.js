'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../../icon/index2.js');
var iconsVue = require('@element-plus/icons-vue');
var pluginVue_exportHelper = require('../../../../_virtual/plugin-vue_export-helper.js');

const paginationPrevProps = {
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String,
    default: ""
  }
};
const _sfc_main = vue.defineComponent({
  name: "ElPaginationPrev",
  components: {
    ElIcon: index.ElIcon,
    ArrowLeft: iconsVue.ArrowLeft
  },
  props: paginationPrevProps,
  emits: ["click"],
  setup(props) {
    const internalDisabled = vue.computed(() => props.disabled || props.currentPage <= 1);
    return {
      internalDisabled
    };
  }
});
const _hoisted_1 = ["disabled", "aria-disabled"];
const _hoisted_2 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_left = vue.resolveComponent("arrow-left");
  const _component_el_icon = vue.resolveComponent("el-icon");
  return vue.openBlock(), vue.createElementBlock("button", {
    type: "button",
    class: "btn-prev",
    disabled: _ctx.internalDisabled,
    "aria-disabled": _ctx.internalDisabled,
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
  }, [
    _ctx.prevText ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, vue.toDisplayString(_ctx.prevText), 1)) : (vue.openBlock(), vue.createBlock(_component_el_icon, { key: 1 }, {
      default: vue.withCtx(() => [
        vue.createVNode(_component_arrow_left)
      ]),
      _: 1
    }))
  ], 8, _hoisted_1);
}
var Prev = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/pagination/src/components/prev.vue"]]);

exports["default"] = Prev;
//# sourceMappingURL=prev2.js.map
