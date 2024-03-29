'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index$1 = require('../../icon/index2.js');
require('../../../hooks/index2.js');
var link = require('./link3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index2.js');

const _hoisted_1 = ["href"];
const __default__ = {
  name: "ElLink"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: link.linkProps,
  emits: link.linkEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = index.useNamespace("link");
    function handleClick(event) {
      if (!props.disabled)
        emit("click", event);
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("a", {
        class: vue.normalizeClass([
          vue.unref(ns).b(),
          vue.unref(ns).m(_ctx.type),
          vue.unref(ns).is("disabled", _ctx.disabled),
          vue.unref(ns).is("underline", _ctx.underline && !_ctx.disabled)
        ]),
        href: _ctx.disabled || !_ctx.href ? void 0 : _ctx.href,
        onClick: handleClick
      }, [
        _ctx.icon ? (vue.openBlock(), vue.createBlock(vue.unref(index$1.ElIcon), { key: 0 }, {
          default: vue.withCtx(() => [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : vue.createCommentVNode("v-if", true),
        _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 1,
          class: vue.normalizeClass(vue.unref(ns).e("inner"))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2)) : vue.createCommentVNode("v-if", true),
        _ctx.$slots.icon ? vue.renderSlot(_ctx.$slots, "icon", { key: 2 }) : vue.createCommentVNode("v-if", true)
      ], 10, _hoisted_1);
    };
  }
});
var Link = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/link/src/link.vue"]]);

exports["default"] = Link;
//# sourceMappingURL=link4.js.map
