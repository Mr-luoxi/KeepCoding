'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../directives/index2.js');
var index$2 = require('../../icon/index2.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../utils/index2.js');
require('../../../hooks/index2.js');
var menuBar = require('./utils/menu-bar2.js');
var menuCollapseTransition = require('./menu-collapse-transition2.js');
var subMenu = require('./sub-menu2.js');
var useMenuCssVar = require('./use-menu-css-var2.js');
var props = require('../../../utils/vue/props2.js');
var typescript = require('../../../utils/typescript2.js');
var shared = require('@vue/shared');
var index = require('../../../hooks/use-namespace/index2.js');
var index$1 = require('../../../directives/resize/index2.js');

const menuProps = props.buildProps({
  mode: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "vertical"
  },
  defaultActive: {
    type: String,
    default: ""
  },
  defaultOpeneds: {
    type: props.definePropType(Array),
    default: () => typescript.mutable([])
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  collapseTransition: {
    type: Boolean,
    default: true
  },
  ellipsis: {
    type: Boolean,
    default: true
  }
});
const checkIndexPath = (indexPath) => Array.isArray(indexPath) && indexPath.every((path) => shared.isString(path));
const menuEmits = {
  close: (index, indexPath) => shared.isString(index) && checkIndexPath(indexPath),
  open: (index, indexPath) => shared.isString(index) && checkIndexPath(indexPath),
  select: (index, indexPath, item, routerResult) => shared.isString(index) && checkIndexPath(indexPath) && shared.isObject(item) && (routerResult === void 0 || routerResult instanceof Promise)
};
var Menu = vue.defineComponent({
  name: "ElMenu",
  props: menuProps,
  emits: menuEmits,
  setup(props, { emit, slots, expose }) {
    const instance = vue.getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const menu = vue.ref();
    const nsMenu = index.useNamespace("menu");
    const nsSubMenu = index.useNamespace("sub-menu");
    const openedMenus = vue.ref(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []);
    const activeIndex = vue.ref(props.defaultActive);
    const items = vue.ref({});
    const subMenus = vue.ref({});
    const isMenuPopup = vue.computed(() => {
      return props.mode === "horizontal" || props.mode === "vertical" && props.collapse;
    });
    const initMenu = () => {
      const activeItem = activeIndex.value && items.value[activeIndex.value];
      if (!activeItem || props.mode === "horizontal" || props.collapse)
        return;
      const indexPath = activeItem.indexPath;
      indexPath.forEach((index) => {
        const subMenu = subMenus.value[index];
        subMenu && openMenu(index, subMenu.indexPath);
      });
    };
    const openMenu = (index, indexPath) => {
      if (openedMenus.value.includes(index))
        return;
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index2) => indexPath.includes(index2));
      }
      openedMenus.value.push(index);
      emit("open", index, indexPath);
    };
    const closeMenu = (index, indexPath) => {
      const i = openedMenus.value.indexOf(index);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
      emit("close", index, indexPath);
    };
    const handleSubMenuClick = ({
      index,
      indexPath
    }) => {
      const isOpened = openedMenus.value.includes(index);
      if (isOpened) {
        closeMenu(index, indexPath);
      } else {
        openMenu(index, indexPath);
      }
    };
    const handleMenuItemClick = (menuItem) => {
      if (props.mode === "horizontal" || props.collapse) {
        openedMenus.value = [];
      }
      const { index, indexPath } = menuItem;
      if (index === void 0 || indexPath === void 0)
        return;
      if (props.router && router) {
        const route = menuItem.route || index;
        const routerResult = router.push(route).then((res) => {
          if (!res)
            activeIndex.value = index;
          return res;
        });
        emit("select", index, indexPath, { index, indexPath, route }, routerResult);
      } else {
        activeIndex.value = index;
        emit("select", index, indexPath, { index, indexPath });
      }
    };
    const updateActiveIndex = (val) => {
      const itemsInData = items.value;
      const item = itemsInData[val] || activeIndex.value && itemsInData[activeIndex.value] || itemsInData[props.defaultActive];
      if (item) {
        activeIndex.value = item.index;
        initMenu();
      } else {
        activeIndex.value = val;
      }
    };
    const handleResize = () => {
      vue.nextTick(() => instance.proxy.$forceUpdate());
    };
    vue.watch(() => props.defaultActive, (currentActive) => {
      if (!items.value[currentActive]) {
        activeIndex.value = "";
      }
      updateActiveIndex(currentActive);
    });
    vue.watch(items.value, () => initMenu());
    vue.watch(() => props.collapse, (value) => {
      if (value)
        openedMenus.value = [];
    });
    {
      const addSubMenu = (item) => {
        subMenus.value[item.index] = item;
      };
      const removeSubMenu = (item) => {
        delete subMenus.value[item.index];
      };
      const addMenuItem = (item) => {
        items.value[item.index] = item;
      };
      const removeMenuItem = (item) => {
        delete items.value[item.index];
      };
      vue.provide("rootMenu", vue.reactive({
        props,
        openedMenus,
        items,
        subMenus,
        activeIndex,
        isMenuPopup,
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu,
        handleMenuItemClick,
        handleSubMenuClick
      }));
      vue.provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        mouseInChild: vue.ref(false)
      });
    }
    vue.onMounted(() => {
      initMenu();
      if (props.mode === "horizontal") {
        new menuBar["default"](instance.vnode.el, nsMenu.namespace.value);
      }
    });
    {
      const open = (index) => {
        const { indexPath } = subMenus.value[index];
        indexPath.forEach((i) => openMenu(i, indexPath));
      };
      expose({
        open,
        close: closeMenu,
        handleResize
      });
    }
    const flattedChildren = (children) => {
      const vnodes = Array.isArray(children) ? children : [children];
      const result = [];
      vnodes.forEach((child) => {
        if (Array.isArray(child.children)) {
          result.push(...flattedChildren(child.children));
        } else {
          result.push(child);
        }
      });
      return result;
    };
    const useVNodeResize = (vnode) => props.mode === "horizontal" ? vue.withDirectives(vnode, [[index$1["default"], handleResize]]) : vnode;
    return () => {
      var _a, _b, _c, _d;
      let slot = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      const vShowMore = [];
      if (props.mode === "horizontal" && menu.value) {
        const items2 = Array.from((_d = (_c = menu.value) == null ? void 0 : _c.childNodes) != null ? _d : []).filter((item) => item.nodeName !== "#text" || item.nodeValue);
        const originalSlot = flattedChildren(slot);
        const moreItemWidth = 64;
        const paddingLeft = Number.parseInt(getComputedStyle(menu.value).paddingLeft, 10);
        const paddingRight = Number.parseInt(getComputedStyle(menu.value).paddingRight, 10);
        const menuWidth = menu.value.clientWidth - paddingLeft - paddingRight;
        let calcWidth = 0;
        let sliceIndex = 0;
        items2.forEach((item, index) => {
          calcWidth += item.offsetWidth || 0;
          if (calcWidth <= menuWidth - moreItemWidth) {
            sliceIndex = index + 1;
          }
        });
        const slotDefault = originalSlot.slice(0, sliceIndex);
        const slotMore = originalSlot.slice(sliceIndex);
        if ((slotMore == null ? void 0 : slotMore.length) && props.ellipsis) {
          slot = slotDefault;
          vShowMore.push(vue.h(subMenu["default"], {
            index: "sub-menu-more",
            class: nsSubMenu.e("hide-arrow")
          }, {
            title: () => vue.h(index$2.ElIcon, {
              class: nsSubMenu.e("icon-more")
            }, { default: () => vue.h(iconsVue.More) }),
            default: () => slotMore
          }));
        }
      }
      const ulStyle = useMenuCssVar.useMenuCssVar(props);
      const resizeMenu = (vNode) => props.ellipsis ? useVNodeResize(vNode) : vNode;
      const vMenu = resizeMenu(vue.h("ul", {
        key: String(props.collapse),
        role: "menubar",
        ref: menu,
        style: ulStyle.value,
        class: {
          [nsMenu.b()]: true,
          [nsMenu.m("horizontal")]: props.mode === "horizontal",
          [nsMenu.m("collapse")]: props.collapse
        }
      }, [...slot, ...vShowMore]));
      if (props.collapseTransition && props.mode === "vertical") {
        return vue.h(menuCollapseTransition["default"], () => vMenu);
      }
      return vMenu;
    };
  }
});

exports["default"] = Menu;
exports.menuEmits = menuEmits;
exports.menuProps = menuProps;
//# sourceMappingURL=menu2.js.map
