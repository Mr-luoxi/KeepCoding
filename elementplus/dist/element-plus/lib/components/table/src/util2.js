'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@popperjs/core');
var lodashUnified = require('lodash-unified');
var escapeHtml = require('escape-html');
require('../../../utils/index2.js');
require('../../../hooks/index2.js');
var shared = require('@vue/shared');
var index = require('../../../hooks/use-z-index/index2.js');
var event = require('../../../utils/dom/event2.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var escapeHtml__default = /*#__PURE__*/_interopDefaultLegacy(escapeHtml);

const getCell = function(event) {
  let cell = event.target;
  while (cell && cell.tagName.toUpperCase() !== "HTML") {
    if (cell.tagName.toUpperCase() === "TD") {
      return cell;
    }
    cell = cell.parentNode;
  }
  return null;
};
const isObject = function(obj) {
  return obj !== null && typeof obj === "object";
};
const orderBy = function(array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array;
  }
  if (typeof reverse === "string") {
    reverse = reverse === "descending" ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  const getKey = sortMethod ? null : function(value, index) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map((by) => {
        if (typeof by === "string") {
          return lodashUnified.get(value, by);
        } else {
          return by(value, index, array);
        }
      });
    }
    if (sortKey !== "$key") {
      if (isObject(value) && "$value" in value)
        value = value.$value;
    }
    return [isObject(value) ? lodashUnified.get(value, sortKey) : value];
  };
  const compare = function(a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }
    for (let i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }
      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array.map((value, index) => {
    return {
      value,
      index,
      key: getKey ? getKey(value, index) : null
    };
  }).sort((a, b) => {
    let order = compare(a, b);
    if (!order) {
      order = a.index - b.index;
    }
    return order * +reverse;
  }).map((item) => item.value);
};
const getColumnById = function(table, columnId) {
  let column = null;
  table.columns.forEach((item) => {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};
const getColumnByKey = function(table, columnKey) {
  let column = null;
  for (let i = 0; i < table.columns.length; i++) {
    const item = table.columns[i];
    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }
  return column;
};
const getColumnByCell = function(table, cell, namespace) {
  const matches = (cell.className || "").match(new RegExp(`${namespace}-table_[^\\s]+`, "gm"));
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};
const getRowIdentity = (row, rowKey) => {
  if (!row)
    throw new Error("Row is required when get row identity");
  if (typeof rowKey === "string") {
    if (!rowKey.includes(".")) {
      return `${row[rowKey]}`;
    }
    const key = rowKey.split(".");
    let current = row;
    for (const element of key) {
      current = current[element];
    }
    return `${current}`;
  } else if (typeof rowKey === "function") {
    return rowKey.call(null, row);
  }
};
const getKeysMap = function(array, rowKey) {
  const arrayMap = {};
  (array || []).forEach((row, index) => {
    arrayMap[getRowIdentity(row, rowKey)] = { row, index };
  });
  return arrayMap;
};
function mergeOptions(defaults, config) {
  const options = {};
  let key;
  for (key in defaults) {
    options[key] = defaults[key];
  }
  for (key in config) {
    if (shared.hasOwn(config, key)) {
      const value = config[key];
      if (typeof value !== "undefined") {
        options[key] = value;
      }
    }
  }
  return options;
}
function parseWidth(width) {
  if (width === "")
    return width;
  if (width !== void 0) {
    width = Number.parseInt(width, 10);
    if (Number.isNaN(width)) {
      width = "";
    }
  }
  return width;
}
function parseMinWidth(minWidth) {
  if (minWidth === "")
    return minWidth;
  if (minWidth !== void 0) {
    minWidth = parseWidth(minWidth);
    if (Number.isNaN(minWidth)) {
      minWidth = 80;
    }
  }
  return minWidth;
}
function parseHeight(height) {
  if (typeof height === "number") {
    return height;
  }
  if (typeof height === "string") {
    if (/^\d+(?:px)?$/.test(height)) {
      return Number.parseInt(height, 10);
    } else {
      return height;
    }
  }
  return null;
}
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
function toggleRowStatus(statusArr, row, newVal) {
  let changed = false;
  const index = statusArr.indexOf(row);
  const included = index !== -1;
  const addRow = () => {
    statusArr.push(row);
    changed = true;
  };
  const removeRow = () => {
    statusArr.splice(index, 1);
    changed = true;
  };
  if (typeof newVal === "boolean") {
    if (newVal && !included) {
      addRow();
    } else if (!newVal && included) {
      removeRow();
    }
  } else {
    if (included) {
      removeRow();
    } else {
      addRow();
    }
  }
  return changed;
}
function walkTreeNode(root, cb, childrenKey = "children", lazyKey = "hasChildren") {
  const isNil = (array) => !(Array.isArray(array) && array.length);
  function _walker(parent, children, level) {
    cb(parent, children, level);
    children.forEach((item) => {
      if (item[lazyKey]) {
        cb(item, null, level + 1);
        return;
      }
      const children2 = item[childrenKey];
      if (!isNil(children2)) {
        _walker(item, children2, level + 1);
      }
    });
  }
  root.forEach((item) => {
    if (item[lazyKey]) {
      cb(item, null, 0);
      return;
    }
    const children = item[childrenKey];
    if (!isNil(children)) {
      _walker(item, children, 0);
    }
  });
}
exports.removePopper = void 0;
function createTablePopper(trigger, popperContent, popperOptions, tooltipEffect) {
  const { nextZIndex } = index.useZIndex();
  function renderContent() {
    const isLight = tooltipEffect === "light";
    const content2 = document.createElement("div");
    content2.className = `el-popper ${isLight ? "is-light" : "is-dark"}`;
    popperContent = escapeHtml__default["default"](popperContent);
    content2.innerHTML = popperContent;
    content2.style.zIndex = String(nextZIndex());
    document.body.appendChild(content2);
    return content2;
  }
  function renderArrow() {
    const arrow2 = document.createElement("div");
    arrow2.className = "el-popper__arrow";
    return arrow2;
  }
  function showPopper() {
    popperInstance && popperInstance.update();
  }
  exports.removePopper = function removePopper2() {
    try {
      popperInstance && popperInstance.destroy();
      content && document.body.removeChild(content);
      event.off(trigger, "mouseenter", showPopper);
      event.off(trigger, "mouseleave", removePopper2);
    } catch (e) {
    }
  };
  let popperInstance = null;
  const content = renderContent();
  const arrow = renderArrow();
  content.appendChild(arrow);
  popperInstance = core.createPopper(trigger, content, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8]
        }
      },
      {
        name: "arrow",
        options: {
          element: arrow,
          padding: 10
        }
      }
    ],
    ...popperOptions
  });
  event.on(trigger, "mouseenter", showPopper);
  event.on(trigger, "mouseleave", exports.removePopper);
  return popperInstance;
}
const isFixedColumn = (index, fixed, store, realColumns) => {
  let start = 0;
  let after = index;
  if (realColumns) {
    if (realColumns[index].colSpan > 1) {
      return {};
    }
    for (let i = 0; i < index; i++) {
      start += realColumns[i].colSpan;
    }
    after = start + realColumns[index].colSpan - 1;
  } else {
    start = index;
  }
  let fixedLayout;
  const columns = store.states.columns;
  switch (fixed) {
    case "left":
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = "left";
      }
      break;
    case "right":
      if (start >= columns.value.length - store.states.rightFixedLeafColumnsLength.value) {
        fixedLayout = "right";
      }
      break;
    default:
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = "left";
      } else if (start >= columns.value.length - store.states.rightFixedLeafColumnsLength.value) {
        fixedLayout = "right";
      }
  }
  return fixedLayout ? {
    direction: fixedLayout,
    start,
    after
  } : {};
};
const getFixedColumnsClass = (namespace, index, fixed, store, realColumns) => {
  const classes = [];
  const { direction, start } = isFixedColumn(index, fixed, store, realColumns);
  if (direction) {
    const isLeft = direction === "left";
    classes.push(`${namespace}-fixed-column--${direction}`);
    if (isLeft && start === store.states.fixedLeafColumnsLength.value - 1) {
      classes.push("is-last-column");
    } else if (!isLeft && start === store.states.columns.value.length - store.states.rightFixedLeafColumnsLength.value) {
      classes.push("is-first-column");
    }
  }
  return classes;
};
function getOffset(offset, column) {
  return offset + (column.realWidth === null || Number.isNaN(column.realWidth) ? Number(column.width) : column.realWidth);
}
const getFixedColumnOffset = (index, fixed, store, realColumns) => {
  const { direction, start = 0 } = isFixedColumn(index, fixed, store, realColumns);
  if (!direction) {
    return;
  }
  const styles = {};
  const isLeft = direction === "left";
  const columns = store.states.columns.value;
  if (isLeft) {
    styles.left = columns.slice(0, index).reduce(getOffset, 0);
  } else {
    styles.right = columns.slice(start + 1).reverse().reduce(getOffset, 0);
  }
  return styles;
};
const ensurePosition = (style, key) => {
  if (!style)
    return;
  if (!Number.isNaN(style[key])) {
    style[key] = `${style[key]}px`;
  }
};

exports.compose = compose;
exports.createTablePopper = createTablePopper;
exports.ensurePosition = ensurePosition;
exports.getCell = getCell;
exports.getColumnByCell = getColumnByCell;
exports.getColumnById = getColumnById;
exports.getColumnByKey = getColumnByKey;
exports.getFixedColumnOffset = getFixedColumnOffset;
exports.getFixedColumnsClass = getFixedColumnsClass;
exports.getKeysMap = getKeysMap;
exports.getRowIdentity = getRowIdentity;
exports.isFixedColumn = isFixedColumn;
exports.mergeOptions = mergeOptions;
exports.orderBy = orderBy;
exports.parseHeight = parseHeight;
exports.parseMinWidth = parseMinWidth;
exports.parseWidth = parseWidth;
exports.toggleRowStatus = toggleRowStatus;
exports.walkTreeNode = walkTreeNode;
//# sourceMappingURL=util2.js.map
