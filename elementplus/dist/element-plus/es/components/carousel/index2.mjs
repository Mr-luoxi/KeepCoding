import '../../utils/index2.mjs';
import Carousel from './src/carousel3.mjs';
import CarouselItem from './src/carousel-item3.mjs';
export { carouselEmits, carouselProps } from './src/carousel4.mjs';
export { carouselItemProps } from './src/carousel-item4.mjs';
import { withInstall, withNoopInstall } from '../../utils/vue/install2.mjs';

const ElCarousel = withInstall(Carousel, {
  CarouselItem
});
const ElCarouselItem = withNoopInstall(CarouselItem);

export { ElCarousel, ElCarouselItem, ElCarousel as default };
//# sourceMappingURL=index2.mjs.map
