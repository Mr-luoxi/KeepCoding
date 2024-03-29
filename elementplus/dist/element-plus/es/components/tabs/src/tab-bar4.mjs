import { defineComponent, getCurrentInstance, inject, ref, watch, nextTick, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle } from 'vue';
import { useResizeObserver } from '@vueuse/core';
import '../../../utils/index2.mjs';
import '../../../tokens/index2.mjs';
import '../../../hooks/index2.mjs';
import { tabBarProps } from './tab-bar3.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { tabsRootContextKey } from '../../../tokens/tabs2.mjs';
import { throwError } from '../../../utils/error2.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';
import { capitalize } from '@vue/shared';

const __default__ = {
  name: "ElTabBar"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: tabBarProps,
  setup(__props, { expose }) {
    const props = __props;
    const COMPONENT_NAME = "ElTabBar";
    const instance = getCurrentInstance();
    const rootTabs = inject(tabsRootContextKey);
    if (!rootTabs)
      throwError(COMPONENT_NAME, "<el-tabs><el-tab-bar /></el-tabs>");
    const ns = useNamespace("tabs");
    const barRef = ref();
    const barStyle = ref();
    const getBarStyle = () => {
      let offset = 0;
      let tabSize = 0;
      const sizeName = ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height";
      const sizeDir = sizeName === "width" ? "x" : "y";
      props.tabs.every((tab) => {
        var _a, _b, _c, _d;
        const $el = (_b = (_a = instance.parent) == null ? void 0 : _a.refs) == null ? void 0 : _b[`tab-${tab.paneName}`];
        if (!$el)
          return false;
        if (!tab.active) {
          return true;
        }
        tabSize = $el[`client${capitalize(sizeName)}`];
        const position = sizeDir === "x" ? "left" : "top";
        offset = $el.getBoundingClientRect()[position] - ((_d = (_c = $el.parentElement) == null ? void 0 : _c.getBoundingClientRect()[position]) != null ? _d : 0);
        const tabStyles = window.getComputedStyle($el);
        if (sizeName === "width") {
          if (props.tabs.length > 1) {
            tabSize -= Number.parseFloat(tabStyles.paddingLeft) + Number.parseFloat(tabStyles.paddingRight);
          }
          offset += Number.parseFloat(tabStyles.paddingLeft);
        }
        return false;
      });
      return {
        [sizeName]: `${tabSize}px`,
        transform: `translate${capitalize(sizeDir)}(${offset}px)`
      };
    };
    const update = () => barStyle.value = getBarStyle();
    watch(() => props.tabs, async () => {
      await nextTick();
      update();
    }, { immediate: true });
    useResizeObserver(barRef, () => update());
    expose({
      ref: barRef,
      update
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "barRef",
        ref: barRef,
        class: normalizeClass([unref(ns).e("active-bar"), unref(ns).is(unref(rootTabs).props.tabPosition)]),
        style: normalizeStyle(barStyle.value)
      }, null, 6);
    };
  }
});
var TabBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/tabs/src/tab-bar.vue"]]);

export { TabBar as default };
//# sourceMappingURL=tab-bar4.mjs.map
