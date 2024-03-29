'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index$1 = require('../../icon/index2.js');
require('../../../tokens/index2.js');
require('../../../hooks/index2.js');
var breadcrumbItem = require('./breadcrumb-item4.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var breadcrumb = require('../../../tokens/breadcrumb2.js');
var index = require('../../../hooks/use-namespace/index2.js');

const __default__ = {
  name: "ElBreadcrumbItem"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: breadcrumbItem.breadcrumbItemProps,
  setup(__props) {
    const props = __props;
    const instance = vue.getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const breadcrumbInjection = vue.inject(breadcrumb.breadcrumbKey, {});
    const ns = index.useNamespace("breadcrumb");
    const { separator, separatorIcon } = breadcrumbInjection;
    const link = vue.ref();
    const onClick = () => {
      if (!props.to || !router)
        return;
      props.replace ? router.replace(props.to) : router.push(props.to);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        class: vue.normalizeClass(vue.unref(ns).e("item"))
      }, [
        vue.createElementVNode("span", {
          ref_key: "link",
          ref: link,
          class: vue.normalizeClass([vue.unref(ns).e("inner"), vue.unref(ns).is("link", !!_ctx.to)]),
          role: "link",
          onClick
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2),
        vue.unref(separatorIcon) ? (vue.openBlock(), vue.createBlock(vue.unref(index$1.ElIcon), {
          key: 0,
          class: vue.normalizeClass(vue.unref(ns).e("separator"))
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(separatorIcon))))
          ]),
          _: 1
        }, 8, ["class"])) : (vue.openBlock(), vue.createElementBlock("span", {
          key: 1,
          class: vue.normalizeClass(vue.unref(ns).e("separator")),
          role: "presentation"
        }, vue.toDisplayString(vue.unref(separator)), 3))
      ], 2);
    };
  }
});
var BreadcrumbItem = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);

exports["default"] = BreadcrumbItem;
//# sourceMappingURL=breadcrumb-item3.js.map
