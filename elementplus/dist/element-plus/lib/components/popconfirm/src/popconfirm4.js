'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../button/index2.js');
var index$2 = require('../../icon/index2.js');
var index$1 = require('../../tooltip/index2.js');
require('../../popper/index2.js');
require('../../../hooks/index2.js');
var popconfirm = require('./popconfirm3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var deprecation = require('../../popper/src/deprecation2.js');
var index$3 = require('../../../hooks/use-locale/index2.js');
var index$4 = require('../../../hooks/use-namespace/index2.js');

const COMPONENT_NAME = "ElPopconfirm";
const _sfc_main = vue.defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElButton: index.ElButton,
    ElTooltip: index$1.ElTooltip,
    ElIcon: index$2.ElIcon
  },
  props: popconfirm.popconfirmProps,
  setup(props) {
    const { compatTeleported } = deprecation.useDeprecateAppendToBody(COMPONENT_NAME, "appendToBody");
    const { t } = index$3.useLocale();
    const ns = index$4.useNamespace("popconfirm");
    const tooltipRef = vue.ref();
    const hidePopper = () => {
      var _a, _b;
      (_b = (_a = vue.unref(tooltipRef)) == null ? void 0 : _a.onClose) == null ? void 0 : _b.call(_a);
    };
    const handleCallback = () => {
      hidePopper();
    };
    const confirm = (e) => {
      var _a;
      (_a = props.onConfirm) == null ? void 0 : _a.call(props, e);
      handleCallback();
    };
    const cancel = (e) => {
      var _a;
      (_a = props.onCancel) == null ? void 0 : _a.call(props, e);
      handleCallback();
    };
    const finalConfirmButtonText = vue.computed(() => props.confirmButtonText || t("el.popconfirm.confirmButtonText"));
    const finalCancelButtonText = vue.computed(() => props.cancelButtonText || t("el.popconfirm.cancelButtonText"));
    return {
      finalConfirmButtonText,
      finalCancelButtonText,
      tooltipRef,
      ns,
      compatTeleported,
      confirm,
      cancel
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_el_button = vue.resolveComponent("el-button");
  const _component_el_tooltip = vue.resolveComponent("el-tooltip");
  return vue.openBlock(), vue.createBlock(_component_el_tooltip, vue.mergeProps({ ref: "tooltipRef" }, _ctx.$attrs, {
    trigger: "click",
    effect: "light",
    "popper-class": `${_ctx.ns.namespace.value}-popover`,
    teleported: _ctx.compatTeleported,
    "fallback-placements": ["bottom", "top", "right", "left"],
    "hide-after": _ctx.hideAfter,
    persistent: _ctx.persistent
  }), {
    content: vue.withCtx(() => [
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.ns.b())
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.ns.e("main"))
        }, [
          !_ctx.hideIcon && _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
            key: 0,
            class: vue.normalizeClass(_ctx.ns.e("icon")),
            style: vue.normalizeStyle({ color: _ctx.iconColor })
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon)))
            ]),
            _: 1
          }, 8, ["class", "style"])) : vue.createCommentVNode("v-if", true),
          vue.createTextVNode(" " + vue.toDisplayString(_ctx.title), 1)
        ], 2),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.ns.e("action"))
        }, [
          vue.createVNode(_component_el_button, {
            size: "small",
            type: _ctx.cancelButtonType,
            onClick: _ctx.cancel
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(_ctx.finalCancelButtonText), 1)
            ]),
            _: 1
          }, 8, ["type", "onClick"]),
          vue.createVNode(_component_el_button, {
            size: "small",
            type: _ctx.confirmButtonType,
            onClick: _ctx.confirm
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(_ctx.finalConfirmButtonText), 1)
            ]),
            _: 1
          }, 8, ["type", "onClick"])
        ], 2)
      ], 2)
    ]),
    default: vue.withCtx(() => [
      _ctx.$slots.reference ? vue.renderSlot(_ctx.$slots, "reference", { key: 0 }) : vue.createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 16, ["popper-class", "teleported", "hide-after", "persistent"]);
}
var Popconfirm = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/popconfirm/src/popconfirm.vue"]]);

exports["default"] = Popconfirm;
//# sourceMappingURL=popconfirm4.js.map
