'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var AsyncValidator = require('async-validator');
var lodashUnified = require('lodash-unified');
var core = require('@vueuse/core');
require('../../../utils/index2.js');
require('../../../tokens/index2.js');
require('../../../hooks/index2.js');
var formItem = require('./form-item3.js');
var formLabelWrap = require('./form-label-wrap.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var form = require('../../../tokens/form2.js');
var index = require('../../../hooks/use-common-props/index2.js');
var index$1 = require('../../../hooks/use-namespace/index2.js');
var style = require('../../../utils/dom/style2.js');
var shared = require('@vue/shared');
var objects = require('../../../utils/objects2.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var AsyncValidator__default = /*#__PURE__*/_interopDefaultLegacy(AsyncValidator);

const _hoisted_1 = ["for"];
const __default__ = {
  name: "ElFormItem"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: formItem.formItemProps,
  setup(__props, { expose }) {
    const props = __props;
    const slots = vue.useSlots();
    const formContext = vue.inject(form.formContextKey, void 0);
    const parentFormItemContext = vue.inject(form.formItemContextKey, void 0);
    const _size = index.useSize(void 0, { formItem: false });
    const ns = index$1.useNamespace("form-item");
    const validateState = vue.ref("");
    const validateStateDebounced = core.refDebounced(validateState, 100);
    const validateMessage = vue.ref("");
    const formItemRef = vue.ref();
    let initialValue = void 0;
    let isResettingField = false;
    const labelStyle = vue.computed(() => {
      if ((formContext == null ? void 0 : formContext.labelPosition) === "top") {
        return {};
      }
      const labelWidth = style.addUnit(props.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
      if (labelWidth)
        return { width: labelWidth };
      return {};
    });
    const contentStyle = vue.computed(() => {
      if ((formContext == null ? void 0 : formContext.labelPosition) === "top" || (formContext == null ? void 0 : formContext.inline)) {
        return {};
      }
      if (!props.label && !props.labelWidth && isNested) {
        return {};
      }
      const labelWidth = style.addUnit(props.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
      if (!props.label && !slots.label) {
        return { marginLeft: labelWidth };
      }
      return {};
    });
    const formItemClasses = vue.computed(() => [
      ns.b(),
      ns.m(_size.value),
      ns.is("error", validateState.value === "error"),
      ns.is("validating", validateState.value === "validating"),
      ns.is("success", validateState.value === "success"),
      ns.is("required", isRequired.value || props.required),
      ns.is("no-asterisk", formContext == null ? void 0 : formContext.hideRequiredAsterisk),
      { [ns.m("feedback")]: formContext == null ? void 0 : formContext.statusIcon }
    ]);
    const _inlineMessage = vue.computed(() => core.isBoolean(props.inlineMessage) ? props.inlineMessage : (formContext == null ? void 0 : formContext.inlineMessage) || false);
    const validateClasses = vue.computed(() => [
      ns.e("error"),
      { [ns.em("error", "inline")]: _inlineMessage.value }
    ]);
    const propString = vue.computed(() => {
      if (!props.prop)
        return "";
      return shared.isString(props.prop) ? props.prop : props.prop.join(".");
    });
    const labelFor = vue.computed(() => props.for || propString.value);
    const isNested = !!parentFormItemContext;
    const fieldValue = vue.computed(() => {
      const model = formContext == null ? void 0 : formContext.model;
      if (!model || !props.prop) {
        return;
      }
      return objects.getProp(model, props.prop).value;
    });
    const _rules = vue.computed(() => {
      const rules = props.rules ? lodashUnified.castArray(props.rules) : [];
      const formRules = formContext == null ? void 0 : formContext.rules;
      if (formRules && props.prop) {
        const _rules2 = objects.getProp(formRules, props.prop).value;
        if (_rules2) {
          rules.push(...lodashUnified.castArray(_rules2));
        }
      }
      if (props.required !== void 0) {
        rules.push({ required: !!props.required });
      }
      return rules;
    });
    const validateEnabled = vue.computed(() => _rules.value.length > 0);
    const getFilteredRule = (trigger) => {
      const rules = _rules.value;
      return rules.filter((rule) => {
        if (!rule.trigger || !trigger)
          return true;
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.includes(trigger);
        } else {
          return rule.trigger === trigger;
        }
      }).map(({ trigger: trigger2, ...rule }) => rule);
    };
    const isRequired = vue.computed(() => _rules.value.some((rule) => rule.required === true));
    const shouldShowError = vue.computed(() => {
      var _a;
      return validateStateDebounced.value === "error" && props.showMessage && ((_a = formContext == null ? void 0 : formContext.showMessage) != null ? _a : true);
    });
    const currentLabel = vue.computed(() => `${props.label || ""}${(formContext == null ? void 0 : formContext.labelSuffix) || ""}`);
    const setValidationState = (state) => {
      validateState.value = state;
    };
    const onValidationFailed = (error) => {
      var _a, _b;
      const { errors, fields } = error;
      if (!errors || !fields) {
        console.error(error);
      }
      setValidationState("error");
      validateMessage.value = errors ? (_b = (_a = errors == null ? void 0 : errors[0]) == null ? void 0 : _a.message) != null ? _b : `${props.prop} is required` : "";
      formContext == null ? void 0 : formContext.emit("validate", props.prop, false, validateMessage.value);
    };
    const onValidationSucceeded = () => {
      setValidationState("success");
      formContext == null ? void 0 : formContext.emit("validate", props.prop, true, "");
    };
    const doValidate = async (rules) => {
      const modelName = propString.value;
      const validator = new AsyncValidator__default["default"]({
        [modelName]: rules
      });
      return validator.validate({ [modelName]: fieldValue.value }, { firstFields: true }).then(() => {
        onValidationSucceeded();
        return true;
      }).catch((err) => {
        onValidationFailed(err);
        return Promise.reject(err);
      });
    };
    const validate = async (trigger, callback) => {
      if (isResettingField) {
        isResettingField = false;
        return false;
      }
      const hasCallback = shared.isFunction(callback);
      if (!validateEnabled.value) {
        callback == null ? void 0 : callback(false);
        return false;
      }
      const rules = getFilteredRule(trigger);
      if (rules.length === 0) {
        callback == null ? void 0 : callback(true);
        return true;
      }
      setValidationState("validating");
      return doValidate(rules).then(() => {
        callback == null ? void 0 : callback(true);
        return true;
      }).catch((err) => {
        const { fields } = err;
        callback == null ? void 0 : callback(false, fields);
        return hasCallback ? false : Promise.reject(fields);
      });
    };
    const clearValidate = () => {
      setValidationState("");
      validateMessage.value = "";
    };
    const resetField = async () => {
      const model = formContext == null ? void 0 : formContext.model;
      if (!model || !props.prop)
        return;
      const computedValue = objects.getProp(model, props.prop);
      if (!lodashUnified.isEqual(computedValue.value, initialValue)) {
        isResettingField = true;
      }
      computedValue.value = initialValue;
      await vue.nextTick();
      clearValidate();
    };
    vue.watch(() => props.error, (val) => {
      validateMessage.value = val || "";
      setValidationState(val ? "error" : "");
    }, { immediate: true });
    vue.watch(() => props.validateStatus, (val) => setValidationState(val || ""));
    const context = vue.reactive({
      ...vue.toRefs(props),
      $el: formItemRef,
      size: _size,
      validateState,
      resetField,
      clearValidate,
      validate
    });
    vue.provide(form.formItemContextKey, context);
    vue.onMounted(() => {
      if (props.prop) {
        formContext == null ? void 0 : formContext.addField(context);
        initialValue = lodashUnified.clone(fieldValue.value);
      }
    });
    vue.onBeforeUnmount(() => {
      formContext == null ? void 0 : formContext.removeField(context);
    });
    expose({
      size: _size,
      validateMessage,
      validateState,
      validate,
      clearValidate,
      resetField
    });
    return (_ctx, _cache) => {
      var _a;
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "formItemRef",
        ref: formItemRef,
        class: vue.normalizeClass(vue.unref(formItemClasses))
      }, [
        vue.createVNode(vue.unref(formLabelWrap["default"]), {
          "is-auto-width": vue.unref(labelStyle).width === "auto",
          "update-all": ((_a = vue.unref(formContext)) == null ? void 0 : _a.labelWidth) === "auto"
        }, {
          default: vue.withCtx(() => [
            _ctx.label || _ctx.$slots.label ? (vue.openBlock(), vue.createElementBlock("label", {
              key: 0,
              for: vue.unref(labelFor),
              class: vue.normalizeClass(vue.unref(ns).e("label")),
              style: vue.normalizeStyle(vue.unref(labelStyle))
            }, [
              vue.renderSlot(_ctx.$slots, "label", { label: vue.unref(currentLabel) }, () => [
                vue.createTextVNode(vue.toDisplayString(vue.unref(currentLabel)), 1)
              ])
            ], 14, _hoisted_1)) : vue.createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(ns).e("content")),
          style: vue.normalizeStyle(vue.unref(contentStyle))
        }, [
          vue.renderSlot(_ctx.$slots, "default"),
          vue.createVNode(vue.Transition, {
            name: `${vue.unref(ns).namespace.value}-zoom-in-top`
          }, {
            default: vue.withCtx(() => [
              vue.unref(shouldShowError) ? vue.renderSlot(_ctx.$slots, "error", {
                key: 0,
                error: validateMessage.value
              }, () => [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(vue.unref(validateClasses))
                }, vue.toDisplayString(validateMessage.value), 3)
              ]) : vue.createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 2);
    };
  }
});
var FormItem = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/form/src/form-item.vue"]]);

exports["default"] = FormItem;
//# sourceMappingURL=form-item4.js.map
