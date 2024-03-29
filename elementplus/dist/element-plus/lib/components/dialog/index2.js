'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index2.js');
var dialog$1 = require('./src/dialog3.js');
var useDialog = require('./src/use-dialog2.js');
var dialog = require('./src/dialog4.js');
var install = require('../../utils/vue/install2.js');

const ElDialog = install.withInstall(dialog$1["default"]);

exports.useDialog = useDialog.useDialog;
exports.dialogEmits = dialog.dialogEmits;
exports.dialogProps = dialog.dialogProps;
exports.ElDialog = ElDialog;
exports["default"] = ElDialog;
//# sourceMappingURL=index2.js.map
