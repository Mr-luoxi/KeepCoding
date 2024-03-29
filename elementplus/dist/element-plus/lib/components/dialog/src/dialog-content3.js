'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../icon/index2.js');
require('../../../utils/index2.js');
require('../../../tokens/index2.js');
var dialogContent = require('./dialog-content4.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var icon = require('../../../utils/vue/icon2.js');
var dialog = require('../../../tokens/dialog2.js');

const _hoisted_1 = ["aria-label"];
const __default__ = { name: "ElDialogContent" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: dialogContent.dialogContentProps,
  emits: dialogContent.dialogContentEmits,
  setup(__props) {
    const { Close } = icon.CloseComponents;
    const { dialogRef, headerRef, ns, style } = vue.inject(dialog.dialogInjectionKey);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "dialogRef",
        ref: dialogRef,
        class: vue.normalizeClass([
          vue.unref(ns).b(),
          vue.unref(ns).is("fullscreen", _ctx.fullscreen),
          vue.unref(ns).is("draggable", _ctx.draggable),
          { [vue.unref(ns).m("center")]: _ctx.center },
          _ctx.customClass
        ]),
        "aria-modal": "true",
        role: "dialog",
        "aria-label": _ctx.title || "dialog",
        style: vue.normalizeStyle(vue.unref(style)),
        onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
        }, ["stop"]))
      }, [
        vue.createElementVNode("div", {
          ref_key: "headerRef",
          ref: headerRef,
          class: vue.normalizeClass(vue.unref(ns).e("header"))
        }, [
          vue.renderSlot(_ctx.$slots, "title", {}, () => [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(vue.unref(ns).e("title"))
            }, vue.toDisplayString(_ctx.title), 3)
          ])
        ], 2),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(ns).e("body"))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.$slots.footer ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass(vue.unref(ns).e("footer"))
        }, [
          vue.renderSlot(_ctx.$slots, "footer")
        ], 2)) : vue.createCommentVNode("v-if", true),
        _ctx.showClose ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 1,
          "aria-label": "close",
          class: vue.normalizeClass(vue.unref(ns).e("headerbtn")),
          type: "button",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        }, [
          vue.createVNode(vue.unref(index.ElIcon), {
            class: vue.normalizeClass(vue.unref(ns).e("close"))
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.closeIcon || vue.unref(Close))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 2)) : vue.createCommentVNode("v-if", true)
      ], 14, _hoisted_1);
    };
  }
});
var ElDialogContent = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/dialog/src/dialog-content.vue"]]);

exports["default"] = ElDialogContent;
//# sourceMappingURL=dialog-content3.js.map
