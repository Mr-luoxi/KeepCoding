'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index2.js');
var button$1 = require('./src/button3.js');
var buttonGroup = require('./src/button-group4.js');
var button = require('./src/button4.js');
var install = require('../../utils/vue/install2.js');

const ElButton = install.withInstall(button$1["default"], {
  ButtonGroup: buttonGroup["default"]
});
const ElButtonGroup = install.withNoopInstall(buttonGroup["default"]);

exports.buttonEmits = button.buttonEmits;
exports.buttonNativeTypes = button.buttonNativeTypes;
exports.buttonProps = button.buttonProps;
exports.buttonTypes = button.buttonTypes;
exports.ElButton = ElButton;
exports.ElButtonGroup = ElButtonGroup;
exports["default"] = ElButton;
//# sourceMappingURL=index2.js.map
