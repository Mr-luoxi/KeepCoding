'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index2.js');
var tooltip$1 = require('./src/tooltip3.js');
var tooltip = require('./src/tooltip4.js');
var tokens = require('./src/tokens2.js');
var install = require('../../utils/vue/install2.js');

const ElTooltip = install.withInstall(tooltip$1["default"]);

exports.useTooltipContentProps = tooltip.useTooltipContentProps;
exports.useTooltipProps = tooltip.useTooltipProps;
exports.useTooltipTriggerProps = tooltip.useTooltipTriggerProps;
exports.TOOLTIP_INJECTION_KEY = tokens.TOOLTIP_INJECTION_KEY;
exports.ElTooltip = ElTooltip;
exports["default"] = ElTooltip;
//# sourceMappingURL=index2.js.map
