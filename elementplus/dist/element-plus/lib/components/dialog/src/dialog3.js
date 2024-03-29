'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index$3 = require('../../overlay/index2.js');
require('../../../hooks/index2.js');
require('../../../tokens/index2.js');
var dialogContent = require('./dialog-content3.js');
var dialog = require('./dialog4.js');
var useDialog = require('./use-dialog2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index2.js');
var dialog$1 = require('../../../tokens/dialog2.js');
var index$1 = require('../../../hooks/use-same-target/index2.js');
var index$2 = require('../../../hooks/use-draggable/index2.js');

const __default__ = {
  name: "ElDialog"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: dialog.dialogProps,
  emits: dialog.dialogEmits,
  setup(__props, { expose }) {
    const props = __props;
    const ns = index.useNamespace("dialog");
    const dialogRef = vue.ref();
    const headerRef = vue.ref();
    const {
      visible,
      style,
      rendered,
      zIndex,
      afterEnter,
      afterLeave,
      beforeLeave,
      handleClose,
      onModalClick
    } = useDialog.useDialog(props, dialogRef);
    vue.provide(dialog$1.dialogInjectionKey, {
      dialogRef,
      headerRef,
      ns,
      rendered,
      style
    });
    const overlayEvent = index$1.useSameTarget(onModalClick);
    const draggable = vue.computed(() => props.draggable && !props.fullscreen);
    index$2.useDraggable(dialogRef, headerRef, draggable);
    expose({
      visible
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Teleport, {
        to: "body",
        disabled: !_ctx.appendToBody
      }, [
        vue.createVNode(vue.Transition, {
          name: "dialog-fade",
          onAfterEnter: vue.unref(afterEnter),
          onAfterLeave: vue.unref(afterLeave),
          onBeforeLeave: vue.unref(beforeLeave)
        }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createVNode(vue.unref(index$3.ElOverlay), {
              "custom-mask-event": "",
              mask: _ctx.modal,
              "overlay-class": _ctx.modalClass,
              "z-index": vue.unref(zIndex)
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(`${vue.unref(ns).namespace.value}-overlay-dialog`),
                  onClick: _cache[0] || (_cache[0] = (...args) => vue.unref(overlayEvent).onClick && vue.unref(overlayEvent).onClick(...args)),
                  onMousedown: _cache[1] || (_cache[1] = (...args) => vue.unref(overlayEvent).onMousedown && vue.unref(overlayEvent).onMousedown(...args)),
                  onMouseup: _cache[2] || (_cache[2] = (...args) => vue.unref(overlayEvent).onMouseup && vue.unref(overlayEvent).onMouseup(...args))
                }, [
                  vue.unref(rendered) ? (vue.openBlock(), vue.createBlock(dialogContent["default"], {
                    key: 0,
                    "custom-class": _ctx.customClass,
                    center: _ctx.center,
                    "close-icon": _ctx.closeIcon,
                    draggable: vue.unref(draggable),
                    fullscreen: _ctx.fullscreen,
                    "show-close": _ctx.showClose,
                    style: vue.normalizeStyle(vue.unref(style)),
                    title: _ctx.title,
                    onClose: vue.unref(handleClose)
                  }, vue.createSlots({
                    title: vue.withCtx(() => [
                      vue.renderSlot(_ctx.$slots, "title")
                    ]),
                    default: vue.withCtx(() => [
                      vue.renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 2
                  }, [
                    _ctx.$slots.footer ? {
                      name: "footer",
                      fn: vue.withCtx(() => [
                        vue.renderSlot(_ctx.$slots, "footer")
                      ])
                    } : void 0
                  ]), 1032, ["custom-class", "center", "close-icon", "draggable", "fullscreen", "show-close", "style", "title", "onClose"])) : vue.createCommentVNode("v-if", true)
                ], 34)
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [vue.vShow, vue.unref(visible)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ], 8, ["disabled"]);
    };
  }
});
var Dialog = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/dialog/src/dialog.vue"]]);

exports["default"] = Dialog;
//# sourceMappingURL=dialog3.js.map
