'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var root = require('./root3.js');
var trigger = require('./trigger3.js');
var arrow = require('./arrow4.js');
var content = require('./content3.js');
var props = require('../../../utils/vue/props2.js');

const tooltipV2Props = props.buildProps({
  ...root.tooltipV2RootProps,
  ...arrow.tooltipV2ArrowProps,
  ...trigger.tooltipV2TriggerProps,
  ...content.tooltipV2ContentProps,
  alwaysOn: Boolean,
  fullTransition: Boolean,
  transitionProps: {
    type: props.definePropType(Object),
    default: null
  },
  teleported: Boolean,
  to: {
    type: props.definePropType(String),
    default: "body"
  }
});

exports.tooltipV2Props = tooltipV2Props;
//# sourceMappingURL=tooltip3.js.map
