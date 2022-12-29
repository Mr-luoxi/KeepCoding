import { computed, inject, ref } from 'vue'
import { buildProps, isBoolean, isNumber, isString } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { radioGroupKey } from '@element-plus/tokens'
import { useDisabled, useSize, useSizeProp } from '@element-plus/hooks'
import type { ExtractPropTypes, SetupContext } from 'vue'

export const radioPropsBase = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: '',
  },
})
export const radioProps = buildProps({
  ...radioPropsBase,
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  border: Boolean,
} as const)
export type RadioProps = ExtractPropTypes<typeof radioProps>

export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
}
export type RadioEmits = typeof radioEmits

export const useRadio = (
  props: { label: RadioProps['label']; modelValue?: RadioProps['modelValue'] },
  emit: SetupContext<RadioEmits>['emit']
) => {
  const radioRef = ref<HTMLInputElement>()
  const radioGroup = inject(radioGroupKey, undefined)
  const isGroup = computed(() => !!radioGroup)
  const modelValue = computed<RadioProps['modelValue']>({
    get() {
      return isGroup.value ? radioGroup!.modelValue : props.modelValue!
    },
    set(val) {
      if (isGroup.value) {
        radioGroup!.changeEvent(val)
      } else {
        emit(UPDATE_MODEL_EVENT, val)
      }
      radioRef.value!.checked = props.modelValue === props.label
    },
  })

  const size = useSize(computed(() => radioGroup?.size))
  const disabled = useDisabled(computed(() => radioGroup?.disabled))
  const focus = ref(false)
  const tabIndex = computed(() => {
    return disabled.value || (isGroup.value && modelValue.value !== props.label)
      ? -1
      : 0
  })

  return {
    radioRef,
    isGroup,
    radioGroup,
    focus,
    size,
    disabled,
    tabIndex,
    modelValue,
  }
}
