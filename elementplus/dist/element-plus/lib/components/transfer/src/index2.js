'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../button/index2.js');
var index$1 = require('../../icon/index2.js');
require('../../../constants/index2.js');
require('../../../hooks/index2.js');
require('../../../tokens/index2.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../utils/index2.js');
var transferPanel = require('./transfer-panel2.js');
var useComputedData = require('./useComputedData2.js');
var useCheckedChange = require('./useCheckedChange2.js');
var useMove = require('./useMove2.js');
require('./transfer2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var event = require('../../../constants/event2.js');
var index$2 = require('../../../hooks/use-locale/index2.js');
var index$3 = require('../../../hooks/use-namespace/index2.js');
var form = require('../../../tokens/form2.js');
var error = require('../../../utils/error2.js');

const _sfc_main = vue.defineComponent({
  name: "ElTransfer",
  components: {
    TransferPanel: transferPanel["default"],
    ElButton: index.ElButton,
    ElIcon: index$1.ElIcon,
    ArrowLeft: iconsVue.ArrowLeft,
    ArrowRight: iconsVue.ArrowRight
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    titles: {
      type: Array,
      default: () => []
    },
    buttonTexts: {
      type: Array,
      default: () => []
    },
    filterPlaceholder: {
      type: String,
      default: ""
    },
    filterMethod: Function,
    leftDefaultChecked: {
      type: Array,
      default: () => []
    },
    rightDefaultChecked: {
      type: Array,
      default: () => []
    },
    renderContent: Function,
    modelValue: {
      type: Array,
      default: () => []
    },
    format: {
      type: Object,
      default: () => ({})
    },
    filterable: {
      type: Boolean,
      default: false
    },
    props: {
      type: Object,
      default: () => ({
        label: "label",
        key: "key",
        disabled: "disabled"
      })
    },
    targetOrder: {
      type: String,
      default: "original",
      validator: (val) => {
        return ["original", "push", "unshift"].includes(val);
      }
    }
  },
  emits: [
    event.UPDATE_MODEL_EVENT,
    event.CHANGE_EVENT,
    useCheckedChange.LEFT_CHECK_CHANGE_EVENT,
    useCheckedChange.RIGHT_CHECK_CHANGE_EVENT
  ],
  setup(props, { emit, slots }) {
    const { t } = index$2.useLocale();
    const ns = index$3.useNamespace("transfer");
    const elFormItem = vue.inject(form.formItemContextKey, {});
    const checkedState = vue.reactive({
      leftChecked: [],
      rightChecked: []
    });
    const { propsKey, sourceData, targetData } = useComputedData.useComputedData(props);
    const { onSourceCheckedChange, onTargetCheckedChange } = useCheckedChange.useCheckedChange(checkedState, emit);
    const { addToLeft, addToRight } = useMove.useMove(props, checkedState, propsKey, emit);
    const leftPanel = vue.ref();
    const rightPanel = vue.ref();
    const clearQuery = (which) => {
      switch (which) {
        case "left":
          leftPanel.value.query = "";
          break;
        case "right":
          rightPanel.value.query = "";
          break;
      }
    };
    const hasButtonTexts = vue.computed(() => props.buttonTexts.length === 2);
    const leftPanelTitle = vue.computed(() => props.titles[0] || t("el.transfer.titles.0"));
    const rightPanelTitle = vue.computed(() => props.titles[1] || t("el.transfer.titles.1"));
    const panelFilterPlaceholder = vue.computed(() => props.filterPlaceholder || t("el.transfer.filterPlaceholder"));
    vue.watch(() => props.modelValue, () => {
      var _a;
      (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => error.debugWarn(err));
    });
    const optionRender = vue.computed(() => (option) => {
      if (props.renderContent)
        return props.renderContent(vue.h, option);
      if (slots.default)
        return slots.default({ option });
      return vue.h("span", option[props.props.label] || option[props.props.key]);
    });
    return {
      ns,
      sourceData,
      targetData,
      onSourceCheckedChange,
      onTargetCheckedChange,
      addToLeft,
      addToRight,
      ...vue.toRefs(checkedState),
      hasButtonTexts,
      leftPanelTitle,
      rightPanelTitle,
      panelFilterPlaceholder,
      clearQuery,
      leftPanel,
      rightPanel,
      optionRender
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_transfer_panel = vue.resolveComponent("transfer-panel");
  const _component_arrow_left = vue.resolveComponent("arrow-left");
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_el_button = vue.resolveComponent("el-button");
  const _component_arrow_right = vue.resolveComponent("arrow-right");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(_ctx.ns.b())
  }, [
    vue.createVNode(_component_transfer_panel, {
      ref: "leftPanel",
      data: _ctx.sourceData,
      "option-render": _ctx.optionRender,
      placeholder: _ctx.panelFilterPlaceholder,
      title: _ctx.leftPanelTitle,
      filterable: _ctx.filterable,
      format: _ctx.format,
      "filter-method": _ctx.filterMethod,
      "default-checked": _ctx.leftDefaultChecked,
      props: _ctx.props,
      onCheckedChange: _ctx.onSourceCheckedChange
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "left-footer")
      ]),
      _: 3
    }, 8, ["data", "option-render", "placeholder", "title", "filterable", "format", "filter-method", "default-checked", "props", "onCheckedChange"]),
    vue.createElementVNode("div", {
      class: vue.normalizeClass(_ctx.ns.e("buttons"))
    }, [
      vue.createVNode(_component_el_button, {
        type: "primary",
        class: vue.normalizeClass([_ctx.ns.e("button"), _ctx.ns.is("with-texts", _ctx.hasButtonTexts)]),
        disabled: _ctx.rightChecked.length === 0,
        onClick: _ctx.addToLeft
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_el_icon, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_arrow_left)
            ]),
            _: 1
          }),
          _ctx.buttonTexts[0] !== void 0 ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, vue.toDisplayString(_ctx.buttonTexts[0]), 1)) : vue.createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["class", "disabled", "onClick"]),
      vue.createVNode(_component_el_button, {
        type: "primary",
        class: vue.normalizeClass([_ctx.ns.e("button"), _ctx.ns.is("with-texts", _ctx.hasButtonTexts)]),
        disabled: _ctx.leftChecked.length === 0,
        onClick: _ctx.addToRight
      }, {
        default: vue.withCtx(() => [
          _ctx.buttonTexts[1] !== void 0 ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, vue.toDisplayString(_ctx.buttonTexts[1]), 1)) : vue.createCommentVNode("v-if", true),
          vue.createVNode(_component_el_icon, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_arrow_right)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class", "disabled", "onClick"])
    ], 2),
    vue.createVNode(_component_transfer_panel, {
      ref: "rightPanel",
      data: _ctx.targetData,
      "option-render": _ctx.optionRender,
      placeholder: _ctx.panelFilterPlaceholder,
      filterable: _ctx.filterable,
      format: _ctx.format,
      "filter-method": _ctx.filterMethod,
      title: _ctx.rightPanelTitle,
      "default-checked": _ctx.rightDefaultChecked,
      props: _ctx.props,
      onCheckedChange: _ctx.onTargetCheckedChange
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "right-footer")
      ]),
      _: 3
    }, 8, ["data", "option-render", "placeholder", "filterable", "format", "filter-method", "title", "default-checked", "props", "onCheckedChange"])
  ], 2);
}
var Transfer = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/transfer/src/index.vue"]]);

exports["default"] = Transfer;
//# sourceMappingURL=index2.js.map
