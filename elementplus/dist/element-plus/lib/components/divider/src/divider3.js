'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var props = require('../../../utils/vue/props2.js');

const dividerProps = props.buildProps({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  contentPosition: {
    type: String,
    values: ["left", "center", "right"],
    default: "center"
  },
  borderStyle: {
    type: props.definePropType(String),
    default: "solid"
  }
});

exports.dividerProps = dividerProps;
//# sourceMappingURL=divider3.js.map
