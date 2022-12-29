import { defineComponent, inject, resolveComponent, openBlock, createElementBlock, Fragment, mergeProps, createCommentVNode, createElementVNode, createBlock, withCtx, resolveDynamicComponent, renderSlot } from 'vue';
import '../../roving-focus-group/index2.mjs';
import '../../collection/index2.mjs';
import { ElIcon } from '../../icon/index2.mjs';
import '../../../hooks/index2.mjs';
import '../../../utils/index2.mjs';
import '../../../constants/index2.mjs';
import { dropdownItemProps, DROPDOWN_COLLECTION_ITEM_INJECTION_KEY as COLLECTION_ITEM_INJECTION_KEY } from './dropdown4.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';
import { ROVING_FOCUS_ITEM_COLLECTION_INJECTION_KEY as COLLECTION_ITEM_INJECTION_KEY$1 } from '../../roving-focus-group/src/roving-focus-group4.mjs';
import { ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY } from '../../roving-focus-group/src/tokens2.mjs';
import { composeRefs } from '../../../utils/vue/refs2.mjs';
import { composeEventHandlers } from '../../../utils/dom/event2.mjs';
import { EVENT_CODE } from '../../../constants/aria2.mjs';
import { COLLECTION_ITEM_SIGN } from '../../collection/src/collection3.mjs';

const _sfc_main = defineComponent({
  name: "DropdownItemImpl",
  components: {
    ElIcon
  },
  props: dropdownItemProps,
  emits: ["pointermove", "pointerleave", "click", "clickimpl"],
  setup(_, { emit }) {
    const ns = useNamespace("dropdown");
    const { collectionItemRef: dropdownCollectionItemRef } = inject(COLLECTION_ITEM_INJECTION_KEY, void 0);
    const { collectionItemRef: rovingFocusCollectionItemRef } = inject(COLLECTION_ITEM_INJECTION_KEY$1, void 0);
    const {
      rovingFocusGroupItemRef,
      tabIndex,
      handleFocus,
      handleKeydown: handleItemKeydown,
      handleMousedown
    } = inject(ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, void 0);
    const itemRef = composeRefs(dropdownCollectionItemRef, rovingFocusCollectionItemRef, rovingFocusGroupItemRef);
    const handleKeydown = composeEventHandlers((e) => {
      const { code } = e;
      if (code === EVENT_CODE.enter || code === EVENT_CODE.space) {
        e.preventDefault();
        e.stopImmediatePropagation();
        emit("clickimpl", e);
        return true;
      }
    }, handleItemKeydown);
    return {
      ns,
      itemRef,
      dataset: {
        [COLLECTION_ITEM_SIGN]: ""
      },
      tabIndex,
      handleFocus,
      handleKeydown,
      handleMousedown
    };
  }
});
const _hoisted_1 = ["aria-disabled", "tabindex"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.divided ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      class: _ctx.ns.bem("menu", "item", "divided")
    }, _ctx.$attrs), null, 16)) : createCommentVNode("v-if", true),
    createElementVNode("li", mergeProps({ ref: _ctx.itemRef }, { ..._ctx.dataset, ..._ctx.$attrs }, {
      "aria-disabled": _ctx.disabled,
      class: [_ctx.ns.be("menu", "item"), _ctx.ns.is("disabled", _ctx.disabled)],
      tabindex: _ctx.tabIndex,
      role: "menuitem",
      onClick: _cache[0] || (_cache[0] = (e) => _ctx.$emit("clickimpl", e)),
      onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
      onKeydown: _cache[2] || (_cache[2] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args)),
      onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.handleMousedown && _ctx.handleMousedown(...args)),
      onPointermove: _cache[4] || (_cache[4] = (e) => _ctx.$emit("pointermove", e)),
      onPointerleave: _cache[5] || (_cache[5] = (e) => _ctx.$emit("pointerleave", e))
    }), [
      _ctx.icon ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
        ]),
        _: 1
      })) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default")
    ], 16, _hoisted_1)
  ], 64);
}
var ElDropdownItemImpl = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/dropdown/src/dropdown-item-impl.vue"]]);

export { ElDropdownItemImpl as default };
//# sourceMappingURL=dropdown-item-impl2.mjs.map
