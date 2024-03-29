'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
require('../../popper/index2.js');
require('../../../hooks/index2.js');
var props = require('../../../utils/vue/props2.js');
var index = require('../../../hooks/use-delayed-toggle/index2.js');
var content = require('../../popper/src/content3.js');
var index$1 = require('../../../hooks/use-popper-container/index2.js');
var trigger = require('../../popper/src/trigger3.js');

const triggers = ["hover", "focus", "click", "contextmenu"];
const useTooltipContentProps = props.buildProps({
  ...index.useDelayedToggleProps,
  ...content.usePopperContentProps,
  appendTo: {
    type: props.definePropType([String, Object]),
    default: index$1.POPPER_CONTAINER_SELECTOR
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: false
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: props.definePropType(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: "el-fade-in-linear"
  },
  teleported: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean
  }
});
const useTooltipTriggerProps = props.buildProps({
  ...trigger.usePopperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: props.definePropType([String, Array]),
    default: "hover"
  }
});
const useTooltipProps = props.buildProps({
  openDelay: {
    type: Number
  },
  visibleArrow: {
    type: Boolean,
    default: void 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  showArrow: {
    type: Boolean,
    default: true
  }
});

exports.useTooltipContentProps = useTooltipContentProps;
exports.useTooltipProps = useTooltipProps;
exports.useTooltipTriggerProps = useTooltipTriggerProps;
//# sourceMappingURL=tooltip4.js.map
