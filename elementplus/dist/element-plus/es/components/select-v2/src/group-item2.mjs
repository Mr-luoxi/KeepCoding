import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, toDisplayString, createElementVNode } from 'vue';
import '../../../hooks/index2.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';

const _sfc_main = defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    },
    style: Object,
    height: Number
  },
  setup() {
    const ns = useNamespace("select");
    return {
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.item.isTitle ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(_ctx.ns.be("group", "title")),
    style: normalizeStyle([_ctx.style, { lineHeight: `${_ctx.height}px` }])
  }, toDisplayString(_ctx.item.label), 7)) : (openBlock(), createElementBlock("div", {
    key: 1,
    class: normalizeClass(_ctx.ns.be("group", "split")),
    style: normalizeStyle(_ctx.style)
  }, [
    createElementVNode("span", {
      class: normalizeClass(_ctx.ns.be("group", "split-dash")),
      style: normalizeStyle({ top: `${_ctx.height / 2}px` })
    }, null, 6)
  ], 6));
}
var GroupItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/select-v2/src/group-item.vue"]]);

export { GroupItem as default };
//# sourceMappingURL=group-item2.mjs.map
