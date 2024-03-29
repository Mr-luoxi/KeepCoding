'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index2.js');
var iconsVue = require('@element-plus/icons-vue');
var skeletonItem = require('./skeleton-item3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index2.js');

const __default__ = {
  name: "ElSkeletonItem"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: skeletonItem.skeletonItemProps,
  setup(__props) {
    const ns = index.useNamespace("skeleton");
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([vue.unref(ns).e("item"), vue.unref(ns).e(_ctx.variant)])
      }, [
        _ctx.variant === "image" ? (vue.openBlock(), vue.createBlock(vue.unref(iconsVue.PictureFilled), { key: 0 })) : vue.createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var SkeletonItem = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/skeleton/src/skeleton-item.vue"]]);

exports["default"] = SkeletonItem;
//# sourceMappingURL=skeleton-item4.js.map
