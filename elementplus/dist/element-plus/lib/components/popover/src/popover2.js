'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
require('../../tooltip/index2.js');
require('../../dropdown/index2.js');
var props = require('../../../utils/vue/props2.js');
var tooltip = require('../../tooltip/src/tooltip4.js');
var dropdown = require('../../dropdown/src/dropdown4.js');

const usePopoverProps = props.buildProps({
  trigger: tooltip.useTooltipTriggerProps.trigger,
  placement: dropdown.dropdownProps.placement,
  disabled: tooltip.useTooltipTriggerProps.disabled,
  visible: tooltip.useTooltipContentProps.visible,
  transition: tooltip.useTooltipContentProps.transition,
  popperOptions: dropdown.dropdownProps.popperOptions,
  tabindex: dropdown.dropdownProps.tabindex,
  appendToBody: { type: Boolean, default: void 0 },
  content: tooltip.useTooltipContentProps.content,
  popperStyle: tooltip.useTooltipContentProps.popperStyle,
  popperClass: tooltip.useTooltipContentProps.popperClass,
  enterable: {
    ...tooltip.useTooltipContentProps.enterable,
    default: true
  },
  effect: {
    ...tooltip.useTooltipContentProps.effect,
    default: "light"
  },
  teleported: tooltip.useTooltipContentProps.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  persistent: {
    type: Boolean,
    default: true
  }
});

exports.usePopoverProps = usePopoverProps;
//# sourceMappingURL=popover2.js.map
