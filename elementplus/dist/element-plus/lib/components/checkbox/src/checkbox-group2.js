'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../constants/index2.js');
require('../../../utils/index2.js');
require('../../../hooks/index2.js');
var useCheckbox = require('./useCheckbox2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var validator = require('../../../utils/vue/validator2.js');
var event = require('../../../constants/event2.js');
var index = require('../../../hooks/use-common-props/index2.js');
var index$1 = require('../../../hooks/use-namespace/index2.js');
var error = require('../../../utils/error2.js');

const _sfc_main = vue.defineComponent({
  name: "ElCheckboxGroup",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    disabled: Boolean,
    min: {
      type: Number,
      default: void 0
    },
    max: {
      type: Number,
      default: void 0
    },
    size: {
      type: String,
      validator: validator.isValidComponentSize
    },
    fill: {
      type: String,
      default: void 0
    },
    textColor: {
      type: String,
      default: void 0
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: [event.UPDATE_MODEL_EVENT, "change"],
  setup(props, { emit, slots }) {
    const { elFormItem } = useCheckbox.useCheckboxGroup();
    const checkboxGroupSize = index.useSize();
    const ns = index$1.useNamespace("checkbox");
    const changeEvent = (value) => {
      emit(event.UPDATE_MODEL_EVENT, value);
      vue.nextTick(() => {
        emit("change", value);
      });
    };
    const modelValue = vue.computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    vue.provide("CheckboxGroup", {
      name: "ElCheckboxGroup",
      modelValue,
      ...vue.toRefs(props),
      checkboxGroupSize,
      changeEvent
    });
    vue.watch(() => props.modelValue, () => {
      var _a;
      (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => error.debugWarn(err));
    });
    return () => {
      return vue.h(props.tag, {
        class: ns.b("group"),
        role: "group",
        "aria-label": "checkbox-group"
      }, [vue.renderSlot(slots, "default")]);
    };
  }
});
var CheckboxGroup = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/checkbox/src/checkbox-group.vue"]]);

exports["default"] = CheckboxGroup;
//# sourceMappingURL=checkbox-group2.js.map
