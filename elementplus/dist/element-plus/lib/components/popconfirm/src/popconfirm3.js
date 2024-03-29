'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../button/index2.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../utils/index2.js');
require('../../tooltip/index2.js');
var props = require('../../../utils/vue/props2.js');
var button = require('../../button/src/button4.js');
var icon = require('../../../utils/vue/icon2.js');
var tooltip = require('../../tooltip/src/tooltip4.js');

const popconfirmProps = props.buildProps({
  title: {
    type: String
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonType: {
    type: String,
    values: button.buttonTypes,
    default: "primary"
  },
  cancelButtonType: {
    type: String,
    values: button.buttonTypes,
    default: "text"
  },
  icon: {
    type: icon.iconPropType,
    default: iconsVue.QuestionFilled
  },
  iconColor: {
    type: String,
    default: "#f90"
  },
  hideIcon: {
    type: Boolean,
    default: false
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  onConfirm: {
    type: props.definePropType(Function)
  },
  onCancel: {
    type: props.definePropType(Function)
  },
  teleported: tooltip.useTooltipContentProps.teleported,
  persistent: tooltip.useTooltipContentProps.persistent
});

exports.popconfirmProps = popconfirmProps;
//# sourceMappingURL=popconfirm3.js.map
