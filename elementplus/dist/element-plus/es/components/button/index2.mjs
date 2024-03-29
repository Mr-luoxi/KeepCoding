import '../../utils/index2.mjs';
import Button from './src/button3.mjs';
import ButtonGroup from './src/button-group4.mjs';
export { buttonEmits, buttonNativeTypes, buttonProps, buttonTypes } from './src/button4.mjs';
import { withInstall, withNoopInstall } from '../../utils/vue/install2.mjs';

const ElButton = withInstall(Button, {
  ButtonGroup
});
const ElButtonGroup = withNoopInstall(ButtonGroup);

export { ElButton, ElButtonGroup, ElButton as default };
//# sourceMappingURL=index2.mjs.map
