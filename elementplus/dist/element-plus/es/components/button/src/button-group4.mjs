import { defineComponent, provide, reactive, toRef, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from 'vue';
import '../../../tokens/index2.mjs';
import '../../../hooks/index2.mjs';
import { buttonGroupProps } from './button-group3.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { buttonGroupContextKey } from '../../../tokens/button2.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';

const __default__ = {
  name: "ElButtonGroup"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: buttonGroupProps,
  setup(__props) {
    const props = __props;
    provide(buttonGroupContextKey, reactive({
      size: toRef(props, "size"),
      type: toRef(props, "type")
    }));
    const ns = useNamespace("button");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`${unref(ns).b("group")}`)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var ButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/button/src/button-group.vue"]]);

export { ButtonGroup as default };
//# sourceMappingURL=button-group4.mjs.map
