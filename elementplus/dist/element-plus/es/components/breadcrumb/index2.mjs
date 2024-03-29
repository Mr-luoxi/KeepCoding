import '../../utils/index2.mjs';
import Breadcrumb from './src/breadcrumb3.mjs';
import BreadcrumbItem from './src/breadcrumb-item3.mjs';
export { breadcrumbProps } from './src/breadcrumb4.mjs';
export { breadcrumbItemProps } from './src/breadcrumb-item4.mjs';
import { withInstall, withNoopInstall } from '../../utils/vue/install2.mjs';

const ElBreadcrumb = withInstall(Breadcrumb, {
  BreadcrumbItem
});
const ElBreadcrumbItem = withNoopInstall(BreadcrumbItem);

export { ElBreadcrumb, ElBreadcrumbItem, ElBreadcrumb as default };
//# sourceMappingURL=index2.mjs.map
