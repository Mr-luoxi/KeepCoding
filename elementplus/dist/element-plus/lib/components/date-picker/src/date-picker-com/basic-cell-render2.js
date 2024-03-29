'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../../utils/index2.js');
var datePicker_type = require('../date-picker.type2.js');
var props = require('../../../../utils/vue/props2.js');

var ElDatePickerCell = vue.defineComponent({
  name: "ElDatePickerCell",
  props: props.buildProps({
    cell: {
      type: props.definePropType(Object)
    }
  }),
  setup(props) {
    const picker = vue.inject(datePicker_type.ROOT_PICKER_INJECTION_KEY);
    return () => {
      const cell = props.cell;
      if (picker == null ? void 0 : picker.ctx.slots.default) {
        const list = picker.ctx.slots.default(cell).filter((item) => {
          return item.patchFlag !== -2 && item.type.toString() !== "Symbol(Comment)";
        });
        if (list.length) {
          return list;
        }
      }
      return vue.h("div", {
        class: "el-date-table-cell"
      }, [
        vue.h("span", {
          class: "el-date-table-cell__text"
        }, [cell == null ? void 0 : cell.text])
      ]);
    };
  }
});

exports["default"] = ElDatePickerCell;
//# sourceMappingURL=basic-cell-render2.js.map
