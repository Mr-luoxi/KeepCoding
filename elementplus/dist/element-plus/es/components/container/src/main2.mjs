import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot } from 'vue';
import '../../../hooks/index2.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';

const _sfc_main = defineComponent({
  name: "ElMain",
  setup() {
    const ns = useNamespace("main");
    return {
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("main", {
    class: normalizeClass(_ctx.ns.b())
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Main = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/container/src/main.vue"]]);

export { Main as default };
//# sourceMappingURL=main2.mjs.map
