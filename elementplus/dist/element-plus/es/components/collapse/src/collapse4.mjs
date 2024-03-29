import { defineComponent, ref, watch, provide, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from 'vue';
import '../../../utils/index2.mjs';
import '../../../constants/index2.mjs';
import '../../../hooks/index2.mjs';
import '../../../tokens/index2.mjs';
import { collapseProps, collapseEmits } from './collapse3.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';
import { castArray } from 'lodash-unified';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../../constants/event2.mjs';
import { collapseContextKey } from '../../../tokens/collapse2.mjs';

const __default__ = {
  name: "ElCollapse"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: collapseProps,
  emits: collapseEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = useNamespace("collapse");
    const activeNames = ref(castArray(props.modelValue));
    const setActiveNames = (_activeNames) => {
      activeNames.value = _activeNames;
      const value = props.accordion ? activeNames.value[0] : activeNames.value;
      emit(UPDATE_MODEL_EVENT, value);
      emit(CHANGE_EVENT, value);
    };
    const handleItemClick = (name) => {
      if (props.accordion) {
        setActiveNames([
          (activeNames.value[0] || activeNames.value[0] === 0) && activeNames.value[0] === name ? "" : name
        ]);
      } else {
        const _activeNames = [...activeNames.value];
        const index = _activeNames.indexOf(name);
        if (index > -1) {
          _activeNames.splice(index, 1);
        } else {
          _activeNames.push(name);
        }
        setActiveNames(_activeNames);
      }
    };
    watch(() => props.modelValue, () => activeNames.value = castArray(props.modelValue), { deep: true });
    provide(collapseContextKey, {
      activeNames,
      handleItemClick
    });
    expose({
      activeNames,
      setActiveNames
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b()),
        role: "tablist",
        "aria-multiselectable": "true"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Collapse = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/collapse/src/collapse.vue"]]);

export { Collapse as default };
//# sourceMappingURL=collapse4.mjs.map
