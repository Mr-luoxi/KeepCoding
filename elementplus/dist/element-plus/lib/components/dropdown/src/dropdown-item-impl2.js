'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../roving-focus-group/index2.js');
require('../../collection/index2.js');
var index = require('../../icon/index2.js');
require('../../../hooks/index2.js');
require('../../../utils/index2.js');
require('../../../constants/index2.js');
var dropdown = require('./dropdown4.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index$1 = require('../../../hooks/use-namespace/index2.js');
var rovingFocusGroup = require('../../roving-focus-group/src/roving-focus-group4.js');
var tokens = require('../../roving-focus-group/src/tokens2.js');
var refs = require('../../../utils/vue/refs2.js');
var event = require('../../../utils/dom/event2.js');
var aria = require('../../../constants/aria2.js');
var collection = require('../../collection/src/collection3.js');

const _sfc_main = vue.defineComponent({
  name: "DropdownItemImpl",
  components: {
    ElIcon: index.ElIcon
  },
  props: dropdown.dropdownItemProps,
  emits: ["pointermove", "pointerleave", "click", "clickimpl"],
  setup(_, { emit }) {
    const ns = index$1.useNamespace("dropdown");
    const { collectionItemRef: dropdownCollectionItemRef } = vue.inject(dropdown.DROPDOWN_COLLECTION_ITEM_INJECTION_KEY, void 0);
    const { collectionItemRef: rovingFocusCollectionItemRef } = vue.inject(rovingFocusGroup.ROVING_FOCUS_ITEM_COLLECTION_INJECTION_KEY, void 0);
    const {
      rovingFocusGroupItemRef,
      tabIndex,
      handleFocus,
      handleKeydown: handleItemKeydown,
      handleMousedown
    } = vue.inject(tokens.ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, void 0);
    const itemRef = refs.composeRefs(dropdownCollectionItemRef, rovingFocusCollectionItemRef, rovingFocusGroupItemRef);
    const handleKeydown = event.composeEventHandlers((e) => {
      const { code } = e;
      if (code === aria.EVENT_CODE.enter || code === aria.EVENT_CODE.space) {
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
        [collection.COLLECTION_ITEM_SIGN]: ""
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
  const _component_el_icon = vue.resolveComponent("el-icon");
  return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    _ctx.divided ? (vue.openBlock(), vue.createElementBlock("li", vue.mergeProps({
      key: 0,
      class: _ctx.ns.bem("menu", "item", "divided")
    }, _ctx.$attrs), null, 16)) : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("li", vue.mergeProps({ ref: _ctx.itemRef }, { ..._ctx.dataset, ..._ctx.$attrs }, {
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
      _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_el_icon, { key: 0 }, {
        default: vue.withCtx(() => [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon)))
        ]),
        _: 1
      })) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default")
    ], 16, _hoisted_1)
  ], 64);
}
var ElDropdownItemImpl = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/dropdown/src/dropdown-item-impl.vue"]]);

exports["default"] = ElDropdownItemImpl;
//# sourceMappingURL=dropdown-item-impl2.js.map
