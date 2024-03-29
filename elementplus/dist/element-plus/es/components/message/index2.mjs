import '../../utils/index2.mjs';
import message from './src/message-method2.mjs';
export { messageEmits, messageProps, messageTypes } from './src/message4.mjs';
import { withInstallFunction } from '../../utils/vue/install2.mjs';

const ElMessage = withInstallFunction(message, "$message");

export { ElMessage, ElMessage as default };
//# sourceMappingURL=index2.mjs.map
