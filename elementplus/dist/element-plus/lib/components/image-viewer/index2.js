'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index2.js');
var imageViewer$1 = require('./src/image-viewer3.js');
var imageViewer = require('./src/image-viewer4.js');
var install = require('../../utils/vue/install2.js');

const ElImageViewer = install.withInstall(imageViewer$1["default"]);

exports.imageViewerEmits = imageViewer.imageViewerEmits;
exports.imageViewerProps = imageViewer.imageViewerProps;
exports.ElImageViewer = ElImageViewer;
exports["default"] = ElImageViewer;
//# sourceMappingURL=index2.js.map
