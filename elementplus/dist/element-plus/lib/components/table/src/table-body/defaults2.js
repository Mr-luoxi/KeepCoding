'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const defaultProps = {
  store: {
    required: true,
    type: Object
  },
  stripe: Boolean,
  tooltipEffect: String,
  context: {
    default: () => ({}),
    type: Object
  },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: {
    type: String,
    default: ""
  },
  highlight: Boolean
};

exports["default"] = defaultProps;
//# sourceMappingURL=defaults2.js.map
