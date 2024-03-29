'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./src/index2.js');
var types = require('./src/types2.js');
var config = require('./src/config2.js');

index["default"].install = (app) => {
  app.component(index["default"].name, index["default"]);
};
const _CascaderPanel = index["default"];
const ElCascaderPanel = _CascaderPanel;

exports.CASCADER_PANEL_INJECTION_KEY = types.CASCADER_PANEL_INJECTION_KEY;
exports.ExpandTrigger = types.ExpandTrigger;
exports.CommonProps = config.CommonProps;
exports.DefaultProps = config.DefaultProps;
exports.useCascaderConfig = config.useCascaderConfig;
exports.ElCascaderPanel = ElCascaderPanel;
exports["default"] = _CascaderPanel;
//# sourceMappingURL=index2.js.map
