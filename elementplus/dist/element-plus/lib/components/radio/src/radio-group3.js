'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
require('../../../hooks/index2.js');
var radio = require('./radio3.js');
var props = require('../../../utils/vue/props2.js');
var index = require('../../../hooks/use-common-props/index2.js');

const radioGroupProps = props.buildProps({
  size: index.useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  fill: {
    type: String,
    default: ""
  },
  textColor: {
    type: String,
    default: ""
  }
});
const radioGroupEmits = radio.radioEmits;

exports.radioGroupEmits = radioGroupEmits;
exports.radioGroupProps = radioGroupProps;
//# sourceMappingURL=radio-group3.js.map
