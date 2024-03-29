import { defineComponent, openBlock, createElementBlock, normalizeStyle, normalizeClass, withModifiers, renderSlot, createElementVNode, toDisplayString } from 'vue';
import '../../../hooks/index2.mjs';
import { useOption } from './useOption2.mjs';
import { OptionProps } from './defaults2.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';

const _sfc_main = defineComponent({
  props: OptionProps,
  emits: ["select", "hover"],
  setup(props, { emit }) {
    const ns = useNamespace("select");
    const { hoverItem, selectOptionClick } = useOption(props, { emit });
    return {
      ns,
      hoverItem,
      selectOptionClick
    };
  }
});
const _hoisted_1 = ["aria-selected"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    "aria-selected": _ctx.selected,
    style: normalizeStyle(_ctx.style),
    class: normalizeClass([
      _ctx.ns.be("dropdown", "option-item"),
      _ctx.ns.is("selected", _ctx.selected),
      _ctx.ns.is("disabled", _ctx.disabled),
      _ctx.ns.is("created", _ctx.created),
      { hover: _ctx.hovering }
    ]),
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "default", {
      item: _ctx.item,
      index: _ctx.index,
      disabled: _ctx.disabled
    }, () => [
      createElementVNode("span", null, toDisplayString(_ctx.item.label), 1)
    ])
  ], 46, _hoisted_1);
}
var OptionItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/select-v2/src/option-item.vue"]]);

export { OptionItem as default };
//# sourceMappingURL=option-item2.mjs.map
