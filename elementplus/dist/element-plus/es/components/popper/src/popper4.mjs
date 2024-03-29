import { defineComponent, ref, provide, renderSlot } from 'vue';
import '../../../tokens/index2.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { POPPER_INJECTION_KEY } from '../../../tokens/popper2.mjs';

const __default__ = {
  name: "ElPopperRoot",
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props, { expose }) {
    const triggerRef = ref();
    const popperInstanceRef = ref();
    const contentRef = ref();
    const referenceRef = ref();
    const popperProvides = {
      triggerRef,
      popperInstanceRef,
      contentRef,
      referenceRef
    };
    expose(popperProvides);
    provide(POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var Popper = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/popper/src/popper.vue"]]);

export { Popper as default };
//# sourceMappingURL=popper4.mjs.map
