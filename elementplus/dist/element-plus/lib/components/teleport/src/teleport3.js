'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var props = require('../../../utils/vue/props2.js');

const teleportProps = props.buildProps({
  container: {
    type: props.definePropType(String),
    default: "body"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  style: {
    type: props.definePropType([String, Array, Object])
  },
  zIndex: {
    type: String,
    default: "2000"
  }
});

exports.teleportProps = teleportProps;
//# sourceMappingURL=teleport3.js.map
