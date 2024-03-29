import '../../../utils/index2.mjs';
import { buildProps } from '../../../utils/vue/props2.mjs';
import { iconPropType } from '../../../utils/vue/icon2.mjs';

const breadcrumbProps = buildProps({
  separator: {
    type: String,
    default: "/"
  },
  separatorIcon: {
    type: iconPropType,
    default: ""
  }
});

export { breadcrumbProps };
//# sourceMappingURL=breadcrumb4.mjs.map
