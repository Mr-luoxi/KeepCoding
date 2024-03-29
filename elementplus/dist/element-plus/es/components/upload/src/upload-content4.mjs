import { NOOP } from '@vue/shared';
import '../../../utils/index2.mjs';
import { uploadBaseProps } from './upload4.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props2.mjs';
import { mutable } from '../../../utils/typescript2.mjs';

const uploadContentProps = buildProps({
  ...uploadBaseProps,
  fileList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  beforeUpload: {
    type: definePropType(Function),
    default: NOOP
  },
  onRemove: {
    type: definePropType(Function),
    default: NOOP
  },
  onStart: {
    type: definePropType(Function),
    default: NOOP
  },
  onSuccess: {
    type: definePropType(Function),
    default: NOOP
  },
  onProgress: {
    type: definePropType(Function),
    default: NOOP
  },
  onError: {
    type: definePropType(Function),
    default: NOOP
  },
  onExceed: {
    type: definePropType(Function),
    default: NOOP
  }
});

export { uploadContentProps };
//# sourceMappingURL=upload-content4.mjs.map
