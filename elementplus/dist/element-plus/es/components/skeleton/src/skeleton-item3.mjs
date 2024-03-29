import '../../../utils/index2.mjs';
import { buildProps } from '../../../utils/vue/props2.mjs';

const skeletonItemProps = buildProps({
  variant: {
    type: String,
    values: [
      "circle",
      "rect",
      "h1",
      "h3",
      "text",
      "caption",
      "p",
      "image",
      "button"
    ],
    default: "text"
  }
});

export { skeletonItemProps };
//# sourceMappingURL=skeleton-item3.mjs.map
