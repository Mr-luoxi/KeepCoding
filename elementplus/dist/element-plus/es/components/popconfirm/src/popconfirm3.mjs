import '../../button/index2.mjs';
import { QuestionFilled } from '@element-plus/icons-vue';
import '../../../utils/index2.mjs';
import '../../tooltip/index2.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props2.mjs';
import { buttonTypes } from '../../button/src/button4.mjs';
import { iconPropType } from '../../../utils/vue/icon2.mjs';
import { useTooltipContentProps } from '../../tooltip/src/tooltip4.mjs';

const popconfirmProps = buildProps({
  title: {
    type: String
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonType: {
    type: String,
    values: buttonTypes,
    default: "primary"
  },
  cancelButtonType: {
    type: String,
    values: buttonTypes,
    default: "text"
  },
  icon: {
    type: iconPropType,
    default: QuestionFilled
  },
  iconColor: {
    type: String,
    default: "#f90"
  },
  hideIcon: {
    type: Boolean,
    default: false
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  onConfirm: {
    type: definePropType(Function)
  },
  onCancel: {
    type: definePropType(Function)
  },
  teleported: useTooltipContentProps.teleported,
  persistent: useTooltipContentProps.persistent
});

export { popconfirmProps };
//# sourceMappingURL=popconfirm3.mjs.map
