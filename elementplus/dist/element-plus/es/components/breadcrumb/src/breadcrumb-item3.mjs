import { defineComponent, getCurrentInstance, inject, ref, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, createBlock, withCtx, resolveDynamicComponent, toDisplayString } from 'vue';
import { ElIcon } from '../../icon/index2.mjs';
import '../../../tokens/index2.mjs';
import '../../../hooks/index2.mjs';
import { breadcrumbItemProps } from './breadcrumb-item4.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { breadcrumbKey } from '../../../tokens/breadcrumb2.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';

const __default__ = {
  name: "ElBreadcrumbItem"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: breadcrumbItemProps,
  setup(__props) {
    const props = __props;
    const instance = getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const breadcrumbInjection = inject(breadcrumbKey, {});
    const ns = useNamespace("breadcrumb");
    const { separator, separatorIcon } = breadcrumbInjection;
    const link = ref();
    const onClick = () => {
      if (!props.to || !router)
        return;
      props.replace ? router.replace(props.to) : router.push(props.to);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("item"))
      }, [
        createElementVNode("span", {
          ref_key: "link",
          ref: link,
          class: normalizeClass([unref(ns).e("inner"), unref(ns).is("link", !!_ctx.to)]),
          role: "link",
          onClick
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        unref(separatorIcon) ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("separator"))
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(separatorIcon))))
          ]),
          _: 1
        }, 8, ["class"])) : (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(ns).e("separator")),
          role: "presentation"
        }, toDisplayString(unref(separator)), 3))
      ], 2);
    };
  }
});
var BreadcrumbItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);

export { BreadcrumbItem as default };
//# sourceMappingURL=breadcrumb-item3.mjs.map
