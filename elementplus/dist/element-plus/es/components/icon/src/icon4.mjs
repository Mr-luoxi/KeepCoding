import { defineComponent, computed, openBlock, createElementBlock, mergeProps, unref, renderSlot } from 'vue';
import '../../../utils/index2.mjs';
import '../../../hooks/index2.mjs';
import { iconProps } from './icon3.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';
import { isUndefined } from '../../../utils/types2.mjs';
import { addUnit } from '../../../utils/dom/style2.mjs';

const __default__ = {
  name: "ElIcon",
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      if (!props.size && !props.color)
        return {};
      return {
        fontSize: isUndefined(props.size) ? void 0 : addUnit(props.size),
        "--color": props.color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/icon/src/icon.vue"]]);

export { Icon as default };
//# sourceMappingURL=icon4.mjs.map
