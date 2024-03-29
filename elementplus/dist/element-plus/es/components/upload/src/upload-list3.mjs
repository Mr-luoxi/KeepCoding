import { NOOP } from '@vue/shared';
import '../../../utils/index2.mjs';
import { uploadListTypes } from './upload4.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props2.mjs';
import { mutable } from '../../../utils/typescript2.mjs';

const uploadListProps = buildProps({
  files: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  disabled: {
    type: Boolean,
    default: false
  },
  handlePreview: {
    type: definePropType(Function),
    default: NOOP
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: "text"
  }
});
const uploadListEmits = {
  remove: (file) => !!file
};

export { uploadListEmits, uploadListProps };
//# sourceMappingURL=upload-list3.mjs.map
