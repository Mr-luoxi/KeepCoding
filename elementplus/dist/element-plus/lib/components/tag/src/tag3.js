'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index$2 = require('../../icon/index2.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../hooks/index2.js');
var tag = require('./tag4.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-common-props/index2.js');
var index$1 = require('../../../hooks/use-namespace/index2.js');

const __default__ = {
  name: "ElTag"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: tag.tagProps,
  emits: tag.tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const tagSize = index.useSize();
    const ns = index$1.useNamespace("tag");
    const classes = vue.computed(() => {
      const { type, hit, effect, closable, round } = props;
      return [
        ns.b(),
        ns.is("closable", closable),
        ns.m(type),
        ns.m(tagSize.value),
        ns.m(effect),
        ns.is("hit", hit),
        ns.is("round", round)
      ];
    });
    const handleClose = (event) => {
      event.stopPropagation();
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return !_ctx.disableTransitions ? (vue.openBlock(), vue.createElementBlock("span", {
        key: 0,
        class: vue.normalizeClass(vue.unref(classes)),
        style: vue.normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: handleClick
      }, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(vue.unref(ns).e("content"))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? (vue.openBlock(), vue.createBlock(vue.unref(index$2.ElIcon), {
          key: 0,
          class: vue.normalizeClass(vue.unref(ns).e("close")),
          onClick: handleClose
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(vue.unref(iconsVue.Close))
          ]),
          _: 1
        }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
      ], 6)) : (vue.openBlock(), vue.createBlock(vue.Transition, {
        key: 1,
        name: `${vue.unref(ns).namespace.value}-zoom-in-center`
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("span", {
            class: vue.normalizeClass(vue.unref(classes)),
            style: vue.normalizeStyle({ backgroundColor: _ctx.color }),
            onClick: handleClick
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(vue.unref(ns).e("content"))
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 2),
            _ctx.closable ? (vue.openBlock(), vue.createBlock(vue.unref(index$2.ElIcon), {
              key: 0,
              class: vue.normalizeClass(vue.unref(ns).e("close")),
              onClick: handleClose
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(vue.unref(iconsVue.Close))
              ]),
              _: 1
            }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
          ], 6)
        ]),
        _: 3
      }, 8, ["name"]));
    };
  }
});
var Tag = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/tag/src/tag.vue"]]);

exports["default"] = Tag;
//# sourceMappingURL=tag3.js.map
