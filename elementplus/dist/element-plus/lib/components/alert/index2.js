'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index2.js');
var alert$1 = require('./src/alert3.js');
var alert = require('./src/alert4.js');
var install = require('../../utils/vue/install2.js');

const ElAlert = install.withInstall(alert$1["default"]);

exports.alertEffects = alert.alertEffects;
exports.alertEmits = alert.alertEmits;
exports.alertProps = alert.alertProps;
exports.ElAlert = ElAlert;
exports["default"] = ElAlert;
//# sourceMappingURL=index2.js.map
