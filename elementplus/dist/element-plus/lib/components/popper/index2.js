'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index2.js');
var popper$1 = require('./src/popper4.js');
var arrow = require('./src/arrow4.js');
var trigger = require('./src/trigger4.js');
var content = require('./src/content4.js');
var popper = require('./src/popper3.js');
var trigger$1 = require('./src/trigger3.js');
var content$1 = require('./src/content3.js');
var arrow$1 = require('./src/arrow3.js');
var deprecation = require('./src/deprecation2.js');
var install = require('../../utils/vue/install2.js');

const ElPopper = install.withInstall(popper$1["default"]);

exports.ElPopperArrow = arrow["default"];
exports.ElPopperTrigger = trigger["default"];
exports.ElPopperContent = content["default"];
exports.Effect = popper.Effect;
exports.usePopperProps = popper.usePopperProps;
exports.usePopperTriggerProps = trigger$1.usePopperTriggerProps;
exports.usePopperContentProps = content$1.usePopperContentProps;
exports.usePopperCoreConfigProps = content$1.usePopperCoreConfigProps;
exports.usePopperArrowProps = arrow$1.usePopperArrowProps;
exports.useDeprecateAppendToBody = deprecation.useDeprecateAppendToBody;
exports.ElPopper = ElPopper;
exports["default"] = ElPopper;
//# sourceMappingURL=index2.js.map
