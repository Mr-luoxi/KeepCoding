import { defineComponent, useSlots, ref, computed, openBlock, createBlock, Transition, unref, withCtx, withDirectives, createElementVNode, normalizeClass, resolveDynamicComponent, createCommentVNode, createElementBlock, renderSlot, createTextVNode, toDisplayString, Fragment, createVNode, vShow } from 'vue';
import { ElIcon } from '../../icon/index2.mjs';
import '../../../utils/index2.mjs';
import '../../../hooks/index2.mjs';
import { alertProps, alertEmits } from './alert4.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { TypeComponents, TypeComponentsMap } from '../../../utils/vue/icon2.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';

const __default__ = {
  name: "ElAlert"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: alertProps,
  emits: alertEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { Close } = TypeComponents;
    const slots = useSlots();
    const ns = useNamespace("alert");
    const visible = ref(true);
    const iconComponent = computed(() => TypeComponentsMap[props.type] || TypeComponentsMap["info"]);
    const isBigIcon = computed(() => props.description || { [ns.is("big")]: slots.default });
    const isBoldTitle = computed(() => props.description || { [ns.is("bold")]: slots.default });
    const close = (evt) => {
      visible.value = false;
      emit("close", evt);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade")
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.type), unref(ns).is("center", _ctx.center), unref(ns).is(_ctx.effect)]),
            role: "alert"
          }, [
            _ctx.showIcon && unref(iconComponent) ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass([unref(ns).e("icon"), unref(isBigIcon)])
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(iconComponent))))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true),
            createElementVNode("div", {
              class: normalizeClass(unref(ns).e("content"))
            }, [
              _ctx.title || _ctx.$slots.title ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass([unref(ns).e("title"), unref(isBoldTitle)])
              }, [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createTextVNode(toDisplayString(_ctx.title), 1)
                ])
              ], 2)) : createCommentVNode("v-if", true),
              _ctx.$slots.default || _ctx.description ? (openBlock(), createElementBlock("p", {
                key: 1,
                class: normalizeClass(unref(ns).e("description"))
              }, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(_ctx.description), 1)
                ])
              ], 2)) : createCommentVNode("v-if", true),
              _ctx.closable ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                _ctx.closeText ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass([unref(ns).e("close-btn"), unref(ns).is("customed")]),
                  onClick: close
                }, toDisplayString(_ctx.closeText), 3)) : (openBlock(), createBlock(unref(ElIcon), {
                  key: 1,
                  class: normalizeClass(unref(ns).e("close-btn")),
                  onClick: close
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Close))
                  ]),
                  _: 1
                }, 8, ["class"]))
              ], 2112)) : createCommentVNode("v-if", true)
            ], 2)
          ], 2), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
      }, 8, ["name"]);
    };
  }
});
var Alert = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/alert/src/alert.vue"]]);

export { Alert as default };
//# sourceMappingURL=alert3.mjs.map
