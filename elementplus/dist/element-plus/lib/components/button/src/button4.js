'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../hooks/index2.js');
require('../../../utils/index2.js');
var iconsVue = require('@element-plus/icons-vue');
var props = require('../../../utils/vue/props2.js');
var index = require('../../../hooks/use-common-props/index2.js');
var icon = require('../../../utils/vue/icon2.js');

const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
];
const buttonNativeTypes = ["button", "submit", "reset"];
const buttonProps = props.buildProps({
  size: index.useSizeProp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonTypes,
    default: ""
  },
  icon: {
    type: icon.iconPropType,
    default: ""
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: icon.iconPropType,
    default: () => iconsVue.Loading
  },
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  }
});
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};

exports.buttonEmits = buttonEmits;
exports.buttonNativeTypes = buttonNativeTypes;
exports.buttonProps = buttonProps;
exports.buttonTypes = buttonTypes;
//# sourceMappingURL=button4.js.map
