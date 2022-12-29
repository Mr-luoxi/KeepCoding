import '../../../utils/index2.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props2.mjs';

const widthType = {
  type: Number,
  default: void 0
};
const tableV2ColumnProps = buildProps({
  align: {
    type: definePropType(String),
    default: "left"
  },
  class: String,
  fixed: {
    type: definePropType([String, Boolean]),
    default: false
  },
  headerClass: String,
  hidden: Boolean,
  resizable: Boolean,
  style: {
    type: definePropType(Object)
  },
  sortable: Boolean,
  title: String,
  maxWidth: widthType,
  minWidth: widthType,
  width: {
    type: Number,
    required: true
  },
  cellRenderer: {
    type: definePropType([Function, Object])
  },
  headerRenderer: {
    type: definePropType([Function, Object])
  }
});

export { tableV2ColumnProps };
//# sourceMappingURL=column2.mjs.map
