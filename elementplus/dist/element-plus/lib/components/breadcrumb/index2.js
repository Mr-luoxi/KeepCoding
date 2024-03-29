'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index2.js');
var breadcrumb$1 = require('./src/breadcrumb3.js');
var breadcrumbItem$1 = require('./src/breadcrumb-item3.js');
var breadcrumb = require('./src/breadcrumb4.js');
var breadcrumbItem = require('./src/breadcrumb-item4.js');
var install = require('../../utils/vue/install2.js');

const ElBreadcrumb = install.withInstall(breadcrumb$1["default"], {
  BreadcrumbItem: breadcrumbItem$1["default"]
});
const ElBreadcrumbItem = install.withNoopInstall(breadcrumbItem$1["default"]);

exports.breadcrumbProps = breadcrumb.breadcrumbProps;
exports.breadcrumbItemProps = breadcrumbItem.breadcrumbItemProps;
exports.ElBreadcrumb = ElBreadcrumb;
exports.ElBreadcrumbItem = ElBreadcrumbItem;
exports["default"] = ElBreadcrumb;
//# sourceMappingURL=index2.js.map
