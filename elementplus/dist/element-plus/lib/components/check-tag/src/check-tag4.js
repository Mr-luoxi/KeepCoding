'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index2.js');
var checkTag = require('./check-tag3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index2.js');

const __default__ = {
  name: "ElCheckTag"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: checkTag.checkTagProps,
  emits: checkTag.checkTagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = index.useNamespace("check-tag");
    const handleChange = () => {
      const checked = !props.checked;
      emit("change", checked);
      emit("update:checked", checked);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        class: vue.normalizeClass([vue.unref(ns).b(), vue.unref(ns).is("checked", _ctx.checked)]),
        onClick: handleChange
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var CheckTag = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/check-tag/src/check-tag.vue"]]);

exports["default"] = CheckTag;
//# sourceMappingURL=check-tag4.js.map
