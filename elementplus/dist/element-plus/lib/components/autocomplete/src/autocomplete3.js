'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var shared = require('@vue/shared');
require('../../../utils/index2.js');
require('../../tooltip/index2.js');
require('../../../constants/index2.js');
var props = require('../../../utils/vue/props2.js');
var tooltip = require('../../tooltip/src/tooltip4.js');
var event = require('../../../constants/event2.js');

const autocompleteProps = props.buildProps({
  valueKey: {
    type: String,
    default: "value"
  },
  modelValue: {
    type: [String, Number],
    default: ""
  },
  debounce: {
    type: Number,
    default: 300
  },
  placement: {
    type: props.definePropType(String),
    values: [
      "top",
      "top-start",
      "top-end",
      "bottom",
      "bottom-start",
      "bottom-end"
    ],
    default: "bottom-start"
  },
  fetchSuggestions: {
    type: props.definePropType([Function, Array]),
    default: shared.NOOP
  },
  popperClass: {
    type: String,
    default: ""
  },
  triggerOnFocus: {
    type: Boolean,
    default: true
  },
  selectWhenUnmatched: {
    type: Boolean,
    default: false
  },
  hideLoading: {
    type: Boolean,
    default: false
  },
  popperAppendToBody: {
    type: Boolean,
    default: void 0
  },
  teleported: tooltip.useTooltipContentProps.teleported,
  highlightFirstItem: {
    type: Boolean,
    default: false
  }
});
const autocompleteEmits = {
  [event.UPDATE_MODEL_EVENT]: (value) => shared.isString(value),
  input: (value) => shared.isString(value),
  change: (value) => shared.isString(value),
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  clear: () => true,
  select: (item) => shared.isObject(item)
};

exports.autocompleteEmits = autocompleteEmits;
exports.autocompleteProps = autocompleteProps;
//# sourceMappingURL=autocomplete3.js.map
