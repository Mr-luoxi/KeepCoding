import '../../utils/index2.mjs';
import Upload from './src/upload3.mjs';
export { genFileId, uploadBaseProps, uploadListTypes, uploadProps } from './src/upload4.mjs';
export { uploadContentProps } from './src/upload-content4.mjs';
export { uploadListEmits, uploadListProps } from './src/upload-list3.mjs';
export { uploadDraggerEmits, uploadDraggerProps } from './src/upload-dragger3.mjs';
import { withInstall } from '../../utils/vue/install2.mjs';

const ElUpload = withInstall(Upload);

export { ElUpload, ElUpload as default };
//# sourceMappingURL=index2.mjs.map
