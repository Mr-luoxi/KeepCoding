'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/index2.js');
require('../../../tokens/index2.js');
require('../../../hooks/index2.js');
var form = require('./form4.js');
var utils = require('./utils2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-common-props/index2.js');
var index$1 = require('../../../hooks/use-namespace/index2.js');
var error = require('../../../utils/error2.js');
var shared = require('@vue/shared');
var form$1 = require('../../../tokens/form2.js');

const __default__ = {
  name: "ElForm"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: form.formProps,
  emits: form.formEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const COMPONENT_NAME = "ElForm";
    const fields = [];
    const formSize = index.useSize();
    const ns = index$1.useNamespace("form");
    const formClasses = vue.computed(() => {
      const { labelPosition, inline } = props;
      return [
        ns.b(),
        ns.m(formSize.value || "default"),
        {
          [ns.m(`label-${labelPosition}`)]: labelPosition,
          [ns.m("inline")]: inline
        }
      ];
    });
    const addField = (field) => {
      fields.push(field);
    };
    const removeField = (field) => {
      if (field.prop) {
        fields.splice(fields.indexOf(field), 1);
      }
    };
    const resetFields = (properties = []) => {
      if (!props.model) {
        error.debugWarn(COMPONENT_NAME, "model is required for resetFields to work.");
        return;
      }
      utils.filterFields(fields, properties).forEach((field) => field.resetField());
    };
    const clearValidate = (props2 = []) => {
      utils.filterFields(fields, props2).forEach((field) => field.clearValidate());
    };
    const isValidatable = vue.computed(() => {
      const hasModel = !!props.model;
      if (!hasModel) {
        error.debugWarn(COMPONENT_NAME, "model is required for validate to work.");
      }
      return hasModel;
    });
    const obtainValidateFields = (props2) => {
      if (fields.length === 0)
        return [];
      const filteredFields = utils.filterFields(fields, props2);
      if (!filteredFields.length) {
        error.debugWarn(COMPONENT_NAME, "please pass correct props!");
        return [];
      }
      return filteredFields;
    };
    const validate = async (callback) => validateField(void 0, callback);
    const doValidateField = async (props2 = []) => {
      if (!isValidatable.value)
        return false;
      const fields2 = obtainValidateFields(props2);
      if (fields2.length === 0)
        return true;
      let validationErrors = {};
      for (const field of fields2) {
        try {
          await field.validate("");
        } catch (fields3) {
          validationErrors = {
            ...validationErrors,
            ...fields3
          };
        }
      }
      if (Object.keys(validationErrors).length === 0)
        return true;
      return Promise.reject(validationErrors);
    };
    const validateField = async (modelProps = [], callback) => {
      const shouldThrow = !shared.isFunction(callback);
      try {
        const result = await doValidateField(modelProps);
        if (result === true) {
          callback == null ? void 0 : callback(result);
        }
        return result;
      } catch (e) {
        const invalidFields = e;
        if (props.scrollToError) {
          scrollToField(Object.keys(invalidFields)[0]);
        }
        callback == null ? void 0 : callback(false, invalidFields);
        return shouldThrow && Promise.reject(invalidFields);
      }
    };
    const scrollToField = (prop) => {
      var _a;
      const field = utils.filterFields(fields, prop)[0];
      if (field) {
        (_a = field.$el) == null ? void 0 : _a.scrollIntoView();
      }
    };
    vue.watch(() => props.rules, () => {
      if (props.validateOnRuleChange)
        validate();
    }, { deep: true });
    vue.provide(form$1.formContextKey, vue.reactive({
      ...vue.toRefs(props),
      emit,
      resetFields,
      clearValidate,
      validateField,
      addField,
      removeField,
      ...utils.useFormLabelWidth()
    }));
    expose({
      validate,
      validateField,
      resetFields,
      clearValidate,
      scrollToField
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("form", {
        class: vue.normalizeClass(vue.unref(formClasses))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Form = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/form/src/form.vue"]]);

exports["default"] = Form;
//# sourceMappingURL=form3.js.map
