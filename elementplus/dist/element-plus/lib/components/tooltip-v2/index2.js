'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index2.js');
var tooltip$1 = require('./src/tooltip4.js');
var arrow = require('./src/arrow4.js');
var content = require('./src/content3.js');
var root = require('./src/root3.js');
var tooltip = require('./src/tooltip3.js');
var trigger = require('./src/trigger3.js');
var install = require('../../utils/vue/install2.js');

const ElTooltipV2 = install.withInstall(tooltip$1["default"]);

exports.tooltipV2ArrowProps = arrow.tooltipV2ArrowProps;
exports.tooltipV2ArrowSpecialProps = arrow.tooltipV2ArrowSpecialProps;
exports.tooltipV2ContentProps = content.tooltipV2ContentProps;
exports.tooltipV2RootProps = root.tooltipV2RootProps;
exports.tooltipV2Props = tooltip.tooltipV2Props;
exports.tooltipV2TriggerProps = trigger.tooltipV2TriggerProps;
exports.ElTooltipV2 = ElTooltipV2;
exports["default"] = ElTooltipV2;
//# sourceMappingURL=index2.js.map
