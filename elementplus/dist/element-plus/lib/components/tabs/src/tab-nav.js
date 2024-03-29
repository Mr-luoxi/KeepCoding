'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var core = require('@vueuse/core');
require('../../../utils/index2.js');
require('../../../constants/index2.js');
var index$1 = require('../../icon/index2.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../tokens/index2.js');
require('../../../hooks/index2.js');
var tabBar = require('./tab-bar4.js');
var props = require('../../../utils/vue/props2.js');
var typescript = require('../../../utils/typescript2.js');
var tabs = require('../../../tokens/tabs2.js');
var error = require('../../../utils/error2.js');
var index = require('../../../hooks/use-namespace/index2.js');
var aria = require('../../../constants/aria2.js');

const tabNavProps = props.buildProps({
  panes: {
    type: props.definePropType(Array),
    default: () => typescript.mutable([])
  },
  currentName: {
    type: [String, Number],
    default: ""
  },
  editable: Boolean,
  onTabClick: {
    type: props.definePropType(Function),
    default: shared.NOOP
  },
  onTabRemove: {
    type: props.definePropType(Function),
    default: shared.NOOP
  },
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  stretch: Boolean
});
const COMPONENT_NAME = "ElTabNav";
const TabNav = vue.defineComponent({
  name: COMPONENT_NAME,
  props: tabNavProps,
  setup(props, {
    expose
  }) {
    const vm = vue.getCurrentInstance();
    const rootTabs = vue.inject(tabs.tabsRootContextKey);
    if (!rootTabs)
      error.throwError(COMPONENT_NAME, `<el-tabs><tab-nav /></el-tabs>`);
    const ns = index.useNamespace("tabs");
    const visibility = core.useDocumentVisibility();
    const focused = core.useWindowFocus();
    const navScroll$ = vue.ref();
    const nav$ = vue.ref();
    const el$ = vue.ref();
    const scrollable = vue.ref(false);
    const navOffset = vue.ref(0);
    const isFocus = vue.ref(false);
    const focusable = vue.ref(true);
    const sizeName = vue.computed(() => ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height");
    const navStyle = vue.computed(() => {
      const dir = sizeName.value === "width" ? "X" : "Y";
      return {
        transform: `translate${dir}(-${navOffset.value}px)`
      };
    });
    const scrollPrev = () => {
      if (!navScroll$.value)
        return;
      const containerSize = navScroll$.value[`offset${shared.capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (!currentOffset)
        return;
      const newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0;
      navOffset.value = newOffset;
    };
    const scrollNext = () => {
      if (!navScroll$.value || !nav$.value)
        return;
      const navSize = nav$.value[`offset${shared.capitalize(sizeName.value)}`];
      const containerSize = navScroll$.value[`offset${shared.capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (navSize - currentOffset <= containerSize)
        return;
      const newOffset = navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize;
      navOffset.value = newOffset;
    };
    const scrollToActiveTab = () => {
      const nav = nav$.value;
      if (!scrollable.value || !el$.value || !navScroll$.value || !nav)
        return;
      const activeTab = el$.value.querySelector(".is-active");
      if (!activeTab)
        return;
      const navScroll = navScroll$.value;
      const isHorizontal = ["top", "bottom"].includes(rootTabs.props.tabPosition);
      const activeTabBounding = activeTab.getBoundingClientRect();
      const navScrollBounding = navScroll.getBoundingClientRect();
      const maxOffset = isHorizontal ? nav.offsetWidth - navScrollBounding.width : nav.offsetHeight - navScrollBounding.height;
      const currentOffset = navOffset.value;
      let newOffset = currentOffset;
      if (isHorizontal) {
        if (activeTabBounding.left < navScrollBounding.left) {
          newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
        }
        if (activeTabBounding.right > navScrollBounding.right) {
          newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
        }
      } else {
        if (activeTabBounding.top < navScrollBounding.top) {
          newOffset = currentOffset - (navScrollBounding.top - activeTabBounding.top);
        }
        if (activeTabBounding.bottom > navScrollBounding.bottom) {
          newOffset = currentOffset + (activeTabBounding.bottom - navScrollBounding.bottom);
        }
      }
      newOffset = Math.max(newOffset, 0);
      navOffset.value = Math.min(newOffset, maxOffset);
    };
    const update = () => {
      if (!nav$.value || !navScroll$.value)
        return;
      const navSize = nav$.value[`offset${shared.capitalize(sizeName.value)}`];
      const containerSize = navScroll$.value[`offset${shared.capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (containerSize < navSize) {
        const currentOffset2 = navOffset.value;
        scrollable.value = scrollable.value || {};
        scrollable.value.prev = currentOffset2;
        scrollable.value.next = currentOffset2 + containerSize < navSize;
        if (navSize - currentOffset2 < containerSize) {
          navOffset.value = navSize - containerSize;
        }
      } else {
        scrollable.value = false;
        if (currentOffset > 0) {
          navOffset.value = 0;
        }
      }
    };
    const changeTab = (e) => {
      const code = e.code;
      const {
        up,
        down,
        left,
        right
      } = aria.EVENT_CODE;
      if (![up, down, left, right].includes(code))
        return;
      const tabList = Array.from(e.currentTarget.querySelectorAll("[role=tab]"));
      const currentIndex = tabList.indexOf(e.target);
      let nextIndex;
      if (code === left || code === up) {
        if (currentIndex === 0) {
          nextIndex = tabList.length - 1;
        } else {
          nextIndex = currentIndex - 1;
        }
      } else {
        if (currentIndex < tabList.length - 1) {
          nextIndex = currentIndex + 1;
        } else {
          nextIndex = 0;
        }
      }
      tabList[nextIndex].focus();
      tabList[nextIndex].click();
      setFocus();
    };
    const setFocus = () => {
      if (focusable.value)
        isFocus.value = true;
    };
    const removeFocus = () => isFocus.value = false;
    vue.watch(visibility, (visibility2) => {
      if (visibility2 === "hidden") {
        focusable.value = false;
      } else if (visibility2 === "visible") {
        setTimeout(() => focusable.value = true, 50);
      }
    });
    vue.watch(focused, (focused2) => {
      if (focused2) {
        setTimeout(() => focusable.value = true, 50);
      } else {
        focusable.value = false;
      }
    });
    core.useResizeObserver(el$, update);
    vue.onMounted(() => setTimeout(() => scrollToActiveTab(), 0));
    vue.onUpdated(() => update());
    expose({
      scrollToActiveTab,
      removeFocus
    });
    vue.watch(() => props.panes, () => vm.update(), {
      flush: "post"
    });
    return () => {
      const scrollBtn = scrollable.value ? [vue.createVNode("span", {
        "class": [ns.e("nav-prev"), ns.is("disabled", !scrollable.value.prev)],
        "onClick": scrollPrev
      }, [vue.createVNode(index$1.ElIcon, null, {
        default: () => [vue.createVNode(iconsVue.ArrowLeft, null, null)]
      })]), vue.createVNode("span", {
        "class": [ns.e("nav-next"), ns.is("disabled", !scrollable.value.next)],
        "onClick": scrollNext
      }, [vue.createVNode(index$1.ElIcon, null, {
        default: () => [vue.createVNode(iconsVue.ArrowRight, null, null)]
      })])] : null;
      const tabs = props.panes.map((pane, index) => {
        var _a, _b;
        const tabName = pane.props.name || pane.index || `${index}`;
        const closable = pane.isClosable || props.editable;
        pane.index = `${index}`;
        const btnClose = closable ? vue.createVNode(index$1.ElIcon, {
          "class": "is-icon-close",
          "onClick": (ev) => props.onTabRemove(pane, ev)
        }, {
          default: () => [vue.createVNode(iconsVue.Close, null, null)]
        }) : null;
        const tabLabelContent = ((_b = (_a = pane.slots).label) == null ? void 0 : _b.call(_a)) || pane.props.label;
        const tabindex = pane.active ? 0 : -1;
        return vue.createVNode("div", {
          "ref": `tab-${tabName}`,
          "class": [ns.e("item"), ns.is(rootTabs.props.tabPosition), ns.is("active", pane.active), ns.is("disabled", pane.props.disabled), ns.is("closable", closable), ns.is("focus", isFocus.value)],
          "id": `tab-${tabName}`,
          "key": `tab-${tabName}`,
          "aria-controls": `pane-${tabName}`,
          "role": "tab",
          "aria-selected": pane.active,
          "tabindex": tabindex,
          "onFocus": () => setFocus(),
          "onBlur": () => removeFocus(),
          "onClick": (ev) => {
            removeFocus();
            props.onTabClick(pane, tabName, ev);
          },
          "onKeydown": (ev) => {
            if (closable && (ev.code === aria.EVENT_CODE.delete || ev.code === aria.EVENT_CODE.backspace)) {
              props.onTabRemove(pane, ev);
            }
          }
        }, [...[tabLabelContent, btnClose]]);
      });
      return vue.createVNode("div", {
        "ref": el$,
        "class": [ns.e("nav-wrap"), ns.is("scrollable", !!scrollable.value), ns.is(rootTabs.props.tabPosition)]
      }, [scrollBtn, vue.createVNode("div", {
        "class": ns.e("nav-scroll"),
        "ref": navScroll$
      }, [vue.createVNode("div", {
        "class": [ns.e("nav"), ns.is(rootTabs.props.tabPosition), ns.is("stretch", props.stretch && ["top", "bottom"].includes(rootTabs.props.tabPosition))],
        "ref": nav$,
        "style": navStyle.value,
        "role": "tablist",
        "onKeydown": changeTab
      }, [...[!props.type ? vue.createVNode(tabBar["default"], {
        "tabs": [...props.panes]
      }, null) : null, tabs]])])]);
    };
  }
});

exports["default"] = TabNav;
exports.tabNavProps = tabNavProps;
//# sourceMappingURL=tab-nav.js.map
