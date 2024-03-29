import { defineComponent, ref, computed, openBlock, createBlock, Teleport as Teleport$1, createElementVNode, normalizeClass, unref, normalizeStyle, renderSlot, createCommentVNode } from 'vue';
import '../../../hooks/index2.mjs';
import { teleportProps } from './teleport3.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  props: teleportProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("teleport");
    const containerRef = ref();
    const containerStyle = computed(() => {
      return props.container === "body" ? [
        props.style,
        {
          position: "absolute",
          top: `0px`,
          left: `0px`,
          zIndex: props.zIndex
        }
      ] : {};
    });
    expose({
      containerRef
    });
    return (_ctx, _cache) => {
      return _ctx.container ? (openBlock(), createBlock(Teleport$1, {
        key: 0,
        to: _ctx.container,
        disabled: _ctx.disabled
      }, [
        createElementVNode("div", {
          ref_key: "containerRef",
          ref: containerRef,
          class: normalizeClass(unref(ns).b()),
          style: normalizeStyle(unref(containerStyle))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6)
      ], 8, ["to", "disabled"])) : createCommentVNode("v-if", true);
    };
  }
});
var Teleport = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/teleport/src/teleport.vue"]]);

export { Teleport as default };
//# sourceMappingURL=teleport4.mjs.map
