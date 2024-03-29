'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index2.js');
var messageMethod = require('./src/message-method2.js');
var message = require('./src/message4.js');
var install = require('../../utils/vue/install2.js');

const ElMessage = install.withInstallFunction(messageMethod["default"], "$message");

exports.messageEmits = message.messageEmits;
exports.messageProps = message.messageProps;
exports.messageTypes = message.messageTypes;
exports.ElMessage = ElMessage;
exports["default"] = ElMessage;
//# sourceMappingURL=index2.js.map
