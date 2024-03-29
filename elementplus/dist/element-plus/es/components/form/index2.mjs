import '../../utils/index2.mjs';
import Form from './src/form3.mjs';
import FormItem from './src/form-item4.mjs';
export { formEmits, formProps } from './src/form4.mjs';
export { formItemProps, formItemValidateStates } from './src/form-item3.mjs';
import './src/types2.mjs';
import { withInstall, withNoopInstall } from '../../utils/vue/install2.mjs';

const ElForm = withInstall(Form, {
  FormItem
});
const ElFormItem = withNoopInstall(FormItem);

export { ElForm, ElFormItem, ElForm as default };
//# sourceMappingURL=index2.mjs.map
