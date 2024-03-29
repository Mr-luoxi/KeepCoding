'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var lodashUnified = require('lodash-unified');
require('../../../../utils/index2.js');
require('../components/index2.js');
var constants = require('../constants2.js');
var _private = require('../private2.js');
var utils = require('../utils2.js');
var cell = require('../components/cell.js');
var shared = require('@vue/shared');
var expandIcon = require('../components/expand-icon.js');

const CellRenderer = ({
  columns,
  column,
  columnIndex,
  depth,
  expandIconProps,
  isScrolling,
  rowData,
  rowIndex,
  style,
  expandedRowKeys,
  ns,
  expandColumnKey,
  indentSize,
  iconSize,
  rowKey
}, {
  slots
}) => {
  const cellStyle = utils.enforceUnit(style);
  if (column.placeholderSign === _private.placeholderSign) {
    return vue.createVNode("div", {
      "class": ns.em("row-cell", "placeholder"),
      "style": cellStyle
    }, null);
  }
  const {
    cellRenderer,
    dataKey,
    dataGetter
  } = column;
  const columnCellRenderer = utils.componentToSlot(cellRenderer);
  const CellComponent = columnCellRenderer || slots.default || ((props) => vue.createVNode(cell["default"], props, null));
  const cellData = shared.isFunction(dataGetter) ? dataGetter({
    columns,
    column,
    columnIndex,
    rowData,
    rowIndex
  }) : lodashUnified.get(rowData, dataKey != null ? dataKey : "");
  const cellProps = {
    class: ns.e("cell-text"),
    columns,
    column,
    columnIndex,
    cellData,
    isScrolling,
    rowData,
    rowIndex
  };
  const Cell = CellComponent(cellProps);
  const kls = [ns.e("row-cell"), column.align === constants.Alignment.CENTER && ns.is("align-center"), column.align === constants.Alignment.RIGHT && ns.is("align-right")];
  const expandable = rowIndex >= 0 && column.key === expandColumnKey;
  const expanded = rowIndex >= 0 && expandedRowKeys.includes(rowData[rowKey]);
  let IconOrPlaceholder;
  const iconStyle = `margin-inline-start: ${depth * indentSize}px;`;
  if (expandable) {
    if (shared.isObject(expandIconProps)) {
      IconOrPlaceholder = vue.createVNode(expandIcon["default"], vue.mergeProps(expandIconProps, {
        "class": [ns.e("expand-icon"), ns.is("expanded", expanded)],
        "size": iconSize,
        "expanded": expanded,
        "style": iconStyle,
        "expandable": true
      }), null);
    } else {
      IconOrPlaceholder = vue.createVNode("div", {
        "style": [iconStyle, `width: ${iconSize}px; height: ${iconSize}px;`].join(" ")
      }, null);
    }
  }
  return vue.createVNode("div", {
    "class": kls,
    "style": cellStyle
  }, [IconOrPlaceholder, Cell]);
};
CellRenderer.inheritAttrs = false;

exports["default"] = CellRenderer;
//# sourceMappingURL=cell.js.map
