'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var props = require('../../../utils/vue/props2.js');
var objects = require('../../../utils/objects2.js');
var icon = require('../../../utils/vue/icon2.js');

const alertEffects = ["light", "dark"];
const alertProps = props.buildProps({
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: objects.keysOf(icon.TypeComponentsMap),
    default: "info"
  },
  closable: {
    type: Boolean,
    default: true
  },
  closeText: {
    type: String,
    default: ""
  },
  showIcon: Boolean,
  center: Boolean,
  effect: {
    type: String,
    values: alertEffects,
    default: "light"
  }
});
const alertEmits = {
  close: (evt) => evt instanceof MouseEvent
};

exports.alertEffects = alertEffects;
exports.alertEmits = alertEmits;
exports.alertProps = alertProps;
//# sourceMappingURL=alert4.js.map
