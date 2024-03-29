'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index2.js');
var upload$1 = require('./src/upload3.js');
var upload = require('./src/upload4.js');
var uploadContent = require('./src/upload-content4.js');
var uploadList = require('./src/upload-list3.js');
var uploadDragger = require('./src/upload-dragger3.js');
var install = require('../../utils/vue/install2.js');

const ElUpload = install.withInstall(upload$1["default"]);

exports.genFileId = upload.genFileId;
exports.uploadBaseProps = upload.uploadBaseProps;
exports.uploadListTypes = upload.uploadListTypes;
exports.uploadProps = upload.uploadProps;
exports.uploadContentProps = uploadContent.uploadContentProps;
exports.uploadListEmits = uploadList.uploadListEmits;
exports.uploadListProps = uploadList.uploadListProps;
exports.uploadDraggerEmits = uploadDragger.uploadDraggerEmits;
exports.uploadDraggerProps = uploadDragger.uploadDraggerProps;
exports.ElUpload = ElUpload;
exports["default"] = ElUpload;
//# sourceMappingURL=index2.js.map
