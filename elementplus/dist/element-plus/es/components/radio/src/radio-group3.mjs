import '../../../utils/index2.mjs';
import '../../../hooks/index2.mjs';
import { radioEmits } from './radio3.mjs';
import { buildProps } from '../../../utils/vue/props2.mjs';
import { useSizeProp } from '../../../hooks/use-common-props/index2.mjs';

const radioGroupProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  fill: {
    type: String,
    default: ""
  },
  textColor: {
    type: String,
    default: ""
  }
});
const radioGroupEmits = radioEmits;

export { radioGroupEmits, radioGroupProps };
//# sourceMappingURL=radio-group3.mjs.map
