import { Close, SuccessFilled, InfoFilled, WarningFilled, CircleCloseFilled, Loading, CircleCheck, CircleClose } from '@element-plus/icons-vue';
import { definePropType } from './props2.mjs';

const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const CloseComponents = {
  Close
};
const TypeComponents = {
  Close,
  SuccessFilled,
  InfoFilled,
  WarningFilled,
  CircleCloseFilled
};
const TypeComponentsMap = {
  success: SuccessFilled,
  warning: WarningFilled,
  error: CircleCloseFilled,
  info: InfoFilled
};
const ValidateComponentsMap = {
  validating: Loading,
  success: CircleCheck,
  error: CircleClose
};

export { CloseComponents, TypeComponents, TypeComponentsMap, ValidateComponentsMap, iconPropType };
//# sourceMappingURL=icon2.mjs.map
