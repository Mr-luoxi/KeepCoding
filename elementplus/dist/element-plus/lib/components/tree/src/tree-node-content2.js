'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index2.js');

const _sfc_main = vue.defineComponent({
  name: "ElTreeNodeContent",
  props: {
    node: {
      type: Object,
      required: true
    },
    renderContent: Function
  },
  setup(props) {
    const ns = index.useNamespace("tree");
    const nodeInstance = vue.inject("NodeInstance");
    const tree = vue.inject("RootTree");
    return () => {
      const node = props.node;
      const { data, store } = node;
      return props.renderContent ? props.renderContent(vue.h, { _self: nodeInstance, node, data, store }) : tree.ctx.slots.default ? tree.ctx.slots.default({ node, data }) : vue.h("span", { class: ns.be("node", "label") }, [node.label]);
    };
  }
});
var NodeContent = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/tree/src/tree-node-content.vue"]]);

exports["default"] = NodeContent;
//# sourceMappingURL=tree-node-content2.js.map
