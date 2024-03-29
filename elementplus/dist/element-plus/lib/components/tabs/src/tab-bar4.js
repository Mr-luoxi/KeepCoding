'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../../utils/index2.js');
require('../../../tokens/index2.js');
require('../../../hooks/index2.js');
var tabBar = require('./tab-bar3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var tabs = require('../../../tokens/tabs2.js');
var error = require('../../../utils/error2.js');
var index = require('../../../hooks/use-namespace/index2.js');
var shared = require('@vue/shared');

const __default__ = {
  name: "ElTabBar"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: tabBar.tabBarProps,
  setup(__props, { expose }) {
    const props = __props;
    const COMPONENT_NAME = "ElTabBar";
    const instance = vue.getCurrentInstance();
    const rootTabs = vue.inject(tabs.tabsRootContextKey);
    if (!rootTabs)
      error.throwError(COMPONENT_NAME, "<el-tabs><el-tab-bar /></el-tabs>");
    const ns = index.useNamespace("tabs");
    const barRef = vue.ref();
    const barStyle = vue.ref();
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
        tabSize = $el[`client${shared.capitalize(sizeName)}`];
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
        transform: `translate${shared.capitalize(sizeDir)}(${offset}px)`
      };
    };
    const update = () => barStyle.value = getBarStyle();
    vue.watch(() => props.tabs, async () => {
      await vue.nextTick();
      update();
    }, { immediate: true });
    core.useResizeObserver(barRef, () => update());
    expose({
      ref: barRef,
      update
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "barRef",
        ref: barRef,
        class: vue.normalizeClass([vue.unref(ns).e("active-bar"), vue.unref(ns).is(vue.unref(rootTabs).props.tabPosition)]),
        style: vue.normalizeStyle(barStyle.value)
      }, null, 6);
    };
  }
});
var TabBar = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/tabs/src/tab-bar.vue"]]);

exports["default"] = TabBar;
//# sourceMappingURL=tab-bar4.js.map
