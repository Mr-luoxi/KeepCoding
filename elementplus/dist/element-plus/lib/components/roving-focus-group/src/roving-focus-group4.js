'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
require('../../collection/index2.js');
var props = require('../../../utils/vue/props2.js');
var collection = require('../../collection/src/collection3.js');

const rovingFocusGroupProps = props.buildProps({
  style: { type: props.definePropType([String, Array, Object]) },
  currentTabId: {
    type: props.definePropType(String)
  },
  defaultCurrentTabId: String,
  loop: Boolean,
  dir: {
    type: String,
    values: ["ltr", "rtl"],
    default: "ltr"
  },
  orientation: {
    type: props.definePropType(String)
  },
  onBlur: Function,
  onFocus: Function,
  onMousedown: Function
});
const {
  ElCollection,
  ElCollectionItem,
  COLLECTION_INJECTION_KEY,
  COLLECTION_ITEM_INJECTION_KEY
} = collection.createCollectionWithScope("RovingFocusGroup");

exports.ElCollection = ElCollection;
exports.ElCollectionItem = ElCollectionItem;
exports.ROVING_FOCUS_COLLECTION_INJECTION_KEY = COLLECTION_INJECTION_KEY;
exports.ROVING_FOCUS_ITEM_COLLECTION_INJECTION_KEY = COLLECTION_ITEM_INJECTION_KEY;
exports.rovingFocusGroupProps = rovingFocusGroupProps;
//# sourceMappingURL=roving-focus-group4.js.map
