import '../../../utils/index2.mjs';
import { buildProps } from '../../../utils/vue/props2.mjs';

const carouselItemProps = buildProps({
  name: { type: String, default: "" },
  label: {
    type: [String, Number],
    default: ""
  }
});

export { carouselItemProps };
//# sourceMappingURL=carousel-item4.mjs.map
