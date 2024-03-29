import '../../utils/index2.mjs';
import Dropdown from './src/dropdown3.mjs';
import DropdownItem from './src/dropdown-item2.mjs';
import DropdownMenu from './src/dropdown-menu2.mjs';
export { DROPDOWN_COLLECTION_INJECTION_KEY, DROPDOWN_COLLECTION_ITEM_INJECTION_KEY, ElCollection, ElCollectionItem, FIRST_KEYS, FIRST_LAST_KEYS, LAST_KEYS, dropdownItemProps, dropdownMenuProps, dropdownProps } from './src/dropdown4.mjs';
export { DROPDOWN_INJECTION_KEY } from './src/tokens2.mjs';
import { withInstall, withNoopInstall } from '../../utils/vue/install2.mjs';

const ElDropdown = withInstall(Dropdown, {
  DropdownItem,
  DropdownMenu
});
const ElDropdownItem = withNoopInstall(DropdownItem);
const ElDropdownMenu = withNoopInstall(DropdownMenu);

export { ElDropdown, ElDropdownItem, ElDropdownMenu, ElDropdown as default };
//# sourceMappingURL=index2.mjs.map
