import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createElementVNode, renderSlot, createBlock, withCtx, createVNode, createCommentVNode, Transition } from 'vue';
import { ElIcon } from '../../icon/index2.mjs';
import { Close } from '@element-plus/icons-vue';
import '../../../hooks/index2.mjs';
import { tagProps, tagEmits } from './tag4.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useSize } from '../../../hooks/use-common-props/index2.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';

const __default__ = {
  name: "ElTag"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: tagProps,
  emits: tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const tagSize = useSize();
    const ns = useNamespace("tag");
    const classes = computed(() => {
      const { type, hit, effect, closable, round } = props;
      return [
        ns.b(),
        ns.is("closable", closable),
        ns.m(type),
        ns.m(tagSize.value),
        ns.m(effect),
        ns.is("hit", hit),
        ns.is("round", round)
      ];
    });
    const handleClose = (event) => {
      event.stopPropagation();
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return !_ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(unref(classes)),
        style: normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: handleClick
      }, [
        createElementVNode("span", {
          class: normalizeClass(unref(ns).e("content"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("close")),
          onClick: handleClose
        }, {
          default: withCtx(() => [
            createVNode(unref(Close))
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("v-if", true)
      ], 6)) : (openBlock(), createBlock(Transition, {
        key: 1,
        name: `${unref(ns).namespace.value}-zoom-in-center`
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(unref(classes)),
            style: normalizeStyle({ backgroundColor: _ctx.color }),
            onClick: handleClick
          }, [
            createElementVNode("span", {
              class: normalizeClass(unref(ns).e("content"))
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2),
            _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).e("close")),
              onClick: handleClose
            }, {
              default: withCtx(() => [
                createVNode(unref(Close))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true)
          ], 6)
        ]),
        _: 3
      }, 8, ["name"]));
    };
  }
});
var Tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/tag/src/tag.vue"]]);

export { Tag as default };
//# sourceMappingURL=tag3.mjs.map
