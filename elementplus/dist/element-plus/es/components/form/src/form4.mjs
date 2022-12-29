import '../../../constants/index2.mjs';
import '../../../utils/index2.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props2.mjs';
import { componentSizes } from '../../../constants/size2.mjs';
import { isArray, isString } from '@vue/shared';
import { isBoolean } from '@vueuse/core';

const formProps = buildProps({
  model: Object,
  rules: {
    type: definePropType(Object)
  },
  labelPosition: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  labelSuffix: {
    type: String,
    default: ""
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    values: componentSizes
  },
  disabled: Boolean,
  validateOnRuleChange: {
    type: Boolean,
    default: true
  },
  hideRequiredAsterisk: {
    type: Boolean,
    default: false
  },
  scrollToError: Boolean
});
const formEmits = {
  validate: (prop, isValid, message) => (isArray(prop) || isString(prop)) && isBoolean(isValid) && isString(message)
};

export { formEmits, formProps };
//# sourceMappingURL=form4.mjs.map
