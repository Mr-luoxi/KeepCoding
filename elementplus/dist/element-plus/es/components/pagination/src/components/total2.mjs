import { defineComponent, openBlock, createElementBlock, normalizeClass, toDisplayString } from 'vue';
import '../../../../hooks/index2.mjs';
import { usePagination } from '../usePagination2.mjs';
import _export_sfc from '../../../../_virtual/plugin-vue_export-helper.mjs';
import { useLocale } from '../../../../hooks/use-locale/index2.mjs';
import { useNamespace } from '../../../../hooks/use-namespace/index2.mjs';

const paginationTotalProps = {
  total: {
    type: Number,
    default: 1e3
  }
};
const _sfc_main = defineComponent({
  name: "ElPaginationTotal",
  props: paginationTotalProps,
  setup() {
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const { disabled } = usePagination();
    return {
      t,
      ns,
      disabled
    };
  }
});
const _hoisted_1 = ["disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.ns.e("total")),
    disabled: _ctx.disabled
  }, toDisplayString(_ctx.t("el.pagination.total", {
    total: _ctx.total
  })), 11, _hoisted_1);
}
var Total = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/pagination/src/components/total.vue"]]);

export { Total as default };
//# sourceMappingURL=total2.mjs.map
