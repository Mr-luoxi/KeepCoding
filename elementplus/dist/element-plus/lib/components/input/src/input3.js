'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var shared = require('@vue/shared');
require('../../../utils/index2.js');
require('../../../constants/index2.js');
require('../../../hooks/index2.js');
var props = require('../../../utils/vue/props2.js');
var index = require('../../../hooks/use-common-props/index2.js');
var icon = require('../../../utils/vue/icon2.js');
var typescript = require('../../../utils/typescript2.js');
var event = require('../../../constants/event2.js');

const inputProps = props.buildProps({
  size: index.useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: props.definePropType([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: props.definePropType([Boolean, Object]),
    default: false
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String,
    default: ""
  },
  readonly: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  suffixIcon: {
    type: icon.iconPropType,
    default: ""
  },
  prefixIcon: {
    type: icon.iconPropType,
    default: ""
  },
  label: {
    type: String
  },
  tabindex: {
    type: [Number, String]
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  inputStyle: {
    type: props.definePropType([Object, Array, String]),
    default: () => typescript.mutable({})
  }
});
const inputEmits = {
  [event.UPDATE_MODEL_EVENT]: (value) => shared.isString(value),
  input: (value) => shared.isString(value),
  change: (value) => shared.isString(value),
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt) => evt instanceof MouseEvent,
  mouseenter: (evt) => evt instanceof MouseEvent,
  keydown: (evt) => evt instanceof Event,
  compositionstart: (evt) => evt instanceof CompositionEvent,
  compositionupdate: (evt) => evt instanceof CompositionEvent,
  compositionend: (evt) => evt instanceof CompositionEvent
};

exports.inputEmits = inputEmits;
exports.inputProps = inputProps;
//# sourceMappingURL=input3.js.map
