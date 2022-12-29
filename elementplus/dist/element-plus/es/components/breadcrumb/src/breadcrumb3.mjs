import { defineComponent, ref, provide, onMounted, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from 'vue';
import '../../../tokens/index2.mjs';
import '../../../hooks/index2.mjs';
import { breadcrumbProps } from './breadcrumb4.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';
import { breadcrumbKey } from '../../../tokens/breadcrumb2.mjs';

const __default__ = {
  name: "ElBreadcrumb"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: breadcrumbProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("breadcrumb");
    const breadcrumb = ref();
    provide(breadcrumbKey, props);
    onMounted(() => {
      const items = breadcrumb.value.querySelectorAll(`.${ns.e("item")}`);
      if (items.length) {
        items[items.length - 1].setAttribute("aria-current", "page");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "breadcrumb",
        ref: breadcrumb,
        class: normalizeClass(unref(ns).b()),
        "aria-label": "Breadcrumb",
        role: "navigation"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/breadcrumb/src/breadcrumb.vue"]]);

export { Breadcrumb as default };
//# sourceMappingURL=breadcrumb3.mjs.map
