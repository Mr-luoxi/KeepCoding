'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var props = require('../../../utils/vue/props2.js');
var typescript = require('../../../utils/typescript2.js');

const ROOT_TREE_INJECTION_KEY = Symbol();
const EMPTY_NODE = {
  key: -1,
  level: -1,
  data: {}
};
var TreeOptionsEnum = /* @__PURE__ */ ((TreeOptionsEnum2) => {
  TreeOptionsEnum2["KEY"] = "id";
  TreeOptionsEnum2["LABEL"] = "label";
  TreeOptionsEnum2["CHILDREN"] = "children";
  TreeOptionsEnum2["DISABLED"] = "disabled";
  return TreeOptionsEnum2;
})(TreeOptionsEnum || {});
var SetOperationEnum = /* @__PURE__ */ ((SetOperationEnum2) => {
  SetOperationEnum2["ADD"] = "add";
  SetOperationEnum2["DELETE"] = "delete";
  return SetOperationEnum2;
})(SetOperationEnum || {});
const treeProps = props.buildProps({
  data: {
    type: props.definePropType(Array),
    default: () => typescript.mutable([])
  },
  emptyText: {
    type: String
  },
  height: {
    type: Number,
    default: 200
  },
  props: {
    type: props.definePropType(Object),
    default: () => typescript.mutable({
      children: "children" /* CHILDREN */,
      label: "label" /* LABEL */,
      disabled: "disabled" /* DISABLED */,
      value: "id" /* KEY */
    })
  },
  highlightCurrent: {
    type: Boolean,
    default: false
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  defaultCheckedKeys: {
    type: props.definePropType(Array),
    default: () => typescript.mutable([])
  },
  checkStrictly: {
    type: Boolean,
    default: false
  },
  defaultExpandedKeys: {
    type: props.definePropType(Array),
    default: () => typescript.mutable([])
  },
  indent: {
    type: Number,
    default: 16
  },
  icon: {
    type: String
  },
  expandOnClickNode: {
    type: Boolean,
    default: true
  },
  checkOnClickNode: {
    type: Boolean,
    default: false
  },
  currentNodeKey: {
    type: props.definePropType([String, Number])
  },
  accordion: {
    type: Boolean,
    default: false
  },
  filterMethod: {
    type: props.definePropType(Function)
  },
  perfMode: {
    type: Boolean,
    default: true
  }
});
const treeNodeProps = props.buildProps({
  node: {
    type: props.definePropType(Object),
    default: () => typescript.mutable(EMPTY_NODE)
  },
  expanded: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  current: {
    type: Boolean,
    default: false
  },
  hiddenExpandIcon: {
    type: Boolean,
    default: false
  }
});
const treeNodeContentProps = props.buildProps({
  node: {
    type: props.definePropType(Object),
    required: true
  }
});
const NODE_CLICK = "node-click";
const NODE_EXPAND = "node-expand";
const NODE_COLLAPSE = "node-collapse";
const CURRENT_CHANGE = "current-change";
const NODE_CHECK = "check";
const NODE_CHECK_CHANGE = "check-change";
const NODE_CONTEXTMENU = "node-contextmenu";
const treeEmits = {
  [NODE_CLICK]: (data, node, e) => data && node && e,
  [NODE_EXPAND]: (data, node) => data && node,
  [NODE_COLLAPSE]: (data, node) => data && node,
  [CURRENT_CHANGE]: (data, node) => data && node,
  [NODE_CHECK]: (data, checkedInfo) => data && checkedInfo,
  [NODE_CHECK_CHANGE]: (data, checked) => data && typeof checked === "boolean",
  [NODE_CONTEXTMENU]: (event, data, node) => event && data && node
};
const treeNodeEmits = {
  click: (node, e) => !!(node && e),
  toggle: (node) => !!node,
  check: (node, checked) => node && typeof checked === "boolean"
};

exports.CURRENT_CHANGE = CURRENT_CHANGE;
exports.NODE_CHECK = NODE_CHECK;
exports.NODE_CHECK_CHANGE = NODE_CHECK_CHANGE;
exports.NODE_CLICK = NODE_CLICK;
exports.NODE_COLLAPSE = NODE_COLLAPSE;
exports.NODE_CONTEXTMENU = NODE_CONTEXTMENU;
exports.NODE_EXPAND = NODE_EXPAND;
exports.ROOT_TREE_INJECTION_KEY = ROOT_TREE_INJECTION_KEY;
exports.SetOperationEnum = SetOperationEnum;
exports.TreeOptionsEnum = TreeOptionsEnum;
exports.treeEmits = treeEmits;
exports.treeNodeContentProps = treeNodeContentProps;
exports.treeNodeEmits = treeNodeEmits;
exports.treeNodeProps = treeNodeProps;
exports.treeProps = treeProps;
//# sourceMappingURL=virtual-tree2.js.map
