'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
require('../../../constants/index2.js');
var props = require('../../../utils/vue/props2.js');
var size = require('../../../constants/size2.js');
var icon = require('../../../utils/vue/icon2.js');

const avatarProps = props.buildProps({
  size: {
    type: [Number, String],
    values: size.componentSizes,
    default: "",
    validator: (val) => typeof val === "number"
  },
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: icon.iconPropType
  },
  src: {
    type: String,
    default: ""
  },
  alt: String,
  srcSet: String,
  fit: {
    type: props.definePropType(String),
    default: "cover"
  }
});
const avatarEmits = {
  error: (evt) => evt instanceof Event
};

exports.avatarEmits = avatarEmits;
exports.avatarProps = avatarProps;
//# sourceMappingURL=avatar3.js.map
