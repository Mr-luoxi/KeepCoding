import { ref, inject, computed } from 'vue';
import '../../../utils/index2.mjs';
import '../../../constants/index2.mjs';
import '../../../tokens/index2.mjs';
import '../../../hooks/index2.mjs';
import { buildProps } from '../../../utils/vue/props2.mjs';
import { useSizeProp, useSize, useDisabled } from '../../../hooks/use-common-props/index2.mjs';
import { UPDATE_MODEL_EVENT } from '../../../constants/event2.mjs';
import { isString } from '@vue/shared';
import { isNumber, isBoolean } from '@vueuse/core';
import { radioGroupKey } from '../../../tokens/radio2.mjs';

const radioPropsBase = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
});
const radioProps = buildProps({
  ...radioPropsBase,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  border: Boolean
});
const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
  change: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
const useRadio = (props, emit) => {
  const radioRef = ref();
  const radioGroup = inject(radioGroupKey, void 0);
  const isGroup = computed(() => !!radioGroup);
  const modelValue = computed({
    get() {
      return isGroup.value ? radioGroup.modelValue : props.modelValue;
    },
    set(val) {
      if (isGroup.value) {
        radioGroup.changeEvent(val);
      } else {
        emit(UPDATE_MODEL_EVENT, val);
      }
      radioRef.value.checked = props.modelValue === props.label;
    }
  });
  const size = useSize(computed(() => radioGroup == null ? void 0 : radioGroup.size));
  const disabled = useDisabled(computed(() => radioGroup == null ? void 0 : radioGroup.disabled));
  const focus = ref(false);
  const tabIndex = computed(() => {
    return disabled.value || isGroup.value && modelValue.value !== props.label ? -1 : 0;
  });
  return {
    radioRef,
    isGroup,
    radioGroup,
    focus,
    size,
    disabled,
    tabIndex,
    modelValue
  };
};

export { radioEmits, radioProps, radioPropsBase, useRadio };
//# sourceMappingURL=radio3.mjs.map
