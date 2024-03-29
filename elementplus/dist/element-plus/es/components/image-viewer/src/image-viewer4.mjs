import '../../../utils/index2.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props2.mjs';
import { mutable } from '../../../utils/typescript2.mjs';

const imageViewerProps = buildProps({
  urlList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  zIndex: {
    type: Number
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
    type: Boolean,
    default: true
  },
  hideOnClickModal: {
    type: Boolean,
    default: false
  },
  teleported: {
    type: Boolean,
    default: false
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  }
});
const imageViewerEmits = {
  close: () => true,
  switch: (index) => typeof index === "number"
};

export { imageViewerEmits, imageViewerProps };
//# sourceMappingURL=image-viewer4.mjs.map
