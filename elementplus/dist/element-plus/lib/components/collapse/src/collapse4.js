'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/index2.js');
require('../../../constants/index2.js');
require('../../../hooks/index2.js');
require('../../../tokens/index2.js');
var collapse = require('./collapse3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index2.js');
var lodashUnified = require('lodash-unified');
var event = require('../../../constants/event2.js');
var collapse$1 = require('../../../tokens/collapse2.js');

const __default__ = {
  name: "ElCollapse"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: collapse.collapseProps,
  emits: collapse.collapseEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = index.useNamespace("collapse");
    const activeNames = vue.ref(lodashUnified.castArray(props.modelValue));
    const setActiveNames = (_activeNames) => {
      activeNames.value = _activeNames;
      const value = props.accordion ? activeNames.value[0] : activeNames.value;
      emit(event.UPDATE_MODEL_EVENT, value);
      emit(event.CHANGE_EVENT, value);
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
    vue.watch(() => props.modelValue, () => activeNames.value = lodashUnified.castArray(props.modelValue), { deep: true });
    vue.provide(collapse$1.collapseContextKey, {
      activeNames,
      handleItemClick
    });
    expose({
      activeNames,
      setActiveNames
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(ns).b()),
        role: "tablist",
        "aria-multiselectable": "true"
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Collapse = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/collapse/src/collapse.vue"]]);

exports["default"] = Collapse;
//# sourceMappingURL=collapse4.js.map
