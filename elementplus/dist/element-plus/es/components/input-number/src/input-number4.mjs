import { defineComponent, ref, reactive, computed, watch, onMounted, onUpdated, resolveComponent, resolveDirective, openBlock, createElementBlock, normalizeClass, withModifiers, withDirectives, withKeys, createVNode, withCtx, createBlock, createCommentVNode } from 'vue';
import { ElIcon } from '../../icon/index2.mjs';
import '../../../directives/index2.mjs';
import '../../../hooks/index2.mjs';
import { ElInput } from '../../input/index2.mjs';
import '../../../utils/index2.mjs';
import { ArrowUp, ArrowDown, Plus, Minus } from '@element-plus/icons-vue';
import { inputNumberProps, inputNumberEmits } from './input-number3.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import RepeatClick from '../../../directives/repeat-click/index2.mjs';
import { useFormItem } from '../../../hooks/use-form-item/index2.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';
import { isUndefined } from '../../../utils/types2.mjs';
import { debugWarn } from '../../../utils/error2.mjs';
import { useSize, useDisabled } from '../../../hooks/use-common-props/index2.mjs';
import { isNumber } from '@vueuse/core';

const _sfc_main = defineComponent({
  name: "ElInputNumber",
  components: {
    ElInput,
    ElIcon,
    ArrowUp,
    ArrowDown,
    Plus,
    Minus
  },
  directives: {
    RepeatClick
  },
  props: inputNumberProps,
  emits: inputNumberEmits,
  setup(props, { emit }) {
    const input = ref();
    const data = reactive({
      currentValue: props.modelValue,
      userInput: null
    });
    const { formItem } = useFormItem();
    const ns = useNamespace("input-number");
    const minDisabled = computed(() => ensurePrecision(props.modelValue, -1) < props.min);
    const maxDisabled = computed(() => ensurePrecision(props.modelValue) > props.max);
    const numPrecision = computed(() => {
      const stepPrecision = getPrecision(props.step);
      if (!isUndefined(props.precision)) {
        if (stepPrecision > props.precision) {
          debugWarn("InputNumber", "precision should not be less than the decimal places of step");
        }
        return props.precision;
      } else {
        return Math.max(getPrecision(props.modelValue), stepPrecision);
      }
    });
    const controlsAtRight = computed(() => {
      return props.controls && props.controlsPosition === "right";
    });
    const inputNumberSize = useSize();
    const inputNumberDisabled = useDisabled();
    const displayValue = computed(() => {
      if (data.userInput !== null) {
        return data.userInput;
      }
      let currentValue = data.currentValue;
      if (isNumber(currentValue)) {
        if (Number.isNaN(currentValue))
          return "";
        if (!isUndefined(props.precision)) {
          currentValue = currentValue.toFixed(props.precision);
        }
      }
      return currentValue;
    });
    const toPrecision = (num, pre) => {
      if (isUndefined(pre))
        pre = numPrecision.value;
      const digits = num.toString().split(".");
      if (digits.length > 1) {
        const integer = digits[0];
        const decimal = Math.round(+digits[1] / 10 ** (digits[1].length - pre));
        return Number.parseFloat(`${integer}.${decimal}`);
      }
      return Number.parseFloat(`${Math.round(num * 10 ** pre) / 10 ** pre}`);
    };
    const getPrecision = (value) => {
      if (isUndefined(value))
        return 0;
      const valueString = value.toString();
      const dotPosition = valueString.indexOf(".");
      let precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    };
    const ensurePrecision = (val, coefficient = 1) => {
      if (!isNumber(val))
        return data.currentValue;
      val = isNumber(val) ? val : Number.NaN;
      return toPrecision(val + props.step * coefficient);
    };
    const increase = () => {
      if (inputNumberDisabled.value || maxDisabled.value)
        return;
      const value = props.modelValue || 0;
      const newVal = ensurePrecision(value);
      setCurrentValue(newVal);
    };
    const decrease = () => {
      if (inputNumberDisabled.value || minDisabled.value)
        return;
      const value = props.modelValue || 0;
      const newVal = ensurePrecision(value, -1);
      setCurrentValue(newVal);
    };
    const verifyValue = (value, update) => {
      const { max, min, step, precision, stepStrictly } = props;
      let newVal = Number(value);
      if (value === null) {
        newVal = Number.NaN;
      }
      if (!Number.isNaN(newVal)) {
        if (stepStrictly) {
          newVal = Math.round(newVal / step) * step;
        }
        if (!isUndefined(precision)) {
          newVal = toPrecision(newVal, precision);
        }
        if (newVal > max || newVal < min) {
          newVal = newVal > max ? max : min;
          update && emit("update:modelValue", newVal);
        }
      }
      return newVal;
    };
    const setCurrentValue = (value) => {
      var _a;
      const oldVal = data.currentValue;
      let newVal = verifyValue(value);
      if (oldVal === newVal)
        return;
      if (Number.isNaN(newVal)) {
        newVal = void 0;
      }
      data.userInput = null;
      emit("update:modelValue", newVal);
      emit("input", newVal);
      emit("change", newVal, oldVal);
      (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => debugWarn(err));
      data.currentValue = newVal;
    };
    const handleInput = (value) => {
      return data.userInput = value;
    };
    const handleInputChange = (value) => {
      const newVal = value !== "" ? Number(value) : "";
      if (isNumber(newVal) && !Number.isNaN(newVal) || value === "") {
        setCurrentValue(newVal);
      }
      data.userInput = null;
    };
    const focus = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    const blur = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.blur) == null ? void 0 : _b.call(_a);
    };
    const handleFocus = (event) => {
      emit("focus", event);
    };
    const handleBlur = (event) => {
      var _a;
      emit("blur", event);
      (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "blur").catch((err) => debugWarn(err));
    };
    watch(() => props.modelValue, (value) => {
      const newVal = verifyValue(value, true);
      data.currentValue = newVal;
      data.userInput = null;
    }, { immediate: true });
    onMounted(() => {
      var _a;
      const innerInput = (_a = input.value) == null ? void 0 : _a.input;
      innerInput.setAttribute("role", "spinbutton");
      innerInput.setAttribute("aria-valuemax", String(props.max));
      innerInput.setAttribute("aria-valuemin", String(props.min));
      innerInput.setAttribute("aria-valuenow", String(data.currentValue));
      innerInput.setAttribute("aria-disabled", String(inputNumberDisabled.value));
      if (!isNumber(props.modelValue)) {
        let val = Number(props.modelValue);
        if (Number.isNaN(val)) {
          val = void 0;
        }
        emit("update:modelValue", val);
      }
    });
    onUpdated(() => {
      var _a;
      const innerInput = (_a = input.value) == null ? void 0 : _a.input;
      innerInput == null ? void 0 : innerInput.setAttribute("aria-valuenow", data.currentValue);
    });
    return {
      input,
      displayValue,
      handleInput,
      handleInputChange,
      controlsAtRight,
      decrease,
      increase,
      inputNumberSize,
      inputNumberDisabled,
      maxDisabled,
      minDisabled,
      focus,
      blur,
      handleFocus,
      handleBlur,
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_minus = resolveComponent("minus");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_arrow_up = resolveComponent("arrow-up");
  const _component_plus = resolveComponent("plus");
  const _component_el_input = resolveComponent("el-input");
  const _directive_repeat_click = resolveDirective("repeat-click");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      _ctx.ns.b(),
      _ctx.ns.m(_ctx.inputNumberSize),
      _ctx.ns.is("disabled", _ctx.inputNumberDisabled),
      _ctx.ns.is("without-controls", !_ctx.controls),
      _ctx.ns.is("controls-right", _ctx.controlsAtRight)
    ]),
    onDragstart: _cache[2] || (_cache[2] = withModifiers(() => {
    }, ["prevent"]))
  }, [
    _ctx.controls ? withDirectives((openBlock(), createElementBlock("span", {
      key: 0,
      role: "button",
      class: normalizeClass([_ctx.ns.e("decrease"), _ctx.ns.is("disabled", _ctx.minDisabled)]),
      onKeydown: _cache[0] || (_cache[0] = withKeys((...args) => _ctx.decrease && _ctx.decrease(...args), ["enter"]))
    }, [
      createVNode(_component_el_icon, null, {
        default: withCtx(() => [
          _ctx.controlsAtRight ? (openBlock(), createBlock(_component_arrow_down, { key: 0 })) : (openBlock(), createBlock(_component_minus, { key: 1 }))
        ]),
        _: 1
      })
    ], 34)), [
      [_directive_repeat_click, _ctx.decrease]
    ]) : createCommentVNode("v-if", true),
    _ctx.controls ? withDirectives((openBlock(), createElementBlock("span", {
      key: 1,
      role: "button",
      class: normalizeClass([_ctx.ns.e("increase"), _ctx.ns.is("disabled", _ctx.maxDisabled)]),
      onKeydown: _cache[1] || (_cache[1] = withKeys((...args) => _ctx.increase && _ctx.increase(...args), ["enter"]))
    }, [
      createVNode(_component_el_icon, null, {
        default: withCtx(() => [
          _ctx.controlsAtRight ? (openBlock(), createBlock(_component_arrow_up, { key: 0 })) : (openBlock(), createBlock(_component_plus, { key: 1 }))
        ]),
        _: 1
      })
    ], 34)), [
      [_directive_repeat_click, _ctx.increase]
    ]) : createCommentVNode("v-if", true),
    createVNode(_component_el_input, {
      ref: "input",
      type: "number",
      step: _ctx.step,
      "model-value": _ctx.displayValue,
      placeholder: _ctx.placeholder,
      disabled: _ctx.inputNumberDisabled,
      size: _ctx.inputNumberSize,
      max: _ctx.max,
      min: _ctx.min,
      name: _ctx.name,
      label: _ctx.label,
      "validate-event": false,
      onKeydown: [
        withKeys(withModifiers(_ctx.increase, ["prevent"]), ["up"]),
        withKeys(withModifiers(_ctx.decrease, ["prevent"]), ["down"])
      ],
      onBlur: _ctx.handleBlur,
      onFocus: _ctx.handleFocus,
      onInput: _ctx.handleInput,
      onChange: _ctx.handleInputChange
    }, null, 8, ["step", "model-value", "placeholder", "disabled", "size", "max", "min", "name", "label", "onKeydown", "onBlur", "onFocus", "onInput", "onChange"])
  ], 34);
}
var InputNumber = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/input-number/src/input-number.vue"]]);

export { InputNumber as default };
//# sourceMappingURL=input-number4.mjs.map
