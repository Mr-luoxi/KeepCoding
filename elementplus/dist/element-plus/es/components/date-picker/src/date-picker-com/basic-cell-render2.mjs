import { defineComponent, inject, h } from 'vue';
import '../../../../utils/index2.mjs';
import { ROOT_PICKER_INJECTION_KEY } from '../date-picker.type2.mjs';
import { buildProps, definePropType } from '../../../../utils/vue/props2.mjs';

var ElDatePickerCell = defineComponent({
  name: "ElDatePickerCell",
  props: buildProps({
    cell: {
      type: definePropType(Object)
    }
  }),
  setup(props) {
    const picker = inject(ROOT_PICKER_INJECTION_KEY);
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
      return h("div", {
        class: "el-date-table-cell"
      }, [
        h("span", {
          class: "el-date-table-cell__text"
        }, [cell == null ? void 0 : cell.text])
      ]);
    };
  }
});

export { ElDatePickerCell as default };
//# sourceMappingURL=basic-cell-render2.mjs.map
