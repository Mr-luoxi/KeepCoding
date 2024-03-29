'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
require('../../../constants/index2.js');
var props = require('../../../utils/vue/props2.js');
var event = require('../../../constants/event2.js');

const calendarProps = props.buildProps({
  modelValue: {
    type: Date
  },
  range: {
    type: props.definePropType(Array),
    validator: (range) => Array.isArray(range) && range.length === 2 && range.every((item) => item instanceof Date)
  }
});
const calendarEmits = {
  [event.UPDATE_MODEL_EVENT]: (value) => value instanceof Date,
  input: (value) => value instanceof Date
};

exports.calendarEmits = calendarEmits;
exports.calendarProps = calendarProps;
//# sourceMappingURL=calendar4.js.map
