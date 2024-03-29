'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/index2.js');
var error = require('../../../utils/error2.js');

function useMenu(instance, currentIndex) {
  const rootMenu = vue.inject("rootMenu");
  if (!rootMenu)
    error.throwError("useMenu", "can not inject root menu");
  const indexPath = vue.computed(() => {
    let parent = instance.parent;
    const path = [currentIndex.value];
    while (parent.type.name !== "ElMenu") {
      if (parent.props.index) {
        path.unshift(parent.props.index);
      }
      parent = parent.parent;
    }
    return path;
  });
  const parentMenu = vue.computed(() => {
    let parent = instance.parent;
    while (parent && !["ElMenu", "ElSubMenu"].includes(parent.type.name)) {
      parent = parent.parent;
    }
    return parent;
  });
  const paddingStyle = vue.computed(() => {
    let parent = instance.parent;
    if (rootMenu.props.mode !== "vertical")
      return {};
    let padding = 20;
    if (rootMenu.props.collapse) {
      padding = 20;
    } else {
      while (parent && parent.type.name !== "ElMenu") {
        if (parent.type.name === "ElSubMenu") {
          padding += 20;
        }
        parent = parent.parent;
      }
    }
    return { paddingLeft: `${padding}px` };
  });
  return {
    parentMenu,
    paddingStyle,
    indexPath
  };
}

exports["default"] = useMenu;
//# sourceMappingURL=use-menu2.js.map
