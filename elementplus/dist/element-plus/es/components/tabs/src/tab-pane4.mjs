import { defineComponent, getCurrentInstance, useSlots, inject, ref, computed, watch, reactive, onMounted, onUnmounted, unref, withDirectives, openBlock, createElementBlock, normalizeClass, renderSlot, vShow, createCommentVNode } from 'vue';
import { eagerComputed } from '@vueuse/core';
import '../../../tokens/index2.mjs';
import '../../../utils/index2.mjs';
import '../../../hooks/index2.mjs';
import { tabPaneProps } from './tab-pane3.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { tabsRootContextKey } from '../../../tokens/tabs2.mjs';
import { throwError } from '../../../utils/error2.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';

const _hoisted_1 = ["id", "aria-hidden", "aria-labelledby"];
const __default__ = {
  name: "ElTabPane"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: tabPaneProps,
  setup(__props) {
    const props = __props;
    const COMPONENT_NAME = "ElTabPane";
    const instance = getCurrentInstance();
    const slots = useSlots();
    const tabsRoot = inject(tabsRootContextKey);
    if (!tabsRoot)
      throwError(COMPONENT_NAME, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
    const ns = useNamespace("tab-pane");
    const index = ref();
    const isClosable = computed(() => props.closable || tabsRoot.props.closable);
    const active = eagerComputed(() => tabsRoot.currentName.value === (props.name || index.value));
    const loaded = ref(active.value);
    const paneName = computed(() => props.name || index.value);
    const shouldBeRender = eagerComputed(() => !props.lazy || loaded.value || active.value);
    watch(active, (val) => {
      if (val)
        loaded.value = true;
    });
    const pane = reactive({
      uid: instance.uid,
      slots,
      props,
      paneName,
      active,
      index,
      isClosable
    });
    onMounted(() => {
      tabsRoot.registerPane(pane);
    });
    onUnmounted(() => {
      tabsRoot.unregisterPane(pane.uid);
    });
    return (_ctx, _cache) => {
      return unref(shouldBeRender) ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        id: `pane-${unref(paneName)}`,
        class: normalizeClass(unref(ns).b()),
        role: "tabpanel",
        "aria-hidden": !unref(active),
        "aria-labelledby": `tab-${unref(paneName)}`
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1)), [
        [vShow, unref(active)]
      ]) : createCommentVNode("v-if", true);
    };
  }
});
var TabPane = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/tabs/src/tab-pane.vue"]]);

export { TabPane as default };
//# sourceMappingURL=tab-pane4.mjs.map
