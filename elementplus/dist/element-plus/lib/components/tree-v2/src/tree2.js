'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index2.js');
require('../../virtual-list/index2.js');
var useTree = require('./composables/useTree2.js');
var treeNode = require('./tree-node2.js');
var virtualTree = require('./virtual-tree2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var fixedSizeList = require('../../virtual-list/src/components/fixed-size-list2.js');
var index = require('../../../hooks/use-locale/index2.js');
var index$1 = require('../../../hooks/use-namespace/index2.js');

const _sfc_main = vue.defineComponent({
  name: "ElTreeV2",
  components: {
    ElTreeNode: treeNode["default"],
    FixedSizeList: fixedSizeList["default"]
  },
  props: virtualTree.treeProps,
  emits: virtualTree.treeEmits,
  setup(props, ctx) {
    vue.provide(virtualTree.ROOT_TREE_INJECTION_KEY, {
      ctx,
      props,
      instance: vue.getCurrentInstance()
    });
    const { t } = index.useLocale();
    const ns = index$1.useNamespace("tree");
    const {
      flattenTree,
      isNotEmpty,
      toggleExpand,
      isExpanded,
      isIndeterminate,
      isChecked,
      isDisabled,
      isCurrent,
      isForceHiddenExpandIcon,
      toggleCheckbox,
      handleNodeClick,
      handleNodeCheck,
      getCurrentNode,
      getCurrentKey,
      setCurrentKey,
      getCheckedKeys,
      getCheckedNodes,
      getHalfCheckedKeys,
      getHalfCheckedNodes,
      setChecked,
      setCheckedKeys,
      filter,
      setData
    } = useTree.useTree(props, ctx.emit);
    ctx.expose({
      getCurrentNode,
      getCurrentKey,
      setCurrentKey,
      getCheckedKeys,
      getCheckedNodes,
      getHalfCheckedKeys,
      getHalfCheckedNodes,
      setChecked,
      setCheckedKeys,
      filter,
      setData
    });
    return {
      t,
      ns,
      flattenTree,
      itemSize: 26,
      isNotEmpty,
      toggleExpand,
      toggleCheckbox,
      isExpanded,
      isIndeterminate,
      isChecked,
      isDisabled,
      isCurrent,
      isForceHiddenExpandIcon,
      handleNodeClick,
      handleNodeCheck
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_el_tree_node = vue.resolveComponent("el-tree-node");
  const _component_fixed_size_list = vue.resolveComponent("fixed-size-list");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass([_ctx.ns.b(), { [_ctx.ns.m("highlight-current")]: _ctx.highlightCurrent }]),
    role: "tree"
  }, [
    _ctx.isNotEmpty ? (vue.openBlock(), vue.createBlock(_component_fixed_size_list, {
      key: 0,
      "class-name": _ctx.ns.b("virtual-list"),
      data: _ctx.flattenTree,
      total: _ctx.flattenTree.length,
      height: _ctx.height,
      "item-size": _ctx.itemSize,
      "perf-mode": _ctx.perfMode
    }, {
      default: vue.withCtx(({ data, index, style }) => [
        (vue.openBlock(), vue.createBlock(_component_el_tree_node, {
          key: data[index].key,
          style: vue.normalizeStyle(style),
          node: data[index],
          expanded: _ctx.isExpanded(data[index]),
          "show-checkbox": _ctx.showCheckbox,
          checked: _ctx.isChecked(data[index]),
          indeterminate: _ctx.isIndeterminate(data[index]),
          disabled: _ctx.isDisabled(data[index]),
          current: _ctx.isCurrent(data[index]),
          "hidden-expand-icon": _ctx.isForceHiddenExpandIcon(data[index]),
          onClick: _ctx.handleNodeClick,
          onToggle: _ctx.toggleExpand,
          onCheck: _ctx.handleNodeCheck
        }, null, 8, ["style", "node", "expanded", "show-checkbox", "checked", "indeterminate", "disabled", "current", "hidden-expand-icon", "onClick", "onToggle", "onCheck"]))
      ]),
      _: 1
    }, 8, ["class-name", "data", "total", "height", "item-size", "perf-mode"])) : (vue.openBlock(), vue.createElementBlock("div", {
      key: 1,
      class: vue.normalizeClass(_ctx.ns.e("empty-block"))
    }, [
      vue.createElementVNode("span", {
        class: vue.normalizeClass(_ctx.ns.e("empty-text"))
      }, vue.toDisplayString((_a = _ctx.emptyText) != null ? _a : _ctx.t("el.tree.emptyText")), 3)
    ], 2))
  ], 2);
}
var TreeV2 = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/tree-v2/src/tree.vue"]]);

exports["default"] = TreeV2;
//# sourceMappingURL=tree2.js.map
