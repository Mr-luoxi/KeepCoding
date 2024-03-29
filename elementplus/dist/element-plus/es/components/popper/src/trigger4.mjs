import { defineComponent, inject, onMounted, watch, openBlock, createBlock, unref, mergeProps, withCtx, renderSlot, createCommentVNode } from 'vue';
import { unrefElement } from '@vueuse/core';
import '../../slot/index2.mjs';
import '../../../hooks/index2.mjs';
import '../../../tokens/index2.mjs';
import '../../../utils/index2.mjs';
import { usePopperTriggerProps } from './trigger3.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { POPPER_INJECTION_KEY } from '../../../tokens/popper2.mjs';
import { useForwardRef } from '../../../hooks/use-forward-ref/index2.mjs';
import { isElement } from '../../../utils/types2.mjs';
import { OnlyChild } from '../../slot/src/only-child.mjs';

const __default__ = {
  name: "ElPopperTrigger",
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: usePopperTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const { triggerRef } = inject(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef);
    onMounted(() => {
      watch(() => props.virtualRef, (virtualEl) => {
        if (virtualEl) {
          triggerRef.value = unrefElement(virtualEl);
        }
      }, {
        immediate: true
      });
      watch(() => triggerRef.value, (el, prevEl) => {
        if (isElement(el)) {
          ;
          [
            "onMouseenter",
            "onMouseleave",
            "onClick",
            "onKeydown",
            "onFocus",
            "onBlur",
            "onContextmenu"
          ].forEach((eventName) => {
            var _a;
            const handler = props[eventName];
            if (handler) {
              ;
              el.addEventListener(eventName.slice(2).toLowerCase(), handler);
              (_a = prevEl == null ? void 0 : prevEl.removeEventListener) == null ? void 0 : _a.call(prevEl, eventName.slice(2).toLowerCase(), handler);
            }
          });
        }
      }, {
        immediate: true
      });
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return !_ctx.virtualTriggering ? (openBlock(), createBlock(unref(OnlyChild), mergeProps({ key: 0 }, _ctx.$attrs, {
        "aria-describedby": _ctx.open ? _ctx.id : void 0
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-describedby"])) : createCommentVNode("v-if", true);
    };
  }
});
var ElPopperTrigger = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/popper/src/trigger.vue"]]);

export { ElPopperTrigger as default };
//# sourceMappingURL=trigger4.mjs.map
