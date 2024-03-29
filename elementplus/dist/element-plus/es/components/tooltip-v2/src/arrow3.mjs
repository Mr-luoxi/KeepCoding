import { defineComponent, inject, computed, openBlock, createElementBlock, normalizeStyle, unref, normalizeClass } from 'vue';
import '../../../tokens/index2.mjs';
import { tooltipV2ArrowProps, tooltipV2ArrowSpecialProps } from './arrow4.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { tooltipV2RootKey, tooltipV2ContentKey } from '../../../tokens/tooltip-v22.mjs';

const __default__ = {
  name: "ElTooltipV2Arrow"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    ...tooltipV2ArrowProps,
    ...tooltipV2ArrowSpecialProps
  },
  setup(__props) {
    const props = __props;
    const { ns } = inject(tooltipV2RootKey);
    const { arrowRef } = inject(tooltipV2ContentKey);
    const arrowStyle = computed(() => {
      const { style, width, height } = props;
      const namespace = ns.namespace.value;
      return {
        [`--${namespace}-tooltip-v2-arrow-width`]: `${width}px`,
        [`--${namespace}-tooltip-v2-arrow-height`]: `${height}px`,
        [`--${namespace}-tooltip-v2-arrow-border-width`]: `${width / 2}px`,
        [`--${namespace}-tooltip-v2-arrow-cover-width`]: width / 2 - 1,
        ...style || {}
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        style: normalizeStyle(unref(arrowStyle)),
        class: normalizeClass(unref(ns).e("arrow"))
      }, null, 6);
    };
  }
});
var TooltipV2Arrow = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/tooltip-v2/src/arrow.vue"]]);

export { TooltipV2Arrow as default };
//# sourceMappingURL=arrow3.mjs.map
