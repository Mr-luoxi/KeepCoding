import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from 'vue';
import '../../../hooks/index2.mjs';
import { checkTagProps, checkTagEmits } from './check-tag3.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';

const __default__ = {
  name: "ElCheckTag"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: checkTagProps,
  emits: checkTagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("check-tag");
    const handleChange = () => {
      const checked = !props.checked;
      emit("change", checked);
      emit("update:checked", checked);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass([unref(ns).b(), unref(ns).is("checked", _ctx.checked)]),
        onClick: handleChange
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var CheckTag = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/check-tag/src/check-tag.vue"]]);

export { CheckTag as default };
//# sourceMappingURL=check-tag4.mjs.map
