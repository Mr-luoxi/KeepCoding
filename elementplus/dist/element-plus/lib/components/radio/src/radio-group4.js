'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../constants/index2.js');
require('../../../tokens/index2.js');
require('../../../hooks/index2.js');
require('../../../utils/index2.js');
var radioGroup = require('./radio-group3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index2.js');
var index$1 = require('../../../hooks/use-form-item/index2.js');
var event = require('../../../constants/event2.js');
var aria = require('../../../constants/aria2.js');
var radio = require('../../../tokens/radio2.js');
var error = require('../../../utils/error2.js');

const _sfc_main = vue.defineComponent({
  name: "ElRadioGroup",
  props: radioGroup.radioGroupProps,
  emits: radioGroup.radioGroupEmits,
  setup(props, ctx) {
    const ns = index.useNamespace("radio");
    const radioGroupRef = vue.ref();
    const { formItem } = index$1.useFormItem();
    const changeEvent = (value) => {
      ctx.emit(event.UPDATE_MODEL_EVENT, value);
      vue.nextTick(() => ctx.emit("change", value));
    };
    const handleKeydown = (e) => {
      if (!radioGroupRef.value)
        return;
      const target = e.target;
      const className = target.nodeName === "INPUT" ? "[type=radio]" : "[role=radio]";
      const radios = radioGroupRef.value.querySelectorAll(className);
      const length = radios.length;
      const index = Array.from(radios).indexOf(target);
      const roleRadios = radioGroupRef.value.querySelectorAll("[role=radio]");
      let nextIndex = null;
      switch (e.code) {
        case aria.EVENT_CODE.left:
        case aria.EVENT_CODE.up:
          e.stopPropagation();
          e.preventDefault();
          nextIndex = index === 0 ? length - 1 : index - 1;
          break;
        case aria.EVENT_CODE.right:
        case aria.EVENT_CODE.down:
          e.stopPropagation();
          e.preventDefault();
          nextIndex = index === length - 1 ? 0 : index + 1;
          break;
        default:
          break;
      }
      if (nextIndex === null)
        return;
      roleRadios[nextIndex].click();
      roleRadios[nextIndex].focus();
    };
    vue.onMounted(() => {
      const radios = radioGroupRef.value.querySelectorAll("[type=radio]");
      const firstLabel = radios[0];
      if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
        firstLabel.tabIndex = 0;
      }
    });
    vue.provide(radio.radioGroupKey, vue.reactive({
      ...vue.toRefs(props),
      changeEvent
    }));
    vue.watch(() => props.modelValue, () => formItem == null ? void 0 : formItem.validate("change").catch((err) => error.debugWarn(err)));
    return {
      ns,
      radioGroupRef,
      handleKeydown
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "radioGroupRef",
    class: vue.normalizeClass(_ctx.ns.b("group")),
    role: "radiogroup",
    onKeydown: _cache[0] || (_cache[0] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 34);
}
var RadioGroup = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/radio/src/radio-group.vue"]]);

exports["default"] = RadioGroup;
//# sourceMappingURL=radio-group4.js.map
