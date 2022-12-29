import { defineComponent, ref, nextTick, onMounted, provide, reactive, toRefs, watch, openBlock, createElementBlock, normalizeClass, renderSlot } from 'vue';
import '../../../constants/index2.mjs';
import '../../../tokens/index2.mjs';
import '../../../hooks/index2.mjs';
import '../../../utils/index2.mjs';
import { radioGroupProps, radioGroupEmits } from './radio-group3.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';
import { useFormItem } from '../../../hooks/use-form-item/index2.mjs';
import { UPDATE_MODEL_EVENT } from '../../../constants/event2.mjs';
import { EVENT_CODE } from '../../../constants/aria2.mjs';
import { radioGroupKey } from '../../../tokens/radio2.mjs';
import { debugWarn } from '../../../utils/error2.mjs';

const _sfc_main = defineComponent({
  name: "ElRadioGroup",
  props: radioGroupProps,
  emits: radioGroupEmits,
  setup(props, ctx) {
    const ns = useNamespace("radio");
    const radioGroupRef = ref();
    const { formItem } = useFormItem();
    const changeEvent = (value) => {
      ctx.emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => ctx.emit("change", value));
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
        case EVENT_CODE.left:
        case EVENT_CODE.up:
          e.stopPropagation();
          e.preventDefault();
          nextIndex = index === 0 ? length - 1 : index - 1;
          break;
        case EVENT_CODE.right:
        case EVENT_CODE.down:
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
    onMounted(() => {
      const radios = radioGroupRef.value.querySelectorAll("[type=radio]");
      const firstLabel = radios[0];
      if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
        firstLabel.tabIndex = 0;
      }
    });
    provide(radioGroupKey, reactive({
      ...toRefs(props),
      changeEvent
    }));
    watch(() => props.modelValue, () => formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn(err)));
    return {
      ns,
      radioGroupRef,
      handleKeydown
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "radioGroupRef",
    class: normalizeClass(_ctx.ns.b("group")),
    role: "radiogroup",
    onKeydown: _cache[0] || (_cache[0] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 34);
}
var RadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/radio/src/radio-group.vue"]]);

export { RadioGroup as default };
//# sourceMappingURL=radio-group4.mjs.map
