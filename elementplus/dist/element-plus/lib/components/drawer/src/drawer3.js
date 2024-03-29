'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
require('../../dialog/index2.js');
var props = require('../../../utils/vue/props2.js');
var dialog = require('../../dialog/src/dialog4.js');

const drawerProps = props.buildProps({
  ...dialog.dialogProps,
  direction: {
    type: String,
    default: "rtl",
    values: ["ltr", "rtl", "ttb", "btt"]
  },
  size: {
    type: [String, Number],
    default: "30%"
  },
  withHeader: {
    type: Boolean,
    default: true
  },
  modalFade: {
    type: Boolean,
    default: true
  }
});
const drawerEmits = dialog.dialogEmits;

exports.drawerEmits = drawerEmits;
exports.drawerProps = drawerProps;
//# sourceMappingURL=drawer3.js.map
