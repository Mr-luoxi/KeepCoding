import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, createBlock, withCtx, resolveDynamicComponent, createCommentVNode, createTextVNode, toDisplayString } from 'vue';
import { ElIcon } from '../../icon/index2.mjs';
import '../../../hooks/index2.mjs';
import { pageHeaderProps, pageHeaderEmits } from './page-header3.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useLocale } from '../../../hooks/use-locale/index2.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';

const __default__ = {
  name: "ElPageHeader"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: pageHeaderProps,
  emits: pageHeaderEmits,
  setup(__props, { emit }) {
    const { t } = useLocale();
    const ns = useNamespace("page-header");
    function handleClick() {
      emit("back");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("left")),
          onClick: handleClick
        }, [
          _ctx.icon || _ctx.$slots.icon ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("icon"))
          }, [
            renderSlot(_ctx.$slots, "icon", {}, () => [
              _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
                ]),
                _: 1
              })) : createCommentVNode("v-if", true)
            ])
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("title"))
          }, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title || unref(t)("el.pageHeader.title")), 1)
            ])
          ], 2)
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("content"))
        }, [
          renderSlot(_ctx.$slots, "content", {}, () => [
            createTextVNode(toDisplayString(_ctx.content), 1)
          ])
        ], 2)
      ], 2);
    };
  }
});
var PageHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/page-header/src/page-header.vue"]]);

export { PageHeader as default };
//# sourceMappingURL=page-header4.mjs.map
