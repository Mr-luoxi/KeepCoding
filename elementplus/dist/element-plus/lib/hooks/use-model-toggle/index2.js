'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var core = require('@vueuse/core');
require('../../utils/index2.js');
var props = require('../../utils/vue/props2.js');

const _prop = props.buildProp({
  type: props.definePropType(Boolean),
  default: null
});
const _event = props.buildProp({
  type: props.definePropType(Function)
});
const createModelToggleComposable = (name) => {
  const useModelToggleProps2 = {
    [name]: _prop,
    [`onUpdate:${name}`]: _event
  };
  const useModelToggleEmits2 = [`update:${name}`];
  const useModelToggle2 = ({
    indicator,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide
  }) => {
    const instance = vue.getCurrentInstance();
    const props = instance.props;
    const { emit } = instance;
    const updateEventKey = `update:${name}`;
    const hasUpdateHandler = vue.computed(() => shared.isFunction(props[`onUpdate:${name}`]));
    const isModelBindingAbsent = vue.computed(() => props[name] === null);
    const doShow = () => {
      if (indicator.value === true) {
        return;
      }
      indicator.value = true;
      if (shared.isFunction(onShow)) {
        onShow();
      }
    };
    const doHide = () => {
      if (indicator.value === false) {
        return;
      }
      indicator.value = false;
      if (shared.isFunction(onHide)) {
        onHide();
      }
    };
    const show = () => {
      if (props.disabled === true || shared.isFunction(shouldProceed) && !shouldProceed())
        return;
      const shouldEmit = hasUpdateHandler.value && core.isClient;
      if (shouldEmit) {
        emit(updateEventKey, true);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doShow();
      }
    };
    const hide = () => {
      if (props.disabled === true || !core.isClient)
        return;
      const shouldEmit = hasUpdateHandler.value && core.isClient;
      if (shouldEmit) {
        emit(updateEventKey, false);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doHide();
      }
    };
    const onChange = (val) => {
      if (!core.isBoolean(val))
        return;
      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };
    const toggle = () => {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };
    vue.watch(() => props[name], onChange);
    if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
      vue.watch(() => ({
        ...instance.proxy.$route
      }), () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide();
        }
      });
    }
    vue.onMounted(() => {
      onChange(props[name]);
    });
    return {
      hide,
      show,
      toggle
    };
  };
  return {
    useModelToggle: useModelToggle2,
    useModelToggleProps: useModelToggleProps2,
    useModelToggleEmits: useModelToggleEmits2
  };
};
const { useModelToggle, useModelToggleProps, useModelToggleEmits } = createModelToggleComposable("modelValue");

exports.createModelToggleComposable = createModelToggleComposable;
exports.useModelToggle = useModelToggle;
exports.useModelToggleEmits = useModelToggleEmits;
exports.useModelToggleProps = useModelToggleProps;
//# sourceMappingURL=index2.js.map
