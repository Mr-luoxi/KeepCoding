import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, renderSlot } from 'vue';
import '../../../utils/index2.mjs';
import '../../../hooks/index2.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { buildProps } from '../../../utils/vue/props2.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';

const spaceItem = buildProps({
  prefixCls: {
    type: String,
    default: ""
  }
});
const _sfc_main = defineComponent({
  props: spaceItem,
  setup(props) {
    const ns = useNamespace("space");
    const classes = computed(() => `${props.prefixCls || ns.b()}__item`);
    return {
      classes
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Item = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/space/src/item.vue"]]);

export { Item as default };
//# sourceMappingURL=item2.mjs.map
