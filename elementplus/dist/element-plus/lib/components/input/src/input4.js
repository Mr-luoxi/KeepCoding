'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
var lodashUnified = require('lodash-unified');
var index$5 = require('../../icon/index2.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../utils/index2.js');
require('../../../hooks/index2.js');
require('../../../constants/index2.js');
var utils = require('./utils2.js');
var input = require('./input3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-attrs/index2.js');
var index$1 = require('../../../hooks/use-form-item/index2.js');
var index$2 = require('../../../hooks/use-common-props/index2.js');
var index$3 = require('../../../hooks/use-namespace/index2.js');
var icon = require('../../../utils/vue/icon2.js');
var index$4 = require('../../../hooks/use-cursor/index2.js');
var shared = require('@vue/shared');
var event = require('../../../constants/event2.js');
var i18n = require('../../../utils/i18n2.js');
var error = require('../../../utils/error2.js');

const _hoisted_1 = ["type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"];
const _hoisted_2 = ["tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"];
const __default__ = {
  name: "ElInput",
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: input.inputProps,
  emits: input.inputEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const PENDANT_MAP = {
      suffix: "append",
      prefix: "prepend"
    };
    const instance = vue.getCurrentInstance();
    const rawAttrs = vue.useAttrs();
    const slots = vue.useSlots();
    const attrs = index.useAttrs();
    const { form, formItem } = index$1.useFormItem();
    const inputSize = index$2.useSize();
    const inputDisabled = index$2.useDisabled();
    const nsInput = index$3.useNamespace("input");
    const nsTextarea = index$3.useNamespace("textarea");
    const input = vue.shallowRef();
    const textarea = vue.shallowRef();
    const focused = vue.ref(false);
    const hovering = vue.ref(false);
    const isComposing = vue.ref(false);
    const passwordVisible = vue.ref(false);
    const textareaCalcStyle = vue.shallowRef(props.inputStyle);
    const _ref = vue.computed(() => input.value || textarea.value);
    const needStatusIcon = vue.computed(() => {
      var _a;
      return (_a = form == null ? void 0 : form.statusIcon) != null ? _a : false;
    });
    const validateState = vue.computed(() => (formItem == null ? void 0 : formItem.validateState) || "");
    const validateIcon = vue.computed(() => icon.ValidateComponentsMap[validateState.value]);
    const passwordIcon = vue.computed(() => passwordVisible.value ? iconsVue.View : iconsVue.Hide);
    const containerStyle = vue.computed(() => [
      rawAttrs.style,
      props.inputStyle
    ]);
    const textareaStyle = vue.computed(() => [
      props.inputStyle,
      textareaCalcStyle.value,
      { resize: props.resize }
    ]);
    const nativeInputValue = vue.computed(() => lodashUnified.isNil(props.modelValue) ? "" : String(props.modelValue));
    const showClear = vue.computed(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (focused.value || hovering.value));
    const showPwdVisible = vue.computed(() => props.showPassword && !inputDisabled.value && !props.readonly && (!!nativeInputValue.value || focused.value));
    const isWordLimitVisible = vue.computed(() => props.showWordLimit && !!attrs.value.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
    const textLength = vue.computed(() => Array.from(nativeInputValue.value).length);
    const inputExceed = vue.computed(() => !!isWordLimitVisible.value && textLength.value > Number(attrs.value.maxlength));
    const suffixVisible = vue.computed(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
    const [recordCursor, setCursor] = index$4.useCursor(input);
    const resizeTextarea = () => {
      const { type, autosize } = props;
      if (!core.isClient || type !== "textarea")
        return;
      if (autosize) {
        const minRows = shared.isObject(autosize) ? autosize.minRows : void 0;
        const maxRows = shared.isObject(autosize) ? autosize.maxRows : void 0;
        textareaCalcStyle.value = {
          ...utils.calcTextareaHeight(textarea.value, minRows, maxRows)
        };
      } else {
        textareaCalcStyle.value = {
          minHeight: utils.calcTextareaHeight(textarea.value).minHeight
        };
      }
    };
    const setNativeInputValue = () => {
      const input2 = _ref.value;
      if (!input2 || input2.value === nativeInputValue.value)
        return;
      input2.value = nativeInputValue.value;
    };
    const calcIconOffset = (place) => {
      const { el } = instance.vnode;
      if (!el)
        return;
      const elList = Array.from(el.querySelectorAll(`.${nsInput.e(place)}`));
      const target = elList.find((item) => item.parentNode === el);
      if (!target)
        return;
      const pendant = PENDANT_MAP[place];
      if (slots[pendant]) {
        target.style.transform = `translateX(${place === "suffix" ? "-" : ""}${el.querySelector(`.${nsInput.be("group", pendant)}`).offsetWidth}px)`;
      } else {
        target.removeAttribute("style");
      }
    };
    const updateIconOffset = () => {
      calcIconOffset("prefix");
      calcIconOffset("suffix");
    };
    const handleInput = async (event$1) => {
      recordCursor();
      let { value } = event$1.target;
      if (props.formatter) {
        value = props.parser ? props.parser(value) : value;
        value = props.formatter(value);
      }
      if (isComposing.value)
        return;
      if (value === nativeInputValue.value)
        return;
      emit(event.UPDATE_MODEL_EVENT, value);
      emit("input", value);
      await vue.nextTick();
      setNativeInputValue();
      setCursor();
    };
    const handleChange = (event) => {
      emit("change", event.target.value);
    };
    const handleCompositionStart = (event) => {
      emit("compositionstart", event);
      isComposing.value = true;
    };
    const handleCompositionUpdate = (event) => {
      var _a;
      emit("compositionupdate", event);
      const text = (_a = event.target) == null ? void 0 : _a.value;
      const lastCharacter = text[text.length - 1] || "";
      isComposing.value = !i18n.isKorean(lastCharacter);
    };
    const handleCompositionEnd = (event) => {
      emit("compositionend", event);
      if (isComposing.value) {
        isComposing.value = false;
        handleInput(event);
      }
    };
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const focus = async () => {
      var _a;
      await vue.nextTick();
      (_a = _ref.value) == null ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      return (_a = _ref.value) == null ? void 0 : _a.blur();
    };
    const handleFocus = (event) => {
      focused.value = true;
      emit("focus", event);
    };
    const handleBlur = (event) => {
      var _a;
      focused.value = false;
      emit("blur", event);
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "blur").catch((err) => error.debugWarn(err));
      }
    };
    const handleMouseLeave = (evt) => {
      hovering.value = false;
      emit("mouseleave", evt);
    };
    const handleMouseEnter = (evt) => {
      hovering.value = true;
      emit("mouseenter", evt);
    };
    const handleKeydown = (evt) => {
      emit("keydown", evt);
    };
    const select = () => {
      var _a;
      (_a = _ref.value) == null ? void 0 : _a.select();
    };
    const clear = () => {
      emit(event.UPDATE_MODEL_EVENT, "");
      emit("change", "");
      emit("clear");
      emit("input", "");
    };
    vue.watch(() => props.modelValue, () => {
      var _a;
      vue.nextTick(() => resizeTextarea());
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => error.debugWarn(err));
      }
    });
    vue.watch(nativeInputValue, () => setNativeInputValue());
    vue.watch(() => props.type, async () => {
      await vue.nextTick();
      setNativeInputValue();
      resizeTextarea();
      updateIconOffset();
    });
    vue.onMounted(async () => {
      if (!props.formatter && props.parser) {
        error.debugWarn("ElInput", "If you set the parser, you also need to set the formatter.");
      }
      setNativeInputValue();
      updateIconOffset();
      await vue.nextTick();
      resizeTextarea();
    });
    vue.onUpdated(async () => {
      await vue.nextTick();
      updateIconOffset();
    });
    expose({
      input,
      textarea,
      ref: _ref,
      textareaStyle,
      autosize: vue.toRef(props, "autosize"),
      focus,
      blur,
      select,
      clear,
      resizeTextarea
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([
          _ctx.type === "textarea" ? vue.unref(nsTextarea).b() : vue.unref(nsInput).b(),
          vue.unref(nsInput).m(vue.unref(inputSize)),
          vue.unref(nsInput).is("disabled", vue.unref(inputDisabled)),
          vue.unref(nsInput).is("exceed", vue.unref(inputExceed)),
          {
            [vue.unref(nsInput).b("group")]: _ctx.$slots.prepend || _ctx.$slots.append,
            [vue.unref(nsInput).bm("group", "append")]: _ctx.$slots.append,
            [vue.unref(nsInput).bm("group", "prepend")]: _ctx.$slots.prepend,
            [vue.unref(nsInput).m("prefix")]: _ctx.$slots.prefix || _ctx.prefixIcon,
            [vue.unref(nsInput).m("suffix")]: _ctx.$slots.suffix || _ctx.suffixIcon || _ctx.clearable || _ctx.showPassword,
            [vue.unref(nsInput).bm("suffix", "password-clear")]: vue.unref(showClear) && vue.unref(showPwdVisible)
          },
          _ctx.$attrs.class
        ]),
        style: vue.normalizeStyle(vue.unref(containerStyle)),
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave
      }, [
        vue.createCommentVNode(" input "),
        _ctx.type !== "textarea" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createCommentVNode(" prepend slot "),
          _ctx.$slots.prepend ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass(vue.unref(nsInput).be("group", "prepend"))
          }, [
            vue.renderSlot(_ctx.$slots, "prepend")
          ], 2)) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("div", {
            class: vue.normalizeClass([vue.unref(nsInput).e("wrapper"), vue.unref(nsInput).is("focus", focused.value)])
          }, [
            vue.createCommentVNode(" prefix slot "),
            _ctx.$slots.prefix || _ctx.prefixIcon ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 0,
              class: vue.normalizeClass(vue.unref(nsInput).e("prefix"))
            }, [
              vue.createElementVNode("span", {
                class: vue.normalizeClass(vue.unref(nsInput).e("prefix-inner"))
              }, [
                vue.renderSlot(_ctx.$slots, "prefix"),
                _ctx.prefixIcon ? (vue.openBlock(), vue.createBlock(vue.unref(index$5.ElIcon), {
                  key: 0,
                  class: vue.normalizeClass(vue.unref(nsInput).e("icon"))
                }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.prefixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
              ], 2)
            ], 2)) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("input", vue.mergeProps({
              ref_key: "input",
              ref: input,
              class: vue.unref(nsInput).e("inner")
            }, vue.unref(attrs), {
              type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type,
              disabled: vue.unref(inputDisabled),
              formatter: _ctx.formatter,
              parser: _ctx.parser,
              readonly: _ctx.readonly,
              autocomplete: _ctx.autocomplete,
              tabindex: _ctx.tabindex,
              "aria-label": _ctx.label,
              placeholder: _ctx.placeholder,
              style: _ctx.inputStyle,
              onCompositionstart: handleCompositionStart,
              onCompositionupdate: handleCompositionUpdate,
              onCompositionend: handleCompositionEnd,
              onInput: handleInput,
              onFocus: handleFocus,
              onBlur: handleBlur,
              onChange: handleChange,
              onKeydown: handleKeydown
            }), null, 16, _hoisted_1),
            vue.createCommentVNode(" suffix slot "),
            vue.unref(suffixVisible) ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 1,
              class: vue.normalizeClass(vue.unref(nsInput).e("suffix"))
            }, [
              vue.createElementVNode("span", {
                class: vue.normalizeClass(vue.unref(nsInput).e("suffix-inner"))
              }, [
                !vue.unref(showClear) || !vue.unref(showPwdVisible) || !vue.unref(isWordLimitVisible) ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                  vue.renderSlot(_ctx.$slots, "suffix"),
                  _ctx.suffixIcon ? (vue.openBlock(), vue.createBlock(vue.unref(index$5.ElIcon), {
                    key: 0,
                    class: vue.normalizeClass(vue.unref(nsInput).e("icon"))
                  }, {
                    default: vue.withCtx(() => [
                      (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.suffixIcon)))
                    ]),
                    _: 1
                  }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
                ], 64)) : vue.createCommentVNode("v-if", true),
                vue.unref(showClear) ? (vue.openBlock(), vue.createBlock(vue.unref(index$5.ElIcon), {
                  key: 1,
                  class: vue.normalizeClass([vue.unref(nsInput).e("icon"), vue.unref(nsInput).e("clear")]),
                  onMousedown: _cache[0] || (_cache[0] = vue.withModifiers(() => {
                  }, ["prevent"])),
                  onClick: clear
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(iconsVue.CircleClose))
                  ]),
                  _: 1
                }, 8, ["class"])) : vue.createCommentVNode("v-if", true),
                vue.unref(showPwdVisible) ? (vue.openBlock(), vue.createBlock(vue.unref(index$5.ElIcon), {
                  key: 2,
                  class: vue.normalizeClass([vue.unref(nsInput).e("icon"), vue.unref(nsInput).e("password")]),
                  onClick: handlePasswordVisible
                }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(passwordIcon))))
                  ]),
                  _: 1
                }, 8, ["class"])) : vue.createCommentVNode("v-if", true),
                vue.unref(isWordLimitVisible) ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 3,
                  class: vue.normalizeClass(vue.unref(nsInput).e("count"))
                }, [
                  vue.createElementVNode("span", {
                    class: vue.normalizeClass(vue.unref(nsInput).e("count-inner"))
                  }, vue.toDisplayString(vue.unref(textLength)) + " / " + vue.toDisplayString(vue.unref(attrs).maxlength), 3)
                ], 2)) : vue.createCommentVNode("v-if", true),
                vue.unref(validateState) && vue.unref(validateIcon) && vue.unref(needStatusIcon) ? (vue.openBlock(), vue.createBlock(vue.unref(index$5.ElIcon), {
                  key: 4,
                  class: vue.normalizeClass([
                    vue.unref(nsInput).e("icon"),
                    vue.unref(nsInput).e("validateIcon"),
                    vue.unref(nsInput).is("loading", vue.unref(validateState) === "validating")
                  ])
                }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(validateIcon))))
                  ]),
                  _: 1
                }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
              ], 2)
            ], 2)) : vue.createCommentVNode("v-if", true)
          ], 2),
          vue.createCommentVNode(" append slot "),
          _ctx.$slots.append ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 1,
            class: vue.normalizeClass(vue.unref(nsInput).be("group", "append"))
          }, [
            vue.renderSlot(_ctx.$slots, "append")
          ], 2)) : vue.createCommentVNode("v-if", true)
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createCommentVNode(" textarea "),
          vue.createElementVNode("textarea", vue.mergeProps({
            ref_key: "textarea",
            ref: textarea,
            class: vue.unref(nsTextarea).e("inner")
          }, vue.unref(attrs), {
            tabindex: _ctx.tabindex,
            disabled: vue.unref(inputDisabled),
            readonly: _ctx.readonly,
            autocomplete: _ctx.autocomplete,
            style: vue.unref(textareaStyle),
            "aria-label": _ctx.label,
            placeholder: _ctx.placeholder,
            onCompositionstart: handleCompositionStart,
            onCompositionupdate: handleCompositionUpdate,
            onCompositionend: handleCompositionEnd,
            onInput: handleInput,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange,
            onKeydown: handleKeydown
          }), null, 16, _hoisted_2),
          vue.unref(isWordLimitVisible) ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: vue.normalizeClass(vue.unref(nsInput).e("count"))
          }, vue.toDisplayString(vue.unref(textLength)) + " / " + vue.toDisplayString(vue.unref(attrs).maxlength), 3)) : vue.createCommentVNode("v-if", true)
        ], 64))
      ], 38)), [
        [vue.vShow, _ctx.type !== "hidden"]
      ]);
    };
  }
});
var Input = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/input/src/input.vue"]]);

exports["default"] = Input;
//# sourceMappingURL=input4.js.map
