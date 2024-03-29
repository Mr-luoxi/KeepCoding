'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index2.js');
var carousel$1 = require('./src/carousel3.js');
var carouselItem$1 = require('./src/carousel-item3.js');
var carousel = require('./src/carousel4.js');
var carouselItem = require('./src/carousel-item4.js');
var install = require('../../utils/vue/install2.js');

const ElCarousel = install.withInstall(carousel$1["default"], {
  CarouselItem: carouselItem$1["default"]
});
const ElCarouselItem = install.withNoopInstall(carouselItem$1["default"]);

exports.carouselEmits = carousel.carouselEmits;
exports.carouselProps = carousel.carouselProps;
exports.carouselItemProps = carouselItem.carouselItemProps;
exports.ElCarousel = ElCarousel;
exports.ElCarouselItem = ElCarouselItem;
exports["default"] = ElCarousel;
//# sourceMappingURL=index2.js.map
