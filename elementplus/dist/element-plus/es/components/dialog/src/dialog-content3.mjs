import { defineComponent, inject, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, withModifiers, createElementVNode, renderSlot, toDisplayString, createCommentVNode, createVNode, withCtx, createBlock, resolveDynamicComponent } from 'vue';
import { ElIcon } from '../../icon/index2.mjs';
import '../../../utils/index2.mjs';
import '../../../tokens/index2.mjs';
import { dialogContentProps, dialogContentEmits } from './dialog-content4.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { CloseComponents } from '../../../utils/vue/icon2.mjs';
import { dialogInjectionKey } from '../../../tokens/dialog2.mjs';

const _hoisted_1 = ["aria-label"];
const __default__ = { name: "ElDialogContent" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dialogContentProps,
  emits: dialogContentEmits,
  setup(__props) {
    const { Close } = CloseComponents;
    const { dialogRef, headerRef, ns, style } = inject(dialogInjectionKey);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "dialogRef",
        ref: dialogRef,
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).is("fullscreen", _ctx.fullscreen),
          unref(ns).is("draggable", _ctx.draggable),
          { [unref(ns).m("center")]: _ctx.center },
          _ctx.customClass
        ]),
        "aria-modal": "true",
        role: "dialog",
        "aria-label": _ctx.title || "dialog",
        style: normalizeStyle(unref(style)),
        onClick: _cache[1] || (_cache[1] = withModifiers(() => {
        }, ["stop"]))
      }, [
        createElementVNode("div", {
          ref_key: "headerRef",
          ref: headerRef,
          class: normalizeClass(unref(ns).e("header"))
        }, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createElementVNode("span", {
              class: normalizeClass(unref(ns).e("title"))
            }, toDisplayString(_ctx.title), 3)
          ])
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("body"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("footer"))
        }, [
          renderSlot(_ctx.$slots, "footer")
        ], 2)) : createCommentVNode("v-if", true),
        _ctx.showClose ? (openBlock(), createElementBlock("button", {
          key: 1,
          "aria-label": "close",
          class: normalizeClass(unref(ns).e("headerbtn")),
          type: "button",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        }, [
          createVNode(unref(ElIcon), {
            class: normalizeClass(unref(ns).e("close"))
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon || unref(Close))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 2)) : createCommentVNode("v-if", true)
      ], 14, _hoisted_1);
    };
  }
});
var ElDialogContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/dialog/src/dialog-content.vue"]]);

export { ElDialogContent as default };
//# sourceMappingURL=dialog-content3.mjs.map
