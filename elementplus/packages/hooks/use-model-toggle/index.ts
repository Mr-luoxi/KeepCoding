import { computed, getCurrentInstance, onMounted, watch } from 'vue'
import { isFunction } from '@vue/shared'
import { isClient } from '@vueuse/core'
import { buildProp, definePropType, isBoolean } from '@element-plus/utils'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

import type { ComponentPublicInstance, ExtractPropTypes, Ref } from 'vue'

const _prop = buildProp({
  type: definePropType<boolean | null>(Boolean),
  default: null,
} as const)
const _event = buildProp({
  type: definePropType<(val: boolean) => void>(Function),
} as const)

type _UseModelToggleProps<T extends string> = {
  [K in T]: typeof _prop
} & {
  [K in `onUpdate:${T}`]: typeof _event
}

export const createModelToggleComposable = <T extends string>(name: T) => {
  const useModelToggleProps = {
    [name]: _prop,
    [`onUpdate:${name}`]: _event,
  } as _UseModelToggleProps<T>

  const useModelToggleEmits = [`update:${name}`]

  const useModelToggle = ({
    indicator,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide,
  }: ModelToggleParams) => {
    const instance = getCurrentInstance()!
    const props = instance.props as _UseModelToggleProps<T> & {
      disabled: boolean
    }
    const { emit } = instance

    const updateEventKey = `update:${name}`

    const hasUpdateHandler = computed(() =>
      isFunction(props[`onUpdate:${name}`])
    )
    // when it matches the default value we say this is absent
    // though this could be mistakenly passed from the user but we need to rule out that
    // condition
    const isModelBindingAbsent = computed(() => props[name] === null)

    const doShow = () => {
      if (indicator.value === true) {
        return
      }

      indicator.value = true
      if (isFunction(onShow)) {
        onShow()
      }
    }

    const doHide = () => {
      if (indicator.value === false) {
        return
      }

      indicator.value = false

      if (isFunction(onHide)) {
        onHide()
      }
    }

    const show = () => {
      if (
        props.disabled === true ||
        (isFunction(shouldProceed) && !shouldProceed())
      )
        return

      const shouldEmit = hasUpdateHandler.value && isClient

      if (shouldEmit) {
        emit(updateEventKey, true)
      }

      if (isModelBindingAbsent.value || !shouldEmit) {
        doShow()
      }
    }

    const hide = () => {
      if (props.disabled === true || !isClient) return

      const shouldEmit = hasUpdateHandler.value && isClient

      if (shouldEmit) {
        emit(updateEventKey, false)
      }

      if (isModelBindingAbsent.value || !shouldEmit) {
        doHide()
      }
    }

    const onChange = (val: boolean) => {
      if (!isBoolean(val)) return
      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false)
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow()
        } else {
          doHide()
        }
      }
    }

    const toggle = () => {
      if (indicator.value) {
        hide()
      } else {
        show()
      }
    }

    watch(() => props[name], onChange as any)

    if (
      shouldHideWhenRouteChanges &&
      instance.appContext.config.globalProperties.$route !== undefined
    ) {
      watch(
        () => ({
          ...(
            instance.proxy as ComponentPublicInstance<{
              $route: RouteLocationNormalizedLoaded
            }>
          ).$route,
        }),
        () => {
          if (shouldHideWhenRouteChanges.value && indicator.value) {
            hide()
          }
        }
      )
    }

    onMounted(() => {
      onChange(props[name] as boolean)
    })

    return {
      hide,
      show,
      toggle,
    }
  }

  return {
    useModelToggle,
    useModelToggleProps,
    useModelToggleEmits,
  }
}

const { useModelToggle, useModelToggleProps, useModelToggleEmits } =
  createModelToggleComposable('modelValue')

export { useModelToggle, useModelToggleEmits, useModelToggleProps }

export type UseModelToggleProps = ExtractPropTypes<typeof useModelToggleProps>

export type ModelToggleParams = {
  indicator: Ref<boolean>
  shouldHideWhenRouteChanges?: Ref<boolean>
  shouldProceed?: () => boolean
  onShow?: () => void
  onHide?: () => void
}
