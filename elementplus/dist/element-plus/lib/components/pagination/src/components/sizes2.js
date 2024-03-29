'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var lodashUnified = require('lodash-unified');
var index = require('../../../select/index2.js');
require('../../../../hooks/index2.js');
require('../../../../utils/index2.js');
var usePagination = require('../usePagination2.js');
var pluginVue_exportHelper = require('../../../../_virtual/plugin-vue_export-helper.js');
var props = require('../../../../utils/vue/props2.js');
var typescript = require('../../../../utils/typescript2.js');
var index$1 = require('../../../../hooks/use-locale/index2.js');
var index$2 = require('../../../../hooks/use-namespace/index2.js');

const paginationSizesProps = props.buildProps({
  pageSize: {
    type: Number,
    required: true
  },
  pageSizes: {
    type: props.definePropType(Array),
    default: () => typescript.mutable([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  size: {
    type: String,
    default: "default"
  }
});
const _sfc_main = vue.defineComponent({
  name: "ElPaginationSizes",
  components: {
    ElSelect: index.ElSelect,
    ElOption: index.ElOption
  },
  props: paginationSizesProps,
  emits: ["page-size-change"],
  setup(props, { emit }) {
    const { t } = index$1.useLocale();
    const ns = index$2.useNamespace("pagination");
    const pagination = usePagination.usePagination();
    const innerPageSize = vue.ref(props.pageSize);
    vue.watch(() => props.pageSizes, (newVal, oldVal) => {
      if (lodashUnified.isEqual(newVal, oldVal))
        return;
      if (Array.isArray(newVal)) {
        const pageSize = newVal.includes(props.pageSize) ? props.pageSize : props.pageSizes[0];
        emit("page-size-change", pageSize);
      }
    });
    vue.watch(() => props.pageSize, (newVal) => {
      innerPageSize.value = newVal;
    });
    const innerPageSizes = vue.computed(() => props.pageSizes);
    function handleChange(val) {
      var _a;
      if (val !== innerPageSize.value) {
        innerPageSize.value = val;
        (_a = pagination.handleSizeChange) == null ? void 0 : _a.call(pagination, Number(val));
      }
    }
    return {
      ns,
      innerPageSizes,
      innerPageSize,
      t,
      handleChange
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = vue.resolveComponent("el-option");
  const _component_el_select = vue.resolveComponent("el-select");
  return vue.openBlock(), vue.createElementBlock("span", {
    class: vue.normalizeClass(_ctx.ns.e("sizes"))
  }, [
    vue.createVNode(_component_el_select, {
      "model-value": _ctx.innerPageSize,
      disabled: _ctx.disabled,
      "popper-class": _ctx.popperClass,
      size: _ctx.size,
      onChange: _ctx.handleChange
    }, {
      default: vue.withCtx(() => [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.innerPageSizes, (item) => {
          return vue.openBlock(), vue.createBlock(_component_el_option, {
            key: item,
            value: item,
            label: item + _ctx.t("el.pagination.pagesize")
          }, null, 8, ["value", "label"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["model-value", "disabled", "popper-class", "size", "onChange"])
  ], 2);
}
var Sizes = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/pagination/src/components/sizes.vue"]]);

exports["default"] = Sizes;
//# sourceMappingURL=sizes2.js.map
