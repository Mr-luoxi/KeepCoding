'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index$4 = require('../../icon/index2.js');
require('../../../hooks/index2.js');
require('../../../tokens/index2.js');
var button = require('./button4.js');
var buttonCustom = require('./button-custom2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var button$1 = require('../../../tokens/button2.js');
var index = require('../../../hooks/use-global-config/index2.js');
var index$1 = require('../../../hooks/use-namespace/index2.js');
var index$2 = require('../../../hooks/use-form-item/index2.js');
var index$3 = require('../../../hooks/use-common-props/index2.js');

const _hoisted_1 = ["disabled", "autofocus", "type"];
const __default__ = {
  name: "ElButton"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: button.buttonProps,
  emits: button.buttonEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const slots = vue.useSlots();
    const buttonGroupContext = vue.inject(button$1.buttonGroupContextKey, void 0);
    const globalConfig = index.useGlobalConfig("button");
    const ns = index$1.useNamespace("button");
    const { form } = index$2.useFormItem();
    const _size = index$3.useSize(vue.computed(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
    const _disabled = index$3.useDisabled();
    const _ref = vue.ref();
    const _type = vue.computed(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
    const autoInsertSpace = vue.computed(() => {
      var _a, _b, _c;
      return (_c = (_b = props.autoInsertSpace) != null ? _b : (_a = globalConfig.value) == null ? void 0 : _a.autoInsertSpace) != null ? _c : false;
    });
    const shouldAddSpace = vue.computed(() => {
      var _a;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
        const slot = defaultSlot[0];
        if ((slot == null ? void 0 : slot.type) === vue.Text) {
          const text = slot.children;
          return /^\p{Unified_Ideograph}{2}$/u.test(text.trim());
        }
      }
      return false;
    });
    const buttonStyle = buttonCustom.useButtonCustomStyle(props);
    const handleClick = (evt) => {
      if (props.nativeType === "reset") {
        form == null ? void 0 : form.resetFields();
      }
      emit("click", evt);
    };
    expose({
      ref: _ref,
      size: _size,
      type: _type,
      disabled: _disabled,
      shouldAddSpace
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        ref_key: "_ref",
        ref: _ref,
        class: vue.normalizeClass([
          vue.unref(ns).b(),
          vue.unref(ns).m(vue.unref(_type)),
          vue.unref(ns).m(vue.unref(_size)),
          vue.unref(ns).is("disabled", vue.unref(_disabled)),
          vue.unref(ns).is("loading", _ctx.loading),
          vue.unref(ns).is("plain", _ctx.plain),
          vue.unref(ns).is("round", _ctx.round),
          vue.unref(ns).is("circle", _ctx.circle)
        ]),
        disabled: vue.unref(_disabled) || _ctx.loading,
        autofocus: _ctx.autofocus,
        type: _ctx.nativeType,
        style: vue.normalizeStyle(vue.unref(buttonStyle)),
        onClick: handleClick
      }, [
        _ctx.loading ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          _ctx.$slots.loading ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 }) : (vue.openBlock(), vue.createBlock(vue.unref(index$4.ElIcon), {
            key: 1,
            class: vue.normalizeClass(vue.unref(ns).is("loading"))
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 2112)) : _ctx.icon || _ctx.$slots.icon ? (vue.openBlock(), vue.createBlock(vue.unref(index$4.ElIcon), { key: 1 }, {
          default: vue.withCtx(() => [
            _ctx.icon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon), { key: 0 })) : vue.renderSlot(_ctx.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : vue.createCommentVNode("v-if", true),
        _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 2,
          class: vue.normalizeClass({ [vue.unref(ns).em("text", "expand")]: vue.unref(shouldAddSpace) })
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2)) : vue.createCommentVNode("v-if", true)
      ], 14, _hoisted_1);
    };
  }
});
var Button = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/button/src/button.vue"]]);

exports["default"] = Button;
//# sourceMappingURL=button3.js.map
