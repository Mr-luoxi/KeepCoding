'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var props = require('../../../utils/vue/props2.js');
var icon = require('../../../utils/vue/icon2.js');

const breadcrumbProps = props.buildProps({
  separator: {
    type: String,
    default: "/"
  },
  separatorIcon: {
    type: icon.iconPropType,
    default: ""
  }
});

exports.breadcrumbProps = breadcrumbProps;
//# sourceMappingURL=breadcrumb4.js.map
