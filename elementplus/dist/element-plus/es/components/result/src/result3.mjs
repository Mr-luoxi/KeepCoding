import '../../../utils/index2.mjs';
import { CircleCheckFilled, WarningFilled, CircleCloseFilled, InfoFilled } from '@element-plus/icons-vue';
import { buildProps } from '../../../utils/vue/props2.mjs';

const IconMap = {
  success: "icon-success",
  warning: "icon-warning",
  error: "icon-error",
  info: "icon-info"
};
const IconComponentMap = {
  [IconMap.success]: CircleCheckFilled,
  [IconMap.warning]: WarningFilled,
  [IconMap.error]: CircleCloseFilled,
  [IconMap.info]: InfoFilled
};
const resultProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  subTitle: {
    type: String,
    default: ""
  },
  icon: {
    values: ["success", "warning", "info", "error"],
    default: "info"
  }
});

export { IconComponentMap, IconMap, resultProps };
//# sourceMappingURL=result3.mjs.map
