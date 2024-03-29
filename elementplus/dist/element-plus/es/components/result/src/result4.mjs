import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createBlock, resolveDynamicComponent, createCommentVNode, toDisplayString } from 'vue';
import '../../../hooks/index2.mjs';
import { resultProps, IconMap, IconComponentMap } from './result3.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';
import { useDeprecated } from '../../../hooks/use-deprecated/index2.mjs';

const COMPONENT_NAME = "ElResult";
const _sfc_main = defineComponent({
  name: COMPONENT_NAME,
  props: resultProps,
  setup(props, { slots }) {
    const ns = useNamespace("result");
    useDeprecated({
      scope: COMPONENT_NAME,
      type: "Slot",
      from: "subTitle",
      replacement: "sub-title",
      version: "2.1.3",
      ref: "https://github.com/element-plus/element-plus/pull/6636/"
    }, computed(() => !!slots.subTitle));
    const resultIcon = computed(() => {
      const icon = props.icon;
      const iconClass = icon && IconMap[icon] ? IconMap[icon] : "icon-info";
      const iconComponent = IconComponentMap[iconClass] || IconComponentMap["icon-info"];
      return {
        class: iconClass,
        component: iconComponent
      };
    });
    return {
      ns,
      resultIcon
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.ns.b())
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("icon"))
    }, [
      renderSlot(_ctx.$slots, "icon", {}, () => [
        _ctx.resultIcon.component ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.resultIcon.component), {
          key: 0,
          class: normalizeClass(_ctx.resultIcon.class)
        }, null, 8, ["class"])) : createCommentVNode("v-if", true)
      ])
    ], 2),
    _ctx.title || _ctx.$slots.title ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(_ctx.ns.e("title"))
    }, [
      renderSlot(_ctx.$slots, "title", {}, () => [
        createElementVNode("p", null, toDisplayString(_ctx.title), 1)
      ])
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.subTitle || _ctx.$slots["sub-title"] ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(_ctx.ns.e("subtitle"))
    }, [
      renderSlot(_ctx.$slots, "sub-title", {}, () => [
        createElementVNode("p", null, toDisplayString(_ctx.subTitle), 1)
      ])
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.$slots.extra ? (openBlock(), createElementBlock("div", {
      key: 2,
      class: normalizeClass(_ctx.ns.e("extra"))
    }, [
      renderSlot(_ctx.$slots, "extra")
    ], 2)) : createCommentVNode("v-if", true)
  ], 2);
}
var Result = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/result/src/result.vue"]]);

export { Result as default };
//# sourceMappingURL=result4.mjs.map
