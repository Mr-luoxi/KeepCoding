'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index2.js');
var dropdown$1 = require('./src/dropdown3.js');
var dropdownItem = require('./src/dropdown-item2.js');
var dropdownMenu = require('./src/dropdown-menu2.js');
var dropdown = require('./src/dropdown4.js');
var tokens = require('./src/tokens2.js');
var install = require('../../utils/vue/install2.js');

const ElDropdown = install.withInstall(dropdown$1["default"], {
  DropdownItem: dropdownItem["default"],
  DropdownMenu: dropdownMenu["default"]
});
const ElDropdownItem = install.withNoopInstall(dropdownItem["default"]);
const ElDropdownMenu = install.withNoopInstall(dropdownMenu["default"]);

exports.DROPDOWN_COLLECTION_INJECTION_KEY = dropdown.DROPDOWN_COLLECTION_INJECTION_KEY;
exports.DROPDOWN_COLLECTION_ITEM_INJECTION_KEY = dropdown.DROPDOWN_COLLECTION_ITEM_INJECTION_KEY;
exports.ElCollection = dropdown.ElCollection;
exports.ElCollectionItem = dropdown.ElCollectionItem;
exports.FIRST_KEYS = dropdown.FIRST_KEYS;
exports.FIRST_LAST_KEYS = dropdown.FIRST_LAST_KEYS;
exports.LAST_KEYS = dropdown.LAST_KEYS;
exports.dropdownItemProps = dropdown.dropdownItemProps;
exports.dropdownMenuProps = dropdown.dropdownMenuProps;
exports.dropdownProps = dropdown.dropdownProps;
exports.DROPDOWN_INJECTION_KEY = tokens.DROPDOWN_INJECTION_KEY;
exports.ElDropdown = ElDropdown;
exports.ElDropdownItem = ElDropdownItem;
exports.ElDropdownMenu = ElDropdownMenu;
exports["default"] = ElDropdown;
//# sourceMappingURL=index2.js.map
