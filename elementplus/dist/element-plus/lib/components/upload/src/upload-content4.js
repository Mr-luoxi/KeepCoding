'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var shared = require('@vue/shared');
require('../../../utils/index2.js');
var upload = require('./upload4.js');
var props = require('../../../utils/vue/props2.js');
var typescript = require('../../../utils/typescript2.js');

const uploadContentProps = props.buildProps({
  ...upload.uploadBaseProps,
  fileList: {
    type: props.definePropType(Array),
    default: () => typescript.mutable([])
  },
  beforeUpload: {
    type: props.definePropType(Function),
    default: shared.NOOP
  },
  onRemove: {
    type: props.definePropType(Function),
    default: shared.NOOP
  },
  onStart: {
    type: props.definePropType(Function),
    default: shared.NOOP
  },
  onSuccess: {
    type: props.definePropType(Function),
    default: shared.NOOP
  },
  onProgress: {
    type: props.definePropType(Function),
    default: shared.NOOP
  },
  onError: {
    type: props.definePropType(Function),
    default: shared.NOOP
  },
  onExceed: {
    type: props.definePropType(Function),
    default: shared.NOOP
  }
});

exports.uploadContentProps = uploadContentProps;
//# sourceMappingURL=upload-content4.js.map
